'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import styles from './reportes.module.css';

const BUS_API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://127.0.0.1:3002';
const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://127.0.0.1:3003';
const ADMIN_HEADERS = {
  'X-User-Role': 'ADMIN',
  'X-User-Id': '1',
  'X-Cooperativas-Ids': '1,2,3',
};

type Cooperativa = { id: number; nombre: string };
type ResumenCanal = { canal: string; cantidadBoletos: number; montoTotal: number };
type ResumenTipo = { tipoPasajero: string; cantidadBoletos: number; montoTotal: number };
type DetalleReporte = {
  compraId: number;
  boletoId: number;
  fechaCompra: string;
  fechaViaje: string;
  cooperativaId: number;
  cooperativaNombre: string;
  canal: string;
  tipoPasajero: string;
  estadoBoleto: string;
  monto: number;
};
type ReporteResponse = {
  filtros: {
    fechaDesde: string;
    fechaHasta: string;
    cooperativaId: number | 'TODOS';
    canal: string;
    tipoPasajero: string;
  };
  totales: {
    cantidadBoletos: number;
    montoTotal: number;
  };
  agrupadoPorCanal: ResumenCanal[];
  agrupadoPorTipoPasajero: ResumenTipo[];
  detalle: DetalleReporte[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

function currentMonthRange() {
  const now = new Date();
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0));
  return {
    fechaDesde: start.toISOString().slice(0, 10),
    fechaHasta: end.toISOString().slice(0, 10),
  };
}

function parseAssignedCooperativas() {
  return ADMIN_HEADERS['X-Cooperativas-Ids']
    .split(',')
    .map((value) => Number(value.trim()))
    .filter((value, index, arr) => Number.isInteger(value) && value > 0 && arr.indexOf(value) === index);
}

export default function AdminReportesPage() {
  const defaults = useMemo(() => currentMonthRange(), []);
  const assignedCooperativas = useMemo(() => parseAssignedCooperativas(), []);

  const [fechaDesde, setFechaDesde] = useState(defaults.fechaDesde);
  const [fechaHasta, setFechaHasta] = useState(defaults.fechaHasta);
  const [cooperativaId, setCooperativaId] = useState('TODOS');
  const [canal, setCanal] = useState('TODOS');
  const [tipoPasajero, setTipoPasajero] = useState('TODOS');
  const [cooperativas, setCooperativas] = useState<Cooperativa[]>([]);
  const [reporte, setReporte] = useState<ReporteResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState<'pdf' | 'excel' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const cargarCooperativas = async () => {
    try {
      const res = await fetch(`${BUS_API_URL}/cooperativas`);
      if (!res.ok) {
        throw new Error(`No se pudieron cargar las cooperativas (HTTP ${res.status})`);
      }
      const data = (await res.json()) as Cooperativa[];
      setCooperativas(data.filter((item) => assignedCooperativas.includes(item.id)));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudieron cargar las cooperativas.');
    }
  };

  const buildQuery = () => {
    const params = new URLSearchParams({
      fechaDesde,
      fechaHasta,
      cooperativaId,
      canal,
      tipoPasajero,
      groupBy: 'canal,tipoPasajero',
      page: '1',
      limit: '50',
    });
    return params.toString();
  };

  const cargarReporte = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${TICKET_API_URL}/reportes/boletos?${buildQuery()}`, {
        headers: ADMIN_HEADERS,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error((data as { error?: string }).error || `Error HTTP ${res.status}`);
      }
      setReporte(data as ReporteResponse);
    } catch (err) {
      setReporte(null);
      setError(err instanceof Error ? err.message : 'No se pudo cargar el reporte.');
    } finally {
      setLoading(false);
    }
  };

  const descargar = async (formato: 'pdf' | 'excel') => {
    setExporting(formato);
    setError(null);
    try {
      const res = await fetch(`${TICKET_API_URL}/reportes/boletos/${formato}?${buildQuery()}`, {
        headers: ADMIN_HEADERS,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || `Error HTTP ${res.status}`);
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = formato === 'pdf' ? 'reporte-boletos.pdf' : 'reporte-boletos.xlsx';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo exportar el archivo.');
    } finally {
      setExporting(null);
    }
  };

  const limpiar = () => {
    setFechaDesde(defaults.fechaDesde);
    setFechaHasta(defaults.fechaHasta);
    setCooperativaId('TODOS');
    setCanal('TODOS');
    setTipoPasajero('TODOS');
  };

  useEffect(() => {
    void cargarCooperativas();
  }, []);

  useEffect(() => {
    void cargarReporte();
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Admin</p>
          <h1 className={styles.title}>Reportes administrativos</h1>
          <p className={styles.subtitle}>
            Reporte de boletos por cooperativa y canal, con totales, subtotales y exportacion.
          </p>
        </div>
        <Link href="/admin" className={styles.backLink}>
          Volver al panel
        </Link>
      </header>

      <section className={styles.filters}>
        <div className={styles.field}>
          <label htmlFor="fechaDesde">Fecha desde</label>
          <input id="fechaDesde" type="date" value={fechaDesde} onChange={(e) => setFechaDesde(e.target.value)} />
        </div>
        <div className={styles.field}>
          <label htmlFor="fechaHasta">Fecha hasta</label>
          <input id="fechaHasta" type="date" value={fechaHasta} onChange={(e) => setFechaHasta(e.target.value)} />
        </div>
        <div className={styles.field}>
          <label htmlFor="cooperativa">Cooperativa</label>
          <select id="cooperativa" value={cooperativaId} onChange={(e) => setCooperativaId(e.target.value)}>
            <option value="TODOS">Todas las asignadas</option>
            {cooperativas.map((coop) => (
              <option key={coop.id} value={String(coop.id)}>
                {coop.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="canal">Canal</label>
          <select id="canal" value={canal} onChange={(e) => setCanal(e.target.value)}>
            <option value="TODOS">Todos</option>
            <option value="WEB">WEB</option>
            <option value="OFICINA">OFICINA</option>
            <option value="BUS">BUS</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="tipoPasajero">Tipo pasajero</label>
          <select
            id="tipoPasajero"
            value={tipoPasajero}
            onChange={(e) => setTipoPasajero(e.target.value)}
          >
            <option value="TODOS">Todos</option>
            <option value="NORMAL">Normal</option>
            <option value="TERCERA_EDAD">Tercera edad</option>
            <option value="DISCAPACIDAD">Discapacidad</option>
            <option value="MENOR">Menor</option>
            <option value="ESTUDIANTE">Estudiante</option>
          </select>
        </div>
        <div className={styles.actions}>
          <button className={styles.primaryButton} onClick={() => void cargarReporte()} disabled={loading}>
            Buscar
          </button>
          <button className={styles.secondaryButton} onClick={limpiar} disabled={loading}>
            Limpiar
          </button>
          <button
            className={styles.secondaryButton}
            onClick={() => void descargar('pdf')}
            disabled={loading || exporting !== null}
          >
            {exporting === 'pdf' ? 'Exportando PDF...' : 'Exportar PDF'}
          </button>
          <button
            className={styles.secondaryButton}
            onClick={() => void descargar('excel')}
            disabled={loading || exporting !== null}
          >
            {exporting === 'excel' ? 'Exportando Excel...' : 'Exportar Excel'}
          </button>
        </div>
      </section>

      {error && <div className={styles.errorBox}>{error}</div>}

      <section className={styles.stats}>
        <article className={styles.statCard}>
          <span>Boletos</span>
          <strong>{reporte?.totales.cantidadBoletos ?? 0}</strong>
        </article>
        <article className={styles.statCard}>
          <span>Monto total</span>
          <strong>${Number(reporte?.totales.montoTotal ?? 0).toFixed(2)}</strong>
        </article>
        <article className={styles.statCard}>
          <span>Cooperativas visibles</span>
          <strong>{cooperativas.length}</strong>
        </article>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <h2>Subtotales por canal</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Canal</th>
                <th>Boletos</th>
                <th>Monto</th>
              </tr>
            </thead>
            <tbody>
              {(reporte?.agrupadoPorCanal ?? []).map((item) => (
                <tr key={item.canal}>
                  <td>{item.canal}</td>
                  <td>{item.cantidadBoletos}</td>
                  <td>${Number(item.montoTotal).toFixed(2)}</td>
                </tr>
              ))}
              {!reporte?.agrupadoPorCanal?.length && !loading && (
                <tr>
                  <td colSpan={3}>Sin datos para este filtro.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.card}>
          <h2>Subtotales por tipo de pasajero</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Boletos</th>
                <th>Monto</th>
              </tr>
            </thead>
            <tbody>
              {(reporte?.agrupadoPorTipoPasajero ?? []).map((item) => (
                <tr key={item.tipoPasajero}>
                  <td>{item.tipoPasajero}</td>
                  <td>{item.cantidadBoletos}</td>
                  <td>${Number(item.montoTotal).toFixed(2)}</td>
                </tr>
              ))}
              {!reporte?.agrupadoPorTipoPasajero?.length && !loading && (
                <tr>
                  <td colSpan={3}>Sin datos para este filtro.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.card}>
        <div className={styles.sectionHeader}>
          <h2>Detalle</h2>
          <span>
            {reporte?.pagination.total ?? 0} registros · pagina {reporte?.pagination.page ?? 1}
          </span>
        </div>
        {loading ? (
          <div className={styles.loadingBox}>Cargando reporte...</div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Compra</th>
                  <th>Boleto</th>
                  <th>Fecha compra</th>
                  <th>Fecha viaje</th>
                  <th>Cooperativa</th>
                  <th>Canal</th>
                  <th>Tipo pasajero</th>
                  <th>Estado</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {(reporte?.detalle ?? []).map((item) => (
                  <tr key={item.boletoId}>
                    <td>#{item.compraId}</td>
                    <td>#{item.boletoId}</td>
                    <td>{item.fechaCompra}</td>
                    <td>{item.fechaViaje}</td>
                    <td>{item.cooperativaNombre}</td>
                    <td>{item.canal}</td>
                    <td>{item.tipoPasajero}</td>
                    <td>{item.estadoBoleto}</td>
                    <td>${Number(item.monto).toFixed(2)}</td>
                  </tr>
                ))}
                {!reporte?.detalle?.length && (
                  <tr>
                    <td colSpan={9}>No hay boletos para los filtros seleccionados.</td>
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
