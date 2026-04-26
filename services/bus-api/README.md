# 🚌 Bus API - Microservicio de Flotas y Rutas

Este servicio se encarga de la gestión integral de buses, cooperativas, dueños y las rutas del sistema de tickets.

## 🚀 Inicio Rápido

### Requisitos Previos
1. Tener el contenedor de base de datos encendido: `docker compose up -d`
2. Haber instalado las dependencias en la raíz: `npm install`

### Ejecución en Desarrollo
Desde la carpeta raíz del proyecto:
```bash
npx turbo run dev --filter=@proyecto-saas/bus-api
```
O directamente desde esta carpeta:
```bash
npm run dev
```

El servicio estará disponible en: `http://localhost:3002`

---

## 🛠 Endpoints de la API

### Salud del Sistema
*   **GET `/health`**: Verifica el estado del servicio.

### Gestión de Buses
*   **GET `/buses`**: Lista todos los buses registrados.
*   **GET `/buses/:id`**: Obtiene el detalle de un bus específico (incluye cooperativa, dueño y asientos).
*   **POST `/buses`**: Registra un nuevo bus.
    *   **Body (JSON):**
        ```json
        {
          "cooperativaId": 1,
          "duenoId": 1,
          "placa": "ABC-1234",
          "marca": "Hino",
          "carroceria": "Picosa",
          "modelo": "AK8J",
          "anio": 2023,
          "capacidad": 42,
          "color": "Blanco/Azul"
        }
        ```
*   **PUT `/buses/:id`**: Actualiza los datos de un bus.

### Gestión de Rutas
*   **GET `/rutas`**: Lista todas las rutas con sus paradas.
*   **GET `/rutas/:id`**: Detalle de una ruta específica.
*   **POST `/rutas`**: Crea una nueva ruta.
    *   **Body (JSON):**
        ```json
        {
          "nombre": "Quito - Guayaquil (Directo)",
          "origen": "Terminal Quitumbe",
          "destino": "Terminal Terrestre Guayaquil",
          "duracionMin": 480,
          "precioPasaje": 15.50
        }
        ```
*   **PUT `/rutas/:id`**: Actualiza datos de la ruta.

---

## 🏗 Stack Tecnológico
- **Node.js** & **Express**
- **TypeScript**
- **Prisma ORM** (Cliente compartido)
- **PostgreSQL** (Dockerizada)

---
**Desarrollado por:** Allen (Dev Full - bus-api)
**Sprint:** 1 - Fundación
