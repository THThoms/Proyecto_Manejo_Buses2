'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AUTH_API_URL, saveSession } from '../../lib/auth';

export default function RegistroPwaPage() {
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
      router.push('/chofer/cobrar');
    } catch (err: any) {
      const msg = err?.message ?? 'Error al crear la cuenta';
      setError(
        msg === 'Failed to fetch'
          ? `No se pudo conectar con el servidor (${AUTH_API_URL}). Verificá que auth-api esté corriendo.`
          : msg,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={wrap}>
      <h1 style={title}>Crear cuenta</h1>
      <form onSubmit={submit} style={form}>
        <label style={field}>
          <span>Nombre completo</span>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required minLength={2} autoComplete="name" style={inp} />
        </label>
        <label style={field}>
          <span>Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" style={inp} />
        </label>
        <label style={field}>
          <span>Contraseña</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} autoComplete="new-password" style={inp} />
          <small style={hint}>Mínimo 8 caracteres con al menos 1 número.</small>
        </label>
        <button style={btn} disabled={loading}>
          {loading ? 'Creando…' : 'Crear cuenta'}
        </button>
        {error && <p style={errStyle}>{error}</p>}
      </form>
      <p style={foot}>
        ¿Ya tenés cuenta? <Link href="/login" style={link}>Iniciar sesión</Link>
      </p>
    </main>
  );
}

const wrap: React.CSSProperties = { maxWidth: 420, margin: '40px auto', padding: 24, background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, fontFamily: 'system-ui, sans-serif' };
const title: React.CSSProperties = { fontSize: 24, fontWeight: 700, margin: '0 0 16px', color: '#1f2937' };
const form: React.CSSProperties = { display: 'grid', gap: 12 };
const field: React.CSSProperties = { display: 'flex', flexDirection: 'column', fontSize: 13 };
const inp: React.CSSProperties = { padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 14, background: 'white' };
const btn: React.CSSProperties = { padding: '10px 14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 14, cursor: 'pointer' };
const errStyle: React.CSSProperties = { color: '#b91c1c', fontSize: 13, margin: 0 };
const foot: React.CSSProperties = { marginTop: 16, fontSize: 13, color: '#6b7280' };
const link: React.CSSProperties = { color: '#2563eb' };
const hint: React.CSSProperties = { marginTop: 4, fontSize: 12, color: '#6b7280' };
