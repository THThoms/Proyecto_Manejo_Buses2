# 🚀 Guía de Inicio: Arquitectura y Flujo de Trabajo

Bienvenidos al proyecto del **Sistema de Tickets de Bus**. Ya está configurada la arquitectura base del proyecto. Implementamos un **Monorepo** con Turborepo y NPM Workspaces. Esto significa que todos los microservicios y frontends viven en un solo repositorio, pero cada uno puede trabajar en su parte de forma aislada sin tener que encender toda la plataforma.

## 🏗️ ¿Cómo está estructurado el proyecto?

```
proyecto-buses/
├── apps/
│   ├── frontend-web/       → Panel administrativo (Next.js)
│   └── frontend-pwa/       → App móvil para chofer/pasajero (Next.js)
├── services/
│   ├── auth-api/           → Autenticación y usuarios (Express + TS)
│   ├── bus-api/            → Cooperativas, buses, rutas, GPS (Express + TS)
│   └── ticket-api/         → Compras, boletos, pagos, QR (Express + TS)
├── packages/
│   ├── database/           → 4 esquemas Prisma + init.sql
│   ├── types/              → Tipos compartidos (TypeScript)
│   └── ui/                 → Componentes reutilizables
├── docker-compose.yml      → PostgreSQL 15 local
├── tsconfig.base.json      → TypeScript compartido
├── .eslintrc.js            → ESLint compartido
└── turbo.json              → Configuración Turborepo
```

- **`packages/database/` (Capa Compartida):** Aquí vive nuestro `init.sql` y los 4 esquemas de Prisma. Cada microservicio tiene su propia base de datos:
  - `auth_db` → Usuarios, roles, permisos, sesiones (6 tablas)
  - `bus_db` → Cooperativas, buses, rutas, frecuencias, GPS, configuración (12 tablas)
  - `ticket_db` → Compras, boletos, pagos, escaneos, alertas, anti-fraude (11 tablas)
  - `ms_pagos` → Ingresos por viaje, liquidaciones, pagos a cooperativas (4 tablas)

- **`apps/` y `services/` (Tus áreas de trabajo):** Cada carpeta tiene su propio `package.json` y `tsconfig.json`.

- **`docker-compose.yml`:** Levanta PostgreSQL 15 e inicializa las 4 bases de datos automáticamente.

---

## 💻 Pasos para empezar a programar (Git Flow)

Para evitar conflictos y mantener el código ordenado, trabajaremos con **Git Flow**. El código estable y de integración vive en la rama `develop`. **Nadie trabaja directamente en `develop` ni en `main`.**

### 1. Descarga el proyecto e instala todo (Primera vez)
Abre tu terminal y ejecuta esto una sola vez:

```bash
git clone [URL_DEL_REPOSITORIO]
cd proyecto-buses
git checkout develop
npm install
```
> **Nota:** Con ese único `npm install` en la raíz, se descargarán las dependencias de TODOS los servicios y se enlazaran los paquetes compartidos automáticamente.

### 2. Configura las Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
# AUTH SERVICE
AUTH_DATABASE_URL="postgresql://admin:rootpassword@localhost:5433/auth_db?schema=public"

# BUS SERVICE
BUS_DATABASE_URL="postgresql://admin:rootpassword@localhost:5433/bus_db?schema=public"

# TICKET SERVICE
TICKET_DATABASE_URL="postgresql://admin:rootpassword@localhost:5433/ticket_db?schema=public"

# PAGOS SERVICE
PAGOS_DATABASE_URL="postgresql://admin:rootpassword@localhost:5433/ms_pagos?schema=public"
```

### 3. Levanta la Base de Datos Local
Antes de programar, necesitas encender la base de datos local usando Docker. Ejecuta en la raíz del proyecto:
```bash
docker-compose up -d
```
> Esto levantará PostgreSQL y creará las 4 bases de datos de los microservicios automáticamente utilizando nuestro script de inicialización.

### 4. Crea tu rama de trabajo (Feature Branch)
¿Te toca hacer el login? ¿La vista de buses? Crea tu propia rama **siempre a partir de `develop`**:
```bash
git checkout -b feature/nombre-de-tu-tarea
```

### 5. Enciende solo tu territorio
Gracias a Turborepo, no necesitas prender toda la plataforma. 

- Si te toca trabajar en el backend de buses, solo enciendes eso:
  ```bash
  npx turbo run dev --filter=@proyecto-saas/bus-api
  ```
- Si, por ejemplo, Andrew o Gaby necesitan ver ambos frontends al mismo tiempo:
  ```bash
  npx turbo run dev --filter=@proyecto-saas/frontend-web --filter=@proyecto-saas/frontend-pwa
  ```

### 6. ¿Cómo consultar la Base de Datos?
Si estás en una API y necesitas datos, **no configures Prisma desde cero en tu carpeta**. Simplemente importa el cliente desde nuestro paquete compartido. *(Próximamente definiremos la exportación exacta en el index de database)*.

Cuando alguien actualice la base de datos y tú hagas `git pull`, tendrás el autocompletado y los tipos actualizados de inmediato en todo tu editor.

---

## 🔄 Flujo de Subida de Código (Pull Requests)

Cuando termines tu tarea en tu rama feature, el flujo es el siguiente:

1. **Terminal:** Guardas tus cambios localmente.
   ```bash
   git add .
   git commit -m "feat: breve descripción de lo que hiciste"
   ```
2. **Terminal:** Subes tu rama a GitHub.
   ```bash
   git push origin feature/nombre-de-tu-tarea
   ```
3. 🛑 **PAUSA EN LA TERMINAL:** Aquí dejas la consola.
4. **Navegador:** Vas a GitHub, abres el **Pull Request (PR)** apuntando hacia `develop` y pides que te revisen.
5. **Navegador:** El equipo aprueba el PR y le dan al botón verde "Merge" en GitHub. *(GitHub hace la fusión por ti en la nube)*.
6. **Terminal:** Vuelves a tu consola, regresas a la rama de integración y descargas los cambios que GitHub acaba de fusionar.
   ```bash
   git checkout develop
   git pull origin develop
   ```

¡Y listo! Ya puedes repetir el ciclo desde el **Paso 4** para tu siguiente tarea.

---

## 🛠️ Tecnologías del Proyecto

| Capa | Tecnología |
|---|---|
| **Monorepo** | Turborepo + NPM Workspaces |
| **Frontend** | Next.js 13.4, React 18, Tailwind CSS |
| **Backend** | Express, TypeScript, Nodemon |
| **Base de Datos** | PostgreSQL 15, Prisma ORM |
| **Autenticación** | NextAuth / JWT + bcryptjs |
| **Pagos** | Stripe SDK |
| **QR** | qrcode |
| **Email** | Nodemailer |
| **Contenedores** | Docker Compose |
| **Linting** | ESLint + Prettier |

## 🌿 Ramas del Repositorio

| Rama | Propósito |
|---|---|
| `main` | Código en producción, estable |
| `staging` | Pre-producción, pruebas de integración |
| `develop` | Integración del equipo, rama base para features |
| `feature/US-XX` | Ramas de trabajo individuales |
