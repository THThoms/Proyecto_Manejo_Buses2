import { Request, Response, NextFunction } from 'express';
import { extractAndVerify } from '../services/jwtVerify';

/**
 * US21 (SEC-01): solo el rol OFICINISTA puede listar transferencias pendientes
 * o descargar comprobantes. Valida el JWT emitido por auth-api.
 *
 * Modo desarrollo: acepta header X-User-Role como fallback si no hay JWT.
 */
export function requireOficinista(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = extractAndVerify(req.header('authorization'));

    if (payload) {
      if (!payload.roles.includes('OFICINISTA')) {
        return res.status(403).json({ error: 'Acceso restringido al rol OFICINISTA' });
      }
      return next();
    }

    // Fallback solo en desarrollo/test
    if (process.env.NODE_ENV !== 'production') {
      const role = req.header('x-user-role');
      if (role !== 'OFICINISTA') {
        return res.status(403).json({ error: 'Acceso restringido al rol OFICINISTA' });
      }
      return next();
    }

    return res.status(401).json({ error: 'token requerido' });
  } catch {
    return res.status(401).json({ error: 'token inválido o expirado' });
  }
}
