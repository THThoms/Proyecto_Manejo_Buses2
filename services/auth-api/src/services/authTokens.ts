// US21: helpers de hash y JWT.
//
// JWT payload base: { sub: usuarioId, email, purpose }
//   purpose='session' → 24h, usado para autenticar requests.
//   purpose='reset'   → 15min, usado solo por /auth/reset-password.

import bcrypt from 'bcryptjs';
import jwt, { type SignOptions } from 'jsonwebtoken';

const SALT_ROUNDS = 10;
const SESSION_EXPIRES = '24h';
const RESET_EXPIRES = '15m';

function getSecret(): string {
  return process.env.JWT_SECRET || 'dev-secret-change-me';
}

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, SALT_ROUNDS);
}

export async function comparePassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

export interface SessionTokenPayload {
  sub: number;        // usuarioId
  email: string;
  purpose: 'session';
}

export interface ResetTokenPayload {
  sub: number;
  email: string;
  purpose: 'reset';
}

export function signSessionToken(usuarioId: number, email: string): string {
  const payload: SessionTokenPayload = { sub: usuarioId, email, purpose: 'session' };
  const opts: SignOptions = { expiresIn: SESSION_EXPIRES };
  return jwt.sign(payload, getSecret(), opts);
}

export function signResetToken(usuarioId: number, email: string): string {
  const payload: ResetTokenPayload = { sub: usuarioId, email, purpose: 'reset' };
  const opts: SignOptions = { expiresIn: RESET_EXPIRES };
  return jwt.sign(payload, getSecret(), opts);
}

export function verifyToken<T extends { purpose: string }>(token: string, purpose: T['purpose']): T {
  const decoded = jwt.verify(token, getSecret()) as T;
  if (decoded.purpose !== purpose) {
    throw new Error('token purpose mismatch');
  }
  return decoded;
}
