'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './transferencias.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const AUTH_HEADERS = { 'X-User-Role': 'OFICINISTA', 'X-User-Id': '1' };
const MIN_MOTIVO = 5;

type Tab = 'pendientes' | 'historial';

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
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [detalle, setDetalle] = useState<Detalle | null>(null);
  const [comprobanteUrl, setComprobanteUrl] = useState<string | null>(null);
  const [comprobanteMime, setComprobanteMime] = useState<string>('');
  const [cargando, setCargando] = useState(false);
  const [accion, setAccion] = useState<'idle' | 'aprobando' | 'rechazando'>('idle');
  const [mensaje, setMensaje] = useState<{ tipo: 'ok' | 'error'; texto: string } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [motivo, setMotivo] = useState('');

  // Carga lista activa según tab.
  useEffect(() => {
    setMensaje(null);
    if (tab === 'pendientes') refreshPendientes();
    else refreshHistorial();
  }, [tab]);

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

  async function refreshPendientes() {
    try {
      const res = await fetch(`${TICKET_API_URL}/pagos/transferencia/pendientes`, {
        headers: AUTH_HEADERS,
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data: Pendiente[] = await res.json();
      setPendientes(data);
    } catch (err) {
      setMensaje({ tipo: 'error', texto: 'No se pudieron cargar los pendientes' });
    }
  }

  async function refreshHistorial() {
    try {
      const res = await fetch(`${TICKET_API_URL}/aprobaciones`, { headers: AUTH_HEADERS });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data: AprobacionHist[] = await res.json();
      setHistorial(data);
    } catch {
      setMensaje({ tipo: 'error', texto: 'No se pudo cargar el historial' });
    }
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
      await refreshPendientes();
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
      await refreshPendientes();
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
        <div className={styles.layout}>
          <aside className={styles.lista}>
            {pendientes.length === 0 ? (
              <p className={styles.muted}>No hay comprobantes pendientes.</p>
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
                      <strong>{b.nombrePasajero}</strong> · {b.cedulaPasajero}
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
      ) : (
        <div className={styles.tablaWrap}>
          {historial.length === 0 ? (
            <p className={styles.muted}>Sin historial de decisiones.</p>
          ) : (
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
          )}
        </div>
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
