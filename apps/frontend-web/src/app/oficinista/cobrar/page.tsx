'use client';

import { useMemo, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './cobrar.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const OFICINISTA_ID = '1';

type TipoTarifa = 'NORMAL' | 'TERCERA_EDAD' | 'DISCAPACIDAD' | 'MENOR';

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

const HOY = new Date().toISOString().slice(0, 10);

export default function CobrarOficinaPage() {
  const router = useRouter();

  const [usuarioId, setUsuarioId] = useState('1');
  const [frecuenciaId, setFrecuenciaId] = useState('');
  const [turnoId, setTurnoId] = useState('');
  const [fechaViaje, setFechaViaje] = useState(HOY);
  const [asientoTurnoId, setAsientoTurnoId] = useState('');
  const [asientoId, setAsientoId] = useState('');
  const [cedulaPasajero, setCedulaPasajero] = useState('');
  const [nombrePasajero, setNombrePasajero] = useState('');
  const [tipoTarifa, setTipoTarifa] = useState<TipoTarifa>('NORMAL');
  const [total, setTotal] = useState('');
  const [montoRecibido, setMontoRecibido] = useState('');

  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resultado, setResultado] = useState<CobroResultado | null>(null);

  const cambioPreview = useMemo(() => {
    const t = Number(total);
    const m = Number(montoRecibido);
    if (!Number.isFinite(t) || !Number.isFinite(m)) return null;
    return Math.round((m - t) * 100) / 100;
  }, [total, montoRecibido]);

  const handleCobrar = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const totalNum = Number(total);
    const montoNum = Number(montoRecibido);
    if (!frecuenciaId || !turnoId || !asientoTurnoId || !asientoId) {
      setError('Completa los datos del viaje y del asiento.');
      return;
    }
    if (!cedulaPasajero || !nombrePasajero) {
      setError('Completa los datos del pasajero.');
      return;
    }
    if (!Number.isFinite(totalNum) || totalNum <= 0) {
      setError('Total inválido.');
      return;
    }
    if (!Number.isFinite(montoNum) || montoNum < totalNum) {
      setError('Monto recibido insuficiente.');
      return;
    }

    setEnviando(true);
    try {
      // 1) Crear la compra en canal OFICINISTA.
      const compraRes = await fetch(`${TICKET_API_URL}/compras`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'OFICINISTA',
          'x-user-id': OFICINISTA_ID,
        },
        body: JSON.stringify({
          usuarioId: Number(usuarioId),
          frecuenciaId: Number(frecuenciaId),
          turnoId: Number(turnoId),
          fechaViaje,
          total: totalNum,
          canal: 'OFICINISTA',
          asientos: [
            {
              asientoTurnoId: Number(asientoTurnoId),
              asientoId: Number(asientoId),
              cedulaPasajero: cedulaPasajero.trim(),
              nombrePasajero: nombrePasajero.trim(),
              tipoTarifa,
            },
          ],
        }),
      });
      const compraData = await compraRes.json().catch(() => ({}));
      if (!compraRes.ok) {
        setError(compraData?.error ?? `No se pudo crear la compra (HTTP ${compraRes.status}).`);
        return;
      }
      const compraId = compraData?.id;
      if (!compraId) {
        setError('La respuesta de /compras no incluyó id.');
        return;
      }

      // 2) Registrar el cobro en efectivo (canal OFICINA).
      const cobroRes = await fetch(`${TICKET_API_URL}/pagos/efectivo/oficina`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'OFICINISTA',
          'x-user-id': OFICINISTA_ID,
        },
        body: JSON.stringify({ compraId, montoRecibido: montoNum }),
      });
      const cobroData = await cobroRes.json().catch(() => ({}));
      if (!cobroRes.ok) {
        setError(cobroData?.error ?? `No se pudo registrar el cobro (HTTP ${cobroRes.status}).`);
        return;
      }

      setResultado(cobroData as CobroResultado);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error de red al cobrar.');
    } finally {
      setEnviando(false);
    }
  };

  const handleNuevoCobro = () => {
    setResultado(null);
    setMontoRecibido('');
    setCedulaPasajero('');
    setNombrePasajero('');
    setAsientoTurnoId('');
    setAsientoId('');
    setTotal('');
  };

  if (resultado) {
    return (
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Cobro registrado</h1>
          <p className={styles.subtitle}>
            Compra #{resultado.compraId} · Canal {resultado.canalVenta} · Turno #
            {resultado.turnoId ?? '—'}
          </p>

          <div className={styles.successBox}>
            <div className={styles.row}>
              <span>Total cobrado</span>
              <span className={styles.total}>${resultado.total.toFixed(2)}</span>
            </div>
            <div className={styles.row}>
              <span>Recibido</span>
              <span>${resultado.montoRecibido.toFixed(2)}</span>
            </div>
            <div className={styles.row}>
              <span>Cambio</span>
              <span className={styles.cambio}>${resultado.cambio.toFixed(2)}</span>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Boleto emitido</h2>
            {resultado.boletos.map((b) => (
              <div key={b.id} className={styles.boletoCard}>
                <div className={styles.boletoRow}>
                  <strong>{b.nombrePasajero}</strong>
                  <span className={styles.tag}>{b.estado}</span>
                </div>
                <div className={styles.boletoRow}>
                  <span>Cédula: {b.cedulaPasajero}</span>
                  <span>{b.tipoTarifa}</span>
                </div>
                <div className={styles.qrBox}>
                  <span className={styles.qrLabel}>Código QR (uuid)</span>
                  <code className={styles.uuidQr}>{b.uuidQr}</code>
                </div>
              </div>
            ))}
          </div>

          <button
            className={styles.primaryBtn}
            onClick={() => window.print()}
          >
            Imprimir comprobante
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={() => router.push(`/boleto/${resultado.compraId}`)}
          >
            Ver detalle del boleto
          </button>
          <button className={styles.secondaryBtn} onClick={handleNuevoCobro}>
            Registrar otro cobro
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cobro en efectivo · Oficina</h1>
        <p className={styles.subtitle}>
          Registra una venta en mostrador. El boleto pasa a VIGENTE de inmediato y el asiento queda
          ocupado.
        </p>

        <form onSubmit={handleCobrar}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Datos del viaje</h2>
            <div className={styles.grid}>
              <label className={styles.label}>
                Frecuencia ID
                <input
                  className={styles.input}
                  inputMode="numeric"
                  value={frecuenciaId}
                  onChange={(e) => setFrecuenciaId(e.target.value)}
                  placeholder="Ej. 3"
                />
              </label>
              <label className={styles.label}>
                Turno ID
                <input
                  className={styles.input}
                  inputMode="numeric"
                  value={turnoId}
                  onChange={(e) => setTurnoId(e.target.value)}
                  placeholder="Ej. 12"
                />
              </label>
              <label className={styles.label}>
                Fecha de viaje
                <input
                  className={styles.input}
                  type="date"
                  value={fechaViaje}
                  onChange={(e) => setFechaViaje(e.target.value)}
                />
              </label>
              <label className={styles.label}>
                Usuario pasajero ID
                <input
                  className={styles.input}
                  inputMode="numeric"
                  value={usuarioId}
                  onChange={(e) => setUsuarioId(e.target.value)}
                  placeholder="Ej. 1"
                />
              </label>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Asiento</h2>
            <div className={styles.grid}>
              <label className={styles.label}>
                Asiento-Turno ID
                <input
                  className={styles.input}
                  inputMode="numeric"
                  value={asientoTurnoId}
                  onChange={(e) => setAsientoTurnoId(e.target.value)}
                  placeholder="Ej. 200"
                />
              </label>
              <label className={styles.label}>
                Asiento ID
                <input
                  className={styles.input}
                  inputMode="numeric"
                  value={asientoId}
                  onChange={(e) => setAsientoId(e.target.value)}
                  placeholder="Ej. 4"
                />
              </label>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Pasajero</h2>
            <div className={styles.grid}>
              <label className={styles.label}>
                Cédula
                <input
                  className={styles.input}
                  value={cedulaPasajero}
                  onChange={(e) => setCedulaPasajero(e.target.value)}
                  placeholder="Ej. 0102030405"
                />
              </label>
              <label className={styles.label}>
                Nombre completo
                <input
                  className={styles.input}
                  value={nombrePasajero}
                  onChange={(e) => setNombrePasajero(e.target.value)}
                  placeholder="Ej. Ana Pérez"
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

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cobro</h2>
            <div className={styles.grid}>
              <label className={styles.label}>
                Total a cobrar (USD)
                <input
                  className={styles.input}
                  inputMode="decimal"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  placeholder="Ej. 5.00"
                />
              </label>
              <label className={styles.label}>
                Monto recibido (USD)
                <input
                  className={styles.input}
                  inputMode="decimal"
                  value={montoRecibido}
                  onChange={(e) => setMontoRecibido(e.target.value)}
                  placeholder="Ej. 10.00"
                />
              </label>
            </div>

            {cambioPreview !== null && (
              <div className={styles.row}>
                <span>Cambio a entregar</span>
                <span
                  className={cambioPreview < 0 ? `${styles.cambio} ${styles.cambioNeg}` : styles.cambio}
                >
                  ${cambioPreview.toFixed(2)}
                </span>
              </div>
            )}
          </section>

          {error && <div className={styles.errorBox}>{error}</div>}

          <button className={styles.primaryBtn} type="submit" disabled={enviando}>
            {enviando ? 'Procesando…' : 'Cobrar y emitir boleto'}
          </button>
        </form>
      </div>
    </main>
  );
}
