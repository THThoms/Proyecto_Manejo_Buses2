// US21 (SEC-01): verificación de JWT en ticket-api.
//
// ticket-api comparte JWT_SECRET con auth-api para poder verificar tokens
// localmente sin una llamada HTTP extra a auth-api en cada request.
//
// El payload incluye: { sub: usuarioId, email, roles: string[], purpose: 'session' }
// Los roles son los NombreRol activos del usuario (ej. 'ADMIN', 'OFICIAL', 'OFICINISTA').

import jwt from 'jsonwebtoken';

export interface SessionTokenPayload {
  sub: number;      // usuarioId
  email: string;
  roles: string[];  // NombreRol activos
  purpose: 'session';
  iat?: number;
  exp?: number;
}

function getSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    // En producción esto es obligatorio. En dev usamos el mismo fallback que auth-api.
    if (process.env.NODE_ENV === 'production') {
      throw new Error('[jwtVerify] JWT_SECRET no configurado en producción');
    }
    return 'dev-secret-change-me';
  }
  return secret;
}

/**
 * Verifica un token Bearer extraído del header Authorization.
 * Lanza un error si la firma es inválida o el token expiró.
 * Devuelve null si no hay header Authorization presente.
 */
export function extractAndVerify(authHeader: string | undefined): SessionTokenPayload | null {
  if (!authHeader) return null;
  const match = /^Bearer\s+(.+)$/i.exec(authHeader);
  if (!match) return null;

  const decoded = jwt.verify(match[1], getSecret()) as unknown as SessionTokenPayload;
  if (decoded.purpose !== 'session') {
    throw new Error('token purpose incorrecto');
  }
  return decoded;
}
