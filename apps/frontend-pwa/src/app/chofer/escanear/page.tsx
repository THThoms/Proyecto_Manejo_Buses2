'use client';

import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import styles from './escanear.module.css';

const BUS_API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://localhost:3002';
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
  const [fechaViaje, setFechaViaje] = useState(HOY);
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [turnoId, setTurnoId] = useState('');
  const [loadingTurnos, setLoadingTurnos] = useState(true);

  const [scanState, setScanState] = useState<ScanState>('idle');
  const [lastQr, setLastQr] = useState<string | null>(null);

  const scannerRef = useRef<Html5Qrcode | null>(null);
  const scannerDivId = 'qr-reader';

  const selectedTurno = useMemo(
    () => turnos.find((t) => String(t.id) === turnoId) ?? null,
    [turnoId, turnos]
  );

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

  // ── Cargar turnos ───────────────────────────
  useEffect(() => {
    let cancelado = false;

    (async () => {
      try {
        setLoadingTurnos(true);
        const res = await fetch(`${BUS_API_URL}/turnos`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as Turno[];

        const turnosChofer = data
          .filter((t) => {
            const chofer = t.chofer?.id ?? t.choferId;
            return chofer == null || chofer === Number(CHOFER_ID);
          })
          .sort((a, b) => `${a.fecha}-${a.horaInicio}`.localeCompare(`${b.fecha}-${b.horaInicio}`));

        let turnosFecha = turnosChofer.filter((t) => sameDay(t.fecha, fechaViaje));

        if (!turnosFecha.length && turnosChofer.length > 0) {
          const fallback = toInputDate(turnosChofer[0].fecha);
          if (!cancelado && fallback !== fechaViaje) {
            setFechaViaje(fallback);
          }
          return;
        }

        if (!cancelado) {
          setTurnos(turnosFecha);
          setTurnoId((actual) =>
            turnosFecha.some((t) => String(t.id) === actual)
              ? actual
              : turnosFecha[0]
              ? String(turnosFecha[0].id)
              : ''
          );
        }
      } catch {
        if (!cancelado) {
          setTurnos([]);
          setTurnoId('');
        }
      } finally {
        if (!cancelado) setLoadingTurnos(false);
      }
    })();

    return () => {
      cancelado = true;
    };
  }, [fechaViaje]);

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

  // ── Iniciar escaneo ─────────────────────────
  const startScanning = useCallback(async () => {
    // Limpiar cualquier sesión previa
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
    setScanState('scanning');

    // Esperar un tick para que el div esté en el DOM
    await new Promise((r) => setTimeout(r, 100));

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
        (decodedText) => {
          // QR detectado
          setLastQr(decodedText);
          setScanState('detected');
          html5Qr
            .stop()
            .then(() => html5Qr.clear())
            .catch(() => {});
          scannerRef.current = null;
        },
        () => {
          // No se detectó QR en este frame, ignorar
        }
      );
    } catch (err) {
      console.error('Error al iniciar cámara:', err);
      setScanState('idle');
    }
  }, []);

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
          <h1 className={styles.title}>Escanear QR de boleto</h1>
          <span className={isOnline ? styles.netBadgeOnline : styles.netBadgeOffline}>
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </header>

        {/* ── Selector de turno ──────────── */}
        <section className={styles.turnoSection}>
          <label className={styles.label}>
            Fecha de viaje
            <input
              className={styles.select}
              type="date"
              value={fechaViaje}
              onChange={(e) => setFechaViaje(e.target.value)}
              disabled={loadingTurnos || scanState === 'scanning'}
            />
          </label>

          <label className={styles.label} style={{ marginTop: '0.75rem' }}>
            Turno activo
            <select
              className={styles.select}
              value={turnoId}
              onChange={(e) => setTurnoId(e.target.value)}
              disabled={loadingTurnos || !turnos.length || scanState === 'scanning'}
            >
              {loadingTurnos && <option>Cargando turnos...</option>}
              {!loadingTurnos && !turnos.length && <option>Sin turnos disponibles</option>}
              {turnos.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.ruta.origen} → {t.ruta.destino} — {t.horaInicio} — Bus {t.bus.placa}
                </option>
              ))}
            </select>
          </label>
        </section>

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

          {scanState === 'detected' && lastQr && (
            <div className={styles.qrDetected}>
              <span style={{ fontSize: '3rem' }}>✅</span>
              <p>QR detectado correctamente</p>
              <code>{lastQr}</code>
            </div>
          )}
        </div>

        {/* ── Botones de acción ──────────── */}
        {scanState === 'idle' && (
          <button
            className={styles.btnScan}
            onClick={startScanning}
            disabled={!selectedTurno}
          >
            {selectedTurno ? '📷 Activar cámara y escanear' : 'Selecciona un turno primero'}
          </button>
        )}

        {scanState === 'scanning' && (
          <button className={styles.btnScan} onClick={stopScanning}>
            ⏹ Detener cámara
          </button>
        )}

        {scanState === 'detected' && (
          <button className={styles.btnScan} onClick={startScanning}>
            🔄 Escanear otro QR
          </button>
        )}

        {/* ── Info ───────────────────────── */}
        <div className={styles.infoBox}>
          💡 La cámara se activa directamente desde el navegador, no se necesita una app externa.
          Apunta la cámara hacia el código QR del boleto del pasajero.
        </div>
      </div>
    </main>
  );
}
