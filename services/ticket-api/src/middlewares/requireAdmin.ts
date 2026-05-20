import { Request, Response, NextFunction } from 'express';

/**
 * US19: middleware que valida que el caller sea ADMIN y extrae la lista de
 * cooperativas asignadas desde el header `X-Cooperativas-Ids`.
 *
 * Mientras US21 (login real) no exista, mockeamos identidad via headers:
 *   - `X-User-Role: ADMIN`
 *   - `X-User-Id: <number>`
 *   - `X-Cooperativas-Ids: 1,2,3`
 *
 * TODO Sprint 2: reemplazar por validación de JWT + lectura de auth-api.
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      adminUser?: {
        usuarioId: number;
        cooperativasIds: number[];
      };
    }
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const role = req.header('x-user-role');
  if (role !== 'ADMIN') {
    return res.status(403).json({ error: 'Acceso restringido al rol ADMIN' });
  }

  const userIdHeader = req.header('x-user-id');
  const usuarioId = Number(userIdHeader);
  if (!Number.isInteger(usuarioId) || usuarioId <= 0) {
    return res.status(400).json({ error: 'X-User-Id requerido' });
  }

  const coopsHeader = req.header('x-cooperativas-ids') ?? '';
  const cooperativasIds = coopsHeader
    .split(',')
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isInteger(n) && n > 0);

  if (cooperativasIds.length === 0) {
    return res.status(400).json({
      error: 'X-Cooperativas-Ids requerido (al menos una cooperativa asignada)',
    });
  }

  req.adminUser = { usuarioId, cooperativasIds };
  next();
}
