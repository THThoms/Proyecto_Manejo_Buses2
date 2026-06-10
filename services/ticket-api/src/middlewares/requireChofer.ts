import { Request, Response, NextFunction } from 'express';
import { extractAndVerify } from '../services/jwtVerify';

/**
 * US21 (SEC-01): solo el rol OFICIAL (chofer) puede realizar cobros en bus
 * desde la PWA. Valida el JWT emitido por auth-api.
 *
 * NOTA: El NombreRol en la DB es 'OFICIAL', no 'CHOFER'. Este middleware
 * acepta ambos para compatibilidad con tests existentes.
 *
 * Modo desarrollo: acepta header X-User-Role como fallback si no hay JWT.
 */
export function requireChofer(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = extractAndVerify(req.header('authorization'));

    if (payload) {
      const esChofer = payload.roles.includes('OFICIAL') || payload.roles.includes('CHOFER');
      if (!esChofer) {
        return res.status(403).json({ error: 'Acceso restringido al rol CHOFER/OFICIAL' });
      }
      return next();
    }

    // Fallback solo en desarrollo/test
    if (process.env.NODE_ENV !== 'production') {
      const role = req.header('x-user-role');
      if (role !== 'CHOFER' && role !== 'OFICIAL') {
        return res.status(403).json({ error: 'Acceso restringido al rol CHOFER/OFICIAL' });
      }
      return next();
    }

    return res.status(401).json({ error: 'token requerido' });
  } catch {
    return res.status(401).json({ error: 'token inválido o expirado' });
  }
}
