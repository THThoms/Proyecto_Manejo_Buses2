import { Request, Response, NextFunction } from 'express';
import { extractAndVerify } from '../services/jwtVerify';

/**
 * US21 (SEC-01): middleware que valida el JWT del caller y verifica que tenga
 * rol ADMIN o DUENO. El token debe venir en el header:
 *   Authorization: Bearer <token>
 *
 * También extrae la lista de cooperativas asignadas desde el header
 * `X-Cooperativas-Ids` (pendiente de migrar a auth-api en el futuro).
 *
 * Modo desarrollo: si no hay token JWT pero NODE_ENV !== 'production',
 * acepta el header X-User-Role como fallback para no romper tests locales.
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      adminUser?: {
        usuarioId: number;
        cooperativasIds: number[];
        adminRole: string;
      };
    }
  }
}

const ROLES_ADMIN = new Set(['ADMIN', 'DUENO']);

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  let usuarioId: number;
  let userRoles: string[] = [];

  try {
    const payload = extractAndVerify(req.header('authorization'));

    if (payload) {
      // ── Flujo normal: JWT válido presente ──────────────────────────────────
      usuarioId = payload.sub;
      userRoles = payload.roles;
    } else if (process.env.NODE_ENV !== 'production') {
      // ── Fallback solo en desarrollo/test: acepta header mock ───────────────
      const roleHeader = req.header('x-user-role') ?? '';
      const idHeader = Number(req.header('x-user-id') ?? '0');
      if (!roleHeader || !Number.isInteger(idHeader) || idHeader <= 0) {
        return res.status(401).json({ error: 'token requerido' });
      }
      userRoles = [roleHeader.toUpperCase()];
      usuarioId = idHeader;
    } else {
      return res.status(401).json({ error: 'token requerido' });
    }
  } catch {
    return res.status(401).json({ error: 'token inválido o expirado' });
  }

  const hasAdminRole = userRoles.some((r) => ROLES_ADMIN.has(r));
  console.log('[requireAdmin] hasAdminRole:', hasAdminRole, 'userRoles:', userRoles);
  if (!hasAdminRole) {
    return res.status(403).json({ error: 'Acceso restringido al rol ADMIN' });
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

  req.adminUser = { 
    usuarioId: usuarioId!, 
    cooperativasIds,
    adminRole: userRoles.find(r => ROLES_ADMIN.has(r)) || 'ADMIN' 
  };
  next();
}
