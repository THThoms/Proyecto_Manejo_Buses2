'use client';

// US20: pantalla de liquidación mensual por cooperativa.

import { useEffect, useMemo, useState } from 'react';
import styles from './liquidaciones.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const BUS_API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://localhost:3002';

const ADMIN_USER_ID = '1';
const COOPERATIVAS_ASIGNADAS = '1,2,3';

const MESES = [
  '', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

interface CoopOpt { id: number; nombre: string; }
interface DesgloseTipo { tipoPasajero: string; cantidadBoletos: number; montoTotal: number; }
interface ItemDetalle {
  compraId: number; boletoId: number; fechaVenta: string; fechaViaje: string;
  tipoPasajero: string; estadoBoleto: string; monto: number;
}
interface Liquidacion {
  cooperativa: {
    id: number; nombre: string; ruc: string;
    cuentaBancaria: { banco: string | null; numero: string | null };
  };
  periodo: { year: number; month: number; desde: string; hasta: string };
  totales: { cantidadBoletos: number; montoTotal: number };
  desglosePorTipoPasajero: DesgloseTipo[];
  detalle: ItemDetalle[];
  criterio: string;
}

function buildHeaders(): HeadersInit {
  return {
    'X-User-Role': 'ADMIN',
    'X-User-Id': ADMIN_USER_ID,
    'X-Cooperativas-Ids': COOPERATIVAS_ASIGNADAS,
  };
}

function previousMonth(): { y: number; m: number } {
  const hoy = new Date();
  const m = hoy.getMonth(); // 0..11; el mes pasado es esto mismo (porque el actual es m+1 en 1..12)
  if (m === 0) return { y: hoy.getFullYear() - 1, m: 12 };
  return { y: hoy.getFullYear(), m };
}

export default function LiquidacionesPage() {
  const def = useMemo(previousMonth, []);
  const [cooperativas, setCooperativas] = useState<CoopOpt[]>([]);
  const [cooperativaId, setCooperativaId] = useState<number>(0);
  const [year, setYear] = useState<number>(def.y);
  const [month, setMonth] = useState<number>(def.m);

  const [liq, setLiq] = useState<Liquidacion | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => { cargarCooperativas(); }, []);

  const cargarCooperativas = async () => {
    try {
      const res = await fetch(`${BUS_API_URL}/cooperativas`);
      if (!res.ok) return;
      const data: any[] = await res.json();
      const asignadas = COOPERATIVAS_ASIGNADAS.split(',').map(Number);
      const opts = data
        .filter((c) => asignadas.includes(c.id))
        .map((c) => ({ id: c.id, nombre: c.nombre }));
      setCooperativas(opts);
      if (opts[0]) setCooperativaId(opts[0].id);
    } catch (err) {
      console.error(err);
    }
  };

  const generar = async () => {
    if (!cooperativaId) {
      setError('Seleccioná una cooperativa.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const qs = `cooperativaId=${cooperativaId}&year=${year}&month=${month}`;
      const res = await fetch(`${TICKET_API_URL}/liquidaciones/cooperativa?${qs}`, {
        headers: buildHeaders(),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `HTTP ${res.status}`);
      }
      setLiq(await res.json());
    } catch (err: any) {
      setLiq(null);
      setError(err?.message ?? 'Error generando la liquidación');
    } finally {
      setLoading(false);
    }
  };

  const descargarPdf = async () => {
    setDownloading(true);
    setError(null);
    try {
      const qs = `cooperativaId=${cooperativaId}&year=${year}&month=${month}`;
      const res = await fetch(`${TICKET_API_URL}/liquidaciones/cooperativa/pdf?${qs}`, {
        headers: buildHeaders(),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `HTTP ${res.status}`);
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `liquidacion-cooperativa-${cooperativaId}-${year}-${String(month).padStart(2, '0')}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err: any) {
      setError(err?.message ?? 'Error descargando el PDF');
    } finally {
      setDownloading(false);
    }
  };

  // Años: del actual hacia atrás 5.
  const anios = useMemo(() => {
    const y = new Date().getFullYear();
    return Array.from({ length: 6 }, (_, i) => y - i);
  }, []);

  return (
    <main className={styles.wrap}>
      <header className={styles.header}>
        <h1 className={styles.title}>Liquidación mensual por cooperativa</h1>
        <p className={styles.subtitle}>
          Generá la liquidación de un mes calendario pasado para una cooperativa asignada (US20).
        </p>
      </header>

      <section className={styles.filtersCard}>
        <div className={styles.filtersRow}>
          <label className={styles.field}>
            <span>Cooperativa</span>
            <select value={cooperativaId} onChange={(e) => setCooperativaId(Number(e.target.value))}>
              {cooperativas.map((c) => <option key={c.id} value={c.id}>{c.nombre}</option>)}
              {cooperativas.length === 0 && <option value={0}>(sin cooperativas asignadas)</option>}
            </select>
          </label>
          <label className={styles.field}>
            <span>Año</span>
            <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
              {anios.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </label>
          <label className={styles.field}>
            <span>Mes</span>
            <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
              {MESES.slice(1).map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
            </select>
          </label>
        </div>
        <div className={styles.actions}>
          <button onClick={generar} className={styles.primary} disabled={loading}>
            {loading ? 'Generando…' : 'Generar liquidación'}
          </button>
          <button onClick={descargarPdf} className={styles.export} disabled={!liq || downloading}>
            {downloading ? 'Descargando…' : 'Descargar PDF'}
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </section>

      {liq && (
        <>
          <section className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardLabel}>Boletos liquidados</div>
              <div className={styles.cardValue}>{liq.totales.cantidadBoletos}</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>Monto total a transferir</div>
              <div className={styles.cardValue}>$ {liq.totales.montoTotal.toFixed(2)}</div>
            </div>
            <div className={styles.cardSmall}>
              <div className={styles.cardLabel}>Periodo</div>
              <div className={styles.cardHint}>
                {MESES[liq.periodo.month]} {liq.periodo.year}<br />
                ({liq.periodo.desde} → {liq.periodo.hasta})
              </div>
            </div>
          </section>

          <section className={styles.subPanel}>
            <h2 className={styles.subTitle}>Cooperativa</h2>
            <div className={styles.kv}><span>Nombre:</span><strong>{liq.cooperativa.nombre}</strong></div>
            <div className={styles.kv}><span>RUC:</span><strong>{liq.cooperativa.ruc || '—'}</strong></div>
            <div className={styles.kv}><span>Banco:</span><strong>{liq.cooperativa.cuentaBancaria.banco || '(no registrado)'}</strong></div>
            <div className={styles.kv}><span>Cuenta (parcial):</span><strong>{liq.cooperativa.cuentaBancaria.numero || '(no registrada)'}</strong></div>
          </section>

          <section className={styles.subPanel}>
            <h2 className={styles.subTitle}>Desglose por tipo de pasajero</h2>
            <table className={styles.table}>
              <thead><tr><th>Tipo</th><th>Boletos</th><th>Monto</th></tr></thead>
              <tbody>
                {liq.desglosePorTipoPasajero.map((g) => (
                  <tr key={g.tipoPasajero}>
                    <td>{g.tipoPasajero}</td>
                    <td>{g.cantidadBoletos}</td>
                    <td>$ {g.montoTotal.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className={styles.subPanel}>
            <h2 className={styles.subTitle}>Detalle ({liq.detalle.length})</h2>
            <div className={styles.scrollX}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Boleto</th><th>Compra</th><th>Fecha venta</th><th>Fecha viaje</th>
                    <th>Tipo</th><th>Estado</th><th>Monto</th>
                  </tr>
                </thead>
                <tbody>
                  {liq.detalle.slice(0, 200).map((d) => (
                    <tr key={d.boletoId}>
                      <td>{d.boletoId}</td>
                      <td>{d.compraId}</td>
                      <td>{new Date(d.fechaVenta).toLocaleDateString('es-EC')}</td>
                      <td>{new Date(d.fechaViaje).toLocaleDateString('es-EC')}</td>
                      <td>{d.tipoPasajero}</td>
                      <td>{d.estadoBoleto}</td>
                      <td>$ {d.monto.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {liq.detalle.length === 0 && <p className={styles.note}>Sin boletos liquidables en el periodo.</p>}
              {liq.detalle.length > 200 && <p className={styles.note}>Mostrando primeras 200 filas. Descargá el PDF para el documento oficial.</p>}
            </div>
          </section>

          <p className={styles.note}>{liq.criterio}</p>
        </>
      )}
    </main>
  );
}
