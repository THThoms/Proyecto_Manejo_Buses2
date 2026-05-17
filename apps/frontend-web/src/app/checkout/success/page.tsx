'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '../checkout-status.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const POLL_INTERVALO_MS = 2000;
const POLL_TIMEOUT_MS = 30_000;

interface Boleto {
  id: number;
  cedulaPasajero: string;
  nombrePasajero: string;
  tipoTarifa: string;
  estado: string;
  uuidQr: string;
}

interface Compra {
  id: number;
  estado: 'PENDIENTE' | 'CONFIRMADA' | 'ANULADA';
  total: string;
  boletos: Boleto[];
}

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const compraId = Number(searchParams?.get('compraId'));

  const [compra, setCompra] = useState<Compra | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [timedOut, setTimedOut] = useState(false);
  const timerStart = useRef<number>(Date.now());

  useEffect(() => {
    if (!Number.isFinite(compraId)) {
      setError('compraId inválido');
      return;
    }

    let cancelado = false;

    const tick = async () => {
      try {
        const res = await fetch(`${TICKET_API_URL}/compras/${compraId}`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data: Compra = await res.json();
        if (cancelado) return;
        setCompra(data);
        if (data.estado !== 'CONFIRMADA' && Date.now() - timerStart.current < POLL_TIMEOUT_MS) {
          setTimeout(tick, POLL_INTERVALO_MS);
        } else if (data.estado !== 'CONFIRMADA') {
          setTimedOut(true);
        }
      } catch (err) {
        if (!cancelado) {
          setError(err instanceof Error ? err.message : 'Error consultando la compra');
        }
      }
    };
    tick();

    return () => {
      cancelado = true;
    };
  }, [compraId]);

  if (error) {
    return (
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Algo salió mal</h1>
          <p className={styles.errorBox}>{error}</p>
          <button className={styles.primaryBtn} onClick={() => router.push('/')}>Volver al inicio</button>
        </div>
      </main>
    );
  }

  if (!compra) {
    return (
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.spinner} />
          <h1 className={styles.title}>Procesando pago…</h1>
          <p className={styles.subtitle}>Esperando confirmación de Stripe.</p>
        </div>
      </main>
    );
  }

  if (compra.estado === 'CONFIRMADA') {
    return (
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.successIcon}>✅</div>
          <h1 className={styles.title}>¡Pago confirmado!</h1>
          <p className={styles.subtitle}>
            Total: {new Intl.NumberFormat('es-EC', { style: 'currency', currency: 'USD' }).format(Number(compra.total))}
          </p>

          <div className={styles.boletosWrap}>
            <h2 className={styles.sectionTitle}>Tus boletos</h2>
            {compra.boletos.map((b) => (
              <div key={b.id} className={styles.boletoCard}>
                <div>
                  <strong>{b.nombrePasajero}</strong>
                  <span className={styles.muted}> · {b.cedulaPasajero}</span>
                </div>
                <div className={styles.boletoMeta}>
                  <span className={styles.tag}>{b.estado}</span>
                </div>
                <div className={styles.qrPlaceholder}>
                  <span className={styles.qrLabel}>Código del boleto</span>
                  <code className={styles.uuidQr}>{b.uuidQr}</code>
                </div>
              </div>
            ))}
          </div>

          <button
            className={styles.primaryBtn}
            onClick={() => router.push(`/boleto/${compra.id}`)}
          >
            Ver mi boleto
          </button>
          <button
            className={styles.primaryBtn}
            style={{ marginTop: 8, background: 'transparent', color: '#2563eb', border: '1px solid #2563eb' }}
            onClick={() => router.push('/')}
          >
            Volver al inicio
          </button>
        </div>
      </main>
    );
  }

  if (timedOut) {
    return (
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Confirmación pendiente</h1>
          <p className={styles.subtitle}>
            Aún no recibimos la confirmación de Stripe. Recarga esta página en unos segundos o revisa tu correo.
          </p>
          <button className={styles.primaryBtn} onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.spinner} />
        <h1 className={styles.title}>Procesando pago…</h1>
        <p className={styles.subtitle}>Estado actual: {compra.estado}</p>
      </div>
    </main>
  );
}
