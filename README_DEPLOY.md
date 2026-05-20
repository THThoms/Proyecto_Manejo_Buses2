# Guía de Deploy — Sistema de Tickets de Bus

Esta guía documenta cómo desplegar el monorepo en producción o staging. **No
incluye secretos reales**; copiar cada `.env.example` a `.env` y completar.

## Componentes

| Componente | Rol | Puerto local | Build target |
|---|---|---|---|
| `services/auth-api` | Login / registro / JWT / reset password | 3001 | Node |
| `services/bus-api` | Cooperativas, buses, rutas, turnos, paradas, config visual | 3002 | Node |
| `services/ticket-api` | Compras, pagos, boletos, reportes, liquidación, emails | 3003 | Node |
| `apps/frontend-web` | Web de pasajero / oficinista / admin (Next.js) | 3010 | Next |
| `apps/frontend-pwa` | PWA de chofer (Next.js) | 3011 | Next |
| Postgres 15 | 3 schemas: `auth_db`, `bus_db`, `ticket_db` | 5433 → 5432 | Docker o managed |

## Variables de entorno (resumen)

> Cada workspace tiene su `.env.example`. Copiarlo y rellenar **antes** del build.

### `services/auth-api/.env`
```
PORT=3001
AUTH_DATABASE_URL=postgresql://USER:PASS@HOST:5432/auth_db?schema=public
JWT_SECRET=GENERAR_VALOR_LARGO_Y_RANDOM
APP_PUBLIC_URL=https://app.tu-dominio.com
```

### `services/bus-api/.env`
```
PORT=3002
BUS_DATABASE_URL=postgresql://USER:PASS@HOST:5432/bus_db?schema=public
DATABASE_URL=postgresql://USER:PASS@HOST:5432/bus_db?schema=public
```

### `services/ticket-api/.env`
```
PORT=3003
TICKET_DATABASE_URL=postgresql://USER:PASS@HOST:5432/ticket_db?schema=public
BUS_API_URL=http://bus-api.internal:3002
AUTH_API_URL=http://auth-api.internal:3001
FRONTEND_URL=https://app.tu-dominio.com
APP_PUBLIC_URL=https://app.tu-dominio.com

# US11
UPLOAD_DIR=/var/uploads/comprobantes
MAX_UPLOAD_BYTES=5242880

# US10 (Stripe sandbox o prod)
STRIPE_SECRET_KEY=sk_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# US23 SMTP — si SMTP_HOST queda vacío el sistema cae a stub (console.log) sin romper flujo.
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM="TicketBus <no-reply@tu-dominio.com>"
SMTP_SECURE=false
```

### `apps/frontend-web/.env.local` y `apps/frontend-pwa/.env.local`
```
NEXT_PUBLIC_BUS_API_URL=https://bus.tu-dominio.com
NEXT_PUBLIC_TICKET_API_URL=https://ticket.tu-dominio.com
NEXT_PUBLIC_AUTH_API_URL=https://auth.tu-dominio.com
# PWA: VAPID público opcional para push real.
NEXT_PUBLIC_VAPID_PUBLIC_KEY=
```

## Build y verificación

```bash
npm install
npx prisma generate --schema=packages/database/prisma/auth-schema.prisma
npx prisma generate --schema=packages/database/prisma/bus-schema.prisma
npx prisma generate --schema=packages/database/prisma/ticket-schema.prisma
npx turbo run build
npm test --workspace services/ticket-api
npm test --workspace services/auth-api
npm test --workspace services/bus-api
```

## Migraciones (Prisma)

En cada servicio:
```bash
npm run db:push --workspace services/auth-api
npm run db:push --workspace services/bus-api
npm run db:push --workspace services/ticket-api
```

> `db:push` es seguro en dev. En producción usar `prisma migrate deploy` previa
> generación de migraciones con `prisma migrate dev` en local.

## Health checks

| Servicio | URL | Esperado |
|---|---|---|
| auth-api | `GET /health` | `{ status: "ok", service: "auth-api" }` |
| bus-api | `GET /health` | `{ status: "ok", service: "bus-api" }` |
| ticket-api | `GET /health` | OK |

## Smoke tests post-deploy

1. `GET /health` en los 3 backends → 200.
2. `GET {bus-api}/cooperativas` → array (vacío o seed).
3. `POST {auth-api}/auth/register` con email único → 201 + token.
4. `GET {ticket-api}/reportes/boletos?fechaDesde=YYYY-MM-DD&fechaHasta=YYYY-MM-DD` con headers `X-User-Role: ADMIN`, `X-User-Id: 1`, `X-Cooperativas-Ids: 1` → 200 con estructura `{filtros, totales, agrupadoPorCanal, agrupadoPorTipoPasajero, detalle}`.
5. Abrir `/login` en `frontend-web` → renderiza, formulario funcional.
6. Abrir `/chofer/cobrar` en PWA → renderiza, service worker registrado.

## Riesgos conocidos a vigilar en producción

- **Identidad mockeada en headers** (`X-User-Role`, `X-Cooperativas-Ids`). US21 cubre login pero los servicios de tickets/bus **aún confían en los headers**. Reemplazar por validación JWT antes de exponer a internet sin reverse proxy autenticado.
- **Stripe**: `STRIPE_WEBHOOK_SECRET` debe coincidir con el endpoint configurado en el dashboard.
- **Uploads**: `UPLOAD_DIR` debe ser un volumen persistente (o mover a S3).
- **SMTP**: si `SMTP_HOST` queda vacío, no se envían emails reales; el sistema sigue funcionando.
- **Postgres**: existen 3 schemas separados. Si se usa una sola base, definir `?schema=` correcto en cada URL.

## Despliegue por plataforma (referencia)

### Render / Railway
- 3 servicios `web` (Node) + 2 servicios `web` (Next).
- Build command por servicio: `npm install && npm run build --workspace <ws>`.
- Start command: `npm start --workspace <ws>`.
- Postgres add-on conectado a cada servicio con la URL correspondiente.

### Vercel (frontends)
- Apuntar al directorio `apps/frontend-web` (o `frontend-pwa`).
- Variables `NEXT_PUBLIC_*` se setean en project settings.
- Build command: `npm install && npm run build`.

### Docker (referencia)
- `docker compose up -d` levanta solo Postgres.
- Los servicios se ejecutan via `npm run dev` o via PM2/systemd en una VPS.

## CI

Existe workflow en `.github/workflows/ci.yml`. Corre en cada PR a `develop` o `main`:
1. `npm install`
2. `npx prisma generate` para los 3 schemas
3. `npx turbo run build`
4. `npm test --workspace services/ticket-api`
5. `npm test --workspace services/auth-api`
6. `npm test --workspace services/bus-api`

## Checklist de release

- [ ] `npm test` pasa en los 3 backends con jest.
- [ ] `npx turbo run build` no tiene errores.
- [ ] `.env` poblado en cada servicio (no commiteado).
- [ ] `JWT_SECRET` rotado.
- [ ] Stripe webhook configurado con la URL pública.
- [ ] SMTP configurado (o aceptado el modo stub).
- [ ] Backup de las 3 bases programado.
