// US21: extrae el JWT de session del header Authorization: Bearer <token>
// y popula req.user. Devuelve 401 si falta o es inválido.

import { Request, Response, NextFunction } from 'express';
import { verifyToken, type SessionTokenPayload } from '../services/authTokens';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: { usuarioId: number; email: string };
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.header('authorization') ?? '';
  const match = /^Bearer\s+(.+)$/i.exec(header);
  if (!match) {
    return res.status(401).json({ error: 'token requerido' });
  }
  try {
    const decoded = verifyToken<SessionTokenPayload>(match[1], 'session');
    req.user = { usuarioId: decoded.sub, email: decoded.email };
    next();
  } catch {
    return res.status(401).json({ error: 'token inválido o expirado' });
  }
}
