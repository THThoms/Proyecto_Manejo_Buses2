// US21: handlers de auth (registro, login, me, forgot, reset).
//
// Validaciones de password (CA #2): mínimo 8 caracteres y al menos 1 número.

import { Request, Response } from 'express';
import prisma from '../services/prisma';
import {
  hashPassword,
  comparePassword,
  signSessionToken,
  signResetToken,
  verifyToken,
  type ResetTokenPayload,
} from '../services/authTokens';
import { enviarEmailReset } from '../services/emailStub';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarPassword(pwd: string): string | null {
  if (typeof pwd !== 'string') return 'password requerido';
  if (pwd.length < 8) return 'password debe tener al menos 8 caracteres';
  if (!/\d/.test(pwd)) return 'password debe contener al menos 1 número';
  return null;
}

function sanitizeUsuario(u: any) {
  // CA #9: no exponemos passwordHash.
  if (!u) return null;
  const roles = u.roles ? u.roles.map((ur: any) => ur.rol?.nombre || ur.rolName) : [];
  return {
    id: u.id,
    nombre: u.nombre,
    email: u.email,
    estado: u.estado,
    creadoEn: u.creadoEn,
    roles,
  };
}

// POST /auth/register
export const register = async (req: Request, res: Response) => {
  const { nombre, email, password } = req.body ?? {};
  if (typeof nombre !== 'string' || nombre.trim().length < 2) {
    return res.status(400).json({ error: 'nombre inválido' });
  }
  if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'email inválido' });
  }
  const pwdErr = validarPassword(password);
  if (pwdErr) return res.status(400).json({ error: pwdErr });

  try {
    const existente = await prisma.usuario.findUnique({ where: { email } });
    if (existente) {
      return res.status(409).json({ error: 'email ya registrado' });
    }
    const passwordHash = await hashPassword(password);
    const u = await prisma.usuario.create({
      data: { nombre: nombre.trim(), email, passwordHash },
    });
    const token = signSessionToken(u.id, u.email);
    return res.status(201).json({ token, usuario: sanitizeUsuario(u) });
  } catch (err) {
    console.error('Error en register:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
};

// POST /auth/login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body ?? {};
  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'email y password requeridos' });
  }
  try {
    const u = await prisma.usuario.findUnique({
      where: { email },
      include: {
        roles: {
          include: {
            rol: true,
          },
        },
      },
    });
    if (!u || u.estado !== 'ACTIVO') {
      return res.status(401).json({ error: 'credenciales inválidas' });
    }
    const ok = await comparePassword(password, u.passwordHash);
    if (!ok) {
      return res.status(401).json({ error: 'credenciales inválidas' });
    }
    const token = signSessionToken(u.id, u.email);
    return res.json({ token, usuario: sanitizeUsuario(u) });
  } catch (err) {
    console.error('Error en login:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
};

// GET /auth/me
export const me = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ error: 'no autenticado' });
  try {
    const u = await prisma.usuario.findUnique({
      where: { id: req.user.usuarioId },
      include: {
        roles: {
          include: {
            rol: true,
          },
        },
      },
    });
    if (!u) return res.status(404).json({ error: 'usuario no encontrado' });
    return res.json({ usuario: sanitizeUsuario(u) });
  } catch (err) {
    console.error('Error en me:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
};

// POST /auth/forgot-password
export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body ?? {};
  if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'email inválido' });
  }
  try {
    const u = await prisma.usuario.findUnique({ where: { email } });
    // Respuesta neutra: no revelar si el email existe.
    if (u && u.estado === 'ACTIVO') {
      const resetToken = signResetToken(u.id, u.email);
      try {
        await enviarEmailReset({ email: u.email, nombre: u.nombre, resetToken });
      } catch (e) {
        console.warn('email reset falló (best-effort):', e);
      }
    }
    return res.json({ message: 'Si el email existe, recibirás instrucciones.' });
  } catch (err) {
    console.error('Error en forgotPassword:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
};

// POST /auth/reset-password
// Body: { token, newPassword }
export const resetPassword = async (req: Request, res: Response) => {
  const { token, newPassword } = req.body ?? {};
  if (typeof token !== 'string' || token.length < 10) {
    return res.status(400).json({ error: 'token requerido' });
  }
  const pwdErr = validarPassword(newPassword);
  if (pwdErr) return res.status(400).json({ error: pwdErr });

  let decoded: ResetTokenPayload;
  try {
    decoded = verifyToken<ResetTokenPayload>(token, 'reset');
  } catch {
    return res.status(401).json({ error: 'token inválido o expirado' });
  }

  try {
    const passwordHash = await hashPassword(newPassword);
    await prisma.usuario.update({
      where: { id: decoded.sub },
      data: { passwordHash },
    });
    return res.json({ message: 'Contraseña actualizada' });
  } catch (err) {
    console.error('Error en resetPassword:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
};
