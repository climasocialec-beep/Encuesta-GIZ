const express = require('express');
const path = require('path');
const fs = require('fs');
const ExcelJS = require('exceljs');
const multer = require('multer');

// Carga de variables de entorno locales si existe .env
if (fs.existsSync(path.join(__dirname, '.env'))) {
  try {
    const envContent = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
    for (const line of envContent.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const match = trimmed.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const val = match[2].trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) process.env[key] = val;
      }
    }
  } catch (err) {
    console.warn('No fue posible leer el archivo .env:', err.message);
  }
}

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
    const masterSheet = workbook.worksheets.find(item => item.name.trim().toUpperCase().includes('BASE MAESTRA'));
    if (masterSheet) {
      const result = parseMasterCleanSheet(masterSheet, baseName);
      return res.json(result);
    }
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
      let headerRowNumber = 1;
      let headers = [];
      let metaCourseName = '';
      let metaEntidad = '';
      let metaReferencia = '';
      let metaStartDate = '';
      let metaEndDate = '';
      let metaProvincia = '';
      let metaCanton = '';
      let metaBarrio = '';

      function getMetaValue(rowValues, keywordRegex) {
        const matchIdx = rowValues.findIndex(v => keywordRegex.test(v));
        if (matchIdx !== -1) {
          for (let i = matchIdx + 1; i < rowValues.length; i++) {
            const val = cleanImportText(rowValues[i]);
            if (val) return val;
          }
        }
        return '';
      }

      // 1. Scan first 20 rows for metadata and table header
      for (let r = 1; r <= Math.min(sheet.rowCount, 20); r++) {
        const rowValues = sheet.getRow(r).values.slice(1).map(getCellText);
        const rowHeaders = rowValues.map(normalizeImportHeader);
        const hasNameCol = rowHeaders.some(h => ['nombres_y_apellidos', 'nombres', 'nombre', 'entrevistado', 'id_nombre_entrevistado_a'].includes(h));
        const hasPhoneCol = rowHeaders.some(h => ['numero_telefonico', 'telefono', 'celular', 'contacto'].includes(h));

        if (hasNameCol && hasPhoneCol) {
          headerRowNumber = r;
          headers = rowHeaders;
          break;
        }

        const courseVal = getMetaValue(rowValues, /nombre del curso/i);
        if (courseVal) metaCourseName = courseVal;
        const entidadVal = getMetaValue(rowValues, /entidad responsable/i);
        if (entidadVal) metaEntidad = entidadVal;
        const refVal = getMetaValue(rowValues, /persona de referencia/i);
        if (refVal) metaReferencia = refVal;
        const startVal = getMetaValue(rowValues, /fecha de inicio/i);
        if (startVal) metaStartDate = startVal;
        const endVal = getMetaValue(rowValues, /fecha de finalizaci/i);
        if (endVal) metaEndDate = endVal;
      }

      if (!headers.length) {
        headers = sheet.getRow(1).values.slice(1).map(normalizeImportHeader);
      }

      const hasCod = headers.includes('cod') || headers.includes('n') || headers.includes('id') || headers.includes('codigo') || headers.includes('codigo_de_encuestador') || headers.includes('no');
      const hasTelefono = headers.some(header => ['numero_telefonico', 'telefono', 'celular', 'contacto'].includes(header) || header.includes('telefono'));
      if (!hasTelefono) { sheetStats.push({ sheet: sheet.name, imported: 0, reason: 'encabezados no reconocidos' }); continue; }

      let sheetCount = 0;
      for (let rowNumber = headerRowNumber + 1; rowNumber <= sheet.rowCount; rowNumber += 1) {
        const values = sheet.getRow(rowNumber).values.slice(1).map(getCellText);
        if (values.every(value => !value.trim())) { skippedRows += 1; continue; }
        const row = Object.fromEntries(headers.map((header, index) => [header, values[index] || '']));
        const phoneData = normalizePhones(row.numero_telefonico || row.telefono || row.contacto || row.celular);
        if (!phoneData.primary) { missingPhone += 1; }
        const rawId = cleanImportText(row.n || row.no || row.cod || row.id || row.codigo);
        const id = rawId ? `GIZ-${String(rawId).padStart(3, '0')}` : `IMPORT-${Date.now()}-${rowNumber}`;
        if (seenIds.has(id)) duplicateIds += 1;
        seenIds.add(id);
        const name = cleanImportText(row.nombres_y_apellidos || row.id_nombre_entrevistado_a || row.nombres || row.nombre || row.entrevistado) || 'No registra';
        const barrio = cleanImportText(row.barrio || row.parroquia) || metaBarrio || 'Durán';
        const canton = cleanImportText(row.canton || row.canton_de_residencia) || metaCanton || 'Rioverde';
        const provinceRaw = cleanImportText(row.provincia || row.provincia_de_residencia || row.ubicacion) || metaProvincia || 'Esmeraldas';
        const province = firstLocationValue(provinceRaw);
        const course = cleanImportText(row.nombre_del_curso || row.curso || row.institucion || row.organizacion) || metaCourseName || 'Salud Sexual y Reproductiva';
        const startDate = cleanImportText(row.fecha_de_inicio_del_curso || row.fecha_de_inicio) || metaStartDate || 'Junio 2025';
        const endDate = cleanImportText(row.fecha_de_finalizacion_del_curso || row.fecha_de_finalizacion) || metaEndDate || 'Julio 2025';

        allContacts.push({
          id,
          name,
          phone: phoneData.primary || 'No tiene teléfono celular',
          phoneRaw: cleanImportText(row.numero_telefonico || row.telefono || row.contacto || row.celular),
          phoneOther: phoneData.others.join(' / '),
          email: cleanImportText(row.correo_electronico || row.correo || row.email),
          parish: barrio,
          barrio,
          canton,
          provincia: province,
          location: `${canton} · ${province}`,
          province,
          provinceRaw,
          city: canton,
          organization: metaEntidad || 'UNFPA, VME, FUDELA',
          referencia: metaReferencia || 'Mariana Oleas (asesora local GIZ Esmeraldas)',
          sector: barrio,
          cargo: 'Participante',
          artField: course,
          courseName: course,
          courseStartDate: startDate,
          courseEndDate: endDate,
          courseDates: `${startDate} – ${endDate}`,
          courseRecency: `${endDate} (~1 año)`,
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

function parseMasterCleanSheet(sheet, baseName) {
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
    const name = cleanImportText(row.nombres_y_apellidos || row.nombres || row.nombre);
    const phoneVal = cleanImportText(row.numero_telefonico || row.telefono || row.celular);
    const phoneData = normalizePhones(phoneVal);
    if (!name) missingName += 1;
    if (!phoneData.primary) missingPhone += 1;
    if (!name && !phoneData.primary) { skippedRows += 1; continue; }

    const id = cleanImportText(row.id_contacto || row.id || row.cod) || `GIZ-${String(rowNumber - 1).padStart(3, '0')}`;
    if (seenIds.has(id)) duplicateIds += 1;
    seenIds.add(id);

    const opRaw = cleanImportText(row.operador_asignado || row.operador || '');
    let opCode = '';
    if (opRaw.toLowerCase().includes('josselyn') || opRaw.toUpperCase() === 'JC') opCode = 'JC';
    else if (opRaw.toLowerCase().includes('darwin') || opRaw.toUpperCase() === 'DO') opCode = 'DO';

    const courseCode = cleanImportText(row.codigo_curso || row.codigo || '');
    const courseName = cleanImportText(row.nombre_del_curso || row.curso || 'Curso ProCohesión GIZ');
    const organization = cleanImportText(row.entidad_responsable || row.entidad || 'Cooperación Alemana - GIZ');
    const canton = cleanImportText(row.canton || '');
    const provincia = cleanImportText(row.provincia || '');
    const barrio = cleanImportText(row.barrio || canton || 'Sector urbano');
    const startDate = cleanImportText(row.fecha_inicio || '2025');
    const endDate = cleanImportText(row.fecha_fin || '2025');
    const datesStr = (startDate && endDate && startDate !== endDate) ? `${startDate} al ${endDate}` : (endDate || startDate || '2025');

    contacts.push({
      id,
      name: name || 'Sin nombre',
      phone: phoneData.primary || phoneVal || 'No tiene teléfono celular',
      phoneRaw: phoneVal,
      phoneOther: phoneData.others.join(' / '),
      email: cleanImportText(row.correo_electronico || row.correo),
      parish: barrio,
      barrio,
      canton,
      provincia,
      location: canton && provincia ? `${canton} · ${provincia}` : (canton || provincia || 'Ecuador'),
      courseCode,
      courseName,
      courseStartDate: startDate,
      courseEndDate: endDate,
      courseDates: datesStr,
      courseRecency: endDate,
      organization,
      referencia: 'Equipo Técnico Clima Social / GIZ',
      baseName: baseName || 'GIZ · OE1 - ProCohesión (Fase III · 2026)',
      status: 'pending',
      attempts: 0,
      last: 'Sin gestión',
      pendingReason: 'not_called',
      assignmentRound: 0,
      operator: opCode
    });
  }
  return { contacts, stats: { sheet: sheet.name, totalRows: sheet.rowCount - 1, imported: contacts.length, skippedRows, missingName, missingPhone, duplicateIds, baseName: baseName || 'GIZ · OE1 - ProCohesión (Fase III · 2026)', sheetStats: [{ sheet: sheet.name, imported: contacts.length }] } };
}

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

const DATA_DIR = path.join(__dirname, 'data');
const STATE_FILE = path.join(DATA_DIR, 'campaign_state.json');
const INITIAL_CONTACTS_FILE = path.join(DATA_DIR, 'initial_contacts.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

let serverState = null;

function loadServerState() {
  if (fs.existsSync(STATE_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
      if (data && Array.isArray(data.contacts) && data.contacts.length > 0) {
        serverState = data;
        return serverState;
      }
    } catch (e) {
      console.warn('Error reading campaign_state.json:', e.message);
    }
  }

  let baseContacts = [];
  if (fs.existsSync(INITIAL_CONTACTS_FILE)) {
    try {
      baseContacts = JSON.parse(fs.readFileSync(INITIAL_CONTACTS_FILE, 'utf8'));
    } catch (e) {
      console.warn('Error reading initial_contacts.json:', e.message);
    }
  }

  serverState = {
    version: 3,
    campaign: 'GIZ · OE1 - ProCohesión (Fase III · 2026)',
    contacts: baseContacts,
    history: [],
    shifts: []
  };

  saveServerState();
  return serverState;
}

function saveServerState() {
  if (!serverState) return;
  try {
    fs.writeFileSync(STATE_FILE, JSON.stringify(serverState, null, 2), 'utf8');
  } catch (e) {
    console.error('Error saving campaign_state.json:', e.message);
  }
}

// Inicialización de la base general al encender el servidor
loadServerState();

// API REST: Obtener estado centralizado
app.get('/api/state', (_req, res) => {
  if (!serverState) loadServerState();
  res.json({
    version: serverState.version,
    campaign: serverState.campaign,
    contacts: serverState.contacts,
    history: serverState.history,
    shifts: serverState.shifts
  });
});

// API REST: Guardar intento de llamada en cascada en la base general
app.post('/api/calls/save', (req, res) => {
  if (!serverState) loadServerState();
  const { contactId, outcome, notes, rescheduledFor, operator, operatorInitials } = req.body;
  if (!contactId || !outcome) return res.status(400).json({ error: 'Faltan parámetros requeridos (contactId, outcome)' });

  const contact = serverState.contacts.find(c => c.id === contactId);
  if (!contact) return res.status(404).json({ error: 'Contacto no encontrado' });

  const MAX_ATTEMPTS = 3;
  contact.attempts = (Number(contact.attempts) || 0) + 1;
  const now = new Date();
  const dateFormatted = new Intl.DateTimeFormat('es-EC', { dateStyle: 'short', timeStyle: 'short', timeZone: 'America/Guayaquil' }).format(now);
  const nowIso = now.toISOString();

  contact.last = dateFormatted;
  contact.lastAttemptAt = nowIso;
  if (operatorInitials) contact.operator = operatorInitials;
  contact.rescheduledFor = rescheduledFor || '';
  contact.notes = notes || '';

  const shouldDiscard = contact.attempts >= MAX_ATTEMPTS && !['effective', 'wrong', 'refused'].includes(outcome);
  contact.status = shouldDiscard ? 'discarded' : outcome;
  contact.pendingReason = outcome === 'pending' ? 'rescheduled' : outcome === 'no-answer' ? 'no_answer' : null;

  const historyItem = {
    id: contact.id,
    contact: contact.name,
    phone: contact.phone,
    courseCode: contact.courseCode || '',
    courseName: contact.courseName || '',
    organization: contact.organization || '',
    canton: contact.canton || '',
    provincia: contact.provincia || '',
    result: outcome,
    operator: operator || (operatorInitials === 'JC' ? 'Josselyn Carvajal' : operatorInitials === 'DO' ? 'Darwin Olivo' : 'Clima Social'),
    operatorInitials: operatorInitials || contact.operator,
    attempt: contact.attempts,
    date: dateFormatted,
    rawDate: nowIso,
    notes: notes || '',
    rescheduledFor: rescheduledFor || ''
  };

  serverState.history.unshift(historyItem);
  saveServerState();

  return res.json({ success: true, contact, historyItem });
});

// API REST: Iniciar jornada de operador en el servidor
app.post('/api/shifts/start', (req, res) => {
  if (!serverState) loadServerState();
  const { username, operator, operatorId } = req.body;
  const nowIso = new Date().toISOString();

  serverState.shifts.forEach(shift => {
    if ((shift.username === username || (operatorId && shift.operatorId === operatorId)) && !shift.endedAt) {
      shift.endedAt = nowIso;
    }
  });

  const newShift = {
    id: `shift-${Date.now()}`,
    operatorId: operatorId || username,
    username: username,
    operator: operator || username,
    startedAt: nowIso,
    endedAt: null
  };

  serverState.shifts.unshift(newShift);
  saveServerState();

  return res.json({ success: true, shift: newShift });
});

// API REST: Finalizar jornada de operador en el servidor
app.post('/api/shifts/end', (req, res) => {
  if (!serverState) loadServerState();
  const { username, operatorId } = req.body;
  const nowIso = new Date().toISOString();

  let closedCount = 0;
  serverState.shifts.forEach(shift => {
    if ((shift.username === username || (operatorId && shift.operatorId === operatorId)) && !shift.endedAt) {
      shift.endedAt = nowIso;
      closedCount++;
    }
  });

  saveServerState();
  return res.json({ success: true, closedCount });
});

// API REST: Sincronización bidireccional cliente-servidor
app.post('/api/sync', (req, res) => {
  if (!serverState) loadServerState();
  const clientContacts = Array.isArray(req.body.contacts) ? req.body.contacts : [];
  const clientHistory = Array.isArray(req.body.history) ? req.body.history : [];

  if (clientContacts.length > 0) {
    const contactMap = new Map(serverState.contacts.map(c => [c.id, c]));
    clientContacts.forEach(clientContact => {
      const existing = contactMap.get(clientContact.id);
      if (existing) {
        if ((clientContact.attempts || 0) > (existing.attempts || 0)) {
          Object.assign(existing, clientContact);
        }
      }
    });
  }

  if (clientHistory.length > 0) {
    const existingKeys = new Set(serverState.history.map(h => `${h.id}-${h.attempt}`));
    clientHistory.forEach(item => {
      const key = `${item.id}-${item.attempt}`;
      if (!existingKeys.has(key)) {
        serverState.history.push(item);
        existingKeys.add(key);
      }
    });
    serverState.history.sort((a, b) => new Date(b.rawDate || 0) - new Date(a.rawDate || 0));
  }

  saveServerState();
  return res.json({
    success: true,
    contacts: serverState.contacts,
    history: serverState.history,
    shifts: serverState.shifts
  });
});

// EXPORTACIÓN OFICIAL EXCEL GIZ PROCOHESIÓN (4 PESTAÑAS)
app.post('/export/xlsx', async (req, res) => {
  if (req.get('x-app-role') !== 'supervisor') return res.status(403).json({ error: 'Solo el supervisor puede exportar información' });
  try {
    if (!serverState) loadServerState();

    // Preferir la base del servidor; si el cliente envía datos más actualizados, sincronizarlos
    const clientContacts = Array.isArray(req.body.contacts) ? req.body.contacts : [];
    const clientHistory = Array.isArray(req.body.history) ? req.body.history : [];

    let contacts = serverState.contacts.length ? serverState.contacts : clientContacts;
    let history = serverState.history.length ? serverState.history : clientHistory;

    // Si el cliente tiene contactos más recientes, los tomamos en cuenta
    if (clientContacts.length > 0 && contacts !== clientContacts) {
      const map = new Map(contacts.map(c => [c.id, c]));
      clientContacts.forEach(c => {
        const s = map.get(c.id);
        if (s && (c.attempts || 0) > (s.attempts || 0)) Object.assign(s, c);
      });
    }

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Clima Social';
    workbook.created = new Date();
    workbook.modified = new Date();

    const colors = {
      purple: '400054',       // Morado Clima Social principal
      purpleDark: '2A0038',
      purpleLight: 'F5EEF8',
      text: '241E15',
      muted: '64748B',
      white: 'FFFFFF',
      stripe: 'FBF9F6',
      border: 'E2E8F0',
      greenBg: 'ECFDF5',
      greenText: '065F46',
      amberBg: 'FFFBEB',
      amberText: '92400E',
      grayBg: 'F1F5F9',
      grayText: '475569',
      redBg: 'FEF2F2',
      redText: '991B1B'
    };

    const statusLabels = {
      pending: 'Reprogramada / Pendiente',
      callback: 'Reprogramada / Pendiente',
      effective: 'Encuesta Completada',
      'no-answer': 'No Contesta',
      no_answer: 'No Contesta',
      wrong: 'Número Incorrecto',
      wrong_number: 'Número Incorrecto',
      refused: 'Rechazó Participar',
      discarded: 'Descartado (3 intentos)',
      'not-managed': 'Sin Gestión',
      not_managed: 'Sin Gestión'
    };

    const formatEcuadorDate = value => new Intl.DateTimeFormat('es-EC', { dateStyle: 'short', timeStyle: 'short', timeZone: 'America/Guayaquil' }).format(new Date(value));
    const font = { name: 'Poppins', size: 10.5, color: { argb: colors.text } };
    const headerFont = { name: 'Poppins', size: 10.5, bold: true, color: { argb: colors.white } };
    const titleFont = { name: 'Poppins', size: 13, bold: true, color: { argb: colors.purple } };
    const subFont = { name: 'Poppins', size: 10, italic: true, color: { argb: colors.muted } };
    const borderThin = {
      top: { style: 'thin', color: { argb: colors.border } },
      bottom: { style: 'thin', color: { argb: colors.border } },
      left: { style: 'thin', color: { argb: colors.border } },
      right: { style: 'thin', color: { argb: colors.border } }
    };

    // ==========================================
    // HOJA 1: RESUMEN EJECUTIVO
    // ==========================================
    const s1 = workbook.addWorksheet('Resumen Ejecutivo');
    s1.properties.defaultRowHeight = 20;
    s1.getColumn(1).width = 4;   // A (Margen)
    s1.getColumn(2).width = 46;  // B (Métrica)
    s1.getColumn(3).width = 24;  // C (Resultado)
    s1.getColumn(4).width = 6;   // D (Separador)
    s1.getColumn(5).width = 28;  // E (Operador/a)
    s1.getColumn(6).width = 16;  // F (Asignados)
    s1.getColumn(7).width = 16;  // G (Gestionados)
    s1.getColumn(8).width = 16;  // H (Efectivas)

    s1.getRow(1).height = 12;
    s1.getRow(2).height = 28;
    s1.getRow(3).height = 20;
    s1.getRow(4).height = 18;
    s1.getRow(5).height = 14;

    // Encabezado institucional: Logo a la izquierda (Col B) y Título a la derecha (Cols E-H)
    const logoPath = path.join(__dirname, 'public', 'logo-clima-social-official.png');
    if (fs.existsSync(logoPath)) {
      try {
        const imageId = workbook.addImage({ filename: logoPath, extension: 'png' });
        s1.addImage(imageId, { tl: { col: 1.05, row: 1.15 }, ext: { width: 238, height: 35 } });
      } catch (e) {}
    }

    s1.mergeCells('E2:H2');
    s1.getCell('E2').value = 'MONITOREO CALL CENTER GIZ PROCOHESIÓN';
    s1.getCell('E2').font = { name: 'Poppins', size: 13, bold: true, color: { argb: colors.purple } };
    s1.getCell('E2').alignment = { vertical: 'middle', horizontal: 'left' };

    s1.mergeCells('E3:H3');
    s1.getCell('E3').value = 'Evaluación Telefónica de Impacto de Cursos y Capacitaciones (Fase III · 2026)';
    s1.getCell('E3').font = { name: 'Poppins', size: 9.5, italic: true, color: { argb: colors.muted } };
    s1.getCell('E3').alignment = { vertical: 'middle', horizontal: 'left' };

    s1.mergeCells('E4:H4');
    s1.getCell('E4').value = 'Cooperación Técnica Alemana (GIZ) · Clima Social Ecuador';
    s1.getCell('E4').font = { name: 'Poppins', size: 8.5, bold: true, color: { argb: colors.purpleDark } };
    s1.getCell('E4').alignment = { vertical: 'middle', horizontal: 'left' };

    // Cálculo exacto de KPIs
    const totalContacts = contacts.length;
    const managedContacts = contacts.filter(c => Number(c.attempts || 0) > 0).length;
    const unmanagedContacts = totalContacts - managedContacts;
    const effectiveContacts = contacts.filter(c => c.status === 'effective').length;
    const rescheduledContacts = contacts.filter(c => Number(c.attempts || 0) > 0 && (c.status === 'pending' || c.status === 'callback')).length;
    const noAnswerContacts = contacts.filter(c => c.status === 'no-answer' || c.status === 'no_answer').length;
    const refusedContacts = contacts.filter(c => c.status === 'refused').length;
    const wrongContacts = contacts.filter(c => c.status === 'wrong' || c.status === 'wrong_number').length;
    const discardedContacts = contacts.filter(c => c.status === 'discarded').length;
    const coveragePct = totalContacts ? `${((managedContacts / totalContacts) * 100).toFixed(1)}%` : '0.0%';
    const effectivenessPct = managedContacts ? `${((effectiveContacts / managedContacts) * 100).toFixed(1)}%` : '0.0%';

    // Tabla 1: Indicadores Globales
    s1.getCell('B6').value = 'Indicadores Globales de Campaña';
    s1.getCell('B6').font = { name: 'Poppins', size: 11, bold: true, color: { argb: colors.purple } };

    const kpis = [
      ['Total de contactos cargados', totalContacts],
      ['Contactos gestionados (al menos 1 intento)', managedContacts],
      ['Contactos pendientes de primer contacto', unmanagedContacts],
      ['Encuestas completadas (Efectivas)', effectiveContacts],
      ['Citas reprogramadas / Reintento pendiente', rescheduledContacts],
      ['No contesta', noAnswerContacts],
      ['Rechazaron participar', refusedContacts],
      ['Números equivocados / incorrectos', wrongContacts],
      ['Descartados (3 intentos agotados)', discardedContacts],
      ['% Cobertura de la base', coveragePct],
      ['% Tasa de efectividad sobre gestionados', effectivenessPct],
      ['Fecha y hora de corte', formatEcuadorDate(new Date())]
    ];

    s1.getCell('B7').value = 'Métrica';
    s1.getCell('C7').value = 'Resultado';
    s1.getRow(7).height = 26;
    [s1.getCell('B7'), s1.getCell('C7')].forEach(c => {
      c.font = headerFont;
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.purple } };
      c.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    kpis.forEach((row, idx) => {
      const r = 8 + idx;
      s1.getCell(`B${r}`).value = row[0];
      s1.getCell(`C${r}`).value = row[1];
      s1.getCell(`B${r}`).font = font;
      s1.getCell(`C${r}`).font = { ...font, bold: true };
      s1.getCell(`C${r}`).alignment = { horizontal: 'center' };
      s1.getCell(`B${r}`).border = borderThin;
      s1.getCell(`C${r}`).border = borderThin;
      s1.getRow(r).height = 21;
      if (idx % 2 === 1) {
        s1.getCell(`B${r}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.stripe } };
        s1.getCell(`C${r}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.stripe } };
      }
    });

    // Tabla 2: Desglose por Operador
    s1.getCell('E6').value = 'Rendimiento por Operador Call Center';
    s1.getCell('E6').font = { name: 'Poppins', size: 11, bold: true, color: { argb: colors.purple } };

    const opHeaders = ['Operador/a', 'Asignados', 'Gestionados', 'Efectivas'];
    ['E7', 'F7', 'G7', 'H7'].forEach((cell, i) => {
      s1.getCell(cell).value = opHeaders[i];
      s1.getCell(cell).font = headerFont;
      s1.getCell(cell).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.purple } };
      s1.getCell(cell).alignment = { vertical: 'middle', horizontal: 'center' };
    });

    const jcContacts = contacts.filter(c => c.operator === 'JC');
    const doContacts = contacts.filter(c => c.operator === 'DO');

    const opRows = [
      ['Josselyn Carvajal (JC)', jcContacts.length, jcContacts.filter(c => Number(c.attempts || 0) > 0).length, jcContacts.filter(c => c.status === 'effective').length],
      ['Darwin Olivo (DO)', doContacts.length, doContacts.filter(c => Number(c.attempts || 0) > 0).length, doContacts.filter(c => c.status === 'effective').length],
      ['Total Equipo', contacts.length, managedContacts, effectiveContacts]
    ];

    opRows.forEach((row, idx) => {
      const r = 8 + idx;
      s1.getRow(r).height = 22;
      ['E', 'F', 'G', 'H'].forEach((col, cIdx) => {
        const cell = s1.getCell(`${col}${r}`);
        cell.value = row[cIdx];
        cell.font = (idx === 2) ? { ...font, bold: true } : font;
        cell.border = borderThin;
        if (cIdx > 0) cell.alignment = { horizontal: 'center' };
        if (idx === 2) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.purpleLight } };
        else if (idx % 2 === 1) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.stripe } };
      });
    });

    // ==========================================
    // HOJA 2: REGISTRO DE INTENTOS (AUDIT LOG)
    // ==========================================
    const s2 = workbook.addWorksheet('Registro de Intentos');
    const h2 = ['N°', 'ID CONTACTO', 'PARTICIPANTE', 'TELÉFONO', 'CURSO', 'ENTIDAD CAPACITADORA', 'CANTÓN', 'OPERADOR/A', 'INTENTO', 'RESULTADO', 'FECHA Y HORA', 'CITA REPROGRAMADA', 'OBSERVACIONES'];
    s2.addRow(h2);
    s2.getRow(1).height = 28;
    h2.forEach((_, idx) => {
      const cell = s2.getRow(1).getCell(idx + 1);
      cell.font = headerFont;
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.purple } };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    const w2 = [8, 14, 30, 16, 26, 28, 16, 20, 10, 24, 20, 22, 40];
    w2.forEach((width, idx) => s2.getColumn(idx + 1).width = width);

    history.forEach((item, idx) => {
      const row = s2.addRow([
        idx + 1,
        item.id || '',
        item.contact || '',
        item.phone || '',
        item.courseName || '',
        item.organization || '',
        item.canton || '',
        item.operator || '',
        `Intento ${item.attempt || 1}`,
        statusLabels[item.result] || item.result,
        item.date || '',
        item.rescheduledFor || '',
        item.notes || ''
      ]);
      row.height = 22;
      row.eachCell((cell, colNumber) => {
        cell.font = font;
        cell.border = borderThin;
        cell.alignment = { vertical: 'middle', wrapText: false };
        if ([1, 2, 4, 7, 9, 10, 11, 12].includes(colNumber)) cell.alignment = { vertical: 'middle', horizontal: 'center' };
        if (idx % 2 === 1) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.stripe } };
      });
    });
    s2.views = [{ state: 'frozen', ySplit: 1 }];
    s2.autoFilter = { from: 'A1', to: `M${Math.max(1, s2.rowCount)}` };

    // ==========================================
    // HOJA 3: BASE GENERAL DE CONTACTOS
    // ==========================================
    const s3 = workbook.addWorksheet(`Base General (${contacts.length})`);
    const h3 = ['ID CONTACTO', 'PARTICIPANTE', 'TELÉFONO', 'CURSO', 'ENTIDAD CAPACITADORA', 'CANTÓN', 'PROVINCIA', 'BARRIO', 'OPERADOR/A', 'ESTADO ACTUAL', 'INTENTOS', 'ÚLTIMA GESTIÓN', 'CITA REPROGRAMADA', 'OBSERVACIONES'];
    s3.addRow(h3);
    s3.getRow(1).height = 28;
    h3.forEach((_, idx) => {
      const cell = s3.getRow(1).getCell(idx + 1);
      cell.font = headerFont;
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.purple } };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    const w3 = [14, 32, 16, 26, 28, 16, 16, 18, 16, 24, 10, 20, 22, 35];
    w3.forEach((width, idx) => s3.getColumn(idx + 1).width = width);

    contacts.forEach((c, idx) => {
      const opName = c.operator === 'JC' ? 'Josselyn C.' : c.operator === 'DO' ? 'Darwin O.' : (c.operator || 'Sin asignar');
      const row = s3.addRow([
        c.id,
        c.name,
        c.phone,
        c.courseName,
        c.organization,
        c.canton,
        c.provincia,
        c.barrio || c.parish || '',
        opName,
        statusLabels[c.status] || c.status,
        Number(c.attempts || 0),
        c.last || 'Sin gestión',
        c.rescheduledFor || '',
        c.notes || ''
      ]);
      row.height = 21;
      row.eachCell((cell, colNumber) => {
        cell.font = font;
        cell.border = borderThin;
        cell.alignment = { vertical: 'middle', wrapText: false };
        if ([1, 3, 6, 7, 9, 10, 11, 12, 13].includes(colNumber)) cell.alignment = { vertical: 'middle', horizontal: 'center' };
        if (idx % 2 === 1) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.stripe } };
      });
    });
    s3.views = [{ state: 'frozen', ySplit: 1 }];
    s3.autoFilter = { from: 'A1', to: `N${Math.max(1, s3.rowCount)}` };

    // ==========================================
    // HOJA 4: RESUMEN POR CURSO (25 CURSOS)
    // ==========================================
    const s4 = workbook.addWorksheet('Resumen por Curso');
    const h4 = ['CÓD', 'CURSO', 'ENTIDAD CAPACITADORA', 'CANTÓN', 'TOTAL ASIGNADOS', 'GESTIONADOS', 'EFECTIVAS', 'REPROGRAMADAS', 'NO CONTESTA', 'RECHAZOS', 'INCORRECTOS', 'PENDIENTES', '% AVANCE', '% EFECTIVIDAD'];
    s4.addRow(h4);
    s4.getRow(1).height = 28;
    h4.forEach((_, idx) => {
      const cell = s4.getRow(1).getCell(idx + 1);
      cell.font = headerFont;
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.purple } };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    const w4 = [8, 26, 28, 16, 16, 14, 14, 16, 14, 14, 14, 14, 14, 16];
    w4.forEach((width, idx) => s4.getColumn(idx + 1).width = width);

    // Agrupar por curso
    const courseMap = new Map();
    contacts.forEach(c => {
      const key = c.courseCode || c.courseName;
      if (!courseMap.has(key)) {
        courseMap.set(key, {
          code: c.courseCode || '',
          name: c.courseName || '',
          org: c.organization || '',
          canton: c.canton || '',
          total: 0,
          managed: 0,
          effective: 0,
          rescheduled: 0,
          noAnswer: 0,
          refused: 0,
          wrong: 0,
          pending: 0
        });
      }
      const item = courseMap.get(key);
      item.total += 1;
      const attempts = Number(c.attempts || 0);
      if (attempts > 0) {
        item.managed += 1;
        if (c.status === 'effective') item.effective += 1;
        else if (c.status === 'pending' || c.status === 'callback') item.rescheduled += 1;
        else if (c.status === 'no-answer' || c.status === 'no_answer') item.noAnswer += 1;
        else if (c.status === 'refused') item.refused += 1;
        else if (c.status === 'wrong' || c.status === 'wrong_number') item.wrong += 1;
        else item.rescheduled += 1;
      } else {
        item.pending += 1;
      }
    });

    const sortedCourses = [...courseMap.values()].sort((a, b) => (a.code || '').localeCompare(b.code || ''));
    sortedCourses.forEach((c, idx) => {
      const pctAvance = c.total ? `${((c.managed / c.total) * 100).toFixed(1)}%` : '0%';
      const pctEfectiva = c.managed ? `${((c.effective / c.managed) * 100).toFixed(1)}%` : '0%';
      const row = s4.addRow([
        c.code,
        c.name,
        c.org,
        c.canton,
        c.total,
        c.managed,
        c.effective,
        c.rescheduled,
        c.noAnswer,
        c.refused,
        c.wrong,
        c.pending,
        pctAvance,
        pctEfectiva
      ]);
      row.height = 21;
      row.eachCell((cell, colNumber) => {
        cell.font = font;
        cell.border = borderThin;
        cell.alignment = { vertical: 'middle', wrapText: false };
        if ([1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(colNumber)) cell.alignment = { vertical: 'middle', horizontal: 'center' };
        if (idx % 2 === 1) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.stripe } };
      });
    });

    // Fila totalizadora
    const sumTotal = sortedCourses.reduce((acc, c) => acc + c.total, 0);
    const sumManaged = sortedCourses.reduce((acc, c) => acc + c.managed, 0);
    const sumEffective = sortedCourses.reduce((acc, c) => acc + c.effective, 0);
    const sumRescheduled = sortedCourses.reduce((acc, c) => acc + c.rescheduled, 0);
    const sumNoAnswer = sortedCourses.reduce((acc, c) => acc + c.noAnswer, 0);
    const sumRefused = sortedCourses.reduce((acc, c) => acc + c.refused, 0);
    const sumWrong = sortedCourses.reduce((acc, c) => acc + c.wrong, 0);
    const sumPending = sortedCourses.reduce((acc, c) => acc + c.pending, 0);
    const totAvance = sumTotal ? `${((sumManaged / sumTotal) * 100).toFixed(1)}%` : '0%';
    const totEfectiva = sumManaged ? `${((sumEffective / sumManaged) * 100).toFixed(1)}%` : '0%';

    const totRow = s4.addRow(['TOTAL', '25 CURSOS COMPLETOS', 'TODAS LAS ENTIDADES', 'GENERAL', sumTotal, sumManaged, sumEffective, sumRescheduled, sumNoAnswer, sumRefused, sumWrong, sumPending, totAvance, totEfectiva]);
    totRow.height = 24;
    totRow.eachCell((cell, colNumber) => {
      cell.font = { ...font, bold: true };
      cell.border = borderThin;
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.purpleLight } };
      cell.alignment = { vertical: 'middle', wrapText: false };
      if ([1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(colNumber)) cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    s4.views = [{ state: 'frozen', ySplit: 1 }];
    s4.autoFilter = { from: 'A1', to: `N${Math.max(1, s4.rowCount)}` };

    const buffer = await workbook.xlsx.writeBuffer();
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="reporte-clima-social-giz-${new Date().toISOString().slice(0, 10)}.xlsx"`);
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error('Excel export failed:', error);
    res.status(500).json({ error: 'No fue posible generar el Excel' });
  }
});

app.post('/api/shifts/delete', async (req, res) => {
  if (req.get('x-app-role') !== 'supervisor') return res.status(403).json({ error: 'Solo el supervisor puede eliminar jornadas' });
  const { shiftId } = req.body;
  if (!shiftId) return res.status(400).json({ error: 'Falta shiftId' });

  const supabaseUrl = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || anonKey;
  const userToken = req.get('x-supabase-auth') || req.get('authorization') || '';
  const authHeader = userToken ? (userToken.startsWith('Bearer') ? userToken : `Bearer ${userToken}`) : `Bearer ${serviceKey}`;

  if (supabaseUrl && serviceKey) {
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/operator_shifts?id=eq.${encodeURIComponent(shiftId)}`, {
        method: 'DELETE',
        headers: {
          'apikey': serviceKey,
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        const text = await response.text();
        return res.status(response.status).json({ error: text || 'Error al eliminar en Supabase' });
      }
      return res.json({ success: true, message: 'Jornada eliminada' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  return res.json({ success: true, mode: 'local' });
});

app.post('/api/shifts/close', async (req, res) => {
  if (req.get('x-app-role') !== 'supervisor') return res.status(403).json({ error: 'Solo el supervisor puede cerrar jornadas' });
  const { shiftId, operatorId, endedAt } = req.body;
  const finalEndedAt = endedAt || new Date().toISOString();

  const supabaseUrl = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || anonKey;
  const userToken = req.get('x-supabase-auth') || req.get('authorization') || '';
  const authHeader = userToken ? (userToken.startsWith('Bearer') ? userToken : `Bearer ${userToken}`) : `Bearer ${serviceKey}`;

  if (supabaseUrl && serviceKey) {
    try {
      const headers = {
        'apikey': serviceKey,
        'Authorization': authHeader,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      };

      if (shiftId) {
        await fetch(`${supabaseUrl}/rest/v1/operator_shifts?id=eq.${encodeURIComponent(shiftId)}`, {
          method: 'PATCH',
          headers,
          body: JSON.stringify({ ended_at: finalEndedAt })
        });
      }

      if (operatorId) {
        await fetch(`${supabaseUrl}/rest/v1/operator_shifts?operator_id=eq.${encodeURIComponent(operatorId)}&ended_at=is.null`, {
          method: 'PATCH',
          headers,
          body: JSON.stringify({ ended_at: finalEndedAt })
        });
      }

      return res.json({ success: true, message: 'Jornada cerrada' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  return res.json({ success: true, mode: 'local' });
});

app.post('/api/contacts/update-status', async (req, res) => {
  if (req.get('x-app-role') !== 'supervisor') return res.status(403).json({ error: 'Solo el supervisor puede cambiar resultados' });
  const { contactId, status, outcomeId } = req.body;
  if (!contactId || !status) return res.status(400).json({ error: 'Faltan parámetros' });

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && serviceKey) {
    try {
      const nowIso = new Date().toISOString();
      const statusToEnum = {
        'effective': 'effective',
        'pending': 'pending',
        'no-answer': 'no_answer',
        'wrong': 'wrong_number',
        'refused': 'refused',
        'discarded': 'discarded'
      };
      const mappedStatus = statusToEnum[status] || 'pending';

      const restHeaders = {
        'apikey': serviceKey,
        'Authorization': `Bearer ${serviceKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      };

      const updateContactRes = await fetch(`${supabaseUrl}/rest/v1/contacts?id=eq.${encodeURIComponent(contactId)}`, {
        method: 'PATCH',
        headers: restHeaders,
        body: JSON.stringify({
          current_status: mappedStatus,
          last_outcome_id: outcomeId || null,
          last_attempt_at: nowIso
        })
      });

      if (!updateContactRes.ok) {
        const text = await updateContactRes.text();
        return res.status(updateContactRes.status).json({ error: text || 'Error al actualizar contacto en Supabase' });
      }

      return res.json({ success: true, message: 'Estado actualizado correctamente' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  return res.json({ success: true, mode: 'local' });
});

app.get('/config', (_req, res) => {
  // Para la Encuesta GIZ 2026, la plataforma corre sobre el backend central Express/Node
  // evitando bloqueos de RLS o tablas no migradas de Supabase
  const useSupabase = process.env.USE_SUPABASE === 'true';
  res.json({
    supabaseUrl: useSupabase ? (process.env.SUPABASE_URL || '') : '',
    supabaseAnonKey: useSupabase ? (process.env.SUPABASE_ANON_KEY || '') : ''
  });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Call Center running on port ${port}`);
});
