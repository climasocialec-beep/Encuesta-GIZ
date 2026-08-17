const express = require('express');
const path = require('path');
const fs = require('fs');
const ExcelJS = require('exceljs');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 10000;
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

app.use(express.json({ limit: '5mb' }));
const staticOptions = { setHeaders: response => response.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate') };
app.use(express.static(path.join(__dirname, 'public'), staticOptions));
app.use('/brand-assets', express.static(path.join(__dirname, '..', 'assets'), staticOptions));

app.post('/import/xlsx', upload.single('file'), async (req, res) => {
  if (req.get('x-app-role') !== 'supervisor') return res.status(403).json({ error: 'Solo el supervisor puede importar bases' });
  if (!req.file) return res.status(400).json({ error: 'No se recibió ningún archivo' });
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(req.file.buffer);
    const baseName = String(req.body.baseName || req.file.originalname.replace(/\.xlsx$/i, '')).trim();
    const facilitatorSheet = workbook.worksheets.find(item => item.name.trim().toUpperCase() === 'FACILITADOR');
    if (facilitatorSheet) {
      const result = parseLegacySheet(facilitatorSheet, baseName);
      return res.json(result);
    }
    const operatorSheets = workbook.worksheets.filter(item => {
      const name = item.name.trim().toUpperCase();
      return !name.startsWith('HOJA') && name !== 'SHEET';
    });
    if (!operatorSheets.length) return res.status(400).json({ error: 'El archivo no contiene hojas con contactos' });
    const allContacts = [];
    const sheetStats = [];
    let skippedRows = 0;
    let missingPhone = 0;
    let duplicateIds = 0;
    const seenIds = new Set();
    for (const sheet of operatorSheets) {
      const headers = sheet.getRow(1).values.slice(1).map(value => normalizeImportHeader(value));
      const hasCod = headers.includes('cod') || headers.includes('n') || headers.includes('id') || headers.includes('codigo') || headers.includes('codigo_de_encuestador');
      const hasTelefono = headers.some(header => header === 'telefono' || header === 'contacto' || header === 'celular');
      if (!hasCod || !hasTelefono) { sheetStats.push({ sheet: sheet.name, imported: 0, reason: 'encabezados no reconocidos' }); continue; }
      let sheetCount = 0;
      for (let rowNumber = 2; rowNumber <= sheet.rowCount; rowNumber += 1) {
        const values = sheet.getRow(rowNumber).values.slice(1).map(getCellText);
        if (values.every(value => !value.trim())) { skippedRows += 1; continue; }
        const row = Object.fromEntries(headers.map((header, index) => [header, values[index] || '']));
        const phoneData = normalizePhones(row.telefono || row.contacto || row.celular);
        if (!phoneData.primary) { missingPhone += 1; }
        const rawId = cleanImportText(row.cod || row.n || row.id || row.codigo);
        const id = rawId ? `GIZ-${rawId}` : `IMPORT-${Date.now()}-${rowNumber}`;
        if (seenIds.has(id)) duplicateIds += 1;
        seenIds.add(id);
        const name = cleanImportText(row.id_nombre_entrevistado_a || row.nombres || row.nombre || row.entrevistado) || 'No registra';
        const provinceRaw = cleanImportText(row.provincia || row.provincia_de_residencia || row.ubicacion) || 'No tiene información';
        const province = firstLocationValue(provinceRaw);
        const course = cleanImportText(row.curso || row.nombre_del_curso || row.institucion || row.organizacion) || 'No tiene información';
        allContacts.push({
          id,
          name,
          phone: phoneData.primary || 'No tiene teléfono celular',
          phoneRaw: cleanImportText(row.telefono || row.contacto || row.celular),
          phoneOther: phoneData.others.join(' / '),
          email: cleanImportText(row.correo_electronico || row.correo || row.email),
          parish: cleanImportText(row.parroquia || row.ciudad) || 'No tiene información',
          location: province,
          province,
          provinceRaw,
          city: cleanImportText(row.ciudad) || 'No tiene información',
          organization: course,
          sector: cleanImportText(row.sector) || 'No tiene información',
          cargo: cleanImportText(row.cargo) || 'No tiene información',
          artField: cleanImportText(row.cargo || row.sector || row.curso) || 'No tiene información',
          facilitator: cleanImportText(row.facilitador || row.codigo_de_encuestador),
          sheetName: sheet.name.trim(),
          baseName,
          status: 'pending',
          attempts: 0,
          last: 'Sin gestión',
          pendingReason: 'not_called',
          assignmentRound: 0,
          operator: ''
        });
        sheetCount += 1;
      }
      sheetStats.push({ sheet: sheet.name, imported: sheetCount });
    }
    res.json({ contacts: allContacts, stats: { sheet: operatorSheets.map(sheet => sheet.name).join(', '), totalRows: allContacts.length, imported: allContacts.length, skippedRows, missingName: 0, missingPhone, duplicateIds, baseName, sheetStats } });
  } catch (error) {
    console.error('XLSX import failed:', error);
    res.status(500).json({ error: 'No fue posible leer el archivo Excel' });
  }
});

function parseLegacySheet(sheet, baseName) {
  const headers = sheet.getRow(1).values.slice(1).map(value => normalizeImportHeader(value));
  const contacts = [];
  let skippedRows = 0;
  let missingPhone = 0;
  let missingName = 0;
  const seenIds = new Set();
  let duplicateIds = 0;
  for (let rowNumber = 2; rowNumber <= sheet.rowCount; rowNumber += 1) {
    const values = sheet.getRow(rowNumber).values.slice(1).map(getCellText);
    if (values.every(value => !value.trim())) { skippedRows += 1; continue; }
    const row = Object.fromEntries(headers.map((header, index) => [header, values[index] || '']));
    const name = cleanImportText(row.nombres);
    const phoneData = normalizePhones(row.contacto);
    if (!name) missingName += 1;
    if (!phoneData.primary) missingPhone += 1;
    if (!name && !phoneData.primary) { skippedRows += 1; continue; }
    const rawId = cleanImportText(row.cod);
    const id = rawId || `IMPORT-${Date.now()}-${rowNumber}`;
    if (seenIds.has(id)) duplicateIds += 1;
    seenIds.add(id);
    const provinceRaw = cleanImportText(row.provincia_de_residencia) || 'No tiene información';
    const province = firstLocationValue(provinceRaw);
    const city = cleanImportText(row.ciudad_de_residencia) || 'No tiene información';
    contacts.push({
      id,
      name: name || 'Sin nombre',
      phone: phoneData.primary || 'No tiene teléfono celular',
      phoneRaw: cleanImportText(row.contacto),
      phoneOther: phoneData.others.join(' / '),
      email: cleanImportText(row.correo_electronico),
      parish: city,
      location: province,
      province,
      provinceRaw,
      city,
      organization: cleanImportText(row.organizacion_cultural_a_la_que_pertenece) || 'No tiene información',
      sector: 'No tiene información',
      cargo: 'No tiene información',
      artField: cleanImportText(row.ambito_de_arte) || 'No tiene información',
      facilitator: cleanImportText(row.facilitador),
      sheetName: sheet.name.trim(),
      baseName,
      status: 'pending',
      attempts: 0,
      last: 'Sin gestión',
      pendingReason: 'not_called',
      assignmentRound: 0,
      operator: ''
    });
  }
  return { contacts, stats: { sheet: sheet.name, totalRows: sheet.rowCount - 1, imported: contacts.length, skippedRows, missingName, missingPhone, duplicateIds, baseName, sheetStats: [{ sheet: sheet.name, imported: contacts.length }] } };
}

function normalizeImportHeader(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function getCellText(value) {
  if (value && typeof value === 'object') return String(value.text || value.result || value.hyperlink || '').trim();
  return String(value ?? '').replace(/\u00a0/g, ' ').trim();
}

function cleanImportText(value) {
  const text = String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
  return /^na$|^n\/a$|^-$|^null$/i.test(text) ? '' : text;
}

function firstLocationValue(value) {
  const text = cleanImportText(value);
  if (!text) return 'No tiene información';
  return text.split(/\s+ó\s+|\s+y\s+|,/i)[0].trim() || 'No tiene información';
}

function normalizePhones(value) {
  let text = String(value || '');
  text = text.replace(/[\u2013\u2014]/g, ' - ');
  text = text.replace(/\b(ext\.?|extensión|anexo|int\.?)\s*\d+\b/gi, ' ');
  text = text.replace(/\s+-\s+/g, ' / ');
  let candidates = text.split(/[\/,;|\n]+/).map(part => part.trim()).filter(Boolean);
  candidates = candidates.flatMap(part => {
    const runs = part.match(/\d{7,}/g) || [];
    if (runs.length > 1) return runs;
    return [part];
  });
  const normalized = candidates.map(candidate => {
    const digits = candidate.replace(/\D/g, '');
    if (digits.length === 12 && digits.startsWith('593')) return `0${digits.slice(3)}`;
    if (digits.length === 10 && digits.startsWith('0')) return digits;
    if (digits.length === 9 && digits.startsWith('9')) return `0${digits}`;
    return digits;
  }).filter(Boolean);
  const unique = [...new Set(normalized)];
  const mobile = unique.find(phone => /^09\d{8}$/.test(phone));
  const primary = mobile || unique[0] || '';
  return { primary, others: unique.filter(phone => phone !== primary) };
}

app.post('/export/xlsx', async (req, res) => {
  if (req.get('x-app-role') !== 'supervisor') return res.status(403).json({ error: 'Solo el supervisor puede exportar información' });
  try {
    const contacts = Array.isArray(req.body.contacts) ? req.body.contacts : [];
    const history = Array.isArray(req.body.history) ? req.body.history : [];
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Clima Social';
    workbook.created = new Date();
    workbook.modified = new Date();

    const colors = {
      indigo: '454A91',
      terracotta: 'B23A2E',
      green: '2F6B45',
      mustard: 'C9862E',
      cream: 'F6F1E7',
      soft: 'EFE8DA',
      text: '241E15',
      muted: '7A6D5C',
      white: 'FFFFFF'
    };
    const statusLabels = {
      pending: 'Pendiente',
      callback: 'Pendiente / reintento',
      effective: 'Efectiva',
      'no-answer': 'No contesta',
      no_answer: 'No contesta',
      wrong: 'Número incorrecto',
      wrong_number: 'Número incorrecto',
      refused: 'Rechazó la encuesta',
      discarded: 'Descartado',
      'not-managed': 'No gestionado',
      not_managed: 'No gestionado'
    };
    const formatEcuadorDate = value => new Intl.DateTimeFormat('es-EC', { dateStyle: 'short', timeStyle: 'short', timeZone: 'America/Guayaquil' }).format(new Date(value));
    const font = { name: 'Poppins', size: 11, color: { argb: colors.text } };
    const headerFont = { name: 'Poppins', size: 11, bold: true, color: { argb: colors.white } };
    const logoPath = path.join(__dirname, 'public', 'logo-icon.png');

    const summary = workbook.addWorksheet('Resumen');
    summary.properties.defaultRowHeight = 19;
    summary.getColumn(1).width = 3;
    summary.getColumn(2).width = 12;
    summary.getColumn(3).width = 10;
    summary.getColumn(4).width = 34;
    summary.getColumn(5).width = 20;
    summary.getColumn(6).width = 20;
    summary.getColumn(7).width = 20;
    summary.getRow(2).height = 34;
    summary.getRow(3).height = 22;
    summary.mergeCells('D2:G2');
    summary.getCell('D2').value = '3era Encuesta de Condiciones Laborales en Trabajadores de las Artes y la Cultura';
    summary.getCell('D2').font = { name: 'Poppins', size: 14, bold: true, color: { argb: colors.indigo } };
    summary.getCell('D2').alignment = { vertical: 'middle', wrapText: false };
    summary.mergeCells('D3:G3');
    summary.getCell('D3').value = 'Reporte de gestión de llamadas · Clima Social';
    summary.getCell('D3').font = { name: 'Poppins', size: 10, italic: true, color: { argb: colors.muted } };
    summary.getCell('D3').alignment = { vertical: 'middle' };
    if (fs.existsSync(logoPath)) {
      const imageId = workbook.addImage({ filename: logoPath, extension: 'png' });
      summary.addImage(imageId, { tl: { col: 1, row: 1 }, ext: { width: 64, height: 64 } });
    }
    const managed = contacts.filter(contact => Number(contact.attempts) > 0).length;
    const effective = contacts.filter(contact => contact.status === 'effective').length;
    const pending = contacts.filter(contact => contact.status === 'pending').length;
    const rejected = contacts.filter(contact => contact.status === 'refused').length;
    const summaryRows = [
      ['Indicador', 'Valor'],
      ['Total de contactos', contacts.length],
      ['Contactos gestionados', managed],
      ['Encuestas efectivas', effective],
      ['Pendientes', pending],
      ['Rechazaron la encuesta', rejected],
      ['Bases incluidas', [...new Set(contacts.map(contact => contact.baseName).filter(Boolean))].join(' | ') || 'Sin especificar'],
      ['Fecha de exportación', formatEcuadorDate(new Date())]
    ];
    summary.getCell('B5').value = 'Resumen de campaña';
    summary.getCell('B5').font = { name: 'Poppins', size: 12, bold: true, color: { argb: colors.text } };
    summaryRows.forEach((row, index) => {
      const excelRow = 6 + index;
      summary.getCell(`B${excelRow}`).value = row[0];
      summary.getCell(`C${excelRow}`).value = row[1];
      summary.getCell(`B${excelRow}`).font = index === 0 ? headerFont : font;
      summary.getCell(`C${excelRow}`).font = index === 0 ? headerFont : { ...font, bold: true };
      if (index === 0) {
        summary.getCell(`B${excelRow}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.indigo } };
        summary.getCell(`C${excelRow}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.indigo } };
      } else if (index % 2 === 0) {
        summary.getCell(`B${excelRow}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.cream } };
        summary.getCell(`C${excelRow}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.cream } };
      }
    });
    summary.views = [{ state: 'frozen', ySplit: 5 }];
    summary.pageSetup = { fitToPage: true, fitToWidth: 1, fitToHeight: 0, orientation: 'landscape', paperSize: 9 };

    const contactsSheet = workbook.addWorksheet('Contactos');
    const contactHeaders = ['Identificador', 'Nombre', 'Teléfono', 'Parroquia', 'Ubicación', 'Base', 'Operadora', 'Estado', 'Intentos', 'Última gestión', 'Correo sorteo'];
    contactsSheet.addRow(contactHeaders);
    contacts.forEach(contact => contactsSheet.addRow([
      contact.id,
      contact.name,
      contact.phone,
      contact.parish,
      contact.location,
      contact.baseName || 'Sin especificar',
      contact.operator || 'Sin asignar',
      statusLabels[contact.status] || contact.status,
      contact.attempts || 0,
      contact.last,
      contact.raffleEmail || ''
    ]));
    styleTable(contactsSheet, contactHeaders.length, colors, font, headerFont);
    contactsSheet.autoFilter = { from: 'A1', to: `K${Math.max(1, contactsSheet.rowCount)}` };

    const historySheet = workbook.addWorksheet('Gestiones');
    const historyHeaders = ['Contacto', 'Identificador', 'Base', 'Operadora', 'Intentos', 'Estado actual', 'Historial de gestiones', 'Correo sorteo'];
    historySheet.addRow(historyHeaders);
    const contactById = new Map(contacts.map(contact => [contact.id, contact]));
    const groupedHistory = new Map();
    history.forEach(item => {
      const key = item.id || item.contact;
      if (!groupedHistory.has(key)) groupedHistory.set(key, []);
      groupedHistory.get(key).push(item);
    });
    groupedHistory.forEach(items => {
      const ordered = items.slice().sort((a, b) => Number(a.attempt || 0) - Number(b.attempt || 0));
      const first = ordered[0];
      const contact = contactById.get(first.id) || {};
      const details = ordered.map(item => `#${item.attempt || '-'} ${statusLabels[item.result] || item.result} · ${item.date || 'Sin fecha'}${item.notes ? ` · ${item.notes}` : ''}`).join(' | ');
      historySheet.addRow([
        contact.name || first.contact,
        contact.id || first.id,
        contact.baseName || 'Sin especificar',
        contact.operator || ordered[ordered.length - 1].operator || 'Sin asignar',
        contact.attempts || ordered.length,
        statusLabels[contact.status] || contact.status || statusLabels[first.result] || first.result,
        details,
        contact.raffleEmail || ordered.find(item => item.raffleEmail)?.raffleEmail || ''
      ]);
    });
    styleTable(historySheet, historyHeaders.length, colors, font, headerFont);
    historySheet.getColumn(1).width = 34;
    historySheet.getColumn(3).width = 32;
    historySheet.getColumn(6).width = 26;
    historySheet.getColumn(7).width = 80;
    historySheet.getColumn(8).width = 32;
    historySheet.eachRow((row, rowNumber) => { if (rowNumber > 1) row.height = 42; });
    historySheet.autoFilter = { from: 'A1', to: `H${Math.max(1, historySheet.rowCount)}` };

    const buffer = await workbook.xlsx.writeBuffer();
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="reporte-clima-social-giz-${new Date().toISOString().slice(0, 10)}.xlsx"`);
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error('Excel export failed:', error);
    res.status(500).json({ error: 'No fue posible generar el Excel' });
  }
});

function styleTable(sheet, columnCount, colors, font, headerFont) {
  const widths = [24, 32, 22, 26, 30, 34, 24, 26, 12, 26, 34];
  for (let index = 1; index <= columnCount; index += 1) sheet.getColumn(index).width = widths[index - 1] || 24;
  const header = sheet.getRow(1);
  header.height = 30;
  header.eachCell(cell => {
    cell.font = headerFont;
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.indigo } };
    cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
    cell.border = { bottom: { style: 'thin', color: { argb: colors.mustard } } };
  });
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    row.eachCell(cell => {
      cell.font = font;
      cell.alignment = { vertical: 'middle', wrapText: true };
      if (rowNumber % 2 === 0) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.cream } };
      cell.border = { bottom: { style: 'hair', color: { argb: 'E2D9C9' } } };
    });
  });
  sheet.views = [{ state: 'frozen', ySplit: 1 }];
}

app.get('/config', (_req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || ''
  });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Call Center running on port ${port}`);
});
