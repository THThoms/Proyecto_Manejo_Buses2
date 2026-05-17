'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './transferencias.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const AUTH_HEADERS = { 'X-User-Role': 'OFICINISTA', 'X-User-Id': '1' };
const MIN_MOTIVO = 5;

type Tab = 'pendientes' | 'historial';

type EstadoHistorialFiltro = 'TODOS' | 'APROBADO' | 'RECHAZADO';

interface FiltrosPendientes {
  cedula: string;
}

interface FiltrosHistorial {
  estado: EstadoHistorialFiltro;
  cedula: string;
  fechaDesde: string;
  fechaHasta: string;
}

const FILTROS_PENDIENTES_VACIO: FiltrosPendientes = { cedula: '' };
const FILTROS_HISTORIAL_VACIO: FiltrosHistorial = {
  estado: 'TODOS',
  cedula: '',
  fechaDesde: '',
  fechaHasta: '',
};

function maskCedula(cedula: string | null | undefined): string {
  if (!cedula) return '—';
  if (cedula.length <= 4) return '***';
  return `${cedula.slice(0, 2)}${'*'.repeat(Math.max(0, cedula.length - 4))}${cedula.slice(-2)}`;
}

function buildQueryString(params: Record<string, string | undefined>): string {
  const search = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v && v.trim()) search.set(k, v.trim());
  }
  const qs = search.toString();
  return qs ? `?${qs}` : '';
}

interface Pendiente {
  id: number;
  banco: string;
  referencia: string;
  estado: string;
  comprobanteUrl: string | null;
  creadoEn: string;
  pago: { compra: { id: number; total: string; fechaViaje: string; turnoId: number | null } };
}

interface Detalle {
  id: number;
  banco: string;
  referencia: string;
  estado: string;
  comprobanteUrl: string | null;
  creadoEn: string;
  pago: {
    id: number;
    compra: {
      id: number;
      total: string;
      fechaViaje: string;
      turnoId: number | null;
      asientos: { id: number; asientoId: number; estado: string }[];
      boletos: { id: number; nombrePasajero: string; cedulaPasajero: string }[];
    };
  };
}

interface AprobacionHist {
  id: number;
  pagoTransferenciaId: number;
  oficinistaId: number;
  estado: 'APROBADO' | 'RECHAZADO';
  observacion: string | null;
  revisadoEn: string;
  pagoTransferencia: { banco: string; referencia: string; pago: { compra: { id: number; total: string } } };
}

export default function OficinistaTransferenciasPage() {
  const [tab, setTab] = useState<Tab>('pendientes');
  const [pendientes, setPendientes] = useState<Pendiente[]>([]);
  const [historial, setHistorial] = useState<AprobacionHist[]>([]);
  const [totalPendientes, setTotalPendientes] = useState<number | null>(null);
  const [totalHistorial, setTotalHistorial] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [detalle, setDetalle] = useState<Detalle | null>(null);
  const [comprobanteUrl, setComprobanteUrl] = useState<string | null>(null);
  const [comprobanteMime, setComprobanteMime] = useState<string>('');
  const [cargando, setCargando] = useState(false);
  const [accion, setAccion] = useState<'idle' | 'aprobando' | 'rechazando'>('idle');
  const [mensaje, setMensaje] = useState<{ tipo: 'ok' | 'error'; texto: string } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [motivo, setMotivo] = useState('');

  // Mejora US13 (Sprint): filtros de búsqueda. Los activos se aplican al
  // backend; los pending son lo que el oficinista está editando en el form.
  const [filtrosPendientesActivos, setFiltrosPendientesActivos] = useState<FiltrosPendientes>(FILTROS_PENDIENTES_VACIO);
  const [filtrosPendientesForm, setFiltrosPendientesForm] = useState<FiltrosPendientes>(FILTROS_PENDIENTES_VACIO);
  const [filtrosHistorialActivos, setFiltrosHistorialActivos] = useState<FiltrosHistorial>(FILTROS_HISTORIAL_VACIO);
  const [filtrosHistorialForm, setFiltrosHistorialForm] = useState<FiltrosHistorial>(FILTROS_HISTORIAL_VACIO);
  const [buscando, setBuscando] = useState(false);

  // Carga lista activa según tab y filtros activos.
  useEffect(() => {
    setMensaje(null);
    if (tab === 'pendientes') refreshPendientes(filtrosPendientesActivos);
    else refreshHistorial(filtrosHistorialActivos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, filtrosPendientesActivos, filtrosHistorialActivos]);

  // Carga detalle cuando se selecciona pendiente.
  useEffect(() => {
    if (selectedId == null) {
      setDetalle(null);
      return;
    }
    let cancelado = false;
    (async () => {
      setCargando(true);
      try {
        const res = await fetch(`${TICKET_API_URL}/pagos/transferencia/${selectedId}`, {
          headers: AUTH_HEADERS,
        });
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data: Detalle = await res.json();
        if (!cancelado) setDetalle(data);
      } catch (err) {
        if (!cancelado) setMensaje({ tipo: 'error', texto: 'No se pudo cargar el detalle' });
      } finally {
        if (!cancelado) setCargando(false);
      }
    })();
    return () => {
      cancelado = true;
    };
  }, [selectedId]);

  // Descarga el comprobante con headers y lo convierte a object URL para preview.
  useEffect(() => {
    if (!detalle) {
      setComprobanteUrl(null);
      setComprobanteMime('');
      return;
    }
    let cancelado = false;
    let objectUrl: string | null = null;
    (async () => {
      try {
        const res = await fetch(`${TICKET_API_URL}/pagos/transferencia/${detalle.id}/comprobante`, {
          headers: AUTH_HEADERS,
        });
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const blob = await res.blob();
        if (cancelado) return;
        objectUrl = URL.createObjectURL(blob);
        setComprobanteUrl(objectUrl);
        setComprobanteMime(blob.type || '');
      } catch {
        if (!cancelado) {
          setComprobanteUrl(null);
          setComprobanteMime('');
        }
      }
    })();
    return () => {
      cancelado = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [detalle]);

  async function refreshPendientes(filtros: FiltrosPendientes = FILTROS_PENDIENTES_VACIO) {
    setBuscando(true);
    try {
      const qs = buildQueryString({ cedula: filtros.cedula });
      const res = await fetch(`${TICKET_API_URL}/pagos/transferencia/pendientes${qs}`, {
        headers: AUTH_HEADERS,
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data: Pendiente[] = await res.json();
      setPendientes(data);
      const total = Number(res.headers.get('X-Total-Count'));
      setTotalPendientes(Number.isFinite(total) ? total : data.length);
    } catch (err) {
      setMensaje({ tipo: 'error', texto: 'No se pudieron cargar los pendientes' });
    } finally {
      setBuscando(false);
    }
  }

  async function refreshHistorial(filtros: FiltrosHistorial = FILTROS_HISTORIAL_VACIO) {
    setBuscando(true);
    try {
      const qs = buildQueryString({
        estado: filtros.estado !== 'TODOS' ? filtros.estado : undefined,
        cedula: filtros.cedula,
        fechaDesde: filtros.fechaDesde,
        fechaHasta: filtros.fechaHasta,
      });
      const res = await fetch(`${TICKET_API_URL}/aprobaciones${qs}`, { headers: AUTH_HEADERS });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data: AprobacionHist[] = await res.json();
      setHistorial(data);
      const total = Number(res.headers.get('X-Total-Count'));
      setTotalHistorial(Number.isFinite(total) ? total : data.length);
    } catch {
      setMensaje({ tipo: 'error', texto: 'No se pudo cargar el historial' });
    } finally {
      setBuscando(false);
    }
  }

  function handleBuscarPendientes() {
    setSelectedId(null);
    setFiltrosPendientesActivos({ cedula: filtrosPendientesForm.cedula.trim() });
  }

  function handleLimpiarPendientes() {
    setSelectedId(null);
    setFiltrosPendientesForm(FILTROS_PENDIENTES_VACIO);
    setFiltrosPendientesActivos(FILTROS_PENDIENTES_VACIO);
  }

  function handleBuscarHistorial() {
    setFiltrosHistorialActivos({
      estado: filtrosHistorialForm.estado,
      cedula: filtrosHistorialForm.cedula.trim(),
      fechaDesde: filtrosHistorialForm.fechaDesde,
      fechaHasta: filtrosHistorialForm.fechaHasta,
    });
  }

  function handleLimpiarHistorial() {
    setFiltrosHistorialForm(FILTROS_HISTORIAL_VACIO);
    setFiltrosHistorialActivos(FILTROS_HISTORIAL_VACIO);
  }

  async function handleAprobar() {
    if (!detalle) return;
    setAccion('aprobando');
    setMensaje(null);
    try {
      const res = await fetch(`${TICKET_API_URL}/pagos/transferencia/${detalle.id}/aprobar`, {
        method: 'POST',
        headers: { ...AUTH_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error ?? `Error ${res.status}`);
      setMensaje({ tipo: 'ok', texto: `Transferencia #${detalle.id} aprobada. Boleto VIGENTE.` });
      setSelectedId(null);
      await refreshPendientes(filtrosPendientesActivos);
    } catch (err) {
      setMensaje({
        tipo: 'error',
        texto: err instanceof Error ? err.message : 'No se pudo aprobar',
      });
    } finally {
      setAccion('idle');
    }
  }

  async function handleRechazar() {
    if (!detalle) return;
    if (motivo.trim().length < MIN_MOTIVO) {
      setMensaje({ tipo: 'error', texto: `El motivo debe tener al menos ${MIN_MOTIVO} caracteres.` });
      return;
    }
    setAccion('rechazando');
    setMensaje(null);
    try {
      const res = await fetch(`${TICKET_API_URL}/pagos/transferencia/${detalle.id}/rechazar`, {
        method: 'POST',
        headers: { ...AUTH_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify({ motivo: motivo.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error ?? `Error ${res.status}`);
      setMensaje({ tipo: 'ok', texto: `Transferencia #${detalle.id} rechazada. Asientos liberados.` });
      setShowModal(false);
      setMotivo('');
      setSelectedId(null);
      await refreshPendientes(filtrosPendientesActivos);
    } catch (err) {
      setMensaje({
        tipo: 'error',
        texto: err instanceof Error ? err.message : 'No se pudo rechazar',
      });
    } finally {
      setAccion('idle');
    }
  }

  const esImagen = useMemo(() => comprobanteMime.startsWith('image/'), [comprobanteMime]);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Validación de comprobantes</h1>
        <p className={styles.subtitle}>Revisa, aprueba o rechaza pagos por transferencia.</p>
        <nav className={styles.tabs}>
          <button
            className={`${styles.tab} ${tab === 'pendientes' ? styles.tabActive : ''}`}
            onClick={() => setTab('pendientes')}
          >
            Pendientes ({pendientes.length})
          </button>
          <button
            className={`${styles.tab} ${tab === 'historial' ? styles.tabActive : ''}`}
            onClick={() => setTab('historial')}
          >
            Historial
          </button>
        </nav>
      </header>

      {mensaje && (
        <div className={mensaje.tipo === 'ok' ? styles.toastOk : styles.toastError}>
          {mensaje.texto}
        </div>
      )}

      {tab === 'pendientes' ? (
        <>
          {/* Mejora US13 (Sprint): búsqueda por cédula sobre pendientes */}
          <div className={styles.filtros}>
            <div className={styles.filtroCampo}>
              <label className={styles.filtroLabel} htmlFor="filtro-cedula-pend">
                Buscar por cédula
              </label>
              <input
                id="filtro-cedula-pend"
                className={styles.filtroInput}
                inputMode="numeric"
                placeholder="Ej. 0102030405"
                value={filtrosPendientesForm.cedula}
                onChange={(e) =>
                  setFiltrosPendientesForm({ ...filtrosPendientesForm, cedula: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleBuscarPendientes();
                }}
              />
            </div>
            <div className={styles.filtroAcciones}>
              <button
                className={styles.filtroBtnPrim}
                onClick={handleBuscarPendientes}
                disabled={buscando}
              >
                {buscando ? 'Buscando…' : 'Buscar'}
              </button>
              <button
                className={styles.filtroBtnSec}
                onClick={handleLimpiarPendientes}
                disabled={buscando}
              >
                Limpiar
              </button>
            </div>
          </div>
          {totalPendientes !== null && (
            <div className={styles.contadorResultados}>
              {totalPendientes} pendiente{totalPendientes === 1 ? '' : 's'}
              {filtrosPendientesActivos.cedula && ` para la cédula ${filtrosPendientesActivos.cedula}`}
            </div>
          )}

          <div className={styles.layout}>
            <aside className={styles.lista}>
              {pendientes.length === 0 ? (
                <p className={styles.muted}>
                  {filtrosPendientesActivos.cedula
                    ? 'No se encontraron comprobantes pendientes para esa cédula.'
                    : 'No hay comprobantes pendientes.'}
                </p>
              ) : (
                pendientes.map((p) => (
                <button
                  key={p.id}
                  className={`${styles.listItem} ${selectedId === p.id ? styles.listItemActive : ''}`}
                  onClick={() => setSelectedId(p.id)}
                >
                  <div className={styles.listItemTop}>
                    <strong>Compra #{p.pago.compra.id}</strong>
                    <span className={styles.listAmount}>${Number(p.pago.compra.total).toFixed(2)}</span>
                  </div>
                  <div className={styles.listItemBottom}>
                    <span>{p.banco}</span>
                    <span className={styles.muted}>{new Date(p.creadoEn).toLocaleString()}</span>
                  </div>
                </button>
              ))
            )}
          </aside>

          <section className={styles.detalle}>
            {!detalle && !cargando && (
              <p className={styles.muted}>Selecciona un comprobante a la izquierda.</p>
            )}
            {cargando && <p>Cargando detalle…</p>}
            {detalle && !cargando && (
              <>
                <h2 className={styles.detalleTitle}>Compra #{detalle.pago.compra.id}</h2>
                <dl className={styles.dataGrid}>
                  <div><dt>Total</dt><dd>${Number(detalle.pago.compra.total).toFixed(2)}</dd></div>
                  <div><dt>Fecha viaje</dt><dd>{new Date(detalle.pago.compra.fechaViaje).toLocaleDateString()}</dd></div>
                  <div><dt>Banco</dt><dd>{detalle.banco}</dd></div>
                  <div><dt>Referencia</dt><dd><code>{detalle.referencia}</code></dd></div>
                  <div><dt>Subido</dt><dd>{new Date(detalle.creadoEn).toLocaleString()}</dd></div>
                </dl>

                <h3 className={styles.sectionTitle}>Pasajeros</h3>
                <ul className={styles.pasajeros}>
                  {detalle.pago.compra.boletos.map((b) => (
                    <li key={b.id}>
                      <strong>{b.nombrePasajero}</strong> · {maskCedula(b.cedulaPasajero)}
                    </li>
                  ))}
                </ul>

                <h3 className={styles.sectionTitle}>Comprobante</h3>
                <div className={styles.previewBox}>
                  {comprobanteUrl ? (
                    esImagen ? (
                      <img className={styles.previewImg} src={comprobanteUrl} alt="Comprobante" />
                    ) : (
                      <iframe className={styles.previewIframe} src={comprobanteUrl} title="Comprobante" />
                    )
                  ) : (
                    <p className={styles.muted}>Cargando comprobante…</p>
                  )}
                </div>

                <div className={styles.acciones}>
                  <button
                    className={styles.btnAprobar}
                    onClick={handleAprobar}
                    disabled={accion !== 'idle'}
                  >
                    {accion === 'aprobando' ? 'Aprobando…' : 'Aprobar'}
                  </button>
                  <button
                    className={styles.btnRechazar}
                    onClick={() => setShowModal(true)}
                    disabled={accion !== 'idle'}
                  >
                    Rechazar
                  </button>
                </div>
              </>
            )}
          </section>
          </div>
        </>
      ) : (
        <>
          {/* Mejora US13 (Sprint): filtros del historial */}
          <div className={styles.filtros}>
            <div className={styles.filtroCampoSm}>
              <label className={styles.filtroLabel} htmlFor="filtro-estado">Estado</label>
              <select
                id="filtro-estado"
                className={styles.filtroSelect}
                value={filtrosHistorialForm.estado}
                onChange={(e) =>
                  setFiltrosHistorialForm({
                    ...filtrosHistorialForm,
                    estado: e.target.value as EstadoHistorialFiltro,
                  })
                }
              >
                <option value="TODOS">Todos</option>
                <option value="APROBADO">Aprobado</option>
                <option value="RECHAZADO">Rechazado</option>
              </select>
            </div>
            <div className={styles.filtroCampo}>
              <label className={styles.filtroLabel} htmlFor="filtro-cedula-hist">Cédula</label>
              <input
                id="filtro-cedula-hist"
                className={styles.filtroInput}
                inputMode="numeric"
                placeholder="Ej. 0102030405"
                value={filtrosHistorialForm.cedula}
                onChange={(e) =>
                  setFiltrosHistorialForm({ ...filtrosHistorialForm, cedula: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleBuscarHistorial();
                }}
              />
            </div>
            <div className={styles.filtroCampoSm}>
              <label className={styles.filtroLabel} htmlFor="filtro-desde">Fecha desde</label>
              <input
                id="filtro-desde"
                type="date"
                className={styles.filtroInput}
                value={filtrosHistorialForm.fechaDesde}
                onChange={(e) =>
                  setFiltrosHistorialForm({ ...filtrosHistorialForm, fechaDesde: e.target.value })
                }
              />
            </div>
            <div className={styles.filtroCampoSm}>
              <label className={styles.filtroLabel} htmlFor="filtro-hasta">Fecha hasta</label>
              <input
                id="filtro-hasta"
                type="date"
                className={styles.filtroInput}
                value={filtrosHistorialForm.fechaHasta}
                onChange={(e) =>
                  setFiltrosHistorialForm({ ...filtrosHistorialForm, fechaHasta: e.target.value })
                }
              />
            </div>
            <div className={styles.filtroAcciones}>
              <button
                className={styles.filtroBtnPrim}
                onClick={handleBuscarHistorial}
                disabled={buscando}
              >
                {buscando ? 'Buscando…' : 'Buscar'}
              </button>
              <button
                className={styles.filtroBtnSec}
                onClick={handleLimpiarHistorial}
                disabled={buscando}
              >
                Limpiar
              </button>
            </div>
          </div>

          {totalHistorial !== null && (
            <div className={styles.contadorResultados}>
              {totalHistorial} resultado{totalHistorial === 1 ? '' : 's'}
              {filtrosHistorialActivos.estado !== 'TODOS' && ` · ${filtrosHistorialActivos.estado}`}
            </div>
          )}

          {historial.length === 0 ? (
            <div className={styles.sinResultados}>
              No se encontraron aprobaciones para los filtros aplicados.
            </div>
          ) : (
            <div className={styles.tablaWrap}>
              <table className={styles.tabla}>
                <thead>
                  <tr>
                    <th>Fecha / Hora</th>
                    <th>Transferencia</th>
                    <th>Compra</th>
                    <th>Oficinista</th>
                    <th>Estado</th>
                    <th>Motivo</th>
                  </tr>
                </thead>
                <tbody>
                  {historial.map((h) => (
                    <tr key={h.id}>
                      <td>{new Date(h.revisadoEn).toLocaleString()}</td>
                      <td>#{h.pagoTransferenciaId}</td>
                      <td>#{h.pagoTransferencia?.pago?.compra?.id ?? '—'}</td>
                      <td>{h.oficinistaId}</td>
                      <td>
                        <span className={h.estado === 'APROBADO' ? styles.badgeOk : styles.badgeFail}>
                          {h.estado}
                        </span>
                      </td>
                      <td>{h.observacion ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {showModal && (
        <div className={styles.modalBackdrop} onClick={() => !accion.includes('rechaz') && setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>Motivo del rechazo</h3>
            <p className={styles.modalHint}>
              Debe tener al menos {MIN_MOTIVO} caracteres. Se enviará al cliente.
            </p>
            <textarea
              className={styles.textarea}
              rows={4}
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              placeholder="Ej. El comprobante está ilegible / no coincide el monto"
              disabled={accion === 'rechazando'}
            />
            <div className={styles.modalActions}>
              <button
                className={styles.btnSecundario}
                onClick={() => {
                  setShowModal(false);
                  setMotivo('');
                }}
                disabled={accion === 'rechazando'}
              >
                Cancelar
              </button>
              <button
                className={styles.btnRechazar}
                onClick={handleRechazar}
                disabled={accion === 'rechazando' || motivo.trim().length < MIN_MOTIVO}
              >
                {accion === 'rechazando' ? 'Rechazando…' : 'Confirmar rechazo'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
