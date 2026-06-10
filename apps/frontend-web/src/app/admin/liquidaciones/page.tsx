'use client';

import { useEffect, useMemo, useState } from 'react';
import { authHeaders, getUser } from '@/lib/auth';

const BUS_API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://127.0.0.1:3002';
const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://127.0.0.1:3003';

type Cooperativa = { id: number; nombre: string };
type CuentaBancaria = { banco: string; tipo: string; numero: string };
type LiquidacionDetalle = {
  compraId: number;
  boletoId: number;
  fechaVenta: string;
  fechaViaje: string;
  tipoPasajero: string;
  estadoBoleto: string;
  monto: number;
};
type DesgloseTipo = { tipoPasajero: string; cantidadBoletos: number; montoTotal: number };
type LiquidacionResponse = {
  cooperativa: {
    id: number;
    nombre: string;
    ruc: string | null;
    cuentaBancaria: CuentaBancaria;
  };
  periodo: {
    year: number;
    month: number;
    desde: string;
    hasta: string;
  };
  totales: {
    cantidadBoletos: number;
    montoTotal: number;
  };
  desglosePorTipoPasajero: DesgloseTipo[];
  detalle: LiquidacionDetalle[];
};

import styles from './liquidaciones.module.css';

function getAdminHeaders() {
  const user = getUser();
  const coops = (user as { cooperativasIds?: number[] } | null)?.cooperativasIds;
  return { ...authHeaders(), 'X-Cooperativas-Ids': coops?.join(',') ?? '1' };
}

function parseAssignedCooperativas() {
  const user = getUser();
  return (user as { cooperativasIds?: number[] } | null)?.cooperativasIds ?? [1];
}

function getPreviousMonthSelection() {
  const now = new Date();
  const currentMonth = now.getUTCMonth() + 1;
  return currentMonth === 1
    ? { year: now.getUTCFullYear() - 1, month: 12 }
    : { year: now.getUTCFullYear(), month: currentMonth - 1 };
}

function buildYearOptions() {
  const now = new Date();
  const currentYear = now.getUTCFullYear();
  return Array.from({ length: 6 }, (_, index) => currentYear - index);
}

const MONTH_OPTIONS = [
  { value: 1, label: 'Enero' },
  { value: 2, label: 'Febrero' },
  { value: 3, label: 'Marzo' },
  { value: 4, label: 'Abril' },
  { value: 5, label: 'Mayo' },
  { value: 6, label: 'Junio' },
  { value: 7, label: 'Julio' },
  { value: 8, label: 'Agosto' },
  { value: 9, label: 'Septiembre' },
  { value: 10, label: 'Octubre' },
  { value: 11, label: 'Noviembre' },
  { value: 12, label: 'Diciembre' },
];

export default function AdminLiquidacionesPage() {
  const defaultPeriod = useMemo(() => getPreviousMonthSelection(), []);
  const yearOptions = useMemo(() => buildYearOptions(), []);
  const assignedCooperativas = useMemo(() => parseAssignedCooperativas(), []);

  const [cooperativas, setCooperativas] = useState<Cooperativa[]>([]);
  const [cooperativaId, setCooperativaId] = useState('');
  const [year, setYear] = useState(String(defaultPeriod.year));
  const [month, setMonth] = useState(String(defaultPeriod.month));
  const [liquidacion, setLiquidacion] = useState<LiquidacionResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarCooperativas = async () => {
    try {
      const res = await fetch(`${BUS_API_URL}/cooperativas`);
      if (!res.ok) {
        throw new Error(`No se pudieron cargar las cooperativas (HTTP ${res.status})`);
      }
      const data = (await res.json()) as Cooperativa[];
      const visibles = data.filter((item) => assignedCooperativas.includes(item.id));
      setCooperativas(visibles);
      if (visibles.length > 0) {
        setCooperativaId(String(visibles[0].id));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudieron cargar las cooperativas.');
      setLoading(false);
    }
  };

  const buildQuery = () =>
    new URLSearchParams({
      cooperativaId,
      year,
      month,
    }).toString();

  const generarLiquidacion = async () => {
    if (!cooperativaId) {
      setError('Selecciona una cooperativa.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${TICKET_API_URL}/liquidaciones/cooperativa?${buildQuery()}`, {
        headers: getAdminHeaders(),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error((data as { error?: string }).error || `Error HTTP ${res.status}`);
      }
      setLiquidacion(data as LiquidacionResponse);
    } catch (err) {
      setLiquidacion(null);
      setError(err instanceof Error ? err.message : 'No se pudo generar la liquidacion.');
    } finally {
      setLoading(false);
    }
  };

  const descargarPdf = async () => {
    if (!cooperativaId) {
      setError('Selecciona una cooperativa.');
      return;
    }

    setDownloading(true);
    setError(null);
    try {
      const res = await fetch(`${TICKET_API_URL}/liquidaciones/cooperativa/pdf?${buildQuery()}`, {
        headers: getAdminHeaders(),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || `Error HTTP ${res.status}`);
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `liquidacion-cooperativa-${cooperativaId}-${year}-${String(month).padStart(2, '0')}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo descargar el PDF.');
    } finally {
      setDownloading(false);
    }
  };

  useEffect(() => {
    void cargarCooperativas();
  }, []);

  useEffect(() => {
    if (cooperativaId) {
      void generarLiquidacion();
    }
  }, [cooperativaId]);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Admin</p>
          <h1 className={styles.title}>Liquidacion mensual por cooperativa</h1>
          <p className={styles.subtitle}>
            Consulta el cierre mensual de ventas por cooperativa, con cuenta bancaria y PDF listo para revision.
          </p>
        </div>
        <a href="/admin" className={styles.backLink}>
          Volver al panel
        </a>
      </header>

      <section className={styles.filters}>
        <div className={styles.field}>
          <label htmlFor="cooperativa">Cooperativa</label>
          <select id="cooperativa" value={cooperativaId} onChange={(e) => setCooperativaId(e.target.value)}>
            <option value="">Selecciona</option>
            {cooperativas.map((coop) => (
              <option key={coop.id} value={String(coop.id)}>
                {coop.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="year">Año</label>
          <select id="year" value={year} onChange={(e) => setYear(e.target.value)}>
            {yearOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="month">Mes</label>
          <select id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
            {MONTH_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryButton} onClick={() => void generarLiquidacion()} disabled={loading}>
            Generar liquidacion
          </button>
          <button
            className={styles.secondaryButton}
            onClick={() => void descargarPdf()}
            disabled={loading || downloading || !liquidacion}
          >
            {downloading ? 'Descargando PDF...' : 'Descargar PDF'}
          </button>
        </div>
      </section>

      {error && <div className={styles.errorBox}>{error}</div>}

      <section className={styles.stats}>
        <article className={styles.statCard}>
          <span>Boletos vendidos</span>
          <strong>{liquidacion?.totales.cantidadBoletos ?? 0}</strong>
        </article>
        <article className={styles.statCard}>
          <span>Monto total</span>
          <strong>${Number(liquidacion?.totales.montoTotal ?? 0).toFixed(2)}</strong>
        </article>
        <article className={styles.statCard}>
          <span>Periodo</span>
          <strong>
            {liquidacion ? `${liquidacion.periodo.year}-${String(liquidacion.periodo.month).padStart(2, '0')}` : '—'}
          </strong>
        </article>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <h2>Cooperativa</h2>
          {liquidacion ? (
            <dl className={styles.definitionList}>
              <div>
                <dt>Nombre</dt>
                <dd>{liquidacion.cooperativa.nombre}</dd>
              </div>
              <div>
                <dt>RUC</dt>
                <dd>{liquidacion.cooperativa.ruc ?? 'No registrado'}</dd>
              </div>
              <div>
                <dt>Cuenta bancaria</dt>
                <dd>{liquidacion.cooperativa.cuentaBancaria.numero}</dd>
              </div>
            </dl>
          ) : (
            <p className={styles.helperText}>Genera una liquidacion para ver los datos de la cooperativa.</p>
          )}
        </div>

        <div className={styles.card}>
          <h2>Cuenta bancaria para transferencia</h2>
          {liquidacion ? (
            <dl className={styles.definitionList}>
              <div>
                <dt>Banco</dt>
                <dd>{liquidacion.cooperativa.cuentaBancaria.banco}</dd>
              </div>
              <div>
                <dt>Tipo</dt>
                <dd>{liquidacion.cooperativa.cuentaBancaria.tipo}</dd>
              </div>
              <div>
                <dt>Numero</dt>
                <dd>{liquidacion.cooperativa.cuentaBancaria.numero}</dd>
              </div>
            </dl>
          ) : (
            <p className={styles.helperText}>La cuenta bancaria se mostrara con el periodo liquidado.</p>
          )}
        </div>
      </section>

      <section className={styles.card}>
        <h2>Desglose por tipo de pasajero</h2>
        {loading ? (
          <div className={styles.loadingBox}>Generando liquidacion...</div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Tipo pasajero</th>
                  <th>Boletos</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {(liquidacion?.desglosePorTipoPasajero ?? []).map((item) => (
                  <tr key={item.tipoPasajero}>
                    <td>{item.tipoPasajero}</td>
                    <td>{item.cantidadBoletos}</td>
                    <td>${Number(item.montoTotal).toFixed(2)}</td>
                  </tr>
                ))}
                {!liquidacion?.desglosePorTipoPasajero?.length && (
                  <tr>
                    <td colSpan={3}>No hay datos para este periodo.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className={styles.card}>
        <h2>Detalle resumido</h2>
        {loading ? (
          <div className={styles.loadingBox}>Cargando ventas liquidadas...</div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Compra</th>
                  <th>Boleto</th>
                  <th>Fecha venta</th>
                  <th>Fecha viaje</th>
                  <th>Tipo pasajero</th>
                  <th>Estado</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {(liquidacion?.detalle ?? []).map((item) => (
                  <tr key={item.boletoId}>
                    <td>#{item.compraId}</td>
                    <td>#{item.boletoId}</td>
                    <td>{item.fechaVenta}</td>
                    <td>{item.fechaViaje}</td>
                    <td>{item.tipoPasajero}</td>
                    <td>{item.estadoBoleto}</td>
                    <td>${Number(item.monto).toFixed(2)}</td>
                  </tr>
                ))}
                {!liquidacion?.detalle?.length && (
                  <tr>
                    <td colSpan={7}>No hay ventas liquidadas para el mes seleccionado.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
