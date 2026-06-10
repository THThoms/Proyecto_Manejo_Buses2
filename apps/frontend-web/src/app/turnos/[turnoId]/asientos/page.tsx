'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import SeatMap, { Asiento } from '@/components/SeatMap';
import { getUser, authHeaders } from '@/lib/auth';
import styles from './asientos.module.css';

const BUS_API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://localhost:3002';
const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';

// Mock mientras auth-api siga siendo stub.
const USUARIO_ID_DEMO = 1;

type TipoTarifa = 'NORMAL' | 'TERCERA_EDAD' | 'DISCAPACIDAD' | 'MENOR';

export default function AsientosPage() {
  const params = useParams<{ turnoId: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();

  const turnoId = Number(params?.turnoId);
  const [rutaIdState, setRutaIdState] = useState<number | null>(null);
  const [origenState, setOrigenState] = useState<string>('');
  const [destinoState, setDestinoState] = useState<string>('');
  const [fechaState, setFechaState] = useState<string>('');
  const [horaInicioState, setHoraInicioState] = useState<string>('');

  const [asientos, setAsientos] = useState<Asiento[]>([]);
  const [loadingAsientos, setLoadingAsientos] = useState(true);
  const [errorAsientos, setErrorAsientos] = useState<string | null>(null);
  const [asientoSeleccionado, setAsientoSeleccionado] = useState<Asiento | null>(null);

  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [tipoTarifa, setTipoTarifa] = useState<TipoTarifa>('NORMAL');
  const [submitting, setSubmitting] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState<string | null>(null);

  const getPrecioTarifa = (tarifa: TipoTarifa): number => {
    switch (tarifa) {
      case 'NORMAL':
        return 15.50;
      case 'TERCERA_EDAD':
        return 9.00;
      case 'DISCAPACIDAD':
        return 10.00;
      case 'MENOR':
        return 7.50;
      default:
        return 15.50;
    }
  };

  useEffect(() => {
    const rId = Number(searchParams?.get('rutaId'));
    const orig = searchParams?.get('origen') ?? '';
    const dest = searchParams?.get('destino') ?? '';
    const fec = searchParams?.get('fecha') ?? '';
    const hora = searchParams?.get('horaInicio') ?? '';

    if (rId) setRutaIdState(rId);
    if (orig) setOrigenState(orig);
    if (dest) setDestinoState(dest);
    if (fec) setFechaState(fec);
    if (hora) setHoraInicioState(hora);
  }, [searchParams]);

  useEffect(() => {
    if (!Number.isFinite(turnoId)) {
      setErrorAsientos('turnoId inválido');
      setLoadingAsientos(false);
      return;
    }
    let cancelado = false;
    (async () => {
      try {
        setLoadingAsientos(true);

        const res = await fetch(`${BUS_API_URL}/turnos/${turnoId}/asientos`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        if (!cancelado) setAsientos(data.asientos ?? []);

        // Si faltan parámetros clave de la ruta (ingreso directo por URL), los consultamos al backend
        const rId = Number(searchParams?.get('rutaId'));
        if (!rId || isNaN(rId)) {
          const resTurno = await fetch(`${BUS_API_URL}/turnos/${turnoId}`);
          if (resTurno.ok) {
            const dataTurno = await resTurno.json();
            if (!cancelado) {
              setRutaIdState(dataTurno.ruta?.id || null);
              setOrigenState(dataTurno.ruta?.origen || '');
              setDestinoState(dataTurno.ruta?.destino || '');
              setFechaState(dataTurno.fecha ? dataTurno.fecha.split('T')[0] : '');
              setHoraInicioState(dataTurno.horaInicio || '');
            }
          }
        }
      } catch (err) {
        if (!cancelado) {
          setErrorAsientos(err instanceof Error ? err.message : 'Error al cargar asientos');
        }
      } finally {
        if (!cancelado) setLoadingAsientos(false);
      }
    })();
    return () => {
      cancelado = true;
    };
  }, [turnoId, searchParams]);

  const handleSeatSelect = (asiento: Asiento) => {
    setAsientoSeleccionado(asiento);
  };

  const handleContinuar = async () => {
    setErrorSubmit(null);
    if (!asientoSeleccionado) {
      setErrorSubmit('Selecciona un asiento.');
      return;
    }
    if (cedula.trim().length < 6) {
      setErrorSubmit('La cédula debe tener al menos 6 dígitos.');
      return;
    }
    if (nombre.trim().length < 2) {
      setErrorSubmit('Ingresa el nombre del pasajero.');
      return;
    }
    if (!rutaIdState) {
      setErrorSubmit('No se pudo identificar la ruta para el viaje.');
      return;
    }

    setSubmitting(true);
    try {
      const user = getUser();
      if (!user) {
        throw new Error('Debes iniciar sesión para realizar la compra.');
      }

      const res = await fetch(`${TICKET_API_URL}/compras`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...authHeaders(), // Añadimos el JWT por seguridad
        },
        body: JSON.stringify({
          usuarioId: user.id,
          frecuenciaId: rutaIdState,
          turnoId,
          fechaViaje: fechaState || new Date().toISOString().split('T')[0],
          total: getPrecioTarifa(tipoTarifa),
          canal: 'WEB',
          origen: origenState,
          destino: destinoState,
          asientos: [
            {
              asientoTurnoId: asientoSeleccionado.asientoTurnoId,
              asientoId: asientoSeleccionado.asientoId,
              cedulaPasajero: cedula.trim(),
              nombrePasajero: nombre.trim(),
              tipoTarifa,
            },
          ],
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? `Error ${res.status}`);
      }
      router.push(`/checkout/${data.id}`);
    } catch (err) {
      setErrorSubmit(err instanceof Error ? err.message : 'No se pudo crear la compra');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <button className={styles.backBtn} onClick={() => router.back()}>← Volver</button>
          <h1 className={styles.title}>Selecciona tu asiento</h1>
          <p className={styles.subtitle}>
            {origenState} → {destinoState} · {fechaState} {horaInicioState && `· ${horaInicioState}`}
          </p>
        </header>

        <section className={styles.mapSection}>
          {errorAsientos ? (
            <div className={styles.errorBox}>{errorAsientos}</div>
          ) : (
            <SeatMap
              turnoId={turnoId}
              asientos={asientos}
              onSeatSelect={handleSeatSelect}
              isLoading={loadingAsientos}
            />
          )}
        </section>

        <section className={styles.formSection}>
          <h2 className={styles.formTitle}>Datos del pasajero</h2>

          <label className={styles.label}>
            Cédula
            <input
              type="text"
              className={styles.input}
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              placeholder="1804567890"
              disabled={submitting}
            />
          </label>

          <label className={styles.label}>
            Nombre completo
            <input
              type="text"
              className={styles.input}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Juan Pérez"
              disabled={submitting}
            />
          </label>

          <label className={styles.label}>
            Tipo de tarifa
            <select
              className={styles.input}
              value={tipoTarifa}
              onChange={(e) => setTipoTarifa(e.target.value as TipoTarifa)}
              disabled={submitting}
            >
              <option value="NORMAL">Normal</option>
              <option value="TERCERA_EDAD">Tercera edad</option>
              <option value="DISCAPACIDAD">Discapacidad</option>
              <option value="MENOR">Menor</option>
            </select>
          </label>

          <div className={styles.summary}>
            <div>
              <span className={styles.summaryLabel}>Asiento</span>
              <span className={styles.summaryValue}>
                {asientoSeleccionado ? `#${asientoSeleccionado.numero}` : '—'}
              </span>
            </div>
            <div>
              <span className={styles.summaryLabel}>Total</span>
              <span className={styles.summaryValue}>
                {new Intl.NumberFormat('es-EC', { style: 'currency', currency: 'USD' }).format(getPrecioTarifa(tipoTarifa))}
              </span>
            </div>
          </div>

          {errorSubmit && <div className={styles.errorBox}>{errorSubmit}</div>}

          <button
            className={styles.continueBtn}
            onClick={handleContinuar}
            disabled={submitting || !asientoSeleccionado}
          >
            {submitting ? 'Procesando…' : 'Continuar al pago'}
          </button>
        </section>
      </div>
    </main>
  );
}
