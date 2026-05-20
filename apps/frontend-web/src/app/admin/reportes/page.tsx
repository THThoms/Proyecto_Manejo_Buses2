'use client';

// US19: pantalla de reportes administrativos. Reusa el endpoint /reportes/boletos
// de ticket-api con los headers mock X-User-Role/X-User-Id/X-Cooperativas-Ids.
// Los exports PDF y Excel se descargan desde el mismo backend.

import { useEffect, useMemo, useState } from 'react';
import styles from './reportes.module.css';

const TICKET_API_URL =
  process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const BUS_API_URL =
  process.env.NEXT_PUBLIC_BUS_API_URL || 'http://localhost:3002';

// Identidad mock del admin hasta que exista US21.
const ADMIN_USER_ID = '1';
const COOPERATIVAS_ASIGNADAS = '1,2,3';

const CANALES = ['TODOS', 'WEB', 'OFICINA', 'BUS'] as const;
const TIPOS_PASAJERO = ['TODOS', 'NORMAL', 'TERCERA_EDAD', 'DISCAPACIDAD', 'MENOR'] as const;

interface AgrupadoCanal {
  canal: string;
  cantidadBoletos: number;
  montoTotal: number;
}
interface AgrupadoTipo {
  tipoPasajero: string;
  cantidadBoletos: number;
  montoTotal: number;
}
interface ItemDetalle {
  compraId: number;
  boletoId: number;
  fechaCompra: string;
  fechaViaje: string;
  cooperativaId: number | null;
  cooperativaNombre: string;
  canal: string;
  tipoPasajero: string;
  estadoBoleto: string;
  monto: number;
}
interface Reporte {
  filtros: {
    fechaDesde: string;
    fechaHasta: string;
    cooperativaId: number | string;
    canal: string;
    tipoPasajero: string;
    criterio: string;
  };
  totales: { cantidadBoletos: number; montoTotal: number };
  agrupadoPorCanal: AgrupadoCanal[];
  agrupadoPorTipoPasajero: AgrupadoTipo[];
  detalle: ItemDetalle[];
}
interface CooperativaOpt {
  id: number;
  nombre: string;
}

function defaultRango(): { desde: string; hasta: string } {
  const hoy = new Date();
  const inicio = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
  const fin = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0);
  const fmt = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  return { desde: fmt(inicio), hasta: fmt(hoy < fin ? hoy : fin) };
}

function buildHeaders(): HeadersInit {
  return {
    'X-User-Role': 'ADMIN',
    'X-User-Id': ADMIN_USER_ID,
    'X-Cooperativas-Ids': COOPERATIVAS_ASIGNADAS,
  };
}

export default function ReportesAdminPage() {
  const rango = useMemo(defaultRango, []);
  const [fechaDesde, setFechaDesde] = useState(rango.desde);
  const [fechaHasta, setFechaHasta] = useState(rango.hasta);
  const [cooperativaId, setCooperativaId] = useState<string>('TODOS');
  const [canal, setCanal] = useState<string>('TODOS');
  const [tipoPasajero, setTipoPasajero] = useState<string>('TODOS');

  const [cooperativas, setCooperativas] = useState<CooperativaOpt[]>([]);
  const [reporte, setReporte] = useState<Reporte | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState<null | 'pdf' | 'excel'>(null);

  useEffect(() => {
    cargarCooperativas();
    // Búsqueda inicial con rango por defecto.
    buscar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cargarCooperativas = async () => {
    try {
      const res = await fetch(`${BUS_API_URL}/cooperativas`);
      if (!res.ok) return;
      const data: any[] = await res.json();
      const asignadas = COOPERATIVAS_ASIGNADAS.split(',').map(Number);
      setCooperativas(
        data
          .filter((c) => asignadas.includes(c.id))
          .map((c) => ({ id: c.id, nombre: c.nombre })),
      );
    } catch (err) {
      console.error('No se pudo cargar cooperativas', err);
    }
  };

  const buildQuery = () => {
    const qs = new URLSearchParams({
      fechaDesde,
      fechaHasta,
      cooperativaId,
      canal,
      tipoPasajero,
    });
    return qs.toString();
  };

  const buscar = async () => {
    if (new Date(fechaDesde) > new Date(fechaHasta)) {
      setError('La fecha "desde" no puede ser mayor que "hasta".');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${TICKET_API_URL}/reportes/boletos?${buildQuery()}`, {
        headers: buildHeaders(),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `HTTP ${res.status}`);
      }
      const json: Reporte = await res.json();
      setReporte(json);
    } catch (err: any) {
      setReporte(null);
      setError(err?.message ?? 'Error al consultar el reporte');
    } finally {
      setLoading(false);
    }
  };

  const limpiar = () => {
    const r = defaultRango();
    setFechaDesde(r.desde);
    setFechaHasta(r.hasta);
    setCooperativaId('TODOS');
    setCanal('TODOS');
    setTipoPasajero('TODOS');
    setReporte(null);
    setError(null);
  };

  const exportar = async (tipo: 'pdf' | 'excel') => {
    setDownloading(tipo);
    setError(null);
    try {
      const res = await fetch(`${TICKET_API_URL}/reportes/boletos/${tipo}?${buildQuery()}`, {
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
      a.download = tipo === 'pdf' ? 'reporte-boletos.pdf' : 'reporte-boletos.xlsx';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err: any) {
      setError(err?.message ?? `Error exportando ${tipo}`);
    } finally {
      setDownloading(null);
    }
  };

  return (
    <main className={styles.wrap}>
      <header className={styles.header}>
        <h1 className={styles.title}>Reportes administrativos</h1>
        <p className={styles.subtitle}>
          Boletos por cooperativa y canal (US19). Solo se muestran cooperativas que tenés asignadas.
        </p>
      </header>

      <section className={styles.filtersCard}>
        <div className={styles.filtersRow}>
          <label className={styles.field}>
            <span>Desde</span>
            <input type="date" value={fechaDesde} onChange={(e) => setFechaDesde(e.target.value)} />
          </label>
          <label className={styles.field}>
            <span>Hasta</span>
            <input type="date" value={fechaHasta} onChange={(e) => setFechaHasta(e.target.value)} />
          </label>
          <label className={styles.field}>
            <span>Cooperativa</span>
            <select value={cooperativaId} onChange={(e) => setCooperativaId(e.target.value)}>
              <option value="TODOS">Todas las asignadas</option>
              {cooperativas.map((c) => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            <span>Canal</span>
            <select value={canal} onChange={(e) => setCanal(e.target.value)}>
              {CANALES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
          <label className={styles.field}>
            <span>Tipo pasajero</span>
            <select value={tipoPasajero} onChange={(e) => setTipoPasajero(e.target.value)}>
              {TIPOS_PASAJERO.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </label>
        </div>
        <div className={styles.actions}>
          <button onClick={buscar} className={styles.primary} disabled={loading}>
            {loading ? 'Buscando…' : 'Buscar'}
          </button>
          <button onClick={limpiar} className={styles.ghost} disabled={loading}>Limpiar</button>
          <span style={{ flex: 1 }} />
          <button
            onClick={() => exportar('pdf')}
            className={styles.export}
            disabled={!reporte || downloading !== null}
          >
            {downloading === 'pdf' ? 'Generando PDF…' : 'Exportar PDF'}
          </button>
          <button
            onClick={() => exportar('excel')}
            className={styles.export}
            disabled={!reporte || downloading !== null}
          >
            {downloading === 'excel' ? 'Generando Excel…' : 'Exportar Excel'}
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </section>

      {loading && <p className={styles.loading}>Cargando reporte…</p>}

      {reporte && !loading && (
        <>
          <section className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardLabel}>Boletos</div>
              <div className={styles.cardValue}>{reporte.totales.cantidadBoletos}</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>Monto total</div>
              <div className={styles.cardValue}>$ {reporte.totales.montoTotal.toFixed(2)}</div>
            </div>
            <div className={styles.cardSmall}>
              <div className={styles.cardLabel}>Criterio</div>
              <div className={styles.cardHint}>{reporte.filtros.criterio}</div>
            </div>
          </section>

          <section className={styles.grid2}>
            <div className={styles.subPanel}>
              <h2 className={styles.subTitle}>Subtotales por canal</h2>
              <table className={styles.table}>
                <thead>
                  <tr><th>Canal</th><th>Boletos</th><th>Monto</th></tr>
                </thead>
                <tbody>
                  {reporte.agrupadoPorCanal.map((g) => (
                    <tr key={g.canal}>
                      <td>{g.canal}</td>
                      <td>{g.cantidadBoletos}</td>
                      <td>$ {g.montoTotal.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.subPanel}>
              <h2 className={styles.subTitle}>Subtotales por tipo de pasajero</h2>
              <table className={styles.table}>
                <thead>
                  <tr><th>Tipo</th><th>Boletos</th><th>Monto</th></tr>
                </thead>
                <tbody>
                  {reporte.agrupadoPorTipoPasajero.map((g) => (
                    <tr key={g.tipoPasajero}>
                      <td>{g.tipoPasajero}</td>
                      <td>{g.cantidadBoletos}</td>
                      <td>$ {g.montoTotal.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.subPanel}>
            <h2 className={styles.subTitle}>Detalle ({reporte.detalle.length} boletos)</h2>
            <div className={styles.scrollX}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Boleto</th>
                    <th>Compra</th>
                    <th>Fecha viaje</th>
                    <th>Cooperativa</th>
                    <th>Canal</th>
                    <th>Tipo</th>
                    <th>Estado</th>
                    <th>Monto</th>
                  </tr>
                </thead>
                <tbody>
                  {reporte.detalle.slice(0, 200).map((d) => (
                    <tr key={d.boletoId}>
                      <td>{d.boletoId}</td>
                      <td>{d.compraId}</td>
                      <td>{new Date(d.fechaViaje).toLocaleDateString('es-EC')}</td>
                      <td>{d.cooperativaNombre}</td>
                      <td>{d.canal}</td>
                      <td>{d.tipoPasajero}</td>
                      <td>{d.estadoBoleto}</td>
                      <td>$ {d.monto.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {reporte.detalle.length > 200 && (
                <p className={styles.note}>
                  Vista web acotada a 200 filas. Exportá a Excel para ver las {reporte.detalle.length} filas completas.
                </p>
              )}
              {reporte.detalle.length === 0 && (
                <p className={styles.note}>Sin resultados para los filtros aplicados.</p>
              )}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
