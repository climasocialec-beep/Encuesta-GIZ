# Reglas del Proyecto: Clima Social GIZ (Metodología GStack)

## 1. Modo de Ejecución Autónoma (Zero-Friction / Proactive)
- **Proceder directamente:** NO te detengas a pedir confirmaciones o permisos paso a paso para leer/editar archivos, instalar paquetes o ejecutar comandos de prueba.
- **Ejecución directa:** Ejecuta todos los cambios necesarios de principio a fin, prueba que funcionen y entrega el resultado final ya verificado.
- **Planificación sin bloqueo:** Si se requiere un plan técnico, constrúyelo y procede inmediatamente con la ejecución sin interrumpir el flujo.

## 2. Ciclo de Trabajo
1. **Think (CEO)**: Analizar la necesidad real y simplificar el alcance.
2. **Plan (Eng Manager)**: Diseñar la arquitectura técnica en `implementation_plan.md` y proceder a implementar.
3. **Build (Staff Engineer)**: Implementar código modular, claro y sin sobre-ingeniería.
4. **Review & Security**: Auditar seguridad (sanitización de inputs, variables de entorno protegidas).
5. **QA & Test**: Verificar funcionamiento del servidor y endpoints locales (`node server.js` / `http://localhost:10000`).
6. **Ship**: Generar commits limpios con Conventional Commits y registrar cambios en `walkthrough.md`.

## 3. Estándares Técnicos del Proyecto
- **Frontend**: Vanilla JS moderno, CSS con variables y diseño responsivo, sin frameworks innecesarios.
- **Backend**: Express.js ligero, endpoints modulares, procesamiento seguro de archivos Excel con `exceljs`.
- **Datos**: LocalStorage/SessionStorage para modo local demo; esquema Supabase PostgreSQL para producción.
- **Seguridad**: Nunca exponer `service_role key` en el frontend.
