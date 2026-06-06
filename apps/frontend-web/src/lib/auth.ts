// US21: helpers de auth en el cliente. Persiste el JWT en localStorage.
// Cuando US21 esté integrado server-side, esto migrará a cookie httpOnly.

const TOKEN_KEY = 'auth_token_v1';
const USER_KEY = 'auth_user_v1';

export interface AuthUser {
  id: number;
  nombre: string;
  email: string;
  estado?: string;
  roles?: string[];
}

export const AUTH_API_URL =
  process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:3001';

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser(): AuthUser | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function saveSession(token: string, user: AuthUser) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function authHeaders(): Record<string, string> {
  const t = getToken();
  return t ? { Authorization: `Bearer ${t}` } : {};
}
