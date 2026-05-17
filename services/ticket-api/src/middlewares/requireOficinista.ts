import { Request, Response, NextFunction } from 'express';

/**
 * US11 CA #4: solo el rol OFICINISTA puede listar transferencias pendientes
 * o descargar comprobantes. Auth real aún no existe (auth-api es mock); por
 * ahora leemos `X-User-Role` del header como puente.
 *
 * TODO Sprint 2: reemplazar por validación de JWT contra auth-api real.
 */
export function requireOficinista(req: Request, res: Response, next: NextFunction) {
  const role = req.header('x-user-role');
  if (role !== 'OFICINISTA') {
    return res.status(403).json({ error: 'Acceso restringido al rol OFICINISTA' });
  }
  next();
}
