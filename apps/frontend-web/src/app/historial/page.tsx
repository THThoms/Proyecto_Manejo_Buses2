'use client';

// US21: historial del usuario logueado. Lista compras + boletos + link a PDF.

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getUser, getToken, clearSession, type AuthUser } from '@/lib/auth';
import styles from './historial.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';

interface Boleto {
  id: number;
  uuidQr: string;
  nombrePasajero: string;
  tipoTarifa: string;
  estado: 'PENDIENTE' | 'VIGENTE' | 'UTILIZADO' | 'EXPIRADO' | 'ANULADO';
  expiraEn: string;
}
interface Compra {
  id: number;
  fechaViaje: string;
  total: string | number;
  canal: string;
  estado: string;
  creadoEn: string;
  origen: string | null;
  destino: string | null;
  turnoId: number | null;
  boletos: Boleto[];
}

const ESTADO_COLOR: Record<string, string> = {
  PENDIENTE: '#9ca3af',
  VIGENTE: '#15803d',
  UTILIZADO: '#2563eb',
  EXPIRADO: '#b45309',
  ANULADO: '#b91c1c',
};

export default function HistorialPage() {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [compras, setCompras] = useState<Compra[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const u = getUser();
    const t = getToken();
    if (!u || !t) {
      router.replace('/login');
      return;
    }
    setUser(u);
    cargar(u.id);
  }, [router]);

  const cargar = async (uid: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${TICKET_API_URL}/boletos/usuario/${uid}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: Compra[] = await res.json();
      setCompras(data);
    } catch (err: any) {
      setError(err?.message ?? 'Error cargando historial');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    clearSession();
    router.push('/login');
  };

  return (
    <main className={styles.wrap}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Mi historial</h1>
          {user && <p className={styles.subtitle}>{user.nombre} · {user.email}</p>}
        </div>
        <div className={styles.headerActions}>
          <Link href="/" className={styles.searchBtn}>Buscar viajes</Link>
          <button onClick={logout} className={styles.logout}>Cerrar sesión</button>
        </div>
      </header>

      {loading && <p className={styles.note}>Cargando…</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && compras.length === 0 && <p className={styles.note}>Aún no tenés compras registradas.</p>}

      {compras.map((c) => (
        <article key={c.id} className={styles.card}>
          <header className={styles.cardHead}>
            <div>
              <strong>Compra #{c.id}</strong>
              <span className={styles.tag}>{c.canal}</span>
              <span className={styles.tag}>{c.estado}</span>
            </div>
            <span className={styles.date}>{new Date(c.creadoEn).toLocaleDateString('es-EC')}</span>
          </header>
          <div className={styles.cardBody}>
            <div className={styles.route}>
              <span>{c.origen ?? '—'}</span>
              <span className={styles.arrow}>→</span>
              <span>{c.destino ?? '—'}</span>
            </div>
            <div className={styles.viaje}>Viaje: {new Date(c.fechaViaje).toLocaleDateString('es-EC')}</div>
            <ul className={styles.boletos}>
              {c.boletos.map((b) => (
                <li key={b.id} className={styles.boleto}>
                  <span>
                    <strong>{b.nombrePasajero}</strong> · {b.tipoTarifa}
                  </span>
                  <span className={styles.estado} style={{ background: ESTADO_COLOR[b.estado] ?? '#6b7280' }}>{b.estado}</span>
                  <Link className={styles.pdfLink} href={`${TICKET_API_URL}/boletos/${b.id}/pdf`} target="_blank">PDF</Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </main>
  );
}
