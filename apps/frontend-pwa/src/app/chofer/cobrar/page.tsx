'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import SeatTripBoard, { SeatTripBoardAsiento } from './SeatTripBoard';
import styles from './cobrar.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const BUS_API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://localhost:3002';
const WEB_URL = process.env.NEXT_PUBLIC_FRONTEND_WEB_URL || 'http://localhost:3010';
const CHOFER_ID = '1';
const USUARIO_DEMO_ID = 1;
const PENDIENTES_KEY = 'frontend_pwa_cobros_bus_pendientes';
const HISTORIAL_KEY = 'frontend_pwa_cobros_bus_historial';
const HOY = new Date().toISOString().slice(0, 10);

type TipoTarifa = 'NORMAL' | 'TERCERA_EDAD' | 'DISCAPACIDAD' | 'MENOR';
type EstadoPendiente = 'PENDIENTE' | 'SINCRO_ERROR';
type FeedbackType = 'ok' | 'info' | 'error';

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

interface AsientoDisponible extends SeatTripBoardAsiento {
  fila?: string | null;
  tipo?: string;
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
  isIdempotent?: boolean;
  boletos: BoletoEmitido[];
}

interface FeedbackState {
  type: FeedbackType;
  text: string;
}

interface VentaPendiente {
  offlineId: string;
  compraId: number | null;
  turnoId: number;
  fechaViaje: string;
  turnoLabel: string;
  busLabel: string;
  asientoTurnoId: number;
  asientoId: number;
  asientoNumero: number;
  pasajeroCedula: string;
  pasajeroNombre: string;
  tipoTarifa: TipoTarifa;
  total: number;
  montoRecibido: number;
  status: EstadoPendiente;
  createdAt: string;
  lastError?: string;
  origen?: string;
  destino?: string;
}

interface HistorialCobroBus {
  offlineId: string;
  compraId: number;
  turnoId: number;
  turnoLabel: string;
  busLabel: string;
  asiento: string;
  pasajero: string;
  total: number;
  montoRecibido: number;
  cambio: number;
  fechaRegistro: string;
  uuidQr: string;
  estado: 'ENVIADO' | 'IDEMPOTENTE';
}

interface EnvioVentaResult {
  ok: boolean;
  compraId?: number;
  resultado?: CobroResultado;
  error?: string;
  reason?: 'network' | 'http';
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
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? HOY : parsed.toISOString().slice(0, 10);
}

function sameDay(isoDate: string, inputDate: string) {
  return toInputDate(isoDate) === inputDate;
}

function buildTurnoLabel(turno: Turno) {
  return `${turno.ruta.origen} -> ${turno.ruta.destino} - ${turno.horaInicio} - Bus ${turno.bus.placa}`;
}

function buildBusLabel(turno: Turno) {
  return `${turno.bus.placa} - ${turno.bus.marca}`;
}

function readPendientes(): VentaPendiente[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(PENDIENTES_KEY);
    return raw ? (JSON.parse(raw) as VentaPendiente[]) : [];
  } catch {
    return [];
  }
}

function savePendientes(value: VentaPendiente[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(PENDIENTES_KEY, JSON.stringify(value));
}

function readHistorial(): HistorialCobroBus[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(HISTORIAL_KEY);
    return raw ? (JSON.parse(raw) as HistorialCobroBus[]) : [];
  } catch {
    return [];
  }
}

function saveHistorial(value: HistorialCobroBus[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(HISTORIAL_KEY, JSON.stringify(value));
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

function buildOfflineId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `offline-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}

export default function ChoferCobrarPage() {
  const [isOnline, setIsOnline] = useState(true);
  const [fechaViaje, setFechaViaje] = useState(HOY);
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [turnoId, setTurnoId] = useState('');
  const [asientos, setAsientos] = useState<AsientoDisponible[]>([]);
  const [selectedAsientoTurnoId, setSelectedAsientoTurnoId] = useState('');

  const [cedulaPasajero, setCedulaPasajero] = useState('');
  const [nombrePasajero, setNombrePasajero] = useState('');
  const [tipoTarifa, setTipoTarifa] = useState<TipoTarifa>('NORMAL');
  const [total, setTotal] = useState('');
  const [montoRecibido, setMontoRecibido] = useState('');

  const [loadingTurnos, setLoadingTurnos] = useState(true);
  const [loadingAsientos, setLoadingAsientos] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [sincronizando, setSincronizando] = useState(false);

  const [errorTurnos, setErrorTurnos] = useState<string | null>(null);
  const [errorAsientos, setErrorAsientos] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);

  const [pendientes, setPendientes] = useState<VentaPendiente[]>([]);
  const [historialLocal, setHistorialLocal] = useState<HistorialCobroBus[]>([]);
  const [ultimoCobro, setUltimoCobro] = useState<HistorialCobroBus | null>(null);

  // US17: GPS & Paradas
  const [gpsActive, setGpsActive] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);
  const [proximaParada, setProximaParada] = useState<{ id: number; nombre: string; orden: number } | null>(null);
  const [distanciaMetros, setDistanciaMetros] = useState<number | null>(null);
  const [dentroDelRadio, setDentroDelRadio] = useState(false);
  const [pasajerosDescenso, setPasajerosDescenso] = useState<{ nombre: string; cedula: string; asientoNumero: number | null }[]>([]);
  const [loadingDescensos, setLoadingDescensos] = useState(false);
  const [alertedStops, setAlertedStops] = useState<number[]>([]);

  const selectedTurno = useMemo(
    () => turnos.find((turno) => String(turno.id) === turnoId) ?? null,
    [turnoId, turnos]
  );

  // US17: Transmitir ubicación GPS y consultar descensos
  useEffect(() => {
    if (!selectedTurno || !isOnline) {
      setGpsActive(false);
      setProximaParada(null);
      setDistanciaMetros(null);
      setDentroDelRadio(false);
      setPasajerosDescenso([]);
      return;
    }

    setGpsActive(true);
    setGpsError(null);

    let watchId: number | null = null;
    let intervalId: any = null;
    let ultimaLat = -1.269062; // Latitud demo UTA Ambato
    let ultimaLng = -78.625185; // Longitud demo UTA Ambato

    // Si el navegador soporta geolocalización, la usamos en tiempo real
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          ultimaLat = position.coords.latitude;
          ultimaLng = position.coords.longitude;
          setGpsError(null);
        },
        (err) => {
          console.warn('Error de geolocalización PWA, usando coordenadas simuladas:', err.message);
          setGpsError('Usando simulación de GPS (permiso denegado o error de señal).');
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      setGpsError('Geolocalización no soportada por el navegador. Usando coordenadas simuladas.');
    }

    // Intervalo de transmisión cada 10 segundos
    const transmitirGps = async () => {
      try {
        const res = await fetch(`${BUS_API_URL}/turnos/${selectedTurno.id}/gps`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lat: ultimaLat, lng: ultimaLng }),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        setProximaParada(data.proximaParada);
        setDistanciaMetros(data.distanciaMetros);
        setDentroDelRadio(data.dentroDelRadio);

        // Si entramos al radio de alerta y no se ha notificado esta parada antes, alertamos
        if (data.dentroDelRadio && data.proximaParada) {
          const stopId = data.proximaParada.id;
          setAlertedStops((prev) => {
            if (!prev.includes(stopId)) {
              // Disparar alerta visual única
              alert(`🚨 ALERTA: Aproximándose a la parada "${data.proximaParada.nombre}". Pasajeros listos para bajar.`);
              return [...prev, stopId];
            }
            return prev;
          });
        }

        // Consultar pasajeros a bajar en la próxima parada
        if (data.proximaParada) {
          setLoadingDescensos(true);
          try {
            const descensosRes = await fetch(
              `${TICKET_API_URL}/boletos/descenso?turnoId=${selectedTurno.id}&destino=${encodeURIComponent(
                data.proximaParada.nombre
              )}`
            );
            if (descensosRes.ok) {
              const descensosData = await descensosRes.json();
              setPasajerosDescenso(descensosData);
            }
          } catch (err) {
            console.error('Error al cargar pasajeros de descenso:', err);
          } finally {
            setLoadingDescensos(false);
          }
        }
      } catch (err) {
        console.error('Error al transmitir GPS:', err);
      }
    };

    // Ejecutar transmisión inicial y configurar intervalo
    void transmitirGps();
    intervalId = setInterval(transmitirGps, 10000);

    return () => {
      if (watchId !== null) navigator.geolocation.clearWatch(watchId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [selectedTurno, isOnline]);

  const selectedAsiento = useMemo(
    () =>
      asientos.find((asiento) => String(asiento.asientoTurnoId) === selectedAsientoTurnoId) ?? null,
    [asientos, selectedAsientoTurnoId]
  );

  const disponibles = useMemo(
    () => asientos.filter((asiento) => asiento.estado === 'DISPONIBLE').length,
    [asientos]
  );

  const reservados = useMemo(
    () => asientos.filter((asiento) => asiento.estado === 'RESERVADO').length,
    [asientos]
  );

  const ocupados = useMemo(
    () => asientos.filter((asiento) => asiento.estado === 'OCUPADO').length,
    [asientos]
  );

  const cambioPreview = useMemo(() => {
    const totalNum = Number(total);
    const montoNum = Number(montoRecibido);
    if (!Number.isFinite(totalNum) || !Number.isFinite(montoNum)) return null;
    return Math.round((montoNum - totalNum) * 100) / 100;
  }, [montoRecibido, total]);

  const historialDelTurno = useMemo(() => {
    if (!selectedTurno) return historialLocal.slice(0, 8);
    return historialLocal.filter((item) => item.turnoId === selectedTurno.id).slice(0, 8);
  }, [historialLocal, selectedTurno]);

  const pendientesDelTurno = useMemo(() => {
    if (!selectedTurno) return pendientes;
    return pendientes.filter((item) => item.turnoId === selectedTurno.id);
  }, [pendientes, selectedTurno]);

  function persistPendientes(next: VentaPendiente[]) {
    savePendientes(next);
    setPendientes(next);
  }

  function pushHistorial(entry: HistorialCobroBus) {
    setHistorialLocal((actual) => {
      const filtered = actual.filter((item) => item.offlineId !== entry.offlineId);
      const next = [entry, ...filtered].slice(0, 16);
      saveHistorial(next);
      return next;
    });
    setUltimoCobro(entry);
  }

  function buildHistorialItem(
    venta: VentaPendiente,
    resultado: CobroResultado
  ): HistorialCobroBus {
    return {
      offlineId: venta.offlineId,
      compraId: resultado.compraId,
      turnoId: venta.turnoId,
      turnoLabel: venta.turnoLabel,
      busLabel: venta.busLabel,
      asiento: `#${venta.asientoNumero}`,
      pasajero: venta.pasajeroNombre,
      total: resultado.total,
      montoRecibido: resultado.montoRecibido,
      cambio: resultado.cambio,
      fechaRegistro: new Date().toISOString(),
      uuidQr: resultado.boletos[0]?.uuidQr ?? '-',
      estado: resultado.isIdempotent ? 'IDEMPOTENTE' : 'ENVIADO',
    };
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsOnline(window.navigator.onLine);
    const historial = readHistorial();
    setHistorialLocal(historial);
    setUltimoCobro(historial[0] ?? null);
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
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        const turnosChofer = data
          .filter((turno) => {
            const choferTurno = turno.chofer?.id ?? turno.choferId;
            return choferTurno == null || choferTurno === Number(CHOFER_ID);
          })
          .sort((a, b) => `${a.fecha}-${a.horaInicio}`.localeCompare(`${b.fecha}-${b.horaInicio}`));

        const turnosFecha = turnosChofer.filter((turno) => sameDay(turno.fecha, fechaViaje));

        if (!turnosFecha.length && turnosChofer.length > 0) {
          const fallbackDate = toInputDate(turnosChofer[0].fecha);
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
          setTurnos([]);
          setTurnoId('');
          setErrorTurnos(err instanceof Error ? err.message : 'No se pudieron cargar los turnos.');
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

      const data = (await res.json()) as { asientos?: AsientoDisponible[] };
      const lista = data.asientos ?? [];
      setAsientos(lista);
      setSelectedAsientoTurnoId((actual) =>
        lista.some(
          (asiento) =>
            String(asiento.asientoTurnoId) === actual && asiento.estado === 'DISPONIBLE'
        )
          ? actual
          : ''
      );
    } catch (err) {
      setAsientos([]);
      setSelectedAsientoTurnoId('');
      setErrorAsientos(
        err instanceof Error ? err.message : 'No se pudieron cargar los asientos del turno.'
      );
    } finally {
      setLoadingAsientos(false);
    }
  }

  useEffect(() => {
    if (!selectedTurno) {
      setAsientos([]);
      setSelectedAsientoTurnoId('');
      setTotal('');
      return;
    }

    setTotal(String(selectedTurno.ruta.precioPasaje));
    void cargarAsientos(selectedTurno);
  }, [selectedTurno]);

  async function enviarVenta(venta: VentaPendiente): Promise<EnvioVentaResult> {
    let compraId = venta.compraId ?? null;

    try {
      if (!compraId) {
        const compraRes = await fetch(`${TICKET_API_URL}/compras`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-user-role': 'CHOFER',
            'x-user-id': CHOFER_ID,
          },
          body: JSON.stringify({
            usuarioId: USUARIO_DEMO_ID,
            frecuenciaId: venta.turnoId,
            turnoId: venta.turnoId,
            fechaViaje: venta.fechaViaje,
            total: venta.total,
            canal: 'OFICIAL',
            origen: venta.origen,
            destino: venta.destino,
            asientos: [
              {
                asientoTurnoId: venta.asientoTurnoId,
                asientoId: venta.asientoId,
                cedulaPasajero: venta.pasajeroCedula,
                nombrePasajero: venta.pasajeroNombre,
                tipoTarifa: venta.tipoTarifa,
              },
            ],
          }),
        });

        const compraData = await readResponse(compraRes);
        if (!compraRes.ok) {
          return {
            ok: false,
            compraId,
            error: String(
              compraData.error ?? `No se pudo crear la compra (HTTP ${compraRes.status}).`
            ),
            reason: 'http',
          };
        }

        compraId = Number(compraData.id);
        if (!Number.isInteger(compraId) || compraId <= 0) {
          return {
            ok: false,
            error: 'La compra se creo, pero no devolvio un id valido.',
            reason: 'http',
          };
        }
      }
    } catch (err) {
      return {
        ok: false,
        compraId,
        error: err instanceof Error ? err.message : 'Error de red al crear la compra.',
        reason: 'network',
      };
    }

    try {
      const cobroRes = await fetch(`${TICKET_API_URL}/pagos/efectivo/bus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'CHOFER',
          'x-user-id': CHOFER_ID,
        },
        body: JSON.stringify({
          compraId,
          montoRecibido: venta.montoRecibido,
          offlineId: venta.offlineId,
        }),
      });

      const cobroData = await readResponse(cobroRes);
      if (!cobroRes.ok) {
        return {
          ok: false,
          compraId,
          error: String(
            cobroData.error ?? `No se pudo registrar el cobro (HTTP ${cobroRes.status}).`
          ),
          reason: 'http',
        };
      }

      return {
        ok: true,
        compraId,
        resultado: cobroData as unknown as CobroResultado,
      };
    } catch (err) {
      return {
        ok: false,
        compraId,
        error: err instanceof Error ? err.message : 'Error de red al cobrar.',
        reason: 'network',
      };
    }
  }

  async function sincronizarPendientes() {
    if (sincronizando || typeof window === 'undefined' || !window.navigator.onLine) return;

    setSincronizando(true);
    try {
      let cola = readPendientes();

      for (let index = 0; index < cola.length; index += 1) {
        const venta = cola[index];
        const envio = await enviarVenta(venta);

        if (envio.ok && envio.resultado) {
          pushHistorial(buildHistorialItem(venta, envio.resultado));
          cola = cola.filter((item) => item.offlineId !== venta.offlineId);
          persistPendientes(cola);
          if (selectedTurno && venta.turnoId === selectedTurno.id) {
            await cargarAsientos(selectedTurno);
          }
          index -= 1;
          continue;
        }

        cola[index] = {
          ...venta,
          compraId: envio.compraId ?? venta.compraId,
          status: 'SINCRO_ERROR',
          lastError: envio.error ?? 'No se pudo sincronizar la venta.',
        };
        persistPendientes(cola);
      }

      if (cola.length === 0) {
        setFeedback({ type: 'ok', text: 'Todas las ventas pendientes quedaron sincronizadas.' });
      }
    } finally {
      setSincronizando(false);
    }
  }

  function limpiarFormulario() {
    setSelectedAsientoTurnoId('');
    setCedulaPasajero('');
    setNombrePasajero('');
    setMontoRecibido('');
  }

  async function procesarCobro(e: FormEvent) {
    e.preventDefault();
    setFeedback(null);

    if (!selectedTurno) {
      setFeedback({ type: 'error', text: 'Selecciona un turno.' });
      return;
    }

    if (!selectedAsiento || selectedAsiento.estado !== 'DISPONIBLE') {
      setFeedback({ type: 'error', text: 'Selecciona un asiento disponible.' });
      return;
    }

    if (!cedulaPasajero.trim() || !nombrePasajero.trim()) {
      setFeedback({ type: 'error', text: 'Completa los datos del pasajero.' });
      return;
    }

    const totalNum = Number(total);
    const montoNum = Number(montoRecibido);
    if (!Number.isFinite(totalNum) || totalNum <= 0) {
      setFeedback({ type: 'error', text: 'Total invalido.' });
      return;
    }
    if (!Number.isFinite(montoNum) || montoNum < totalNum) {
      setFeedback({ type: 'error', text: 'Monto recibido insuficiente.' });
      return;
    }

    const venta: VentaPendiente = {
      offlineId: buildOfflineId(),
      compraId: null,
      turnoId: selectedTurno.id,
      fechaViaje,
      turnoLabel: buildTurnoLabel(selectedTurno),
      busLabel: buildBusLabel(selectedTurno),
      asientoTurnoId: selectedAsiento.asientoTurnoId,
      asientoId: selectedAsiento.asientoId,
      asientoNumero: selectedAsiento.numero,
      pasajeroCedula: cedulaPasajero.trim(),
      pasajeroNombre: nombrePasajero.trim(),
      tipoTarifa,
      total: totalNum,
      montoRecibido: montoNum,
      status: 'PENDIENTE',
      createdAt: new Date().toISOString(),
      origen: selectedTurno.ruta.origen,
      destino: selectedTurno.ruta.destino,
    };

    setEnviando(true);
    try {
      if (!isOnline) {
        persistPendientes([venta, ...readPendientes()]);
        limpiarFormulario();
        setFeedback({
          type: 'info',
          text: 'Sin conexion: la venta se guardo en cola para sincronizarla despues.',
        });
        return;
      }

      const envio = await enviarVenta(venta);
      if (envio.ok && envio.resultado) {
        pushHistorial(buildHistorialItem(venta, envio.resultado));
        limpiarFormulario();
        setFeedback({
          type: 'ok',
          text: envio.resultado.isIdempotent
            ? 'La venta ya estaba sincronizada. Se mostro el ultimo estado valido.'
            : 'Cobro registrado y ticket emitido.',
        });
        await cargarAsientos(selectedTurno);
        return;
      }

      if (envio.reason === 'network') {
        persistPendientes([
          {
            ...venta,
            compraId: envio.compraId ?? venta.compraId,
            status: 'SINCRO_ERROR',
            lastError: envio.error,
          },
          ...readPendientes().filter((item) => item.offlineId !== venta.offlineId),
        ]);
        limpiarFormulario();
        setFeedback({
          type: 'info',
          text: 'La red fallo durante el envio. La venta quedo en pendientes para sincronizar.',
        });
        return;
      }

      setFeedback({
        type: 'error',
        text: envio.error ?? 'No se pudo completar la venta en este momento.',
      });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>Panel de ruta</span>
            <h1 className={styles.title}>Chofer - efectivo en bus e historial del viaje</h1>
            
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', marginBottom: '1rem' }}>
              <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.2)' }}>💵 Cobrar Pasaje</span>
              <a href="/chofer/escanear" className={styles.inlineLink} style={{ padding: '0.5rem 1rem', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '8px', color: '#fff', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center' }}>📷 Validar QR US16</a>
            </div>

            <p className={styles.subtitle}>
              Este panel muestra solo tus turnos, el estado del bus y el historial del viaje
              seleccionado. La venta se crea desde aqui y, si la red cae, queda en cola.
            </p>
          </div>
          <div className={styles.heroStats}>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Turnos visibles</span>
              <strong className={styles.statValue}>{turnos.length}</strong>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Disponibles</span>
              <strong className={styles.statValue}>{selectedTurno ? disponibles : '-'}</strong>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Reservados</span>
              <strong className={styles.statValue}>{selectedTurno ? reservados : '-'}</strong>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Pendientes offline</span>
              <strong className={styles.statValue}>{pendientesDelTurno.length}</strong>
            </article>
          </div>
        </header>

        <div className={styles.dashboard}>
          <section className={styles.mainColumn}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <h2 className={styles.panelTitle}>Panel del bus y cobro en efectivo</h2>
                  <p className={styles.panelText}>
                    Selecciona tu viaje, el asiento y los datos del pasajero. El ticket se genera
                    desde este mismo flujo.
                  </p>
                </div>
                <span className={isOnline ? styles.netBadgeOnline : styles.netBadgeOffline}>
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>

              <div className={styles.noticeBox}>
                Solo se muestran viajes asociados al chofer actual. El historial lateral se filtra
                por el turno que tengas seleccionado.
              </div>

              {/* US17: Transmisión GPS y Pasajeros por Bajar */}
              {selectedTurno && (
                <section className={styles.gpsContainer}>
                  <div className={styles.gpsHeader}>
                    <h3 className={styles.gpsTitle}>🛰️ Monitoreo GPS y Próxima Parada</h3>
                    <span className={gpsActive ? styles.gpsActiveBadge : styles.gpsInactiveBadge}>
                      {gpsActive ? 'Transmitiendo' : 'Inactivo'}
                    </span>
                  </div>

                  {gpsError && <p className={styles.gpsError}>{gpsError}</p>}

                  {proximaParada ? (
                    <div className={styles.gpsInfo}>
                      <div className={styles.stopInfo}>
                        <div>
                          <strong>Próxima parada:</strong> {proximaParada.nombre} (Orden #{proximaParada.orden})
                        </div>
                        <div>
                          <strong>Distancia aproximada:</strong> {distanciaMetros != null ? `${distanciaMetros} metros` : 'Calculando...'}
                        </div>
                      </div>

                      {/* Alerta de parada cercana */}
                      {dentroDelRadio && (
                        <div className={styles.gpsAlert}>
                          ⚠️ <strong>¡Cerca de la parada!</strong> Prepárese para el descenso de pasajeros.
                        </div>
                      )}

                      {/* Lista de pasajeros a bajar */}
                      <div className={styles.passengersListSection}>
                        <h4 className={styles.passengersListTitle}>👥 Pasajeros a bajar en esta parada:</h4>
                        {loadingDescensos ? (
                          <p className={styles.loadingText}>Cargando pasajeros...</p>
                        ) : pasajerosDescenso.length === 0 ? (
                          <p className={styles.emptyText}>No hay pasajeros registrados para bajar aquí.</p>
                        ) : (
                          <ul className={styles.passengersList}>
                            {pasajerosDescenso.map((pasajero, index) => (
                              <li key={index} className={styles.passengerItem}>
                                <span className={styles.passengerSeat}>Asiento #{pasajero.asientoNumero ?? 'S/N'}</span>
                                <span className={styles.passengerName}>{pasajero.nombre}</span>
                                <span className={styles.passengerId}>{pasajero.cedula}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className={styles.emptyText}>Inicie el viaje para activar el monitoreo.</p>
                  )}
                </section>
              )}

              {ultimoCobro && (
                <section className={styles.successPanel}>
                  <div className={styles.successHeader}>
                    <div>
                      <span className={styles.successEyebrow}>Ultimo ticket</span>
                      <h3 className={styles.successTitle}>Compra #{ultimoCobro.compraId}</h3>
                    </div>
                    <a
                      className={styles.inlineLink}
                      href={`${WEB_URL}/boleto/${ultimoCobro.compraId}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver boleto
                    </a>
                  </div>
                  <div className={styles.successGrid}>
                    <div className={styles.metricCard}>
                      <span className={styles.metricLabel}>Pasajero</span>
                      <strong>{ultimoCobro.pasajero}</strong>
                    </div>
                    <div className={styles.metricCard}>
                      <span className={styles.metricLabel}>Cambio</span>
                      <strong>{formatMoney(ultimoCobro.cambio)}</strong>
                    </div>
                    <div className={styles.metricCard}>
                      <span className={styles.metricLabel}>Estado</span>
                      <strong>{ultimoCobro.estado}</strong>
                    </div>
                  </div>
                  <code className={styles.ticketCode}>{ultimoCobro.uuidQr}</code>
                </section>
              )}

              <form className={styles.formStack} onSubmit={procesarCobro}>
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
                        disabled={loadingTurnos || enviando || sincronizando}
                      />
                    </label>
                    <label className={styles.label}>
                      Turno del chofer
                      <select
                        className={styles.input}
                        value={turnoId}
                        onChange={(e) => setTurnoId(e.target.value)}
                        disabled={loadingTurnos || !turnos.length || enviando || sincronizando}
                      >
                        {turnos.length === 0 && <option value="">No hay turnos disponibles</option>}
                        {turnos.map((turno) => (
                          <option key={turno.id} value={turno.id}>
                            #{turno.id} - {buildTurnoLabel(turno)}
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
                        <span>{selectedTurno.bus.marca}</span>
                      </article>
                    </div>
                  )}
                </section>

                <section className={styles.block}>
                  <div className={styles.blockHeader}>
                    <h3 className={styles.blockTitle}>Grafico del bus</h3>
                    <span className={styles.blockNote}>
                      {selectedTurno
                        ? `${disponibles} disponibles de ${asientos.length}`
                        : 'Selecciona un turno'}
                    </span>
                  </div>

                  {selectedTurno ? (
                    <SeatTripBoard
                      turnoId={selectedTurno.id}
                      busLabel={buildBusLabel(selectedTurno)}
                      asientos={asientos}
                      selectedAsientoTurnoId={selectedAsientoTurnoId}
                      onSeatSelect={setSelectedAsientoTurnoId}
                    />
                  ) : (
                    <div className={styles.emptyBox}>Selecciona un turno para cargar el bus.</div>
                  )}

                  {loadingAsientos && <div className={styles.helperBox}>Actualizando asientos...</div>}
                  {selectedAsiento && (
                    <div className={styles.helperBox}>
                      Asiento seleccionado: <strong>#{selectedAsiento.numero}</strong>
                    </div>
                  )}
                  {errorAsientos && <div className={styles.errorBox}>{errorAsientos}</div>}
                </section>

                <section className={styles.block}>
                  <h3 className={styles.blockTitle}>Pasajero</h3>
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
                        placeholder="Luis Morales"
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

                {feedback && (
                  <div
                    className={
                      feedback.type === 'error'
                        ? styles.errorBox
                        : feedback.type === 'ok'
                        ? `${styles.messageBox} ${styles.messageOk}`
                        : `${styles.messageBox} ${styles.messageInfo}`
                    }
                  >
                    {feedback.text}
                  </div>
                )}

                <div className={styles.formActions}>
                  <button className={styles.primaryButton} type="submit" disabled={enviando || !selectedTurno}>
                    {enviando
                      ? 'Procesando venta...'
                      : isOnline
                      ? 'Cobrar y emitir ticket'
                      : 'Guardar venta offline'}
                  </button>
                </div>
              </form>
            </div>
          </section>

          <aside className={styles.sidebar}>
            <section className={styles.sidePanel}>
              <div className={styles.sideHeader}>
                <div>
                  <h2 className={styles.sideTitle}>Historial del viaje</h2>
                  <p className={styles.sideText}>
                    Muestra solo ventas del turno seleccionado en este dispositivo.
                  </p>
                </div>
              </div>

              {!selectedTurno ? (
                <div className={styles.emptyBox}>Selecciona un viaje para ver su historial.</div>
              ) : historialDelTurno.length === 0 ? (
                <div className={styles.emptyBox}>Todavia no hay cobros guardados para este viaje.</div>
              ) : (
                <div className={styles.previewList}>
                  {historialDelTurno.map((item) => (
                    <article key={item.offlineId} className={styles.previewCard}>
                      <div className={styles.previewTop}>
                        <strong>Compra #{item.compraId}</strong>
                        <span
                          className={`${styles.statusTag} ${
                            item.estado === 'IDEMPOTENTE' ? styles.statusSync : styles.statusOk
                          }`}
                        >
                          {item.estado}
                        </span>
                      </div>
                      <div className={styles.previewMeta}>
                        {item.pasajero} - {item.asiento}
                      </div>
                      <div className={styles.previewDate}>
                        {formatFecha(item.fechaRegistro)} - {formatMoney(item.total)}
                      </div>
                      <a
                        className={styles.inlineLink}
                        href={`${WEB_URL}/boleto/${item.compraId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver boleto
                      </a>
                    </article>
                  ))}
                </div>
              )}
            </section>

            <section className={styles.sidePanel}>
              <div className={styles.sideHeader}>
                <div>
                  <h2 className={styles.sideTitle}>Pendientes offline</h2>
                  <p className={styles.sideText}>
                    La cola se sincroniza al volver la conexion o desde el boton manual.
                  </p>
                </div>
                <button
                  className={styles.secondaryButton}
                  type="button"
                  onClick={() => void sincronizarPendientes()}
                  disabled={!isOnline || sincronizando || pendientes.length === 0}
                >
                  {sincronizando ? 'Sincronizando...' : 'Sincronizar'}
                </button>
              </div>

              {!selectedTurno ? (
                <div className={styles.emptyBox}>Selecciona un viaje para filtrar los pendientes.</div>
              ) : pendientesDelTurno.length === 0 ? (
                <div className={styles.emptyBox}>No hay ventas pendientes para este viaje.</div>
              ) : (
                <div className={styles.previewList}>
                  {pendientesDelTurno.map((item) => (
                    <article key={item.offlineId} className={styles.previewCard}>
                      <div className={styles.previewTop}>
                        <strong>{item.pasajeroNombre}</strong>
                        <span className={`${styles.statusTag} ${styles.statusSync}`}>{item.status}</span>
                      </div>
                      <div className={styles.previewMeta}>
                        Asiento #{item.asientoNumero} - {formatMoney(item.total)}
                      </div>
                      <div className={styles.previewDate}>{formatFecha(item.createdAt)}</div>
                      {item.lastError && <div className={styles.issueText}>{item.lastError}</div>}
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
