'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './efectivo.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const BUS_API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://localhost:3002';

interface Boleto {
  id: number;
  cedulaPasajero: string;
  nombrePasajero: string;
  tipoTarifa: string;
  estado: string;
  uuidQr: string;
}

interface Compra {
  id: number;
  estado: string;
  total: string;
  cantidad: number;
  fechaViaje: string;
  turnoId: number | null;
  frecuenciaId: number;
  boletos: Boleto[];
}

function PagoEfectivoContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const compraId = Number(searchParams?.get('compraId'));

  const [compra, setCompra] = useState<Compra | null>(null);
  const [rutaBase, setRutaBase] = useState<{ origen: string; destino: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [tipoPrecio, setTipoPrecio] = useState<'BASE' | 'OTRO'>('BASE');
  const [nuevoTotal, setNuevoTotal] = useState<string>('');

  // Dropdown & custom input states for Origen / Destino
  const [origenOption, setOrigenOption] = useState<string>('');
  const [origenText, setOrigenText] = useState<string>('');
  const [destinoOption, setDestinoOption] = useState<string>('');
  const [destinoText, setDestinoText] = useState<string>('');

  const [montoRecibido, setMontoRecibido] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!Number.isFinite(compraId)) {
      setError('ID de compra inválido');
      setLoading(false);
      return;
    }

    let cancelado = false;
    (async () => {
      try {
        const res = await fetch(`${TICKET_API_URL}/compras/${compraId}`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data: Compra = await res.json();
        if (!cancelado) {
          setCompra(data);
          setNuevoTotal(data.total);

          // Fetch route base info to populate Origen and Destino defaults
          try {
            const rRes = await fetch(`${BUS_API_URL}/rutas`);
            if (rRes.ok) {
              const rutas = await rRes.ok ? await rRes.json() : [];
              const match = rutas.find((r: any) => r.id === data.frecuenciaId);
              if (match) {
                setRutaBase(match);
                setOrigenOption(match.origen);
                setOrigenText(match.origen);
                setDestinoOption(match.destino);
                setDestinoText(match.destino);
              } else {
                setOrigenOption('Quito');
                setOrigenText('Quito');
                setDestinoOption('Guayaquil');
                setDestinoText('Guayaquil');
              }
            } else {
              setOrigenOption('Quito');
              setOrigenText('Quito');
              setDestinoOption('Guayaquil');
              setDestinoText('Guayaquil');
            }
          } catch (e) {
            setOrigenOption('Quito');
            setOrigenText('Quito');
            setDestinoOption('Guayaquil');
            setDestinoText('Guayaquil');
          }
        }
      } catch (err) {
        if (!cancelado) {
          setError(err instanceof Error ? err.message : 'No se pudo cargar la compra');
        }
      } finally {
        if (!cancelado) setLoading(false);
      }
    })();

    return () => {
      cancelado = true;
    };
  }, [compraId]);

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.card}>
          <p className={styles.subtitle}>Cargando información de la compra...</p>
        </div>
      </main>
    );
  }

  if (error || !compra) {
    return (
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Compra no encontrada</h1>
          <p className={styles.errorBox}>{error ?? 'La compra especificada no existe.'}</p>
          <button className={styles.secondaryBtn} onClick={() => router.push('/')}>
            Volver al inicio
          </button>
        </div>
      </main>
    );
  }

  const totalBase = Number(compra.total);
  const precioFinal = tipoPrecio === 'BASE' ? totalBase : (Number(nuevoTotal) || 0);
  const cambio = Math.max(0, (Number(montoRecibido) || 0) - precioFinal);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const numMontoRecibido = Number(montoRecibido);
    if (!montoRecibido || Number.isNaN(numMontoRecibido) || numMontoRecibido <= 0) {
      setError('Por favor ingresa un monto recibido válido.');
      return;
    }

    if (numMontoRecibido < precioFinal) {
      setError(`El monto recibido ($${numMontoRecibido.toFixed(2)}) es menor que el precio final ($${precioFinal.toFixed(2)}).`);
      return;
    }

    const finalOrigen = origenOption === 'OTRO' ? origenText : origenOption;
    const finalDestino = destinoOption === 'OTRO' ? destinoText : destinoOption;

    if (!finalOrigen.trim() || !finalDestino.trim()) {
      setError('Por favor define un origen y un destino válidos.');
      return;
    }

    setSubmitting(true);

    try {
      const body = {
        compraId,
        montoRecibido: numMontoRecibido,
        nuevoTotal: tipoPrecio === 'OTRO' ? precioFinal : undefined,
        origen: finalOrigen.trim(),
        destino: finalDestino.trim(),
      };

      const res = await fetch(`${TICKET_API_URL}/pagos/efectivo/custom`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? 'Error al procesar el pago.');
      }

      // Redirigir a la pantalla de éxito
      router.push(`/checkout/success?compraId=${compra.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al registrar el pago en efectivo.');
      setSubmitting(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>Pago en Efectivo</h1>
        <p className={styles.subtitle}>Orden #{compra.id} · Registro de Venta Personalizada</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.errorBox}>{error}</div>}

          {/* Pasajeros de la orden */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Pasajeros a bordo</h2>
            <div style={{ marginBottom: 12 }}>
              {compra.boletos.map((b) => (
                <div key={b.id} style={{ fontSize: '14px', color: '#4b5563', marginBottom: 4 }}>
                  <strong>{b.nombrePasajero}</strong> · {b.cedulaPasajero} <span style={{ fontSize: '12px', background: '#e5e7eb', padding: '2px 6px', borderRadius: '4px' }}>{b.tipoTarifa}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Combo Box para la tarifa */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Tarifa del Asiento</label>
            <select
              className={styles.select}
              value={tipoPrecio}
              onChange={(e) => {
                const val = e.target.value as 'BASE' | 'OTRO';
                setTipoPrecio(val);
                if (val === 'BASE') {
                  setNuevoTotal(compra.total);
                }
              }}
            >
              <option value="BASE">Precio Base (${totalBase.toFixed(2)})</option>
              <option value="OTRO">Otro (Precio Personalizado)</option>
            </select>
          </div>

          {/* Precio Manual */}
          {tipoPrecio === 'OTRO' && (
            <div className={styles.formGroup}>
              <label className={styles.label}>Nuevo precio del boleto ($)</label>
              <input
                type="number"
                step="0.01"
                min="0.01"
                className={styles.input}
                value={nuevoTotal}
                onChange={(e) => setNuevoTotal(e.target.value)}
                required
                placeholder="0.00"
              />
            </div>
          )}

          {/* Origen y Destino Combo Boxes */}
          <div className={styles.inputRow}>
            <div className={styles.formGroup} style={{ flex: 1 }}>
              <label className={styles.label}>Origen (Recogida)</label>
              <select
                className={styles.select}
                value={origenOption}
                onChange={(e) => {
                  setOrigenOption(e.target.value);
                  if (e.target.value !== 'OTRO') {
                    setOrigenText(e.target.value);
                  }
                }}
              >
                <option value={rutaBase?.origen || "Quito"}>
                  Ruta Base: {rutaBase?.origen || "Quito"}
                </option>
                <option value="OTRO">Otro (Personalizado)</option>
              </select>
              {origenOption === 'OTRO' && (
                <input
                  type="text"
                  className={styles.input}
                  style={{ marginTop: 8 }}
                  value={origenText}
                  onChange={(e) => setOrigenText(e.target.value)}
                  placeholder="Ej. Terminal Quitumbe"
                  required
                />
              )}
            </div>

            <div className={styles.formGroup} style={{ flex: 1 }}>
              <label className={styles.label}>Destino (Llegada)</label>
              <select
                className={styles.select}
                value={destinoOption}
                onChange={(e) => {
                  setDestinoOption(e.target.value);
                  if (e.target.value !== 'OTRO') {
                    setDestinoText(e.target.value);
                  }
                }}
              >
                <option value={rutaBase?.destino || "Guayaquil"}>
                  Ruta Base: {rutaBase?.destino || "Guayaquil"}
                </option>
                <option value="OTRO">Otro (Personalizado)</option>
              </select>
              {destinoOption === 'OTRO' && (
                <input
                  type="text"
                  className={styles.input}
                  style={{ marginTop: 8 }}
                  value={destinoText}
                  onChange={(e) => setDestinoText(e.target.value)}
                  placeholder="Ej. Terminal Guayaquil"
                  required
                />
              )}
            </div>
          </div>

          {/* Monto Recibido */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Monto Recibido ($)</label>
            <input
              type="number"
              step="0.01"
              min="0.01"
              className={styles.input}
              value={montoRecibido}
              onChange={(e) => setMontoRecibido(e.target.value)}
              required
              placeholder="0.00"
            />
          </div>

          {/* Total a Pagar final */}
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Precio final</span>
            <span className={styles.totalAmount}>${precioFinal.toFixed(2)}</span>
          </div>

          {/* Cambio a entregar */}
          <div className={styles.changeRow}>
            <span className={styles.changeLabel}>Cambio a entregar</span>
            <span className={styles.changeAmount}>${cambio.toFixed(2)}</span>
          </div>

          {/* Botones de acción */}
          <button type="submit" className={styles.primaryBtn} disabled={submitting}>
            {submitting ? 'Procesando venta...' : 'Confirmar Pago en Efectivo'}
          </button>

          <button
            type="button"
            className={styles.secondaryBtn}
            onClick={() => router.push(`/checkout/${compra.id}`)}
            disabled={submitting}
          >
            Cancelar
          </button>
        </form>
      </div>
    </main>
  );
}

export default function PagoEfectivoPage() {
  return (
    <Suspense fallback={
      <main className={styles.main}>
        <div className={styles.card}>
          <p className={styles.subtitle}>Cargando flujo de efectivo...</p>
        </div>
      </main>
    }>
      <PagoEfectivoContent />
    </Suspense>
  );
}
