# Centro de gestión · Clima Social GIZ

Sistema web para coordinar contactos, registrar llamadas telefónicas, gestionar mensajes de WhatsApp y monitorear el trabajo de operadores y supervisor para las encuestas **Clima Social GIZ**.

## Estado actual

La aplicación ya incluye un modo demo navegable con:

- Dashboard del supervisor.
- Vista de jornada del operador.
- Cola de contactos y llamadas.
- Integración de plantillas de WhatsApp personalizadas (llamada, no contesta, recordatorio).
- Inicio y cierre de jornada por operador/a.
- Consulta de jornadas para el supervisor.
- Registro de resultados y observaciones.
- Historial de gestiones.
- Importación de archivos XLSX (incluyendo matrices de seguimiento GIZ) y CSV.
- Exportación del historial en Excel estilizado.
- Persistencia local para pruebas.
- Esquema de PostgreSQL/Supabase en `supabase/schema.sql`.

Los datos del modo demo se guardan en el navegador y el encabezado lo identifica como tal. No deben utilizarse para la operación real hasta conectar Supabase.

## Ejecutar localmente

```bash
npm install
npm start
```

Abrir `http://localhost:10000` (o el puerto configurado en `PORT`).

## Desplegar en Render

El archivo `render.yaml` ya define el servicio web. En Render se puede crear un Blueprint desde el repositorio o configurar manualmente:

- Root Directory: `call-center-giz`
- Build Command: `npm install`
- Start Command: `npm start`
- Health Check Path: `/`

## Siguiente integración

1. Crear un proyecto en Supabase.
2. Ejecutar `supabase/schema.sql` en el SQL Editor.
3. Crear los usuarios iniciales en Auth y sus perfiles.
4. Añadir `SUPABASE_URL` y `SUPABASE_ANON_KEY` en Render.
5. Sustituir las operaciones demo por consultas autenticadas y suscripciones Realtime.

El endpoint `/config` solo expone las variables públicas necesarias para el cliente. No añadir nunca una `SUPABASE_SERVICE_ROLE_KEY` a este archivo ni a variables que se envíen al navegador.

La `anon key` puede utilizarse en el frontend con RLS habilitado. Nunca se debe exponer la `service_role key` en el navegador.
