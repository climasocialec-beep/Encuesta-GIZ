const STORAGE_KEY = 'clima-social-giz-callcenter-v6';
const DEMO_VERSION = 6;
const MAX_ATTEMPTS = 3;
const SURVEY_URL = 'https://ee.kobotoolbox.org/x/TjO4VOdE';

const appUsers = [
  { username: 'josselyn', authEmail: 'josselyn@climasocial.local', name: 'Josselyn Carvajal', initials: 'JC', role: 'operator' },
  { username: 'darwin', authEmail: 'darwin@climasocial.local', name: 'Darwin Olivo', initials: 'DO', role: 'operator' },
  { username: 'supervisor', authEmail: 'supervisor@climasocial.local', name: 'Clima Social', initials: 'CS', role: 'supervisor' }
];

const demoContacts = [
  {
    "id": "GIZ-001",
    "name": "María Magdalena Justillo Bravo",
    "phone": "0959444560",
    "phoneRaw": "0959444560",
    "phoneOther": "",
    "email": "",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-002",
    "name": "Jenny Lisbeth Amesty Moron",
    "phone": "0967842111",
    "phoneRaw": "0967842111",
    "phoneOther": "",
    "email": "Yennyamesty920@gmail.com",
    "parish": "La Pradera",
    "barrio": "La Pradera",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-003",
    "name": "Claudia Nataly Mero Zambrano",
    "phone": "0983163436",
    "phoneRaw": "0983163436",
    "phoneOther": "",
    "email": "Meroclaudia887@gmail.com",
    "parish": "Ciudadela Naval",
    "barrio": "Ciudadela Naval",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-004",
    "name": "Karla Ramona Rivera Rivera",
    "phone": "0963193332",
    "phoneRaw": "0963193332",
    "phoneOther": "",
    "email": "Karlarivera1961@gmail.com",
    "parish": "San José",
    "barrio": "San José",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-005",
    "name": "Daniela Victoria Holguin Anchundia",
    "phone": "0963198935",
    "phoneRaw": "0963198935",
    "phoneOther": "",
    "email": "Daniela-holguin@hotmail.com",
    "parish": "La Pradera",
    "barrio": "La Pradera",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-006",
    "name": "María Elena Herrera",
    "phone": "0998230269",
    "phoneRaw": "0998230269",
    "phoneOther": "",
    "email": "",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-007",
    "name": "María Elizabeth Minaya Mero",
    "phone": "0989898405",
    "phoneRaw": "0989898405",
    "phoneOther": "",
    "email": "Elizabethminaya249@gmail.com",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-008",
    "name": "María Magdalena Burgos Sabando",
    "phone": "0987772702",
    "phoneRaw": "0987772702",
    "phoneOther": "",
    "email": "geo-alex4@hotmail.com",
    "parish": "Urbirrios",
    "barrio": "Urbirrios",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-009",
    "name": "Jorge Arturo Figueroa Macias",
    "phone": "0997720325",
    "phoneRaw": "0997720325",
    "phoneOther": "",
    "email": "",
    "parish": "San Antonio",
    "barrio": "San Antonio",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-010",
    "name": "Maryuri Del Rocío Catagua Quijije",
    "phone": "0983146490",
    "phoneRaw": "0983146490",
    "phoneOther": "",
    "email": "tapiacataguamarjorie@gmail.com",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-011",
    "name": "Karina Paola Vargas Gómez",
    "phone": "0963843546",
    "phoneRaw": "0963843546",
    "phoneOther": "",
    "email": "",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-012",
    "name": "Rosa Robertina Conforme Carrillo",
    "phone": "0981472500",
    "phoneRaw": "0981472500",
    "phoneOther": "",
    "email": "Rosaconforme77@gmail.com",
    "parish": "4 de Noviembre",
    "barrio": "4 de Noviembre",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-013",
    "name": "Beki Blanca Rezabala Mendoza",
    "phone": "0981657908",
    "phoneRaw": "0981657908",
    "phoneOther": "",
    "email": "rezabalabeky@gmail.com",
    "parish": "San Pedro",
    "barrio": "San Pedro",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-014",
    "name": "Apolonia Soledad Anchundia Anchundia",
    "phone": "0979509294",
    "phoneRaw": "0979509294",
    "phoneOther": "",
    "email": "Aposol57@gmail.com",
    "parish": "Cuba",
    "barrio": "Cuba",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-015",
    "name": "Patricia Soledad Mora Anchundia",
    "phone": "0979949348",
    "phoneRaw": "0979949348",
    "phoneOther": "",
    "email": "sallyanchundia@gmail.com",
    "parish": "Cuba",
    "barrio": "Cuba",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C01",
    "courseName": "Panadería 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-016",
    "name": "Andrea Sofia Salazar Rodríguez",
    "phone": "0979129982",
    "phoneRaw": "0979129982",
    "phoneOther": "",
    "email": "andreasalazarrodriguez06@gmail.com",
    "parish": "20 de Mayo",
    "barrio": "20 de Mayo",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-017",
    "name": "Norianys Saraquiel Piñero Remedio",
    "phone": "0963131669",
    "phoneRaw": "0963131669",
    "phoneOther": "",
    "email": "",
    "parish": "El Porvenir",
    "barrio": "El Porvenir",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-018",
    "name": "María Carmelina Morocho Aguayza",
    "phone": "0991618328",
    "phoneRaw": "0991618328",
    "phoneOther": "",
    "email": "",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-019",
    "name": "Susana Patricia Santana Alvia",
    "phone": "0969959296",
    "phoneRaw": "0969959296",
    "phoneOther": "",
    "email": "",
    "parish": "Bellavista",
    "barrio": "Bellavista",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-020",
    "name": "Nimar Carolina Remedio Sánchez",
    "phone": "0963131669",
    "phoneRaw": "0963131669",
    "phoneOther": "",
    "email": "carolinaremedio1481@gmail.com",
    "parish": "El Porvenir",
    "barrio": "El Porvenir",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-021",
    "name": "Ivonne Carpio Guerrero",
    "phone": "0985674939",
    "phoneRaw": "0985674939",
    "phoneOther": "",
    "email": "",
    "parish": "Urbirrios",
    "barrio": "Urbirrios",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-022",
    "name": "Leidy Tatiana Rodríguez Meza",
    "phone": "0998297760",
    "phoneRaw": "0998297760",
    "phoneOther": "",
    "email": "tr0960685791@gmail.com",
    "parish": "20 de Mayo",
    "barrio": "20 de Mayo",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-023",
    "name": "Roxana Mercedes Macías Tomalá",
    "phone": "0981571458",
    "phoneRaw": "0981571458",
    "phoneOther": "",
    "email": "roxanamaciast@gmail.com",
    "parish": "La Revancha",
    "barrio": "La Revancha",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-024",
    "name": "Genesis Briggitte Vinces Chiquito",
    "phone": "0984457186",
    "phoneRaw": "0984457186",
    "phoneOther": "",
    "email": "genesisvinces1321@gmail.com",
    "parish": "Leonidas Proaño",
    "barrio": "Leonidas Proaño",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-025",
    "name": "Edwin David Zambrano Macias",
    "phone": "0961404583",
    "phoneRaw": "0961404583",
    "phoneOther": "",
    "email": "",
    "parish": "La Revancha",
    "barrio": "La Revancha",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-026",
    "name": "Geraldine Milena Mero Burgos",
    "phone": "0987772702",
    "phoneRaw": "0987772702",
    "phoneOther": "",
    "email": "Geo-alex4@hotmail.com",
    "parish": "Urbirrios",
    "barrio": "Urbirrios",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-027",
    "name": "Verónica Yasmary Macías Mendoza",
    "phone": "0981902367",
    "phoneRaw": "0981902367",
    "phoneOther": "",
    "email": "veronicamacias58@58hotmail.com",
    "parish": "San Pedro",
    "barrio": "San Pedro",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-028",
    "name": "Karla Nohelia Loor Macías",
    "phone": "0939508428",
    "phoneRaw": "0939508428",
    "phoneOther": "",
    "email": "Karlitanloor2007@gmail.com",
    "parish": "San Pedro",
    "barrio": "San Pedro",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-029",
    "name": "Alany Michelle Delgado Rodríguez",
    "phone": "0993652429",
    "phoneRaw": "0993652429",
    "phoneOther": "",
    "email": "",
    "parish": "El Porvenir",
    "barrio": "El Porvenir",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-030",
    "name": "Nicol Carolina Anchundia Loor",
    "phone": "0985711130",
    "phoneRaw": "0985711130",
    "phoneOther": "",
    "email": "",
    "parish": "El Porvenir",
    "barrio": "El Porvenir",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-031",
    "name": "Melanie Verónica Paredes Rezabala",
    "phone": "0963250669",
    "phoneRaw": "0963250669",
    "phoneOther": "",
    "email": "melanieparedesrezabala@hotmail.com",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C02",
    "courseName": "Auxiliar De Enfermería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-032",
    "name": "María Priscila León Holguín",
    "phone": "0963943485",
    "phoneRaw": "0963943485",
    "phoneOther": "",
    "email": "leonpriscila337@gmail.com",
    "parish": "Ciudadela Monterrey",
    "barrio": "Ciudadela Monterrey",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-033",
    "name": "Sandybelle Zuelid Morales Barrios",
    "phone": "0985553700",
    "phoneRaw": "0985553700",
    "phoneOther": "",
    "email": "sandymobs@gmail.com",
    "parish": "San Mateo",
    "barrio": "San Mateo",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-034",
    "name": "Elvira Magdalena López López",
    "phone": "0994243130",
    "phoneRaw": "0994243130",
    "phoneOther": "",
    "email": "",
    "parish": "Jaramijó",
    "barrio": "Jaramijó",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-035",
    "name": "Gina Monserrate Palma Mendoza",
    "phone": "0990152966",
    "phoneRaw": "0990152966",
    "phoneOther": "",
    "email": "gina.palma@gmail.com",
    "parish": "Umiña",
    "barrio": "Umiña",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-036",
    "name": "Jessenia Katherine Quijije Anchundia",
    "phone": "0963251143",
    "phoneRaw": "0963251143",
    "phoneOther": "",
    "email": "",
    "parish": "Avenida 4 de Noviembre",
    "barrio": "Avenida 4 de Noviembre",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-037",
    "name": "Karla Alejandra Velásquez La Torre",
    "phone": "0991992078",
    "phoneRaw": "0991992078",
    "phoneOther": "",
    "email": "ale2107kvt@gmail.com",
    "parish": "San Mateo",
    "barrio": "San Mateo",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-038",
    "name": "Henry Adrián García Alava",
    "phone": "0983928516",
    "phoneRaw": "0983928516",
    "phoneOther": "",
    "email": "kdgarcia@gmail.com",
    "parish": "Montecristi",
    "barrio": "Montecristi",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-039",
    "name": "Ronald Felipe Flores Pachay",
    "phone": "0984933310",
    "phoneRaw": "0984933310",
    "phoneOther": "",
    "email": "",
    "parish": "La Victoria",
    "barrio": "La Victoria",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-040",
    "name": "Lourdes Isabel Indio Nieto",
    "phone": "0981408218",
    "phoneRaw": "0981408218",
    "phoneOther": "",
    "email": "liindio@gmail.com",
    "parish": "Urbirrios",
    "barrio": "Urbirrios",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-041",
    "name": "Nadia Noa Guamán Martínez",
    "phone": "0968143873",
    "phoneRaw": "0968143873",
    "phoneOther": "",
    "email": "",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-042",
    "name": "Alexi Magali Tuárez Bravo",
    "phone": "0991743328",
    "phoneRaw": "0991743328",
    "phoneOther": "",
    "email": "magaly.tuarez@hotmail.com",
    "parish": "San Pedro",
    "barrio": "San Pedro",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-043",
    "name": "Dalise Carmita Tuárez Bravo",
    "phone": "0995350220",
    "phoneRaw": "0995350220",
    "phoneOther": "",
    "email": "carmita-111@gmail.com",
    "parish": "San Pedro",
    "barrio": "San Pedro",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-044",
    "name": "Keyla Dayana Mendoza Mero",
    "phone": "0980015893",
    "phoneRaw": "0980015893",
    "phoneOther": "",
    "email": "mendozakeyla898@gmail.com",
    "parish": "Cuba",
    "barrio": "Cuba",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-045",
    "name": "Carmen Yolanda González",
    "phone": "0969339212",
    "phoneRaw": "0969339212",
    "phoneOther": "",
    "email": "",
    "parish": "Jaramijó",
    "barrio": "Jaramijó",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-046",
    "name": "Karen Paola Cedeño Parrales",
    "phone": "0987360960",
    "phoneRaw": "0987360960",
    "phoneOther": "",
    "email": "karencedeno0795@gmail.com",
    "parish": "Aquiles Paz",
    "barrio": "Aquiles Paz",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-047",
    "name": "Mayra Mirella Narváez Lino",
    "phone": "0990929343",
    "phoneRaw": "0990929343",
    "phoneOther": "",
    "email": "",
    "parish": "Costa Azul",
    "barrio": "Costa Azul",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-048",
    "name": "Rosa Virginia Quimis Parrales",
    "phone": "0995913397",
    "phoneRaw": "0995913397",
    "phoneOther": "",
    "email": "rquimis15@gmail.com",
    "parish": "La Pradera",
    "barrio": "La Pradera",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-049",
    "name": "Cruz Giomar Flores Mero",
    "phone": "0986651717",
    "phoneRaw": "0986651717",
    "phoneOther": "",
    "email": "",
    "parish": "Bellavista",
    "barrio": "Bellavista",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-050",
    "name": "José Lizandro Tapia Catagua",
    "phone": "0986949212",
    "phoneRaw": "0986949212",
    "phoneOther": "",
    "email": "undertakertapia@gmail.com",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C03",
    "courseName": "Panadería 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-051",
    "name": "María Elena Alonso Mera",
    "phone": "0993739436",
    "phoneRaw": "0993739436",
    "phoneOther": "",
    "email": "malenalonso2506@gmail.com",
    "parish": "San Pedro",
    "barrio": "San Pedro",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C04",
    "courseName": "Belleza 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-052",
    "name": "Diana Isabel Rivera Anchundia",
    "phone": "0987801531",
    "phoneRaw": "0987801531",
    "phoneOther": "",
    "email": "diana1985rian@gmail.com",
    "parish": "La Pradera",
    "barrio": "La Pradera",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C04",
    "courseName": "Belleza 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-053",
    "name": "Julissa Victoria García Murillo",
    "phone": "0969214510",
    "phoneRaw": "0969214510",
    "phoneOther": "",
    "email": "jovigamu@gmail.com",
    "parish": "Tarqui",
    "barrio": "Tarqui",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C04",
    "courseName": "Belleza 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-054",
    "name": "Carmen Dolores Cevallos Guillén",
    "phone": "0993956393",
    "phoneRaw": "0993956393",
    "phoneOther": "",
    "email": "carmencevallos58@hotmail.com",
    "parish": "San Ignacio de Loyola",
    "barrio": "San Ignacio de Loyola",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C04",
    "courseName": "Belleza 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-055",
    "name": "Ingrid Mercedes Mendoza Zamora",
    "phone": "0999727725",
    "phoneRaw": "0999727725",
    "phoneOther": "",
    "email": "",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C04",
    "courseName": "Belleza 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-056",
    "name": "Linda Monserrate Loor Conforme",
    "phone": "0939827701",
    "phoneRaw": "0939827701",
    "phoneOther": "",
    "email": "loorconformelinda@gmail.com",
    "parish": "Montalvan",
    "barrio": "Montalvan",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C04",
    "courseName": "Belleza 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-057",
    "name": "Mónica Janeth Quimis Castro",
    "phone": "0984632180",
    "phoneRaw": "0984632180",
    "phoneOther": "",
    "email": "",
    "parish": "8 de Agosto",
    "barrio": "8 de Agosto",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C04",
    "courseName": "Belleza 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-058",
    "name": "María Fernanda Chamba García",
    "phone": "0963642139",
    "phoneRaw": "0963642139",
    "phoneOther": "",
    "email": "persefone833@outlook.com",
    "parish": "Miraflores",
    "barrio": "Miraflores",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C04",
    "courseName": "Belleza 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-059",
    "name": "Jessica Fernanda Chóez González",
    "phone": "0999393388",
    "phoneRaw": "0999393388",
    "phoneOther": "",
    "email": "jessicachoez@hotmail.com",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C04",
    "courseName": "Belleza 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-060",
    "name": "Jennifer Johanna Jalil Vilela",
    "phone": "0995114500",
    "phoneRaw": "0995114500",
    "phoneOther": "",
    "email": "",
    "parish": "Vía a Colisa",
    "barrio": "Vía a Colisa",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C04",
    "courseName": "Belleza 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-061",
    "name": "Wendismar Caridad Toyo Sánchez",
    "phone": "0979250047",
    "phoneRaw": "0979250047",
    "phoneOther": "",
    "email": "wendistogo@gmail.com",
    "parish": "Costa Real",
    "barrio": "Costa Real",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C04",
    "courseName": "Belleza 1",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-062",
    "name": "María Elena Alonso Mera",
    "phone": "0993739436",
    "phoneRaw": "0993739436",
    "phoneOther": "",
    "email": "malenalonso2506@gmail.com",
    "parish": "San Pedro",
    "barrio": "San Pedro",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C05",
    "courseName": "Belleza 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-063",
    "name": "Diana Isabel Rivera Anchundia",
    "phone": "0987801531",
    "phoneRaw": "0987801531",
    "phoneOther": "",
    "email": "diana1985rian@gmail.com",
    "parish": "La Pradera",
    "barrio": "La Pradera",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C05",
    "courseName": "Belleza 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-064",
    "name": "Julissa Victoria García Murillo",
    "phone": "0969214510",
    "phoneRaw": "0969214510",
    "phoneOther": "",
    "email": "jovigamu@gmail.com",
    "parish": "Tarqui",
    "barrio": "Tarqui",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C05",
    "courseName": "Belleza 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-065",
    "name": "Carmen Dolores Cevallos Guillén",
    "phone": "0993956393",
    "phoneRaw": "0993956393",
    "phoneOther": "",
    "email": "carmencevallos58@hotmail.com",
    "parish": "San Ignacio de Loyola",
    "barrio": "San Ignacio de Loyola",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C05",
    "courseName": "Belleza 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-066",
    "name": "Ingrid Mercedes Mendoza Zamora",
    "phone": "0999727725",
    "phoneRaw": "0999727725",
    "phoneOther": "",
    "email": "",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C05",
    "courseName": "Belleza 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-067",
    "name": "Linda Monserrate Loor Conforme",
    "phone": "0939827701",
    "phoneRaw": "0939827701",
    "phoneOther": "",
    "email": "loorconformelinda@gmail.com",
    "parish": "Montalvan",
    "barrio": "Montalvan",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C05",
    "courseName": "Belleza 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-068",
    "name": "Mónica Janeth Quimis Castro",
    "phone": "0984632180",
    "phoneRaw": "0984632180",
    "phoneOther": "",
    "email": "",
    "parish": "8 de Agosto",
    "barrio": "8 de Agosto",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C05",
    "courseName": "Belleza 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-069",
    "name": "María Fernanda Chamba García",
    "phone": "0963642139",
    "phoneRaw": "0963642139",
    "phoneOther": "",
    "email": "persefone833@outlook.com",
    "parish": "Miraflores",
    "barrio": "Miraflores",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C05",
    "courseName": "Belleza 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-070",
    "name": "Jessica Fernanda Chóez González",
    "phone": "0999393388",
    "phoneRaw": "0999393388",
    "phoneOther": "",
    "email": "jessicachoez@hotmail.com",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C05",
    "courseName": "Belleza 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-071",
    "name": "Jennifer Johanna Jalil Vilela",
    "phone": "0995114500",
    "phoneRaw": "0995114500",
    "phoneOther": "",
    "email": "",
    "parish": "Vía a Colisa",
    "barrio": "Vía a Colisa",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C05",
    "courseName": "Belleza 2",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-072",
    "name": "Franklin Leonel Castro Ponce",
    "phone": "0993363734",
    "phoneRaw": "0993363734",
    "phoneOther": "",
    "email": "franklincastrop1983@gmail.com",
    "parish": "20 de Mayo",
    "barrio": "20 de Mayo",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C06",
    "courseName": "Soldadura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-073",
    "name": "Ángel Jesús Mendoza Loor",
    "phone": "0987762569",
    "phoneRaw": "0987762569",
    "phoneOther": "",
    "email": "angel07kald@gmail.com",
    "parish": "Leonidas Proaño",
    "barrio": "Leonidas Proaño",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C06",
    "courseName": "Soldadura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-074",
    "name": "Karelis Del Carmen Salcedo Gavidia",
    "phone": "0960973184",
    "phoneRaw": "0960973184",
    "phoneOther": "",
    "email": "karlissalcedo5@gmail.com",
    "parish": "Mazato",
    "barrio": "Mazato",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C06",
    "courseName": "Soldadura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-075",
    "name": "Jonathan Geovanny Moreira Zambrano",
    "phone": "0986224493",
    "phoneRaw": "0986224493",
    "phoneOther": "",
    "email": "jonathanmoreiraz392@gmail.com",
    "parish": "Cuba",
    "barrio": "Cuba",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C06",
    "courseName": "Soldadura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-076",
    "name": "Gustavo José Flores Lugo",
    "phone": "0963148635",
    "phoneRaw": "0963148635",
    "phoneOther": "",
    "email": "gf3317185@gmail.com",
    "parish": "15 de Septiembre",
    "barrio": "15 de Septiembre",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C06",
    "courseName": "Soldadura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-077",
    "name": "Israel José Flores Lugo",
    "phone": "0963148635",
    "phoneRaw": "0963148635",
    "phoneOther": "",
    "email": "",
    "parish": "15 de Septiembre",
    "barrio": "15 de Septiembre",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C06",
    "courseName": "Soldadura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-078",
    "name": "Antonio Janner Vinces Chiquito",
    "phone": "0962145342",
    "phoneRaw": "0962145342",
    "phoneOther": "",
    "email": "jesusyjeslheyne26@gmail.com",
    "parish": "Leonidas Proaño",
    "barrio": "Leonidas Proaño",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C06",
    "courseName": "Soldadura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-079",
    "name": "Franklin David Castro Cañar",
    "phone": "0987907433",
    "phoneRaw": "0987907433",
    "phoneOther": "",
    "email": "castrodavid@gmail.com",
    "parish": "20 de Mayo",
    "barrio": "20 de Mayo",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C06",
    "courseName": "Soldadura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-080",
    "name": "Arelys Nicole Mendoza Anchundia",
    "phone": "0999909797",
    "phoneRaw": "0999909797",
    "phoneOther": "",
    "email": "nikimendoza703@gmail.com",
    "parish": "María Auxiliadora 2",
    "barrio": "María Auxiliadora 2",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C06",
    "courseName": "Soldadura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-081",
    "name": "Dennys Omar Morales Espinal",
    "phone": "0981484445",
    "phoneRaw": "0981484445",
    "phoneOther": "",
    "email": "",
    "parish": "Los Espinos",
    "barrio": "Los Espinos",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C06",
    "courseName": "Soldadura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-082",
    "name": "María Fernanda Santos Zambrano",
    "phone": "0990274785",
    "phoneRaw": "0990274785",
    "phoneOther": "",
    "email": "Santosmafer261@gmail.com",
    "parish": "Las Cumbres",
    "barrio": "Las Cumbres",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-083",
    "name": "Margarita Yaneth Castro Bravo",
    "phone": "0984632180",
    "phoneRaw": "0984632180",
    "phoneOther": "",
    "email": "mailto:Marielena81243@gmail.com",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-084",
    "name": "Mirian Glenda Anchundia Lino",
    "phone": "0992510595",
    "phoneRaw": "0992510595",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Isabela",
    "barrio": "Santa Isabela",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-085",
    "name": "Jessica Del Rocio Velez Cobeña",
    "phone": "0997216977",
    "phoneRaw": "0997216977",
    "phoneOther": "",
    "email": "Jekita2727@gmail.com",
    "parish": "Jocay",
    "barrio": "Jocay",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-086",
    "name": "Diana Mariela Delgado Macías",
    "phone": "0987430222",
    "phoneRaw": "0987430222",
    "phoneOther": "",
    "email": "mailto:Smchavez73@hotmail.com",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-087",
    "name": "María Elena Cedeño Villafuerte",
    "phone": "0983096421",
    "phoneRaw": "0983096421",
    "phoneOther": "",
    "email": "Marielena81243@gmail.com",
    "parish": "La Floresta",
    "barrio": "La Floresta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-088",
    "name": "Delia Cristina Loor Salazar",
    "phone": "0985061413",
    "phoneRaw": "0985061413",
    "phoneOther": "",
    "email": "",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-089",
    "name": "Mirian Karina Mera Romero",
    "phone": "0997216977",
    "phoneRaw": "0997216977",
    "phoneOther": "",
    "email": "Rmyrian897@gmail.com",
    "parish": "Los Geranios",
    "barrio": "Los Geranios",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-090",
    "name": "Sonia María Chávez López",
    "phone": "0998829149",
    "phoneRaw": "0998829149",
    "phoneOther": "",
    "email": "Smchavez73@hotmail.com",
    "parish": "Los Esteros",
    "barrio": "Los Esteros",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-091",
    "name": "Olga Esperanza Vera Dueñas",
    "phone": "0963169088",
    "phoneRaw": "0963169088",
    "phoneOther": "",
    "email": "mailto:Meromilena84@gmail.com",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-092",
    "name": "Mana Nelly Chiquinquirá Sánchez",
    "phone": "0987448998",
    "phoneRaw": "0987448998",
    "phoneOther": "",
    "email": "mailto:aleineryscarlet@gmail.com",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-093",
    "name": "Laura Graciela Diaz Poleo",
    "phone": "0987448998",
    "phoneRaw": "0987448998",
    "phoneOther": "",
    "email": "mailto:Maryuricatagua2@gmail.com",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-094",
    "name": "Heidis Nordis Díaz Bolivar",
    "phone": "0958738483",
    "phoneRaw": "0958738483",
    "phoneOther": "",
    "email": "",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-095",
    "name": "Geraldine Milena Mero Burgos",
    "phone": "0987772702",
    "phoneRaw": "0987772702",
    "phoneOther": "",
    "email": "Meromilena84@gmail.com",
    "parish": "Urbirrios",
    "barrio": "Urbirrios",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-096",
    "name": "Leinery Scarlet Alonso Reyes",
    "phone": "0963159697",
    "phoneRaw": "0963159697",
    "phoneOther": "",
    "email": "aleineryscarlet@gmail.com",
    "parish": "San Mateo",
    "barrio": "San Mateo",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-097",
    "name": "Maryuri Del Rocío Catagua Quijije",
    "phone": "0983146490",
    "phoneRaw": "0983146490",
    "phoneOther": "",
    "email": "Maryuricatagua2@gmail.com",
    "parish": "María Auxiliadora 1",
    "barrio": "María Auxiliadora 1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-098",
    "name": "Nadia Noa Guaman Martínez",
    "phone": "0968143873",
    "phoneRaw": "0968143873",
    "phoneOther": "",
    "email": "",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-099",
    "name": "Patricia Soledad Mora Anchundia",
    "phone": "0979949348",
    "phoneRaw": "0979949348",
    "phoneOther": "",
    "email": "sallyanchundia@gmail.com",
    "parish": "Cuba",
    "barrio": "Cuba",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-100",
    "name": "Rosa Robertina Conforme Carrillo",
    "phone": "0939827701",
    "phoneRaw": "0939827701",
    "phoneOther": "",
    "email": "Rosaconforme77@gmail.com",
    "parish": "Montalvan",
    "barrio": "Montalvan",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-101",
    "name": "Marjorie Nicole Tapia Catagua",
    "phone": "0986506841",
    "phoneRaw": "0986506841",
    "phoneOther": "",
    "email": "tapiacataguamarjorie@gmail.com",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-102",
    "name": "Deisy Migdalia Contreras",
    "phone": "0984177888",
    "phoneRaw": "0984177888",
    "phoneOther": "",
    "email": "",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-103",
    "name": "Iralda Del Rocio Contreras Intriago",
    "phone": "0986533334",
    "phoneRaw": "0986533334",
    "phoneOther": "",
    "email": "Iraldycontreras22@gmail.com",
    "parish": "Nuevo Manta",
    "barrio": "Nuevo Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C07",
    "courseName": "Corte Y Confección",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-104",
    "name": "Fiorella Vittoria Baque Flores",
    "phone": "0993812514",
    "phoneRaw": "0993812514",
    "phoneOther": "",
    "email": "fiorellabaqflores@gmail.com",
    "parish": "Si Vivienda",
    "barrio": "Si Vivienda",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-105",
    "name": "Juletzy Nicole Valeriano Cevallos",
    "phone": "0959734654",
    "phoneRaw": "0959734654",
    "phoneOther": "",
    "email": "juletsynicolev@gmail.com",
    "parish": "20 de Mayo",
    "barrio": "20 de Mayo",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-106",
    "name": "Jesus Adriel López Delgado",
    "phone": "0985905007",
    "phoneRaw": "0985905007",
    "phoneOther": "",
    "email": "Yelenalopez2000@gmail.com",
    "parish": "Circunvalación",
    "barrio": "Circunvalación",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-107",
    "name": "Adriana Milena Alay Alay",
    "phone": "0997948630",
    "phoneRaw": "0997948630",
    "phoneOther": "",
    "email": "@kathy1975alay@gmail.com",
    "parish": "Montecristi",
    "barrio": "Montecristi",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-108",
    "name": "Madeline Carolina Cedeño Menendez",
    "phone": "0993817330",
    "phoneRaw": "0993817330",
    "phoneOther": "",
    "email": "Iriscarol777@gmail.com",
    "parish": "Ceibos Renacer",
    "barrio": "Ceibos Renacer",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-109",
    "name": "Valeria Isabel Jaramillo Intriago",
    "phone": "0998014339",
    "phoneRaw": "0998014339",
    "phoneOther": "",
    "email": "Valeriajara226@gmail.com",
    "parish": "María Auxliadora",
    "barrio": "María Auxliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-110",
    "name": "Rooney Isaac Loor Zambrano",
    "phone": "0998284948",
    "phoneRaw": "0998284948",
    "phoneOther": "",
    "email": "rooneyisaacloorzambrano@gmail.com",
    "parish": "La Florita",
    "barrio": "La Florita",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-111",
    "name": "Francisco Alessandro Menedez Loor",
    "phone": "0963416003",
    "phoneRaw": "0963416003",
    "phoneOther": "",
    "email": "Emenendezloor3@gmail.com",
    "parish": "Lomas de Porvenir",
    "barrio": "Lomas de Porvenir",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-112",
    "name": "Jenny Cristina Mina Macias",
    "phone": "0979395756",
    "phoneRaw": "0979395756",
    "phoneOther": "",
    "email": "Jenymina739@gmail.com",
    "parish": "Centro de Manta",
    "barrio": "Centro de Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-113",
    "name": "Santiago Eddu Rivera Plua",
    "phone": "0985797940",
    "phoneRaw": "0985797940",
    "phoneOther": "",
    "email": "Eddu.riu@gmail.com",
    "parish": "Urbirrios 1",
    "barrio": "Urbirrios 1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-114",
    "name": "Miguel Giordano Salazar Mendoza",
    "phone": "0983356513",
    "phoneRaw": "0983356513",
    "phoneOther": "",
    "email": "Giordanosala7@gmail.com",
    "parish": "María Auxiliadora 2",
    "barrio": "María Auxiliadora 2",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-115",
    "name": "Jaleska Nohelia Saltos Anchundia",
    "phone": "0985124331",
    "phoneRaw": "0985124331",
    "phoneOther": "",
    "email": "Jaleskasaltos1133@gmail.com",
    "parish": "20 de Mayo",
    "barrio": "20 de Mayo",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-116",
    "name": "Marialba Alexandra Teigna Alvarado",
    "phone": "0990423671",
    "phoneRaw": "0990423671",
    "phoneOther": "",
    "email": "Franciscotejena1979@hotmail.es",
    "parish": "San José",
    "barrio": "San José",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-117",
    "name": "Alejandra Valentina Zambrano Forero",
    "phone": "0984805601",
    "phoneRaw": "0984805601",
    "phoneOther": "",
    "email": "alejavalentinazambranof@gmail.com",
    "parish": "Circunvalación",
    "barrio": "Circunvalación",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-118",
    "name": "María Elena Ponce Muñoz",
    "phone": "0995061759",
    "phoneRaw": "0995061759",
    "phoneOther": "",
    "email": "Mariaelenaponcemunoz122@gmail.com",
    "parish": "Altagracia",
    "barrio": "Altagracia",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-119",
    "name": "Dilan Gerard Holguin Sornoza",
    "phone": "0999747625",
    "phoneRaw": "0999747625",
    "phoneOther": "",
    "email": "",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-120",
    "name": "Jeremy Mateo Yepez Palma",
    "phone": "0999802164",
    "phoneRaw": "0999802164",
    "phoneOther": "",
    "email": "mateoyepezpalma@gmail.com",
    "parish": "San Pedro",
    "barrio": "San Pedro",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-121",
    "name": "Victor Jesus Mero Dominguez",
    "phone": "0963774786",
    "phoneRaw": "0963774786",
    "phoneOther": "",
    "email": "victorjesusmerodominguez@gmail.com",
    "parish": "Circunvalación",
    "barrio": "Circunvalación",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-122",
    "name": "Victoria Isabella Alcivar Mora",
    "phone": "0996398773",
    "phoneRaw": "0996398773",
    "phoneOther": "",
    "email": "Lilita5102@gmail.com",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-123",
    "name": "Luna Noelia Moreira Anzules",
    "phone": "0993011843",
    "phoneRaw": "0993011843",
    "phoneOther": "",
    "email": "Arturomoreira1712@hotmail.com",
    "parish": "San Pedro",
    "barrio": "San Pedro",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C08",
    "courseName": "Primeros Auxilios",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-124",
    "name": "Danna Nayela Delgado Muñoz",
    "phone": "0960827220",
    "phoneRaw": "0960827220",
    "phoneOther": "",
    "email": "Gabimunoz88@gmail.com",
    "parish": "María Auxiliadora 2",
    "barrio": "María Auxiliadora 2",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-125",
    "name": "Lindsay Nicole Sabando Moreira",
    "phone": "0985008863",
    "phoneRaw": "0985008863",
    "phoneOther": "",
    "email": "Lindsaysabando39@gmail.com",
    "parish": "20 de Mayo",
    "barrio": "20 de Mayo",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-126",
    "name": "Alisson Zambrano",
    "phone": "0984800329",
    "phoneRaw": "0984800329",
    "phoneOther": "",
    "email": "zambranovegadi@gmail.com",
    "parish": "Los Cactus",
    "barrio": "Los Cactus",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-127",
    "name": "Dalia Stefhania Villarroel Posligua",
    "phone": "0939923398",
    "phoneRaw": "0939923398",
    "phoneOther": "",
    "email": "Elbaposligua30@gmail.com",
    "parish": "Cielito Lindo",
    "barrio": "Cielito Lindo",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-128",
    "name": "Angelica Lucia Vega Valeriano",
    "phone": "0983321579",
    "phoneRaw": "0983321579",
    "phoneOther": "",
    "email": "Alina080502@hotmail.com",
    "parish": "Costa Azul",
    "barrio": "Costa Azul",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-129",
    "name": "Leoana Vinces Gonzales",
    "phone": "0967024741",
    "phoneRaw": "0967024741",
    "phoneOther": "",
    "email": "Letty1979-2011@hotmail.com",
    "parish": "Circunvalación",
    "barrio": "Circunvalación",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-130",
    "name": "Ashley Ariana Zambrano Guamán",
    "phone": "0962754810",
    "phoneRaw": "0962754810",
    "phoneOther": "",
    "email": "Zgariana23@gmail.com",
    "parish": "Cuba",
    "barrio": "Cuba",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-131",
    "name": "Kendra Ailyn Aviles Zambrano",
    "phone": "0978868224",
    "phoneRaw": "0978868224",
    "phoneOther": "",
    "email": "Kendraaviles4@gmail.com",
    "parish": "El Porvenir",
    "barrio": "El Porvenir",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-132",
    "name": "Rubí Aitana Giler Loor",
    "phone": "0960296546",
    "phoneRaw": "0960296546",
    "phoneOther": "",
    "email": "Rubigiler11@gmail.com",
    "parish": "Lomas del Porvenir",
    "barrio": "Lomas del Porvenir",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-133",
    "name": "Luna Valentina Choez Peralta",
    "phone": "0961149065",
    "phoneRaw": "0961149065",
    "phoneOther": "",
    "email": "Choezluna2010@gmail.com",
    "parish": "Costa Real",
    "barrio": "Costa Real",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-134",
    "name": "Zharick Corina Reyes Muñoz",
    "phone": "0992664627",
    "phoneRaw": "0992664627",
    "phoneOther": "",
    "email": "",
    "parish": "Montecristi",
    "barrio": "Montecristi",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-135",
    "name": "Liz Pillasagua Delgado",
    "phone": "0997072263",
    "phoneRaw": "0997072263",
    "phoneOther": "",
    "email": "Pillasaguawillian03@gmail.com",
    "parish": "Tarqui",
    "barrio": "Tarqui",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-136",
    "name": "Naomy Echezarreta Lozano",
    "phone": "0995711773",
    "phoneRaw": "0995711773",
    "phoneOther": "",
    "email": "Alainec20021@hotmail.com",
    "parish": "Pradera",
    "barrio": "Pradera",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-137",
    "name": "Solange Gabriela Velez Acosta",
    "phone": "0989565882",
    "phoneRaw": "0989565882",
    "phoneOther": "",
    "email": "Solangevelez25@gmail.com",
    "parish": "Urbirrios 2",
    "barrio": "Urbirrios 2",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C09",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-138",
    "name": "Josselyn Vanessa Parraga Alcivar",
    "phone": "0998000974",
    "phoneRaw": "0998000974",
    "phoneOther": "",
    "email": "josselynparraga@gmail.com",
    "parish": "Circunvalación",
    "barrio": "Circunvalación",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-139",
    "name": "Cristhian Gregorio Mero Bravo",
    "phone": "0987765593",
    "phoneRaw": "0987765593",
    "phoneOther": "",
    "email": "Egregoriomero10@gmail.com",
    "parish": "La Ensenadita",
    "barrio": "La Ensenadita",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-140",
    "name": "Maykel Alvia Villacreses",
    "phone": "0989888364",
    "phoneRaw": "0989888364",
    "phoneOther": "",
    "email": "Maykelalvia63@gmail.com",
    "parish": "Circunvalación",
    "barrio": "Circunvalación",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-141",
    "name": "Erwin Leandro Vargas Vera",
    "phone": "0988254584",
    "phoneRaw": "0988254584",
    "phoneOther": "",
    "email": "Erwinvargas837@gmail.com",
    "parish": "María Auxiliadora",
    "barrio": "María Auxiliadora",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-142",
    "name": "Isaac Fabricio Mendoza Flores",
    "phone": "0995463926",
    "phoneRaw": "0995463926",
    "phoneOther": "",
    "email": "Yoyner30_10@hotmail.es",
    "parish": "Manta",
    "barrio": "Manta",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-143",
    "name": "María José Frisneda Gonzalez",
    "phone": "0980608987",
    "phoneRaw": "0980608987",
    "phoneOther": "",
    "email": "Frisnedagonzalezmari2244@gmail.com",
    "parish": "Las Orquideas",
    "barrio": "Las Orquideas",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-144",
    "name": "Davis Josue Villegas Veliz",
    "phone": "0981324167",
    "phoneRaw": "0981324167",
    "phoneOther": "",
    "email": "alfonsovillegasmacias@gmail.com",
    "parish": "María Auxiliadora 2",
    "barrio": "María Auxiliadora 2",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-145",
    "name": "Juan Jesús Cuenca Zamora",
    "phone": "0960984319",
    "phoneRaw": "0960984319",
    "phoneOther": "",
    "email": "liozamora@hotmail.com",
    "parish": "Costa azul",
    "barrio": "Costa azul",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-146",
    "name": "Gregory Emanuel Moreira Anchundia",
    "phone": "0999463875",
    "phoneRaw": "0999463875",
    "phoneOther": "",
    "email": "Gregorymoreira764@gmail.com",
    "parish": "San Pedro",
    "barrio": "San Pedro",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-147",
    "name": "Joshua Jared Prado Gongora",
    "phone": "0964156660",
    "phoneRaw": "0964156660",
    "phoneOther": "",
    "email": "gongorapradojared@gmail.com",
    "parish": "Las Orquideas",
    "barrio": "Las Orquideas",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-148",
    "name": "Simon Maximiliano Ureta Parraga",
    "phone": "0981201772",
    "phoneRaw": "0981201772",
    "phoneOther": "",
    "email": "Ureta09@gmail.com",
    "parish": "Leonidas Proaño",
    "barrio": "Leonidas Proaño",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-149",
    "name": "Angel Daniel Zamora Choez",
    "phone": "0992759025",
    "phoneRaw": "0992759025",
    "phoneOther": "",
    "email": "maribelitachoez@gmail.com",
    "parish": "San Antonio",
    "barrio": "San Antonio",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-150",
    "name": "Axel Santiago Macias Velez",
    "phone": "0987254945",
    "phoneRaw": "0987254945",
    "phoneOther": "",
    "email": "axelmavel@gmail.com",
    "parish": "Altagracia",
    "barrio": "Altagracia",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-151",
    "name": "Jherald Paul Loor Rivera",
    "phone": "0984714580",
    "phoneRaw": "0984714580",
    "phoneOther": "",
    "email": "Tityj22@hotmail.com",
    "parish": "5 de Agosto",
    "barrio": "5 de Agosto",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-152",
    "name": "María Paula Mendoza Mera",
    "phone": "0982956358",
    "phoneRaw": "0982956358",
    "phoneOther": "",
    "email": "mariapaulameraz@gmail.com",
    "parish": "Cuba",
    "barrio": "Cuba",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-153",
    "name": "Jasleen Belén Cevallos Chavez",
    "phone": "0939008932",
    "phoneRaw": "0939008932",
    "phoneOther": "",
    "email": "belcevalls@gmail.com",
    "parish": "Porvenir Alto",
    "barrio": "Porvenir Alto",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-154",
    "name": "Randal Jordanis Pilay López",
    "phone": "0963695992",
    "phoneRaw": "0963695992",
    "phoneOther": "",
    "email": "Randalxd376@gmail.com",
    "parish": "4 de Noviembre",
    "barrio": "4 de Noviembre",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C10",
    "courseName": "Panadería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-155",
    "name": "Neyxer Sleyderth Cevallos Macias",
    "phone": "0994240590",
    "phoneRaw": "0994240590",
    "phoneOther": "",
    "email": "Mayramacias1@hotmail.es",
    "parish": "María Auxiliadora 1",
    "barrio": "María Auxiliadora 1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-156",
    "name": "Bruce Maykel Rizo Bailón",
    "phone": "0991273289",
    "phoneRaw": "0991273289",
    "phoneOther": "",
    "email": "Mbailon545@gmail.com",
    "parish": "La Paz",
    "barrio": "La Paz",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-157",
    "name": "Jhon Maykel Bazurto Olton",
    "phone": "0969202925",
    "phoneRaw": "0969202925",
    "phoneOther": "",
    "email": "Roger2003_09@hotmail.com",
    "parish": "San Pedro",
    "barrio": "San Pedro",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-158",
    "name": "Johan Ariel Alava Cuenca",
    "phone": "0963282624",
    "phoneRaw": "0963282624",
    "phoneOther": "",
    "email": "johanalavacuenca@gmail.com",
    "parish": "El Palmar",
    "barrio": "El Palmar",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-159",
    "name": "Mathias Moreira Mendoza",
    "phone": "0994603521",
    "phoneRaw": "0994603521",
    "phoneOther": "",
    "email": "Jordimoreira97@gmail.com",
    "parish": "Los Geraneos",
    "barrio": "Los Geraneos",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-160",
    "name": "Leiberth Linikerth Sacón Delgado",
    "phone": "0999220346",
    "phoneRaw": "0999220346",
    "phoneOther": "",
    "email": "Saconleiberth1108@gmail.com",
    "parish": "Los Angeles",
    "barrio": "Los Angeles",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-161",
    "name": "Aarón Ezequiel García Romero",
    "phone": "0982114056",
    "phoneRaw": "0982114056",
    "phoneOther": "",
    "email": "Adolfogar1981@outlook.com",
    "parish": "La Victoria",
    "barrio": "La Victoria",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-162",
    "name": "Emanuel Alejandro Pérez Velez",
    "phone": "0997216977",
    "phoneRaw": "0997216977",
    "phoneOther": "",
    "email": "Aperez352016@gmail.com",
    "parish": "Jocay",
    "barrio": "Jocay",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-163",
    "name": "Dilan Valentin Salazar Pincay",
    "phone": "0981620091",
    "phoneRaw": "0981620091",
    "phoneOther": "",
    "email": "Dilansalazar1790@gmail.com",
    "parish": "Cuba",
    "barrio": "Cuba",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-164",
    "name": "Jeremy David Pilay Dávila",
    "phone": "0978733256",
    "phoneRaw": "0978733256",
    "phoneOther": "",
    "email": "jeremydavidpd@gmail.com",
    "parish": "San Antonio",
    "barrio": "San Antonio",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-165",
    "name": "Maykel Yandel Pilligua Zambrano",
    "phone": "0992780991",
    "phoneRaw": "0992780991",
    "phoneOther": "",
    "email": "maykelpilligua@gmail.com",
    "parish": "Cuba",
    "barrio": "Cuba",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-166",
    "name": "Andersson David Zambrano Posligua",
    "phone": "0985667120",
    "phoneRaw": "0985667120",
    "phoneOther": "",
    "email": "Anderssonzambrano88@gmail.com",
    "parish": "María Auxiliadora 2",
    "barrio": "María Auxiliadora 2",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C11",
    "courseName": "Barbería Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-167",
    "name": "Danna Lucero Cevallos",
    "phone": "0998681638",
    "phoneRaw": "0998681638",
    "phoneOther": "",
    "email": "juliocesarluceroholguin@gmail.com",
    "parish": "Montalvan",
    "barrio": "Montalvan",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C12",
    "courseName": "Porcelana Fría Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-168",
    "name": "Rihanna Anahí Zapata López",
    "phone": "0963280618",
    "phoneRaw": "0963280618",
    "phoneOther": "",
    "email": "Rihannazapata40@gmail.com",
    "parish": "Circunvalación",
    "barrio": "Circunvalación",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C12",
    "courseName": "Porcelana Fría Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-169",
    "name": "Daniel José Parraga",
    "phone": "0989481933",
    "phoneRaw": "0989481933",
    "phoneOther": "",
    "email": "danielparraga@gmail.com",
    "parish": "15 de Septiembre",
    "barrio": "15 de Septiembre",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C12",
    "courseName": "Porcelana Fría Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-170",
    "name": "Angie Waleska Barcia Zambrano",
    "phone": "0990057601",
    "phoneRaw": "0990057601",
    "phoneOther": "",
    "email": "Elizambrano1990@gmail.com",
    "parish": "Urbirrios",
    "barrio": "Urbirrios",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C12",
    "courseName": "Porcelana Fría Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-171",
    "name": "Annika Maiara Valle Cotera",
    "phone": "0991669622",
    "phoneRaw": "0991669622",
    "phoneOther": "",
    "email": "vallecoteraannika@gmail.com",
    "parish": "Jocay",
    "barrio": "Jocay",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C12",
    "courseName": "Porcelana Fría Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-172",
    "name": "Kimberly Geanela Barreto Rodriguez",
    "phone": "0997182408",
    "phoneRaw": "0997182408",
    "phoneOther": "",
    "email": "Bc81angel@gmail.com",
    "parish": "Porvenir alto",
    "barrio": "Porvenir alto",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C12",
    "courseName": "Porcelana Fría Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-173",
    "name": "Damaris Sarahí Alay Pincay",
    "phone": "0981288839",
    "phoneRaw": "0981288839",
    "phoneOther": "",
    "email": "alayalaydamaris@gmail.com",
    "parish": "Si Vivienda",
    "barrio": "Si Vivienda",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C12",
    "courseName": "Porcelana Fría Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-174",
    "name": "Ashley Noemy López Álava",
    "phone": "0995434687",
    "phoneRaw": "0995434687",
    "phoneOther": "",
    "email": "Noemyalava10@gmail.com",
    "parish": "Los Geraneos",
    "barrio": "Los Geraneos",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C12",
    "courseName": "Porcelana Fría Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-175",
    "name": "Arias Choez Kennyt Johan",
    "phone": "0981861163",
    "phoneRaw": "0981861163",
    "phoneOther": "",
    "email": "choezlopez@hotmail.com",
    "parish": "CDLA. 20 DE MAYO",
    "barrio": "CDLA. 20 DE MAYO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-176",
    "name": "Bermúdez Loor Geovanna Julieth",
    "phone": "0960418106",
    "phoneRaw": "0960418106",
    "phoneOther": "",
    "email": "yoyiloorpac@outlook",
    "parish": "BARRIO SAN RAFAEL",
    "barrio": "BARRIO SAN RAFAEL",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-177",
    "name": "Burgos Parraga Neicer Matheo",
    "phone": "0959897813",
    "phoneRaw": "0959897813",
    "phoneOther": "",
    "email": "sandra.parraga@hotmail.com",
    "parish": "CIUDADELA CIRCUNVALACION",
    "barrio": "CIUDADELA CIRCUNVALACION",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-178",
    "name": "Casquete Mantuano Angel Abiel",
    "phone": "0982873013",
    "phoneRaw": "0982873013",
    "phoneOther": "",
    "email": "mabelen1500@gmail.com",
    "parish": "BARRIO CUBA",
    "barrio": "BARRIO CUBA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-179",
    "name": "Cedeño Cobeña Kelvin Mariano",
    "phone": "0963193666",
    "phoneRaw": "0963193666",
    "phoneOther": "",
    "email": "cedenokelvin903@gmail.com",
    "parish": "PARROQUIA ELOY ALFARO",
    "barrio": "PARROQUIA ELOY ALFARO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-180",
    "name": "Cedeño Gongora Lister Andre",
    "phone": "0994442075",
    "phoneRaw": "0994442075",
    "phoneOther": "",
    "email": "lister.cedeno@cnel.gob.ec",
    "parish": "BARRIO SAN ANTONIO",
    "barrio": "BARRIO SAN ANTONIO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-181",
    "name": "Cedeño Quimiz Karla Valeria",
    "phone": "0993189903",
    "phoneRaw": "0993189903",
    "phoneOther": "",
    "email": "melaniecedeno07@gmail.com",
    "parish": "LEONIDAS PROAÑO",
    "barrio": "LEONIDAS PROAÑO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-182",
    "name": "Cedeño Zambrano Jose Ariel",
    "phone": "0993667108",
    "phoneRaw": "0993667108",
    "phoneOther": "",
    "email": "monicazbal@hotmail.com",
    "parish": "CIUDADELA SAN IGNACIO DE LOYOLA CALLE 310 AV.223",
    "barrio": "CIUDADELA SAN IGNACIO DE LOYOLA CALLE 310 AV.223",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-183",
    "name": "Chavez Delgado Maytte Madeleyn",
    "phone": "0987011196",
    "phoneRaw": "0987011196",
    "phoneOther": "",
    "email": "madehellen0216@gmai.com",
    "parish": "SI VIVIENDA",
    "barrio": "SI VIVIENDA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-184",
    "name": "Domo Resabala Maily Daniela",
    "phone": "0939162867",
    "phoneRaw": "0939162867",
    "phoneOther": "",
    "email": "jorge197533@hotmail.com",
    "parish": "CDLA CEIBO RENACER",
    "barrio": "CDLA CEIBO RENACER",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-185",
    "name": "Franco Ostaiza Anthony Alejandro",
    "phone": "0969682207",
    "phoneRaw": "0969682207",
    "phoneOther": "",
    "email": "jahairaostaiza@gmail.com",
    "parish": "BARRIO SAN PEDRO",
    "barrio": "BARRIO SAN PEDRO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-186",
    "name": "Gonzalez Gonzalez Kira Valesska",
    "phone": "0982723697",
    "phoneRaw": "0982723697",
    "phoneOther": "",
    "email": "jeniffergonzalez071@gmail.com",
    "parish": "CDLA LA AURORA",
    "barrio": "CDLA LA AURORA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-187",
    "name": "Holguin Anchundia Luis Fernando",
    "phone": "0982610959",
    "phoneRaw": "0982610959",
    "phoneOther": "",
    "email": "luisferholguinanchundia@gmail.com",
    "parish": "CALLE 311 AVENIDA 215 INTERBARRIAL MARIA AUXILIADORA 2",
    "barrio": "CALLE 311 AVENIDA 215 INTERBARRIAL MARIA AUXILIADORA 2",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-188",
    "name": "Lopez Villegas Keyra Aleska",
    "phone": "0993728031",
    "phoneRaw": "0993728031",
    "phoneOther": "",
    "email": "alexa30villegas@gmail.com",
    "parish": "CIUDADELA 20 DE MAYO",
    "barrio": "CIUDADELA 20 DE MAYO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-189",
    "name": "Macao Mera Randy Ismael",
    "phone": "0964054440",
    "phoneRaw": "0964054440",
    "phoneOther": "",
    "email": "angelameracede@gmail.com",
    "parish": "CALLE 324 AV 215 CDLA 15 DE ABRIL",
    "barrio": "CALLE 324 AV 215 CDLA 15 DE ABRIL",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-190",
    "name": "Marcillo Caballero Dereck Fabricio",
    "phone": "0962096917",
    "phoneRaw": "0962096917",
    "phoneOther": "",
    "email": "dereckydayan9@hotmail.com",
    "parish": "MARÍA AUXILIADORA N°1",
    "barrio": "MARÍA AUXILIADORA N°1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-191",
    "name": "Mendoza Anchundia Nathaly Nahomy",
    "phone": "0982763016",
    "phoneRaw": "0982763016",
    "phoneOther": "",
    "email": "yandrymendoza096@gmail.com",
    "parish": "BARRIO 5 DE AGOSTO",
    "barrio": "BARRIO 5 DE AGOSTO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-192",
    "name": "Mendoza Méndez Scarleth Dayanara",
    "phone": "0982936420",
    "phoneRaw": "0982936420",
    "phoneOther": "",
    "email": "dm2195288@gmail.com",
    "parish": "CIUDADELA URSA",
    "barrio": "CIUDADELA URSA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-193",
    "name": "Mera Quijije Maykel Ariel",
    "phone": "0996485893",
    "phoneRaw": "0996485893",
    "phoneOther": "",
    "email": "lalitaq@outlook.es",
    "parish": "20 DE MAYO AV 217 Y CALLE 299",
    "barrio": "20 DE MAYO AV 217 Y CALLE 299",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-194",
    "name": "Molina Vargas Alexis David",
    "phone": "0993798052",
    "phoneRaw": "0993798052",
    "phoneOther": "",
    "email": "vargaslooranamercedes@gmail.com",
    "parish": "CIUDADELA 20 DE MAYO",
    "barrio": "CIUDADELA 20 DE MAYO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-195",
    "name": "Muentes Delgado Maria Guadalupe",
    "phone": "0986271424",
    "phoneRaw": "0986271424",
    "phoneOther": "",
    "email": "marisoldelgadoo14@gmail.com",
    "parish": "URBIRRIOS",
    "barrio": "URBIRRIOS",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-196",
    "name": "Ortiz Zambrano Sharon Crismar",
    "phone": "0991447376",
    "phoneRaw": "0991447376",
    "phoneOther": "",
    "email": "doloresisabelzambrano53@gmail.com",
    "parish": "BARRIO 5 DE AGOSTO LAS CUMBRES",
    "barrio": "BARRIO 5 DE AGOSTO LAS CUMBRES",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-197",
    "name": "Pico Zamora Jadiel Alexander",
    "phone": "0993620140",
    "phoneRaw": "0993620140",
    "phoneOther": "",
    "email": "picozamorajadielalexander@gmail.com",
    "parish": "LEÓNIDAS PROAÑO C.10",
    "barrio": "LEÓNIDAS PROAÑO C.10",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-198",
    "name": "Salazar Astudillo José Antonio",
    "phone": "0963280719",
    "phoneRaw": "0963280719",
    "phoneOther": "",
    "email": "auryandreinaastudillodesalazar@gmail.com",
    "parish": "AV.22 ENTRE CALLE 8 Y 9",
    "barrio": "AV.22 ENTRE CALLE 8 Y 9",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-199",
    "name": "Santiana Mera Geonara Loreley",
    "phone": "0983734600",
    "phoneRaw": "0983734600",
    "phoneOther": "",
    "email": "geonalpreleysantianamera@gmail.com",
    "parish": "BARRIO MIRAFLORES CALLE VENEZUELA",
    "barrio": "BARRIO MIRAFLORES CALLE VENEZUELA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-200",
    "name": "Valencia Cedeño Fernanda Estefania",
    "phone": "0998598669",
    "phoneRaw": "0998598669",
    "phoneOther": "",
    "email": "marcede21@hotmail.com",
    "parish": "BARRIO MARIA AUXILIADORA 2",
    "barrio": "BARRIO MARIA AUXILIADORA 2",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-201",
    "name": "Vargas Valencia Emily Nicole",
    "phone": "0991544812",
    "phoneRaw": "0991544812",
    "phoneOther": "",
    "email": "valeriairmavalenciazambrano@gmail.com",
    "parish": "SECTOR LOS ANGELES - CIRCUNVALACIÓN",
    "barrio": "SECTOR LOS ANGELES - CIRCUNVALACIÓN",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-202",
    "name": "Velez Mero Kevin Andres",
    "phone": "0939830248",
    "phoneRaw": "0939830248",
    "phoneOther": "",
    "email": "chistianvesan90@hotmail.com",
    "parish": "MANTA MAZATO CALLE 309 AVENIDA 227",
    "barrio": "MANTA MAZATO CALLE 309 AVENIDA 227",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-203",
    "name": "Vera Delgado Luigina Nahy",
    "phone": "0990867456",
    "phoneRaw": "0990867456",
    "phoneOther": "",
    "email": "erikadelgado981@gmail.com",
    "parish": "LAS CUMBRES",
    "barrio": "LAS CUMBRES",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-204",
    "name": "Vinces Salazar Emily Julissa",
    "phone": "0990191545",
    "phoneRaw": "0990191545",
    "phoneOther": "",
    "email": "marlene74_@outlook.com",
    "parish": "BARRIO JOCAY J10 AV 1 DE ENERO",
    "barrio": "BARRIO JOCAY J10 AV 1 DE ENERO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-205",
    "name": "Zambrano Alcivar Alexa Jovanna",
    "phone": "0987133827",
    "phoneRaw": "0987133827",
    "phoneOther": "",
    "email": "alexazam@gmail.com",
    "parish": "SAN RAFAEL",
    "barrio": "SAN RAFAEL",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-206",
    "name": "Alcivar Casquete Gissel Anelys",
    "phone": "0959718793",
    "phoneRaw": "0959718793",
    "phoneOther": "",
    "email": "ananicole99@hotmail.com",
    "parish": "AV212 Y CALLE 309",
    "barrio": "AV212 Y CALLE 309",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-207",
    "name": "Baque Franco Angie Lisbeth",
    "phone": "0999690453",
    "phoneRaw": "0999690453",
    "phoneOther": "",
    "email": "angiebaque.2008@gmail.com",
    "parish": "LA REVANCHA ETAPA 2",
    "barrio": "LA REVANCHA ETAPA 2",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-208",
    "name": "Carmigniani Tuarez Analiz",
    "phone": "0939624011",
    "phoneRaw": "0939624011",
    "phoneOther": "",
    "email": "luisatuarez1970@hotmail.com",
    "parish": "SANTA MARTHA AV. 35 Y CALLE 5",
    "barrio": "SANTA MARTHA AV. 35 Y CALLE 5",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-209",
    "name": "Castro Saltos Celina Elizabeth",
    "phone": "0967395574",
    "phoneRaw": "0967395574",
    "phoneOther": "",
    "email": "chelo_castro22@hotmailcom",
    "parish": "LA PRADERA",
    "barrio": "LA PRADERA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-210",
    "name": "Caval Macias Madeleinne Jurbeny",
    "phone": "0980906067",
    "phoneRaw": "0980906067",
    "phoneOther": "",
    "email": "jotapinumeral@gmail.com",
    "parish": "CDLA MONTALVAN",
    "barrio": "CDLA MONTALVAN",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-211",
    "name": "Cedeño Macías Maria Angela",
    "phone": "0987233710",
    "phoneRaw": "0987233710",
    "phoneOther": "",
    "email": "ximenamacias570@gmail.com",
    "parish": "CDLA ALTAGRACIA AV PRINCIPAL E CALLE E4",
    "barrio": "CDLA ALTAGRACIA AV PRINCIPAL E CALLE E4",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-212",
    "name": "Cedeño Saltos Juan Carlos",
    "phone": "0967601086",
    "phoneRaw": "0967601086",
    "phoneOther": "",
    "email": "juanks2180@hotmail.com",
    "parish": "20 DE MAYO SECTOR LAS VEGAS",
    "barrio": "20 DE MAYO SECTOR LAS VEGAS",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-213",
    "name": "Espinales Quiroz Emily Jamileth",
    "phone": "0958858380",
    "phoneRaw": "0958858380",
    "phoneOther": "",
    "email": "emilyespinales132@gmail.com",
    "parish": "CALLE 116 AV 200 # 413",
    "barrio": "CALLE 116 AV 200 # 413",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-214",
    "name": "Garcia Cifuentes Jostin Alexis",
    "phone": "0988791315",
    "phoneRaw": "0988791315",
    "phoneOther": "",
    "email": "mercedescifuentes24@gmail.com",
    "parish": "0",
    "barrio": "0",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-215",
    "name": "Gomez Piguave Kiara Valentina",
    "phone": "0994366659",
    "phoneRaw": "0994366659",
    "phoneOther": "",
    "email": "piguaveeliza@gmail.com",
    "parish": "MANTA BARRIO 5 DE AGOSTO SECTOR LAS CUMBRES AVENIDA K",
    "barrio": "MANTA BARRIO 5 DE AGOSTO SECTOR LAS CUMBRES AVENIDA K",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-216",
    "name": "Gutierrez Cedeño Danna Belen",
    "phone": "0988841639",
    "phoneRaw": "0988841639",
    "phoneOther": "",
    "email": "jessica.penafiel.024m@gmail.com",
    "parish": "BARRIO MARIA AUXILIADOR#1 CALLE 307 AV. 214",
    "barrio": "BARRIO MARIA AUXILIADOR#1 CALLE 307 AV. 214",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-217",
    "name": "Macias Moreira Domenica Lissette",
    "phone": "0985022433",
    "phoneRaw": "0985022433",
    "phoneOther": "",
    "email": "ajacquelinemoreira29@gmail.com",
    "parish": "BARRIO SANTA ANA",
    "barrio": "BARRIO SANTA ANA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-218",
    "name": "Mendieta Roldan Ricardo David",
    "phone": "0939932691",
    "phoneRaw": "0939932691",
    "phoneOther": "",
    "email": "ricardodavidmendietaroldan@gmail.com",
    "parish": "BARRIO MARÍA AUXILIADORA #1",
    "barrio": "BARRIO MARÍA AUXILIADORA #1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-219",
    "name": "Mero Rosado Britany Naomi",
    "phone": "0994690936",
    "phoneRaw": "0994690936",
    "phoneOther": "",
    "email": "nahomimero208@gmail.com",
    "parish": "CALLE 319 AV 218",
    "barrio": "CALLE 319 AV 218",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-220",
    "name": "Moreira Bowen Gerard Isaias",
    "phone": "0996182323",
    "phoneRaw": "0996182323",
    "phoneOther": "",
    "email": "lisbowen1989@hotmail.com",
    "parish": "AV.220 ENTRE CALLE 307 Y 309",
    "barrio": "AV.220 ENTRE CALLE 307 Y 309",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-221",
    "name": "Moreira Castro Keyla Maleny",
    "phone": "0996222397",
    "phoneRaw": "0996222397",
    "phoneOther": "",
    "email": "jaredkeki@gmail.com",
    "parish": "CIUDADELA MONTALBAN",
    "barrio": "CIUDADELA MONTALBAN",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-222",
    "name": "Moreira Loor Hillary Gislayn",
    "phone": "0992267014",
    "phoneRaw": "0992267014",
    "phoneOther": "",
    "email": "genovevaloor9@gmail.com",
    "parish": "CALLE 323A AV 210",
    "barrio": "CALLE 323A AV 210",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-223",
    "name": "Moreira Rivera Damiana Anahi",
    "phone": "0994983411",
    "phoneRaw": "0994983411",
    "phoneOther": "",
    "email": "magali.riveratubay.78@gmail.com",
    "parish": "BARRIO HORACIO HIDROVO CALLE 326 AVENIDA 222",
    "barrio": "BARRIO HORACIO HIDROVO CALLE 326 AVENIDA 222",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-224",
    "name": "Moreira Soledispa Pablo Alejandro",
    "phone": "0979200036",
    "phoneRaw": "0979200036",
    "phoneOther": "",
    "email": "pilar.soledispa@hotmail.com",
    "parish": "MARIA AUXILIADORA N. 2 CALLE 309 AVENIDA 214",
    "barrio": "MARIA AUXILIADORA N. 2 CALLE 309 AVENIDA 214",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-225",
    "name": "Olmedo España Nicolle Dayanara",
    "phone": "0996383982",
    "phoneRaw": "0996383982",
    "phoneOther": "",
    "email": "caoa150274@hotmail.com",
    "parish": "URBIRRIOS 1",
    "barrio": "URBIRRIOS 1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-226",
    "name": "Palacios Serrano Andy Eduardo",
    "phone": "0967500170",
    "phoneRaw": "0967500170",
    "phoneOther": "",
    "email": "mariuxisd_84@hotmail.com",
    "parish": "SANTA CLARA",
    "barrio": "SANTA CLARA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-227",
    "name": "Pilligua Lopez Bradley Elvin",
    "phone": "0939567780",
    "phoneRaw": "0939567780",
    "phoneOther": "",
    "email": "brenda_rebeca27@outlook.com",
    "parish": "CDLA 20 DE MAYO",
    "barrio": "CDLA 20 DE MAYO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-228",
    "name": "Pinoargote Palma Gabriela Elizabeth",
    "phone": "0993337690",
    "phoneRaw": "0993337690",
    "phoneOther": "",
    "email": "chinapalma88@gmail.com",
    "parish": "BARRIO SAN AGUSTIN",
    "barrio": "BARRIO SAN AGUSTIN",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-229",
    "name": "Plua Mero Jurani Monserrate",
    "phone": "0993194672",
    "phoneRaw": "0993194672",
    "phoneOther": "",
    "email": "diana-mero1989@hotmail.com",
    "parish": "CIUDADELA CIRCUNVALACIÓN CALLE 307 AV 230",
    "barrio": "CIUDADELA CIRCUNVALACIÓN CALLE 307 AV 230",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-230",
    "name": "Rodriguez Mendoza Yorwin Mathias",
    "phone": "0998934887",
    "phoneRaw": "0998934887",
    "phoneOther": "",
    "email": "dianajmr.25@gmail.com",
    "parish": "CALLE 304 AV 211",
    "barrio": "CALLE 304 AV 211",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-231",
    "name": "Santana Chuqui Santiago Daniel",
    "phone": "0995265314",
    "phoneRaw": "0995265314",
    "phoneOther": "",
    "email": "casachuqui0@gmail.com",
    "parish": "CIUDADELA MONTALBAN",
    "barrio": "CIUDADELA MONTALBAN",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-232",
    "name": "Soledispa Rodriguez Elkin Alexander",
    "phone": "0986978081",
    "phoneRaw": "0986978081",
    "phoneOther": "",
    "email": "ladydomerodri@gmail.com",
    "parish": "CIUDADELA 20 DE MAYO",
    "barrio": "CIUDADELA 20 DE MAYO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-233",
    "name": "Tomala Estrada Luis Mario",
    "phone": "0997851920",
    "phoneRaw": "0997851920",
    "phoneOther": "",
    "email": "estrabela07@hotmail.com",
    "parish": "BARRIO MARIA AUXILIADORA #1 CALLE 303 AVE 209",
    "barrio": "BARRIO MARIA AUXILIADORA #1 CALLE 303 AVE 209",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-234",
    "name": "Villegas Bravo Aisha Zharick",
    "phone": "0993728031",
    "phoneRaw": "0993728031",
    "phoneOther": "",
    "email": "alexa30villegas@gmail.com",
    "parish": "CIUDADELA 20 DE MAYO",
    "barrio": "CIUDADELA 20 DE MAYO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-235",
    "name": "Anchundia Peralta Alexander Javier",
    "phone": "0959166299",
    "phoneRaw": "0959166299",
    "phoneOther": "",
    "email": "justinap906@gmail.com",
    "parish": "BARRIO LA PAZ",
    "barrio": "BARRIO LA PAZ",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-236",
    "name": "Barreto Roldan Eduardo Jesus",
    "phone": "0999392678",
    "phoneRaw": "0999392678",
    "phoneOther": "",
    "email": "gled_2212@hotmail.com",
    "parish": "BARRIO MARIA AUXILIADORA # 1",
    "barrio": "BARRIO MARIA AUXILIADORA # 1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-237",
    "name": "Burgos Erazo Nixon Erick",
    "phone": "0967369100",
    "phoneRaw": "0967369100",
    "phoneOther": "",
    "email": "jessenia_erazo9@hotmail.com",
    "parish": "BARRIO MARIA AUXILIADORA 1",
    "barrio": "BARRIO MARIA AUXILIADORA 1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-238",
    "name": "Cajape Zavala Jhonny Smelin",
    "phone": "0980894284",
    "phoneRaw": "0980894284",
    "phoneOther": "",
    "email": "evelynzavalaparedes@gmail.com",
    "parish": "CDLA. 20 DE MAYO",
    "barrio": "CDLA. 20 DE MAYO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-239",
    "name": "Carrion Zambrano Gladys Analy",
    "phone": "0995766692",
    "phoneRaw": "0995766692",
    "phoneOther": "",
    "email": "elianaz-42@hotmail.com",
    "parish": "BARRIO MARIA AUXILIADORA #1",
    "barrio": "BARRIO MARIA AUXILIADORA #1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-240",
    "name": "Catagua Quiroz Hasten Jesús",
    "phone": "0984543898",
    "phoneRaw": "0984543898",
    "phoneOther": "",
    "email": "hastencatagua22@gmail.com",
    "parish": "LA PAZ",
    "barrio": "LA PAZ",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-241",
    "name": "Cedeño Barreto Joskar Emiliano",
    "phone": "0992843804",
    "phoneRaw": "0992843804",
    "phoneOther": "",
    "email": "tatianabarreto953@yahoo.es",
    "parish": "V. 114 CALLE J6",
    "barrio": "V. 114 CALLE J6",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-242",
    "name": "Cedeño Cedeño Jose Elias",
    "phone": "0997375434",
    "phoneRaw": "0997375434",
    "phoneOther": "",
    "email": "escorpioncemo@hotmail.com",
    "parish": "LAS CUMBRES",
    "barrio": "LAS CUMBRES",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-243",
    "name": "Cedeño Ponce Valeria Corina",
    "phone": "0993094015",
    "phoneRaw": "0993094015",
    "phoneOther": "",
    "email": "valeriacedenoponc123@gmail.com",
    "parish": "URBIRRIOS 2",
    "barrio": "URBIRRIOS 2",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-244",
    "name": "Cedeño Sornoza Kristel Pierina",
    "phone": "0990766408",
    "phoneRaw": "0990766408",
    "phoneOther": "",
    "email": "cedenopierina515@gmail.com",
    "parish": "BARRIO MARIA AUXILIADORA 1",
    "barrio": "BARRIO MARIA AUXILIADORA 1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-245",
    "name": "Cevallos Mieles Francesca Anthonella",
    "phone": "0999986059",
    "phoneRaw": "0999986059",
    "phoneOther": "",
    "email": "francescacevallos10@gmail.com",
    "parish": "VILLAS DEL SEGURO",
    "barrio": "VILLAS DEL SEGURO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-246",
    "name": "Fernández Intriago Erick Rafael",
    "phone": "0968279309",
    "phoneRaw": "0968279309",
    "phoneOther": "",
    "email": "1983anaintriago@gmail.com",
    "parish": "LA REVANCHA",
    "barrio": "LA REVANCHA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-247",
    "name": "Flores Zambrano Leslie Analia",
    "phone": "0963276101",
    "phoneRaw": "0963276101",
    "phoneOther": "",
    "email": "narcisaestefaniazambranocedeno@gmail.com",
    "parish": "URBANIZACIÓN CIELITO LINDO MZC2 VILLA 16",
    "barrio": "URBANIZACIÓN CIELITO LINDO MZC2 VILLA 16",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-248",
    "name": "Garcia Macias Luis Carlos",
    "phone": "0969160917",
    "phoneRaw": "0969160917",
    "phoneOther": "",
    "email": "yajairamacias84@gmail.com",
    "parish": "CALLE 12 AV 21",
    "barrio": "CALLE 12 AV 21",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-249",
    "name": "Garcia Zambrano Scarleth Stephanie",
    "phone": "0988804696",
    "phoneRaw": "0988804696",
    "phoneOther": "",
    "email": "yulyandrea08.11@gmail.com",
    "parish": "CEIBOS RENACER",
    "barrio": "CEIBOS RENACER",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-250",
    "name": "Mala Cañar Anthony Jose",
    "phone": "0968482879",
    "phoneRaw": "0968482879",
    "phoneOther": "",
    "email": "kathycanar520@gmail.com",
    "parish": "CUIDADELA 20 DE MAYO",
    "barrio": "CUIDADELA 20 DE MAYO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-251",
    "name": "Mendoza Alcivar Miley Daleska",
    "phone": "0986594116",
    "phoneRaw": "0986594116",
    "phoneOther": "",
    "email": "karinaalcivar90@outlook.com",
    "parish": "CIRCUMVALACION CALLE 307 AV227",
    "barrio": "CIRCUMVALACION CALLE 307 AV227",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-252",
    "name": "Miranda Cedeño Davis Enrique",
    "phone": "0987619242",
    "phoneRaw": "0987619242",
    "phoneOther": "",
    "email": "2019gilmacedeno@gmail.com",
    "parish": "BARRIO MARIA AUXILIADORA #1",
    "barrio": "BARRIO MARIA AUXILIADORA #1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-253",
    "name": "Moreira Cedeño Kevin David",
    "phone": "0939632096",
    "phoneRaw": "0939632096",
    "phoneOther": "",
    "email": "wmoreirafigueroa@gmail.com",
    "parish": "BARRIO MARIA AUXILIADORA # 1",
    "barrio": "BARRIO MARIA AUXILIADORA # 1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-254",
    "name": "Moreira Lugo Rodrigo Javier",
    "phone": "0980799161",
    "phoneRaw": "0980799161",
    "phoneOther": "",
    "email": "no",
    "parish": "CALLE 297 AVE 211",
    "barrio": "CALLE 297 AVE 211",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-255",
    "name": "Ormaza Zambrano Stephany Elizabeth",
    "phone": "0998430371",
    "phoneRaw": "0998430371",
    "phoneOther": "",
    "email": "stephyormaza@gmail.com",
    "parish": "CIUDADELA CIRCUNVALACIÓN",
    "barrio": "CIUDADELA CIRCUNVALACIÓN",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-256",
    "name": "Palma Macias Michael Roberto",
    "phone": "0988624258",
    "phoneRaw": "0988624258",
    "phoneOther": "",
    "email": "micharlpalma@gmail.com",
    "parish": "MARIA AUXILIADORA N1",
    "barrio": "MARIA AUXILIADORA N1",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-257",
    "name": "Palma Muentes Rihanna Victoria",
    "phone": "0996585060",
    "phoneRaw": "0996585060",
    "phoneOther": "",
    "email": "andreamm3749@hotmail.com",
    "parish": "BARRIO 2 DE AGOSTO PARTE ALTA",
    "barrio": "BARRIO 2 DE AGOSTO PARTE ALTA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-258",
    "name": "Perero Illescas Katherin Renata",
    "phone": "0961434156",
    "phoneRaw": "0961434156",
    "phoneOther": "",
    "email": "jose.jvpm67@gmail.com",
    "parish": "SI VIVIENDA",
    "barrio": "SI VIVIENDA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-259",
    "name": "Reyes Barcia Evelyn Desire",
    "phone": "0979454148",
    "phoneRaw": "0979454148",
    "phoneOther": "",
    "email": "barciap58@gmail.com",
    "parish": "BARRIO BELLAVISTA 1 CASA COLOR VERDE ALADO DE DEPOSITO DE MADERA FRENTE A LA TORRE ELECTRICA",
    "barrio": "BARRIO BELLAVISTA 1 CASA COLOR VERDE ALADO DE DEPOSITO DE MADERA FRENTE A LA TORRE ELECTRICA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-260",
    "name": "Romero Velez Michelle Monserrate",
    "phone": "0983754391",
    "phoneRaw": "0983754391",
    "phoneOther": "",
    "email": "mishelromero541@gmail.com",
    "parish": "SAN AGUSTIN",
    "barrio": "SAN AGUSTIN",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-261",
    "name": "Santana Pin Daisy Malena",
    "phone": "0968868359",
    "phoneRaw": "0968868359",
    "phoneOther": "",
    "email": "malenasantana629@gmail.com",
    "parish": "CALLE 12 AV. 43",
    "barrio": "CALLE 12 AV. 43",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-262",
    "name": "Valencia Avila Juan Kendry",
    "phone": "0983168696",
    "phoneRaw": "0983168696",
    "phoneOther": "",
    "email": "s2v2vale@gmail.com",
    "parish": "BARRIO SANTA MARTHA CALLE 8 AVENIDA 34",
    "barrio": "BARRIO SANTA MARTHA CALLE 8 AVENIDA 34",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-263",
    "name": "Velarde Luque Mateo Leonardo",
    "phone": "0987778804",
    "phoneRaw": "0987778804",
    "phoneOther": "",
    "email": "celialuque78@gmail.com",
    "parish": "URB. CIELITO LINDO MZ A9 VILLA 18",
    "barrio": "URB. CIELITO LINDO MZ A9 VILLA 18",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-264",
    "name": "Vera Cedeño Dereck Rafael",
    "phone": "0993773799",
    "phoneRaw": "0993773799",
    "phoneOther": "",
    "email": "vanessa26041990@live.com",
    "parish": "CIUDADELA COSTA AZUL",
    "barrio": "CIUDADELA COSTA AZUL",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-265",
    "name": "Vite Pacheco Isis Xiomara",
    "phone": "0939636290",
    "phoneRaw": "0939636290",
    "phoneOther": "",
    "email": "erikapacheco539@gmail.com",
    "parish": "CALLE117 AV106 BARRIO EL PARAÍSO",
    "barrio": "CALLE117 AV106 BARRIO EL PARAÍSO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-266",
    "name": "Yosa Parraga Luis Daniel",
    "phone": "0939996631",
    "phoneRaw": "0939996631",
    "phoneOther": "",
    "email": "nemisi1994parraga@gmail.com",
    "parish": "CUBA",
    "barrio": "CUBA",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-267",
    "name": "Zambrano Zambrano Gislayne Daniela",
    "phone": "0968147922",
    "phoneRaw": "0968147922",
    "phoneOther": "",
    "email": "gisselazambranovillamar@gmail.com",
    "parish": "CIUDADELA 20 DE MAYO",
    "barrio": "CIUDADELA 20 DE MAYO",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-268",
    "name": "Zamora Loor Mathius Alexander",
    "phone": "0959031918",
    "phoneRaw": "0959031918",
    "phoneOther": "",
    "email": "zamoramathius619@gmail.com",
    "parish": "CALLE 326 AV 223",
    "barrio": "CALLE 326 AV 223",
    "canton": "Manta",
    "provincia": "Manabí",
    "location": "Manta · Manabí",
    "courseCode": "C13",
    "courseName": "Generación De Ideas De Negocio Para Estudiantes De Bachillerato",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Manta",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-269",
    "name": "Bravo Carreño Lady Mariela",
    "phone": "0993860021",
    "phoneRaw": "0993860021",
    "phoneOther": "",
    "email": "ladymariela98@gmail.com",
    "parish": "HIGUERON PICOAZÁ",
    "barrio": "HIGUERON PICOAZÁ",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-270",
    "name": "Rivadeneira Bravo Gerald Daniel",
    "phone": "0979269863",
    "phoneRaw": "0979269863",
    "phoneOther": "",
    "email": "geraldriveadeneira6@gmail.com",
    "parish": "HIGUERON PICOAZÁ",
    "barrio": "HIGUERON PICOAZÁ",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-271",
    "name": "Romero Macias Jenny Marilu",
    "phone": "0967599363",
    "phoneRaw": "0967599363",
    "phoneOther": "",
    "email": "david_lmz@live.com",
    "parish": "EL FLORON",
    "barrio": "EL FLORON",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-272",
    "name": "Palma Arteaga Freddy Josue",
    "phone": "0990116092",
    "phoneRaw": "0990116092",
    "phoneOther": "",
    "email": "",
    "parish": "AV. AMERICA",
    "barrio": "AV. AMERICA",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-273",
    "name": "Cedeño Tejena Michael Jeral",
    "phone": "0981291087",
    "phoneRaw": "0981291087",
    "phoneOther": "",
    "email": "yennytejena831@gmail.com",
    "parish": "EL COMPLEJO DE PICOAZÁ",
    "barrio": "EL COMPLEJO DE PICOAZÁ",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-274",
    "name": "Fidelibus Ordaz Maired Susana",
    "phone": "0984893683",
    "phoneRaw": "0984893683",
    "phoneOther": "",
    "email": "mfidelibusardaz@gmail.com",
    "parish": "CALLE ESPEJO",
    "barrio": "CALLE ESPEJO",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-275",
    "name": "Quiroz Bone Anderson Jose",
    "phone": "0992893260",
    "phoneRaw": "0992893260",
    "phoneOther": "",
    "email": "lenchoquiroz1992@hotmail.com",
    "parish": "CALLE 26 DE SEPTIEMBRE",
    "barrio": "CALLE 26 DE SEPTIEMBRE",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-276",
    "name": "Gomez Intriago Andy Ivan",
    "phone": "0964033130",
    "phoneRaw": "0964033130",
    "phoneOther": "",
    "email": "andygomez1301@gmail.com",
    "parish": "CDLA. CEVALLOS",
    "barrio": "CDLA. CEVALLOS",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-277",
    "name": "Cedeño Garcia Anthony Javier",
    "phone": "0979065517",
    "phoneRaw": "0979065517",
    "phoneOther": "",
    "email": "anthony.xve17@gmail.com",
    "parish": "CHEGUEVARA",
    "barrio": "CHEGUEVARA",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-278",
    "name": "Cedeño Zambrano Cristhian David",
    "phone": "0998905071",
    "phoneRaw": "0998905071",
    "phoneOther": "",
    "email": "",
    "parish": "AV. GUAYAQUIL",
    "barrio": "AV. GUAYAQUIL",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-279",
    "name": "Garzon Garcia Isaac Eduardo",
    "phone": "0994933369",
    "phoneRaw": "0994933369",
    "phoneOther": "",
    "email": "isaacgar350@gmail.com",
    "parish": "AV. DEL EJERCITO",
    "barrio": "AV. DEL EJERCITO",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-280",
    "name": "Moreira Pilay Jordan Mauricio",
    "phone": "0980279964",
    "phoneRaw": "0980279964",
    "phoneOther": "",
    "email": "mpjordan125@gmail.com",
    "parish": "EL FLORON",
    "barrio": "EL FLORON",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-281",
    "name": "Cevallos Ponce Juan Carlos",
    "phone": "0991016534",
    "phoneRaw": "0991016534",
    "phoneOther": "",
    "email": "ma-celestep@hotmail.com",
    "parish": "AV. MANABÍ ENTRE QUITO Y RAMOS Y DUARTE",
    "barrio": "AV. MANABÍ ENTRE QUITO Y RAMOS Y DUARTE",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-282",
    "name": "Guaranda Meza Frixon Jahir",
    "phone": "0995687839",
    "phoneRaw": "0995687839",
    "phoneOther": "",
    "email": "frixonguaranda01@gmail.com",
    "parish": "FLORON 5",
    "barrio": "FLORON 5",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-283",
    "name": "Indarte Pico Maykel Geovanny",
    "phone": "0962581929",
    "phoneRaw": "0962581929",
    "phoneOther": "",
    "email": "maykeindarte639@gmail.com",
    "parish": "26 DE septiembre",
    "barrio": "26 DE septiembre",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C14",
    "courseName": "Barbería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-284",
    "name": "Alava Centeno Madeline Anahi",
    "phone": "0981107795",
    "phoneRaw": "0981107795",
    "phoneOther": "",
    "email": "mafercb03@outlook.es",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-285",
    "name": "Palma Tejena Denisse Lilibeth",
    "phone": "0992257571",
    "phoneRaw": "0992257571",
    "phoneOther": "",
    "email": "denispalma97@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-286",
    "name": "Ojeda Lluz Viviana",
    "phone": "0984853698",
    "phoneRaw": "0984853698",
    "phoneOther": "",
    "email": "ojedaluzviviana@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-287",
    "name": "Vera Puetate Yamileth Anahi",
    "phone": "0993370121",
    "phoneRaw": "0993370121",
    "phoneOther": "",
    "email": "yvera7123@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-288",
    "name": "Palacios Gutierrez Scarleth Julady",
    "phone": "0939430068",
    "phoneRaw": "0939430068",
    "phoneOther": "",
    "email": "palaciosgutierrezscarlethjulei@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-289",
    "name": "Cedeño Zambrano Angelica Maria",
    "phone": "0964146093",
    "phoneRaw": "0964146093",
    "phoneOther": "",
    "email": "amczmaria2000@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-290",
    "name": "Cusme Aguilar Jennifer Maritza",
    "phone": "0993859775",
    "phoneRaw": "0993859775",
    "phoneOther": "",
    "email": "jennifermaritzacusmeaguilar@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-291",
    "name": "Parrales Cusme Jennifer Michelle",
    "phone": "0993859775",
    "phoneRaw": "0993859775",
    "phoneOther": "",
    "email": "jennifermaritzacusmeaguilar@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-292",
    "name": "Reinoza Ochoa Vanessa Paola",
    "phone": "0994657719",
    "phoneRaw": "0994657719",
    "phoneOther": "",
    "email": "vanellyochoa55@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-293",
    "name": "Flores Briones Gema Jordana",
    "phone": "0939178905",
    "phoneRaw": "0939178905",
    "phoneOther": "",
    "email": "",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-294",
    "name": "Alava Mendoza Sarahi Lisseth",
    "phone": "0986777419",
    "phoneRaw": "0986777419",
    "phoneOther": "",
    "email": "",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-295",
    "name": "Alvarez Garcia Isavo Vimoré",
    "phone": "0995927353",
    "phoneRaw": "0995927353",
    "phoneOther": "",
    "email": "alvarez15avo@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-296",
    "name": "Garcia Castro Leltty Janneth",
    "phone": "0995927353",
    "phoneRaw": "0995927353",
    "phoneOther": "",
    "email": "castrojaneth08@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-297",
    "name": "Palma Garcia Jessica Tatiana",
    "phone": "0986161779",
    "phoneRaw": "0986161779",
    "phoneOther": "",
    "email": "ladytatianagarcialoor1982@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-298",
    "name": "Garcia Olea Lady Tatiana",
    "phone": "0986161779",
    "phoneRaw": "0986161779",
    "phoneOther": "",
    "email": "ladytatianagarcialoor1982@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-299",
    "name": "Tuarez Jaspe Yaritza Katerine",
    "phone": "0984813977",
    "phoneRaw": "0984813977",
    "phoneOther": "",
    "email": "yaritzatuarez43@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-300",
    "name": "Intriago Bermello Melanie Damarys",
    "phone": "0979761016",
    "phoneRaw": "0979761016",
    "phoneOther": "",
    "email": "intriagomelanie111@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C15",
    "courseName": "Manicura Y Pedicura",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-301",
    "name": "Pinoargote Alcivar Lourdes Lorena",
    "phone": "0979570672",
    "phoneRaw": "0979570672",
    "phoneOther": "",
    "email": "lorenapino83@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-302",
    "name": "Ponce Rivas Maritza Elizabeth",
    "phone": "0994082764",
    "phoneRaw": "0994082764",
    "phoneOther": "",
    "email": "leonelponce501@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-303",
    "name": "Rivadeneira Bravo Daniela Aiskel",
    "phone": "0993860021",
    "phoneRaw": "0993860021",
    "phoneOther": "",
    "email": "ladymariela98@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-304",
    "name": "Alvarez Mendoza Cindy Denisse",
    "phone": "0967693626",
    "phoneRaw": "0967693626",
    "phoneOther": "",
    "email": "denissealvarez0399@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-305",
    "name": "Franco Mendoza Caleb Jeffren",
    "phone": "0985250380",
    "phoneRaw": "0985250380",
    "phoneOther": "",
    "email": "seniamendoza@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-306",
    "name": "Mendoza Parraga Karla Mariela",
    "phone": "0963957646",
    "phoneRaw": "0963957646",
    "phoneOther": "",
    "email": "princesagridulce@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-307",
    "name": "Granado Granado Elys Magalys",
    "phone": "0963243394",
    "phoneRaw": "0963243394",
    "phoneOther": "",
    "email": "elysgranado53@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-308",
    "name": "Donoso Navarrete Karen Rafaela",
    "phone": "0998260775",
    "phoneRaw": "0998260775",
    "phoneOther": "",
    "email": "kanavao@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-309",
    "name": "Donoso Navarrete Daniela Alejandra",
    "phone": "0998260775",
    "phoneRaw": "0998260775",
    "phoneOther": "",
    "email": "kanavao@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-310",
    "name": "Medranda Candado Tabata Julieth",
    "phone": "0960122030",
    "phoneRaw": "0960122030",
    "phoneOther": "",
    "email": "juliethmedranda08@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-311",
    "name": "Zambrano Robalino Nelly Aracely",
    "phone": "0962755447",
    "phoneRaw": "0962755447",
    "phoneOther": "",
    "email": "nellyza1956@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-312",
    "name": "Cedeño Cedeño Fanny Zita",
    "phone": "0959174764",
    "phoneRaw": "0959174764",
    "phoneOther": "",
    "email": "fannycitacedeñocedeño@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-313",
    "name": "Chica Cortez Axel Matheo",
    "phone": "0967699045",
    "phoneRaw": "0967699045",
    "phoneOther": "",
    "email": "mchicacortez@yahoo.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-314",
    "name": "Ochoa Paredes Vanelly Coromoto",
    "phone": "0988399148",
    "phoneRaw": "0988399148",
    "phoneOther": "",
    "email": "vanellyochoa55@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-315",
    "name": "Donoso Candado Maria Gabriela",
    "phone": "0994350079",
    "phoneRaw": "0994350079",
    "phoneOther": "",
    "email": "verocandado@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-316",
    "name": "Ponce Ponce Veata Lucrecia",
    "phone": "0979839188",
    "phoneRaw": "0979839188",
    "phoneOther": "",
    "email": "luky-ponce@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-317",
    "name": "Medranda Candado Brisa Nahomy",
    "phone": "0992651173",
    "phoneRaw": "0992651173",
    "phoneOther": "",
    "email": "brisamedranda2005@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-318",
    "name": "Chinga Parrales Carlos Giusseppe",
    "phone": "0981715932",
    "phoneRaw": "0981715932",
    "phoneOther": "",
    "email": "parralesinkelly@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C16",
    "courseName": "Panadería",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-319",
    "name": "Macias Sanchez Cristhian Jesus",
    "phone": "0960035815",
    "phoneRaw": "0960035815",
    "phoneOther": "",
    "email": "cristhianmacias155@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-320",
    "name": "Sanchez Garcia Gema Vanessa",
    "phone": "0981194736",
    "phoneRaw": "0981194736",
    "phoneOther": "",
    "email": "gemysanchez14@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-321",
    "name": "Sanchez Garcia Gema Genesis",
    "phone": "0963244152",
    "phoneRaw": "0963244152",
    "phoneOther": "",
    "email": "genesis14sanchez@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-322",
    "name": "Parraga Sacon Jairo Daniel",
    "phone": "0968830745",
    "phoneRaw": "0968830745",
    "phoneOther": "",
    "email": "jairoparraga12@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-323",
    "name": "Moreira De La Cruz Moises Elias",
    "phone": "0961203783",
    "phoneRaw": "0961203783",
    "phoneOther": "",
    "email": "moisesmoreira77@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-324",
    "name": "Moreira De La Cruz Abrahan Enoc",
    "phone": "0969937499",
    "phoneRaw": "0969937499",
    "phoneOther": "",
    "email": "abrahammoreira612@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-325",
    "name": "Menendez Macias Angela Alejandrina",
    "phone": "0979245121",
    "phoneRaw": "0979245121",
    "phoneOther": "",
    "email": "angelitaamm@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-326",
    "name": "Zambrano Velez Mathias Joseph",
    "phone": "0993958102",
    "phoneRaw": "0993958102",
    "phoneOther": "",
    "email": "sinthiavelezchavarria@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-327",
    "name": "Oleas Cedeño Pierre Joao",
    "phone": "0987633800",
    "phoneRaw": "0987633800",
    "phoneOther": "",
    "email": "oleaspierre170@gmaill.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-328",
    "name": "Oleas Cevallos Jimmy Jonathan",
    "phone": "0996834358",
    "phoneRaw": "0996834358",
    "phoneOther": "",
    "email": "jiolce88@gamail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-329",
    "name": "Moreira Bravo Wendy Liceth",
    "phone": "0997615807",
    "phoneRaw": "0997615807",
    "phoneOther": "",
    "email": "moreirawendy136@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-330",
    "name": "Moreira Bravo Alisson Nayreth",
    "phone": "0991147832",
    "phoneRaw": "0991147832",
    "phoneOther": "",
    "email": "moreirabravoalisson@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-331",
    "name": "Briones Vergara Jorge Arturo",
    "phone": "0998258630",
    "phoneRaw": "0998258630",
    "phoneOther": "",
    "email": "leidyvergara82@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-332",
    "name": "Parrales Intriago Kelly Gisella",
    "phone": "0981715932",
    "phoneRaw": "0981715932",
    "phoneOther": "",
    "email": "parralesinkelly@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-333",
    "name": "Alava Loor Alan Snaider",
    "phone": "0961866372",
    "phoneRaw": "0961866372",
    "phoneOther": "",
    "email": "asnaider268@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-334",
    "name": "Loor Delgado Anthony Jonier",
    "phone": "0981038563",
    "phoneRaw": "0981038563",
    "phoneOther": "",
    "email": "digna0903delgado@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C17",
    "courseName": "Barbería Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-335",
    "name": "De La Cruz Castro Linfida Efigenia",
    "phone": "0997846719",
    "phoneRaw": "0997846719",
    "phoneOther": "",
    "email": "linfidadelacruz70@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-336",
    "name": "Rojas Urdinola Armida",
    "phone": "0987010258",
    "phoneRaw": "0987010258",
    "phoneOther": "",
    "email": "armidarojas1903@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-337",
    "name": "Garcia Mato Rosa Orfelina",
    "phone": "0990740240",
    "phoneRaw": "0990740240",
    "phoneOther": "",
    "email": "",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-338",
    "name": "Casanova Monroy Eva Maritza Alexandra",
    "phone": "0984346429",
    "phoneRaw": "0984346429",
    "phoneOther": "",
    "email": "evamaritza2011@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-339",
    "name": "Proaño Laz Neida Transita",
    "phone": "0981979240",
    "phoneRaw": "0981979240",
    "phoneOther": "",
    "email": "neida196109@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-340",
    "name": "Salvatierra Murillo Monserrate Cecilia",
    "phone": "0986450758",
    "phoneRaw": "0986450758",
    "phoneOther": "",
    "email": "ceciliasalvatierra36@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-341",
    "name": "Carrillo Anchundia Yolanda Marlene",
    "phone": "0963221429",
    "phoneRaw": "0963221429",
    "phoneOther": "",
    "email": "yolmar20.ca@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-342",
    "name": "Ramirez Torrealba Mercedes Chiquinquira",
    "phone": "0980238330",
    "phoneRaw": "0980238330",
    "phoneOther": "",
    "email": "portoviejo112@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-343",
    "name": "Carvajal Ramirez Sofia Alexandra",
    "phone": "0997516808",
    "phoneRaw": "0997516808",
    "phoneOther": "",
    "email": "sofiacarvajal2503@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-344",
    "name": "Candado Gilces Veronica Alexandra",
    "phone": "0994350079",
    "phoneRaw": "0994350079",
    "phoneOther": "",
    "email": "vero_candado@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-345",
    "name": "Velez Chavez Didima Esperanza",
    "phone": "0983810733",
    "phoneRaw": "0983810733",
    "phoneOther": "",
    "email": "didivelez@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-346",
    "name": "Alava Centeno Amy Ivanna",
    "phone": "0981107795",
    "phoneRaw": "0981107795",
    "phoneOther": "",
    "email": "alavacentenoamyivanna@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-347",
    "name": "Aguilera Granado Andrea Del Jesus",
    "phone": "0964077793",
    "phoneRaw": "0964077793",
    "phoneOther": "",
    "email": "andrea.aguilera0201@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C18",
    "courseName": "Corte Y Confección Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-348",
    "name": "Garcia Chiquito Maria Fernanda",
    "phone": "0998037353",
    "phoneRaw": "0998037353",
    "phoneOther": "",
    "email": "garciachiquitom70@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-349",
    "name": "Alcivar Roldan Eliana Yessenia",
    "phone": "0991468289",
    "phoneRaw": "0991468289",
    "phoneOther": "",
    "email": "elianaalcivar123456@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-350",
    "name": "Vera Celorio Monica Julexy",
    "phone": "0984784136",
    "phoneRaw": "0984784136",
    "phoneOther": "",
    "email": "julexyvc2004@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-351",
    "name": "Vera Celorio Kerly Veronica",
    "phone": "0967285443",
    "phoneRaw": "0967285443",
    "phoneOther": "",
    "email": "kerlyvera55@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-352",
    "name": "Cevallos Celorio Emilia Natalia",
    "phone": "0960007951",
    "phoneRaw": "0960007951",
    "phoneOther": "",
    "email": "emicevallos220@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-353",
    "name": "Garcia Quiroz Stephany Pierina",
    "phone": "0984082594",
    "phoneRaw": "0984082594",
    "phoneOther": "",
    "email": "stephany.gar44@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-354",
    "name": "Castro Salvatierra Marbelly Elizabeth",
    "phone": "0980117464",
    "phoneRaw": "0980117464",
    "phoneOther": "",
    "email": "marbellycastro4@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-355",
    "name": "Sanchez Castro Kristhy Jaslene",
    "phone": "0980117464",
    "phoneRaw": "0980117464",
    "phoneOther": "",
    "email": "",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-356",
    "name": "Moreira Bravo Melanie Beatriz",
    "phone": "0996597576",
    "phoneRaw": "0996597576",
    "phoneOther": "",
    "email": "melaniemoreirabravo@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-357",
    "name": "Alcivar Morrillo Gema Elizabeth",
    "phone": "0960606140",
    "phoneRaw": "0960606140",
    "phoneOther": "",
    "email": "alcivarge@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-358",
    "name": "Mendoza Piguave Domenica Ailyn",
    "phone": "0994512414",
    "phoneRaw": "0994512414",
    "phoneOther": "",
    "email": "david_lmz@live.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-359",
    "name": "Piguave Garcia Raquel Alexandra",
    "phone": "0991807200",
    "phoneRaw": "0991807200",
    "phoneOther": "",
    "email": "rachel_dome@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-360",
    "name": "Liendo Villarreal Rudimar Aislin",
    "phone": "0967608098",
    "phoneRaw": "0967608098",
    "phoneOther": "",
    "email": "rudimarliendo16@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C19",
    "courseName": "Manicura Y Pedicura Básico",
    "courseStartDate": "01/01/2025",
    "courseEndDate": "31/01/2025",
    "courseDates": "01/01/2025 al 31/01/2025",
    "courseRecency": "31/01/2025",
    "organization": "Fe y Alegría - CECAL Portoviejo",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-361",
    "name": "Zulema Anhy Nazareno Pai",
    "phone": "0997271699",
    "phoneRaw": "0997271699",
    "phoneOther": "",
    "email": "anguloninfa0@gmail.com",
    "parish": "9 de Octubre",
    "barrio": "9 de Octubre",
    "canton": "San Lorenzo",
    "provincia": "Esmeraldas",
    "location": "San Lorenzo · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-362",
    "name": "Gloria Dexxeli Márquez Vite",
    "phone": "0979421476",
    "phoneRaw": "0979421476",
    "phoneOther": "",
    "email": "marquezgdexxel@gmail.com",
    "parish": "9 de Octubre",
    "barrio": "9 de Octubre",
    "canton": "San Lorenzo",
    "provincia": "Esmeraldas",
    "location": "San Lorenzo · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-363",
    "name": "María Herminsa Quintero Nazareno",
    "phone": "0986172044",
    "phoneRaw": "0986172044",
    "phoneOther": "",
    "email": "mq384924@gmail.com",
    "parish": "9 de Octubre",
    "barrio": "9 de Octubre",
    "canton": "San Lorenzo",
    "provincia": "Esmeraldas",
    "location": "San Lorenzo · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-364",
    "name": "Edis Marisa Micolta Medina",
    "phone": "0995001598",
    "phoneRaw": "0995001598",
    "phoneOther": "",
    "email": "edismicolta9@gmail.com",
    "parish": "9 de Octubre",
    "barrio": "9 de Octubre",
    "canton": "San Lorenzo",
    "provincia": "Esmeraldas",
    "location": "San Lorenzo · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-365",
    "name": "Edinson David Borja Quintero",
    "phone": "0986172044",
    "phoneRaw": "0986172044",
    "phoneOther": "",
    "email": "borjaquinteroe@gmail.com",
    "parish": "9 de Octubre",
    "barrio": "9 de Octubre",
    "canton": "San Lorenzo",
    "provincia": "Esmeraldas",
    "location": "San Lorenzo · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-366",
    "name": "Paulet Juslany Camargo Arroyo",
    "phone": "0995977256",
    "phoneRaw": "0995977256",
    "phoneOther": "",
    "email": "susanarroyo481@gmail.com",
    "parish": "9 de Octubre",
    "barrio": "9 de Octubre",
    "canton": "San Lorenzo",
    "provincia": "Esmeraldas",
    "location": "San Lorenzo · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-367",
    "name": "Paulette Yexibel Mercado Quiñonez",
    "phone": "0988250963",
    "phoneRaw": "0988250963",
    "phoneOther": "",
    "email": "Surellaquinonez@gmail.com",
    "parish": "9 de Octubre",
    "barrio": "9 de Octubre",
    "canton": "San Lorenzo",
    "provincia": "Esmeraldas",
    "location": "San Lorenzo · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-368",
    "name": "Juliana Nohemi Caicedo Canga",
    "phone": "0988250963",
    "phoneRaw": "0988250963",
    "phoneOther": "",
    "email": "Julianacaicedo553@gmail.com",
    "parish": "9 de Octubre",
    "barrio": "9 de Octubre",
    "canton": "San Lorenzo",
    "provincia": "Esmeraldas",
    "location": "San Lorenzo · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-369",
    "name": "Lidia Cleotilde Uyunkar Wisun",
    "phone": "0991195784",
    "phoneRaw": "0991195784",
    "phoneOther": "",
    "email": "lidiauyunkar518@gmail.com",
    "parish": "9 de Octubre",
    "barrio": "9 de Octubre",
    "canton": "San Lorenzo",
    "provincia": "Esmeraldas",
    "location": "San Lorenzo · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-370",
    "name": "Jhoao Jair Mina Quintero",
    "phone": "0981158654",
    "phoneRaw": "0981158654",
    "phoneOther": "",
    "email": "",
    "parish": "9 de Octubre",
    "barrio": "9 de Octubre",
    "canton": "San Lorenzo",
    "provincia": "Esmeraldas",
    "location": "San Lorenzo · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-371",
    "name": "Sumner Quiñonez Bone",
    "phone": "0993428611",
    "phoneRaw": "0993428611",
    "phoneOther": "",
    "email": "",
    "parish": "La Cayapa",
    "barrio": "La Cayapa",
    "canton": "Eloy Alfaro",
    "provincia": "Esmeraldas",
    "location": "Eloy Alfaro · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-372",
    "name": "Mirna Melis Mosquera Quiñonez",
    "phone": "0981790263",
    "phoneRaw": "0981790263",
    "phoneOther": "",
    "email": "",
    "parish": "La Cayapa",
    "barrio": "La Cayapa",
    "canton": "Eloy Alfaro",
    "provincia": "Esmeraldas",
    "location": "Eloy Alfaro · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-373",
    "name": "Mirtha Mosquera Quiñonez",
    "phone": "0939505639",
    "phoneRaw": "0939505639",
    "phoneOther": "",
    "email": "",
    "parish": "La Cayapa",
    "barrio": "La Cayapa",
    "canton": "Eloy Alfaro",
    "provincia": "Esmeraldas",
    "location": "Eloy Alfaro · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-374",
    "name": "Maury Ayovi Nazareno",
    "phone": "0999167810",
    "phoneRaw": "0999167810",
    "phoneOther": "",
    "email": "",
    "parish": "La Cayapa",
    "barrio": "La Cayapa",
    "canton": "Eloy Alfaro",
    "provincia": "Esmeraldas",
    "location": "Eloy Alfaro · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-375",
    "name": "Isbaña Borja Capena",
    "phone": "0968872017",
    "phoneRaw": "0968872017",
    "phoneOther": "",
    "email": "",
    "parish": "La Cayapa",
    "barrio": "La Cayapa",
    "canton": "Eloy Alfaro",
    "provincia": "Esmeraldas",
    "location": "Eloy Alfaro · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-376",
    "name": "Presley Borja Capena",
    "phone": "0997745228",
    "phoneRaw": "0997745228",
    "phoneOther": "",
    "email": "",
    "parish": "La Cayapa",
    "barrio": "La Cayapa",
    "canton": "Eloy Alfaro",
    "provincia": "Esmeraldas",
    "location": "Eloy Alfaro · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-377",
    "name": "Ahilyn Eliana Mosquera Ayovi",
    "phone": "0969715481",
    "phoneRaw": "0969715481",
    "phoneOther": "",
    "email": "",
    "parish": "La Cayapa",
    "barrio": "La Cayapa",
    "canton": "Eloy Alfaro",
    "provincia": "Esmeraldas",
    "location": "Eloy Alfaro · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-378",
    "name": "Victor Alfonso Capena Gonzales",
    "phone": "0959794208",
    "phoneRaw": "0959794208",
    "phoneOther": "",
    "email": "",
    "parish": "La Cayapa",
    "barrio": "La Cayapa",
    "canton": "Eloy Alfaro",
    "provincia": "Esmeraldas",
    "location": "Eloy Alfaro · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-379",
    "name": "Ancelmo Cimarton Tapuyo",
    "phone": "0989346860",
    "phoneRaw": "0989346860",
    "phoneOther": "",
    "email": "",
    "parish": "La Cayapa",
    "barrio": "La Cayapa",
    "canton": "Eloy Alfaro",
    "provincia": "Esmeraldas",
    "location": "Eloy Alfaro · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-380",
    "name": "Mairicio San Nicola",
    "phone": "0979361598",
    "phoneRaw": "0979361598",
    "phoneOther": "",
    "email": "",
    "parish": "La Cayapa",
    "barrio": "La Cayapa",
    "canton": "Eloy Alfaro",
    "provincia": "Esmeraldas",
    "location": "Eloy Alfaro · Esmeraldas",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-381",
    "name": "Mayte Campo",
    "phone": "0987723590",
    "phoneRaw": "0987723590",
    "phoneOther": "",
    "email": "",
    "parish": "Agato",
    "barrio": "Agato",
    "canton": "Otavalo",
    "provincia": "Imbabura",
    "location": "Otavalo · Imbabura",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-382",
    "name": "Jeferson Perugachi Ulcuango",
    "phone": "0985426181",
    "phoneRaw": "0985426181",
    "phoneOther": "",
    "email": "",
    "parish": "Agato",
    "barrio": "Agato",
    "canton": "Otavalo",
    "provincia": "Imbabura",
    "location": "Otavalo · Imbabura",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-383",
    "name": "Dilan Ajala Vasquez",
    "phone": "0987026639",
    "phoneRaw": "0987026639",
    "phoneOther": "",
    "email": "",
    "parish": "Agato",
    "barrio": "Agato",
    "canton": "Otavalo",
    "provincia": "Imbabura",
    "location": "Otavalo · Imbabura",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-384",
    "name": "Leon Yachak Cabascango Otavalo",
    "phone": "0959417419",
    "phoneRaw": "0959417419",
    "phoneOther": "",
    "email": "",
    "parish": "Agato",
    "barrio": "Agato",
    "canton": "Otavalo",
    "provincia": "Imbabura",
    "location": "Otavalo · Imbabura",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-385",
    "name": "Elena Santillan",
    "phone": "0993753333",
    "phoneRaw": "0993753333",
    "phoneOther": "",
    "email": "",
    "parish": "Agato",
    "barrio": "Agato",
    "canton": "Otavalo",
    "provincia": "Imbabura",
    "location": "Otavalo · Imbabura",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-386",
    "name": "José Mesias Farinango Quilo",
    "phone": "0984962148",
    "phoneRaw": "0984962148",
    "phoneOther": "",
    "email": "",
    "parish": "Agato",
    "barrio": "Agato",
    "canton": "Otavalo",
    "provincia": "Imbabura",
    "location": "Otavalo · Imbabura",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-387",
    "name": "Ainy Citalli Pineda Ipiales",
    "phone": "0968960078",
    "phoneRaw": "0968960078",
    "phoneOther": "",
    "email": "",
    "parish": "Agato",
    "barrio": "Agato",
    "canton": "Otavalo",
    "provincia": "Imbabura",
    "location": "Otavalo · Imbabura",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-388",
    "name": "Eimy Geanella Posligua Valencia",
    "phone": "0961357722",
    "phoneRaw": "0961357722",
    "phoneOther": "",
    "email": "",
    "parish": "El Milagro",
    "barrio": "El Milagro",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-389",
    "name": "Ana Guadalupe Castro Ortega",
    "phone": "0994802354",
    "phoneRaw": "0994802354",
    "phoneOther": "",
    "email": "castro98guadalupe@gmail.com",
    "parish": "El Milagro",
    "barrio": "El Milagro",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-390",
    "name": "Peterson Jesus Posligua Valencia",
    "phone": "0960726436",
    "phoneRaw": "0960726436",
    "phoneOther": "",
    "email": "",
    "parish": "El Milagro",
    "barrio": "El Milagro",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-391",
    "name": "Jose Alberto Quiñonez Solis",
    "phone": "0989182523",
    "phoneRaw": "0989182523",
    "phoneOther": "",
    "email": "",
    "parish": "El Milagro",
    "barrio": "El Milagro",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-392",
    "name": "Virginia Isabel Moreira Solorzano",
    "phone": "0960608527",
    "phoneRaw": "0960608527",
    "phoneOther": "",
    "email": "",
    "parish": "El Milagro",
    "barrio": "El Milagro",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-393",
    "name": "Hugo Xavier Molina Zambrano",
    "phone": "0991870532",
    "phoneRaw": "0991870532",
    "phoneOther": "",
    "email": "",
    "parish": "El Milagro",
    "barrio": "El Milagro",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-394",
    "name": "Kimberly Gislaine Villota Mera",
    "phone": "0997796006",
    "phoneRaw": "0997796006",
    "phoneOther": "",
    "email": "",
    "parish": "El Milagro",
    "barrio": "El Milagro",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-395",
    "name": "Marilyn Mercedes Velasquez Bravo",
    "phone": "0979223863",
    "phoneRaw": "0979223863",
    "phoneOther": "",
    "email": "",
    "parish": "El Milagro",
    "barrio": "El Milagro",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-396",
    "name": "Heidy Analia Zambrano Solorzano",
    "phone": "0980057874",
    "phoneRaw": "0980057874",
    "phoneOther": "",
    "email": "",
    "parish": "El Milagro",
    "barrio": "El Milagro",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-397",
    "name": "Nohelia Anahis Zambrano Solorzano",
    "phone": "0986226498",
    "phoneRaw": "0986226498",
    "phoneOther": "",
    "email": "",
    "parish": "El Milagro",
    "barrio": "El Milagro",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-398",
    "name": "Zoila Ramona Toro Cedeño",
    "phone": "0980809971",
    "phoneRaw": "0980809971",
    "phoneOther": "",
    "email": "danielasantana2012@hotmail.com",
    "parish": "20 de Julio",
    "barrio": "20 de Julio",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-399",
    "name": "Yuri Daniel Santana Mero",
    "phone": "0989653903",
    "phoneRaw": "0989653903",
    "phoneOther": "",
    "email": "yusamer81@hotmail.com",
    "parish": "20 de Julio",
    "barrio": "20 de Julio",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-400",
    "name": "María Fernanda García Chávez",
    "phone": "0992379214",
    "phoneRaw": "0992379214",
    "phoneOther": "",
    "email": "fergacia_81@live.com",
    "parish": "20 de Julio",
    "barrio": "20 de Julio",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-401",
    "name": "Jordi Dayan Toro Zambrano",
    "phone": "0963018315",
    "phoneRaw": "0963018315",
    "phoneOther": "",
    "email": "jordidayantorozambrano@gmail.com",
    "parish": "20 de Julio",
    "barrio": "20 de Julio",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-402",
    "name": "Walter Albero Garcia Rendon",
    "phone": "0999541125",
    "phoneRaw": "0999541125",
    "phoneOther": "",
    "email": "robitogr1987@gmail.com",
    "parish": "20 de Julio",
    "barrio": "20 de Julio",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-403",
    "name": "Luis Steven Zambrano Ibarra",
    "phone": "0982227884",
    "phoneRaw": "0982227884",
    "phoneOther": "",
    "email": "iz282950@gmail.com",
    "parish": "20 de Julio",
    "barrio": "20 de Julio",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-404",
    "name": "Zaira Zoe Velasquez Espinoza",
    "phone": "0980833130",
    "phoneRaw": "0980833130",
    "phoneOther": "",
    "email": "zaira.zve28@gmail.com",
    "parish": "20 de Julio",
    "barrio": "20 de Julio",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-405",
    "name": "Ingrid Leonella Robles Mera",
    "phone": "0990135384",
    "phoneRaw": "0990135384",
    "phoneOther": "",
    "email": "ingridrobles2005@gmail.com",
    "parish": "20 de Julio",
    "barrio": "20 de Julio",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-406",
    "name": "Efren Alberto Gorozabel Intriago",
    "phone": "0967753494",
    "phoneRaw": "0967753494",
    "phoneOther": "",
    "email": "alberto gorozabel28@gmail.com",
    "parish": "20 de Julio",
    "barrio": "20 de Julio",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-407",
    "name": "Jaritza Jamary Ponce Guaranda",
    "phone": "0982906131",
    "phoneRaw": "0982906131",
    "phoneOther": "",
    "email": "jaritzaponce2002gmail.com",
    "parish": "20 de Julio",
    "barrio": "20 de Julio",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C20",
    "courseName": "Escuela de Liderazgo",
    "courseStartDate": "30/04/2025",
    "courseEndDate": "31/12/2025",
    "courseDates": "30/04/2025 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "Aldeas Infantiles SOS",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-408",
    "name": "Aura Benavides",
    "phone": "0958875647",
    "phoneRaw": "0958875647",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-409",
    "name": "Ana Paula Anrrango Díaz",
    "phone": "0981572435",
    "phoneRaw": "0981572435",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-410",
    "name": "Emilia Sarmiento",
    "phone": "0969893987",
    "phoneRaw": "0969893987",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-411",
    "name": "Lenin Adrián Anrrango Quilumba",
    "phone": "0988223552",
    "phoneRaw": "0988223552",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-412",
    "name": "Esperanza Maynaguez",
    "phone": "0989062525",
    "phoneRaw": "0989062525",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-413",
    "name": "Karla Lizbeth Anrrango Tulcán",
    "phone": "0991709097",
    "phoneRaw": "0991709097",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-414",
    "name": "Julia Sotaminga",
    "phone": "0995145055",
    "phoneRaw": "0995145055",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-415",
    "name": "Denis Andrés Arteaga Guamán",
    "phone": "0939666042",
    "phoneRaw": "0939666042",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-416",
    "name": "Laura Chávez",
    "phone": "0985556195",
    "phoneRaw": "0985556195",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-417",
    "name": "Oliver Paul Cadena Salas",
    "phone": "0958996702",
    "phoneRaw": "0958996702",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-418",
    "name": "Magdalena Bedón Ortiz",
    "phone": "0999087933",
    "phoneRaw": "0999087933",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-419",
    "name": "Roddy Alexander Cantincus Moreno",
    "phone": "0988039466",
    "phoneRaw": "0988039466",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-420",
    "name": "María Vásquez",
    "phone": "0993819723",
    "phoneRaw": "0993819723",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-421",
    "name": "Ronny Isaac Carvajal Quito",
    "phone": "0989833348",
    "phoneRaw": "0989833348",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-422",
    "name": "Miguel González",
    "phone": "0983261894",
    "phoneRaw": "0983261894",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-423",
    "name": "Alisson Mabel Cevallos Rivadeneira",
    "phone": "0985827436",
    "phoneRaw": "0985827436",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-424",
    "name": "Mishel Paucar Chango",
    "phone": "0992267183",
    "phoneRaw": "0992267183",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-425",
    "name": "Patricia Nahomy Colimba Tulcán",
    "phone": "0986353980",
    "phoneRaw": "0986353980",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-426",
    "name": "Patricia Chango",
    "phone": "0981251289",
    "phoneRaw": "0981251289",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-427",
    "name": "Dustin Damián Duchi Lobato",
    "phone": "0999831074",
    "phoneRaw": "0999831074",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-428",
    "name": "Rosa Guaman",
    "phone": "0968457022",
    "phoneRaw": "0968457022",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-429",
    "name": "Jhon Jairo Hernández Marcillo",
    "phone": "0992614466",
    "phoneRaw": "0992614466",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-430",
    "name": "Gloria Cadena",
    "phone": "0990274559",
    "phoneRaw": "0990274559",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-431",
    "name": "Leandro Leonel Imbacuan Ayala",
    "phone": "0981038961",
    "phoneRaw": "0981038961",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-432",
    "name": "Mélida Salcedo",
    "phone": "0995078822",
    "phoneRaw": "0995078822",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-433",
    "name": "Alexander Jhoel Ipiales Maldonado",
    "phone": "0993627500",
    "phoneRaw": "0993627500",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-434",
    "name": "Juan Galarza",
    "phone": "0998267416",
    "phoneRaw": "0998267416",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-435",
    "name": "Jordy Estalyn Luna Chuquin",
    "phone": "0998386847",
    "phoneRaw": "0998386847",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-436",
    "name": "Erick Ricardo Olmedo Chiluisa",
    "phone": "0990827011",
    "phoneRaw": "0990827011",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-437",
    "name": "Eloisa Isabel Valles",
    "phone": "0994155707",
    "phoneRaw": "0994155707",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-438",
    "name": "Jenely Xihomara Portilla Chalacan",
    "phone": "0995224958",
    "phoneRaw": "0995224958",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-439",
    "name": "Erick Fabián Suárez Guamán",
    "phone": "0997881409",
    "phoneRaw": "0997881409",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-440",
    "name": "Margarita Clerque",
    "phone": "0980961552",
    "phoneRaw": "0980961552",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-441",
    "name": "Leydi Micaela Tirira Rojas",
    "phone": "0979063984",
    "phoneRaw": "0979063984",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-442",
    "name": "Medardo Chitán",
    "phone": "0991224207",
    "phoneRaw": "0991224207",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-443",
    "name": "Marlon Andrés Yucato Cuascota",
    "phone": "0968786462",
    "phoneRaw": "0968786462",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-444",
    "name": "Fanny Solano",
    "phone": "0959961245",
    "phoneRaw": "0959961245",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-445",
    "name": "Lucía Zambrano",
    "phone": "0989112707",
    "phoneRaw": "0989112707",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-446",
    "name": "Laura Alvarez",
    "phone": "0969893987",
    "phoneRaw": "0969893987",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-447",
    "name": "Gricelda Loyo",
    "phone": "0991224207",
    "phoneRaw": "0991224207",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-448",
    "name": "Mercedes Cuaspud Játiva",
    "phone": "0981316771",
    "phoneRaw": "0981316771",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-449",
    "name": "Narciza Bernal",
    "phone": "0997043330",
    "phoneRaw": "0997043330",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-450",
    "name": "Britany Portilla",
    "phone": "0997043330",
    "phoneRaw": "0997043330",
    "phoneOther": "",
    "email": "",
    "parish": "Priorato",
    "barrio": "Priorato",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C21",
    "courseName": "Escuela de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-451",
    "name": "Diana Karolina Guerrero Hernández",
    "phone": "0980370967",
    "phoneRaw": "0980370967",
    "phoneOther": "",
    "email": "karolina29guerrero@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-452",
    "name": "Sofía Layevska Jaramillo Pillajo",
    "phone": "0992938108",
    "phoneRaw": "0992938108",
    "phoneOther": "",
    "email": "Jaramillosofi21@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-453",
    "name": "Cristian Darío Burbano Tulcán",
    "phone": "0960151111",
    "phoneRaw": "0960151111",
    "phoneOther": "",
    "email": "burbano.tulcan.cristian.dario@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-454",
    "name": "Dana Valeria Portilla Hidalgo",
    "phone": "0968147560",
    "phoneRaw": "0968147560",
    "phoneOther": "",
    "email": "nanavaleria671@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-455",
    "name": "Ruth Viviana Huera",
    "phone": "0939173350",
    "phoneRaw": "0939173350",
    "phoneOther": "",
    "email": "vivitah17@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-456",
    "name": "Kelly Andrea Manosalvas Chiliquinga",
    "phone": "0992984307",
    "phoneRaw": "0992984307",
    "phoneOther": "",
    "email": "abgkellymanosalvas.99@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-457",
    "name": "Jessica Salomé Ramos Guerrero",
    "phone": "0961087095",
    "phoneRaw": "0961087095",
    "phoneOther": "",
    "email": "jessicasalomeramos1@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-458",
    "name": "Darwin Leonardo Arciniega Cuaspud",
    "phone": "0962171770",
    "phoneRaw": "0962171770",
    "phoneOther": "",
    "email": "darwinarcd@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-459",
    "name": "Carlos Andrés Godoy Cuaspud",
    "phone": "0963197715",
    "phoneRaw": "0963197715",
    "phoneOther": "",
    "email": "andresdh9466@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-460",
    "name": "Angélica Del Rocío Villarreal Andrade",
    "phone": "0995683047",
    "phoneRaw": "0995683047",
    "phoneOther": "",
    "email": "angelviland@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-461",
    "name": "Jordan Andres Herrería Narvaez",
    "phone": "0987080999",
    "phoneRaw": "0987080999",
    "phoneOther": "",
    "email": "herreriajordan46@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-462",
    "name": "Dorman Edgardo Acosta Lomas",
    "phone": "0961860513",
    "phoneRaw": "0961860513",
    "phoneOther": "",
    "email": "3cacostaedgardo@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-463",
    "name": "Fátima Estefania Freire Guerrero",
    "phone": "0994011808",
    "phoneRaw": "0994011808",
    "phoneOther": "",
    "email": "guerreroestefania058@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-464",
    "name": "Tania Alejandra Rodriguez Yar",
    "phone": "0982606040",
    "phoneRaw": "0982606040",
    "phoneOther": "",
    "email": "alejhita.97.96.love@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-465",
    "name": "Estefanía Elizabeth Cuaical Paguay",
    "phone": "0985578832",
    "phoneRaw": "0985578832",
    "phoneOther": "",
    "email": "estefyc2001@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-466",
    "name": "Gary Fernando León Pozo",
    "phone": "0992590027",
    "phoneRaw": "0992590027",
    "phoneOther": "",
    "email": "gary.leon@live.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-467",
    "name": "Wendy Alejandra Castro Fuertes",
    "phone": "0992626533",
    "phoneRaw": "0992626533",
    "phoneOther": "",
    "email": "alejac1607@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-468",
    "name": "Edison David Carapaz Enriquez",
    "phone": "0997311509",
    "phoneRaw": "0997311509",
    "phoneOther": "",
    "email": "davidcarapazenriquez@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-469",
    "name": "Nicole Carolina Gavilánez Vaca",
    "phone": "0987489312",
    "phoneRaw": "0987489312",
    "phoneOther": "",
    "email": "nico_gav@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-470",
    "name": "Tania Belen Guis Loya",
    "phone": "0996510522",
    "phoneRaw": "0996510522",
    "phoneOther": "",
    "email": "taniajosue1516@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-471",
    "name": "Eliezer Alejandro Martinez Romero",
    "phone": "0993919953",
    "phoneRaw": "0993919953",
    "phoneOther": "",
    "email": "eliezeramartinezr@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-472",
    "name": "Dylan Alejandro Hernández Posso",
    "phone": "0991081575",
    "phoneRaw": "0991081575",
    "phoneOther": "",
    "email": "dylanhernandez600@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-473",
    "name": "Heidy Fresolina Hurtado Rodríguez",
    "phone": "0989392178",
    "phoneRaw": "0989392178",
    "phoneOther": "",
    "email": "heidyhurtado2002@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-474",
    "name": "Jean Carlos Tobar Arroyo",
    "phone": "0987352646",
    "phoneRaw": "0987352646",
    "phoneOther": "",
    "email": "jean123tobar@outlook.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-475",
    "name": "Marilyn Sofía Benavides Tatés",
    "phone": "0958811795",
    "phoneRaw": "0958811795",
    "phoneOther": "",
    "email": "benavidessofia25@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-476",
    "name": "Yessenia Estefanía Arias Ortiz",
    "phone": "0995036343",
    "phoneRaw": "0995036343",
    "phoneOther": "",
    "email": "yetiu92@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-477",
    "name": "Jorge Gabriel Cuichan Salazar",
    "phone": "0983511690",
    "phoneRaw": "0983511690",
    "phoneOther": "",
    "email": "jorgegabriel._1956@outlook.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-478",
    "name": "Nelson Andrés Jaramillo Pillajo",
    "phone": "0987453486",
    "phoneRaw": "0987453486",
    "phoneOther": "",
    "email": "nandressjp@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-479",
    "name": "Daniela Alejandra Pastaz Revelo",
    "phone": "0986882397",
    "phoneRaw": "0986882397",
    "phoneOther": "",
    "email": "danielapastaz70@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-480",
    "name": "Evelyn Michelle Cerón Chapi",
    "phone": "0987823993",
    "phoneRaw": "0987823993",
    "phoneOther": "",
    "email": "emceronch@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-481",
    "name": "Luis Mateo Tabango Hernández",
    "phone": "0994781539",
    "phoneRaw": "0994781539",
    "phoneOther": "",
    "email": "luismateo0960@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-482",
    "name": "Sol Caridad Hernández Ruano",
    "phone": "0994150701",
    "phoneRaw": "0994150701",
    "phoneOther": "",
    "email": "caridadruano3@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-483",
    "name": "Heyner Esauth Narváez Lara",
    "phone": "0995080437",
    "phoneRaw": "0995080437",
    "phoneOther": "",
    "email": "heynersito19@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-484",
    "name": "Cristhian Daniel Pozo Tarupi",
    "phone": "0960662359",
    "phoneRaw": "0960662359",
    "phoneOther": "",
    "email": "danielpozotarupi@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-485",
    "name": "Ana Lucía Marquez",
    "phone": "0980530691",
    "phoneRaw": "0980530691",
    "phoneOther": "",
    "email": "luciachandi12@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-486",
    "name": "Carla Mariéla Calderón Santacruz",
    "phone": "0995881768",
    "phoneRaw": "0995881768",
    "phoneOther": "",
    "email": "brihannamendes23@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-487",
    "name": "Ruth Valeria Jaramillo Salazar",
    "phone": "0963932983",
    "phoneRaw": "0963932983",
    "phoneOther": "",
    "email": "jaramillovaleria35@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-488",
    "name": "Sasha Gabriela Armas Tarambis",
    "phone": "0987562578",
    "phoneRaw": "0987562578",
    "phoneOther": "",
    "email": "sashaarmas1998@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-489",
    "name": "Daniela Valeria Julio Tapia",
    "phone": "0992761082",
    "phoneRaw": "0992761082",
    "phoneOther": "",
    "email": "vale1985danny@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-490",
    "name": "Rodrigo Andrés Rosero Vallejos",
    "phone": "0985384664",
    "phoneRaw": "0985384664",
    "phoneOther": "",
    "email": "rod_turi@hotmail.es",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-491",
    "name": "Maria Victoria Imbaquingo Fuentes",
    "phone": "0969632866",
    "phoneRaw": "0969632866",
    "phoneOther": "",
    "email": "imbaquingo085@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-492",
    "name": "Oscar Guillermo Chamorro Pozo",
    "phone": "0999897164",
    "phoneRaw": "0999897164",
    "phoneOther": "",
    "email": "oscarchamorro501@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-493",
    "name": "Anderson Patricio Bustamante Rodríguez",
    "phone": "0960005248",
    "phoneRaw": "0960005248",
    "phoneOther": "",
    "email": "andersonpatriciob@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-494",
    "name": "Jenny Narciza Puentestar Uyana",
    "phone": "0968232912",
    "phoneRaw": "0968232912",
    "phoneOther": "",
    "email": "jennitapuentestar@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-495",
    "name": "Alba Elvira Puedmag Tulcan",
    "phone": "0997760527",
    "phoneRaw": "0997760527",
    "phoneOther": "",
    "email": "albapuedmag231@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-496",
    "name": "Delia Esmeralda Manosalvas Pérez",
    "phone": "0991017569",
    "phoneRaw": "0991017569",
    "phoneOther": "",
    "email": "manosalvasesmeralda@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-497",
    "name": "Narciza Acero",
    "phone": "0999156509",
    "phoneRaw": "0999156509",
    "phoneOther": "",
    "email": "nacero@fedacc.org",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-498",
    "name": "Vaneda Lisseth Reyes Paspuel",
    "phone": "0996306605",
    "phoneRaw": "0996306605",
    "phoneOther": "",
    "email": "v.reyespaspuel@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-499",
    "name": "Eliana Paola Betancourt Cuesta",
    "phone": "0999156440",
    "phoneRaw": "0999156440",
    "phoneOther": "",
    "email": "ebetancourt@fedacc.org",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-500",
    "name": "Juan Arellano",
    "phone": "0990326644",
    "phoneRaw": "0990326644",
    "phoneOther": "",
    "email": "jarellano@fedacc.org",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-501",
    "name": "Alejandra Tello",
    "phone": "0969156651",
    "phoneRaw": "0969156651",
    "phoneOther": "",
    "email": "ctello@fedacc.org",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-502",
    "name": "Carmen Alicia Quilismal Paguay",
    "phone": "0963399212",
    "phoneRaw": "0963399212",
    "phoneOther": "",
    "email": "carmenquilismal10@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-503",
    "name": "Angelita Rivera",
    "phone": "0985082677",
    "phoneRaw": "0985082677",
    "phoneOther": "",
    "email": "angelitarivera2019@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-504",
    "name": "Teresa Valdivieso",
    "phone": "0990720973",
    "phoneRaw": "0990720973",
    "phoneOther": "",
    "email": "Teresavenavides 7@gmail .com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-505",
    "name": "Mayra Alejandra Cuasapaz Cuasapaz",
    "phone": "0999156573",
    "phoneRaw": "0999156573",
    "phoneOther": "",
    "email": "mcuasapaz@fedacc.org",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-506",
    "name": "Margarita Elena Chávez Ortega",
    "phone": "0999156453",
    "phoneRaw": "0999156453",
    "phoneOther": "",
    "email": "mchavez@fedacc.org",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-507",
    "name": "Lucí A Tobar",
    "phone": "0962265400",
    "phoneRaw": "0962265400",
    "phoneOther": "",
    "email": "tobarlucia171@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-508",
    "name": "Bryam Santiago Venegas Quelal",
    "phone": "0979851111",
    "phoneRaw": "0979851111",
    "phoneOther": "",
    "email": "bryamxxyyxx@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-509",
    "name": "Leila Ariadna Pepinosa Andrade",
    "phone": "0991582946",
    "phoneRaw": "0991582946",
    "phoneOther": "",
    "email": "leisi249@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-510",
    "name": "Jennifer Vanessa Zambrano López",
    "phone": "0968860827",
    "phoneRaw": "0968860827",
    "phoneOther": "",
    "email": "juventud@carchi.cruzroja.org.ec",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-511",
    "name": "Karen Arciniega",
    "phone": "0996314842",
    "phoneRaw": "0996314842",
    "phoneOther": "",
    "email": "karen_adriana5@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-512",
    "name": "Milton Solano",
    "phone": "0988744295",
    "phoneRaw": "0988744295",
    "phoneOther": "",
    "email": "miltonsolano1@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-513",
    "name": "Damaris Alexandra Hernández López",
    "phone": "0996808104",
    "phoneRaw": "0996808104",
    "phoneOther": "",
    "email": "sofiadamis69@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-514",
    "name": "Jessica Gabriela Yepez Méndez",
    "phone": "0984338716",
    "phoneRaw": "0984338716",
    "phoneOther": "",
    "email": "Taylorarce03@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-515",
    "name": "Brithney Colimba",
    "phone": "0968231711",
    "phoneRaw": "0968231711",
    "phoneOther": "",
    "email": "Abigail13colimba@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-516",
    "name": "Kevin Patricio Hernandez Guerra",
    "phone": "0994164650",
    "phoneRaw": "0994164650",
    "phoneOther": "",
    "email": "khernandez@fedacc.org",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-517",
    "name": "Margoth Rosero",
    "phone": "0996224475",
    "phoneRaw": "0996224475",
    "phoneOther": "",
    "email": "magobenavides24@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-518",
    "name": "Jennifer Moran",
    "phone": "0989190119",
    "phoneRaw": "0989190119",
    "phoneOther": "",
    "email": "jennifermoran3105@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-519",
    "name": "Ana Marcela Carapaz Montenegro",
    "phone": "0961971701",
    "phoneRaw": "0961971701",
    "phoneOther": "",
    "email": "ani_tamar1215@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-520",
    "name": "Aida Anrrango",
    "phone": "0939066500",
    "phoneRaw": "0939066500",
    "phoneOther": "",
    "email": "aidacaq@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-521",
    "name": "Ana Maricela Cárdenas Rosero",
    "phone": "0987576798",
    "phoneRaw": "0987576798",
    "phoneOther": "",
    "email": "aniicard_10@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-522",
    "name": "Chapi Hernandez Lilian Alexandra",
    "phone": "0996224475",
    "phoneRaw": "0996224475",
    "phoneOther": "",
    "email": "alexandrachapi273@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-523",
    "name": "Stalin Alexander Cangás Rosero",
    "phone": "0999745985",
    "phoneRaw": "0999745985",
    "phoneOther": "",
    "email": "stalincangas04@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-524",
    "name": "Daniela",
    "phone": "0983176266",
    "phoneRaw": "0983176266",
    "phoneOther": "",
    "email": "penatedaniela87@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-525",
    "name": "Laura  Jaritza Alvarez Castro",
    "phone": "0969893987",
    "phoneRaw": "0969893987",
    "phoneOther": "",
    "email": "lauraalvarezjc@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-526",
    "name": "Wilma De Las Mercedes Parra Madera",
    "phone": "0991513798",
    "phoneRaw": "0991513798",
    "phoneOther": "",
    "email": "Wilmaparra2607@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-527",
    "name": "Pineda Ipailes Ainy Citlalli",
    "phone": "0968960078",
    "phoneRaw": "0968960078",
    "phoneOther": "",
    "email": "ainypineda@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-528",
    "name": "Aura Elisa Benavides Imbaquingo",
    "phone": "0958875647",
    "phoneRaw": "0958875647",
    "phoneOther": "",
    "email": "aurabenavides56@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-529",
    "name": "Frank Santiago Galarza Salazar",
    "phone": "0961413399",
    "phoneRaw": "0961413399",
    "phoneOther": "",
    "email": "frank1093galarza@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-530",
    "name": "Karen Johanna Bastidas García",
    "phone": "0997826765",
    "phoneRaw": "0997826765",
    "phoneOther": "",
    "email": "kjbastidasg@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-531",
    "name": "Laura Carolina Chasiquiza Santillán",
    "phone": "0985997874",
    "phoneRaw": "0985997874",
    "phoneOther": "",
    "email": "carolinachasiquiza@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-532",
    "name": "Maria Magdalena Bedon Ortiz",
    "phone": "0999087933",
    "phoneRaw": "0999087933",
    "phoneOther": "",
    "email": "mariabedon1977@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-533",
    "name": "Britanny Gardenia Portilla Bernal",
    "phone": "0992236503",
    "phoneRaw": "0992236503",
    "phoneOther": "",
    "email": "portillabritanny16@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-534",
    "name": "Narciza De Lourdes Bernal Serrano",
    "phone": "0997042330",
    "phoneRaw": "0997042330",
    "phoneOther": "",
    "email": "narcizabernal@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-535",
    "name": "Gladys Yolanda Vallejos Lastra",
    "phone": "0980959911",
    "phoneRaw": "0980959911",
    "phoneOther": "",
    "email": "Vallejosgladys413@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-536",
    "name": "Kevin Ivanov Gallardo Coronado",
    "phone": "0982655303",
    "phoneRaw": "0982655303",
    "phoneOther": "",
    "email": "ivanovgc@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-537",
    "name": "Jhonatan David Hinojosa Chalán",
    "phone": "0992419246",
    "phoneRaw": "0992419246",
    "phoneOther": "",
    "email": "jhonatanh2203@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-538",
    "name": "Bautista Salvador Cuaspa Echeverría",
    "phone": "0986321695",
    "phoneRaw": "0986321695",
    "phoneOther": "",
    "email": "salvabautista1988@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-539",
    "name": "Ageda Abaneth Mejia Coral",
    "phone": "0993742100",
    "phoneRaw": "0993742100",
    "phoneOther": "",
    "email": "abanethmejia@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-540",
    "name": "María Belén Terán Villegas",
    "phone": "0990671811",
    "phoneRaw": "0990671811",
    "phoneOther": "",
    "email": "mbelen2104@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-541",
    "name": "David Ernesto Cuastusa Titistar",
    "phone": "0939034623",
    "phoneRaw": "0939034623",
    "phoneOther": "",
    "email": "david0988676039@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-542",
    "name": "Angie Jacqueline Fuertes Mejía",
    "phone": "0989444393",
    "phoneRaw": "0989444393",
    "phoneOther": "",
    "email": "angief8@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-543",
    "name": "Luis Esteban Cupichamba Benítez",
    "phone": "0980553108",
    "phoneRaw": "0980553108",
    "phoneOther": "",
    "email": "agendas.imbabura@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-544",
    "name": "María Adriana Yamberla Cachimuel",
    "phone": "0982328985",
    "phoneRaw": "0982328985",
    "phoneOther": "",
    "email": "myamberla@imbabura.gob.ec",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-545",
    "name": "Juliana Estefania Rosero Rosero",
    "phone": "0984421724",
    "phoneRaw": "0984421724",
    "phoneOther": "",
    "email": "julianarose1506@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-546",
    "name": "Andrea Estefanía Torres Polo",
    "phone": "0991051493",
    "phoneRaw": "0991051493",
    "phoneOther": "",
    "email": "andreastpolo12@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-547",
    "name": "Mayte Campo Quishpe",
    "phone": "0995571482",
    "phoneRaw": "0995571482",
    "phoneOther": "",
    "email": "maytecampo14@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-548",
    "name": "Alfonso Chalanpuento",
    "phone": "0963314779",
    "phoneRaw": "0963314779",
    "phoneOther": "",
    "email": "",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-549",
    "name": "Mayla Arias Albarran",
    "phone": "0995571482",
    "phoneRaw": "0995571482",
    "phoneOther": "",
    "email": "",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-550",
    "name": "Jazmín Anahí Perugachi Ibañez",
    "phone": "0967537713",
    "phoneRaw": "0967537713",
    "phoneOther": "",
    "email": "jazminanahi1998@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-551",
    "name": "Oriselda Mosquera Mina",
    "phone": "0981109137",
    "phoneRaw": "0981109137",
    "phoneOther": "",
    "email": "Oricelamosquera@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-552",
    "name": "Aura Germania Rosero López",
    "phone": "0967283265",
    "phoneRaw": "0967283265",
    "phoneOther": "",
    "email": "germaniaroserol@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-553",
    "name": "Yokasta Yamileth Mina Mosquera",
    "phone": "0981493262",
    "phoneRaw": "0981493262",
    "phoneOther": "",
    "email": "yokastamina@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-554",
    "name": "Santiago Gabriel Gonzalón Caicedo",
    "phone": "0959718695",
    "phoneRaw": "0959718695",
    "phoneOther": "",
    "email": "mckendy88@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-555",
    "name": "Erika Lizeth Criollo Caicedo",
    "phone": "0989971790",
    "phoneRaw": "0989971790",
    "phoneOther": "",
    "email": "erikacriollo355@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-556",
    "name": "Inti Rumiñahui Nóquez Carlosama",
    "phone": "0994226622",
    "phoneRaw": "0994226622",
    "phoneOther": "",
    "email": "intynoquez@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-557",
    "name": "Nicole Estefanía Chiriboga Pozo",
    "phone": "0988012839",
    "phoneRaw": "0988012839",
    "phoneOther": "",
    "email": "nicoleeeeaa19@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-558",
    "name": "Joselin Yesenia Yar Cazanova",
    "phone": "0984038543",
    "phoneRaw": "0984038543",
    "phoneOther": "",
    "email": "joseliyar@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-559",
    "name": "Jhonatan Andres Ibadango Farinango",
    "phone": "0989960747",
    "phoneRaw": "0989960747",
    "phoneOther": "",
    "email": "baris_90@hotmail.es",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-560",
    "name": "Naomy Francesca Maigua León",
    "phone": "0967150043",
    "phoneRaw": "0967150043",
    "phoneOther": "",
    "email": "nfmaigual@utn.edu.ec",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-561",
    "name": "Patricia Esmeralda Chango Chicaizs",
    "phone": "0981251289",
    "phoneRaw": "0981251289",
    "phoneOther": "",
    "email": "patriciachango73@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-562",
    "name": "Miguel Ángel González Salinas",
    "phone": "0983261894",
    "phoneRaw": "0983261894",
    "phoneOther": "",
    "email": "miangonzalez@hotmail.it",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-563",
    "name": "Julia Sotaminga Rodríguez",
    "phone": "0995145055",
    "phoneRaw": "0995145055",
    "phoneOther": "",
    "email": "juliasotaminga2020@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-564",
    "name": "Génesis Valentina Villa Briones",
    "phone": "0969372104",
    "phoneRaw": "0969372104",
    "phoneOther": "",
    "email": "gv731779@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-565",
    "name": "Maria Kassandra Lucas Pin",
    "phone": "0984856974",
    "phoneRaw": "0984856974",
    "phoneOther": "",
    "email": "kassandraluvaspin@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-566",
    "name": "Jipson Julian Tejena Laz",
    "phone": "0961426169",
    "phoneRaw": "0961426169",
    "phoneOther": "",
    "email": "julian_tejena@hotmail.es",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-567",
    "name": "Ingrid Leonella Robles Mera",
    "phone": "0990135384",
    "phoneRaw": "0990135384",
    "phoneOther": "",
    "email": "ingridrobles2005@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-568",
    "name": "David Omar Guaman Verduga",
    "phone": "0962909053",
    "phoneRaw": "0962909053",
    "phoneOther": "",
    "email": "davidguaman200716@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-569",
    "name": "Eimy Geanella Posligua Valencia",
    "phone": "0961357722",
    "phoneRaw": "0961357722",
    "phoneOther": "",
    "email": "amiposliguavale2000@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-570",
    "name": "Jordi Dayan Toro Zambrano",
    "phone": "0963018315",
    "phoneRaw": "0963018315",
    "phoneOther": "",
    "email": "jordidayantorozambrano@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-571",
    "name": "David Andrés Mendoza Murillo",
    "phone": "0995373925",
    "phoneRaw": "0995373925",
    "phoneOther": "",
    "email": "mendozadmm55@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-572",
    "name": "Anthony Roddy Posligua Valencia",
    "phone": "0962198240",
    "phoneRaw": "0962198240",
    "phoneOther": "",
    "email": "anroposva332@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-573",
    "name": "Gorozabel Arias Luis Octavio",
    "phone": "0997942110",
    "phoneRaw": "0997942110",
    "phoneOther": "",
    "email": "gorozabelluis442@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-574",
    "name": "Andreina Alejandra Alvarez Anchundia",
    "phone": "0996916444",
    "phoneRaw": "0996916444",
    "phoneOther": "",
    "email": "alvarezandreina132@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-575",
    "name": "Victor Hugo Chila Zambrano",
    "phone": "0969672930",
    "phoneRaw": "0969672930",
    "phoneOther": "",
    "email": "vihugochila@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-576",
    "name": "Danna Cristhel Sornoza Parraga",
    "phone": "0963821218",
    "phoneRaw": "0963821218",
    "phoneOther": "",
    "email": "danna2206csp@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-577",
    "name": "David Rafael Bravo Sánchez",
    "phone": "0995601496",
    "phoneRaw": "0995601496",
    "phoneOther": "",
    "email": "da20vid21@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-578",
    "name": "Jesse Junior Vera Rodríguez",
    "phone": "0991008304",
    "phoneRaw": "0991008304",
    "phoneOther": "",
    "email": "juniorvera55@hotmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-579",
    "name": "Carlos Enrique Cevallos Párraga",
    "phone": "0963238021",
    "phoneRaw": "0963238021",
    "phoneOther": "",
    "email": "carlos2007cevallos@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-580",
    "name": "Victoria Valentina López García",
    "phone": "0963428765",
    "phoneRaw": "0963428765",
    "phoneOther": "",
    "email": "lopezvickyv@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-581",
    "name": "Garcia Piguave David Fernando",
    "phone": "0979251207",
    "phoneRaw": "0979251207",
    "phoneOther": "",
    "email": "davidgpf97dj@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-582",
    "name": "Silvia Teresa Almeida Macías",
    "phone": "0984328615",
    "phoneRaw": "0984328615",
    "phoneOther": "",
    "email": "silvy3028@gmail.com",
    "parish": "Portoviejo",
    "barrio": "Portoviejo",
    "canton": "Portoviejo",
    "provincia": "Manabí",
    "location": "Portoviejo · Manabí",
    "courseCode": "C22",
    "courseName": "Gestores de voluntariado",
    "courseStartDate": "2025",
    "courseEndDate": "2025",
    "courseDates": "Ciclo formativo 2025",
    "courseRecency": "2025",
    "organization": "Voluntar",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-583",
    "name": "Anderson Patricio Bustamante Rodríguez",
    "phone": "0960005248",
    "phoneRaw": "0960005248",
    "phoneOther": "",
    "email": "andersonpatriciob@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-584",
    "name": "Andres Raul Narvaez Higuera",
    "phone": "0987023743",
    "phoneRaw": "0987023743",
    "phoneOther": "",
    "email": "anarvaezhiguera@yahoo.com.mx",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-585",
    "name": "Angela Gabriela Vanegas Escobar",
    "phone": "0939334056",
    "phoneRaw": "0939334056",
    "phoneOther": "",
    "email": "angelavanegas05@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-586",
    "name": "Anthony Danilo Guamialamá Armas",
    "phone": "0967401286",
    "phoneRaw": "0967401286",
    "phoneOther": "",
    "email": "guamialamanthony@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-587",
    "name": "Deysi Vanessa Minda Cucas",
    "phone": "0989445166",
    "phoneRaw": "0989445166",
    "phoneOther": "",
    "email": "vnssminda@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-588",
    "name": "Erika Mailyz Ayala Díaz",
    "phone": "0980237936",
    "phoneRaw": "0980237936",
    "phoneOther": "",
    "email": "venatorx6x@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-589",
    "name": "Evelyn Michelle Cerón Chapi",
    "phone": "0996094947",
    "phoneRaw": "0996094947",
    "phoneOther": "",
    "email": "emceronch@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-590",
    "name": "Gladys Yolanda Guanoluisa Chiliquinga",
    "phone": "0989107815",
    "phoneRaw": "0989107815",
    "phoneOther": "",
    "email": "gladys.guanoluisa@educacion.gob.ec",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-591",
    "name": "José Byron Calva Rojas",
    "phone": "0985316317",
    "phoneRaw": "0985316317",
    "phoneOther": "",
    "email": "bcalva@fedacc.org",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-592",
    "name": "Josemar Daniel Cuarán Cordova",
    "phone": "0996044552",
    "phoneRaw": "0996044552",
    "phoneOther": "",
    "email": "josed12338@outlook.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-593",
    "name": "Kelly Andrea Manosalvas Chiliquinga",
    "phone": "0992984307",
    "phoneRaw": "0992984307",
    "phoneOther": "",
    "email": "abgkellymanosalvas.99@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-594",
    "name": "Kenny Matteo Guzmán Flores",
    "phone": "0984356135",
    "phoneRaw": "0984356135",
    "phoneOther": "",
    "email": "tteoguzman@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-595",
    "name": "Leila Ariadna Pepinosa Andrade",
    "phone": "0991582946",
    "phoneRaw": "0991582946",
    "phoneOther": "",
    "email": "leisi249@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-596",
    "name": "Mayra Elizabeth Meneses Enríquez",
    "phone": "0985420716",
    "phoneRaw": "0985420716",
    "phoneOther": "",
    "email": "mayrae.meneses@educacion.gob.ec",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-597",
    "name": "Nancy Cristina Herrera Lara",
    "phone": "0986432100",
    "phoneRaw": "0986432100",
    "phoneOther": "",
    "email": "cristi1984-vale@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-598",
    "name": "Rocio Lorena Montenegro Valencia",
    "phone": "0987516457",
    "phoneRaw": "0987516457",
    "phoneOther": "",
    "email": "lore.montenegro90@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-599",
    "name": "Rubén Alejandro Endara Hurtado",
    "phone": "0990664239",
    "phoneRaw": "0990664239",
    "phoneOther": "",
    "email": "rubenalej1898@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-600",
    "name": "Tania Maribel Quiroz Aguilar",
    "phone": "0994120825",
    "phoneRaw": "0994120825",
    "phoneOther": "",
    "email": "maribel.quiroz@educacion.gob.ec",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Carchi",
    "location": "Carchi",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-601",
    "name": "Alexandra Guillermina Muenala Solano",
    "phone": "0989741295",
    "phoneRaw": "0989741295",
    "phoneOther": "",
    "email": "sandramuenala30@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-602",
    "name": "Ana Elizabeth Dávila Guzmán",
    "phone": "0996425732",
    "phoneRaw": "0996425732",
    "phoneOther": "",
    "email": "lyzdavilag@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-603",
    "name": "Benigna Irene Paredes Martínez",
    "phone": "0961576421",
    "phoneRaw": "0961576421",
    "phoneOther": "",
    "email": "tecnicooc@foci.org.ec",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-604",
    "name": "Cristina Elizabeth Obando Guerra",
    "phone": "0979879568",
    "phoneRaw": "0979879568",
    "phoneOther": "",
    "email": "cristyobando26@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-605",
    "name": "Daniela Peñate Payares",
    "phone": "0983176266",
    "phoneRaw": "0983176266",
    "phoneOther": "",
    "email": "penatedaniela87@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-606",
    "name": "Diana Carolina Araque Hidalgo",
    "phone": "0959547833",
    "phoneRaw": "0959547833",
    "phoneOther": "",
    "email": "daraque338@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-607",
    "name": "Edison David Lema Terán",
    "phone": "0980139183",
    "phoneRaw": "0980139183",
    "phoneOther": "",
    "email": "edisonlemat@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-608",
    "name": "Jhonatan David Hinojosa Chalan",
    "phone": "0992419246",
    "phoneRaw": "0992419246",
    "phoneOther": "",
    "email": "jhonatanh2203@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-609",
    "name": "Jitka Francisca Caicedo Suárez",
    "phone": "0997994917",
    "phoneRaw": "0997994917",
    "phoneOther": "",
    "email": "franjitka@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-610",
    "name": "Juan Manuel Rueda Valenzuela",
    "phone": "0991581167",
    "phoneRaw": "0991581167",
    "phoneOther": "",
    "email": "juan.rueda@10d02.saludzona1gob.ec",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-611",
    "name": "Kristy Joel Lopez Cisneros",
    "phone": "0995554560",
    "phoneRaw": "0995554560",
    "phoneOther": "",
    "email": "kjlopez@ibarra.gob.ec",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-612",
    "name": "María Belén Terán Villegas",
    "phone": "0990671811",
    "phoneRaw": "0990671811",
    "phoneOther": "",
    "email": "mbelen2104@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-613",
    "name": "María Fernanda Bolaños Cobos",
    "phone": "0995617634",
    "phoneRaw": "0995617634",
    "phoneOther": "",
    "email": "fernandabby@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-614",
    "name": "María Mercedes Lobato Freire",
    "phone": "0997462997",
    "phoneRaw": "0997462997",
    "phoneOther": "",
    "email": "lobatofreire_mary@hotmail.com\nmaria.lobato@saludzona1.gob.ec",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-615",
    "name": "Martha Elizabeth Barrionuevo Garzón",
    "phone": "0997448512",
    "phoneRaw": "0997448512",
    "phoneOther": "",
    "email": "trabajomarthy.priorato@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-616",
    "name": "Melanie Elizabeth Reina Bastidas",
    "phone": "0985401232",
    "phoneRaw": "0985401232",
    "phoneOther": "",
    "email": "melaniereina123@gmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-617",
    "name": "Oscar Vinicio Perugachi Morales",
    "phone": "0964027953",
    "phoneRaw": "0964027953",
    "phoneOther": "",
    "email": "operugachi@imbabura.gob.ec",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-618",
    "name": "Silvia Janeth Pabón Carvajal",
    "phone": "0986448563",
    "phoneRaw": "0986448563",
    "phoneOther": "",
    "email": "negrita_silvy17@hotmail.com",
    "parish": "Sector urbano",
    "barrio": "Sector urbano",
    "canton": "",
    "provincia": "Imbabura",
    "location": "Imbabura",
    "courseCode": "C23",
    "courseName": "Fortalecimiento de capacidades de liderazgo juvenil desde metodologías Game Over y Rurankapak",
    "courseStartDate": "28/08/2025",
    "courseEndDate": "20/03/2026",
    "courseDates": "28/08/2025 al 20/03/2026",
    "courseRecency": "20/03/2026",
    "organization": "GIZ - Vanesa Reyes (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-619",
    "name": "Magdalena Bedón",
    "phone": "0999087933",
    "phoneRaw": "0999087933",
    "phoneOther": "",
    "email": "mariabedon1977@gmail.com",
    "parish": "Barrio Sagrado Corazón",
    "barrio": "Barrio Sagrado Corazón",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C24",
    "courseName": "Empoderamiento de adolescentes y jóvenes mediante procesos artísticos, de sensibilización y educomunicacionales, con enfoque en diversidades sexo-genéricas",
    "courseStartDate": "13/10/2025",
    "courseEndDate": "01/12/2025",
    "courseDates": "13/10/2025 al 01/12/2025",
    "courseRecency": "01/12/2025",
    "organization": "GIZ - Laura Chasiquiza (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-620",
    "name": "Aura Benavides",
    "phone": "0958875647",
    "phoneRaw": "0958875647",
    "phoneOther": "",
    "email": "aurabenavides56@gmail.com",
    "parish": "Barrio Sagrado Corazón",
    "barrio": "Barrio Sagrado Corazón",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C24",
    "courseName": "Empoderamiento de adolescentes y jóvenes mediante procesos artísticos, de sensibilización y educomunicacionales, con enfoque en diversidades sexo-genéricas",
    "courseStartDate": "13/10/2025",
    "courseEndDate": "01/12/2025",
    "courseDates": "13/10/2025 al 01/12/2025",
    "courseRecency": "01/12/2025",
    "organization": "GIZ - Laura Chasiquiza (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-621",
    "name": "Karol Odalys",
    "phone": "0982953985",
    "phoneRaw": "0982953985",
    "phoneOther": "",
    "email": "",
    "parish": "Alpachaca",
    "barrio": "Alpachaca",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C24",
    "courseName": "Empoderamiento de adolescentes y jóvenes mediante procesos artísticos, de sensibilización y educomunicacionales, con enfoque en diversidades sexo-genéricas",
    "courseStartDate": "13/10/2025",
    "courseEndDate": "01/12/2025",
    "courseDates": "13/10/2025 al 01/12/2025",
    "courseRecency": "01/12/2025",
    "organization": "GIZ - Laura Chasiquiza (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-622",
    "name": "Deisy Santellán",
    "phone": "0995147187",
    "phoneRaw": "0995147187",
    "phoneOther": "",
    "email": "",
    "parish": "Alpachaca",
    "barrio": "Alpachaca",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C24",
    "courseName": "Empoderamiento de adolescentes y jóvenes mediante procesos artísticos, de sensibilización y educomunicacionales, con enfoque en diversidades sexo-genéricas",
    "courseStartDate": "13/10/2025",
    "courseEndDate": "01/12/2025",
    "courseDates": "13/10/2025 al 01/12/2025",
    "courseRecency": "01/12/2025",
    "organization": "GIZ - Laura Chasiquiza (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-623",
    "name": "Germania Rosero",
    "phone": "0967283265",
    "phoneRaw": "0967283265",
    "phoneOther": "",
    "email": "",
    "parish": "Alpachaca",
    "barrio": "Alpachaca",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C24",
    "courseName": "Empoderamiento de adolescentes y jóvenes mediante procesos artísticos, de sensibilización y educomunicacionales, con enfoque en diversidades sexo-genéricas",
    "courseStartDate": "13/10/2025",
    "courseEndDate": "01/12/2025",
    "courseDates": "13/10/2025 al 01/12/2025",
    "courseRecency": "01/12/2025",
    "organization": "GIZ - Laura Chasiquiza (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-624",
    "name": "Samya Andrade",
    "phone": "0988535994",
    "phoneRaw": "0988535994",
    "phoneOther": "",
    "email": "",
    "parish": "Alpachaca",
    "barrio": "Alpachaca",
    "canton": "Ibarra",
    "provincia": "Imbabura",
    "location": "Ibarra · Imbabura",
    "courseCode": "C24",
    "courseName": "Empoderamiento de adolescentes y jóvenes mediante procesos artísticos, de sensibilización y educomunicacionales, con enfoque en diversidades sexo-genéricas",
    "courseStartDate": "13/10/2025",
    "courseEndDate": "01/12/2025",
    "courseDates": "13/10/2025 al 01/12/2025",
    "courseRecency": "01/12/2025",
    "organization": "GIZ - Laura Chasiquiza (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-625",
    "name": "Yaric Pineda",
    "phone": "0967141240",
    "phoneRaw": "0967141240",
    "phoneOther": "",
    "email": "",
    "parish": "Peguche",
    "barrio": "Peguche",
    "canton": "Otavalo",
    "provincia": "Imbabura",
    "location": "Otavalo · Imbabura",
    "courseCode": "C24",
    "courseName": "Empoderamiento de adolescentes y jóvenes mediante procesos artísticos, de sensibilización y educomunicacionales, con enfoque en diversidades sexo-genéricas",
    "courseStartDate": "13/10/2025",
    "courseEndDate": "01/12/2025",
    "courseDates": "13/10/2025 al 01/12/2025",
    "courseRecency": "01/12/2025",
    "organization": "GIZ - Laura Chasiquiza (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-626",
    "name": "Sairi Ruiz",
    "phone": "0985131353",
    "phoneRaw": "0985131353",
    "phoneOther": "",
    "email": "",
    "parish": "Peguche",
    "barrio": "Peguche",
    "canton": "Otavalo",
    "provincia": "Imbabura",
    "location": "Otavalo · Imbabura",
    "courseCode": "C24",
    "courseName": "Empoderamiento de adolescentes y jóvenes mediante procesos artísticos, de sensibilización y educomunicacionales, con enfoque en diversidades sexo-genéricas",
    "courseStartDate": "13/10/2025",
    "courseEndDate": "01/12/2025",
    "courseDates": "13/10/2025 al 01/12/2025",
    "courseRecency": "01/12/2025",
    "organization": "GIZ - Laura Chasiquiza (consultora)",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-627",
    "name": "Jonas Calderon",
    "phone": "0981425247",
    "phoneRaw": "0981425247",
    "phoneOther": "",
    "email": "",
    "parish": "San Jose / Centenario",
    "barrio": "San Jose / Centenario",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-628",
    "name": "Nelsy Moreno",
    "phone": "0983110423",
    "phoneRaw": "0983110423",
    "phoneOther": "",
    "email": "",
    "parish": "San Jose",
    "barrio": "San Jose",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-629",
    "name": "Yessenia Ger",
    "phone": "0985409871",
    "phoneRaw": "0985409871",
    "phoneOther": "",
    "email": "",
    "parish": "San Jose",
    "barrio": "San Jose",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-630",
    "name": "Yolanda Delgado",
    "phone": "0989971715",
    "phoneRaw": "0989971715",
    "phoneOther": "",
    "email": "",
    "parish": "San Jose",
    "barrio": "San Jose",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-631",
    "name": "Patricia Meneses",
    "phone": "0986976043",
    "phoneRaw": "0986976043",
    "phoneOther": "",
    "email": "",
    "parish": "San Jose",
    "barrio": "San Jose",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-632",
    "name": "Rosa Ramirez",
    "phone": "0989053691",
    "phoneRaw": "0989053691",
    "phoneOther": "",
    "email": "",
    "parish": "Centenario",
    "barrio": "Centenario",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-633",
    "name": "Amanda Huera",
    "phone": "0958719122",
    "phoneRaw": "0958719122",
    "phoneOther": "",
    "email": "",
    "parish": "Centenario",
    "barrio": "Centenario",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-634",
    "name": "Judith Pozo",
    "phone": "0994935037",
    "phoneRaw": "0994935037",
    "phoneOther": "",
    "email": "",
    "parish": "Centenario",
    "barrio": "Centenario",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-635",
    "name": "Leidy Ramirez",
    "phone": "0999640387",
    "phoneRaw": "0999640387",
    "phoneOther": "",
    "email": "",
    "parish": "Capuli",
    "barrio": "Capuli",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-636",
    "name": "Tamara Martinez",
    "phone": "0993142493",
    "phoneRaw": "0993142493",
    "phoneOther": "",
    "email": "",
    "parish": "Capuli",
    "barrio": "Capuli",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-637",
    "name": "Belen Ormaza",
    "phone": "0991220279",
    "phoneRaw": "0991220279",
    "phoneOther": "",
    "email": "",
    "parish": "Capuli",
    "barrio": "Capuli",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-638",
    "name": "Jeferson Narvaez",
    "phone": "0939386325",
    "phoneRaw": "0939386325",
    "phoneOther": "",
    "email": "",
    "parish": "Capuli",
    "barrio": "Capuli",
    "canton": "Montúfar",
    "provincia": "Carchi",
    "location": "Montúfar · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-639",
    "name": "Liliana Pinchao",
    "phone": "0983795970",
    "phoneRaw": "0983795970",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "JC"
  },
  {
    "id": "GIZ-640",
    "name": "Yadira Enriquez",
    "phone": "0991134746",
    "phoneRaw": "0991134746",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-641",
    "name": "Jessica Villota",
    "phone": "0959602970",
    "phoneRaw": "0959602970",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-642",
    "name": "Rosa Narvaez",
    "phone": "0986374174",
    "phoneRaw": "0986374174",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-643",
    "name": "Rubiela Morillo",
    "phone": "0990250337",
    "phoneRaw": "0990250337",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-644",
    "name": "Aron Revelo",
    "phone": "0989767299",
    "phoneRaw": "0989767299",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-645",
    "name": "Haider Hernandez",
    "phone": "0988690014",
    "phoneRaw": "0988690014",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-646",
    "name": "Marco Fuertes",
    "phone": "0980176541",
    "phoneRaw": "0980176541",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-647",
    "name": "Juan Pablo Hernandez",
    "phone": "0999105158",
    "phoneRaw": "0999105158",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-648",
    "name": "Dyan Cortez",
    "phone": "0981890914",
    "phoneRaw": "0981890914",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-649",
    "name": "Veronica Querembas",
    "phone": "0993565514",
    "phoneRaw": "0993565514",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-650",
    "name": "Aleida Fuertes",
    "phone": "0939021206",
    "phoneRaw": "0939021206",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  },
  {
    "id": "GIZ-651",
    "name": "Blanca Cortez",
    "phone": "0968360813",
    "phoneRaw": "0968360813",
    "phoneOther": "",
    "email": "",
    "parish": "Santa Martha de Cuba",
    "barrio": "Santa Martha de Cuba",
    "canton": "Tulcán",
    "provincia": "Carchi",
    "location": "Tulcán · Carchi",
    "courseCode": "C25",
    "courseName": "Escuelas de Participación Comunitaria y Liderazgo",
    "courseStartDate": "05/12/2024",
    "courseEndDate": "31/12/2025",
    "courseDates": "05/12/2024 al 31/12/2025",
    "courseRecency": "31/12/2025",
    "organization": "ChildFund",
    "referencia": "Equipo Técnico Clima Social / GIZ",
    "baseName": "GIZ · OE1 - ProCohesión (Fase III · 2026)",
    "status": "pending",
    "attempts": 0,
    "last": "Sin gestión",
    "operator": "DO"
  }
];

function buildDemoContacts() {
  return JSON.parse(JSON.stringify(demoContacts));
}

const operators = [
  { initials: 'JC', name: 'Josselyn Carvajal', role: 'Operadora', managed: 0, progress: 0, effectiveness: '0%', last: 'Sin actividad', state: 'on', color: '' },
  { initials: 'DO', name: 'Darwin Olivo', role: 'Operador', managed: 0, progress: 0, effectiveness: '0%', last: 'Sin actividad', state: 'on', color: 'green' }
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
const draftNotesByContact = {};
const draftRescheduleByContact = {};
let operatorSearchQuery = '';
let columnSearchQueries = { 'column-normal': '', 'column-pending': '', 'column-no-answer': '' };
let contactSearchQuery = '';
let contactStatusFilter = '';
let contactBaseFilter = '';
let historySearchQuery = '';
let shiftSearchQuery = '';

function visibleContacts() {
  return currentUser?.role === 'operator'
    ? state.contacts.filter(contact => contact.operator === currentUser.initials)
    : state.contacts;
}

function firstActionable(contacts) {
  return contacts.find(contact => contact.status === 'pending' || contact.status === 'no-answer');
}

function getNextActionableContact(currentContactId, contacts) {
  const list = contacts || visibleContacts();
  if (!list || !list.length) return null;

  const currentIndex = list.findIndex(c => c.id === currentContactId);

  // 1. Siguiente contacto NUEVO (0 intentos) hacia adelante
  for (let i = currentIndex + 1; i < list.length; i++) {
    const c = list[i];
    if (isActionableContact(c) && Number(c.attempts || 0) === 0) return c;
  }

  // 2. Si no hay más adelante, buscar nuevos desde el inicio
  for (let i = 0; i < currentIndex; i++) {
    const c = list[i];
    if (isActionableContact(c) && Number(c.attempts || 0) === 0) return c;
  }

  // 3. Siguiente contacto accionable (reintentos) posterior al actual
  for (let i = currentIndex + 1; i < list.length; i++) {
    const c = list[i];
    if (isActionableContact(c) && c.id !== currentContactId) return c;
  }

  // 4. Si no hay después, buscar reintentos desde el inicio
  for (let i = 0; i < currentIndex; i++) {
    const c = list[i];
    if (isActionableContact(c) && c.id !== currentContactId) return c;
  }

  return null;
}

function contactStatusLabel(contact) {
  if (contact.status === 'pending' && contact.attempts > 0) return isPreviousDay(contact) ? `Pendiente · ${previousDateLabel(contact.lastAttemptAt)}` : 'Pendiente · espera captura';
  if (contact.status === 'no-answer' && isPreviousDay(contact)) return `No contesta · ${previousDateLabel(contact.lastAttemptAt)}`;
  return statusLabels[contact.status] || 'Pendiente';
}

function dayKey(value) { return value ? new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Guayaquil', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(value)) : ''; }
function isPreviousDay(contact) { const last = dayKey(contact.lastAttemptAt); return Boolean(last && last !== dayKey(new Date())); }
function previousDateLabel(value) { return value ? new Intl.DateTimeFormat('es-EC', { timeZone: 'America/Guayaquil', day: '2-digit', month: '2-digit' }).format(new Date(value)) : 'fecha anterior'; }

const MAX_SHIFT_HOURS = 14;

function isShiftExpired(shift) {
  if (!shift || !shift.startedAt) return false;
  const started = new Date(shift.startedAt).getTime();
  if (isNaN(started)) return false;
  return (Date.now() - started) > (MAX_SHIFT_HOURS * 3600000);
}

function deduplicateShiftsClient(shifts) {
  if (!Array.isArray(shifts)) return [];
  const result = [];
  const sorted = [...shifts].sort((a, b) => new Date(b.startedAt || 0) - new Date(a.startedAt || 0));

  for (const shift of sorted) {
    const shiftTime = new Date(shift.startedAt || 0).getTime();
    const existingIndex = result.findIndex(existing => {
      const existingTime = new Date(existing.startedAt || 0).getTime();
      const sameUser = (shift.username && existing.username && shift.username.toLowerCase() === existing.username.toLowerCase()) ||
                       (shift.operatorId && existing.operatorId && shift.operatorId.toLowerCase() === existing.operatorId.toLowerCase()) ||
                       (shift.operator && existing.operator && shift.operator.toLowerCase() === existing.operator.toLowerCase());
      return sameUser && !isNaN(shiftTime) && !isNaN(existingTime) && Math.abs(shiftTime - existingTime) < 180000;
    });

    if (existingIndex === -1) {
      const copy = { ...shift };
      // Auto-cerrar jornadas huérfanas que superen el límite máximo de horas
      if (!copy.endedAt && isShiftExpired(copy)) {
        copy.endedAt = new Date(shiftTime + (8 * 3600000)).toISOString();
      }
      result.push(copy);
    } else {
      const existing = result[existingIndex];
      if (shift.endedAt && !existing.endedAt) existing.endedAt = shift.endedAt;
      if (!existing.operator && shift.operator) existing.operator = shift.operator;
      if (!existing.operatorId && shift.operatorId) existing.operatorId = shift.operatorId;
    }
  }
  return result;
}

function getActiveShift(user = currentUser) {
  if (!user) return null;
  const userAuthId = user.authId || user.id;
  const profile = [...remoteProfiles.values()].find(p => p.initials === user.initials);
  const profileId = profile?.id;

  return state.shifts.find(shift => {
    if (shift.endedAt && String(shift.endedAt).trim() !== '' && shift.endedAt !== 'null' && shift.endedAt !== 'undefined') {
      return false;
    }
    // Si la jornada empezó hace más de 14 horas, no se considera activa bajo ninguna circunstancia
    if (isShiftExpired(shift)) {
      return false;
    }
    return (userAuthId && shift.operatorId === userAuthId) ||
           (profileId && shift.operatorId === profileId) ||
           (user.username && (shift.username === user.username || shift.operatorId === user.username)) ||
           (user.initials && shift.operatorId === user.initials) ||
           (shift.username && (shift.username === user.username || shift.username === user.name || shift.username === user.email || shift.username === user.authEmail)) ||
           (shift.operator && (shift.operator === user.name || shift.operator === user.username));
  }) || null;
}

function lastShiftFor(username) {
  return state.shifts.filter(shift => shift.username === username).sort((a, b) => new Date(b.startedAt || 0) - new Date(a.startedAt || 0))[0] || null;
}

function latestShiftFor(user) {
  if (!user) return null;
  const userAuthId = user.authId || user.id;
  const profile = [...remoteProfiles.values()].find(item => item.initials === user.initials);
  const profileId = profile?.id;

  return state.shifts.filter(shift => {
    return (userAuthId && shift.operatorId === userAuthId) ||
           (profileId && shift.operatorId === profileId) ||
           (shift.username && (shift.username === user.username || shift.username === user.name || shift.username === user.email || shift.username === user.authEmail));
  }).sort((a, b) => new Date(b.startedAt || 0) - new Date(a.startedAt || 0))[0] || null;
}

function formatDateTime(value) {
  if (!value) return '—';
  return new Intl.DateTimeFormat('es-EC', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(value));
}

function formatRescheduleDate(value) {
  if (!value) return '';
  try {
    const d = new Date(value);
    if (isNaN(d.getTime())) return String(value);
    return new Intl.DateTimeFormat('es-EC', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(d);
  } catch (e) {
    return String(value);
  }
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
          <span class="login-badge-pill">PLATAFORMA DE MONITOREO</span>
          <h1 class="login-tool-title">
            <span class="title-gradient">Sistema de Gestión</span>
            <span class="title-sub-gradient">Call Center GIZ</span>
          </h1>
          <p class="login-sub-text">Selecciona tu usuario para ingresar de una sola:</p>
        </div>

        <div class="login-user-list">
          <!-- Josselyn Carvajal -->
          <button type="button" class="user-quick-btn" onclick="doOneClickLogin('josselyn')">
            <div class="user-quick-avatar avatar-jc">JC</div>
            <div class="user-quick-info">
              <span class="user-quick-role">Operadora Call Center</span>
              <div class="user-quick-name">Josselyn Carvajal</div>
            </div>
            <span class="user-quick-arrow">➜</span>
          </button>

          <!-- Darwin Olivo -->
          <button type="button" class="user-quick-btn" onclick="doOneClickLogin('darwin')">
            <div class="user-quick-avatar avatar-do">DO</div>
            <div class="user-quick-info">
              <span class="user-quick-role">Operador Call Center</span>
              <div class="user-quick-name">Darwin Olivo</div>
            </div>
            <span class="user-quick-arrow">➜</span>
          </button>

          <!-- Supervisor Clima Social (Protegido con contraseña Clima.2026) -->
          <div class="supervisor-quick-wrap">
            <button type="button" class="user-quick-btn" onclick="toggleSupervisorPassword()">
              <div class="user-quick-avatar avatar-cs">CS</div>
              <div class="user-quick-info">
                <span class="user-quick-role">Supervisión & Coordinación</span>
                <div class="user-quick-name">Clima Social</div>
              </div>
              <span class="user-quick-arrow" id="supervisor-arrow">🔒</span>
            </button>
            <div id="supervisor-pwd-box" class="supervisor-pwd-box" style="display:none;">
              <div class="pwd-input-wrap">
                <input type="password" id="supervisor-pass" placeholder="Ingresa contraseña" autocomplete="current-password" onkeydown="if(event.key==='Enter') submitSupervisorLogin()" />
                <button type="button" class="pwd-submit-btn" onclick="submitSupervisorLogin()">Ingresar</button>
              </div>
            </div>
          </div>
        </div>

        <div class="login-footer-simple">
          <span class="live-dot"></span>
          <span>${isSupabase ? 'Sincronizado con Supabase' : 'Conectado a Base Servidor GIZ'}</span>
        </div>

        <div class="login-tech-signature">
          <img src="/logo-equipo-tecnico-horizontal.svg" alt="Clima Social · Equipo Técnico" class="login-tech-logo" />
        </div>
      </div>
    </div>
  `;
}

window.toggleSupervisorPassword = function() {
  const box = document.getElementById('supervisor-pwd-box');
  const arrow = document.getElementById('supervisor-arrow');
  if (!box) return;
  const isHidden = box.style.display === 'none';
  box.style.display = isHidden ? 'block' : 'none';
  if (arrow) arrow.textContent = isHidden ? '▼' : '🔒';
  if (isHidden) {
    const input = document.getElementById('supervisor-pass');
    if (input) setTimeout(() => input.focus(), 80);
  }
};

window.submitSupervisorLogin = function() {
  const input = document.getElementById('supervisor-pass');
  const val = (input?.value || '').trim();
  if (val !== 'Clima.2026') {
    showToast('Contraseña incorrecta');
    if (input) {
      input.style.borderColor = '#dc2626';
      input.focus();
      input.select();
    }
    return;
  }
  const user = appUsers.find(item => item.username === 'supervisor');
  if (!user) return;
  currentUser = user;
  sessionStorage.setItem('giz-current-user', JSON.stringify(user));
  activeView = 'dashboard';
  selectedOutcome = '';
  render();
};

window.doOneClickLogin = async function(username) {
  if (username === 'supervisor') {
    toggleSupervisorPassword();
    return;
  }
  const user = appUsers.find(item => item.username === username);
  if (!user) return;

  currentUser = user;
  sessionStorage.setItem('giz-current-user', JSON.stringify(user));
  activeView = 'operator';
  selectedOutcome = '';

  // Sincronizar inmediatamente con el servidor central para tener los contactos más frescos
  await window.syncStateFromServer(true);
  const assigned = visibleContacts();
  selectedContactId = firstActionable(assigned)?.id || state.contacts[0]?.id;
  render();
};

function renderLogin() {
  const login = document.getElementById('login-screen');
  const shell = document.getElementById('app-shell');
  login.hidden = false;
  login.innerHTML = loginScreen();
  shell.hidden = true;
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
      const barrio = extra.barrio || contact.parish || 'Durán';
      const canton = extra.canton || 'Rioverde';
      const provincia = extra.provincia || 'Esmeraldas';
      const courseName = extra.course_name || extra.organization || 'Salud Sexual y Reproductiva';
      const courseStartDate = extra.course_start_date || 'Junio 2025';
      const courseEndDate = extra.course_end_date || 'Julio 2025';
      const courseDates = extra.course_dates || (courseStartDate + ' – ' + courseEndDate);
      const courseRecency = extra.course_recency || 'Julio 2025 (Hace ~1 año)';
      const org = extra.organization || 'UNFPA, VME, FUDELA';
      const ref = extra.referencia || 'Mariana Oleas (asesora local GIZ Esmeraldas)';
      const base = extra.base_name || 'GIZ · OE1 - Salud Sexual y Reproductiva (Esmeraldas)';

      return {
        ...contact,
        id: contact.external_id || contact.id,
        remoteId: contact.id,
        name: contact.name,
        phone: contact.phone_normalized || contact.phone_raw || 'No tiene teléfono',
        phoneRaw: contact.phone_raw || '',
        phoneOther: extra.phone_other || '',
        email: extra.email || '',
        parish: barrio,
        barrio: barrio,
        canton: canton,
        provincia: provincia,
        location: canton + ' · ' + provincia,
        courseName: courseName,
        courseStartDate: courseStartDate,
        courseEndDate: courseEndDate,
        courseDates: courseDates,
        courseRecency: courseRecency,
        organization: org,
        referencia: ref,
        baseName: base,
        status: remoteStatus(contact.current_status),
        attempts: contact.attempt_count || 0,
        last: contact.last_attempt_at ? formatDateTime(contact.last_attempt_at) : 'Sin gestión',
        lastAttemptAt: contact.last_attempt_at || null,
        operator: operator?.initials || ''
      };
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
  const syncStatusEl = document.querySelector('.sync-status');
  if (syncStatusEl) syncStatusEl.remove();
}

function operatorSidebar() {
  const assigned = visibleContacts();
  return `
    <div class="brand">
      <div class="brand-header-simple">
        <img class="brand-logo-round" src="/logo-icon-official.png" alt="Clima Social" />
        <div class="brand-text-simple">
          <strong>Clima Social</strong>
          <span class="brand-sub-discreet">Call Center GIZ</span>
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
      <div class="tech-signature-sidebar">
        <img src="/logo-equipo-tecnico-dark.png" alt="Clima Social · Equipo Técnico" class="tech-signature-sidebar-logo" />
      </div>
    </div>
  `;
}

function supervisorSidebar() {
  const progress = percentage(managedCount(), state.contacts.length);
  return `
    <div class="brand">
      <div class="brand-header-simple">
        <img class="brand-logo-round" src="/logo-icon-official.png" alt="Clima Social" />
        <div class="brand-text-simple">
          <strong>Clima Social</strong>
          <span class="brand-sub-discreet">Call Center GIZ</span>
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
        <span>Control de jornadas</span>
      </button>
      <button class="nav-item ${activeView === 'history' ? 'active' : ''}" data-view="history">
        <span class="nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
        </span>
        <span>Historial global</span>
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
      <div class="tech-signature-sidebar">
        <img src="/logo-equipo-tecnico-dark.png" alt="Clima Social · Equipo Técnico" class="tech-signature-sidebar-logo" />
      </div>
    </div>
  `;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && saved.version === DEMO_VERSION && Array.isArray(saved.contacts) ? saved : { version: DEMO_VERSION, contacts: demoContacts, history: [], shifts: [] };
  } catch { return { version: DEMO_VERSION, contacts: demoContacts, history: [], shifts: [] }; }
}

let syncTimer = null;
function debouncedServerSync() {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    if (!currentUser || !currentUser.role) return;
    fetch('/api/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-role': currentUser.role
      },
      body: JSON.stringify({
        contacts: state.contacts,
        history: state.history,
        shifts: state.shifts
      })
    }).catch(e => console.warn('Sync notice:', e.message));
  }, 400);
}

function saveState() {
  state.version = DEMO_VERSION;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  debouncedServerSync();
}
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

  // Preservar foco, cursor y valores de cualquier campo de texto si el usuario está escribiendo o buscando
  let savedActiveElement = null;
  const activeEl = document.activeElement;
  if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
    savedActiveElement = {
      id: activeEl.id || null,
      datasetColumnSearch: activeEl.dataset?.columnSearch || null,
      className: activeEl.className || null,
      value: activeEl.value,
      start: typeof activeEl.selectionStart === 'number' ? activeEl.selectionStart : null,
      end: typeof activeEl.selectionEnd === 'number' ? activeEl.selectionEnd : null
    };
    if (activeEl.id === 'notes' && selectedContactId) {
      draftNotesByContact[selectedContactId] = activeEl.value;
    } else if (activeEl.id === 'reschedule-time' && selectedContactId) {
      draftRescheduleByContact[selectedContactId] = activeEl.value;
    } else if (activeEl.id === 'contact-search') {
      contactSearchQuery = activeEl.value;
    } else if (activeEl.id === 'operator-contact-search') {
      operatorSearchQuery = activeEl.value;
    } else if (activeEl.id === 'history-search') {
      historySearchQuery = activeEl.value;
    } else if (activeEl.id === 'shift-search') {
      shiftSearchQuery = activeEl.value;
    } else if (activeEl.dataset?.columnSearch) {
      columnSearchQueries[activeEl.dataset.columnSearch] = activeEl.value;
    }
  }

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

  // Restaurar foco y posición exacta del cursor sin interrupciones ni saltos
  if (savedActiveElement) {
    let targetEl = null;
    if (savedActiveElement.id) {
      targetEl = document.getElementById(savedActiveElement.id);
    } else if (savedActiveElement.datasetColumnSearch) {
      targetEl = document.querySelector(`[data-column-search="${savedActiveElement.datasetColumnSearch}"]`);
    }
    if (targetEl) {
      if (savedActiveElement.value !== undefined && targetEl.value !== savedActiveElement.value) {
        targetEl.value = savedActiveElement.value;
      }
      try {
        targetEl.focus();
        if (savedActiveElement.start !== null && typeof targetEl.setSelectionRange === 'function') {
          targetEl.setSelectionRange(savedActiveElement.start, savedActiveElement.end);
        }
      } catch (e) {}
    }
  }
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

    <footer class="system-footer-signature">
      <div class="system-footer-content">
        <img src="/logo-equipo-tecnico-horizontal.svg" alt="Clima Social · Equipo Técnico" class="system-footer-logo" />
        <div class="system-footer-text">
          <strong>Sistema de Monitoreo Telefónico & Evaluación de Campo</strong>
          <span>Procesamiento de datos & cartografía &bull; Programa ProCohesión GIZ</span>
        </div>
      </div>
      <div class="system-footer-meta">
        <span class="footer-badge">v2.4 &bull; 2026</span>
      </div>
    </footer>
  `;
}

function renderDashboard() {
  const total = state.contacts.length;
  const managed = managedCount();
  const effective = count('effective');
  const todayStr = new Intl.DateTimeFormat('es-EC', { dateStyle: 'full' }).format(new Date());
  const headerActions = `
    <div style="display:flex;gap:8px;align-items:center;">
      <button class="button-secondary" id="refresh-dashboard-hero-btn" type="button" style="display:flex;align-items:center;gap:6px;">
        <span class="live-dot" style="width:8px;height:8px;background:#10b981;border-radius:50%;display:inline-block;"></span>
        <span>↻ Actualizar datos</span>
      </button>
      <button class="button-primary" data-view-action="import" onclick="event.stopPropagation(); openImportView()"><span class="plus">+</span> Importar base</button>
    </div>
  `;
  return `${pageHeading(todayStr, 'Resumen de operación', 'Monitorea el avance de tu equipo y mantén el ritmo de la campaña.', headerActions)}
    <section class="metric-grid">
      ${metricCard('Total de contactos', total.toLocaleString('es-EC'), 'base activa', '')}
      ${metricCard('Contactos gestionados', managed.toLocaleString('es-EC'), `${percentage(managed, total)} de la base`, 'trend-up')}
      ${metricCard('Llamadas efectivas', effective.toLocaleString('es-EC'), managed ? `${percentage(effective, managed)} de efectividad` : '0%', 'trend-up')}
      ${metricCard('Avance de campaña', percentage(managed, total), 'Meta: 100%', 'trend-up')}
    </section>
    <section class="dashboard-grid">
      <article class="card"><div class="card-header"><div><h2 class="card-title">Ritmo de gestión</h2><p class="card-subtitle">Contactos gestionados durante la semana</p></div><select class="range-select" aria-label="Rango de gráfica"><option>Esta semana</option><option>Este mes</option></select></div>${barChart()} </article>
      <article class="card donut-card"><div class="card-header"><div><h2 class="card-title">Estado de la campaña</h2><p class="card-subtitle">Distribución de contactos</p></div></div><div class="donut-area"><div class="donut"><div class="donut-center"><strong>${percentage(managed, total)}</strong><span>AVANCE</span></div></div><div class="status-legend">${statusLegend('effective', 'Efectivas', effective)}${statusLegend('pending', 'Pendientes', total - managed)}${statusLegend('unmanaged', 'Sin gestionar', Math.max(0, total - managed))}</div></div><a class="card-footer-link" href="#" data-view-action="contacts">Ver todos los contactos <span>→</span></a></article>
    </section>
    <section class="bottom-grid"><article class="card"><div class="card-header"><div><h2 class="card-title">Productividad por operador/a</h2><p class="card-subtitle">Rendimiento de hoy · 2 operadores</p></div><button class="button-secondary" data-view-action="history">Ver reporte</button></div>${operatorTable()}</article><article class="card"><div class="card-header"><div><h2 class="card-title">Actividad reciente</h2><p class="card-subtitle">Últimas acciones del equipo</p></div></div>${activityList()}</article></section>`;
}

function metricCard(label, value, note, className) { return `<article class="metric-card"><div class="metric-label">${label}</div><div class="metric-value">${value}</div><div class="metric-foot"><span class="${className}">${className ? '↗' : '·'}</span><span class="metric-note">${note}</span></div></article>`; }
function statusLegend(color, label, value) { return `<div class="status-item"><i class="${color}"></i><div>${label}<strong>${value.toLocaleString('es-EC')}</strong></div></div>`; }
function barChart() {
  const values = [44, 62, 53, 78, 67, 82, 59]; const labels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Hoy'];
  return `<div class="chart-wrap"><div class="chart"><div class="chart-axis"><span>200</span><span>100</span><span>0</span></div>${values.map((value, index) => `<div class="bar-group"><div class="bar-stack"><span class="bar secondary" style="height:${Math.max(9, value * .86)}%"></span><span class="bar ${index === 6 ? 'primary' : ''}" style="height:${value}%"></span></div><span class="bar-label">${labels[index]}</span></div>`).join('')}</div><div class="legend"><span><i class="legend-main"></i> Gestionados</span><span><i class="legend-secondary"></i> Meta diaria</span></div></div>`;
}

function operatorTable() { return `<div class="table-wrap"><table class="data-table"><thead><tr><th>Operador/a</th><th>Gestionados</th><th>Avance</th><th>Efectivas</th><th>Actividad</th></tr></thead><tbody>${appUsers.filter(user => user.role === 'operator').map(user => { const assigned = state.contacts.filter(contact => contact.operator === user.initials); const managed = managedCount(assigned); const effective = assigned.filter(contact => contact.status === 'effective').length; const active = Boolean(getActiveShift(user)); return `<tr><td><div class="operator-cell"><div class="small-avatar">${user.initials}</div><div><strong>${user.name}</strong><span>Operador/a</span></div></div></td><td><strong>${managed}</strong></td><td><div class="progress-cell"><div class="row-progress"><span style="width:${percentage(managed, assigned.length)}"></span></div><span>${percentage(managed, assigned.length)}</span></div></td><td><strong>${effective}</strong></td><td><span class="status-pill ${active ? 'on' : 'off'}">${active ? 'En jornada' : 'Sin iniciar'}</span></td></tr>`; }).join('')}</tbody></table></div>`; }

function activityList() {
  const items = state.history.slice(0, 6).map(item => {
    const contactObj = getContact(item.id || item.contactId);
    return {
      icon: item.result === 'effective' ? '✓' : item.result === 'no-answer' ? '◌' : item.result === 'pending' || item.result === 'callback' ? '◷' : '•',
      resultClass: item.result || 'pending',
      title: outcomeLabels[item.result] || item.result,
      contactName: contactObj?.name || item.contact || item.id,
      phone: contactObj?.phone || contactObj?.phoneRaw || '',
      operator: item.operator || 'Operador/a',
      time: item.date || 'Reciente',
      notes: item.notes || ''
    };
  });

  if (!items.length) {
    return `
      <div class="empty-state-activity">
        <div class="empty-icon-bubble">📡</div>
        <h4>Sin llamadas registradas aún</h4>
        <p>Cuando los operadores comiencen a gestionar contactos en vivo, los movimientos recientes aparecerán aquí automáticamente.</p>
      </div>
    `;
  }

  return `
    <div class="activity-feed-list">
      ${items.map(item => `
        <div class="activity-feed-item result-${item.resultClass}">
          <div class="activity-feed-badge result-${item.resultClass}">
            <span>${item.icon}</span>
          </div>
          <div class="activity-feed-content">
            <div class="activity-feed-title-line">
              <span class="activity-feed-outcome result-${item.resultClass}">${escapeHtml(item.title)}</span>
              <time class="activity-feed-time">${escapeHtml(item.time)}</time>
            </div>
            <div class="activity-feed-contact-line">
              <strong>${escapeHtml(item.contactName)}</strong>
              ${item.phone ? `<span class="activity-phone">📞 ${escapeHtml(item.phone)}</span>` : ''}
              <span class="activity-operator-tag">· ${escapeHtml(item.operator)}</span>
            </div>
            ${item.notes ? `<div class="activity-feed-note">💬 ${escapeHtml(item.notes)}</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

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
  return `${pageHeading('Jornada de hoy', `Hola, ${escapeHtml(currentUser.name.split(' ')[0])}`, `${assigned.length} contactos asignados · ${managed} ya gestionados.`, '<button class="button-secondary" id="end-shift">Finalizar jornada</button>')}<div class="shift-live-note"><span class="live-dot"></span> Jornada iniciada ${formatDateTime(activeShift.startedAt)} · Tiempo transcurrido: ${formatDuration(activeShift.startedAt)}</div><div class="operator-summary"><div><span>Asignados</span><strong>${assigned.length}</strong></div><div><span>Gestionados</span><strong>${managed}</strong></div><div><span>Pendientes</span><strong>${assigned.filter(item => item.status === 'pending' || item.status === 'no-answer').length}</strong></div></div><section class="operator-layout"><article class="card operator-card"><div class="contact-top"><div><small>CONTACTO ${escapeHtml(contact.id)} · INTENTO ${contact.attempts + 1}</small><h2>${escapeHtml(contact.name)}</h2><p>${escapeHtml(contact.parish)} · ${escapeHtml(contact.location)}</p></div><div class="contact-number">${escapeHtml(contact.phone)}</div></div><div class="contact-body"><div class="info-grid"><div class="info-item"><label>Identificador</label><strong>${escapeHtml(contact.id)}</strong></div><div class="info-item"><label>Última gestión</label><strong>${escapeHtml(contact.last)}</strong></div><div class="info-item"><label>Estado actual</label><strong class="table-status ${contact.status}">${statusLabels[contact.status] || 'Pendiente'}</strong></div><div class="info-item"><label>Asignado a</label><strong>${escapeHtml(currentUser.name)}</strong></div></div><div class="call-actions"><h3>Resultado de la llamada</h3><div class="outcome-grid"><button class="outcome-button green ${selectedOutcome === 'effective' ? 'selected' : ''}" data-outcome="effective">✓ Efectiva</button><button class="outcome-button ${selectedOutcome === 'pending' ? 'selected' : ''}" data-outcome="pending">◷ Pendiente</button><button class="outcome-button ${selectedOutcome === 'no-answer' ? 'selected' : ''}" data-outcome="no-answer">◌ No contesta</button><button class="outcome-button red ${selectedOutcome === 'wrong' ? 'selected' : ''}" data-outcome="wrong">× Número incorrecto</button><button class="outcome-button ${selectedOutcome === 'pending' ? 'selected' : ''}" data-outcome="pending">↻ Reintentar</button></div><label class="notes-label" for="notes">Observaciones</label><textarea class="notes-input" id="notes" placeholder="Escribe aquí cualquier detalle relevante...">${escapeHtml(draftNotesByContact[contact.id] !== undefined ? draftNotesByContact[contact.id] : '')}</textarea><div class="save-row"><small>Se registra operador, fecha, hora e intento.</small><button class="button-primary" id="save-call" ${selectedOutcome ? '' : 'disabled'}>Guardar gestión <span>→</span></button></div></div></div></article><article class="card queue-card"><div class="card-header"><div><h2 class="card-title">Mis contactos</h2><p class="card-subtitle">Reintentos y contactos por llamar</p></div><span class="status-pill on">${assigned.length} total</span></div>${renderOperatorQueue(assigned, contact)}</article></section>`;
}

function renderContactColumn(title, description, items, tone, selectedContact) {
  const currentQuery = columnSearchQueries[tone] || '';
  return `<section class="contact-column ${tone}"><div class="contact-column-header"><div><h2>${title}</h2><p>${description}</p></div><strong>${items.length}</strong></div><div class="column-search-wrap"><input class="column-search" data-column-search="${tone}" type="search" placeholder="Buscar por nombre o teléfono..." value="${escapeHtml(currentQuery)}" aria-label="Buscar en ${title}" autocomplete="off" /></div><div class="contact-column-list">${items.length ? items.map(item => `<button class="contact-board-card ${selectedContact && item.id === selectedContact.id ? 'selected' : ''}" data-contact-id="${item.id}"><div class="contact-board-card-top"><span class="contact-board-initials">${initials(item.name)}</span><span class="contact-board-status">${item.rescheduledFor ? '⏰ Reprogramado' : (item.attempts ? `${item.attempts} intento${item.attempts === 1 ? '' : 's'}` : 'Nuevo')}</span></div><strong>${escapeHtml(item.name)}</strong><span style="font-family:var(--font-mono);font-size:11.5px;color:#10b981;font-weight:700;">📞 ${escapeHtml(item.phone)}</span><div class="card-course-row"><span class="course-code-pill">${escapeHtml(item.courseCode || 'GIZ')}</span><span class="card-course-name" title="${escapeHtml(item.courseName || '')}">${escapeHtml(item.courseName || 'GIZ')}</span></div><small style="color:var(--text-muted);display:block;margin-top:2px;">📍 ${escapeHtml(item.canton ? `${item.canton} · ` : '')}${escapeHtml(item.barrio || item.parish || '')}</small>${item.rescheduledFor ? `<span class="card-rescheduled-badge">⏰ ${escapeHtml(formatRescheduleDate(item.rescheduledFor))}</span>` : ''}</button>`).join('') : '<div class="column-empty">No hay contactos aquí.</div>'}</div></section>`;
}

function contactGreetingName(contact) {
  const name = String(contact.name || '').trim();
  if (!name || /^no registra$/i.test(name)) return '';
  return firstName(name);
}

function renderSelectedContact(contact) {
  if (!contact) return '<article class="card selected-contact-card"><div class="empty-state">Selecciona un contacto de las bandejas inferiores para comenzar.</div></article>';

    const barrioStr = contact.barrio || contact.parish || 'Sector urbano';
  const cantonStr = contact.canton || 'Territorio GIZ';
  const provinciaStr = contact.provincia || 'Ecuador';
  const courseStr = contact.courseName || 'Curso ProCohesión GIZ';
  const datesStr = contact.courseDates || 'Ciclo 2025';
  const startDateStr = contact.courseStartDate || '2025';
  const endDateStr = contact.courseEndDate || '2025';
  const recencyStr = contact.courseEndDate ? `Finalizó: ${contact.courseEndDate}` : '2025';
  const orgStr = contact.organization || 'Cooperación Alemana - GIZ';
  const refStr = contact.referencia || 'Equipo Técnico Clima Social / GIZ';

  return `
    <div class="active-call-grid">
      <!-- 1. TARJETA DEL CONTACTO & REGISTRO DE LLAMADA (IZQUIERDA) -->
      <article class="card selected-contact-card">
        <!-- Cabecera del Contacto con Teléfono y Acciones -->
        <div class="contact-hero-header">
          <div class="contact-hero-info">
            <div class="contact-meta-tags">
              <span class="tag-code">COD: ${escapeHtml(contact.id)}</span>
              ${contact.courseCode ? `<span class="tag-course-code">🎓 CURSO ${escapeHtml(contact.courseCode)}</span>` : ''}
              <span class="tag-attempt">Intento ${contact.attempts + 1} de ${MAX_ATTEMPTS}</span>
              <span class="table-status ${contact.status}">${contactStatusLabel(contact)}</span>
              <span class="tag-recency">📅 Culminó: ${escapeHtml(contact.courseEndDate || '2025')}</span>
            </div>
            <h2 class="contact-hero-name">${escapeHtml(contact.name)}</h2>
            <div class="contact-location-line">
              <span class="loc-pin">📍</span>
              <span>Barrio ${escapeHtml(barrioStr)} &bull; ${escapeHtml(cantonStr)}, ${escapeHtml(provinciaStr)}</span>
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
          <!-- Banner de Acción Principal: KoboToolbox en Vivo -->
          <div class="kobo-action-banner">
            <div class="kobo-banner-text">
              <span class="kobo-banner-badge">ENCUESTA EN VIVO &bull; 4 A 5 MIN</span>
              <h3>Formulario Oficial de Evaluación KoboToolbox</h3>
              <p>Abre la encuesta para registrar las respuestas en tiempo real durante la llamada.</p>
            </div>
            <a class="kobo-launch-btn" href="${SURVEY_URL}" target="_blank" rel="noreferrer">
              <span>📋 Abrir Kobo en Vivo</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          </div>

          <!-- Ficha de Datos en 2 Columnas (Curso y Contacto) -->
          <div class="contact-details-panels">
            <!-- Columna 1: Curso GIZ -->
            <div class="detail-panel">
              <div class="panel-title">
                <span class="panel-icon">🎓</span>
                <strong>Curso & Formación GIZ</strong>
              </div>
              <div class="detail-items-list">
                <div class="detail-row">
                  <span class="detail-lbl">Código / N.º:</span>
                  <span class="detail-val"><span class="course-code-pill-lg">🎓 ${escapeHtml(contact.courseCode || 'S/C')}</span></span>
                </div>
                <div class="detail-row">
                  <span class="detail-lbl">Curso:</span>
                  <span class="detail-val highlight"><strong>${escapeHtml(courseStr)}</strong></span>
                </div>
                <div class="detail-row">
                  <span class="detail-lbl">Cantón:</span>
                  <span class="detail-val"><strong>${escapeHtml(cantonStr)}</strong></span>
                </div>
                <div class="detail-row">
                  <span class="detail-lbl">Ubicación:</span>
                  <span class="detail-val">${escapeHtml(barrioStr)}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-lbl">Inicio:</span>
                  <span class="detail-val">${escapeHtml(startDateStr)}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-lbl">Finalización:</span>
                  <span class="detail-val"><strong>${escapeHtml(endDateStr)}</strong></span>
                </div>
                <div class="detail-row">
                  <span class="detail-lbl">Periodo:</span>
                  <span class="detail-val">${escapeHtml(datesStr)}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-lbl">Entidad:</span>
                  <span class="detail-val">${escapeHtml(orgStr)}</span>
                </div>
              </div>
            </div>

            <!-- Columna 2: Contacto & Referente GIZ -->
            <div class="detail-panel">
              <div class="panel-title">
                <span class="panel-icon">👤</span>
                <strong>Contacto & Referencia</strong>
              </div>
              <div class="detail-items-list">
                <div class="detail-row">
                  <span class="detail-lbl">Teléfono:</span>
                  <span class="detail-val" style="font-family:var(--font-mono);font-weight:800;color:#10b981;font-size:14px;">📞 ${escapeHtml(contact.phone)}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-lbl">Otros Tel.:</span>
                  <span class="detail-val">${escapeHtml(contact.phoneOther || 'Ninguno adicional')}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-lbl">Correo:</span>
                  <span class="detail-val">${escapeHtml(contact.email || 'No registra correo')}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-lbl">Asesor GIZ:</span>
                  <span class="detail-val" style="color:var(--text-main);font-weight:700;">${escapeHtml(refStr)}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-lbl">Última gest.:</span>
                  <span class="detail-val">${escapeHtml(contact.last)}</span>
                </div>
              </div>
            </div>
          </div>

          ${(() => {
            const contactAttempts = (state.history || [])
              .filter(h => h.id === contact.id || h.contactId === contact.id)
              .sort((a, b) => Number(a.attempt || 0) - Number(b.attempt || 0));

            if (!contactAttempts.length && (!contact.notes && !contact.rescheduledFor)) return '';

            return `
              <div class="previous-attempts-card">
                <div class="panel-title">
                  <span class="panel-icon">📝</span>
                  <strong>Historial & Observaciones de Intentos Anteriores</strong>
                  <span class="previous-attempts-count">${contactAttempts.length ? `${contactAttempts.length} intento${contactAttempts.length === 1 ? '' : 's'}` : `${contact.attempts} intentos`}</span>
                </div>
                <div class="attempts-thread">
                  ${contactAttempts.length ? contactAttempts.map((att, idx) => `
                    <div class="attempt-card outcome-${att.result}">
                      <div class="attempt-header">
                        <span class="attempt-pill outcome-${att.result}">Intento #${att.attempt || (idx + 1)}</span>
                        <span class="attempt-outcome-text outcome-${att.result}">
                          ${att.result === 'effective' ? '✓ Encuesta completada' : 
                            att.result === 'pending' || att.result === 'rescheduled' || att.result === 'callback' ? '◷ Reprogramada / Reintento' :
                            att.result === 'no-answer' ? '◌ No contesta' :
                            att.result === 'wrong' ? '× Número incorrecto' :
                            att.result === 'refused' ? '⊘ Rechazó participar' : (outcomeLabels[att.result] || att.result)}
                        </span>
                        ${att.operator ? `<span style="font-size:11px;color:var(--text-muted);font-weight:600;">· ${escapeHtml(att.operator)}</span>` : ''}
                        ${att.date ? `<time class="attempt-timestamp">${escapeHtml(att.date)}</time>` : ''}
                      </div>
                      ${att.rescheduledFor ? `
                        <div class="attempt-rescheduled-box">
                          <span>⏰</span>
                          <span>Reprogramado para: <strong class="attempt-rescheduled-time">${escapeHtml(formatRescheduleDate(att.rescheduledFor))}</strong></span>
                        </div>
                      ` : ''}
                      ${att.notes ? `
                        <div class="attempt-note-box">
                          <span class="note-icon">💬</span>
                          <span class="note-text">${escapeHtml(att.notes)}</span>
                        </div>
                      ` : ''}
                    </div>
                  `).join('') : `
                    <div class="attempt-card outcome-${contact.status}">
                      <div class="attempt-header">
                        <span class="attempt-pill outcome-${contact.status}">Último intento (${contact.attempts})</span>
                        <span class="attempt-outcome-text outcome-${contact.status}">${outcomeLabels[contact.status] || contact.status}</span>
                        ${contact.last ? `<time class="attempt-timestamp">${escapeHtml(contact.last)}</time>` : ''}
                      </div>
                      ${contact.rescheduledFor ? `
                        <div class="attempt-rescheduled-box">
                          <span>⏰</span>
                          <span>Reprogramado para: <strong class="attempt-rescheduled-time">${escapeHtml(formatRescheduleDate(contact.rescheduledFor))}</strong></span>
                        </div>
                      ` : ''}
                      ${contact.notes ? `
                        <div class="attempt-note-box">
                          <span class="note-icon">💬</span>
                          <span class="note-text">${escapeHtml(contact.notes)}</span>
                        </div>
                      ` : ''}
                    </div>
                  `}
                </div>
              </div>
            `;
          })()}

          <!-- Registro de Resultado de la Llamada -->
          <div class="call-actions-clean">
            <div class="actions-header-clean">
              <h3>Resultado de la llamada</h3>
              <span>Selecciona el estado y guarda</span>
            </div>

            <div class="outcome-grid-clean">
              <button type="button" class="outcome-btn-clean outcome-effective ${selectedOutcome === 'effective' ? 'active' : ''}" data-outcome="effective" title="Encuesta completada">
                <span class="btn-indicator">✓</span>
                <span class="btn-label">Completada</span>
              </button>
              <button type="button" class="outcome-btn-clean outcome-pending ${selectedOutcome === 'pending' ? 'active' : ''}" data-outcome="pending" title="Reprogramada / Volver a llamar">
                <span class="btn-indicator">◷</span>
                <span class="btn-label">Reprogramar</span>
              </button>
              <button type="button" class="outcome-btn-clean outcome-no-answer ${selectedOutcome === 'no-answer' ? 'active' : ''}" data-outcome="no-answer" title="No contesta">
                <span class="btn-indicator">◌</span>
                <span class="btn-label">No contesta</span>
              </button>
              <button type="button" class="outcome-btn-clean outcome-refused ${selectedOutcome === 'refused' ? 'active' : ''}" data-outcome="refused" title="Rechaza participar">
                <span class="btn-indicator">⊘</span>
                <span class="btn-label">Rechazó</span>
              </button>
              <button type="button" class="outcome-btn-clean outcome-wrong ${selectedOutcome === 'wrong' ? 'active' : ''}" data-outcome="wrong" title="Número incorrecto / equivocado">
                <span class="btn-indicator">×</span>
                <span class="btn-label">Incorrecto</span>
              </button>
            </div>

            <div id="reschedule-box" class="reschedule-box-clean ${selectedOutcome === 'pending' ? 'show' : ''}">
              <label for="reschedule-time">⏰ Fecha y hora acordada para volver a llamar (opcional):</label>
              <input type="datetime-local" id="reschedule-time" value="${escapeHtml(draftRescheduleByContact[contact.id] !== undefined ? draftRescheduleByContact[contact.id] : (contact.rescheduledFor || ''))}" />
            </div>

            <div class="notes-block">
              <label for="notes">Observaciones / Novedades de la llamada</label>
              <textarea id="notes" class="notes-clean" placeholder="Escribe aquí cualquier detalle de la llamada (ej. acordó llamar a las 16h00, o encuesta completada)...">${escapeHtml(draftNotesByContact[contact.id] !== undefined ? draftNotesByContact[contact.id] : '')}</textarea>
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

      <!-- 2. TARJETA DEL GUION OFICIAL DE LLAMADA (DERECHA) -->
      <article class="card script-side-card">
        <div class="script-head-clean">
          <div class="script-head-title">
            <span>🗣️</span>
            <strong>Guion Oficial de Llamadas &bull; ProCohesión GIZ</strong>
          </div>
          <span class="recency-pill">⏱️ Duración: 4 a 5 min</span>
        </div>

        <!-- Pasos Principales de la Conversación -->
        <div class="script-steps-list">
          <!-- Momento 1: Verificación de Identidad -->
          <div class="script-step-item">
            <span class="step-num-badge">1. Identidad</span>
            <div class="script-step-text">
              "Buenos días/tardes, ¿me comunico con <strong>${escapeHtml(contact.name)}</strong>?"
            </div>
          </div>

          <!-- Momento 2: Presentación Institucional -->
          <div class="script-step-item">
            <span class="step-num-badge">2. Presentación</span>
            <div class="script-step-text">
              "Mi nombre es <strong>${escapeHtml(currentUser.name)}</strong>, le llamo de <strong>Clima Social</strong>. Estamos realizando un seguimiento para el <strong>Programa ProCohesión de la Cooperación Alemana - GIZ</strong>."
            </div>
          </div>

          <!-- Momento 3: Motivo del Contacto -->
          <div class="script-step-item">
            <span class="step-num-badge">3. Motivo</span>
            <div class="script-step-text">
              "Queremos invitarle a responder una breve encuesta sobre cómo ha aplicado los conocimientos adquiridos en el curso en el que participó: <strong>${escapeHtml(courseStr)}</strong>${contact.courseCode ? ` (Código <strong>${escapeHtml(contact.courseCode)}</strong>)` : ''}, facilitado por <strong>${escapeHtml(orgStr)}</strong> en <strong>${escapeHtml(cantonStr)}</strong>. Esta información nos permitirá conocer la utilidad de los procesos de formación y contribuir a mejorar el trabajo que realiza la GIZ junto con sus socios en territorio."
            </div>
          </div>

          <!-- Momento 4: Garantías Éticas y Duración -->
          <div class="script-step-item">
            <span class="step-num-badge">4. Ética y tiempo</span>
            <div class="script-step-text">
              "La encuesta es totalmente anónima y confidencial. No pediremos datos personales. Toma alrededor de <strong>4 a 5 minutos</strong>. ¿Me permite continuar?"
            </div>
          </div>
        </div>

        <!-- Respuestas y Situaciones (Momentos 5 a 8) -->
        <div class="script-cases-accordion">
          <div class="script-cases-header">
            <span>📋</span>
            <strong>Respuestas y manejo de situaciones</strong>
          </div>
          <div class="script-cases-grid">
            <div class="case-box case-accept">
              <strong>5. Si Acepta</strong>
              <span>"Perfecto, muchas gracias. Empezamos."</span>
            </div>
            <div class="case-box case-reschedule">
              <strong>5. Si Pospone / Reagenda</strong>
              <span>"Sin problema. ¿Qué horario le queda más conveniente para llamarle nuevamente?"</span>
            </div>
            <div class="case-box case-doubts">
              <strong>6. Si Manifiesta Dudas</strong>
              <span>"No se preocupe, solo queremos conocer su experiencia aplicando lo aprendido. Su información está protegida y es solo para fines de investigación."</span>
            </div>
            <div class="case-box case-refuse">
              <strong>7. Si Rechaza Participar</strong>
              <span>"Gracias por su tiempo. Que tenga un buen día."</span>
            </div>
            <div class="case-box case-close">
              <strong>8. Cierre de Encuesta</strong>
              <span>"Le agradezco mucho por su colaboración. Sus respuestas son de gran apoyo para el programa. Que tenga un excelente día."</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  `;
}

let operatorDateFilter = '';

function isActionableContact(contact) {
  if (!contact) return false;
  return contact.status === 'pending' || contact.status === 'no-answer';
}

function extractDateStr(dateVal, rawDateVal) {
  if (rawDateVal) {
    try {
      const d = new Date(rawDateVal);
      if (!isNaN(d.getTime())) {
        return new Intl.DateTimeFormat('es-EC', { timeZone: 'America/Guayaquil', day: '2-digit', month: '2-digit', year: 'numeric' }).format(d);
      }
    } catch {}
  }
  if (!dateVal) return '';
  const s = String(dateVal).trim();
  if (s.toLowerCase().startsWith('sin') || s.toLowerCase() === 'no' || s.toLowerCase() === '—') {
    return '';
  }
  if (s.toLowerCase().startsWith('hoy')) {
    return new Intl.DateTimeFormat('es-EC', { timeZone: 'America/Guayaquil', day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date());
  }
  if (s.toLowerCase().startsWith('ayer')) {
    return new Intl.DateTimeFormat('es-EC', { timeZone: 'America/Guayaquil', day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(Date.now() - 86400000));
  }
  const match = s.match(/\b\d{1,2}\/\d{1,2}\/\d{4}\b/);
  if (match) return match[0];
  return '';
}

function getContactLastDate(contact) {
  if (!contact || (contact.attempts || 0) === 0) return '';
  if (contact.lastAttemptAt) {
    const d = extractDateStr('', contact.lastAttemptAt);
    if (d && d !== 'Sin') return d;
  }
  if (contact.last) {
    const d = extractDateStr(contact.last);
    if (d && d !== 'Sin') return d;
  }
  return '';
}

function getOperatorActionableDates(contacts = []) {
  const dates = new Set();
  contacts.forEach(c => {
    if (isActionableContact(c) && (c.attempts || 0) > 0) {
      if (c.rescheduledFor) {
        const dResched = extractDateStr('', c.rescheduledFor);
        if (dResched && dResched !== 'Sin') dates.add(dResched);
      }
      const d = getContactLastDate(c);
      if (d && d !== 'Sin' && !d.toLowerCase().includes('sin')) {
        dates.add(d);
      }
    }
  });
  return [...dates].filter(Boolean).sort().reverse();
}

function isContactInOperatorDate(contact, dateFilter) {
  if (!contact) return false;
  if (!dateFilter || dateFilter === 'all') return true;

  if (dateFilter === 'uncalled') {
    return (contact.attempts || 0) === 0 && contact.status === 'pending';
  }

  if ((contact.attempts || 0) === 0) return false;

  const today = dayKey(new Date());
  const yesterday = dayKey(new Date(Date.now() - 86400000));
  const lastDate = getContactLastDate(contact);
  const reschedDate = contact.rescheduledFor ? extractDateStr('', contact.rescheduledFor) : '';
  const reschedDayKey = contact.rescheduledFor ? dayKey(contact.rescheduledFor) : '';

  if (dateFilter === 'today') {
    if (reschedDayKey === today || reschedDate === extractDateStr('', new Date())) return true;
    if (contact.lastAttemptAt && dayKey(contact.lastAttemptAt) === today) return true;
    const lastText = String(contact.last || '').toLowerCase();
    if (lastText.startsWith('hoy')) return true;
    return lastDate === today;
  }

  if (dateFilter === 'yesterday') {
    if (reschedDayKey === yesterday || reschedDate === extractDateStr('', new Date(Date.now() - 86400000))) return true;
    if (contact.lastAttemptAt && dayKey(contact.lastAttemptAt) === yesterday) return true;
    const lastText = String(contact.last || '').toLowerCase();
    if (lastText.startsWith('ayer')) return true;
    return lastDate === yesterday;
  }

  if (dateFilter === 'previous') {
    if (contact.status === 'pending' && (contact.attempts || 0) > 0) return true;
    return isPreviousDay(contact) && (contact.attempts || 0) > 0;
  }

  if (reschedDate && reschedDate === dateFilter) return true;
  if (lastDate && lastDate === dateFilter) return true;

  if (contact.lastAttemptAt) {
    const d = extractDateStr('', contact.lastAttemptAt);
    if (d === dateFilter) return true;
  }

  return false;
}

window.setOperatorDateFilter = function(val) {
  operatorDateFilter = val;
  const allAssigned = visibleContacts();
  const activeActionable = allAssigned.filter(isActionableContact);
  const filtered = val ? activeActionable.filter(item => isContactInOperatorDate(item, val)) : activeActionable;
  const action = firstActionable(filtered) || filtered[0];
  selectedContactId = action ? action.id : null;
  render();
};

window.clearOperatorDateFilter = function() {
  window.setOperatorDateFilter('');
};
let operatorCourseFilter = '';

window.setOperatorCourseFilter = function(val) {
  operatorCourseFilter = val;
  const allAssigned = visibleContacts();
  const activeActionable = allAssigned.filter(isActionableContact);
  let filtered = activeActionable;
  if (operatorDateFilter) filtered = filtered.filter(item => isContactInOperatorDate(item, operatorDateFilter));
  if (operatorCourseFilter) filtered = filtered.filter(item => item.courseCode === operatorCourseFilter || item.courseName === operatorCourseFilter);
  const action = firstActionable(filtered) || filtered[0];
  selectedContactId = action ? action.id : null;
  render();
};

window.clearOperatorCourseFilter = function() {
  window.setOperatorCourseFilter('');
};


function renderOperatorSearchResults(assigned, query) {
  const rawQ = (query || '').trim().toLowerCase();
  const phoneQ = rawQ.replace(/\D/g, '');
  if (!rawQ) return '';

  const matches = (assigned || []).filter(c => {
    const name = String(c.name || '').toLowerCase();
    const phone = String(c.phone || '').replace(/\D/g, '');
    const id = String(c.id || '').toLowerCase();
    const parish = String(c.parish || c.barrio || '').toLowerCase();
    const course = String(c.courseName || c.courseCode || '').toLowerCase();

    if (name.includes(rawQ)) return true;
    if (id.includes(rawQ)) return true;
    if (parish.includes(rawQ)) return true;
    if (course.includes(rawQ)) return true;
    if (phoneQ && phone.includes(phoneQ)) return true;
    return false;
  }).slice(0, 10);

  if (!matches.length) {
    return `<div class="operator-search-dropdown"><div class="search-no-results">Sin coincidencias para "${escapeHtml(query)}"</div></div>`;
  }

  return `
    <div class="operator-search-dropdown">
      <div class="search-dropdown-header">
        <span>${matches.length} contacto${matches.length === 1 ? '' : 's'} encontrado${matches.length === 1 ? '' : 's'}</span>
        <small>Haz clic para abrir</small>
      </div>
      ${matches.map(c => `
        <div class="operator-search-item ${selectedContactId === c.id ? 'active' : ''}" onclick="selectOperatorContactFromSearch('${escapeHtml(c.id)}')">
          <div class="search-item-left">
            <span class="search-avatar">${initials(c.name)}</span>
            <div class="search-item-info">
              <strong>${escapeHtml(c.name)}</strong>
              <span>📞 ${escapeHtml(c.phone)} · ${c.courseCode ? `<span class="search-course-code">${escapeHtml(c.courseCode)}</span> ` : ''}${escapeHtml(c.courseName || '')} · 📍 ${escapeHtml(c.canton || c.barrio || c.parish || 'S/N')}</span>
            </div>
          </div>
          <div class="search-item-right">
            <span class="search-status-pill ${c.status}">${statusLabels[c.status] || (c.attempts ? `${c.attempts} intento(s)` : 'Por llamar')}</span>
            <span class="search-id-badge">${escapeHtml(c.id)}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.selectOperatorContactFromSearch = function(contactId) {
  selectedContactId = contactId;
  selectedOutcome = '';
  operatorSearchQuery = '';
  const c = getContact(contactId);
  if (c) {
    if (operatorCourseFilter && c.courseCode !== operatorCourseFilter && c.courseName !== operatorCourseFilter) {
      operatorCourseFilter = '';
    }
    if (operatorDateFilter && !isContactInOperatorDate(c, operatorDateFilter)) {
      operatorDateFilter = '';
    }
  }
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.clearOperatorSearch = function() {
  operatorSearchQuery = '';
  render();
};

function updateOperatorSearchLive(query) {
  operatorSearchQuery = query;
  const container = document.getElementById('operator-search-results-container');
  const allAssigned = visibleContacts();
  if (container) {
    container.innerHTML = query ? renderOperatorSearchResults(allAssigned, query) : '';
  }

  const rawQ = query.trim().toLowerCase();
  const phoneQ = rawQ.replace(/\D/g, '');
  document.querySelectorAll('.contact-column').forEach(column => {
    const cards = [...column.querySelectorAll('.contact-board-card')];
    let visibleCount = 0;
    cards.forEach(card => {
      if (!rawQ) {
        card.hidden = false;
        visibleCount++;
        return;
      }
      const text = card.textContent.toLowerCase();
      const matchText = text.includes(rawQ);
      const matchPhone = phoneQ && text.replace(/\D/g, '').includes(phoneQ);
      const isVisible = matchText || matchPhone;
      card.hidden = !isVisible;
      if (isVisible) visibleCount++;
    });

    let empty = column.querySelector('.column-search-empty');
    if (!visibleCount && cards.length && rawQ) {
      if (!empty) {
        column.querySelector('.contact-column-list')?.insertAdjacentHTML('beforeend', '<div class="column-search-empty">No hay coincidencias en esta columna.</div>');
      }
    } else if (empty) {
      empty.remove();
    }
  });
}

function renderOperatorBoard() {
  const activeShift = getActiveShift();
  if (!activeShift) return `${pageHeading('Jornada de trabajo', `Hola, ${escapeHtml(currentUser.name.split(' ')[0])}`, 'Antes de comenzar tus llamadas debes registrar el inicio de tu jornada.', '')}<article class="card shift-start-card"><div class="shift-icon">◷</div><h2>¿Listo/a para comenzar?</h2><p>Al iniciar la jornada registraremos la fecha y hora. Cuando termines, recuerda finalizarla para calcular tu tiempo de trabajo.</p><button class="button-primary" id="start-shift">Iniciar jornada <span>→</span></button></article>`;

  const allAssigned = visibleContacts();
  const activeQueue = allAssigned.filter(isActionableContact);
  const operatorDates = getOperatorActionableDates(activeQueue);

  let filteredQueue = activeQueue;
  if (operatorDateFilter) {
    filteredQueue = filteredQueue.filter(item => isContactInOperatorDate(item, operatorDateFilter));
  }
  if (operatorCourseFilter) {
    filteredQueue = filteredQueue.filter(item => item.courseCode === operatorCourseFilter || item.courseName === operatorCourseFilter);
  }
  const operatorCourses = [...new Map(allAssigned.map(c => [c.courseCode || c.courseName, { code: c.courseCode, name: c.courseName, canton: c.canton }])).values()]
    .sort((a, b) => (a.code || '').localeCompare(b.code || ''));

  const selected = getContact(selectedContactId);
  const contact = (selected && allAssigned.some(item => item.id === selected.id))
    ? selected
    : (firstActionable(filteredQueue) || filteredQueue[0] || allAssigned[0] || null);

  if (contact && selectedContactId !== contact.id) {
    selectedContactId = contact.id;
  } else if (!contact && allAssigned.length === 0) {
    selectedContactId = null;
  }

  const normal = filteredQueue.filter(item => item.status === 'pending' && (item.attempts || 0) === 0);
  const pending = filteredQueue.filter(item => item.status === 'pending' && (item.attempts || 0) > 0);
  const noAnswer = filteredQueue.filter(item => item.status === 'no-answer');

  const uncalledCount = activeQueue.filter(c => (c.attempts || 0) === 0).length;
  const todayPendingCount = activeQueue.filter(c => isContactInOperatorDate(c, 'today')).length;
  const yesterdayPendingCount = activeQueue.filter(c => isContactInOperatorDate(c, 'yesterday')).length;
  const previousDayCount = activeQueue.filter(item => (item.attempts || 0) > 0 && isPreviousDay(item)).length;

  const specificDates = operatorDates.filter(d => {
    if (!d || d === dayKey(new Date()) || d === 'Sin') return false;
    return activeQueue.some(c => isContactInOperatorDate(c, d));
  });

  return `
    <!-- Barra Superior Compacta Integrada del Operador -->
    <header class="operator-compact-topbar">
      <!-- 1. Saludo & Live Shift Status -->
      <div class="topbar-user-block">
        <div class="topbar-greeting">
          <h2>Hola, ${escapeHtml(currentUser.name.split(' ')[0])}</h2>
          <div class="topbar-live-tag">
            <span class="live-dot"></span>
            <span>Jornada: <strong>${formatDuration(activeShift.startedAt)}</strong></span>
          </div>
        </div>
      </div>

      <!-- 2. Mini Métricas Integradas (Pills en Línea) -->
      <div class="topbar-metrics-pills">
        <div class="metric-pill pill-new" title="Contactos nuevos por llamar">
          <span class="pill-dot"></span>
          <span class="pill-lbl">Por llamar:</span>
          <strong>${normal.length}</strong>
        </div>
        <div class="metric-pill pill-pending" title="Contactos pendientes o reprogramados">
          <span class="pill-dot"></span>
          <span class="pill-lbl">Pendientes:</span>
          <strong>${pending.length}</strong>
        </div>
        <div class="metric-pill pill-no-answer" title="Contactos que no contestaron">
          <span class="pill-dot"></span>
          <span class="pill-lbl">No contestan:</span>
          <strong>${noAnswer.length}</strong>
        </div>
        <div class="metric-pill pill-total" title="Total de contactos en este filtro">
          <span class="pill-lbl">Total filtro:</span>
          <strong>${filteredQueue.length}</strong>
        </div>
      </div>

      <!-- 3. Buscador Directo por Nombre o Teléfono -->
      <div class="topbar-search-wrap">
        <div class="operator-search-input-box">
          <span class="search-ico">🔍</span>
          <input type="search" id="operator-contact-search" class="operator-search-input" placeholder="Buscar por nombre o teléfono..." value="${escapeHtml(operatorSearchQuery || '')}" autocomplete="off" />
          ${operatorSearchQuery ? `<button class="clear-filter-btn" onclick="clearOperatorSearch()" type="button" title="Limpiar búsqueda" style="margin-left:4px;">✕</button>` : ''}
        </div>
        <div id="operator-search-results-container">
          ${operatorSearchQuery ? renderOperatorSearchResults(allAssigned, operatorSearchQuery) : ''}
        </div>
      </div>

      <!-- 4. Selector de Filtro de Fecha & Finalizar Jornada -->
      <div class="topbar-actions-block">
        <div class="topbar-date-filter-wrap">
          <select id="operator-course-filter" class="filter-select-compact" onchange="setOperatorCourseFilter(this.value)" title="Filtrar por curso">
            <option value="" ${!operatorCourseFilter ? 'selected' : ''}>🎓 Todos los cursos (${allAssigned.length})</option>
            ${operatorCourses.map(c => {
              const countInCourse = allAssigned.filter(item => (item.courseCode === c.code || item.courseName === c.name)).length;
              const label = c.code ? `${c.code} · ${c.name}${c.canton ? ` (${c.canton})` : ''}` : `${c.name}${c.canton ? ` (${c.canton})` : ''}`;
              return `<option value="${escapeHtml(c.code || c.name)}" ${operatorCourseFilter === (c.code || c.name) ? 'selected' : ''}>${escapeHtml(label)} (${countInCourse})</option>`;
            }).join('')}
          </select>
          ${operatorCourseFilter ? `<button class="clear-filter-btn" onclick="clearOperatorCourseFilter()" type="button" title="Ver todos">✕</button>` : ''}
        </div>

        <div class="topbar-date-filter-wrap">
          <select id="operator-date-filter" class="filter-select-compact" onchange="setOperatorDateFilter(this.value)" title="Filtrar contactos por fecha">
            <option value="" ${!operatorDateFilter ? 'selected' : ''}>📂 Todos (${activeQueue.length})</option>
            ${uncalledCount > 0 ? `<option value="uncalled" ${operatorDateFilter === 'uncalled' ? 'selected' : ''}>🆕 Nuevos (${uncalledCount})</option>` : ''}
            ${todayPendingCount > 0 ? `<option value="today" ${operatorDateFilter === 'today' ? 'selected' : ''}>📅 Hoy (${todayPendingCount})</option>` : ''}
            ${yesterdayPendingCount > 0 ? `<option value="yesterday" ${operatorDateFilter === 'yesterday' ? 'selected' : ''}>📅 Ayer (${yesterdayPendingCount})</option>` : ''}
            ${previousDayCount > 0 ? `<option value="previous" ${operatorDateFilter === 'previous' ? 'selected' : ''}>⏳ Anteriores (${previousDayCount})</option>` : ''}
            ${specificDates.map(d => {
              const countOnDate = activeQueue.filter(c => isContactInOperatorDate(c, d)).length;
              return `<option value="${escapeHtml(d)}" ${operatorDateFilter === d ? 'selected' : ''}>📆 ${escapeHtml(d)} (${countOnDate})</option>`;
            }).join('')}
          </select>
          ${operatorDateFilter ? `<button class="clear-filter-btn" onclick="clearOperatorDateFilter()" type="button" title="Ver todos">✕</button>` : ''}
        </div>
        <button class="button-secondary end-shift-compact-btn" id="end-shift" type="button" title="Finalizar jornada actual y registrar horas de trabajo">⏹ Finalizar jornada</button>
      </div>
    </header>

    <section class="operator-workspace-vertical">
      <!-- 1. PRIMERA LÍNEA: TARJETA DEL CONTACTO (IZQ) Y GUION DE LLAMADA (DER) -->
      <div class="active-call-row">
        ${contact ? renderSelectedContact(contact) : `
          <article class="card selected-contact-card" style="width:100%;">
            <div class="empty-state" style="padding:40px 20px;text-align:center;">
              <div style="font-size:32px;margin-bottom:12px;">✓</div>
              <h3>No hay contactos pendientes en este filtro</h3>
              <p style="color:var(--text-muted);margin:8px 0 16px 0;">Todos los contactos de esta fecha ya fueron completados o no tienen llamadas pendientes.</p>
              <button class="button-primary" onclick="clearOperatorDateFilter()" type="button">Ver todos los pendientes ➔</button>
            </div>
          </article>
        `}
      </div>

      <!-- 2. SEGUNDA LÍNEA: LLAMADAS POR HACER, PENDIENTES Y NO CONTESTA -->
      <div class="contact-board-bottom-grid">
        ${renderContactColumn('Por llamar', 'Llamadas por hacer / Nuevos', normal, 'column-normal', contact)}
        ${renderContactColumn('Pendientes', 'Por reintentar / Reprogramados', pending, 'column-pending', contact)}
        ${renderContactColumn('No contestan', 'Volver a llamar', noAnswer, 'column-no-answer', contact)}
      </div>
    </section>
  `;
}

let reassignFormState = { fromOp: 'JC', toOp: 'DO', base: 'all', scope: 'pending' };

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
  const allContacts = visibleContacts();
  const rawQuery = (contactSearchQuery || '').trim().toLowerCase();
  const phoneQuery = rawQuery.replace(/\D/g, '');
  const status = contactStatusFilter || '';
  const base = contactBaseFilter || '';

  const filteredContacts = allContacts.filter(contact => {
    if (status && contact.status !== status) return false;
    if (base && contact.baseName !== base) return false;
    if (!rawQuery) return true;

    const name = String(contact.name || '').toLowerCase();
    const phone = String(contact.phone || '').replace(/\D/g, '');
    const id = String(contact.id || '').toLowerCase();
    const parish = String(contact.parish || contact.barrio || '').toLowerCase();
    const canton = String(contact.canton || contact.location || '').toLowerCase();
    const course = String(contact.courseName || contact.courseCode || '').toLowerCase();
    const baseName = String(contact.baseName || '').toLowerCase();

    if (name.includes(rawQuery)) return true;
    if (id.includes(rawQuery)) return true;
    if (parish.includes(rawQuery)) return true;
    if (canton.includes(rawQuery)) return true;
    if (course.includes(rawQuery)) return true;
    if (baseName.includes(rawQuery)) return true;
    if (phoneQuery && phone.includes(phoneQuery)) return true;
    return false;
  });

  const title = currentUser.role === 'operator' ? 'Mis contactos' : 'Todos los contactos';
  const showAssignment = currentUser.role === 'supervisor';
  const bases = [...new Set(allContacts.map(contact => contact.baseName).filter(Boolean))].sort();
  const baseOptions = bases.map(b => `<option value="${escapeHtml(b)}" ${base === b ? 'selected' : ''}>${escapeHtml(b)}</option>`).join('');

  return `
    ${pageHeading('Base de contactos', title, currentUser.role === 'operator' ? 'Estos son únicamente los registros que te asignó el supervisor.' : 'Consulta el estado de cada registro y administra el trabajo de tu equipo.', showAssignment ? '<div style="display:flex;gap:8px;"><button class="button-secondary" onclick="exportHistoryXlsx()">⬇ Exportar Excel</button><button class="button-primary" data-view-action="import"><span class="plus">+</span> Importar base</button></div>' : '')}
    <article class="card contacts-card">
      <div class="page-card-header">
        <div>
          <h2 class="card-title">${filteredContacts.length.toLocaleString('es-EC')} registros${rawQuery ? ` (coincidencias con "${escapeHtml(contactSearchQuery)}")` : ''}</h2>
          <p class="card-subtitle">Seguimiento de llamadas del programa GIZ</p>
        </div>
        <div class="filters">
          <input class="search-input" id="contact-search" placeholder="Buscar por nombre, teléfono, barrio o ID..." value="${escapeHtml(contactSearchQuery || '')}" autocomplete="off" />
          <select class="filter-select" id="base-filter"><option value="">Todas las bases</option>${baseOptions}</select>
          <select class="filter-select" id="status-filter">
            <option value="" ${!status ? 'selected' : ''}>Todos los estados</option>
            <option value="effective" ${status === 'effective' ? 'selected' : ''}>Efectivas</option>
            <option value="pending" ${status === 'pending' ? 'selected' : ''}>Pendientes</option>
            <option value="no-answer" ${status === 'no-answer' ? 'selected' : ''}>No contesta</option>
            <option value="wrong" ${status === 'wrong' ? 'selected' : ''}>Número incorrecto</option>
            <option value="refused" ${status === 'refused' ? 'selected' : ''}>Rechazaron la encuesta</option>
            <option value="discarded" ${status === 'discarded' ? 'selected' : ''}>Descartados</option>
          </select>
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table" id="contacts-table">
          <thead>
            <tr>
              <th>Participante</th>
              <th>Identificador</th>
              <th>Barrio y Cantón</th>
              <th>Curso GIZ</th>
              <th>Antigüedad</th>
              <th>Estado</th>
              <th>Intentos</th>
              <th>Última gestión</th>
              ${showAssignment ? '<th>Asignar a</th>' : ''}
            </tr>
          </thead>
          <tbody>
            ${contactRows(filteredContacts, showAssignment)}
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
            <span style="font-family:var(--font-mono);font-size:11.5px;color:#10b981;font-weight:700;">📞 ${escapeHtml(contact.phone)}</span>
          </div>
        </div>
      </td>
      <td><span class="mono">${escapeHtml(contact.id)}</span></td>
      <td>
        <div style="display:flex;flex-direction:column;gap:2px;">
          <strong>📍 Barrio ${escapeHtml(contact.barrio || contact.parish || '—')}</strong>
          <span style="font-size:11px;color:var(--text-muted);">${escapeHtml(contact.canton || contact.location || 'Esmeraldas')}</span>
        </div>
      </td>
      <td>
        <div style="display:flex;flex-direction:column;gap:2px;">
          <div style="display:flex;align-items:center;gap:5px;">
            ${contact.courseCode ? `<span class="course-code-pill">${escapeHtml(contact.courseCode)}</span>` : ''}
            <strong style="color:var(--primary);font-size:12px;">${escapeHtml(contact.courseName || 'Salud Sexual y Reproductiva')}</strong>
          </div>
          <span style="font-size:10.5px;color:var(--text-muted);font-family:var(--font-mono);">${escapeHtml(contact.courseDates || 'Jun 2025 – Jul 2025')}</span>
        </div>
      </td>
      <td><span class="recency-pill">${escapeHtml(contact.courseEndDate || 'Julio 2025')}</span></td>
      <td><span class="table-status ${contact.status}">${contactStatusLabel(contact)}</span></td>
      <td><span style="font-family:var(--font-mono);font-size:11px;font-weight:700;">${contact.attempts} / ${MAX_ATTEMPTS}</span></td>
      <td><span style="font-size:11px;color:var(--text-muted);">${escapeHtml(contact.last)}</span></td>
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

async function forceCloseShift(shiftId, operatorInitials) {
  if (currentUser.role !== 'supervisor') return;
  if (!window.confirm('¿Deseas marcar esta jornada como finalizada ahora?')) return;
  
  const endedAt = new Date().toISOString();
  showToast('Cerrando jornada...');

  const shiftToClose = state.shifts.find(s => s.id === shiftId);
  const targetInitials = operatorInitials || (shiftToClose ? (shiftToClose.operator ? initials(shiftToClose.operator) : '') : '');
  const targetUser = targetInitials ? appUsers.find(u => u.initials === targetInitials) : null;
  const targetProfile = targetInitials ? [...remoteProfiles.values()].find(p => p.initials === targetInitials) : null;
  const targetOperatorId = targetProfile?.id || shiftToClose?.operatorId;

  // 1. Optimistic Update Inmediato
  state.shifts.forEach(s => {
    const matchesShift = s.id === shiftId;
    const matchesOpId = targetOperatorId && s.operatorId === targetOperatorId;
    const matchesUser = targetUser && (s.username === targetUser.username || s.username === targetUser.name);
    if ((matchesShift || matchesOpId || matchesUser) && !s.endedAt) {
      s.endedAt = endedAt;
    }
  });
  state.shifts = deduplicateShiftsClient(state.shifts);
  saveState();
  render();

  // 2. Sincronización Servidor Central (Siempre)
  let token = '';
  try {
    const session = supabaseClient?.auth ? await supabaseClient.auth.getSession() : null;
    token = session?.data?.session?.access_token || '';
  } catch (e) {}

  try {
    await fetch('/api/shifts/close', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-role': currentUser.role,
        'x-supabase-auth': token
      },
      body: JSON.stringify({ shiftId, endedAt, operatorId: targetOperatorId || shiftToClose?.username || targetInitials })
    });
  } catch (e) {
    console.warn('Error notifying server of closed shift:', e);
  }

  // 3. Sincronización en Supabase si está activo
  if (backendMode === 'supabase' && supabaseClient) {
    try {
      if (shiftId && !String(shiftId).startsWith('local-') && !String(shiftId).startsWith('shift-')) {
        await supabaseClient.rpc('admin_close_shift', { p_shift_id: shiftId, p_ended_at: endedAt });
        await supabaseClient.from('operator_shifts').update({ ended_at: endedAt }).eq('id', shiftId);
      }
      if (targetOperatorId) {
        await supabaseClient.rpc('admin_close_all_operator_shifts', { p_operator_id: targetOperatorId, p_ended_at: endedAt });
        await supabaseClient.from('operator_shifts').update({ ended_at: endedAt }).eq('operator_id', targetOperatorId).is('ended_at', null);
      }
      await loadRemoteState();
    } catch (err) {
      console.warn('Supabase shift close notice:', err.message);
    }
  }

  showToast('Jornada finalizada correctamente');
  render();
}

async function deleteShift(shiftId) {
  if (currentUser.role !== 'supervisor') return;
  if (!window.confirm('¿Estás seguro de eliminar este registro de jornada?')) return;
  
  showToast('Eliminando jornada...');
  state.shifts = state.shifts.filter(s => s.id !== shiftId);
  saveState();
  render();

  let token = '';
  try {
    const session = supabaseClient?.auth ? await supabaseClient.auth.getSession() : null;
    token = session?.data?.session?.access_token || '';
  } catch (e) {}

  try {
    await fetch('/api/shifts/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-role': currentUser.role,
        'x-supabase-auth': token
      },
      body: JSON.stringify({ shiftId })
    });
  } catch (e) {
    console.warn('Shift delete notice:', e);
  }

  if (backendMode === 'supabase' && supabaseClient) {
    try {
      if (shiftId && !String(shiftId).startsWith('local-') && !String(shiftId).startsWith('shift-')) {
        await supabaseClient.rpc('admin_delete_shift', { p_shift_id: shiftId });
        await supabaseClient.from('operator_shifts').delete().eq('id', shiftId);
      }
      await loadRemoteState();
    } catch (err) {
      console.warn('Supabase shift delete notice:', err.message);
    }
  }

  showToast('Jornada eliminada');
  render();
}

function getShiftGestionesMetrics(shift) {
  if (!shift || !shift.startedAt) return { total: 0, effective: 0, pending: 0, noAnswer: 0, other: 0, ratePerHour: '0' };
  
  const startTime = new Date(shift.startedAt).getTime();
  const endTime = shift.endedAt ? new Date(shift.endedAt).getTime() : Date.now();
  const shiftOperatorId = shift.operatorId;
  const shiftOperatorName = (shift.operator || shift.username || '').toLowerCase();
  
  const targetUser = appUsers.find(u => u.username === shift.username || u.name === shift.operator);
  const targetAuthId = targetUser?.authId;

  const matchingHistory = state.history.filter(item => {
    const opMatches = (shiftOperatorId && item.operatorId === shiftOperatorId) ||
                      (targetAuthId && item.operatorId === targetAuthId) ||
                      (item.operator && item.operator.toLowerCase() === shiftOperatorName) ||
                      (targetUser && item.operator === targetUser.name);
    if (!opMatches) return false;

    if (item.completedAt || item.rawDate) {
      const itemTime = new Date(item.completedAt || item.rawDate).getTime();
      return itemTime >= (startTime - 60000) && itemTime <= (endTime + 60000);
    }
    
    const shiftDay = dayKey(shift.startedAt);
    const itemDay = dayKey(item.date);
    return shiftDay && itemDay && shiftDay === itemDay;
  });

  const total = matchingHistory.length;
  const effective = matchingHistory.filter(h => h.result === 'effective').length;
  const pending = matchingHistory.filter(h => h.result === 'pending' || h.result === 'rescheduled' || h.result === 'callback').length;
  const noAnswer = matchingHistory.filter(h => h.result === 'no-answer' || h.result === 'no_answer').length;
  const other = total - effective - pending - noAnswer;
  
  const durationHours = Math.max(0.1, (endTime - startTime) / 3600000);
  const ratePerHour = total > 0 ? (total / durationHours).toFixed(1) : '0';

  return { total, effective, pending, noAnswer, other, ratePerHour };
}

function filterShiftsRealtime(query) {
  shiftSearchQuery = query;
  const q = query.trim().toLowerCase();
  document.querySelectorAll('[data-shift-row]').forEach(row => {
    const text = row.dataset.shiftRow || '';
    row.hidden = q ? !text.includes(q) : false;
  });
}

function renderShifts() {
  const operatorUsers = appUsers.filter(user => user.role === 'operator');
  const allShifts = state.shifts || [];
  const sortedShifts = allShifts.slice().sort((a, b) => new Date(b.startedAt || 0) - new Date(a.startedAt || 0));
  const isSupervisor = currentUser.role === 'supervisor';

  return `
    ${pageHeading('Control de equipo', 'Registro diario de jornadas', 'Consulta el historial de turnos de cada operador/a, las gestiones realizadas en cada turno y su rendimiento.', backendMode === 'supabase' ? '<span class="status-pill on">● Sincronizado con Supabase</span>' : '<span class="status-pill on">● Actualizado localmente</span>')}
    
    <!-- 1. RESUMEN EN VIVO DE HOY -->
    <section class="supervisor-focus-grid" style="margin-bottom: 24px;">
      <article class="card operator-monitoring-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">Estado de la jornada de hoy</h2>
            <p class="card-subtitle">Seguimiento en vivo del equipo de operadores</p>
          </div>
          <span class="status-pill on">● En vivo</span>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Operador/a</th>
                <th>Estado actual</th>
                <th>Inicio</th>
                <th>Fin</th>
                <th>Tiempo laborado</th>
                <th>Gestiones en el turno</th>
                ${isSupervisor ? '<th>Acción rápida</th>' : ''}
              </tr>
            </thead>
            <tbody>
              ${operatorUsers.map(user => {
                const shift = latestShiftFor(user);
                const active = Boolean(getActiveShift(user));
                const metrics = shift ? getShiftGestionesMetrics(shift) : { total: 0, effective: 0, ratePerHour: '0' };
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
                    <td>${shift?.endedAt ? formatDateTime(shift.endedAt) : active ? '<span style="color:#10b981;font-weight:700;">● En curso</span>' : '—'}</td>
                    <td>${shift ? formatDuration(shift.startedAt, shift.endedAt || undefined) : '—'}</td>
                    <td>
                      ${shift ? `
                        <div class="shift-gestiones-badge">
                          <div class="gestiones-main-line">
                            <strong>${metrics.total} ${metrics.total === 1 ? 'gestión' : 'gestiones'}</strong>
                            ${metrics.effective > 0 ? `<span class="shift-eff-pill">✓ ${metrics.effective} ${metrics.effective === 1 ? 'efectiva' : 'efectivas'}</span>` : ''}
                          </div>
                          ${metrics.total > 0 ? `
                            <div class="gestiones-sub-line">
                              <span>⚡ ${metrics.ratePerHour}/hora</span>
                              ${metrics.pending > 0 ? `<span>· ◷ ${metrics.pending}</span>` : ''}
                              ${metrics.noAnswer > 0 ? `<span>· ◌ ${metrics.noAnswer}</span>` : ''}
                            </div>
                          ` : `<div class="gestiones-sub-line">Sin llamadas aún</div>`}
                        </div>
                      ` : '<span style="color:var(--text-muted);">—</span>'}
                    </td>
                    ${isSupervisor ? `
                      <td>
                        ${active ? `<button class="button-secondary" onclick="forceCloseShift('${shift?.id || ''}', '${user.initials}')" type="button" style="padding:4px 8px;font-size:10px;background:rgba(239,68,68,0.1);color:#ef4444;border-color:#ef4444;">Cerrar jornada</button>` : '—'}
                      </td>
                    ` : ''}
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </article>
    </section>

    <!-- 2. HISTORIAL DIARIO COMPLETO POR OPERADORA -->
    <article class="card history-card">
      <div class="page-card-header">
        <div>
          <h2 class="card-title">Historial diario de jornadas por operadora</h2>
          <p class="card-subtitle">${sortedShifts.length} registros de turnos guardados</p>
        </div>
        <div class="filters">
          <input class="search-input" id="shift-search" placeholder="Buscar operadora o fecha..." value="${escapeHtml(shiftSearchQuery)}" oninput="filterShiftsRealtime(this.value)" />
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table shifts-table" id="shifts-data-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Operador/a</th>
              <th>Hora de inicio</th>
              <th>Hora de fin</th>
              <th>Duración total</th>
              <th>Gestiones en el turno</th>
              <th>Estado</th>
              ${isSupervisor ? '<th>Acciones</th>' : ''}
            </tr>
          </thead>
          <tbody>
            ${sortedShifts.length ? sortedShifts.map(shift => {
              const isEnded = Boolean(shift.endedAt && String(shift.endedAt).trim() !== '' && shift.endedAt !== 'null');
              const dateLabel = shift.startedAt ? dayKey(shift.startedAt) : '—';
              const operatorName = shift.operator || shift.username || 'Operador/a';
              const metrics = getShiftGestionesMetrics(shift);

              return `
                <tr data-shift-row="${escapeHtml(`${operatorName} ${shift.username || ''} ${dateLabel}`.toLowerCase())}">
                  <td><strong style="font-family:var(--font-mono);font-size:12px;">${escapeHtml(dateLabel)}</strong></td>
                  <td>
                    <div class="operator-cell">
                      <div class="small-avatar">${initials(operatorName)}</div>
                      <div><strong>${escapeHtml(operatorName)}</strong></div>
                    </div>
                  </td>
                  <td>${shift.startedAt ? formatDateTime(shift.startedAt) : '—'}</td>
                  <td>${isEnded ? formatDateTime(shift.endedAt) : '<span style="color:#10b981;font-weight:700;">● En curso</span>'}</td>
                  <td>${shift.startedAt ? formatDuration(shift.startedAt, shift.endedAt || undefined) : '—'}</td>
                  <td>
                    <div class="shift-gestiones-badge">
                      <div class="gestiones-main-line">
                        <strong>${metrics.total} ${metrics.total === 1 ? 'llamada' : 'llamadas'}</strong>
                        ${metrics.effective > 0 ? `<span class="shift-eff-pill">✓ ${metrics.effective} ${metrics.effective === 1 ? 'efectiva' : 'efectivas'}</span>` : ''}
                      </div>
                      ${metrics.total > 0 ? `
                        <div class="gestiones-sub-line">
                          <span>⚡ ${metrics.ratePerHour}/hora</span>
                          ${metrics.pending > 0 ? `<span>· ◷ ${metrics.pending}</span>` : ''}
                          ${metrics.noAnswer > 0 ? `<span>· ◌ ${metrics.noAnswer}</span>` : ''}
                        </div>
                      ` : `<div class="gestiones-sub-line">Sin llamadas registradas</div>`}
                    </div>
                  </td>
                  <td>
                    <span class="status-pill ${isEnded ? 'pause' : 'on'}">${isEnded ? 'Finalizada' : 'En curso'}</span>
                  </td>
                  ${isSupervisor ? `
                    <td>
                      <div style="display:flex;gap:6px;">
                        ${!isEnded ? `<button class="button-secondary" onclick="forceCloseShift('${shift.id}')" type="button" style="padding:4px 8px;font-size:10px;background:rgba(239,68,68,0.1);color:#ef4444;border-color:#ef4444;">Cerrar turno</button>` : ''}
                        <button class="delete-history" onclick="deleteShift('${shift.id}')" type="button" style="padding:4px 8px;font-size:10px;">Eliminar jornada</button>
                      </div>
                    </td>
                  ` : ''}
                </tr>
              `;
            }).join('') : `<tr><td colspan="${isSupervisor ? 8 : 7}"><div class="empty-state">No hay jornadas registradas.</div></td></tr>`}
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
    const contactObj = getContact(last.id || last.contactId);
    const searchableText = ordered.map(att => `${att.attempt} ${outcomeLabels[att.result] || att.result} ${att.date || ''} ${att.notes || ''} ${att.rescheduledFor || ''}`).join(' ');

    return {
      contact: contactObj?.name || last.contact,
      id: last.id,
      contactId: last.id,
      phone: contactObj?.phone || contactObj?.phoneRaw || last.phone || '',
      baseName: contactObj?.baseName || '',
      operator: last.operator,
      attempts: ordered.length,
      result: last.result,
      attemptsList: ordered.map((att, idx) => ({
        attempt: att.attempt || (idx + 1),
        result: att.result || 'pending',
        date: att.date || '',
        notes: att.notes || '',
        rescheduledFor: att.rescheduledFor || (att.result === 'pending' ? contactObj?.rescheduledFor : '') || '',
        operator: att.operator || ''
      })),
      searchableText
    };
  });
}

function filterHistoryRealtime(query) {
  historySearchQuery = query;
  const q = query.trim().toLowerCase();
  document.querySelectorAll('[data-history-row]').forEach(row => {
    const text = row.dataset.historyRow || '';
    row.hidden = q ? !text.includes(q) : false;
  });
}

function renderHistory() {
  const allHistory = state.history;
  const history = currentUser.role === 'operator' ? allHistory.filter(item => item.operator === currentUser.name) : allHistory;
  const grouped = groupHistory(history);
  const exportAction = currentUser.role === 'supervisor' ? '<button class="button-secondary" onclick="exportHistoryXlsx()">⬇ Exportar Excel</button>' : '';
  const showActions = currentUser.role === 'supervisor';

  return `
    ${pageHeading('Trazabilidad', 'Historial de gestiones', 'Cada contacto con su secuencia cronológica de llamadas, intentos y observaciones.', exportAction)}
    <article class="card history-card">
      <div class="page-card-header">
        <div>
          <h2 class="card-title">Contactos gestionados</h2>
          <p class="card-subtitle">${grouped.length} contactos con llamadas registradas</p>
        </div>
        <div class="filters">
          <input class="search-input" id="history-search" placeholder="Buscar por nombre, teléfono, notas o ID..." value="${escapeHtml(historySearchQuery)}" oninput="filterHistoryRealtime(this.value)" />
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table history-data-table">
          <thead>
            <tr>
              <th style="min-width: 220px;">Participante y Teléfono</th>
              <th style="min-width: 380px;">Secuencia de Intentos y Observaciones</th>
              <th>Resultado Final</th>
              <th>Operador/a</th>
              <th style="text-align:center;">Total</th>
              ${showActions ? '<th>Acciones</th>' : ''}
            </tr>
          </thead>
          <tbody>
            ${grouped.length ? grouped.map(item => `
              <tr data-history-row="${escapeHtml(`${item.contact} ${item.id} ${item.phone} ${item.operator} ${item.searchableText}`.toLowerCase())}">
                <td style="vertical-align: top;">
                  <div class="operator-cell">
                    <div class="small-avatar">${initials(item.contact)}</div>
                    <div>
                      <strong>${escapeHtml(item.contact)}</strong>
                      <div class="contact-id-phone-badges">
                        <span class="mono contact-tag-code">#${escapeHtml(item.id)}</span>
                        ${item.phone ? `<a href="tel:${escapeHtml(item.phone)}" class="contact-phone-chip" title="Llamar">📞 ${escapeHtml(item.phone)}</a>` : ''}
                      </div>
                      ${item.baseName ? `<span class="base-tag-small">${escapeHtml(item.baseName)}</span>` : ''}
                    </div>
                  </div>
                </td>
                <td style="vertical-align: top;">
                  <div class="attempts-thread">
                    ${item.attemptsList.map((att, idx) => `
                      <div class="attempt-card outcome-${att.result}">
                        <div class="attempt-header">
                          <span class="attempt-pill outcome-${att.result}">Intento #${att.attempt || (idx + 1)}</span>
                          <span class="attempt-outcome-text outcome-${att.result}">
                            ${att.result === 'effective' ? '✓ Encuesta completada' : 
                              att.result === 'pending' || att.result === 'rescheduled' || att.result === 'callback' ? '◷ Reprogramada / Reintento' :
                              att.result === 'no-answer' ? '◌ No contesta' :
                              att.result === 'wrong' ? '× Número incorrecto' :
                              att.result === 'refused' ? '⊘ Rechazó participar' : (outcomeLabels[att.result] || att.result)}
                          </span>
                          ${att.date ? `<time class="attempt-timestamp">${escapeHtml(att.date)}</time>` : ''}
                        </div>
                        ${att.rescheduledFor ? `
                          <div class="attempt-rescheduled-box">
                            <span>⏰</span>
                            <span>Reprogramado para: <strong class="attempt-rescheduled-time">${escapeHtml(formatRescheduleDate(att.rescheduledFor))}</strong></span>
                          </div>
                        ` : ''}
                        ${att.notes ? `
                          <div class="attempt-note-box">
                            <span class="note-icon">💬</span>
                            <span class="note-text">${escapeHtml(att.notes)}</span>
                          </div>
                        ` : ''}
                      </div>
                    `).join('')}
                  </div>
                </td>
                <td style="vertical-align: top;">
                  <span class="table-status ${item.result}">${outcomeLabels[item.result] || item.result}</span>
                </td>
                <td style="vertical-align: top;">
                  <div style="font-weight: 600; font-size: 13px;">${escapeHtml(item.operator)}</div>
                </td>
                <td style="vertical-align: top; text-align: center;">
                  <span class="attempts-count-badge">${item.attempts} / 3</span>
                </td>
                ${showActions ? `
                  <td style="vertical-align: top;">
                    <button class="delete-history" data-delete-history="${escapeHtml(item.id)}" type="button" title="Eliminar gestiones">Borrar</button>
                  </td>
                ` : ''}
              </tr>
            `).join('') : `<tr><td colspan="${showActions ? 6 : 5}"><div class="empty-state">No hay gestiones registradas.</div></td></tr>`}
          </tbody>
        </table>
      </div>
    </article>
  `;
}

function renderImport() { return `${pageHeading('Carga de información', 'Importar base de contactos', 'Sube un archivo Excel o CSV y asígnale un nombre para distinguirla de las demás.', '<button class="button-secondary" id="download-template">↓ Descargar plantilla</button>')}<section class="import-layout"><article class="card import-card"><div class="import-base-name"><label for="base-name">Nombre de la base</label><input id="base-name" placeholder="Ej. GADPP · Lote 1 · agosto 2026" /></div><div class="dropzone" id="dropzone"><div class="drop-icon">↥</div><h2>Arrastra tu archivo aquí</h2><p>Aceptamos archivos Excel y CSV. Se detecta automáticamente el formato de FACILITADOR o de hojas por operadora (PAMELA, BRENDA, etc.).</p><label class="button-primary" for="file-input">Seleccionar archivo</label><input class="file-input" type="file" id="file-input" accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv" /><small class="heading-copy">Máximo recomendado: 5,000 registros</small></div></article><article class="card import-tips"><h2>Antes de importar</h2><div class="tip"><div class="tip-num">1</div><div><strong>Identifica la base</strong><span>Usa un nombre como “GADPP · Lote 1” para encontrarla después.</span></div></div><div class="tip"><div class="tip-num">2</div><div><strong>Hojas por operadora</strong><span>Si el archivo tiene hojas PAMELA o BRENDA, se asignan automáticamente.</span></div></div><div class="tip"><div class="tip-num">3</div><div><strong>Revisa el resultado</strong><span>El sistema normalizará celulares y rellenará los campos disponibles.</span></div></div></article></section>${renderBaseManagement()}<article class="card quick-assign-card"><div class="page-card-header"><div><h2 class="card-title">Asignación rápida</h2><p class="card-subtitle">Agrupa contactos sin operadora a una persona</p></div></div><div class="quick-assign-body">${appUsers.filter(user => user.role === 'operator').map(user => { const pendientes = state.contacts.filter(contact => !contact.operator).length; return `<button class="assign-all-btn" data-assign-all="${user.initials}" type="button" ${pendientes && backendMode === 'supabase' ? '' : 'disabled'}>Asignar todo a ${user.name} (${pendientes})</button>`; }).join('')}</div></article>`; }

function bindViewEvents() {
  document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => { activeView = item.dataset.view; document.getElementById('sidebar').classList.remove('open'); render(); }));
  document.querySelectorAll('[data-contact-id]').forEach(button => button.addEventListener('click', () => { selectedContactId = button.dataset.contactId; selectedOutcome = ''; render(); }));
  document.querySelectorAll('[data-outcome]').forEach(button => button.addEventListener('click', (e) => {
    e.preventDefault();
    const outcome = button.dataset.outcome;
    selectedOutcome = outcome;
    document.querySelectorAll('[data-outcome]').forEach(btn => btn.classList.toggle('active', btn.dataset.outcome === outcome));
    const saveBtn = document.getElementById('save-call');
    if (saveBtn) saveBtn.disabled = false;
    const reschedBox = document.getElementById('reschedule-box');
    if (reschedBox) reschedBox.classList.toggle('show', outcome === 'pending');
  }));
  const notesInput = document.getElementById('notes');
  if (notesInput) {
    const syncNotes = (e) => {
      if (selectedContactId) draftNotesByContact[selectedContactId] = e.target.value;
    };
    notesInput.addEventListener('input', syncNotes);
    notesInput.addEventListener('change', syncNotes);
    notesInput.addEventListener('keyup', syncNotes);
    notesInput.addEventListener('paste', syncNotes);
  }

  const reschedInput = document.getElementById('reschedule-time');
  if (reschedInput) {
    const syncResched = (e) => {
      if (selectedContactId) draftRescheduleByContact[selectedContactId] = e.target.value;
    };
    reschedInput.addEventListener('input', syncResched);
    reschedInput.addEventListener('change', syncResched);
  }

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

  const opSearch = document.getElementById('operator-contact-search');
  if (opSearch) {
    opSearch.addEventListener('input', (e) => {
      updateOperatorSearchLive(e.target.value);
    });
  }

  document.querySelectorAll('[data-column-search]').forEach(input => {
    const tone = input.dataset.columnSearch;
    const filterColumnCards = () => {
      const query = input.value.trim().toLowerCase();
      const phoneQ = query.replace(/\D/g, '');
      if (tone) columnSearchQueries[tone] = input.value;
      const column = input.closest('.contact-column');
      if (!column) return;
      const cards = [...column.querySelectorAll('.contact-board-card')];
      const visible = cards.filter(card => {
        if (!query) return true;
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) return true;
        if (phoneQ && text.replace(/\D/g, '').includes(phoneQ)) return true;
        return false;
      });
      cards.forEach(card => { card.hidden = !visible.includes(card); });
      let empty = column.querySelector('.column-search-empty');
      if (!visible.length && cards.length) {
        if (!empty) { column.querySelector('.contact-column-list')?.insertAdjacentHTML('beforeend', '<div class="column-search-empty">No encontramos ese contacto en esta columna.</div>'); }
      } else if (empty) empty.remove();
    };

    input.addEventListener('input', filterColumnCards);
    if (input.value) filterColumnCards();
  });
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
  if (getActiveShift()) {
    showToast('Ya tienes una jornada activa en curso');
    return;
  }
  const nowIso = new Date().toISOString();
  
  if (backendMode === 'supabase' && supabaseClient && currentUser?.authId) {
    showToast('Iniciando jornada...');
    try {
      let campaignId = currentCampaign?.id;
      if (!campaignId) {
        const contactWithCampaign = state.contacts.find(c => c.campaign_id);
        campaignId = contactWithCampaign?.campaign_id;
      }
      if (!campaignId) {
        try {
          const { data: campaigns } = await supabaseClient.from('campaigns').select('id').limit(1);
          campaignId = campaigns?.[0]?.id;
        } catch (err) {}
      }
      if (!campaignId) campaignId = '245a3669-47bc-4741-b17a-a9aecdec2939';

      try {
        await supabaseClient.from('operator_shifts').update({ ended_at: nowIso }).eq('operator_id', currentUser.authId).is('ended_at', null);
      } catch (e) {}

      const { data: newShift, error } = await supabaseClient.from('operator_shifts').insert({
        operator_id: currentUser.authId,
        campaign_id: campaignId,
        started_at: nowIso
      }).select().single();

      if (!error && newShift) {
        state.shifts.unshift({
          id: newShift.id,
          operatorId: currentUser.authId,
          username: currentUser.username,
          operator: currentUser.name,
          startedAt: nowIso,
          endedAt: null
        });
        showToast('Jornada iniciada. Buen trabajo.');
        render();
        return;
      } else if (error) {
        console.warn('Supabase shift notice (using server backend):', error.message);
      }
    } catch (e) {
      console.warn('Supabase shift fallback:', e.message);
    }
  }

  // Modo Servidor Central GIZ / local (Siempre garantizado y sin bloqueos de permisos)
  const shiftItem = {
    id: `shift-${Date.now()}`,
    operatorId: currentUser.authId || currentUser.username,
    username: currentUser.username,
    operator: currentUser.name,
    startedAt: nowIso,
    endedAt: null
  };
  state.shifts.unshift(shiftItem);
  state.shifts = deduplicateShiftsClient(state.shifts);
  saveState();

  try {
    const res = await fetch('/api/shifts/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: shiftItem.id,
        username: currentUser.username,
        operator: currentUser.name,
        operatorId: shiftItem.operatorId
      })
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.shift?.id && data.shift.id !== shiftItem.id) {
        shiftItem.id = data.shift.id;
        state.shifts = deduplicateShiftsClient(state.shifts);
        saveState();
      }
    }
  } catch (e) {
    console.warn('Server shift sync:', e.message);
  }

  showToast('Jornada iniciada. Buen trabajo.');
  render();
}

async function endShift() {
  const active = getActiveShift();
  if (!active) {
    showToast('No tienes una jornada activa');
    return;
  }
  const endedAt = new Date().toISOString();
  const startedAt = active.startedAt;

  // 1. Optimistic Update Local Inmediato: cerrar todas las jornadas activas del usuario
  state.shifts.forEach(s => {
    const isUser = (currentUser.authId && s.operatorId === currentUser.authId) ||
                   (s.operatorId === currentUser.username) ||
                   (currentUser.initials && s.operatorId === currentUser.initials) ||
                   (s.username === currentUser.username) ||
                   (s.username === currentUser.name) ||
                   (s.operator === currentUser.name);
    if (!s.endedAt && isUser) {
      s.endedAt = endedAt;
    }
  });
  state.shifts = deduplicateShiftsClient(state.shifts);
  saveState();

  // 2. Sincronización en servidor central
  try {
    await fetch('/api/shifts/end', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: currentUser.username,
        operatorId: currentUser.authId || currentUser.username,
        operator: currentUser.name,
        endedAt
      })
    });
  } catch (e) {
    console.warn('Server end shift sync:', e);
  }

  // 3. Sincronización en Supabase si está disponible
  if (backendMode === 'supabase' && supabaseClient && currentUser?.authId) {
    try {
      await supabaseClient.from('operator_shifts')
        .update({ ended_at: endedAt })
        .eq('operator_id', currentUser.authId)
        .is('ended_at', null);
    } catch (err) {}
  }

  showToast(`Jornada finalizada · ${formatDuration(startedAt, endedAt)}`);
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
    if (backendMode === 'supabase' && currentUser?.authId) {
      showToast('Guardando gestión...');
      try {
        await saveRemoteCall();
        return;
      } catch (e) {
        console.warn('Supabase remote save error, falling back to server save:', e.message);
      }
    }

    const note = (document.getElementById('notes')?.value ?? draftNotesByContact[contact.id] ?? '').trim();
    const rescheduleTime = document.getElementById('reschedule-time')?.value ?? draftRescheduleByContact[contact.id] ?? '';
    contact.attempts = (Number(contact.attempts) || 0) + 1;
    const now = new Date();
    const dateFormatted = new Intl.DateTimeFormat('es-EC', { dateStyle: 'short', timeStyle: 'short', timeZone: 'America/Guayaquil' }).format(now);
    const nowIso = now.toISOString();

    contact.last = dateFormatted;
    contact.lastAttemptAt = nowIso;
    contact.operator = currentUser.initials;
    contact.rescheduledFor = rescheduleTime;
    contact.notes = note;

    const shouldDiscard = contact.attempts >= MAX_ATTEMPTS && !['effective', 'wrong', 'refused'].includes(selectedOutcome);
    contact.status = shouldDiscard ? 'discarded' : selectedOutcome;
    contact.pendingReason = selectedOutcome === 'pending' ? 'rescheduled' : selectedOutcome === 'no-answer' ? 'no_answer' : null;

    const historyItem = {
      contact: contact.name,
      id: contact.id,
      phone: contact.phone,
      courseCode: contact.courseCode || '',
      courseName: contact.courseName || '',
      organization: contact.organization || '',
      canton: contact.canton || '',
      provincia: contact.provincia || '',
      result: selectedOutcome,
      operator: currentUser.name,
      operatorInitials: currentUser.initials,
      attempt: contact.attempts,
      date: dateFormatted,
      rawDate: nowIso,
      notes: note,
      rescheduledFor: rescheduleTime
    };

    state.history.unshift(historyItem);

    delete draftNotesByContact[contact.id];
    delete draftRescheduleByContact[contact.id];
    saveState();

    // Sincronización transparente en background con el servidor central GIZ (0 ms delay en pantalla)
    fetch('/api/calls/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contactId: contact.id,
        outcome: selectedOutcome,
        notes: note,
        rescheduledFor: rescheduleTime,
        operator: currentUser.name,
        operatorInitials: currentUser.initials,
        attemptNumber: contact.attempts
      })
    }).catch(err => console.warn('Background sync note:', err.message));

    const currentList = visibleContacts();
    const nextContact = getNextActionableContact(contact.id, currentList);
    selectedContactId = nextContact ? nextContact.id : null;
    selectedOutcome = '';
    showToast(shouldDiscard ? `Gestión guardada · ${contact.name} (3er intento finalizado)` : `Gestión guardada para ${contact.name}`);
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
const note = (document.getElementById('notes')?.value ?? draftNotesByContact[contact.id] ?? '').trim();
const rescheduleTime = document.getElementById('reschedule-time')?.value ?? draftRescheduleByContact[contact.id] ?? '';
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
  delete draftNotesByContact[contact.id];
  delete draftRescheduleByContact[contact.id];
  selectedOutcome = '';
  await loadRemoteState();
  const nextContact = getNextActionableContact(contact.id, visibleContacts());
  selectedContactId = nextContact ? nextContact.id : null;
  showToast(shouldDiscard ? `Gestión guardada · ${contact.name} (3er intento finalizado)` : `Gestión guardada para ${contact.name}`);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterContacts() {
  const input = document.getElementById('contact-search');
  contactSearchQuery = input ? input.value : (contactSearchQuery || '');
  const rawQuery = contactSearchQuery.trim().toLowerCase();
  const phoneQuery = rawQuery.replace(/\D/g, '');
  contactStatusFilter = document.getElementById('status-filter')?.value || '';
  contactBaseFilter = document.getElementById('base-filter')?.value || '';

  const rows = visibleContacts().filter(contact => {
    if (contactStatusFilter && contact.status !== contactStatusFilter) return false;
    if (contactBaseFilter && contact.baseName !== contactBaseFilter) return false;
    if (!rawQuery) return true;

    const name = String(contact.name || '').toLowerCase();
    const phone = String(contact.phone || '').replace(/\D/g, '');
    const id = String(contact.id || '').toLowerCase();
    const parish = String(contact.parish || contact.barrio || '').toLowerCase();
    const canton = String(contact.canton || contact.location || '').toLowerCase();
    const course = String(contact.courseName || contact.courseCode || '').toLowerCase();
    const baseName = String(contact.baseName || '').toLowerCase();

    if (name.includes(rawQuery)) return true;
    if (id.includes(rawQuery)) return true;
    if (parish.includes(rawQuery)) return true;
    if (canton.includes(rawQuery)) return true;
    if (course.includes(rawQuery)) return true;
    if (baseName.includes(rawQuery)) return true;
    if (phoneQuery && phone.includes(phoneQuery)) return true;
    return false;
  });

  const tbody = document.querySelector('#contacts-table tbody');
  if (tbody) {
    tbody.innerHTML = contactRows(rows, currentUser.role === 'supervisor');
    document.querySelectorAll('[data-assign-contact]').forEach(select => select.addEventListener('change', () => {
      const contact = getContact(select.dataset.assignContact);
      if (!contact) return;
      const initialsValue = select.value;
      if (backendMode === 'supabase') {
        assignContactRemote(contact, initialsValue);
        return;
      }
      contact.operator = initialsValue;
      saveState();
      showToast(initialsValue ? 'Contacto asignado correctamente' : 'Asignación retirada');
    }));
  }

  const countEl = document.querySelector('.contacts-card .card-title');
  if (countEl) {
    countEl.textContent = `${rows.length.toLocaleString('es-EC')} registros${rawQuery ? ` (coincidencias con "${contactSearchQuery}")` : ''}`;
  }
}

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

window.syncStateFromServer = async function(silent = true) {
  try {
    const stateRes = await fetch('/api/state');
    if (!stateRes.ok) return false;
    const serverData = await stateRes.json();
    if (!serverData || !Array.isArray(serverData.contacts) || serverData.contacts.length === 0) return false;

    let changed = false;
    const clientMap = new Map(state.contacts.map(c => [c.id, c]));
    serverData.contacts.forEach(sc => {
      const lc = clientMap.get(sc.id);
      if (!lc) {
        state.contacts.push(sc);
        changed = true;
      } else {
        const scAttempts = Number(sc.attempts || 0);
        const lcAttempts = Number(lc.attempts || 0);
        const scHasEff = sc.status === 'effective';
        const isResidualLinkedEff = lc.status === 'effective' && !scHasEff && (lc.notes || '').includes('Encuesta ya realizada en');
        if (isResidualLinkedEff || scAttempts > lcAttempts ||
            (scAttempts === lcAttempts && sc.lastAttemptAt && sc.lastAttemptAt !== lc.lastAttemptAt) ||
            sc.status !== lc.status ||
            sc.operator !== lc.operator ||
            sc.notes !== lc.notes) {
          Object.assign(lc, sc);
          changed = true;
        }
      }
    });

    if (Array.isArray(serverData.history)) {
      const allHistoryMap = new Map();
      (serverData.history || []).forEach(h => {
        if (h && h.id) allHistoryMap.set(`${h.id}-${h.attempt}`, h);
      });
      (state.history || []).forEach(h => {
        if (h && h.id && !allHistoryMap.has(`${h.id}-${h.attempt}`)) {
          allHistoryMap.set(`${h.id}-${h.attempt}`, h);
          changed = true;
        }
      });
      const mergedHist = [...allHistoryMap.values()].sort((a, b) => new Date(b.rawDate || 0) - new Date(a.rawDate || 0));
      if (mergedHist.length !== (state.history || []).length || JSON.stringify(mergedHist[0]) !== JSON.stringify(state.history?.[0])) {
        state.history = mergedHist;
        changed = true;
      }
    }

    if (Array.isArray(serverData.shifts)) {
      const dedupedShifts = deduplicateShiftsClient(serverData.shifts);
      if (JSON.stringify(dedupedShifts) !== JSON.stringify(state.shifts)) {
        state.shifts = dedupedShifts;
        changed = true;
      }
    }

    if (changed || !silent) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      if (silent) {
        const activeEl = document.activeElement;
        const isUserInteracting = activeEl && (
          activeEl.tagName === 'INPUT' || 
          activeEl.tagName === 'TEXTAREA' || 
          activeEl.tagName === 'SELECT' ||
          activeEl.isContentEditable ||
          (activeEl.closest && (
            activeEl.closest('.call-actions-clean') || 
            activeEl.closest('.selected-contact-card') ||
            activeEl.closest('.contact-column') ||
            activeEl.closest('.filters') ||
            activeEl.closest('.topbar-search-wrap')
          ))
        );
        const currentNotesVal = document.getElementById('notes')?.value?.trim();
        const hasDraft = Boolean(currentNotesVal || (selectedContactId && draftNotesByContact[selectedContactId]?.trim()));
        const hasOutcome = Boolean(selectedOutcome);
        const hasActiveSearch = Boolean(
          (contactSearchQuery && contactSearchQuery.trim()) ||
          (operatorSearchQuery && operatorSearchQuery.trim()) ||
          (historySearchQuery && historySearchQuery.trim()) ||
          (shiftSearchQuery && shiftSearchQuery.trim()) ||
          document.getElementById('contact-search')?.value?.trim() ||
          document.getElementById('operator-contact-search')?.value?.trim() ||
          document.getElementById('history-search')?.value?.trim() ||
          [...document.querySelectorAll('.column-search')].some(el => el.value && el.value.trim())
        );

        if (isUserInteracting || hasDraft || hasOutcome || hasActiveSearch) {
          return changed;
        }
      }
      render();
    }
    return changed;
  } catch (e) {
    if (!silent) console.warn('Sync error:', e);
    return false;
  }
};

window.refreshSupervisorData = async function() {
  showToast('Actualizando datos en vivo...');
  await window.syncStateFromServer(false);
  const gestionados = state.contacts.filter(c => Number(c.attempts) > 0).length;
  showToast(`✓ Datos sincronizados: ${gestionados} gestionados · ${state.history.length} llamadas`);
};

document.addEventListener('click', event => {
  if (event.target.closest('#refresh-dashboard-btn') || event.target.closest('#refresh-dashboard-hero-btn')) {
    event.preventDefault();
    window.refreshSupervisorData();
    return;
  }
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
    console.warn('Supabase not enabled, running in central server mode:', error.message);
    backendMode = 'demo';
  }

  // Sincronización inicial con la base central del servidor
  await window.syncStateFromServer(true);
  render();

  // Polling automático cada 5 segundos en tiempo real (tanto para supervisor como para operadoras)
  setInterval(async () => {
    if (currentUser) {
      await window.syncStateFromServer(true);
    }
  }, 5000);
}

bootstrap();