'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AUTH_API_URL, saveSession } from '@/lib/auth';
import styles from './auth.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${AUTH_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.error ?? `HTTP ${res.status}`);
      saveSession(body.token, body.usuario);
      const roles: string[] = body.usuario?.roles || [];
      if (roles.includes('ADMIN') || roles.includes('DUENO')) {
        router.push('/admin');
      } else if (roles.includes('OFICINISTA')) {
        router.push('/oficinista');
      } else if (roles.includes('OFICIAL')) {
        // Los choferes usan la PWA (puerto 3011). Redirigimos automáticamente.
        const pwaUrl = process.env.NEXT_PUBLIC_PWA_URL || 'http://localhost:3011';
        window.location.href = `${pwaUrl}/chofer/cobrar`;
      } else {
        router.push('/');
      }
    } catch (err: any) {
      const msg = err?.message ?? 'Error al iniciar sesión';
      // "Failed to fetch" = auth-api inalcanzable. Damos un mensaje útil con la URL.
      setError(
        msg === 'Failed to fetch'
          ? `No se pudo conectar con el servidor (${AUTH_API_URL}). Verificá que auth-api esté corriendo y que la URL en .env.local sea accesible.`
          : msg,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>Iniciar sesión</h1>
      <form onSubmit={submit} className={styles.form}>
        <label className={styles.field}>
          <span>Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
        </label>
        <label className={styles.field}>
          <span>Contraseña</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} autoComplete="current-password" />
        </label>
        <button className={styles.primary} disabled={loading}>
          {loading ? 'Ingresando…' : 'Ingresar'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
      <p className={styles.foot}>
        ¿No tenés cuenta? <Link href="/registro">Registrate</Link>
      </p>
      <p className={styles.foot} style={{ marginTop: '8px', fontSize: '12px', color: '#9ca3af' }}>
        ¿Eres chofer? Usá la app de operaciones en{' '}
        <a href="http://localhost:3011/login" style={{ color: '#2563eb' }}>localhost:3011</a>
      </p>
    </main>
  );
}
