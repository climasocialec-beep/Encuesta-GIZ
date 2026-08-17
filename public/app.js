const STORAGE_KEY = 'clima-social-giz-callcenter-v1';
const DEMO_VERSION = 1;
const MAX_ATTEMPTS = 3;
const SURVEY_URL = 'https://ee.kobotoolbox.org/x/R9z4VTZ3';

const appUsers = [
  { username: 'operadora1', authEmail: 'tatiana@climasocial.local', name: 'Tatiana Pasquel', initials: 'TP', role: 'operator' },
  { username: 'operadora2', authEmail: 'alejandro@climasocial.local', name: 'Alejandro Yanascual', initials: 'AY', role: 'operator' },
  { username: 'operadora3', authEmail: 'valeria@climasocial.local', name: 'Valeria Cruz', initials: 'VC', role: 'operator' },
  { username: 'supervisor', authEmail: 'supervisor@climasocial.local', name: 'Clima Social', initials: 'CS', role: 'supervisor' }
];

const seedContacts = [
  { id: 'GIZ-001', name: 'Michael Pinsag', phone: '0985041991', parish: 'Quito', location: 'Pichincha', organization: 'Gestión Ambiental GIZ', status: 'pending', attempts: 0, last: 'Sin gestión', operator: 'TP' },
  { id: 'GIZ-002', name: 'Diana Estévez', phone: '0992345678', parish: 'Cumbayá', location: 'Pichincha', organization: 'Capacitación Climática GIZ', status: 'pending', attempts: 1, last: 'Hoy, 09:30', operator: 'AY' },
  { id: 'GIZ-003', name: 'Carlos Morales', phone: '0987654321', parish: 'Iñaquito', location: 'Pichincha', organization: 'Desarrollo Sostenible GIZ', status: 'effective', attempts: 1, last: 'Hoy, 09:15', operator: 'VC' },
  { id: 'GIZ-004', name: 'Patricia Herrera', phone: '0971122334', parish: 'Conocoto', location: 'Pichincha', organization: 'Gestión Ambiental GIZ', status: 'pending', attempts: 0, last: 'Sin gestión', operator: 'TP' }
];

const demoContacts = [];

function buildDemoContacts() {
  const operators = ['TP', 'AY', 'VC'];
  const names = ['Michael', 'Diana', 'Carlos', 'Patricia', 'Jorge', 'Sofía', 'Daniela', 'Esteban', 'Gabriela', 'Mateo', 'Valeria', 'Nicolás'];
  const surnames = ['Pinsag', 'Estévez', 'Morales', 'Herrera', 'Vera', 'León', 'Torres', 'Cárdenas', 'Salazar', 'Mena', 'Paz', 'Castro'];
  const courses = ['Gestión Ambiental y Climática', 'Adaptación al Cambio Climático GIZ', 'Desarrollo Sostenible y Gobernanza', 'Eficiencia Energética GIZ'];
  const parishes = ['La Floresta', 'Cumbayá', 'Centro Histórico', 'Conocoto', 'Iñaquito', 'Ponceano', 'Tumbaco', 'Calderón'];
  return Array.from({ length: 60 }, (_, index) => {
    const operator = operators[index % operators.length];
    const status = 'pending';
    const attempts = 0;
    const number = String(index + 1).padStart(3, '0');
    return {
      id: `GIZ-${number}`,
      name: `${names[index % names.length]} ${surnames[(index + Math.floor(index / names.length)) % surnames.length]}`,
      phone: `09${String(90000000 + index * 137).slice(0, 8)}`,
      parish: parishes[index % parishes.length],
      location: 'Quito · Pichincha',
      organization: courses[index % courses.length],
      baseName: 'Base de campo · Clima Social GIZ',
      status,
      attempts,
      last: 'Sin gestión',
      pendingReason: 'not_called',
      operator
    };
  });
}

const operators = [
  { initials: 'TP', name: 'Tatiana Pasquel', role: 'Operadora', managed: 0, progress: 0, effectiveness: '0%', last: 'Sin actividad', state: 'on', color: '' },
  { initials: 'AY', name: 'Alejandro Yanascual', role: 'Operador', managed: 0, progress: 0, effectiveness: '0%', last: 'Sin actividad', state: 'on', color: 'orange' },
  { initials: 'VC', name: 'Valeria Cruz', role: 'Operadora', managed: 0, progress: 0, effectiveness: '0%', last: 'Sin actividad', state: 'on', color: 'green' }
];

const statusLabels = { pending: 'Pendiente', effective: 'Encuesta completada', rescheduled: 'Reprogramada', 'no-answer': 'No contesta', 'wa-sent': 'Enlace enviado', wrong: 'Número incorrecto', refused: 'Rechazó participar', discarded: 'Descartado (3 intentos)', 'not-managed': 'Sin gestión' };
const outcomeLabels = { effective: 'Encuesta completada', pending: 'Reprogramada / Reintento', callback: 'Reprogramada / Reintento', rescheduled: 'Reprogramada / Reintento', 'no-answer': 'No contesta', no_answer: 'No contesta', 'wa-sent': 'Enlace enviado', refused: 'Rechazó participar', wrong: 'Número incorrecto', wrong_number: 'Número incorrecto' };
let backendMode = 'demo';
let supabaseClient = null;
let currentCampaign = null;
let remoteProfiles = new Map();
let outcomeCache = new Map();
let remoteChannel = null;
let remoteReloadTimer = null;
let remoteReloadBusy = false;
let state = loadState();
state.shifts = Array.isArray(state.shifts) ? state.shifts : [];
let currentUser = JSON.parse(sessionStorage.getItem('giz-current-user') || 'null');
if (currentUser?.username) {
  const freshUser = appUsers.find(user => user.username === currentUser.username);
  currentUser = freshUser || null;
  if (currentUser) sessionStorage.setItem('giz-current-user', JSON.stringify(currentUser));
  else sessionStorage.removeItem('giz-current-user');
}
let activeView = currentUser?.role === 'operator' ? 'operator' : 'dashboard';
if (currentUser?.role === 'supervisor' && new URLSearchParams(location.search).get('view') === 'import') activeView = 'import';
let selectedContactId = currentUser?.role === 'operator'
  ? firstActionable(state.contacts.filter(contact => contact.operator === currentUser.initials))?.id
  : state.contacts[0]?.id;
let selectedOutcome = '';

function visibleContacts() {
  return currentUser?.role === 'operator'
    ? state.contacts.filter(contact => contact.operator === currentUser.initials)
    : state.contacts;
}

function firstActionable(contacts) {
  return contacts.find(contact => contact.status === 'pending' || contact.status === 'no-answer');
}

function contactStatusLabel(contact) {
  if (contact.status === 'pending' && contact.attempts > 0) return isPreviousDay(contact) ? `Pendiente · ${previousDateLabel(contact.lastAttemptAt)}` : 'Pendiente · espera captura';
  if (contact.status === 'no-answer' && isPreviousDay(contact)) return `No contesta · ${previousDateLabel(contact.lastAttemptAt)}`;
  return statusLabels[contact.status] || 'Pendiente';
}

function dayKey(value) { return value ? new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Guayaquil', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(value)) : ''; }
function isPreviousDay(contact) { const last = dayKey(contact.lastAttemptAt); return Boolean(last && last !== dayKey(new Date())); }
function previousDateLabel(value) { return value ? new Intl.DateTimeFormat('es-EC', { timeZone: 'America/Guayaquil', day: '2-digit', month: '2-digit' }).format(new Date(value)) : 'fecha anterior'; }

function getActiveShift(user = currentUser) {
  if (!user) return null;
  return state.shifts.find(shift => !shift.endedAt && (shift.operatorId === user.authId || shift.username === user.username || shift.username === user.name || shift.username === user.email));
}

function lastShiftFor(username) {
  return state.shifts.filter(shift => shift.username === username).sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt))[0];
}

function latestShiftFor(user) {
  const profile = [...remoteProfiles.values()].find(item => item.initials === user.initials);
  return state.shifts.filter(shift => (profile?.id && shift.operatorId === profile.id) || shift.username === user.username || shift.username === user.name).sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt))[0];
}

function formatDateTime(value) {
  if (!value) return '—';
  return new Intl.DateTimeFormat('es-EC', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(value));
}

function formatDuration(start, end = new Date().toISOString()) {
  const minutes = Math.max(0, Math.round((new Date(end) - new Date(start)) / 60000));
  return `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, '0')} min`;
}

function loginScreen() {
  const isSupabase = backendMode === 'supabase';
  return `
    <div class="login-page-clean">
      <div class="login-card-simple">
        <div class="login-header-simple">
          <img class="login-logo-round" src="/logo-icon.svg" alt="Clima Social" />
          <h1>Clima Social</h1>
          <p class="login-sub-text">Centro de Gestión &bull; Encuesta GIZ</p>
        </div>

        <form id="login-form" class="login-form-simple">
          <div class="form-field">
            <label for="${isSupabase ? 'auth-user' : 'user-select'}">Usuario</label>
            <select id="${isSupabase ? 'auth-user' : 'user-select'}">
              ${appUsers.map(user => `<option value="${user.username}">${user.name} (${user.role === 'supervisor' ? 'Supervisor' : 'Operador/a'})</option>`).join('')}
            </select>
          </div>

          <div class="form-field">
            <label for="${isSupabase ? 'auth-password' : 'demo-pin'}">Contraseña</label>
            <input id="${isSupabase ? 'auth-password' : 'demo-pin'}" type="password" autocomplete="current-password" placeholder="Tu contraseña" value="${isSupabase ? 'giz2026' : 'demo'}" required />
          </div>

          <button class="login-btn-simple" type="submit">Ingresar al sistema</button>
        </form>

        <div class="login-footer-simple">
          <span class="live-dot"></span>
          <span>${isSupabase ? 'Conectado a Supabase' : 'Modo demo local'}</span>
        </div>
      </div>
    </div>
  `;
}

function renderLogin() {
  const login = document.getElementById('login-screen');
  const shell = document.getElementById('app-shell');
  login.hidden = false;
  login.innerHTML = loginScreen();
  shell.hidden = true;

  const isSupabase = backendMode === 'supabase';
  const userSelect = document.getElementById(isSupabase ? 'auth-user' : 'user-select');
  const pwInput = document.getElementById(isSupabase ? 'auth-password' : 'demo-pin');

  if (userSelect && pwInput && isSupabase) {
    userSelect.addEventListener('change', () => {
      const user = appUsers.find(u => u.username === userSelect.value);
      pwInput.value = user?.role === 'supervisor' ? 'admin2026' : 'giz2026';
    });
  }

  document.getElementById('login-form').addEventListener('submit', event => {
    event.preventDefault();
    if (backendMode === 'supabase') {
      signInRemote();
      return;
    }
    const user = appUsers.find(item => item.username === document.getElementById('user-select').value);
    if (!user || document.getElementById('demo-pin').value !== 'demo') {
      showToast('Revisa tu usuario y clave');
      return;
    }
    currentUser = user;
    sessionStorage.setItem('giz-current-user', JSON.stringify(user));
    const assigned = visibleContacts();
    selectedContactId = firstActionable(assigned)?.id || state.contacts[0]?.id;
    activeView = user.role === 'operator' ? 'operator' : 'dashboard';
    render();
  });
}

async function signInRemote() {
  const selected = appUsers.find(user => user.username === document.getElementById('auth-user').value);
  const email = selected?.authEmail;
  const password = document.getElementById('auth-password').value;
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) { showToast(error.message); return; }
  try {
    await setRemoteUser(data.session.user);
    await loadRemoteState();
    activeView = currentUser.role === 'operator' ? 'operator' : 'dashboard';
    subscribeRemoteChanges();
  } catch (innerError) {
    console.error(innerError);
    showToast('Sesión iniciada. Algunos datos no se cargaron completamente.');
    activeView = currentUser?.role === 'operator' ? 'operator' : 'dashboard';
  }
  selectedContactId = firstActionable(state.contacts)?.id || null;
  selectedOutcome = '';
  render();
}

async function setRemoteUser(user) {
  const { data: profile, error } = await supabaseClient.from('profiles').select('id, full_name, role, active').eq('id', user.id).single();
  if (error || !profile || !profile.active) throw new Error('El usuario no tiene un perfil operativo activo');
  currentUser = { username: user.email, name: profile.full_name, initials: initials(profile.full_name), role: profile.role, authId: user.id };
  remoteProfiles.set(user.id, currentUser);
}

function remoteStatus(status) {
  return { not_managed: 'pending', no_answer: 'no-answer', wrong_number: 'wrong', refused: 'refused', discarded: 'discarded' }[status] || status;
}

async function loadRemoteState() {
  try {
    const { data: profiles } = await supabaseClient.from('profiles').select('id, full_name, role, active');
    remoteProfiles = new Map((profiles || []).map(profile => { const appUser = appUsers.find(user => user.name === profile.full_name); return [profile.id, { ...profile, initials: initials(profile.full_name), username: appUser?.username || profile.full_name, authEmail: appUser?.authEmail || '' }]; }));
  } catch (error) { console.error('Error loading profiles:', error); }
  try {
    const contactQuery = supabaseClient.from('contacts').select('*').order('created_at', { ascending: true });
    const { data: contacts } = currentUser.role === 'operator'
      ? await contactQuery.eq('assigned_operator_id', currentUser.authId)
      : await contactQuery;
    state.contacts = (contacts || []).map(contact => {
      const operator = remoteProfiles.get(contact.assigned_operator_id);
      const extra = contact.extra_data || {};
      return { ...contact, id: contact.external_id || contact.id, remoteId: contact.id, name: contact.name, phone: contact.phone_normalized || contact.phone_raw || 'No tiene teléfono', phoneRaw: contact.phone_raw || '', phoneOther: extra.phone_other || '', email: extra.email || '', parish: contact.parish || 'No tiene información', location: contact.location || 'No tiene información', baseName: extra.base_name || 'Base sin nombre', organization: extra.organization || 'No tiene información', sector: extra.sector || 'No tiene información', cargo: extra.cargo || 'No tiene información', artField: extra.art_field || 'No tiene información', status: remoteStatus(contact.current_status), attempts: contact.attempt_count || 0, last: contact.last_attempt_at ? formatDateTime(contact.last_attempt_at) : 'Sin gestión', lastAttemptAt: contact.last_attempt_at || null, operator: operator?.initials || '', raffleEmail: contact.raffle_email || '' };
    });
  } catch (error) { console.error('Error loading contacts:', error); }
  try {
    const { data: attempts } = await supabaseClient.from('call_attempts').select('contact_id, operator_id, attempt_number, notes, completed_at, outcome_id').order('completed_at', { ascending: false });
    const { data: outcomes } = await supabaseClient.from('outcomes').select('id, code');
    const outcomeById = new Map((outcomes || []).map(outcome => [outcome.id, outcome.code]));
    const contactById = new Map(state.contacts.map(contact => [contact.remoteId || contact.id, contact]));
    state.history = (attempts || []).map(attempt => { const contact = contactById.get(attempt.contact_id); const operator = remoteProfiles.get(attempt.operator_id); return { contact: contact?.name || attempt.contact_id, id: contact?.id || attempt.contact_id, result: outcomeById.get(attempt.outcome_id) || 'pending', operator: operator?.full_name || '', attempt: attempt.attempt_number, date: formatDateTime(attempt.completed_at), notes: attempt.notes || '', raffleEmail: contact?.raffleEmail || '' }; });
  } catch (error) { console.error('Error loading attempts:', error); }
  try {
    if (currentUser) {
      const shiftQuery = supabaseClient.from('operator_shifts').select('id, operator_id, started_at, ended_at').order('started_at', { ascending: false }).limit(100); const { data: shifts } = currentUser.role === 'operator' ? await shiftQuery.eq('operator_id', currentUser.authId) : await shiftQuery;
      state.shifts = (shifts || []).map(shift => { const profile = remoteProfiles.get(shift.operator_id); return { id: shift.id, operatorId: shift.operator_id, username: profile?.username || profile?.full_name || shift.operator_id, operator: profile?.full_name || '', startedAt: shift.started_at, endedAt: shift.ended_at }; });
    }
  } catch (error) { console.error('Error loading shifts:', error); }
  try {
    if (!currentCampaign) {
      const { data: campaigns } = await supabaseClient.from('campaigns').select('id, name').eq('status', 'active').order('created_at', { ascending: true }).limit(1);
      currentCampaign = campaigns?.[0] || null;
    }
  } catch (error) { console.error('Error loading campaign:', error); }
  if (!currentCampaign) {
    const contactWithCampaign = state.contacts.find(contact => contact.campaign_id);
    if (contactWithCampaign?.campaign_id) currentCampaign = { id: contactWithCampaign.campaign_id, name: 'Encuesta GIZ' };
  }
  try {
    const { data: outcomes } = await supabaseClient.from('outcomes').select('id, code');
    outcomeCache = new Map((outcomes || []).map(outcome => [outcome.code, outcome.id]));
  } catch (error) { console.error('Error loading outcomes:', error); }
}

function scheduleRemoteRefresh() {
  clearTimeout(remoteReloadTimer);
  remoteReloadTimer = setTimeout(async () => {
    if (remoteReloadBusy) return;
    remoteReloadBusy = true;
    try { await loadRemoteState(); render(); } catch (error) { console.error('Realtime refresh failed:', error); } finally { remoteReloadBusy = false; }
  }, 350);
}

function subscribeRemoteChanges() {
  if (!supabaseClient || !currentUser) return;
  if (remoteChannel) supabaseClient.removeChannel(remoteChannel);
  remoteChannel = supabaseClient.channel('call-center-live')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'contacts' }, scheduleRemoteRefresh)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'call_attempts' }, scheduleRemoteRefresh)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'operator_shifts' }, scheduleRemoteRefresh)
    .subscribe();
}

function updateShell() {
  const shell = document.getElementById('app-shell');
  const login = document.getElementById('login-screen');
  shell.hidden = false;
  login.hidden = true;
  shell.classList.toggle('operator-shell', currentUser.role === 'operator');
  document.getElementById('sidebar').innerHTML = currentUser.role === 'operator' ? operatorSidebar() : supervisorSidebar();
  document.querySelector('.crumb').innerHTML = `<span class="crumb-root">Campañas</span><b class="crumb-sep">/</b><strong class="crumb-active">Encuesta GIZ</strong>`;
  document.querySelector('.top-avatar').textContent = currentUser.initials;
  document.querySelector('.top-user-name').textContent = currentUser.name;
  document.querySelector('.sync-status').innerHTML = backendMode === 'supabase' ? '<span class="live-dot"></span> Conectado a Supabase' : '<span class="live-dot"></span> Modo demo local';
}

function operatorSidebar() {
  const assigned = visibleContacts();
  return `
    <div class="brand">
      <div class="brand-header-simple">
        <img class="brand-logo-round" src="/logo-icon.svg" alt="Clima Social" />
        <div class="brand-text-simple">
          <strong>Clima Social</strong>
          <span class="brand-sub-discreet">Encuesta GIZ</span>
        </div>
      </div>
    </div>
    <div class="workspace-label">MI ESPACIO</div>
    <nav class="main-nav" aria-label="Navegación principal">
      <button class="nav-item ${activeView === 'operator' ? 'active' : ''}" data-view="operator">
        <span class="nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </span>
        <span>Mis contactos</span>
        <span class="nav-badge">${assigned.length}</span>
      </button>
      <button class="nav-item ${activeView === 'history' ? 'active' : ''}" data-view="history">
        <span class="nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
        </span>
        <span>Mi historial</span>
      </button>
    </nav>
    <div class="sidebar-campaign">
      <div class="campaign-label"><span class="live-dot"></span> CAMPAÑA ACTIVA</div>
      <strong>Encuesta GIZ</strong>
      <span>Fase III · 2026</span>
      <div class="mini-progress"><span style="width:${percentage(managedCount(assigned), assigned.length)}"></span></div>
      <div class="campaign-meta">
        <span>${percentage(managedCount(assigned), assigned.length)} avance</span>
        <span>${assigned.length} contactos</span>
      </div>
    </div>
    <div class="sidebar-footer">
      <div class="user-card">
        <div class="avatar avatar-emerald">${currentUser.initials}</div>
        <div class="user-details">
          <strong>${currentUser.name}</strong>
          <span>Operador/a</span>
        </div>
        <span class="user-menu-symbol">•••</span>
      </div>
      <div class="secure-note"><span>🛡️</span> Sistema protegido</div>
    </div>
  `;
}

function supervisorSidebar() {
  const progress = percentage(managedCount(), state.contacts.length);
  return `
    <div class="brand">
      <div class="brand-header-simple">
        <img class="brand-logo-round" src="/logo-icon.svg" alt="Clima Social" />
        <div class="brand-text-simple">
          <strong>Clima Social</strong>
          <span class="brand-sub-discreet">Encuesta GIZ</span>
        </div>
      </div>
    </div>
    <div class="workspace-label">SUPERVISIÓN</div>
    <nav class="main-nav" aria-label="Navegación principal">
      <button class="nav-item ${activeView === 'dashboard' ? 'active' : ''}" data-view="dashboard">
        <span class="nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
        </span>
        <span>Resumen</span>
        <span class="nav-arrow">›</span>
      </button>
      <button class="nav-item ${activeView === 'contacts' ? 'active' : ''}" data-view="contacts">
        <span class="nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </span>
        <span>Todos los contactos</span>
      </button>
      <button class="nav-item ${activeView === 'shifts' ? 'active' : ''}" data-view="shifts">
        <span class="nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </span>
        <span>Jornadas</span>
      </button>
      <button class="nav-item ${activeView === 'history' ? 'active' : ''}" data-view="history">
        <span class="nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
        </span>
        <span>Historial</span>
      </button>
      <button class="nav-item ${activeView === 'import' ? 'active' : ''}" id="import-nav" data-view="import" onclick="event.stopPropagation(); openImportView()">
        <span class="nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
        </span>
        <span>Importar base</span>
      </button>
    </nav>
    <div class="sidebar-campaign">
      <div class="campaign-label"><span class="live-dot"></span> CAMPAÑA ACTIVA</div>
      <strong>Clima Social · GIZ</strong>
      <span>Base de campo</span>
      <div class="mini-progress"><span style="width:${progress}"></span></div>
      <div class="campaign-meta">
        <span>${progress} avance</span>
        <span>${state.contacts.length} registros</span>
      </div>
    </div>
    <div class="sidebar-footer">
      <div class="user-card">
        <div class="avatar avatar-emerald">${currentUser.initials}</div>
        <div class="user-details">
          <strong>${currentUser.name}</strong>
          <span>Supervisor</span>
        </div>
        <span class="user-menu-symbol">•••</span>
      </div>
      <div class="secure-note"><span>🛡️</span> Datos protegidos y auditados</div>
    </div>
  `;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && saved.version === DEMO_VERSION && Array.isArray(saved.contacts) ? saved : { version: DEMO_VERSION, contacts: demoContacts, history: [], shifts: [] };
  } catch { return { version: DEMO_VERSION, contacts: demoContacts, history: [], shifts: [] }; }
}

function saveState() { state.version = DEMO_VERSION; localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function getContact(id) { return state.contacts.find(contact => contact.id === id); }
function initials(name) { return name.split(' ').slice(0, 2).map(word => word[0]).join('').toUpperCase(); }
function escapeHtml(value) { return String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char])); }
function firstName(name) { return String(name || '').trim().split(/\s+/)[0] || 'allí'; }
function count(status) { return state.contacts.filter(contact => contact.status === status).length; }
function managedCount(contacts = state.contacts) { return contacts.filter(contact => contact.attempts > 0).length; }
function percentage(value, total = state.contacts.length) { return total ? `${((value / total) * 100).toFixed(1)}%` : '0%'; }
function formatTime() { return new Intl.DateTimeFormat('es-EC', { hour: '2-digit', minute: '2-digit' }).format(new Date()); }

function render() {
  if (!currentUser) { renderLogin(); return; }
  updateShell();
  const content = document.getElementById('app-content');
  content.classList.remove('view-enter');
  void content.offsetWidth;
  content.classList.add('view-enter');
  const views = { dashboard: renderSupervisorDashboard, operator: renderOperatorBoard, contacts: renderContacts, shifts: renderShifts, history: renderHistory, import: renderImport };
  try {
    content.innerHTML = views[activeView]();
  } catch (error) {
    console.error(error);
    content.innerHTML = `<article class="card empty-state app-error">No se pudo abrir esta vista: ${escapeHtml(error?.message || 'Error desconocido')}</article>`;
  }
  bindViewEvents();
}

function pageHeading(eyebrow, title, copy, action = '') {
  return `<div class="page-heading"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="heading-copy">${copy}</p></div>${action}</div>`;
}

function operatorMonitoringTable() {
  const operators = appUsers.filter(user => user.role === 'operator');
  return `<div class="table-wrap"><table class="data-table monitoring-table"><thead><tr><th>Operador/a</th><th>Asignados</th><th>Gestionados</th><th>Efectivas (En vivo)</th><th>Reprogramadas</th><th>No contestan</th><th>Rechazos</th><th>Jornada</th><th>Última actividad</th></tr></thead><tbody>${operators.map(user => { const assigned = state.contacts.filter(contact => contact.operator === user.initials); const managed = managedCount(assigned); const effective = assigned.filter(contact => contact.status === 'effective').length; const pending = assigned.filter(contact => contact.status === 'pending' && contact.attempts > 0).length; const noAnswer = assigned.filter(contact => contact.status === 'no-answer').length; const refused = assigned.filter(contact => contact.status === 'refused').length; const active = Boolean(getActiveShift(user)); const last = state.history.find(item => item.operator === user.name); return `<tr><td><div class="operator-cell"><div class="small-avatar">${user.initials}</div><div><strong>${user.name}</strong><span>${user.username}</span></div></div></td><td>${assigned.length}</td><td><strong>${managed}</strong></td><td class="metric-effective">${effective}</td><td class="metric-pending">${pending}</td><td class="metric-no-answer">${noAnswer}</td><td class="metric-refused">${refused}</td><td><span class="status-pill ${active ? 'on' : 'off'}">${active ? 'En jornada' : 'Sin iniciar'}</span></td><td>${last ? escapeHtml(last.date) : 'Sin actividad'}</td></tr>`; }).join('')}</tbody></table></div>`;
}

function renderFunnelChart(contacts = state.contacts) {
  const total = contacts.length;
  const managed = managedCount(contacts);
  const effective = contacts.filter(c => c.status === 'effective').length;
  const rescheduled = contacts.filter(c => c.status === 'pending' && c.attempts > 0).length;

  const pctManaged = total ? `${Math.round((managed / total) * 100)}%` : '0%';
  const pctConnected = total ? `${Math.round(((effective + rescheduled) / total) * 100)}%` : '0%';
  const pctEffective = total ? `${Math.round((effective / total) * 100)}%` : '0%';

  return `
    <article class="card chart-card">
      <div class="card-header">
        <div>
          <h2 class="card-title"><span>🔻</span> Embudo de Conversión</h2>
          <p class="card-subtitle">Avance progresivo desde base hasta encuesta efectiva</p>
        </div>
      </div>
      <div class="funnel-container" style="padding: 16px 20px; display: flex; flex-direction: column; gap: 12px;">
        <div class="funnel-step">
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
            <span><strong>1. Base total cargada</strong></span>
            <span><strong>${total}</strong> (100%)</span>
          </div>
          <div style="height: 14px; background: var(--bg-canvas); border-radius: 6px; overflow: hidden; border: 1px solid var(--border-subtle);">
            <div style="height: 100%; width: 100%; background: #64748b; border-radius: 6px;"></div>
          </div>
        </div>

        <div class="funnel-step">
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
            <span><strong>2. Llamadas realizadas</strong></span>
            <span><strong>${managed}</strong> (${pctManaged})</span>
          </div>
          <div style="height: 14px; background: var(--bg-canvas); border-radius: 6px; overflow: hidden; border: 1px solid var(--border-subtle);">
            <div style="height: 100%; width: ${pctManaged}; background: #3b82f6; border-radius: 6px;"></div>
          </div>
        </div>

        <div class="funnel-step">
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
            <span><strong>3. Contacto logrado (Efectivas + Reprogramadas)</strong></span>
            <span><strong>${effective + rescheduled}</strong> (${pctConnected})</span>
          </div>
          <div style="height: 14px; background: var(--bg-canvas); border-radius: 6px; overflow: hidden; border: 1px solid var(--border-subtle);">
            <div style="height: 100%; width: ${pctConnected}; background: #f59e0b; border-radius: 6px;"></div>
          </div>
        </div>

        <div class="funnel-step">
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
            <span><strong>4. Encuestas en vivo completadas</strong></span>
            <span style="color: #10b981;"><strong>${effective}</strong> (${pctEffective})</span>
          </div>
          <div style="height: 14px; background: var(--bg-canvas); border-radius: 6px; overflow: hidden; border: 1px solid var(--border-subtle);">
            <div style="height: 100%; width: ${Math.max(4, parseInt(pctEffective) || 0)}%; background: #10b981; border-radius: 6px;"></div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderHourlyChart(history = state.history) {
  const buckets = [
    { label: '08-10h', start: 8, end: 10, total: 0, effective: 0 },
    { label: '10-12h', start: 10, end: 12, total: 0, effective: 0 },
    { label: '12-14h', start: 12, end: 14, total: 0, effective: 0 },
    { label: '14-16h', start: 14, end: 16, total: 0, effective: 0 },
    { label: '16-18h', start: 16, end: 18, total: 0, effective: 0 },
    { label: '18-20h', start: 18, end: 20, total: 0, effective: 0 }
  ];

  history.forEach(item => {
    let hour = -1;
    if (item.date) {
      const match = item.date.match(/(\d{1,2}):(\d{2})/);
      if (match) hour = parseInt(match[1], 10);
    }
    if (hour >= 0) {
      const b = buckets.find(b => hour >= b.start && hour < b.end) || buckets[buckets.length - 1];
      if (b) {
        b.total += 1;
        if (item.result === 'effective') b.effective += 1;
      }
    }
  });

  const maxTotal = Math.max(1, ...buckets.map(b => b.total));

  return `
    <article class="card chart-card">
      <div class="card-header">
        <div>
          <h2 class="card-title"><span>⏰</span> Actividad por Franja Horaria</h2>
          <p class="card-subtitle">Horas con mayor efectividad de llamada</p>
        </div>
      </div>
      <div style="padding: 16px 20px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; height: 110px; gap: 8px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
          ${buckets.map(b => {
            const hTotal = Math.max(8, Math.round((b.total / maxTotal) * 90));
            const hEff = b.total ? Math.max(4, Math.round((b.effective / maxTotal) * 90)) : 0;
            return `
              <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; height: 100%; justify-content: flex-end;">
                <div style="display: flex; gap: 3px; align-items: flex-end;">
                  <div style="width: 12px; height: ${hTotal}px; background: #94a3b8; border-radius: 3px 3px 0 0;" title="Total: ${b.total}"></div>
                  <div style="width: 12px; height: ${hEff}px; background: #10b981; border-radius: 3px 3px 0 0;" title="Efectivas: ${b.effective}"></div>
                </div>
                <span style="font-size: 10px; font-family: var(--font-mono); color: var(--text-muted);">${b.label}</span>
              </div>
            `;
          }).join('')}
        </div>
        <div style="display: flex; gap: 16px; justify-content: center; margin-top: 10px; font-size: 11px; color: var(--text-muted);">
          <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 8px; height: 8px; background: #94a3b8; border-radius: 2px;"></span> Total llamadas</span>
          <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 8px; height: 8px; background: #10b981; border-radius: 2px;"></span> Efectivas</span>
        </div>
      </div>
    </article>
  `;
}

function renderSupervisorDashboard() {
  const total = state.contacts.length;
  const assigned = state.contacts.filter(contact => contact.operator).length;
  const managed = managedCount();
  const effective = count('effective');
  const rescheduled = state.contacts.filter(contact => contact.status === 'pending' && contact.attempts > 0).length;
  const noAnswer = count('no-answer');
  const refused = count('refused');
  const discarded = count('discarded');
  const activeOperators = appUsers.filter(user => user.role === 'operator' && getActiveShift(user)).length;

  return `
    ${pageHeading('Monitoreo de campo', 'Estado de la operación GIZ', 'Supervisa en tiempo real el avance de encuestas asistidas, reprogramaciones y reintentos.', '<div style="display:flex;gap:8px;"><button class="button-secondary" onclick="exportHistoryXlsx()">⬇ Exportar Excel</button><button class="button-primary" data-view-action="import" onclick="event.stopPropagation(); openImportView()"><span class="plus">+</span> Importar base</button></div>')}
    <section class="metric-grid supervisor-kpis">
      ${metricCard('Operadores en jornada', activeOperators, 'de 3 operadores', '')}
      ${metricCard('Contactos asignados', assigned, `de ${total} en base`, '')}
      ${metricCard('Gestiones realizadas', managed, 'llamadas registradas', '')}
      ${metricCard('Encuestas en vivo', effective, 'efectivas Kobo', 'trend-up')}
      ${metricCard('Reprogramadas', rescheduled, 'citas pendientes', '')}
      ${metricCard('No contestan', noAnswer, 'reintentos 1 y 2', '')}
      ${metricCard('Incontactables', discarded, '3 intentos completados', '')}
    </section>

    <section class="supervisor-focus-grid">
      <article class="card operator-monitoring-card">
        <div class="card-header">
          <div><h2 class="card-title">Seguimiento por operador/a</h2><p class="card-subtitle">Detalle operativo actualizado con cada llamada</p></div>
          <span class="status-pill on">● En vivo</span>
        </div>
        ${operatorMonitoringTable()}
      </article>

      <article class="card operation-summary-card">
        <div class="card-header">
          <div><h2 class="card-title">Estado general</h2><p class="card-subtitle">Distribución actual de la base</p></div>
        </div>
        <div class="operation-summary-list">
          <div><span class="summary-dot assigned"></span><strong>Asignados</strong><b>${assigned}</b></div>
          <div><span class="summary-dot managed"></span><strong>Gestionados</strong><b>${managed}</b></div>
          <div><span class="summary-dot effective"></span><strong>Efectivas en vivo</strong><b>${effective}</b></div>
          <div><span class="summary-dot pending"></span><strong>Reprogramadas</strong><b>${rescheduled}</b></div>
          <div><span class="summary-dot no-answer"></span><strong>No contestan</strong><b>${noAnswer}</b></div>
          <div><span class="summary-dot refused"></span><strong>Rechazaron</strong><b>${refused}</b></div>
        </div>
      </article>

      <article class="card supervisor-activity-card">
        <div class="card-header">
          <div><h2 class="card-title">Última actividad</h2><p class="card-subtitle">Movimientos recientes del equipo</p></div>
          <button class="button-secondary" data-view-action="history">Ver historial</button>
        </div>
        ${activityList()}
      </article>
    </section>

    <section class="dashboard-grid" style="margin-top: 20px;">
      ${renderFunnelChart()}
      ${renderHourlyChart()}
    </section>
  `;
}

function renderDashboard() {
  const total = state.contacts.length;
  const managed = managedCount();
  const effective = count('effective');
  return `${pageHeading('Martes, 24 de junio de 2025', 'Resumen de operación', 'Monitorea el avance de tu equipo y mantén el ritmo de la campaña.', '<button class="button-primary" data-view-action="import" onclick="event.stopPropagation(); openImportView()"><span class="plus">+</span> Importar base</button>')}
    <section class="metric-grid">
      ${metricCard('Total de contactos', total.toLocaleString('es-EC'), 'base activa', '')}
      ${metricCard('Contactos gestionados', managed.toLocaleString('es-EC'), '+12.4% vs. ayer', 'trend-up')}
      ${metricCard('Llamadas efectivas', effective.toLocaleString('es-EC'), '+8.7% vs. ayer', 'trend-up')}
      ${metricCard('Avance de campaña', percentage(managed, total), 'Meta: 100%', 'trend-up')}
    </section>
    <section class="dashboard-grid">
      <article class="card"><div class="card-header"><div><h2 class="card-title">Ritmo de gestión</h2><p class="card-subtitle">Contactos gestionados durante la semana</p></div><select class="range-select" aria-label="Rango de gráfica"><option>Esta semana</option><option>Este mes</option></select></div>${barChart()} </article>
      <article class="card donut-card"><div class="card-header"><div><h2 class="card-title">Estado de la campaña</h2><p class="card-subtitle">Distribución de contactos</p></div></div><div class="donut-area"><div class="donut"><div class="donut-center"><strong>${percentage(managed, total)}</strong><span>AVANCE</span></div></div><div class="status-legend">${statusLegend('effective', 'Efectivas', effective)}${statusLegend('pending', 'Pendientes', total - managed)}${statusLegend('unmanaged', 'Sin gestionar', Math.max(0, total - managed))}</div></div><a class="card-footer-link" href="#" data-view-action="contacts">Ver todos los contactos <span>→</span></a></article>
    </section>
    <section class="bottom-grid"><article class="card"><div class="card-header"><div><h2 class="card-title">Productividad por operadora</h2><p class="card-subtitle">Rendimiento de hoy · 3 operadoras</p></div><button class="button-secondary" data-view-action="history">Ver reporte</button></div>${operatorTable()}</article><article class="card"><div class="card-header"><div><h2 class="card-title">Actividad reciente</h2><p class="card-subtitle">Últimas acciones del equipo</p></div></div>${activityList()}</article></section>`;
}

function metricCard(label, value, note, className) { return `<article class="metric-card"><div class="metric-label">${label}</div><div class="metric-value">${value}</div><div class="metric-foot"><span class="${className}">${className ? '↗' : '·'}</span><span class="metric-note">${note}</span></div></article>`; }
function statusLegend(color, label, value) { return `<div class="status-item"><i class="${color}"></i><div>${label}<strong>${value.toLocaleString('es-EC')}</strong></div></div>`; }
function barChart() {
  const values = [44, 62, 53, 78, 67, 82, 59]; const labels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Hoy'];
  return `<div class="chart-wrap"><div class="chart"><div class="chart-axis"><span>200</span><span>100</span><span>0</span></div>${values.map((value, index) => `<div class="bar-group"><div class="bar-stack"><span class="bar secondary" style="height:${Math.max(9, value * .86)}%"></span><span class="bar ${index === 6 ? 'primary' : ''}" style="height:${value}%"></span></div><span class="bar-label">${labels[index]}</span></div>`).join('')}</div><div class="legend"><span><i class="legend-main"></i> Gestionados</span><span><i class="legend-secondary"></i> Meta diaria</span></div></div>`;
}
function operatorTable() { return `<div class="table-wrap"><table class="data-table"><thead><tr><th>Operadora</th><th>Gestionados</th><th>Avance</th><th>Efectivas</th><th>Actividad</th></tr></thead><tbody>${appUsers.filter(user => user.role === 'operator').map(user => { const assigned = state.contacts.filter(contact => contact.operator === user.initials); const managed = managedCount(assigned); const effective = assigned.filter(contact => contact.status === 'effective').length; const active = Boolean(getActiveShift(user)); return `<tr><td><div class="operator-cell"><div class="small-avatar">${user.initials}</div><div><strong>${user.name}</strong><span>Operadora</span></div></div></td><td><strong>${managed}</strong></td><td><div class="progress-cell"><div class="row-progress"><span style="width:${percentage(managed, assigned.length)}"></span></div><span>${percentage(managed, assigned.length)}</span></div></td><td><strong>${effective}</strong></td><td><span class="status-pill ${active ? 'on' : 'off'}">${active ? 'En jornada' : 'Sin iniciar'}</span></td></tr>`; }).join('')}</tbody></table></div>`; }
function activityList() { const items = state.history.slice(0, 3).map(item => ({ icon: item.result === 'effective' ? '✓' : item.result === 'no-answer' ? '◌' : '↻', className: item.result === 'effective' ? '' : item.result === 'no-answer' ? 'blue' : 'violet', title: outcomeLabels[item.result] || item.result, copy: `${item.operator} · ${item.id}`, time: item.date })); return items.length ? `<div class="activity-list">${items.map(item => `<div class="activity"><div class="activity-icon ${item.className}">${item.icon}</div><div class="activity-copy"><strong>${item.title}</strong><span>${item.copy}</span></div><time class="activity-time">${item.time}</time></div>`).join('')}</div>` : '<div class="empty-state">Todavía no hay actividad registrada.</div>'; }

function renderOperatorQueue(assigned, selectedContact) {
  const attention = assigned.filter(item => item.attempts > 0 && (item.status === 'pending' || item.status === 'no-answer'));
  const newContacts = assigned.filter(item => item.attempts === 0 && item.status === 'pending');
  const itemMarkup = item => `<button class="queue-item queue-${item.status} ${item.id === selectedContact.id ? 'active' : ''}" data-contact-id="${item.id}"><div class="small-avatar">${initials(item.name)}</div><div class="queue-item-copy"><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.parish)} · ${item.id}</span>${item.id === selectedContact.id ? '<div class="lock-tag">⌁ En gestión por ti</div>' : ''}</div><span class="queue-status">${item.status === 'no-answer' ? 'No contesta' : item.attempts ? 'Reintentar' : 'Nuevo'}</span></button>`;
  return `<div class="queue-list">${attention.length ? `<div class="queue-section-label attention-label">Requieren seguimiento <span>${attention.length}</span></div>${attention.map(itemMarkup).join('')}` : ''}${newContacts.length ? `<div class="queue-section-label new-label">Nuevos contactos <span>${newContacts.length}</span></div>${newContacts.map(itemMarkup).join('')}` : ''}${!attention.length && !newContacts.length ? '<div class="empty-state">No tienes contactos pendientes.</div>' : ''}</div>`;
}

function renderOperator() {
  const activeShift = getActiveShift();
  if (!activeShift) return `${pageHeading('Jornada de trabajo', `Hola, ${escapeHtml(currentUser.name.split(' ')[0])}`, 'Antes de comenzar tus llamadas debes registrar el inicio de tu jornada.', '')}<article class="card shift-start-card"><div class="shift-icon">◷</div><h2>¿Lista para comenzar?</h2><p>Al iniciar la jornada registraremos la fecha y hora. Cuando termines, recuerda finalizarla para calcular tu tiempo de trabajo.</p><button class="button-primary" id="start-shift">Iniciar jornada <span>→</span></button></article>`;
  const contact = getContact(selectedContactId) || firstActionable(visibleContacts());
  if (!contact) return `${pageHeading('Jornada del operador', 'Sin contactos disponibles', 'Importa una base o solicita una asignación al supervisor.')}`;
  const assigned = visibleContacts();
  const managed = managedCount(assigned);
  return `${pageHeading('Jornada de hoy', `Hola, ${escapeHtml(currentUser.name.split(' ')[0])}`, `${assigned.length} contactos asignados · ${managed} ya gestionados.`, '<button class="button-secondary" id="end-shift">Finalizar jornada</button>')}<div class="shift-live-note"><span class="live-dot"></span> Jornada iniciada ${formatDateTime(activeShift.startedAt)} · Tiempo transcurrido: ${formatDuration(activeShift.startedAt)}</div><div class="operator-summary"><div><span>Asignados</span><strong>${assigned.length}</strong></div><div><span>Gestionados</span><strong>${managed}</strong></div><div><span>Pendientes</span><strong>${assigned.filter(item => item.status === 'pending' || item.status === 'no-answer').length}</strong></div></div><section class="operator-layout"><article class="card operator-card"><div class="contact-top"><div><small>CONTACTO ${escapeHtml(contact.id)} · INTENTO ${contact.attempts + 1}</small><h2>${escapeHtml(contact.name)}</h2><p>${escapeHtml(contact.parish)} · ${escapeHtml(contact.location)}</p></div><div class="contact-number">${escapeHtml(contact.phone)}</div></div><div class="contact-body"><div class="info-grid"><div class="info-item"><label>Identificador</label><strong>${escapeHtml(contact.id)}</strong></div><div class="info-item"><label>Última gestión</label><strong>${escapeHtml(contact.last)}</strong></div><div class="info-item"><label>Estado actual</label><strong class="table-status ${contact.status}">${statusLabels[contact.status] || 'Pendiente'}</strong></div><div class="info-item"><label>Asignado a</label><strong>${escapeHtml(currentUser.name)}</strong></div></div><div class="call-actions"><h3>Resultado de la llamada</h3><div class="outcome-grid"><button class="outcome-button green ${selectedOutcome === 'effective' ? 'selected' : ''}" data-outcome="effective">✓ Efectiva</button><button class="outcome-button ${selectedOutcome === 'pending' ? 'selected' : ''}" data-outcome="pending">◷ Pendiente</button><button class="outcome-button ${selectedOutcome === 'no-answer' ? 'selected' : ''}" data-outcome="no-answer">◌ No contesta</button><button class="outcome-button red ${selectedOutcome === 'wrong' ? 'selected' : ''}" data-outcome="wrong">× Número incorrecto</button><button class="outcome-button ${selectedOutcome === 'pending' ? 'selected' : ''}" data-outcome="pending">↻ Reintentar</button></div><label class="notes-label" for="notes">Observaciones</label><textarea class="notes-input" id="notes" placeholder="Escribe aquí cualquier detalle relevante..."></textarea><div class="save-row"><small>Se registra operador, fecha, hora e intento.</small><button class="button-primary" id="save-call" ${selectedOutcome ? '' : 'disabled'}>Guardar gestión <span>→</span></button></div></div></div></article><article class="card queue-card"><div class="card-header"><div><h2 class="card-title">Mis contactos</h2><p class="card-subtitle">Reintentos y contactos por llamar</p></div><span class="status-pill on">${assigned.length} total</span></div>${renderOperatorQueue(assigned, contact)}</article></section>`;
}

function renderContactColumn(title, description, items, tone, selectedContact) {
  return `<section class="contact-column ${tone}"><div class="contact-column-header"><div><h2>${title}</h2><p>${description}</p></div><strong>${items.length}</strong></div><div class="column-search-wrap"><input class="column-search" data-column-search="${tone}" type="search" placeholder="Buscar por nombre..." aria-label="Buscar en ${title}" /></div><div class="contact-column-list">${items.length ? items.map(item => `<button class="contact-board-card ${item.id === selectedContact.id ? 'selected' : ''}" data-contact-id="${item.id}"><div class="contact-board-card-top"><span class="contact-board-initials">${initials(item.name)}</span><span class="contact-board-status">${item.attempts ? `${item.attempts} intento${item.attempts === 1 ? '' : 's'}` : 'Nuevo'}</span></div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.phone)}</span><small>${escapeHtml(item.parish)} · ${escapeHtml(item.id)}</small></button>`).join('') : '<div class="column-empty">No hay contactos aquí.</div>'}</div></section>`;
}

function contactGreetingName(contact) {
  const name = String(contact.name || '').trim();
  if (!name || /^no registra$/i.test(name)) return '';
  return firstName(name);
}

function renderSelectedContact(contact) {
  if (!contact) return '<article class="card selected-contact-card"><div class="empty-state">Selecciona un contacto de las columnas para comenzar.</div></article>';

  return `
    <article class="card selected-contact-card">
      <!-- 1. Cabecera del Contacto con Teléfono y Acciones -->
      <div class="contact-hero-header">
        <div class="contact-hero-info">
          <div class="contact-meta-tags">
            <span class="tag-code">COD: ${escapeHtml(contact.id)}</span>
            <span class="tag-attempt">Intento ${contact.attempts + 1} de ${MAX_ATTEMPTS}</span>
            <span class="table-status ${contact.status}">${contactStatusLabel(contact)}</span>
          </div>
          <h2 class="contact-hero-name">${escapeHtml(contact.name)}</h2>
          <div class="contact-location-line">
            <span class="loc-pin">📍</span>
            <span>${escapeHtml(contact.parish)} &bull; ${escapeHtml(contact.location)}</span>
          </div>
        </div>

        <div class="contact-hero-phone-box">
          <a class="phone-call-btn" href="tel:${escapeHtml(contact.phone)}" title="Llamar directamente">
            <span class="phone-icon">📞</span>
            <span class="phone-number">${escapeHtml(contact.phone)}</span>
          </a>
          <button class="contact-action copy-action" id="copy-phone" type="button" title="Copiar número">
            <span>📋 Copiar</span>
          </button>
        </div>
      </div>

      <div class="selected-contact-body">
        <!-- 2. Banner de Acción Principal: KoboToolbox en Vivo -->
        <div class="kobo-action-banner">
          <div class="kobo-banner-text">
            <div class="kobo-banner-badge">ENCUESTA EN VIVO &bull; ~10 MIN</div>
            <h3>Formulario Oficial de Evaluación</h3>
            <p>Abre la encuesta para registrar las respuestas en tiempo real durante la llamada telefónica.</p>
          </div>
          <a class="kobo-launch-btn" href="${SURVEY_URL}" target="_blank" rel="noreferrer">
            <span>📋 Abrir Kobo en Vivo</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        </div>

        <!-- 3. Ficha de Datos Reorganizada (2 Paneles Modulares) -->
        <div class="contact-details-panels">
          <!-- Panel 1: Datos de Formación -->
          <div class="detail-panel">
            <div class="panel-title">
              <span class="panel-icon">🎓</span>
              <strong>Información de Formación</strong>
            </div>
            <div class="detail-items-list">
              <div class="detail-row">
                <span class="detail-lbl">Curso / Actividad:</span>
                <span class="detail-val highlight">${escapeHtml(contact.artField || contact.organization || 'No especificado')}</span>
              </div>
              <div class="detail-row">
                <span class="detail-lbl">Organización:</span>
                <span class="detail-val">${escapeHtml(contact.organization || 'No especificado')}</span>
              </div>
              <div class="detail-row">
                <span class="detail-lbl">Facilitador / Cargo:</span>
                <span class="detail-val">${escapeHtml(contact.cargo || 'No especificado')}</span>
              </div>
            </div>
          </div>

          <!-- Panel 2: Datos de Contacto & Trazabilidad -->
          <div class="detail-panel">
            <div class="panel-title">
              <span class="panel-icon">👤</span>
              <strong>Datos de Contacto</strong>
            </div>
            <div class="detail-items-list">
              <div class="detail-row">
                <span class="detail-lbl">Correo electrónico:</span>
                <span class="detail-val">${escapeHtml(contact.email || 'No registra correo')}</span>
              </div>
              <div class="detail-row">
                <span class="detail-lbl">Otros teléfonos:</span>
                <span class="detail-val">${escapeHtml(contact.phoneOther || 'Ninguno adicional')}</span>
              </div>
              <div class="detail-row">
                <span class="detail-lbl">Última gestión:</span>
                <span class="detail-val">${escapeHtml(contact.last)}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Guion Sugerido de Llamada -->
        <div class="call-script-clean">
          <div class="script-head-clean">
            <span>🗣️</span>
            <strong>Guion sugerido de llamada</strong>
          </div>
          <p class="script-text">
            "Buenos días/tardes <strong>${contactGreetingName(contact) || 'estimado/a'}</strong>, le saluda <strong>${currentUser.name}</strong> de Clima Social en el marco del programa ProCohesión de GIZ. Le contactamos para una breve encuesta de seguimiento de 10 minutos sobre su participación en <em>${escapeHtml(contact.artField || contact.organization || 'el curso')}</em>. ¿Dispone de unos minutos para realizarla?"
          </p>
        </div>

        <!-- 5. Registro de Resultado de la Llamada -->
        <div class="call-actions-clean">
          <div class="actions-header-clean">
            <h3>Resultado de la llamada</h3>
            <span>Selecciona el estado y guarda</span>
          </div>

          <div class="outcome-grid-clean">
            <button type="button" class="outcome-btn-clean outcome-effective ${selectedOutcome === 'effective' ? 'active' : ''}" data-outcome="effective">
              <span class="btn-indicator">✓</span>
              <span class="btn-label">Encuesta completada</span>
            </button>
            <button type="button" class="outcome-btn-clean outcome-pending ${selectedOutcome === 'pending' ? 'active' : ''}" data-outcome="pending">
              <span class="btn-indicator">◷</span>
              <span class="btn-label">Reprogramada / Reintentar</span>
            </button>
            <button type="button" class="outcome-btn-clean outcome-no-answer ${selectedOutcome === 'no-answer' ? 'active' : ''}" data-outcome="no-answer">
              <span class="btn-indicator">◌</span>
              <span class="btn-label">No contesta</span>
            </button>
            <button type="button" class="outcome-btn-clean outcome-refused ${selectedOutcome === 'refused' ? 'active' : ''}" data-outcome="refused">
              <span class="btn-indicator">⊘</span>
              <span class="btn-label">Rechaza participar</span>
            </button>
            <button type="button" class="outcome-btn-clean outcome-wrong ${selectedOutcome === 'wrong' ? 'active' : ''}" data-outcome="wrong">
              <span class="btn-indicator">×</span>
              <span class="btn-label">Número incorrecto</span>
            </button>
          </div>

          <div class="notes-block">
            <label for="notes">Observaciones / Novedades de la llamada</label>
            <textarea id="notes" class="notes-clean" placeholder="Escribe aquí cualquier detalle de la llamada (ej. acordó llamar a las 16h00, o encuesta completada)..."></textarea>
          </div>

          <div class="save-actions-bar">
            <span class="save-hint">Se guardará con tu usuario e intento actual.</span>
            <button class="button-primary save-btn-main" id="save-call" ${selectedOutcome ? '' : 'disabled'}>
              <span>Guardar gestión</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderOperatorBoard() {
  const activeShift = getActiveShift();
  if (!activeShift) return `${pageHeading('Jornada de trabajo', `Hola, ${escapeHtml(currentUser.name.split(' ')[0])}`, 'Antes de comenzar tus llamadas debes registrar el inicio de tu jornada.', '')}<article class="card shift-start-card"><div class="shift-icon">◷</div><h2>¿Lista para comenzar?</h2><p>Al iniciar la jornada registraremos la fecha y hora. Cuando termines, recuerda finalizarla para calcular tu tiempo de trabajo.</p><button class="button-primary" id="start-shift">Iniciar jornada <span>→</span></button></article>`;
  const assigned = visibleContacts();
  const selected = getContact(selectedContactId);
  const contact = selected && selected.status !== 'effective' && selected.status !== 'wrong' ? selected : firstActionable(assigned);
  if (!contact) return `${pageHeading('Jornada de hoy', 'Sin contactos asignados', 'El supervisor todavía no ha asignado registros para trabajar.', '<button class="button-secondary" id="end-shift">Finalizar jornada</button>')}`;
  const normal = assigned.filter(item => item.status === 'pending' && item.attempts === 0);
  const pending = assigned.filter(item => item.status === 'pending' && item.attempts > 0);
  const noAnswer = assigned.filter(item => item.status === 'no-answer');
  const managed = managedCount(assigned);
  return `${pageHeading('Jornada de hoy', `Hola, ${escapeHtml(currentUser.name.split(' ')[0])}`, `${assigned.length} contactos asignados · ${managed} ya gestionados.`, '<button class="button-secondary" id="end-shift">Finalizar jornada</button>')}<div class="shift-live-note"><span class="live-dot"></span> Jornada iniciada ${formatDateTime(activeShift.startedAt)} · Tiempo transcurrido: ${formatDuration(activeShift.startedAt)}</div><div class="operator-summary"><div><span>Por llamar</span><strong>${normal.length}</strong></div><div><span>Pendientes</span><strong>${pending.length}</strong></div><div><span>No contestan</span><strong>${noAnswer.length}</strong></div></div><section class="operator-workspace"><div class="selected-workspace">${renderSelectedContact(contact)}</div><aside class="contact-board-side">${renderContactColumn('Por llamar', 'Contactos nuevos', normal, 'column-normal', contact)}${renderContactColumn('Pendientes', 'Por reintentar / Reprogramados', pending, 'column-pending', contact)}${renderContactColumn('No contestan', 'Volver a llamar', noAnswer, 'column-no-answer', contact)}</aside></section>`;
}

let reassignFormState = { fromOp: 'TP', toOp: 'AY', base: 'all', scope: 'pending' };

function getReassignCandidates(fromOp, base, scope) {
  return state.contacts.filter(contact => {
    if (fromOp === 'unassigned') {
      if (contact.operator) return false;
    } else {
      if (contact.operator !== fromOp) return false;
    }
    if (base !== 'all' && (contact.baseName || 'Sin especificar') !== base) {
      return false;
    }
    if (scope === 'pending') {
      return contact.status !== 'effective' && contact.status !== 'refused' && contact.status !== 'wrong' && contact.status !== 'discarded';
    } else if (scope === 'no-answer') {
      return contact.status === 'no-answer';
    } else if (scope === 'uncalled') {
      return contact.attempts === 0;
    }
    return true;
  });
}

function renderReassignmentCard() {
  const operators = appUsers.filter(u => u.role === 'operator');
  const bases = [...new Set(state.contacts.map(c => c.baseName).filter(Boolean))].sort();
  const candidates = getReassignCandidates(reassignFormState.fromOp, reassignFormState.base, reassignFormState.scope);
  const fromUserName = reassignFormState.fromOp === 'unassigned' ? 'Sin Asignar' : (operators.find(o => o.initials === reassignFormState.fromOp)?.name || reassignFormState.fromOp);
  const toUserName = operators.find(o => o.initials === reassignFormState.toOp)?.name || reassignFormState.toOp;

  return `
    <article class="card quick-assign-card" style="margin-top:24px;">
      <div class="page-card-header">
        <div>
          <h2 class="card-title"><span>⇄</span> Reasignación Flexible de Contactos</h2>
          <p class="card-subtitle">Transfiere contactos entre operadores con filtros por lote y estado.</p>
        </div>
      </div>
      
      <div class="reassign-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:14px;margin:16px 0;">
        <div class="form-group" style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-weight:700;font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;">1. Desde (Origen):</label>
          <select id="reassign-from-select" class="filter-select" style="width:100%;">
            ${operators.map(op => {
              const count = state.contacts.filter(c => c.operator === op.initials).length;
              return `<option value="${op.initials}" ${reassignFormState.fromOp === op.initials ? 'selected' : ''}>${op.name} (${count} contactos)</option>`;
            }).join('')}
            <option value="unassigned" ${reassignFormState.fromOp === 'unassigned' ? 'selected' : ''}>Sin Asignar (${state.contacts.filter(c => !c.operator).length})</option>
          </select>
        </div>

        <div class="form-group" style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-weight:700;font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;">2. Hacia (Destino):</label>
          <select id="reassign-to-select" class="filter-select" style="width:100%;">
            ${operators.map(op => `
              <option value="${op.initials}" ${reassignFormState.toOp === op.initials ? 'selected' : ''}>${op.name}</option>
            `).join('')}
          </select>
        </div>

        <div class="form-group" style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-weight:700;font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;">3. Base / Lote:</label>
          <select id="reassign-base-select" class="filter-select" style="width:100%;">
            <option value="all" ${reassignFormState.base === 'all' ? 'selected' : ''}>Todos los lotes</option>
            ${bases.map(b => `<option value="${escapeHtml(b)}" ${reassignFormState.base === b ? 'selected' : ''}>${escapeHtml(b)}</option>`).join('')}
          </select>
        </div>

        <div class="form-group" style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-weight:700;font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;">4. Estado:</label>
          <select id="reassign-scope-select" class="filter-select" style="width:100%;">
            <option value="pending" ${reassignFormState.scope === 'pending' ? 'selected' : ''}>Solo pendientes / por llamar</option>
            <option value="no-answer" ${reassignFormState.scope === 'no-answer' ? 'selected' : ''}>Solo no contesta (reintentos)</option>
            <option value="uncalled" ${reassignFormState.scope === 'uncalled' ? 'selected' : ''}>Solo nuevos (0 intentos)</option>
            <option value="all" ${reassignFormState.scope === 'all' ? 'selected' : ''}>Todos los registros</option>
          </select>
        </div>
      </div>

      <div class="reassign-summary-box" style="background:var(--bg-canvas);padding:14px 18px;border-radius:8px;border:1px solid var(--border-subtle);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
        <div>
          <span style="font-size:12px;color:var(--text-muted);">Acción preparada:</span>
          <strong style="display:block;font-size:14px;color:var(--text-main);margin-top:2px;">
            Transferir <span style="color:var(--cs-plum);font-weight:800;">${candidates.length} contactos</span> de <span>${escapeHtml(fromUserName)}</span> hacia <span style="color:#10b981;font-weight:700;">${escapeHtml(toUserName)}</span>
          </strong>
        </div>
        <button class="button-primary" id="execute-custom-reassign-btn" type="button" ${candidates.length ? '' : 'disabled'}>
          <span>⇄ Ejecutar Reasignación (${candidates.length})</span>
        </button>
      </div>
    </article>
  `;
}

async function executeCustomReassignment() {
  if (currentUser.role !== 'supervisor') return;
  const fromOp = reassignFormState.fromOp;
  const toOp = reassignFormState.toOp;
  const targetUser = appUsers.find(u => u.initials === toOp);
  if (!targetUser) return showToast('Selecciona un operador de destino válido.');
  if (fromOp === toOp) return showToast('El origen y el destino no pueden ser el mismo operador.');

  const candidates = getReassignCandidates(fromOp, reassignFormState.base, reassignFormState.scope);
  if (!candidates.length) return showToast('No hay contactos que coincidan con los filtros.');

  const fromName = fromOp === 'unassigned' ? 'Sin Asignar' : (appUsers.find(u => u.initials === fromOp)?.name || fromOp);
  const confirmed = window.confirm(`¿Confirmas transferir ${candidates.length} contactos de "${fromName}" a "${targetUser.name}"?`);
  if (!confirmed) return;

  if (backendMode === 'supabase') {
    showToast('Reasignando en Supabase...');
    const targetProfile = [...remoteProfiles.values()].find(u => u.initials === toOp);
    const ids = candidates.map(c => c.remoteId || c.id);
    const { error } = await supabaseClient.from('contacts').update({ assigned_operator_id: targetProfile?.id || null }).in('id', ids);
    if (error) { showToast('Error en Supabase: ' + error.message); return; }
    await loadRemoteState();
    showToast(`✓ ${candidates.length} contactos reasignados a ${targetUser.name}`);
    render();
    return;
  }
  candidates.forEach(c => { c.operator = toOp; });
  saveState();
  showToast(`✓ ${candidates.length} contactos reasignados a ${targetUser.name}`);
  render();
}

function renderContacts() {
  const contacts = visibleContacts();
  const title = currentUser.role === 'operator' ? 'Mis contactos' : 'Todos los contactos';
  const showAssignment = currentUser.role === 'supervisor';
  const bases = [...new Set(contacts.map(contact => contact.baseName).filter(Boolean))].sort();
  const baseOptions = bases.map(base => `<option value="${escapeHtml(base)}">${escapeHtml(base)}</option>`).join('');

  return `
    ${pageHeading('Base de contactos', title, currentUser.role === 'operator' ? 'Estos son únicamente los registros que te asignó el supervisor.' : 'Consulta el estado de cada registro y administra el trabajo de tu equipo.', showAssignment ? '<div style="display:flex;gap:8px;"><button class="button-secondary" onclick="exportHistoryXlsx()">⬇ Exportar Excel</button><button class="button-primary" data-view-action="import"><span class="plus">+</span> Importar base</button></div>' : '')}
    <article class="card contacts-card">
      <div class="page-card-header">
        <div>
          <h2 class="card-title">${contacts.length.toLocaleString('es-EC')} registros</h2>
          <p class="card-subtitle">Actualizado en tiempo real</p>
        </div>
        <div class="filters">
          <input class="search-input" id="contact-search" placeholder="Buscar nombre, teléfono o ID..." />
          <select class="filter-select" id="base-filter"><option value="">Todas las bases</option>${baseOptions}</select>
          <select class="filter-select" id="status-filter">
            <option value="">Todos los estados</option>
            <option value="effective">Efectivas</option>
            <option value="pending">Pendientes</option>
            <option value="no-answer">No contesta</option>
            <option value="wrong">Número incorrecto</option>
            <option value="refused">Rechazaron la encuesta</option>
            <option value="discarded">Descartados</option>
          </select>
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table" id="contacts-table">
          <thead>
            <tr>
              <th>Contacto</th>
              <th>Identificador</th>
              <th>Provincia</th>
              <th>Base</th>
              <th>Estado</th>
              <th>Intentos</th>
              <th>Última gestión</th>
              ${showAssignment ? '<th>Asignar a</th>' : ''}
            </tr>
          </thead>
          <tbody>
            ${contactRows(contacts, showAssignment)}
          </tbody>
        </table>
      </div>
    </article>
    ${showAssignment ? renderReassignmentCard() : ''}
  `;
}

function contactRows(contacts, showAssignment = false) {
  return contacts.length ? contacts.map(contact => `
    <tr>
      <td>
        <div class="operator-cell">
          <div class="small-avatar">${initials(contact.name)}</div>
          <div>
            <strong>${escapeHtml(contact.name)}</strong>
            <span>${escapeHtml(contact.phone)}</span>
          </div>
        </div>
      </td>
      <td><span class="mono">${escapeHtml(contact.id)}</span></td>
      <td>${escapeHtml(contact.location || 'No tiene información')}</td>
      <td><span class="base-tag">${escapeHtml(contact.baseName || 'Sin especificar')}</span></td>
      <td><span class="table-status ${contact.status}">${contactStatusLabel(contact)}</span></td>
      <td>${contact.attempts}</td>
      <td>${escapeHtml(contact.last)}</td>
      ${showAssignment ? `
        <td>
          <select class="assign-select" data-assign-contact="${contact.id}">
            <option value="">Sin asignar</option>
            ${appUsers.filter(user => user.role === 'operator').map(user => `<option value="${user.initials}" ${contact.operator === user.initials ? 'selected' : ''}>${user.name}</option>`).join('')}
          </select>
        </td>
      ` : ''}
    </tr>
  `).join('') : `<tr><td colspan="${showAssignment ? 8 : 7}"><div class="empty-state">No hay contactos que coincidan con la búsqueda.</div></td></tr>`;
}

async function renameBase(oldName) {
  if (currentUser.role !== 'supervisor') return;
  const newName = window.prompt(`Ingresa el nuevo nombre para la base "${oldName}":`, oldName);
  if (!newName || newName.trim() === '' || newName.trim() === oldName) return;

  const trimmedNew = newName.trim();
  showToast('Renombrando lote...');

  if (backendMode === 'supabase') {
    const { error } = await supabaseClient.rpc('admin_rename_base', { p_old_name: oldName, p_new_name: trimmedNew });
    if (error) {
      const { error: patchError } = await supabaseClient.from('contacts').update({ extra_data: { base_name: trimmedNew } }).match({ 'extra_data->>base_name': oldName });
    }
    await loadRemoteState();
  } else {
    state.contacts.forEach(c => {
      if ((c.baseName || 'Sin especificar') === oldName) c.baseName = trimmedNew;
    });
    saveState();
  }
  showToast(`Base renombrada a "${trimmedNew}"`);
  render();
}

function renderBaseManagement() {
  const bases = [...new Set(state.contacts.map(contact => contact.baseName || 'Sin especificar'))].sort();
  return `
    <article class="card base-management">
      <div class="page-card-header">
        <div>
          <h2 class="card-title">Bases cargadas</h2>
          <p class="card-subtitle">Administra los lotes cargados en el sistema</p>
        </div>
      </div>
      <div class="base-management-list">
        ${bases.length ? bases.map(base => {
          const contacts = state.contacts.filter(contact => (contact.baseName || 'Sin especificar') === base);
          const managed = contacts.filter(contact => contact.attempts > 0).length;
          const assigned = contacts.filter(contact => contact.operator).length;
          const unassigned = contacts.length - assigned;
          return `
            <div class="base-management-row">
              <div class="base-management-icon">▦</div>
              <div class="base-management-copy">
                <strong>${escapeHtml(base)}</strong>
                <span>${contacts.length} contactos · ${assigned} asignados · ${unassigned} sin asignar</span>
              </div>
              <div style="display:flex;gap:6px;">
                <button class="button-secondary" onclick="renameBase('${escapeHtml(base)}')" type="button" style="padding:6px 12px;font-size:11px;">✎ Renombrar</button>
                <button class="delete-base" data-delete-base="${escapeHtml(base)}" type="button">Eliminar</button>
              </div>
            </div>
          `;
        }).join('') : '<div class="empty-state">No hay bases cargadas.</div>'}
      </div>
    </article>
  `;
}

async function forceCloseShift(shiftId) {
  if (currentUser.role !== 'supervisor') return;
  if (!window.confirm('¿Deseas marcar esta jornada como finalizada ahora?')) return;
  showToast('Cerrando jornada...');
  try {
    const res = await fetch('/api/shifts/close', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-role': currentUser.role
      },
      body: JSON.stringify({ shiftId, endedAt: new Date().toISOString() })
    });
    if (backendMode === 'supabase') await loadRemoteState();
    else {
      const shift = state.shifts.find(s => s.id === shiftId);
      if (shift) shift.endedAt = new Date().toISOString();
      saveState();
    }
    showToast('Jornada finalizada correctamente');
    render();
  } catch (err) {
    showToast('Error al cerrar jornada: ' + err.message);
  }
}

async function deleteShift(shiftId) {
  if (currentUser.role !== 'supervisor') return;
  if (!window.confirm('¿Estás seguro de eliminar este registro de jornada?')) return;
  showToast('Eliminando jornada...');
  try {
    const res = await fetch('/api/shifts/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-role': currentUser.role
      },
      body: JSON.stringify({ shiftId })
    });
    if (backendMode === 'supabase') await loadRemoteState();
    else {
      state.shifts = state.shifts.filter(s => s.id !== shiftId);
      saveState();
    }
    showToast('Jornada eliminada');
    render();
  } catch (err) {
    showToast('Error al eliminar jornada: ' + err.message);
  }
}

function renderShifts() {
  const operatorUsers = appUsers.filter(user => user.role === 'operator');
  const isSupervisor = currentUser.role === 'supervisor';

  return `
    ${pageHeading('Control de equipo', 'Registro de jornadas', 'Consulta el tiempo de trabajo e inicio/fin de cada operador.', backendMode === 'supabase' ? '<span class="status-pill on">● Sincronizado con Supabase</span>' : '<span class="status-pill on">● Actualizado localmente</span>')}
    <article class="card history-card">
      <div class="page-card-header">
        <div>
          <h2 class="card-title">Jornadas del equipo</h2>
          <p class="card-subtitle">Seguimiento en vivo de horas laboradas</p>
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table shifts-table">
          <thead>
            <tr>
              <th>Operador/a</th>
              <th>Estado actual</th>
              <th>Inicio</th>
              <th>Fin</th>
              <th>Duración</th>
              ${isSupervisor ? '<th>Acciones</th>' : ''}
            </tr>
          </thead>
          <tbody>
            ${operatorUsers.map(user => {
              const shift = latestShiftFor(user);
              const active = Boolean(getActiveShift(user));
              return `
                <tr>
                  <td>
                    <div class="operator-cell">
                      <div class="small-avatar">${user.initials}</div>
                      <div><strong>${user.name}</strong><span>${user.username}</span></div>
                    </div>
                  </td>
                  <td><span class="status-pill ${active ? 'on' : shift ? 'pause' : 'off'}">${active ? 'En jornada' : shift ? 'Finalizada' : 'Sin iniciar'}</span></td>
                  <td>${shift ? formatDateTime(shift.startedAt) : '—'}</td>
                  <td>${shift?.endedAt ? formatDateTime(shift.endedAt) : active ? 'En curso' : '—'}</td>
                  <td>${shift ? formatDuration(shift.startedAt, shift.endedAt || undefined) : '—'}</td>
                  ${isSupervisor ? `
                    <td>
                      <div style="display:flex;gap:6px;">
                        ${active && shift ? `<button class="button-secondary" onclick="forceCloseShift('${shift.id}')" type="button" style="padding:4px 8px;font-size:10px;">Cerrar</button>` : ''}
                        ${shift ? `<button class="delete-history" onclick="deleteShift('${shift.id}')" type="button" style="padding:4px 8px;font-size:10px;">Eliminar</button>` : '—'}
                      </div>
                    </td>
                  ` : ''}
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </article>
  `;
}

async function exportHistoryXlsx() {
  if (currentUser.role !== 'supervisor') return;
  showToast('Generando reporte Excel...');
  try {
    const res = await fetch('/export/xlsx', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-role': currentUser.role
      },
      body: JSON.stringify({ contacts: state.contacts, history: state.history })
    });
    if (!res.ok) throw new Error('Error al generar Excel en servidor');
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reporte-clima-social-giz-${new Date().toISOString().slice(0, 10)}.xlsx`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
    showToast('Reporte Excel descargado');
  } catch (err) {
    console.error(err);
    exportHistory();
  }
}

function groupHistory(history) {
  const groups = new Map();
  history.forEach(item => {
    const key = item.id || item.contact;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  return [...groups.values()].map(items => {
    const ordered = items.slice().sort((a, b) => Number(a.attempt || 0) - Number(b.attempt || 0));
    const last = ordered[ordered.length - 1];
    return {
      contact: last.contact,
      id: last.id,
      contactId: last.id,
      operator: last.operator,
      attempts: ordered.length,
      result: last.result,
      raffleEmail: ordered.find(item => item.raffleEmail)?.raffleEmail || '',
      details: ordered.map(item => `#${item.attempt || '-'} ${outcomeLabels[item.result] || item.result} · ${item.date || 'Sin fecha'}${item.notes ? ` · ${item.notes}` : ''}`).join('  |  ')
    };
  });
}

function renderHistory() {
  const allHistory = state.history;
  const history = currentUser.role === 'operator' ? allHistory.filter(item => item.operator === currentUser.name) : allHistory;
  const grouped = groupHistory(history);
  const exportAction = currentUser.role === 'supervisor' ? '<button class="button-secondary" id="export-history">↧ Exportar Excel</button>' : '';
  const showActions = currentUser.role === 'supervisor';
  return `${pageHeading('Trazabilidad', 'Historial de gestiones', 'Cada contacto aparece una sola vez con todos sus intentos.', exportAction)}<article class="card history-card"><div class="page-card-header"><div><h2 class="card-title">Contactos gestionados</h2><p class="card-subtitle">${grouped.length} contactos con historial</p></div><div class="filters"><input class="search-input" id="history-search" placeholder="Buscar contacto..." /></div></div><div class="table-wrap"><table class="data-table history-data-table"><thead><tr><th>Contacto</th><th>Historial de gestiones</th><th>Último resultado</th><th>Operadora</th><th>Intentos</th><th>Correo sorteo</th>${showActions ? '<th>Acciones</th>' : ''}</tr></thead><tbody>${grouped.length ? grouped.map(item => `<tr data-history-row="${escapeHtml(`${item.contact} ${item.id} ${item.details}`.toLowerCase())}"><td><div class="operator-cell"><div class="small-avatar">${initials(item.contact)}</div><div><strong>${escapeHtml(item.contact)}</strong><span>${escapeHtml(item.id)}</span></div></div></td><td><div class="history-detail">${escapeHtml(item.details)}</div></td><td><span class="table-status ${item.result}">${outcomeLabels[item.result] || item.result}</span></td><td>${escapeHtml(item.operator)}</td><td>${item.attempts}</td><td>${escapeHtml(item.raffleEmail || '—')}</td>${showActions ? `<td><button class="delete-history" data-delete-history="${escapeHtml(item.id)}" type="button">Borrar gestiones</button></td>` : ''}</tr>`).join('') : '<tr><td colspan="${showActions ? 7 : 6}"><div class="empty-state">No hay gestiones registradas.</div></td></tr>'}</tbody></table></div></article>`;
}

function renderImport() { return `${pageHeading('Carga de información', 'Importar base de contactos', 'Sube un archivo Excel o CSV y asígnale un nombre para distinguirla de las demás.', '<button class="button-secondary" id="download-template">↓ Descargar plantilla</button>')}<section class="import-layout"><article class="card import-card"><div class="import-base-name"><label for="base-name">Nombre de la base</label><input id="base-name" placeholder="Ej. GADPP · Lote 1 · agosto 2026" /></div><div class="dropzone" id="dropzone"><div class="drop-icon">↥</div><h2>Arrastra tu archivo aquí</h2><p>Aceptamos archivos Excel y CSV. Se detecta automáticamente el formato de FACILITADOR o de hojas por operadora (PAMELA, BRENDA, etc.).</p><label class="button-primary" for="file-input">Seleccionar archivo</label><input class="file-input" type="file" id="file-input" accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv" /><small class="heading-copy">Máximo recomendado: 5,000 registros</small></div></article><article class="card import-tips"><h2>Antes de importar</h2><div class="tip"><div class="tip-num">1</div><div><strong>Identifica la base</strong><span>Usa un nombre como “GADPP · Lote 1” para encontrarla después.</span></div></div><div class="tip"><div class="tip-num">2</div><div><strong>Hojas por operadora</strong><span>Si el archivo tiene hojas PAMELA o BRENDA, se asignan automáticamente.</span></div></div><div class="tip"><div class="tip-num">3</div><div><strong>Revisa el resultado</strong><span>El sistema normalizará celulares y rellenará los campos disponibles.</span></div></div></article></section>${renderBaseManagement()}<article class="card quick-assign-card"><div class="page-card-header"><div><h2 class="card-title">Asignación rápida</h2><p class="card-subtitle">Agrupa contactos sin operadora a una persona</p></div></div><div class="quick-assign-body">${appUsers.filter(user => user.role === 'operator').map(user => { const pendientes = state.contacts.filter(contact => !contact.operator).length; return `<button class="assign-all-btn" data-assign-all="${user.initials}" type="button" ${pendientes && backendMode === 'supabase' ? '' : 'disabled'}>Asignar todo a ${user.name} (${pendientes})</button>`; }).join('')}</div></article>`; }

function bindViewEvents() {
  document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => { activeView = item.dataset.view; document.getElementById('sidebar').classList.remove('open'); render(); }));
  document.querySelectorAll('[data-contact-id]').forEach(button => button.addEventListener('click', () => { selectedContactId = button.dataset.contactId; selectedOutcome = ''; render(); }));
  document.querySelectorAll('[data-outcome]').forEach(button => button.addEventListener('click', () => { selectedOutcome = button.dataset.outcome; render(); }));
  document.getElementById('save-call')?.addEventListener('click', saveCall);
  document.getElementById('copy-phone')?.addEventListener('click', copySelectedPhone);
  document.getElementById('start-shift')?.addEventListener('click', startShift);
  document.getElementById('end-shift')?.addEventListener('click', endShift);
  document.getElementById('contact-search')?.addEventListener('input', filterContacts);
  document.getElementById('base-filter')?.addEventListener('change', filterContacts);
  document.getElementById('status-filter')?.addEventListener('change', filterContacts);
  document.getElementById('history-search')?.addEventListener('input', filterHistory);
  document.getElementById('file-input')?.addEventListener('change', importFile);
  document.getElementById('download-template')?.addEventListener('click', downloadTemplate);
  document.getElementById('export-history')?.addEventListener('click', exportHistory);
  document.getElementById('logout-top')?.addEventListener('click', logoutUser);
  document.querySelectorAll('[data-assign-contact]').forEach(select => select.addEventListener('change', () => { const contact = getContact(select.dataset.assignContact); if (!contact) return; const initialsValue = select.value; if (backendMode === 'supabase') { assignContactRemote(contact, initialsValue); return; } contact.operator = initialsValue; saveState(); showToast(initialsValue ? 'Contacto asignado correctamente' : 'Asignación retirada'); }));
  document.querySelectorAll('[data-delete-base]').forEach(button => button.addEventListener('click', () => deleteBase(button.dataset.deleteBase)));
  document.querySelectorAll('[data-delete-history]').forEach(button => button.addEventListener('click', () => deleteHistory(button.dataset.deleteHistory)));
  document.getElementById('reassign-from-select')?.addEventListener('change', e => { reassignFormState.fromOp = e.target.value; render(); });
  document.getElementById('reassign-to-select')?.addEventListener('change', e => { reassignFormState.toOp = e.target.value; render(); });
  document.getElementById('reassign-base-select')?.addEventListener('change', e => { reassignFormState.base = e.target.value; render(); });
  document.getElementById('reassign-scope-select')?.addEventListener('change', e => { reassignFormState.scope = e.target.value; render(); });
  document.getElementById('execute-custom-reassign-btn')?.addEventListener('click', executeCustomReassignment);

  document.querySelectorAll('[data-column-search]').forEach(input => input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    const column = input.closest('.contact-column');
    const cards = [...column.querySelectorAll('.contact-board-card')];
    const visible = cards.filter(card => card.textContent.toLowerCase().includes(query));
    cards.forEach(card => { card.hidden = !visible.includes(card); });
    let empty = column.querySelector('.column-search-empty');
    if (!visible.length && cards.length) {
      if (!empty) { column.querySelector('.contact-column-list').insertAdjacentHTML('beforeend', '<div class="column-search-empty">No encontramos ese contacto.</div>'); }
    } else if (empty) empty.remove();
  }));
}

async function logoutUser() {
  if (backendMode === 'supabase' && supabaseClient) await supabaseClient.auth.signOut();
  currentUser = null;
  sessionStorage.removeItem('giz-current-user');
  selectedContactId = null;
  activeView = 'dashboard';
  render();
}

function deleteBase(baseName) {
  if (currentUser.role !== 'supervisor') return;
  if (backendMode === 'supabase') { deleteRemoteBase(baseName); return; }
  const contactsToDelete = state.contacts.filter(contact => (contact.baseName || 'Sin especificar') === baseName);
  if (!contactsToDelete.length) return;
  const confirmed = window.confirm(`¿Eliminar la base "${baseName}"? Se eliminarán ${contactsToDelete.length} contactos y su historial. Esta acción no se puede deshacer.`);
  if (!confirmed) return;
  const ids = new Set(contactsToDelete.map(contact => contact.id));
  state.contacts = state.contacts.filter(contact => !ids.has(contact.id));
  state.history = state.history.filter(item => !ids.has(item.id));
  if (ids.has(selectedContactId)) selectedContactId = null;
  saveState();
  showToast(`Base eliminada: ${baseName}`);
  render();
}

async function deleteHistory(contactId) {
  if (currentUser.role !== 'supervisor') return;
  const confirmed = window.confirm('¿Borrar todas las gestiones de este contacto? Se eliminará su historial y volverá a estar sin gestionar.');
  if (!confirmed) return;
  if (backendMode === 'supabase') {
    const remoteId = getContact(contactId)?.remoteId || contactId; const { error } = await supabaseClient.from('call_attempts').delete().eq('contact_id', remoteId);
    if (error) { showToast(error.message); return; }
    await supabaseClient.from('contacts').update({ current_status: 'not_managed', attempt_count: 0, last_attempt_at: null, last_attempt_by: null, last_outcome_id: null, raffle_email: null, proof_received_at: null, proof_type: null }).eq('id', remoteId);
    await loadRemoteState();
    showToast('Gestiones eliminadas');
    render();
    return;
  }
  state.history = state.history.filter(item => item.id !== contactId);
  const contact = getContact(contactId);
  if (contact) { contact.status = 'pending'; contact.attempts = 0; contact.last = 'Sin gestión'; }
  saveState();
  showToast('Gestiones eliminadas');
  render();
}

async function assignAllTo(initials) {
  if (currentUser.role !== 'supervisor') return;
  const target = appUsers.find(user => user.initials === initials);
  if (!target) return;
  const unassigned = state.contacts.filter(contact => !contact.operator);
  if (!unassigned.length) return showToast('No hay contactos sin asignar');
  if (backendMode === 'supabase') {
    const profile = [...remoteProfiles.values()].find(user => user.initials === initials);
    if (!profile) return showToast('No se encontró el perfil de la operadora');
    const ids = unassigned.map(contact => contact.remoteId || contact.id);
    const { error } = await supabaseClient.from('contacts').update({ assigned_operator_id: profile.id }).in('id', ids);
    if (error) { showToast(error.message); return; }
    await loadRemoteState();
    showToast(`${unassigned.length} contactos asignados a ${target.name}`);
    render();
    return;
  }
  unassigned.forEach(contact => { contact.operator = target.initials; });
  saveState();
  showToast(`${unassigned.length} contactos asignados a ${target.name}`);
  render();
}

async function deleteRemoteBase(baseName) {
  const contactsToDelete = state.contacts.filter(contact => (contact.baseName || 'Sin especificar') === baseName);
  if (!contactsToDelete.length) return;
  const confirmed = window.confirm(`¿Eliminar la base "${baseName}"? Se eliminarán ${contactsToDelete.length} contactos de Supabase. Esta acción no se puede deshacer.`);
  if (!confirmed) return;
  const ids = contactsToDelete.map(contact => contact.remoteId || contact.id);
  if (ids.length) {
    const { error } = await supabaseClient.from('contacts').delete().in('id', ids);
    if (error) { showToast(error.message); return; }
  }
  await loadRemoteState();
  selectedContactId = firstActionable(state.contacts)?.id || null;
  showToast(`Base eliminada: ${baseName}`);
  render();
}

function distributeBase(baseName) {
  if (currentUser.role !== 'supervisor') return;
  if (backendMode === 'supabase') { distributeRemoteBase(baseName); return; }
  const operators = appUsers.filter(user => user.role === 'operator');
  const available = state.contacts.filter(contact => (contact.baseName || 'Sin especificar') === baseName && !contact.operator);
  if (!available.length) return showToast('No quedan contactos sobrantes en esta base');
  const capacityPerOperator = 70;
  const batchCapacity = capacityPerOperator * operators.length;
  const batch = available.slice(0, batchCapacity);
  const round = Math.max(0, ...state.contacts.filter(contact => (contact.baseName || 'Sin especificar') === baseName).map(contact => Number(contact.assignmentRound) || 0)) + 1;
  batch.forEach((contact, index) => {
    const operatorIndex = available.length > batchCapacity ? Math.floor(index / capacityPerOperator) : index % operators.length;
    contact.operator = operators[operatorIndex].initials;
    contact.assignmentRound = round;
  });
  saveState();
  const counts = operators.map(operator => `${operator.name}: ${batch.filter(contact => contact.operator === operator.initials).length}`).join(' · ');
  showToast(`Ronda ${round} distribuida · ${counts}`);
  render();
}

async function distributeRemoteBase(baseName) {
  const operators = appUsers.filter(user => user.role === 'operator').map(user => ({ ...user, profile: [...remoteProfiles.values()].find(profile => profile.initials === user.initials) })).filter(user => user.profile);
  const available = state.contacts.filter(contact => contact.baseName === baseName && !contact.operator);
  if (!operators.length) return showToast('No se encontraron perfiles de operadoras');
  if (!available.length) return showToast('No quedan contactos sobrantes en esta base');
  const capacityPerOperator = 70;
  const batchCapacity = capacityPerOperator * operators.length;
  const batch = available.slice(0, batchCapacity);
  const assignments = batch.map((contact, index) => ({ contact, operator: operators[available.length > batchCapacity ? Math.floor(index / capacityPerOperator) : index % operators.length] }));
  const results = await Promise.all(assignments.map(({ contact, operator }) => supabaseClient.from('contacts').update({ assigned_operator_id: operator.profile.id }).eq('id', contact.remoteId || contact.id)));
  const failed = results.find(result => result.error);
  if (failed) return showToast(failed.error.message);
  await loadRemoteState();
  showToast(`Ronda distribuida para ${baseName}`);
  render();
}

async function startShift() {
  if (getActiveShift()) return;
  if (backendMode === 'supabase') {
    let campaignId = currentCampaign?.id;
    if (!campaignId) {
      const contactWithCampaign = state.contacts.find(contact => contact.campaign_id);
      campaignId = contactWithCampaign?.campaign_id;
      if (campaignId) currentCampaign = { id: campaignId, name: currentCampaign?.name || 'Campaña activa' };
    }
    if (!campaignId) {
      try {
        const { data: campaigns } = await supabaseClient.from('campaigns').select('id, name').limit(1);
        campaignId = campaigns?.[0]?.id;
        if (campaignId) currentCampaign = campaigns[0];
      } catch (error) { console.error(error); }
    }
    if (!campaignId) { showToast('No se encontró una campaña. Pide al supervisor que importe la base nuevamente.'); return; }
    const { error } = await supabaseClient.from('operator_shifts').insert({ operator_id: currentUser.authId, campaign_id: campaignId, started_at: new Date().toISOString() });
    if (error) { showToast('Error al iniciar jornada: ' + error.message); return; }
    await loadRemoteState();
    showToast('Jornada iniciada. Buen trabajo.');
    render();
    return;
  }
  state.shifts.push({ id: `${currentUser.username}-${Date.now()}`, username: currentUser.username, operator: currentUser.name, startedAt: new Date().toISOString(), endedAt: null });
  saveState();
  showToast('Jornada iniciada. Buen trabajo.');
  render();
}

async function endShift() {
  const shift = getActiveShift();
  if (!shift) return;
  if (backendMode === 'supabase') {
    const endedAt = new Date().toISOString();
    const { error } = await supabaseClient.from('operator_shifts').update({ ended_at: endedAt }).eq('id', shift.id).eq('operator_id', currentUser.authId).is('ended_at', null);
    if (error) { showToast(error.message); return; }
    await loadRemoteState();
    showToast(`Jornada finalizada · ${formatDuration(shift.startedAt, endedAt)}`);
    render();
    return;
  }
  shift.endedAt = new Date().toISOString();
  saveState();
  showToast(`Jornada finalizada · ${formatDuration(shift.startedAt, shift.endedAt)}`);
  render();
}

function copySelectedPhone() {
  const contact = getContact(selectedContactId);
  if (!contact) return;
  const number = contact.phone;
  const fallback = () => {
    const input = document.createElement('textarea');
    input.value = number;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(number).then(() => showToast('Número copiado')).catch(() => { fallback(); showToast('Número copiado'); });
  } else {
    fallback();
    showToast('Número copiado');
  }
}

let saving = false;

async function saveCall() {
  if (saving) return;
  const contact = getContact(selectedContactId);
  if (!contact) { showToast('No hay un contacto seleccionado'); return; }
  if (!selectedOutcome) { showToast('Selecciona un resultado antes de guardar'); return; }
  saving = true;
  try {
    if (backendMode === 'supabase') {
      showToast('Guardando gestión...');
      await saveRemoteCall();
    } else {
      const note = document.getElementById('notes')?.value.trim() || '';
      contact.attempts += 1;
      contact.last = `Hoy, ${formatTime()}`;
      contact.operator = currentUser.initials;
      const shouldDiscard = contact.attempts >= MAX_ATTEMPTS && !['effective', 'wrong', 'refused'].includes(selectedOutcome);
      contact.status = shouldDiscard ? 'discarded' : selectedOutcome;
      contact.pendingReason = selectedOutcome === 'pending' ? 'rescheduled' : selectedOutcome === 'no-answer' ? 'no_answer' : null;
      state.history.unshift({ contact: contact.name, id: contact.id, result: selectedOutcome, operator: currentUser.name, attempt: contact.attempts, date: contact.last, notes: note });
      selectedContactId = firstActionable(visibleContacts())?.id || null;
      saveState();
      selectedOutcome = '';
      showToast(shouldDiscard ? `Gestión guardada · ${contact.name} (3er intento finalizado)` : `Gestión guardada para ${contact.name}`);
      render();
    }
  } catch (error) {
    console.error(error);
    showToast('Error: ' + (error.message || 'Error desconocido'));
  } finally {
    saving = false;
  }
}

async function saveRemoteCall() {
  const contact = getContact(selectedContactId);
  if (!contact) { showToast('No se encontró el contacto seleccionado'); return; }
  if (!selectedOutcome) { showToast('Selecciona un resultado antes de guardar'); return; }
  const note = document.getElementById('notes')?.value.trim() || '';
  const outcomeCode = { effective: 'effective', pending: 'callback', 'no-answer': 'no_answer', wrong: 'wrong_number', refused: 'refused' }[selectedOutcome] || 'callback';
  const outcomeId = outcomeCache.get(outcomeCode);
  if (!outcomeId) { showToast('Los resultados no están configurados en Supabase.'); return; }
  const nextAttempt = Number(contact.attempts || 0) + 1;
  const shouldDiscard = nextAttempt >= MAX_ATTEMPTS && !['effective', 'wrong', 'refused'].includes(selectedOutcome);
  const status = shouldDiscard ? 'discarded' : { effective: 'effective', pending: 'pending', 'no-answer': 'no_answer', wrong: 'wrong_number', refused: 'refused' }[selectedOutcome];
  const { error: attemptError } = await supabaseClient.from('call_attempts').insert({ contact_id: contact.remoteId || contact.id, operator_id: currentUser.authId, attempt_number: nextAttempt, outcome_id: outcomeId, notes: note, idempotency_key: crypto.randomUUID() });
  if (attemptError) {
    const message = attemptError.code === '23503' ? 'El contacto no está asignado a esta operadora.' : attemptError.code === '42501' ? 'No tienes permiso para registrar esta gestión.' : attemptError.message;
    showToast(message); return;
  }
  const update = { current_status: status, attempt_count: nextAttempt, last_attempt_at: new Date().toISOString(), last_attempt_by: currentUser.authId, last_outcome_id: outcomeId };
  const { error: contactError } = await supabaseClient.from('contacts').update(update).eq('id', contact.remoteId || contact.id).eq('assigned_operator_id', currentUser.authId);
  if (contactError) {
    const message = contactError.code === '42501' ? 'Solo puedes actualizar contactos que tienes asignados.' : contactError.message;
    showToast(message); return;
  }
  selectedOutcome = '';
  await loadRemoteState();
  selectedContactId = firstActionable(state.contacts)?.id || null;
  showToast(shouldDiscard ? `Gestión guardada · ${contact.name} (3er intento finalizado)` : `Gestión guardada para ${contact.name}`);
  render();
}

function filterContacts() { const query = (document.getElementById('contact-search')?.value || '').toLowerCase(); const status = document.getElementById('status-filter')?.value || ''; const base = document.getElementById('base-filter')?.value || ''; const rows = visibleContacts().filter(contact => (!status || contact.status === status) && (!base || contact.baseName === base) && [contact.name, contact.phone, contact.id, contact.parish, contact.baseName || ''].some(value => value.toLowerCase().includes(query))); const tbody = document.querySelector('#contacts-table tbody'); if (tbody) { tbody.innerHTML = contactRows(rows, currentUser.role === 'supervisor'); document.querySelectorAll('[data-assign-contact]').forEach(select => select.addEventListener('change', () => { const contact = getContact(select.dataset.assignContact); if (!contact) return; const initialsValue = select.value; if (backendMode === 'supabase') { assignContactRemote(contact, initialsValue); return; } contact.operator = initialsValue; saveState(); showToast(initialsValue ? 'Contacto asignado correctamente' : 'Asignación retirada'); })); } }

async function assignContactRemote(contact, initialsValue) {
  if (!contact.remoteId) return showToast('No se encontró el registro en Supabase');
  let profileId = null;
  if (initialsValue) {
    const profile = [...remoteProfiles.values()].find(user => user.initials === initialsValue);
    if (!profile) return showToast('No se encontró el perfil de la operadora');
    profileId = profile.id;
  }
  const { error } = await supabaseClient.from('contacts').update({ assigned_operator_id: profileId }).eq('id', contact.remoteId);
  if (error) { showToast('No se pudo asignar: ' + error.message); return; }
  contact.operator = initialsValue;
  showToast(initialsValue ? 'Contacto asignado correctamente' : 'Asignación retirada');
}
function filterHistory() { const query = (document.getElementById('history-search')?.value || '').toLowerCase(); document.querySelectorAll('[data-history-row]').forEach(row => { row.hidden = query && !row.dataset.historyRow.includes(query); }); }

function importFile(event) { const file = event.target.files[0]; if (!file) return; if (/\.xlsx?$/i.test(file.name)) return importXlsx(file); importCsv(event); }
async function importXlsx(file) { const formData = new FormData(); formData.append('file', file); formData.append('baseName', document.getElementById('base-name')?.value.trim() || file.name.replace(/\.xlsx?$/i, '')); try { const response = await fetch('/import/xlsx', { method: 'POST', headers: { 'x-app-role': currentUser.role }, body: formData }); const result = await response.json(); if (!response.ok) throw new Error(result.error || 'No fue posible importar');     if (backendMode === 'supabase') { await importRemoteContacts(result.contacts, result.stats.baseName); } else { state.contacts = [...result.contacts, ...state.contacts]; saveState(); } showToast(`${result.stats.imported} contactos importados correctamente`); render(); } catch (error) { const message = error instanceof TypeError ? 'No se pudo conectar con el servidor de importación. Verifica que estés usando la dirección local o que Render tenga la última versión desplegada.' : error.message; showToast(message); } }

async function importRemoteContacts(contacts, baseName) {
  let { data: campaigns, error: campaignError } = await supabaseClient.from('campaigns').select('id').eq('status', 'active').order('created_at', { ascending: true }).limit(1);
  if (campaignError) throw campaignError;
  let campaign = campaigns?.[0];
  if (!campaign) {
    const created = await supabaseClient.from('campaigns').insert({ name: 'Encuestas Clima Social GIZ', description: 'Base de llamadas y seguimiento GIZ', status: 'active' }).select('id').single();
    if (created.error) throw created.error;
    campaign = created.data;
  }
  const operatorBySheet = {};
  for (const user of appUsers.filter(user => user.role === 'operator')) {
    const upperName = user.name.toUpperCase();
    const sheetKey = upperName.split(' ')[0];
    operatorBySheet[sheetKey] = user;
  }
  const resolveOperatorId = sheetName => {
    if (!sheetName) return null;
    const upper = sheetName.trim().toUpperCase();
    const match = operatorBySheet[upper.split(' ')[0]] || operatorBySheet[upper];
    if (!match) return null;
    const profile = [...remoteProfiles.values()].find(user => user.initials === match.initials);
    return profile?.id || null;
  };
  const externalIds = contacts.map(contact => String(contact.id));
  const { data: existing } = await supabaseClient.from('contacts').select('external_id').eq('campaign_id', campaign.id).in('external_id', externalIds);
  const existingIds = new Set((existing || []).map(contact => contact.external_id));
  const buildExtra = contact => ({ base_name: baseName, email: contact.email || '', phone_other: contact.phoneOther || '', organization: contact.organization || '', sector: contact.sector || '', cargo: contact.cargo || '', art_field: contact.artField || '', facilitator: contact.facilitator || '', sheet_name: contact.sheetName || '' });
  const newRows = contacts.filter(contact => !existingIds.has(String(contact.id))).map(contact => ({ campaign_id: campaign.id, external_id: String(contact.id), name: contact.name || 'No registra', phone_raw: contact.phoneRaw || contact.phone, phone_normalized: contact.phone, parish: contact.city || contact.parish || 'No tiene información', location: contact.province || contact.location || 'No tiene información', extra_data: buildExtra(contact), current_status: 'not_managed', attempt_count: 0, assigned_operator_id: resolveOperatorId(contact.sheetName || contact.facilitator) }));
  if (newRows.length) {
    const { error } = await supabaseClient.from('contacts').insert(newRows);
    if (error) throw error;
  }
  const existingRows = contacts.filter(contact => existingIds.has(String(contact.id)));
  for (const contact of existingRows) {
    await supabaseClient.from('contacts').update({ name: contact.name || 'No registra', phone_raw: contact.phoneRaw || contact.phone, phone_normalized: contact.phone, parish: contact.city || contact.parish || 'No tiene información', location: contact.province || contact.location || 'No tiene información', extra_data: buildExtra(contact) }).eq('campaign_id', campaign.id).eq('external_id', String(contact.id));
  }
  await loadRemoteState();
}
function importCsv(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { const lines = String(reader.result).split(/\r?\n/).filter(Boolean); if (lines.length < 2) return showToast('El archivo no contiene registros'); const headers = lines.shift().split(',').map(value => value.trim().toLowerCase()); const baseName = document.getElementById('base-name')?.value.trim() || file.name.replace(/\.csv$/i, ''); const imported = lines.map((line, index) => { const values = line.split(',').map(value => value.trim()); const row = Object.fromEntries(headers.map((header, column) => [header, values[column] || ''])); return { id: row.id || row.identificador || `GIZ-${Date.now()}-${index}`, name: row.nombre || row.name || 'Sin nombre', phone: row.telefono || row.phone || 'Sin teléfono', parish: row.parroquia || row.parish || 'Sin parroquia', location: row.ubicacion || row.location || 'Quito', baseName, status: 'pending', attempts: 0, last: 'Sin gestión', pendingReason: 'not_called', assignmentRound: 0, operator: '' }; }); state.contacts = [...imported, ...state.contacts]; saveState(); showToast(`${imported.length} contactos importados en modo demo`); render(); }; reader.readAsText(file); }
function downloadTemplate() { const blob = new Blob(['id,nombre,telefono,parroquia,ubicacion,curso\nGIZ-001,Nombre de ejemplo,0990000000,Quito,Pichincha,Gestion Ambiental GIZ\n'], { type: 'text/csv;charset=utf-8' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'plantilla-contactos-giz.csv'; link.click(); URL.revokeObjectURL(link.href); }
async function exportHistory() {
  try {
    const response = await fetch('/export/xlsx', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-app-role': currentUser.role }, body: JSON.stringify({ contacts: state.contacts, history: state.history }) });
    if (!response.ok) throw new Error('Export failed');
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `reporte-clima-social-giz-${new Date().toISOString().slice(0, 10)}.xlsx`;
    link.click();
    URL.revokeObjectURL(link.href);
    showToast('Excel generado correctamente');
  } catch {
    showToast('No fue posible generar el Excel');
  }
}
function showToast(message) { const toast = document.getElementById('toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2800); }

window.openImportView = () => { activeView = 'import'; render(); };

document.addEventListener('click', event => {
  const action = event.target.closest('[data-view-action]');
  if (!action) return;
  event.preventDefault();
  activeView = action.dataset.viewAction;
  render();
});

document.getElementById('mobile-menu').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));

async function bootstrap() {
  try {
    const response = await fetch('/config');
    const config = await response.json();
    if (config.supabaseUrl && config.supabaseAnonKey && window.supabase) {
      backendMode = 'supabase';
      supabaseClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
      const { data: sessionData } = await supabaseClient.auth.getSession();
      if (sessionData.session) {
        await setRemoteUser(sessionData.session.user);
        await loadRemoteState();
        activeView = currentUser.role === 'operator' ? 'operator' : 'dashboard';
        subscribeRemoteChanges();
      } else {
        currentUser = null;
        activeView = 'dashboard';
      }
    }
  } catch (error) {
    console.error(error);
    backendMode = 'demo';
  }
  render();
}

bootstrap();
