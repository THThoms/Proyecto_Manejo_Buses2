'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import styles from './escanear.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const CHOFER_ID = '1';

const CACHE_KEY_PREFIX = 'validacion_boletos_turno_';
const PENDIENTES_KEY = 'validaciones_qr_pendientes';

type EstadoCacheBoleto =
  | 'VIGENTE'
  | 'UTILIZADO'
  | 'UTILIZADO_LOCAL'
  | 'EXPIRADO'
  | 'ANULADO'
  | 'PENDIENTE';

type ResultadoStatus = 'VALIDO' | 'INVALIDO' | 'EXPIRADO' | 'UTILIZADO';

interface BoletoCache {
  uuidQr: string;
  boletoId: number;
  estado: EstadoCacheBoleto;
  nombrePasajero: string;
  asiento: string;
  destino: string;
}

interface ValidacionPendiente {
  uuidQr: string;
  turnoId: number;
  estado: 'PENDIENTE_SYNC';
  fechaLocal: string;
}

interface ResultadoVista {
  status: ResultadoStatus;
  motivo?: string;
  mensaje?: string;
  origen: 'online' | 'offline';
  boleto?: {
    uuidQr: string;
    estado?: string;
    nombrePasajero?: string;
    asiento?: string;
    destino?: string;
  };
}

interface FeedbackBox {
  type: 'ok' | 'info' | 'error';
  text: string;
}

function cacheKey(turnoId: number) {
  return `${CACHE_KEY_PREFIX}${turnoId}`;
}

function readCache(turnoId: number): BoletoCache[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(cacheKey(turnoId));
    return raw ? (JSON.parse(raw) as BoletoCache[]) : [];
  } catch {
    return [];
  }
}

function saveCache(turnoId: number, boletos: BoletoCache[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(cacheKey(turnoId), JSON.stringify(boletos));
}

function readPendientes(): ValidacionPendiente[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(PENDIENTES_KEY);
    return raw ? (JSON.parse(raw) as ValidacionPendiente[]) : [];
  } catch {
    return [];
  }
}

function savePendientes(value: ValidacionPendiente[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(PENDIENTES_KEY, JSON.stringify(value));
}

async function readResponse(res: Response) {
  const text = await res.text();
  if (!text) return {} as Record<string, unknown>;
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return { error: text } as Record<string, unknown>;
  }
}

function formatFecha(value: string) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? value : d.toLocaleString();
}

export default function ChoferEscanearPage() {
  const [turnoIdInput, setTurnoIdInput] = useState('');
  const [turnoIdActivo, setTurnoIdActivo] = useState<number | null>(null);
  const [cache, setCache] = useState<BoletoCache[]>([]);
  const [cargandoCache, setCargandoCache] = useState(false);
  const [uuidInput, setUuidInput] = useState('');
  const [resultado, setResultado] = useState<ResultadoVista | null>(null);
  const [feedback, setFeedback] = useState<FeedbackBox | null>(null);
  const [validando, setValidando] = useState(false);
  const [pendientes, setPendientes] = useState<ValidacionPendiente[]>([]);
  const [sincronizando, setSincronizando] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [camaraActiva, setCamaraActiva] = useState(false);
  const [camaraError, setCamaraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsOnline(window.navigator.onLine);
    setPendientes(readPendientes());

    const handleOnline = () => {
      setIsOnline(true);
      void sincronizarPendientes();
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (window.navigator.onLine) {
      void sincronizarPendientes();
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      detenerCamara();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cacheStats = useMemo(() => {
    return {
      total: cache.length,
      vigentes: cache.filter((b) => b.estado === 'VIGENTE').length,
      utilizados: cache.filter(
        (b) => b.estado === 'UTILIZADO' || b.estado === 'UTILIZADO_LOCAL'
      ).length,
    };
  }, [cache]);

  function actualizarCache(uuidQr: string, parche: Partial<BoletoCache>) {
    if (turnoIdActivo == null) return;
    setCache((actual) => {
      const next = actual.map((item) =>
        item.uuidQr === uuidQr ? { ...item, ...parche } : item
      );
      saveCache(turnoIdActivo, next);
      return next;
    });
  }

  async function cargarBoletosDelTurno(e?: FormEvent) {
    e?.preventDefault();
    setFeedback(null);
    setResultado(null);

    const turnoId = Number(turnoIdInput);
    if (!Number.isInteger(turnoId) || turnoId <= 0) {
      setFeedback({ type: 'error', text: 'Ingresa un turnoId válido.' });
      return;
    }

    setCargandoCache(true);
    try {
      if (typeof window !== 'undefined' && !window.navigator.onLine) {
        const previo = readCache(turnoId);
        setTurnoIdActivo(turnoId);
        setCache(previo);
        setFeedback({
          type: 'info',
          text: previo.length
            ? 'Sin conexión: usando cache local del viaje.'
            : 'Sin conexión y sin cache previo para este turno.',
        });
        return;
      }

      const res = await fetch(`${TICKET_API_URL}/turnos/${turnoId}/boletos-validacion`, {
        headers: {
          'x-user-role': 'CHOFER',
          'x-user-id': CHOFER_ID,
        },
      });
      const data = await readResponse(res);
      if (!res.ok) {
        setFeedback({
          type: 'error',
          text: String(data.error ?? `No se pudo cargar el listado (HTTP ${res.status}).`),
        });
        return;
      }

      const lista = (data.boletos as BoletoCache[] | undefined) ?? [];
      saveCache(turnoId, lista);
      setTurnoIdActivo(turnoId);
      setCache(lista);
      setFeedback({
        type: 'ok',
        text: `Cargados ${lista.length} boletos del turno ${turnoId} y guardados en cache offline.`,
      });
    } catch (err) {
      const previo = readCache(turnoId);
      setTurnoIdActivo(turnoId);
      setCache(previo);
      setFeedback({
        type: 'info',
        text:
          err instanceof Error
            ? `${err.message}. Se intentó usar cache previo (${previo.length} boletos).`
            : 'Error de red. Se intentó usar cache previo.',
      });
    } finally {
      setCargandoCache(false);
    }
  }

  async function activarCamara() {
    setCamaraError(null);
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setCamaraError('Este dispositivo no expone la cámara desde el navegador.');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch(() => undefined);
      }
      setCamaraActiva(true);
    } catch (err) {
      setCamaraError(
        err instanceof Error
          ? `No se pudo activar la cámara: ${err.message}. Usa el input manual.`
          : 'No se pudo activar la cámara. Usa el input manual.'
      );
      setCamaraActiva(false);
    }
  }

  function detenerCamara() {
    const stream = streamRef.current;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCamaraActiva(false);
  }

  function validarOnlineDesdeRespuesta(
    uuidQr: string,
    data: Record<string, unknown>
  ): ResultadoVista {
    const status = String(data.status ?? 'INVALIDO').toUpperCase() as ResultadoStatus;
    const boletoData = (data.boleto as ResultadoVista['boleto']) ?? { uuidQr };

    if (status === 'VALIDO') {
      actualizarCache(uuidQr, { estado: 'UTILIZADO' });
    } else if (status === 'UTILIZADO') {
      actualizarCache(uuidQr, { estado: 'UTILIZADO' });
    } else if (status === 'EXPIRADO') {
      actualizarCache(uuidQr, { estado: 'EXPIRADO' });
    }

    return {
      status,
      motivo: typeof data.motivo === 'string' ? data.motivo : undefined,
      mensaje: typeof data.mensaje === 'string' ? data.mensaje : undefined,
      origen: 'online',
      boleto: boletoData,
    };
  }

  function validarOfflineLocal(uuidQr: string): ResultadoVista {
    if (turnoIdActivo == null) {
      return {
        status: 'INVALIDO',
        motivo: 'Selecciona un turno y carga su cache antes de validar offline.',
        origen: 'offline',
        boleto: { uuidQr },
      };
    }

    const entry = cache.find((item) => item.uuidQr === uuidQr);
    if (!entry) {
      return {
        status: 'INVALIDO',
        motivo: 'Boleto no encontrado en cache del viaje',
        origen: 'offline',
        boleto: { uuidQr },
      };
    }

    if (entry.estado === 'UTILIZADO_LOCAL') {
      return {
        status: 'UTILIZADO',
        motivo: 'Boleto ya utilizado localmente',
        origen: 'offline',
        boleto: { ...entry },
      };
    }

    if (entry.estado === 'UTILIZADO') {
      return {
        status: 'UTILIZADO',
        motivo: 'Boleto ya utilizado',
        origen: 'offline',
        boleto: { ...entry },
      };
    }

    if (entry.estado === 'ANULADO') {
      return {
        status: 'INVALIDO',
        motivo: 'Boleto anulado',
        origen: 'offline',
        boleto: { ...entry },
      };
    }

    if (entry.estado === 'EXPIRADO') {
      return {
        status: 'EXPIRADO',
        motivo: 'Boleto expirado',
        origen: 'offline',
        boleto: { ...entry },
      };
    }

    if (entry.estado === 'PENDIENTE') {
      return {
        status: 'INVALIDO',
        motivo: 'Boleto pendiente de validación o pago',
        origen: 'offline',
        boleto: { ...entry },
      };
    }

    // VIGENTE → marcamos UTILIZADO_LOCAL y dejamos evento en cola.
    actualizarCache(uuidQr, { estado: 'UTILIZADO_LOCAL' });
    const evento: ValidacionPendiente = {
      uuidQr,
      turnoId: turnoIdActivo,
      estado: 'PENDIENTE_SYNC',
      fechaLocal: new Date().toISOString(),
    };
    const colaPrev = readPendientes().filter((item) => item.uuidQr !== uuidQr);
    const cola = [evento, ...colaPrev];
    savePendientes(cola);
    setPendientes(cola);

    return {
      status: 'VALIDO',
      mensaje: 'Boleto válido (offline). Quedó pendiente de sincronización.',
      origen: 'offline',
      boleto: { ...entry, estado: 'UTILIZADO_LOCAL' },
    };
  }

  async function validarUuid(uuidQr: string) {
    setResultado(null);
    setFeedback(null);

    const valor = uuidQr.trim();
    if (!valor) {
      setFeedback({ type: 'error', text: 'Pega o escanea un uuidQr.' });
      return;
    }

    if (turnoIdActivo == null) {
      setFeedback({
        type: 'error',
        text: 'Carga primero los boletos del turno (online u offline).',
      });
      return;
    }

    setValidando(true);
    try {
      const online = typeof window !== 'undefined' ? window.navigator.onLine : true;
      if (!online) {
        setResultado(validarOfflineLocal(valor));
        return;
      }

      const res = await fetch(`${TICKET_API_URL}/boletos/validar-qr`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'CHOFER',
          'x-user-id': CHOFER_ID,
        },
        body: JSON.stringify({ uuidQr: valor, turnoId: turnoIdActivo }),
      });
      const data = await readResponse(res);
      if (res.status === 403) {
        setFeedback({ type: 'error', text: 'Acceso restringido al rol CHOFER.' });
        return;
      }
      if (!res.ok) {
        // Caída del backend → tratamos como offline.
        setResultado(validarOfflineLocal(valor));
        setFeedback({
          type: 'info',
          text: `El backend respondió ${res.status}. Validación realizada con cache local.`,
        });
        return;
      }
      setResultado(validarOnlineDesdeRespuesta(valor, data));
    } catch (err) {
      // Falla de red → fallback offline.
      const offline = validarOfflineLocal(valor);
      setResultado(offline);
      setFeedback({
        type: 'info',
        text:
          err instanceof Error
            ? `${err.message}. Se validó contra la cache local.`
            : 'Error de red. Se validó contra la cache local.',
      });
    } finally {
      setValidando(false);
    }
  }

  async function onSubmitManual(e: FormEvent) {
    e.preventDefault();
    await validarUuid(uuidInput);
    setUuidInput('');
  }

  async function sincronizarPendientes() {
    if (sincronizando) return;
    if (typeof window === 'undefined' || !window.navigator.onLine) return;

    setSincronizando(true);
    try {
      let cola = readPendientes();
      for (let i = 0; i < cola.length; i += 1) {
        const evento = cola[i];
        try {
          const res = await fetch(`${TICKET_API_URL}/boletos/validar-qr`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-user-role': 'CHOFER',
              'x-user-id': CHOFER_ID,
            },
            body: JSON.stringify({ uuidQr: evento.uuidQr, turnoId: evento.turnoId }),
          });
          const data = await readResponse(res);
          if (!res.ok) {
            // Mantén el evento, sigue con el resto.
            continue;
          }
          const status = String(data.status ?? '').toUpperCase();
          if (status === 'VALIDO' || status === 'UTILIZADO') {
            // Sincronizado correctamente: eliminamos de la cola y actualizamos cache.
            cola = cola.filter((it, idx) => idx !== i);
            i -= 1;
            savePendientes(cola);
            if (evento.turnoId === turnoIdActivo) {
              actualizarCache(evento.uuidQr, { estado: 'UTILIZADO' });
            }
          } else if (status === 'EXPIRADO') {
            // Sincronizado pero el backend lo marcó EXPIRADO; lo retiramos de la cola.
            cola = cola.filter((it, idx) => idx !== i);
            i -= 1;
            savePendientes(cola);
            if (evento.turnoId === turnoIdActivo) {
              actualizarCache(evento.uuidQr, { estado: 'EXPIRADO' });
            }
          } else {
            // INVALIDO real → lo retiramos pero avisamos.
            cola = cola.filter((it, idx) => idx !== i);
            i -= 1;
            savePendientes(cola);
          }
        } catch {
          // Error de red: dejamos el evento para reintentar después.
        }
      }
      setPendientes(cola);
      if (cola.length === 0) {
        setFeedback({ type: 'ok', text: 'Validaciones offline sincronizadas.' });
      } else {
        setFeedback({
          type: 'info',
          text: `Quedan ${cola.length} validaciones por sincronizar.`,
        });
      }
    } finally {
      setSincronizando(false);
    }
  }

  const resultClass =
    resultado?.status === 'VALIDO' ? styles.resultGreen : styles.resultRed;

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>Validación de acceso al bus</span>
            <h1 className={styles.title}>Chofer · escaneo de QR del boleto</h1>
            <p className={styles.subtitle}>
              Carga el listado del viaje, escanea el QR del pasajero (o pega su uuidQr)
              y la pantalla pinta el resultado de inmediato. Funciona offline contra el
              cache del turno.
            </p>
          </div>
          <div className={styles.heroStats}>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Boletos en cache</span>
              <strong className={styles.statValue}>{cacheStats.total}</strong>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Vigentes</span>
              <strong className={styles.statValue}>{cacheStats.vigentes}</strong>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Utilizados</span>
              <strong className={styles.statValue}>{cacheStats.utilizados}</strong>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Pendientes sync</span>
              <strong className={styles.statValue}>{pendientes.length}</strong>
            </article>
          </div>
        </header>

        <div className={styles.dashboard}>
          <section>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <h2 className={styles.panelTitle}>Turno y cache offline</h2>
                  <p className={styles.panelText}>
                    Estando online, descarga el listado del viaje. El listado se guarda
                    en localStorage para validar QRs sin conexión.
                  </p>
                </div>
                <span className={isOnline ? styles.netBadgeOnline : styles.netBadgeOffline}>
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>

              <form className={styles.block} onSubmit={cargarBoletosDelTurno}>
                <div className={styles.formGrid}>
                  <label className={styles.label}>
                    Turno (id)
                    <input
                      className={styles.input}
                      inputMode="numeric"
                      value={turnoIdInput}
                      onChange={(e) => setTurnoIdInput(e.target.value)}
                      placeholder="12"
                    />
                  </label>
                </div>
                <div className={styles.actions}>
                  <button className={styles.primaryButton} type="submit" disabled={cargandoCache}>
                    {cargandoCache ? 'Cargando…' : 'Cargar boletos del viaje'}
                  </button>
                  <button
                    className={styles.secondaryButton}
                    type="button"
                    onClick={() => void sincronizarPendientes()}
                    disabled={!isOnline || sincronizando || pendientes.length === 0}
                  >
                    {sincronizando ? 'Sincronizando…' : 'Sincronizar validaciones'}
                  </button>
                </div>
                {turnoIdActivo != null && (
                  <div className={styles.helperBox}>
                    Turno activo: <strong>#{turnoIdActivo}</strong> · {cache.length} boletos en cache.
                  </div>
                )}
              </form>

              <div className={styles.block}>
                <h2 className={styles.blockTitle}>Escanear QR</h2>
                <div className={styles.cameraSlot}>
                  {camaraActiva ? (
                    <>
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        style={{ width: '100%', maxHeight: 240, borderRadius: 12 }}
                      />
                      <p>
                        Cámara activa. Cuando integremos la librería de QR aquí se
                        capturará automáticamente. Mientras tanto, pega el uuidQr abajo.
                      </p>
                      <button
                        className={styles.secondaryButton}
                        type="button"
                        onClick={detenerCamara}
                      >
                        Detener cámara
                      </button>
                    </>
                  ) : (
                    <>
                      <p>
                        La cámara permite escanear el QR sin app externa. Si no hay
                        permisos o cámara, usa el input manual.
                      </p>
                      <button
                        className={styles.primaryButton}
                        type="button"
                        onClick={() => void activarCamara()}
                      >
                        Activar cámara
                      </button>
                    </>
                  )}
                </div>
                {camaraError && <div className={styles.errorBox}>{camaraError}</div>}

                <form className={styles.block} onSubmit={onSubmitManual}>
                  <label className={styles.label}>
                    UUID del QR (entrada manual / pegado)
                    <input
                      className={`${styles.input} ${styles.qrInput}`}
                      value={uuidInput}
                      onChange={(e) => setUuidInput(e.target.value)}
                      placeholder="ej. 6a1c5f8e-9b1d-4f3b-9a55-72f4c1f88b41"
                      autoComplete="off"
                    />
                  </label>
                  <div className={styles.actions}>
                    <button
                      className={styles.primaryButton}
                      type="submit"
                      disabled={validando || turnoIdActivo == null}
                    >
                      {validando ? 'Validando…' : 'Validar QR'}
                    </button>
                  </div>
                </form>
              </div>

              {feedback && (
                <div
                  className={
                    feedback.type === 'error'
                      ? styles.errorBox
                      : styles.helperBox
                  }
                >
                  {feedback.text}
                </div>
              )}

              {resultado && (
                <article className={resultClass}>
                  <span className={styles.resultBadge}>
                    {resultado.status} · {resultado.origen === 'offline' ? 'offline' : 'online'}
                  </span>
                  <h3 className={styles.resultTitle}>
                    {resultado.status === 'VALIDO'
                      ? 'Acceso autorizado'
                      : resultado.status === 'UTILIZADO'
                      ? 'Boleto ya utilizado'
                      : resultado.status === 'EXPIRADO'
                      ? 'Boleto expirado'
                      : 'Boleto rechazado'}
                  </h3>
                  {resultado.motivo && <p className={styles.resultMotivo}>{resultado.motivo}</p>}
                  {resultado.mensaje && <p className={styles.resultMotivo}>{resultado.mensaje}</p>}

                  {resultado.boleto && (
                    <div className={styles.resultGrid}>
                      <div className={styles.resultCell}>
                        <span className={styles.resultCellLabel}>Pasajero</span>
                        <span className={styles.resultCellValue}>
                          {resultado.boleto.nombrePasajero ?? '-'}
                        </span>
                      </div>
                      <div className={styles.resultCell}>
                        <span className={styles.resultCellLabel}>Asiento</span>
                        <span className={styles.resultCellValue}>
                          {resultado.boleto.asiento ?? '-'}
                        </span>
                      </div>
                      <div className={styles.resultCell}>
                        <span className={styles.resultCellLabel}>Destino</span>
                        <span className={styles.resultCellValue}>
                          {resultado.boleto.destino ?? '-'}
                        </span>
                      </div>
                    </div>
                  )}

                  {resultado.boleto?.uuidQr && (
                    <code className={styles.resultCode}>{resultado.boleto.uuidQr}</code>
                  )}
                </article>
              )}
            </div>
          </section>

          <aside className={styles.sidebar}>
            <section className={styles.sidePanel}>
              <div className={styles.sideHeader}>
                <div>
                  <h2 className={styles.sideTitle}>Boletos del turno</h2>
                  <p className={styles.sideText}>
                    Lista cacheada para validar sin conexión. Se marca UTILIZADO_LOCAL al
                    validar offline.
                  </p>
                </div>
              </div>

              {turnoIdActivo == null ? (
                <div className={styles.emptyBox}>
                  Carga un turno para ver la cache.
                </div>
              ) : cache.length === 0 ? (
                <div className={styles.emptyBox}>
                  Sin boletos en cache para este turno.
                </div>
              ) : (
                <div className={styles.previewList}>
                  {cache.slice(0, 30).map((item) => (
                    <article key={item.uuidQr} className={styles.previewCard}>
                      <div className={styles.previewTop}>
                        <strong>{item.nombrePasajero}</strong>
                        <span
                          className={`${styles.statusTag} ${
                            item.estado === 'VIGENTE'
                              ? styles.statusOk
                              : item.estado === 'UTILIZADO_LOCAL'
                              ? styles.statusSync
                              : styles.statusError
                          }`}
                        >
                          {item.estado}
                        </span>
                      </div>
                      <div className={styles.previewMeta}>
                        {item.asiento} · {item.destino}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            <section className={styles.sidePanel}>
              <div className={styles.sideHeader}>
                <div>
                  <h2 className={styles.sideTitle}>Pendientes de sincronización</h2>
                  <p className={styles.sideText}>
                    Validaciones realizadas offline que se reenvían al volver online.
                  </p>
                </div>
              </div>

              {pendientes.length === 0 ? (
                <div className={styles.emptyBox}>Sin pendientes.</div>
              ) : (
                <div className={styles.previewList}>
                  {pendientes.map((evento) => (
                    <article key={evento.uuidQr} className={styles.previewCard}>
                      <div className={styles.previewTop}>
                        <strong>Turno #{evento.turnoId}</strong>
                        <span className={`${styles.statusTag} ${styles.statusSync}`}>
                          {evento.estado}
                        </span>
                      </div>
                      <div className={styles.previewMeta}>{formatFecha(evento.fechaLocal)}</div>
                      <code className={styles.resultCode}>{evento.uuidQr}</code>
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
