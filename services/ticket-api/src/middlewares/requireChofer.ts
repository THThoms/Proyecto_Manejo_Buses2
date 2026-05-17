import { Request, Response, NextFunction } from 'express';

/**
 * US14 CA #5: solo el rol CHOFER puede realizar cobros en bus desde la PWA.
 * Por ahora leemos `X-User-Role` del header como mock de auth.
 */
export function requireChofer(req: Request, res: Response, next: NextFunction) {
  const role = req.header('x-user-role');
  if (role !== 'CHOFER') {
    return res.status(403).json({ error: 'Acceso restringido al rol CHOFER' });
  }
  next();
}
