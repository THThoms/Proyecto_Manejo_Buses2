'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '../checkout-status.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';

interface Compra {
  id: number;
  estado: string;
  asientos: { id: number; estado: string }[];
}

export default function CheckoutCancelPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const compraId = Number(searchParams?.get('compraId'));
  const [compra, setCompra] = useState<Compra | null>(null);

  useEffect(() => {
    if (!Number.isFinite(compraId)) return;
    (async () => {
      try {
        const res = await fetch(`${TICKET_API_URL}/compras/${compraId}`);
        if (res.ok) setCompra(await res.json());
      } catch {
        // best-effort: el mensaje principal de cancelación se muestra igual.
      }
    })();
  }, [compraId]);

  const asientosLiberados = compra?.asientos.every((a) => a.estado !== 'OCUPADO') ?? true;

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.cancelIcon}>✖️</div>
        <h1 className={styles.title}>Pago cancelado</h1>
        <p className={styles.subtitle}>
          {asientosLiberados
            ? 'Tu asiento fue liberado. Puedes volver a intentarlo cuando quieras.'
            : 'Estamos liberando tu asiento. Recarga en unos segundos.'}
        </p>
        {compra && (
          <p className={styles.muted}>Orden #{compra.id} · Estado actual: {compra.estado}</p>
        )}
        <button className={styles.primaryBtn} onClick={() => router.push('/')}>Volver al inicio</button>
      </div>
    </main>
  );
}
