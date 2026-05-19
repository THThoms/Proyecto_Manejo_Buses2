'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from './boleto.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';

interface Boleto {
  id: number;
  estado: 'PENDIENTE' | 'VIGENTE' | 'UTILIZADO' | 'EXPIRADO' | 'ANULADO';
  nombrePasajero: string;
  cedulaPasajero: string;
  tipoTarifa: string;
  uuidQr: string;
  expiraEn: string;
}

interface Asiento {
  id: number;
  asientoId: number;
  turnoId: number;
  estado: string;
}

interface PagoResumen {
  estado: string;
  monto: string;
  pagadoEn: string | null;
  metodo: 'TARJETA' | 'TRANSFERENCIA' | 'EFECTIVO';
  tarjeta: { marca: string; ultimos4: string } | null;
  transferencia: {
    id: number;
    banco: string;
    referencia: string;
    estado: string;
    creadoEn: string;
  } | null;
}

interface Resumen {
  compraId: number;
  estadoCompra: 'PENDIENTE' | 'CONFIRMADA' | 'ANULADA';
  total: string;
  canal: string;
  fechaCompra: string;
  fechaViaje: string;
  turnoId: number | null;
  frecuenciaId: number;
  boletos: Boleto[];
  asientos: Asiento[];
  pago: PagoResumen | null;
}

const MENSAJES_BOLETO: Record<Boleto['estado'], { texto: string; tono: 'ok' | 'pending' | 'err' }> = {
  VIGENTE: { texto: 'Tu boleto está confirmado.', tono: 'ok' },
  PENDIENTE: { texto: 'Tu boleto está pendiente de validación.', tono: 'pending' },
  ANULADO: { texto: 'Tu boleto fue anulado.', tono: 'err' },
  UTILIZADO: { texto: 'Tu boleto ya fue utilizado.', tono: 'ok' },
  EXPIRADO: { texto: 'Tu boleto expiró.', tono: 'err' },
};

function maskCedula(cedula: string): string {
  if (!cedula || cedula.length < 4) return '***';
  return `${cedula.slice(0, 2)}******${cedula.slice(-2)}`;
}

export default function BoletoPage() {
  const params = useParams<{ compraId: string }>();
  const router = useRouter();
  const compraId = Number(params?.compraId);

  const [resumen, setResumen] = useState<Resumen | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!Number.isFinite(compraId)) {
      setError('No se encontró la compra.');
      setLoading(false);
      return;
    }
    let cancelado = false;
    (async () => {
      try {
        const res = await fetch(`${TICKET_API_URL}/compras/${compraId}/resumen`);
        if (res.status === 404) {
          if (!cancelado) {
            setError('No se encontró la compra.');
            setResumen(null);
          }
          return;
        }
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data: Resumen = await res.json();
        if (!cancelado) setResumen(data);
      } catch (err) {
        if (!cancelado) {
          setError('No se pudo cargar el detalle del boleto.');
        }
      } finally {
        if (!cancelado) setLoading(false);
      }
    })();
    return () => {
      cancelado = true;
    };
  }, [compraId]);

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.spinner} />
          <p className={styles.muted}>Cargando detalle del boleto…</p>
        </div>
      </main>
    );
  }

  if (error || !resumen) {
    return (
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Detalle de boleto</h1>
          <div className={styles.errorBox}>{error ?? 'No se encontró la compra.'}</div>
          <button className={styles.primaryBtn} onClick={() => router.push('/')}>
            Volver al inicio
          </button>
        </div>
      </main>
    );
  }

  const boletoPrincipal = resumen.boletos[0];
  const mensaje = boletoPrincipal ? MENSAJES_BOLETO[boletoPrincipal.estado] : null;

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>Detalle de boleto</h1>
        <p className={styles.muted}>Orden #{resumen.compraId}</p>

        {mensaje && (
          <div
            className={
              mensaje.tono === 'ok'
                ? styles.bannerOk
                : mensaje.tono === 'pending'
                ? styles.bannerPending
                : styles.bannerErr
            }
          >
            {mensaje.texto}
          </div>
        )}

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Compra</h2>
          <dl className={styles.grid}>
            <div>
              <dt>Estado compra</dt>
              <dd>{resumen.estadoCompra}</dd>
            </div>
            <div>
              <dt>Canal</dt>
              <dd>{resumen.canal}</dd>
            </div>
            <div>
              <dt>Total</dt>
              <dd>
                {new Intl.NumberFormat('es-EC', { style: 'currency', currency: 'USD' }).format(
                  Number(resumen.total)
                )}
              </dd>
            </div>
            <div>
              <dt>Fecha de compra</dt>
              <dd>{new Date(resumen.fechaCompra).toLocaleString()}</dd>
            </div>
            <div>
              <dt>Fecha de viaje</dt>
              <dd>{new Date(resumen.fechaViaje).toLocaleDateString()}</dd>
            </div>
            <div>
              <dt>Turno</dt>
              <dd>{resumen.turnoId != null ? `#${resumen.turnoId}` : '—'}</dd>
            </div>
            <div>
              <dt>Frecuencia</dt>
              <dd>#{resumen.frecuenciaId}</dd>
            </div>
            <div>
              <dt>Asiento</dt>
              <dd>{resumen.asientos[0] ? `#${resumen.asientos[0].asientoId}` : '—'}</dd>
            </div>
          </dl>
        </section>

        {resumen.pago && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Pago</h2>
            <dl className={styles.grid}>
              <div>
                <dt>Método</dt>
                <dd>{resumen.pago.metodo}</dd>
              </div>
              <div>
                <dt>Estado</dt>
                <dd>{resumen.pago.estado}</dd>
              </div>
              {resumen.pago.pagadoEn && (
                <div>
                  <dt>Pagado en</dt>
                  <dd>{new Date(resumen.pago.pagadoEn).toLocaleString()}</dd>
                </div>
              )}
              {resumen.pago.tarjeta && (
                <>
                  <div>
                    <dt>Marca tarjeta</dt>
                    <dd className={styles.upper}>{resumen.pago.tarjeta.marca}</dd>
                  </div>
                  <div>
                    <dt>Tarjeta</dt>
                    <dd>•••• {resumen.pago.tarjeta.ultimos4}</dd>
                  </div>
                </>
              )}
              {resumen.pago.transferencia && (
                <>
                  <div>
                    <dt>Banco</dt>
                    <dd>{resumen.pago.transferencia.banco}</dd>
                  </div>
                  <div>
                    <dt>Referencia</dt>
                    <dd><code>{resumen.pago.transferencia.referencia}</code></dd>
                  </div>
                  <div>
                    <dt>Estado transferencia</dt>
                    <dd>{resumen.pago.transferencia.estado}</dd>
                  </div>
                </>
              )}
            </dl>
          </section>
        )}

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Boleto</h2>
          {boletoPrincipal ? (
            <div className={styles.boleto}>
              <div className={styles.boletoRow}>
                <strong>{boletoPrincipal.nombrePasajero}</strong>
                <span className={styles.tag}>{boletoPrincipal.estado}</span>
              </div>
              <div className={styles.boletoRow}>
                <span className={styles.muted}>Cédula:</span> {maskCedula(boletoPrincipal.cedulaPasajero)}
              </div>
              <div className={styles.boletoRow}>
                <span className={styles.muted}>Tarifa:</span> {boletoPrincipal.tipoTarifa}
              </div>
              <div className={styles.qrBox}>
                <span className={styles.qrLabel}>Código QR del boleto</span>
                {/* US15: QR generado por ticket-api a partir del uuidQr. */}
                <img
                  className={styles.qrImage}
                  src={`${TICKET_API_URL}/boletos/${boletoPrincipal.id}/qr.png`}
                  alt={`QR del boleto ${boletoPrincipal.uuidQr}`}
                  width={200}
                  height={200}
                />
                <code className={styles.uuidQr}>{boletoPrincipal.uuidQr}</code>
              </div>

              {boletoPrincipal.estado === 'VIGENTE' && (
                <a
                  className={styles.downloadBtn}
                  href={`${TICKET_API_URL}/boletos/${boletoPrincipal.id}/pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descargar boleto PDF
                </a>
              )}
            </div>
          ) : (
            <p className={styles.muted}>No hay boletos asociados.</p>
          )}
        </section>

        <button className={styles.primaryBtn} onClick={() => router.push('/')}>
          Volver al inicio
        </button>
      </div>
    </main>
  );
}
