'use client';

import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import styles from './escanear.module.css';

const BUS_API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://localhost:3002';
const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const CHOFER_ID = '1';

interface Turno {
  id: number;
  busId: number;
  rutaId: number;
  choferId: number | null;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  estado: string;
  ruta: {
    id: number;
    nombre: string;
    origen: string;
    destino: string;
    precioPasaje: string;
  };
  bus: {
    id: number;
    placa: string;
    marca: string;
    capacidad: number;
  };
  chofer?: {
    id: number;
    nombre: string;
  } | null;
}

interface VerificationResult {
  valido: boolean;
  pasajero?: string;
  cedula?: string;
  asiento?: number;
  destino?: string;
  origen?: string;
  tipoTarifa?: string;
  motivo?: string;
  mensaje?: string;
  uuidQr?: string;
  turnoId?: number;
}

interface EscaneoPendiente {
  uuidQr: string;
  turnoId: number;
}

type ScanState = 'idle' | 'scanning' | 'detected';

const HOY = new Date().toISOString().slice(0, 10);

function toInputDate(value: string) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? HOY : parsed.toISOString().slice(0, 10);
}

function sameDay(isoDate: string, inputDate: string) {
  return toInputDate(isoDate) === inputDate;
}

export default function EscanearPage() {
  const [isOnline, setIsOnline] = useState(true);

  const [scanState, setScanState] = useState<ScanState>('idle');
  const [lastQr, setLastQr] = useState<string | null>(null);

  const [verificando, setVerificando] = useState(false);
  const [resultado, setResultado] = useState<VerificationResult | null>(null);

  const [sincronizando, setSincronizando] = useState(false);
  const [mensajeSincro, setMensajeSincro] = useState<string | null>(null);

  const scannerRef = useRef<any>(null);
  const scannerDivId = 'qr-reader';

  // ── Online/offline ──────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsOnline(window.navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // ── Cargar y precargar turnos automáticamente en background ──
  const cargarBoletosTurno = async (id: string) => {
    if (!id || !window.navigator.onLine) return;
    try {
      const res = await fetch(`${TICKET_API_URL}/verificar-boleto/turno/${id}/boletos`, {
        headers: {
          'x-user-role': 'CHOFER',
          'x-user-id': CHOFER_ID,
        },
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem(`pwa_boletos_turno_${id}`, JSON.stringify(data.boletos || []));
      }
    } catch (err) {
      console.warn('No se pudo precargar los boletos del turno:', err);
    }
  };

  useEffect(() => {
    if (!isOnline) return;
    let cancelado = false;

    (async () => {
      try {
        const res = await fetch(`${BUS_API_URL}/turnos`);
        if (res.ok && !cancelado) {
          const data = (await res.json()) as Turno[];
          const turnosChofer = data.filter((t) => {
            const chofer = t.chofer?.id ?? t.choferId;
            return chofer == null || chofer === Number(CHOFER_ID);
          });
          
          // Precargar en background
          for (const t of turnosChofer) {
            if (cancelado) break;
            await cargarBoletosTurno(String(t.id));
          }
        }
      } catch (err) {
        console.warn('Error precargando turnos en background:', err);
      }
    })();

    return () => {
      cancelado = true;
    };
  }, [isOnline]);

  // ── Sincronizar escaneos pendientes ──────────
  const sincronizarEscaneosPendientes = async () => {
    if (!window.navigator.onLine) return;
    const raw = localStorage.getItem('pwa_escaneos_pendientes');
    if (!raw) return;
    try {
      const pendientes: EscaneoPendiente[] = JSON.parse(raw);
      if (!pendientes.length) return;
      setSincronizando(true);

      const fallidos: EscaneoPendiente[] = [];
      for (const escaneo of pendientes) {
        try {
          const res = await fetch(`${TICKET_API_URL}/verificar-boleto`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-user-role': 'CHOFER',
              'x-user-id': CHOFER_ID,
            },
            body: JSON.stringify({
              uuidQr: escaneo.uuidQr,
              turnoId: escaneo.turnoId,
            }),
          });
          if (!res.ok) {
            if (res.status >= 500) {
              fallidos.push(escaneo);
            }
          }
        } catch {
          fallidos.push(escaneo);
        }
      }

      localStorage.setItem('pwa_escaneos_pendientes', JSON.stringify(fallidos));
      if (fallidos.length === 0) {
        setMensajeSincro('Sincronizados todos los escaneos realizados offline.');
        setTimeout(() => setMensajeSincro(null), 5000);
      } else {
        setMensajeSincro(`Se sincronizaron algunos escaneos offline. Pendientes: ${fallidos.length}`);
      }
    } catch (err) {
      console.error('Error al sincronizar escaneos:', err);
    } finally {
      setSincronizando(false);
    }
  };

  useEffect(() => {
    if (isOnline) {
      sincronizarEscaneosPendientes();
    }
  }, [isOnline]);

  // ── Limpiar escáner al desmontar ────────────
  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current
          .stop()
          .then(() => scannerRef.current?.clear())
          .catch(() => {});
        scannerRef.current = null;
      }
    };
  }, []);

  // ── Realizar validación contra API o Local ──
  const realizarVerificacion = async (uuid: string) => {
    setVerificando(true);
    setResultado(null);

    // Flujo offline
    if (!isOnline) {
      setTimeout(() => {
        try {
          let boleto: any = null;
          let foundCacheKey: string | null = null;
          let foundIndex: number = -1;

          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('pwa_boletos_turno_')) {
              const rawCache = localStorage.getItem(key);
              const boletos = rawCache ? JSON.parse(rawCache) : [];
              const index = boletos.findIndex((b: any) => b.uuidQr === uuid);
              if (index !== -1) {
                boleto = boletos[index];
                foundCacheKey = key;
                foundIndex = index;
                break;
              }
            }
          }

          if (!boleto) {
            setResultado({
              valido: false,
              motivo: 'NO_ENCONTRADO',
              mensaje: 'Boleto no encontrado en la base de datos local (Offline)',
            });
            setVerificando(false);
            return;
          }

          if (boleto.estado === 'UTILIZADO') {
            setResultado({
              valido: false,
              motivo: 'UTILIZADO',
              mensaje: 'Este boleto ya fue utilizado (Offline)',
              pasajero: boleto.nombrePasajero,
            });
            setVerificando(false);
            return;
          }

          if (boleto.estado !== 'VIGENTE') {
            setResultado({
              valido: false,
              motivo: boleto.estado,
              mensaje: `El boleto está en estado no válido: ${boleto.estado} (Offline)`,
              pasajero: boleto.nombrePasajero,
            });
            setVerificando(false);
            return;
          }

          // Es válido offline! Marcamos en caché local como UTILIZADO
          if (foundCacheKey && foundIndex !== -1) {
            const rawCache = localStorage.getItem(foundCacheKey);
            const boletos = rawCache ? JSON.parse(rawCache) : [];
            boletos[foundIndex].estado = 'UTILIZADO';
            localStorage.setItem(foundCacheKey, JSON.stringify(boletos));

            // Extraer turnoId de la clave de caché 'pwa_boletos_turno_XX'
            const tId = Number(foundCacheKey.replace('pwa_boletos_turno_', ''));

            // Guardamos en la cola de sincronización offline
            const rawPendientes = localStorage.getItem('pwa_escaneos_pendientes');
            const pendientes = rawPendientes ? JSON.parse(rawPendientes) : [];
            pendientes.push({ uuidQr: uuid, turnoId: tId });
            localStorage.setItem('pwa_escaneos_pendientes', JSON.stringify(pendientes));

            setResultado({
              valido: true,
              pasajero: boleto.nombrePasajero,
              cedula: boleto.cedulaPasajero,
              asiento: boleto.id,
              origen: boleto.origen || 'Origen no especificado',
              destino: boleto.destino || 'Destino no especificado',
              tipoTarifa: boleto.tipoTarifa,
              uuidQr: boleto.uuidQr,
              turnoId: tId,
            });
          }
        } catch (err) {
          setResultado({
            valido: false,
            motivo: 'ERROR_INTERNO_OFFLINE',
            mensaje: 'Error al procesar la validación offline.',
          });
        } finally {
          setVerificando(false);
        }
      }, 500);
      return;
    }

    // Flujo online
    try {
      const res = await fetch(`${TICKET_API_URL}/verificar-boleto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'CHOFER',
          'x-user-id': CHOFER_ID,
        },
        body: JSON.stringify({
          uuidQr: uuid,
        }),
      });

      const data = await res.json();
      setResultado(data);

      if (data.valido && data.turnoId) {
        try {
          const cacheKey = `pwa_boletos_turno_${data.turnoId}`;
          const rawCache = localStorage.getItem(cacheKey);
          if (rawCache) {
            const boletos = JSON.parse(rawCache);
            const index = boletos.findIndex((b: any) => b.uuidQr === uuid);
            if (index !== -1) {
              boletos[index].estado = 'UTILIZADO';
              localStorage.setItem(cacheKey, JSON.stringify(boletos));
            }
          }
        } catch (cacheErr) {
          console.warn('No se pudo actualizar el boleto en caché local tras scan online:', cacheErr);
        }
      }
    } catch (err) {
      setResultado({
        valido: false,
        motivo: 'ERROR_CONEXION',
        mensaje: 'Error de conexión con el servidor principal.',
      });
    } finally {
      setVerificando(false);
    }
  };

  // ── Iniciar escaneo ─────────────────────────
  const startScanning = useCallback(async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
      } catch {
        // ignorar
      }
      scannerRef.current = null;
    }

    setLastQr(null);
    setResultado(null);
    setScanState('scanning');

    await new Promise((r) => setTimeout(r, 100));

    const { Html5Qrcode } = await import('html5-qrcode');
    const html5Qr = new Html5Qrcode(scannerDivId);
    scannerRef.current = html5Qr;

    try {
      await html5Qr.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1,
        },
        async (decodedText) => {
          setLastQr(decodedText);
          setScanState('detected');
          
          if (html5Qr.isScanning) {
            await html5Qr.stop().catch(() => {});
            html5Qr.clear();
          }
          scannerRef.current = null;

          await realizarVerificacion(decodedText);
        },
        () => {
          // Frame vacío, ignorar
        }
      );
    } catch (err) {
      console.error('Error al iniciar cámara:', err);
      setScanState('idle');
    }
  }, [realizarVerificacion]);

  // ── Detener escaneo ─────────────────────────
  const stopScanning = useCallback(async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
      } catch {
        // ignorar
      }
      scannerRef.current = null;
    }
    setScanState('idle');
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        {/* ── Header ─────────────────────── */}
        <header className={styles.header}>
          <div className={styles.headerRow}>
            <h1 className={styles.title}>Validar boletos QR</h1>
            <span className={isOnline ? styles.netBadgeOnline : styles.netBadgeOffline}>
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem', width: '100%' }}>
            <a href="/chofer/cobrar" style={{ padding: '0.6rem 1.2rem', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', color: '#475569', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', fontSize: '0.85rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', transition: 'all 0.2s' }}>💵 Cobrar Pasaje</a>
            <span style={{ padding: '0.6rem 1.2rem', background: '#ffffff', borderRadius: '12px', color: '#2563eb', fontWeight: '800', border: '1px solid #bfdbfe', fontSize: '0.85rem', boxShadow: '0 4px 6px -1px rgba(37,99,235,0.08)' }}>📷 Validar QR</span>
          </div>
        </header>

        {mensajeSincro && (
          <div className={styles.infoBox} style={{ background: '#dcfce7', borderColor: '#bbf7d0', color: '#15803d', marginBottom: '0.5rem', fontWeight: '700' }}>
            🔄 {mensajeSincro}
          </div>
        )}



        {/* ── Zona del escáner ───────────── */}
        <div className={styles.scannerArea}>
          {scanState === 'idle' && (
            <div className={styles.scannerPlaceholder}>
              <span className={styles.scannerIcon}>📷</span>
              <p>Presiona el botón para activar la cámara y escanear el QR del boleto</p>
            </div>
          )}

          {scanState === 'scanning' && (
            <div className={styles.scannerContainer}>
              <div id={scannerDivId}></div>
            </div>
          )}

          {scanState === 'detected' && verificando && (
            <div className={styles.loadingState}>
              <div className={styles.spinner}></div>
              <p>Consultando validez del boleto...</p>
            </div>
          )}

          {scanState === 'detected' && resultado && resultado.valido && (
            <div className={styles.resultValid}>
              <div className={styles.resultContent}>
                <div className={styles.resultIconValid}>✓</div>
                <h2 className={styles.resultTitle}>BOLETO VÁLIDO</h2>
                <p className={styles.resultMotivo}>El pasajero puede ingresar al bus</p>

                <div className={styles.resultDataGrid}>
                  <div className={styles.resultDataItem}>
                    <div className={styles.resultDataLabel}>Pasajero</div>
                    <div className={styles.resultDataValue}>{resultado.pasajero}</div>
                  </div>
                  <div className={styles.resultDataItem}>
                    <div className={styles.resultDataLabel}>Asiento</div>
                    <div className={styles.resultDataValue}>#{resultado.asiento}</div>
                  </div>
                  <div className={styles.resultDataItem}>
                    <div className={styles.resultDataLabel}>Origen</div>
                    <div className={styles.resultDataValue}>{resultado.origen}</div>
                  </div>
                  <div className={styles.resultDataItem}>
                    <div className={styles.resultDataLabel}>Destino</div>
                    <div className={styles.resultDataValue}>{resultado.destino}</div>
                  </div>
                </div>

                <button className={styles.btnClose} onClick={startScanning}>
                  Escanear Siguiente
                </button>
              </div>
            </div>
          )}

          {scanState === 'detected' && resultado && !resultado.valido && (
            <div className={styles.resultInvalid}>
              <div className={styles.resultContent}>
                <div className={styles.resultIconInvalid}>✗</div>
                <h2 className={styles.resultTitle}>ACCESO DENEGADO</h2>
                <p className={styles.resultMotivo} style={{ fontWeight: '600', fontSize: '1.25rem', color: '#fecaca', margin: '0 0 1.5rem' }}>
                  {resultado.mensaje}
                </p>

                {resultado.pasajero && (
                  <div className={styles.resultDataGrid} style={{ gridTemplateColumns: '1fr', marginBottom: '2rem' }}>
                    <div className={styles.resultDataItem} style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <div className={styles.resultDataLabel} style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Pasajero Registrado</div>
                      <div className={styles.resultDataValue}>{resultado.pasajero}</div>
                    </div>
                  </div>
                )}

                <button className={styles.btnClose} style={{ background: 'rgba(255, 255, 255, 0.15)', borderColor: 'rgba(255, 255, 255, 0.25)' }} onClick={startScanning}>
                  Escanear Siguiente
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── Botones de acción ──────────── */}
        {scanState === 'idle' && (
          <button
            className={styles.btnScan}
            onClick={startScanning}
          >
            📷 Activar cámara y escanear
          </button>
        )}

        {scanState === 'scanning' && (
          <button className={styles.btnScan} onClick={stopScanning}>
            ⏹ Detener cámara
          </button>
        )}

        {scanState === 'detected' && !verificando && (
          <button className={styles.btnScan} onClick={startScanning}>
            🔄 Escanear otro QR
          </button>
        )}

        {/* ── Info ───────────────────────── */}
        <div className={styles.infoBox}>
          💡 La validación funciona sin conexión. Si la red cae, el sistema verificará contra la lista de boletos guardada localmente y se sincronizará cuando vuelvas a tener red.
        </div>
      </div>
    </main>
  );
}
