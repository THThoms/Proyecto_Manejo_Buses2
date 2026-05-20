'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AUTH_API_URL, saveSession } from '@/lib/auth';
import styles from '../login/auth.module.css';

export default function RegistroPage() {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 8 || !/\d/.test(password)) {
      setError('La contraseña debe tener al menos 8 caracteres y 1 número.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${AUTH_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, password }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.error ?? `HTTP ${res.status}`);
      saveSession(body.token, body.usuario);
      router.push('/historial');
    } catch (err: any) {
      setError(err?.message ?? 'Error al crear la cuenta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>Crear cuenta</h1>
      <form onSubmit={submit} className={styles.form}>
        <label className={styles.field}>
          <span>Nombre completo</span>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required minLength={2} autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
        </label>
        <label className={styles.field}>
          <span>Contraseña</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} autoComplete="new-password" />
          <small className={styles.hint}>Mínimo 8 caracteres con al menos 1 número.</small>
        </label>
        <button className={styles.primary} disabled={loading}>
          {loading ? 'Creando…' : 'Crear cuenta'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
      <p className={styles.foot}>
        ¿Ya tenés cuenta? <Link href="/login">Iniciar sesión</Link>
      </p>
    </main>
  );
}
