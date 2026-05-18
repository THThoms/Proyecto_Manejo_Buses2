'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from './checkout.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';

interface Boleto {
  id: number;
  cedulaPasajero: string;
  nombrePasajero: string;
  tipoTarifa: string;
  estado: string;
  uuidQr: string;
}

interface CompraAsiento {
  id: number;
  asientoId: number;
  estado: string;
}

interface Compra {
  id: number;
  estado: string;
  total: string;
  cantidad: number;
  fechaViaje: string;
  turnoId: number | null;
  boletos: Boleto[];
  asientos: CompraAsiento[];
}

export default function CheckoutPage() {
  const params = useParams<{ compraId: string }>();
  const router = useRouter();
  const compraId = Number(params?.compraId);

  const [compra, setCompra] = useState<Compra | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    if (!Number.isFinite(compraId)) {
      setError('compraId inválido');
      setLoading(false);
      return;
    }
    let cancelado = false;
    (async () => {
      try {
        const res = await fetch(`${TICKET_API_URL}/compras/${compraId}`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        if (!cancelado) setCompra(data);
      } catch (err) {
        if (!cancelado) {
          setError(err instanceof Error ? err.message : 'No se pudo cargar la compra');
        }
      } finally {
        if (!cancelado) setLoading(false);
      }
    })();
    return () => {
      cancelado = true;
    };
  }, [compraId]);

  const handlePagar = async () => {
    setError(null);
    setPaying(true);
    try {
      const res = await fetch(`${TICKET_API_URL}/pagos/tarjeta/checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ compraId }),
      });
      const data = await res.json();
      if (!res.ok || !data.sessionUrl) {
        throw new Error(data?.error ?? 'No se pudo iniciar el pago');
      }
      window.location.href = data.sessionUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo iniciar el pago');
      setPaying(false);
    }
  };

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.card}><p>Cargando compra…</p></div>
      </main>
    );
  }

  if (error || !compra) {
    return (
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Compra no encontrada</h1>
          <p className={styles.errorBox}>{error ?? 'La compra no existe'}</p>
          <button className={styles.secondaryBtn} onClick={() => router.push('/')}>Volver al inicio</button>
        </div>
      </main>
    );
  }

  const yaPagada = compra.estado === 'CONFIRMADA';
  const anulada = compra.estado === 'ANULADA';

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>Confirma tu compra</h1>
        <p className={styles.subtitle}>Orden #{compra.id} · Estado: {compra.estado}</p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Pasajeros</h2>
          <ul className={styles.list}>
            {compra.boletos.map((b) => (
              <li key={b.id} className={styles.listItem}>
                <strong>{b.nombrePasajero}</strong>
                <span> · {b.cedulaPasajero}</span>
                <span className={styles.tag}>{b.tipoTarifa}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.totalRow}>
          <span>Total a pagar</span>
          <span className={styles.totalAmount}>
            {new Intl.NumberFormat('es-EC', { style: 'currency', currency: 'USD' }).format(Number(compra.total))}
          </span>
        </div>

        {error && <div className={styles.errorBox}>{error}</div>}

        {yaPagada ? (
          <button className={styles.primaryBtn} onClick={() => router.push(`/checkout/success?compraId=${compra.id}`)}>
            Ver mis boletos
          </button>
        ) : anulada ? (
          <button className={styles.secondaryBtn} onClick={() => router.push('/')}>
            Esta compra fue anulada. Volver al inicio
          </button>
        ) : (
          <>
            <button className={styles.primaryBtn} onClick={handlePagar} disabled={paying}>
              {paying ? 'Redirigiendo a Stripe…' : 'Pagar con tarjeta'}
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => router.push(`/pago/transferencia?compraId=${compra.id}`)}
              disabled={paying}
              style={{ marginTop: 10 }}
            >
              Pagar por transferencia
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => router.push(`/pago/efectivo?compraId=${compra.id}`)}
              disabled={paying}
              style={{ marginTop: 10, background: '#10b981', color: '#ffffff', border: 'none' }}
            >
              Pago en Efectivo
            </button>
          </>
        )}
      </div>
    </main>
  );
}
