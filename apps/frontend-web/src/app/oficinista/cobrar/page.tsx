'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import SeatMap, { Asiento } from '@/components/SeatMap';
import styles from './cobrar.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const BUS_API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://localhost:3002';
const OFICINISTA_ID = '1';
const USUARIO_DEMO_ID = 1;
const HISTORIAL_KEY = 'frontend_web_cobros_efectivo_oficina';
const HOY = new Date().toISOString().slice(0, 10);

type TipoTarifa = 'NORMAL' | 'TERCERA_EDAD' | 'DISCAPACIDAD' | 'MENOR';

interface Turno {
  id: number;
  rutaId: number;
  fecha: string;
  horaInicio: string;
  estado: string;
  ruta: {
    id: number;
    nombre: string;
    origen: string;
    destino: string;
    precioPasaje: string;
  };
  bus: {
    placa: string;
    marca: string;
  };
}

interface BoletoEmitido {
  id: number;
  uuidQr: string;
  nombrePasajero: string;
  cedulaPasajero: string;
  tipoTarifa: string;
  estado: string;
}

interface CobroResultado {
  compraId: number;
  pagoEfectivoId: number;
  turnoId: number | null;
  canalVenta: string;
  total: number;
  montoRecibido: number;
  cambio: number;
  boletos: BoletoEmitido[];
}

interface HistorialCobroLocal {
  compraId: number;
  pasajero: string;
  turno: string;
  asiento: string;
  fechaRegistro: string;
  total: number;
  montoRecibido: number;
  cambio: number;
  uuidQr: string;
}

interface TransferenciaPendientePreview {
  id: number;
  banco: string;
  referencia: string;
  creadoEn: string;
  pago: {
    compra: {
      id: number;
      total: string;
    };
  };
}

interface HistorialPagoPreview {
  id: number;
  compraId: number;
  metodoPago: 'TRANSFERENCIA' | 'TARJETA' | 'EFECTIVO';
  estado: 'PENDIENTE' | 'APROBADO' | 'RECHAZADO';
  total: string;
  fechaReferencia: string | null;
  pasajeroPrincipal: string | null;
  canalVenta: string | null;
}

function formatMoney(value: number) {
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function formatFecha(fecha: string | null | undefined) {
  if (!fecha) return '-';
  const parsed = new Date(fecha);
  return Number.isNaN(parsed.getTime()) ? '-' : parsed.toLocaleString();
}

function toInputDate(value: string) {
  return new Date(value).toISOString().slice(0, 10);
}

function sameDay(isoDate: string, inputDate: string) {
  return toInputDate(isoDate) === inputDate;
}

function buildTurnoLabel(turno: Turno) {
  return `${turno.ruta.origen} -> ${turno.ruta.destino} · ${turno.horaInicio} · Bus ${turno.bus.placa}`;
}

function loadHistorial(): HistorialCobroLocal[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(HISTORIAL_KEY);
    return raw ? (JSON.parse(raw) as HistorialCobroLocal[]) : [];
  } catch {
    return [];
  }
}

function saveHistorial(historial: HistorialCobroLocal[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(HISTORIAL_KEY, JSON.stringify(historial));
}

async function readResponse(res: Response) {
  const text = await res.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return { error: text };
  }
}

function methodLabel(metodo: HistorialPagoPreview['metodoPago']) {
  switch (metodo) {
    case 'TRANSFERENCIA':
      return 'Transferencia';
    case 'TARJETA':
      return 'Tarjeta';
    case 'EFECTIVO':
      return 'Efectivo';
    default:
      return metodo;
  }
}

export default function CobrarOficinaPage() {
  const router = useRouter();

  const [fechaViaje, setFechaViaje] = useState(HOY);
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [turnoId, setTurnoId] = useState('');
  const [asientos, setAsientos] = useState<Asiento[]>([]);

  const [cedulaPasajero, setCedulaPasajero] = useState('');
  const [nombrePasajero, setNombrePasajero] = useState('');
  const [tipoTarifa, setTipoTarifa] = useState<TipoTarifa>('NORMAL');
  const [total, setTotal] = useState('');
  const [montoRecibido, setMontoRecibido] = useState('');

  const [loadingTurnos, setLoadingTurnos] = useState(true);
  const [loadingAsientos, setLoadingAsientos] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [cargandoPanel, setCargandoPanel] = useState(false);

  const [errorTurnos, setErrorTurnos] = useState<string | null>(null);
  const [errorAsientos, setErrorAsientos] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [resultado, setResultado] = useState<CobroResultado | null>(null);
  const [historialLocal, setHistorialLocal] = useState<HistorialCobroLocal[]>([]);
  const [transferenciasPendientes, setTransferenciasPendientes] = useState<TransferenciaPendientePreview[]>([]);
  const [historialPagos, setHistorialPagos] = useState<HistorialPagoPreview[]>([]);
  const [selectedAsientoId, setSelectedAsientoId] = useState<number | null>(null);

  const selectedTurno = useMemo(
    () => turnos.find((turno) => String(turno.id) === turnoId) ?? null,
    [turnoId, turnos]
  );

  const selectedAsiento = useMemo(
    () => asientos.find((asiento) => asiento.asientoId === selectedAsientoId) ?? null,
    [asientos, selectedAsientoId]
  );

  const cambioPreview = useMemo(() => {
    const totalNum = Number(total);
    const montoNum = Number(montoRecibido);
    if (!Number.isFinite(totalNum) || !Number.isFinite(montoNum)) return null;
    return Math.round((montoNum - totalNum) * 100) / 100;
  }, [montoRecibido, total]);

  const disponibles = useMemo(
    () => asientos.filter((asiento) => asiento.estado === 'DISPONIBLE').length,
    [asientos]
  );

  useEffect(() => {
    setHistorialLocal(loadHistorial());
  }, []);

  async function cargarPaneles() {
    try {
      setCargandoPanel(true);
      const [pendientesRes, historialRes] = await Promise.all([
        fetch(`${TICKET_API_URL}/pagos/transferencia/pendientes`, {
          headers: { 'X-User-Role': 'OFICINISTA', 'X-User-Id': OFICINISTA_ID },
        }),
        fetch(`${TICKET_API_URL}/aprobaciones/historial-pagos?limit=6`, {
          headers: { 'X-User-Role': 'OFICINISTA', 'X-User-Id': OFICINISTA_ID },
        }),
      ]);

      if (pendientesRes.ok) {
        const data = (await pendientesRes.json()) as TransferenciaPendientePreview[];
        setTransferenciasPendientes(data.slice(0, 5));
      }

      if (historialRes.ok) {
        const data = (await historialRes.json()) as HistorialPagoPreview[];
        setHistorialPagos(data);
      }
    } finally {
      setCargandoPanel(false);
    }
  }

  useEffect(() => {
    void cargarPaneles();
  }, []);

  useEffect(() => {
    let cancelado = false;

    (async () => {
      try {
        setLoadingTurnos(true);
        setErrorTurnos(null);
        const res = await fetch(`${BUS_API_URL}/turnos`);
        if (!res.ok) {
          throw new Error(`No se pudieron cargar los turnos (HTTP ${res.status}).`);
        }

        const data = (await res.json()) as Turno[];
        const ordenados = [...data].sort((a, b) =>
          `${a.fecha}-${a.horaInicio}`.localeCompare(`${b.fecha}-${b.horaInicio}`)
        );
        const turnosFecha = ordenados.filter((turno) => sameDay(turno.fecha, fechaViaje));

        if (!turnosFecha.length && ordenados.length > 0) {
          const fallbackDate = toInputDate(ordenados[0].fecha);
          if (!cancelado && fallbackDate !== fechaViaje) {
            setFechaViaje(fallbackDate);
          }
          return;
        }

        if (!cancelado) {
          setTurnos(turnosFecha);
          setTurnoId((actual) =>
            turnosFecha.some((turno) => String(turno.id) === actual)
              ? actual
              : turnosFecha[0]
              ? String(turnosFecha[0].id)
              : ''
          );
        }
      } catch (err) {
        if (!cancelado) {
          setErrorTurnos(err instanceof Error ? err.message : 'No se pudieron cargar los turnos.');
          setTurnos([]);
          setTurnoId('');
        }
      } finally {
        if (!cancelado) {
          setLoadingTurnos(false);
        }
      }
    })();

    return () => {
      cancelado = true;
    };
  }, [fechaViaje]);

  async function cargarAsientos(turno: Turno) {
    try {
      setLoadingAsientos(true);
      setErrorAsientos(null);
      const res = await fetch(`${BUS_API_URL}/turnos/${turno.id}/asientos`);
      if (!res.ok) {
        throw new Error(`No se pudieron cargar los asientos (HTTP ${res.status}).`);
      }

      const data = (await res.json()) as { asientos?: Asiento[] };
      const lista = data.asientos ?? [];
      setAsientos(lista);
      setSelectedAsientoId((actual) =>
        lista.some((asiento) => asiento.asientoId === actual && asiento.estado === 'DISPONIBLE')
          ? actual
          : null
      );
    } catch (err) {
      setErrorAsientos(err instanceof Error ? err.message : 'No se pudieron cargar los asientos.');
      setAsientos([]);
      setSelectedAsientoId(null);
    } finally {
      setLoadingAsientos(false);
    }
  }

  useEffect(() => {
    if (!selectedTurno) {
      setAsientos([]);
      setSelectedAsientoId(null);
      setTotal('');
      return;
    }

    setTotal(String(selectedTurno.ruta.precioPasaje));
    void cargarAsientos(selectedTurno);
  }, [selectedTurno]);

  async function handleCobrar(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!selectedTurno) {
      setError('Selecciona un turno.');
      return;
    }
    if (!selectedAsiento) {
      setError('Selecciona un asiento disponible.');
      return;
    }
    if (!cedulaPasajero.trim() || !nombrePasajero.trim()) {
      setError('Completa los datos del pasajero.');
      return;
    }

    const totalNum = Number(total);
    const montoNum = Number(montoRecibido);
    if (!Number.isFinite(totalNum) || totalNum <= 0) {
      setError('Total invalido.');
      return;
    }
    if (!Number.isFinite(montoNum) || montoNum < totalNum) {
      setError('Monto recibido insuficiente.');
      return;
    }

    setEnviando(true);
    try {
      const compraRes = await fetch(`${TICKET_API_URL}/compras`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'OFICINISTA',
          'x-user-id': OFICINISTA_ID,
        },
        body: JSON.stringify({
          usuarioId: USUARIO_DEMO_ID,
          frecuenciaId: selectedTurno.rutaId,
          turnoId: selectedTurno.id,
          fechaViaje,
          total: totalNum,
          canal: 'OFICINISTA',
          asientos: [
            {
              asientoTurnoId: selectedAsiento.asientoTurnoId,
              asientoId: selectedAsiento.asientoId,
              cedulaPasajero: cedulaPasajero.trim(),
              nombrePasajero: nombrePasajero.trim(),
              tipoTarifa,
            },
          ],
        }),
      });

      const compraData = await readResponse(compraRes);
      if (!compraRes.ok) {
        setError(String(compraData.error ?? `No se pudo crear la compra (HTTP ${compraRes.status}).`));
        return;
      }

      const compraId = Number(compraData.id);
      if (!Number.isInteger(compraId) || compraId <= 0) {
        setError('La compra se creo, pero no devolvio un id valido.');
        return;
      }

      const cobroRes = await fetch(`${TICKET_API_URL}/pagos/efectivo/oficina`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'OFICINISTA',
          'x-user-id': OFICINISTA_ID,
        },
        body: JSON.stringify({ compraId, montoRecibido: montoNum }),
      });

      const cobroData = await readResponse(cobroRes);
      if (!cobroRes.ok) {
        setError(String(cobroData.error ?? `No se pudo registrar el cobro (HTTP ${cobroRes.status}).`));
        return;
      }

      const cobro = cobroData as unknown as CobroResultado;
      setResultado(cobro);

      const itemHistorial: HistorialCobroLocal = {
        compraId: cobro.compraId,
        pasajero: cobro.boletos[0]?.nombrePasajero ?? nombrePasajero.trim(),
        turno: buildTurnoLabel(selectedTurno),
        asiento: selectedAsiento ? `#${selectedAsiento.numero}` : '-',
        fechaRegistro: new Date().toISOString(),
        total: cobro.total,
        montoRecibido: cobro.montoRecibido,
        cambio: cobro.cambio,
        uuidQr: cobro.boletos[0]?.uuidQr ?? '-',
      };

      setHistorialLocal((actual) => {
        const siguiente = [itemHistorial, ...actual].slice(0, 8);
        saveHistorial(siguiente);
        return siguiente;
      });

      await Promise.all([cargarAsientos(selectedTurno), cargarPaneles()]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error de red al cobrar.');
    } finally {
      setEnviando(false);
    }
  }

  async function handleNuevoCobro() {
    setResultado(null);
    setMontoRecibido('');
    setCedulaPasajero('');
    setNombrePasajero('');
    setSelectedAsientoId(null);
    if (selectedTurno) {
      await cargarAsientos(selectedTurno);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>Centro de caja</span>
            <h1 className={styles.title}>Oficinista · cobro efectivo y control de tickets</h1>
            <p className={styles.subtitle}>
              Emite tickets en efectivo con el grafico del bus, revisa transferencias pendientes y
              consulta el historial desde apartados claros.
            </p>
          </div>
          <div className={styles.heroStats}>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Turnos del dia</span>
              <strong className={styles.statValue}>{turnos.length}</strong>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Asientos libres</span>
              <strong className={styles.statValue}>{selectedTurno ? disponibles : '-'}</strong>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Por aprobar</span>
              <strong className={styles.statValue}>{transferenciasPendientes.length}</strong>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Historial caja</span>
              <strong className={styles.statValue}>{historialLocal.length}</strong>
            </article>
          </div>
        </header>

        <div className={styles.dashboard}>
          <section className={styles.mainColumn}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <h2 className={styles.panelTitle}>Crear ticket y cobrar en efectivo</h2>
                  <p className={styles.panelText}>
                    La compra, el asiento y el boleto se generan desde esta misma vista.
                  </p>
                </div>
                <button className={styles.ghostButton} type="button" onClick={() => router.push('/oficinista/transferencias')}>
                  Abrir revision de transferencias
                </button>
              </div>

              <div className={styles.infoBanner}>
                <strong>Acceso rapido:</strong> <code>/oficinista/cobra</code> redirige a esta
                pantalla.
              </div>

              {resultado && (
                <section className={styles.successPanel}>
                  <div className={styles.successHeader}>
                    <div>
                      <span className={styles.successEyebrow}>Cobro confirmado</span>
                      <h3 className={styles.successTitle}>Compra #{resultado.compraId} lista</h3>
                    </div>
                    <div className={styles.successActions}>
                      <button className={styles.inlineButton} type="button" onClick={() => router.push(`/boleto/${resultado.compraId}`)}>
                        Ver boleto
                      </button>
                      <button className={styles.inlineButtonAlt} type="button" onClick={() => void handleNuevoCobro()}>
                        Nuevo cobro
                      </button>
                    </div>
                  </div>
                  <div className={styles.successGrid}>
                    <div className={styles.metricCard}>
                      <span className={styles.metricLabel}>Total</span>
                      <strong>{formatMoney(resultado.total)}</strong>
                    </div>
                    <div className={styles.metricCard}>
                      <span className={styles.metricLabel}>Recibido</span>
                      <strong>{formatMoney(resultado.montoRecibido)}</strong>
                    </div>
                    <div className={styles.metricCard}>
                      <span className={styles.metricLabel}>Cambio</span>
                      <strong>{formatMoney(resultado.cambio)}</strong>
                    </div>
                  </div>
                  <div className={styles.ticketGrid}>
                    {resultado.boletos.map((boleto) => (
                      <article key={boleto.id} className={styles.ticketCard}>
                        <div className={styles.ticketRow}>
                          <strong>{boleto.nombrePasajero}</strong>
                          <span className={styles.statusTag}>{boleto.estado}</span>
                        </div>
                        <div className={styles.ticketMeta}>
                          Cedula {boleto.cedulaPasajero} · {boleto.tipoTarifa}
                        </div>
                        <code className={styles.ticketCode}>{boleto.uuidQr}</code>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              <form className={styles.formStack} onSubmit={handleCobrar}>
                <section className={styles.block}>
                  <div className={styles.blockHeader}>
                    <h3 className={styles.blockTitle}>Viaje</h3>
                    {selectedTurno && (
                      <span className={styles.blockNote}>{buildTurnoLabel(selectedTurno)}</span>
                    )}
                  </div>
                  <div className={styles.formGrid}>
                    <label className={styles.label}>
                      Fecha de viaje
                      <input
                        className={styles.input}
                        type="date"
                        value={fechaViaje}
                        onChange={(e) => setFechaViaje(e.target.value)}
                        disabled={loadingTurnos || enviando}
                      />
                    </label>
                    <label className={styles.label}>
                      Turno disponible
                      <select
                        className={styles.input}
                        value={turnoId}
                        onChange={(e) => setTurnoId(e.target.value)}
                        disabled={loadingTurnos || !turnos.length || enviando}
                      >
                        {turnos.length === 0 && <option value="">No hay turnos disponibles</option>}
                        {turnos.map((turno) => (
                          <option key={turno.id} value={turno.id}>
                            #{turno.id} · {buildTurnoLabel(turno)}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {loadingTurnos && <div className={styles.helperBox}>Cargando turnos...</div>}
                  {errorTurnos && <div className={styles.errorBox}>{errorTurnos}</div>}

                  {selectedTurno && (
                    <div className={styles.metaGrid}>
                      <article className={styles.metaCard}>
                        <span className={styles.metaLabel}>Ruta</span>
                        <strong>{selectedTurno.ruta.nombre}</strong>
                        <span>{`${selectedTurno.ruta.origen} -> ${selectedTurno.ruta.destino}`}</span>
                      </article>
                      <article className={styles.metaCard}>
                        <span className={styles.metaLabel}>Unidad</span>
                        <strong>{selectedTurno.bus.placa}</strong>
                        <span>{selectedTurno.horaInicio}</span>
                      </article>
                    </div>
                  )}
                </section>

                <section className={styles.block}>
                  <div className={styles.blockHeader}>
                    <h3 className={styles.blockTitle}>Grafico del bus y asiento</h3>
                    <span className={styles.blockNote}>
                      {selectedTurno ? `${disponibles} asientos disponibles` : 'Selecciona un turno'}
                    </span>
                  </div>
                  {selectedTurno ? (
                    <>
                      <div className={styles.seatMapWrap}>
                        <SeatMap
                          key={selectedTurno.id}
                          turnoId={selectedTurno.id}
                          asientos={asientos}
                          isLoading={loadingAsientos}
                          onSeatSelect={(asiento) => setSelectedAsientoId(asiento.asientoId)}
                        />
                      </div>
                      {selectedAsiento && (
                        <div className={styles.helperBox}>
                          Asiento seleccionado: <strong>#{selectedAsiento.numero}</strong>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className={styles.emptyBox}>Selecciona un turno para cargar el grafico del bus.</div>
                  )}
                  {errorAsientos && <div className={styles.errorBox}>{errorAsientos}</div>}
                </section>

                <section className={styles.block}>
                  <h3 className={styles.blockTitle}>Datos del pasajero</h3>
                  <div className={styles.formGrid}>
                    <label className={styles.label}>
                      Cedula
                      <input
                        className={styles.input}
                        value={cedulaPasajero}
                        onChange={(e) => setCedulaPasajero(e.target.value)}
                        placeholder="0102030405"
                      />
                    </label>
                    <label className={styles.label}>
                      Nombre completo
                      <input
                        className={styles.input}
                        value={nombrePasajero}
                        onChange={(e) => setNombrePasajero(e.target.value)}
                        placeholder="Ana Perez"
                      />
                    </label>
                    <label className={styles.label}>
                      Tipo de tarifa
                      <select
                        className={styles.input}
                        value={tipoTarifa}
                        onChange={(e) => setTipoTarifa(e.target.value as TipoTarifa)}
                      >
                        <option value="NORMAL">NORMAL</option>
                        <option value="TERCERA_EDAD">TERCERA_EDAD</option>
                        <option value="DISCAPACIDAD">DISCAPACIDAD</option>
                        <option value="MENOR">MENOR</option>
                      </select>
                    </label>
                  </div>
                </section>

                <section className={styles.block}>
                  <h3 className={styles.blockTitle}>Cobro</h3>
                  <div className={styles.formGrid}>
                    <label className={styles.label}>
                      Total a cobrar (USD)
                      <input
                        className={styles.input}
                        inputMode="decimal"
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                        placeholder="5.50"
                      />
                    </label>
                    <label className={styles.label}>
                      Monto recibido (USD)
                      <input
                        className={styles.input}
                        inputMode="decimal"
                        value={montoRecibido}
                        onChange={(e) => setMontoRecibido(e.target.value)}
                        placeholder="10.00"
                      />
                    </label>
                  </div>
                  {cambioPreview !== null && (
                    <div className={styles.metricBar}>
                      <span>Cambio estimado</span>
                      <strong className={cambioPreview < 0 ? styles.metricDanger : styles.metricAccent}>
                        {formatMoney(cambioPreview)}
                      </strong>
                    </div>
                  )}
                </section>

                {error && <div className={styles.errorBox}>{error}</div>}

                <div className={styles.formActions}>
                  <button className={styles.primaryButton} type="submit" disabled={enviando || !selectedTurno}>
                    {enviando ? 'Procesando...' : 'Cobrar y emitir ticket'}
                  </button>
                </div>
              </form>
            </div>
          </section>

          <aside className={styles.sidebar}>
            <section className={styles.sidePanel}>
              <div className={styles.sideHeader}>
                <div>
                  <h2 className={styles.sideTitle}>Tickets por aprobar</h2>
                  <p className={styles.sideText}>Transferencias pendientes de revision.</p>
                </div>
                <button className={styles.linkButton} type="button" onClick={() => router.push('/oficinista/transferencias')}>
                  Ir al panel
                </button>
              </div>
              {cargandoPanel && transferenciasPendientes.length === 0 ? (
                <div className={styles.emptyBox}>Cargando pendientes...</div>
              ) : transferenciasPendientes.length === 0 ? (
                <div className={styles.emptyBox}>No hay tickets pendientes por transferencia.</div>
              ) : (
                <div className={styles.previewList}>
                  {transferenciasPendientes.map((item) => (
                    <article key={item.id} className={styles.previewCard}>
                      <div className={styles.previewTop}>
                        <strong>Compra #{item.pago.compra.id}</strong>
                        <span>{formatMoney(Number(item.pago.compra.total))}</span>
                      </div>
                      <div className={styles.previewMeta}>
                        {item.banco} · Ref {item.referencia}
                      </div>
                      <div className={styles.previewDate}>{formatFecha(item.creadoEn)}</div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            <section className={styles.sidePanel}>
              <div className={styles.sideHeader}>
                <div>
                  <h2 className={styles.sideTitle}>Historial de caja</h2>
                  <p className={styles.sideText}>Ultimos tickets cobrados en efectivo.</p>
                </div>
                <button className={styles.linkButton} type="button" onClick={() => router.push('/oficinista/transferencias')}>
                  Ver mas
                </button>
              </div>
              {historialLocal.length === 0 ? (
                <div className={styles.emptyBox}>Todavia no hay cobros registrados en este navegador.</div>
              ) : (
                <div className={styles.previewList}>
                  {historialLocal.map((item) => (
                    <article key={`${item.compraId}-${item.fechaRegistro}`} className={styles.previewCard}>
                      <div className={styles.previewTop}>
                        <strong>Compra #{item.compraId}</strong>
                        <button className={styles.inlineLink} type="button" onClick={() => router.push(`/boleto/${item.compraId}`)}>
                          Ver boleto
                        </button>
                      </div>
                      <div className={styles.previewMeta}>
                        {item.pasajero} · {item.asiento}
                      </div>
                      <div className={styles.previewDate}>{item.turno}</div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            <section className={styles.sidePanel}>
              <div className={styles.sideHeader}>
                <div>
                  <h2 className={styles.sideTitle}>Historial unificado</h2>
                  <p className={styles.sideText}>Transferencia, tarjeta y efectivo.</p>
                </div>
                <button className={styles.linkButton} type="button" onClick={() => router.push('/oficinista/transferencias')}>
                  Abrir historial
                </button>
              </div>
              {cargandoPanel && historialPagos.length === 0 ? (
                <div className={styles.emptyBox}>Cargando historial...</div>
              ) : historialPagos.length === 0 ? (
                <div className={styles.emptyBox}>No hay movimientos recientes.</div>
              ) : (
                <div className={styles.previewList}>
                  {historialPagos.map((item) => (
                    <article key={`${item.id}-${item.compraId}`} className={styles.previewCard}>
                      <div className={styles.previewTop}>
                        <strong>{methodLabel(item.metodoPago)}</strong>
                        <span className={styles.methodTag}>{item.estado}</span>
                      </div>
                      <div className={styles.previewMeta}>
                        Compra #{item.compraId} · {item.pasajeroPrincipal ?? 'Sin pasajero'}
                      </div>
                      <div className={styles.previewDate}>
                        {formatFecha(item.fechaReferencia)} · {formatMoney(Number(item.total))}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
