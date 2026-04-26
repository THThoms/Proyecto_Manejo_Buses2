# Auth API

**Qué es**: Servicio encargado de la gestión de usuarios, roles y autenticación mediante JWT.

## Requisitos
- Node.js (v18 o superior recomendado)
- Docker corriendo (para la base de datos PostgreSQL)

## Instalación
Desde la raíz del proyecto:
```bash
npm install
npx turbo run dev --filter=@proyecto-saas/auth-api
```

## Variables de entorno
- `PORT`: Puerto en el que corre el servicio.
- `JWT_SECRET`: Llave secreta para firmar los tokens.
- `AUTH_DATABASE_URL`: URL de conexión a la base de datos PostgreSQL.

## Endpoints

### POST `/auth/login`
**Body**:
```json
{
  "email": "string",
  "password": "string"
}
```
**Respuesta (200 OK)**:
```json
{
  "accessToken": "jwt_token_here",
  "user": {
    "id": 1,
    "nombre": "Admin",
    "email": "admin@example.com"
  }
}
```
**Respuesta (401 Unauthorized)**:
```json
{
  "message": "Credenciales inválidas"
}
```
