'use client';

import React, { useState, useEffect } from 'react';
import SeatMap, { Asiento } from './SeatMap';
import styles from './BusDetail.module.css';

interface Bus {
  placa: string;
  marca: string;
  carroceria?: string;
  modelo?: string;
  anio?: number;
  capacidad?: number;
  color?: string;
  foto?: string;
}

interface TurnoSeleccionado {
  id: number;
  fecha: string;
  horaInicio: string;
  horaFin?: string;
  estado: string;
  bus?: Bus;
  rutaNombre?: string;
  precioPasaje?: number | string;
}

interface BusDetailProps {
  turno: TurnoSeleccionado;
  onSeatConfirmed: (asiento: Asiento, cedula: string) => void;
  onClose: () => void;
}

const API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://127.0.0.1:3002';

export default function BusDetail({ turno, onSeatConfirmed, onClose }: BusDetailProps) {
  const [asientos, setAsientos] = useState<Asiento[]>([]);
  const [loadingAsientos, setLoadingAsientos] = useState(true);
  const [errorAsientos, setErrorAsientos] = useState<string | null>(null);
  const [selectedAsiento, setSelectedAsiento] = useState<Asiento | null>(null);

  // US09: cédula y descuento
  const [cedula, setCedula] = useState('');
  const [tipoDescuento, setTipoDescuento] = useState('NORMAL');
  const [descuentoInfo, setDescuentoInfo] = useState<{ allowed?: boolean; message?: string } | null>(null);
  const [loadingDescuento, setLoadingDescuento] = useState(false);

  // Calcular precio final
  const precioBase = parseFloat(String(turno.precioPasaje || 0));
  const descuentoPct = tipoDescuento === 'TERCERA_EDAD' || tipoDescuento === 'DISCAPACIDAD' ? 0.5 : 0;
  const precioFinal = precioBase * (1 - descuentoPct);

  /** Carga el mapa de asientos del turno desde la API */
  useEffect(() => {
    const fetchAsientos = async () => {
      setLoadingAsientos(true);
      setErrorAsientos(null);
      try {
        const res = await fetch(`${API_URL}/turnos/${turno.id}/asientos`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        setAsientos(data.asientos || []);
      } catch (err) {
        setErrorAsientos('No se pudo cargar el mapa de asientos. ¿El bus-api está corriendo?');
      } finally {
        setLoadingAsientos(false);
      }
    };
    fetchAsientos();
  }, [turno.id]);

  /** US09: Validar descuento por cédula */
  const handleValidarDescuento = async () => {
    if (!cedula || cedula.length < 10) {
      setDescuentoInfo({ allowed: false, message: 'Ingresa una cédula ecuatoriana válida (10 dígitos)' });
      return;
    }
    if (tipoDescuento === 'NORMAL') {
      setDescuentoInfo({ allowed: true, message: 'Tarifa normal aplicada.' });
      return;
    }
    setLoadingDescuento(true);
    setDescuentoInfo(null);
    try {
      const res = await fetch(`${API_URL}/descuentos/validar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cedula, tipoDescuento }),
      });
      const data = await res.json();
      setDescuentoInfo(data);
    } catch {
      setDescuentoInfo({ allowed: false, message: 'Error al consultar el descuento' });
    } finally {
      setLoadingDescuento(false);
    }
  };

  const handleConfirmar = async () => {
    if (!selectedAsiento) return;
    if (!cedula || cedula.length < 10) {
      alert('Ingresa tu cédula antes de confirmar');
      return;
    }
    if (tipoDescuento !== 'NORMAL' && !descuentoInfo?.allowed) {
      alert('Debes validar el descuento antes de confirmar');
      return;
    }

    try {
      const res = await fetch(`${API_URL}/turnos/${turno.id}/asientos/${selectedAsiento.asientoId}/reservar`, {
        method: 'POST',
      });
      
      if (!res.ok) {
        const errData = await res.json();
        alert(errData.error || 'Error al reservar el asiento. Es posible que alguien más ya lo haya reservado.');
        return;
      }
      
      onSeatConfirmed(selectedAsiento, cedula);
    } catch (e) {
      alert('Error de conexión al reservar el asiento');
    }
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Detalle del bus y selección de asiento">
      <div className={styles.panel}>
        {/* Header */}
        <div className={styles.panelHeader}>
          <div className={styles.headerInfo}>
            <h2 className={styles.panelTitle}>
              {turno.rutaNombre || `Turno #${turno.id}`}
            </h2>
            <p className={styles.panelSubtitle}>
              {turno.bus?.marca} · {turno.bus?.placa} · {turno.horaInicio}{turno.horaFin ? ` → ${turno.horaFin}` : ''}
            </p>
          </div>
          <button id="close-bus-detail" className={styles.closeButton} onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        <div className={styles.panelBody}>
          {/* Columna izquierda: Info del bus */}
          <div className={styles.busInfoColumn}>
            {/* Foto del bus */}
            {turno.bus?.foto ? (
              <img src={turno.bus.foto} alt={`Bus ${turno.bus.placa}`} className={styles.busPhoto} />
            ) : (
              <div className={styles.busPhotoPlaceholder}>🚌</div>
            )}

            {/* Ficha US07 */}
            <div className={styles.busCard}>
              <h3 className={styles.cardTitle}>Ficha del Bus</h3>
              <div className={styles.busFields}>
                {[
                  { label: '🚌 Placa', value: turno.bus?.placa },
                  { label: '🏭 Marca', value: turno.bus?.marca },
                  { label: '🔧 Carrocería', value: turno.bus?.carroceria },
                  { label: '📋 Modelo', value: turno.bus?.modelo },
                  { label: '📅 Año', value: turno.bus?.anio },
                  { label: '🎨 Color', value: turno.bus?.color },
                  { label: '💺 Capacidad', value: turno.bus?.capacidad ? `${turno.bus.capacidad} asientos` : undefined },
                ].filter((f) => f.value).map((field) => (
                  <div key={field.label} className={styles.busField}>
                    <span className={styles.fieldLabel}>{field.label}</span>
                    <span className={styles.fieldValue}>{String(field.value)}</span>
                  </div>
                ))}
              </div>

              {/* Precio */}
              <div className={styles.priceBox}>
                <span className={styles.priceLabel}>Precio base</span>
                <span className={styles.priceValue}>
                  {new Intl.NumberFormat('es-EC', { style: 'currency', currency: 'USD' }).format(precioBase)}
                </span>
              </div>
            </div>

            {/* US09: Cédula y descuento */}
            <div className={styles.discountCard}>
              <h3 className={styles.cardTitle}>Tarifa y Descuento</h3>
              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Número de Cédula</label>
                <input
                  id="input-cedula"
                  type="text"
                  className={styles.input}
                  placeholder="1234567890"
                  value={cedula}
                  maxLength={10}
                  onChange={(e) => { setCedula(e.target.value.replace(/\D/g, '')); setDescuentoInfo(null); }}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Tipo de Tarifa</label>
                <select
                  id="select-tarifa"
                  className={styles.input}
                  value={tipoDescuento}
                  onChange={(e) => { setTipoDescuento(e.target.value); setDescuentoInfo(null); }}
                >
                  <option value="NORMAL">Normal</option>
                  <option value="TERCERA_EDAD">Tercera Edad (-50%)</option>
                  <option value="DISCAPACIDAD">Discapacidad (-50%)</option>
                </select>
              </div>

              {tipoDescuento !== 'NORMAL' && (
                <button
                  id="btn-validar-descuento"
                  className={styles.validateButton}
                  onClick={handleValidarDescuento}
                  disabled={loadingDescuento}
                >
                  {loadingDescuento ? '⏳ Validando...' : '✅ Validar Descuento'}
                </button>
              )}

              {descuentoInfo && (
                <div className={`${styles.discountResult} ${descuentoInfo.allowed ? styles.discountOk : styles.discountError}`}>
                  {descuentoInfo.allowed ? '✅' : '❌'} {descuentoInfo.message}
                </div>
              )}

              {/* Precio final */}
              {(tipoDescuento === 'NORMAL' || descuentoInfo?.allowed) && (
                <div className={styles.finalPrice}>
                  <span className={styles.finalPriceLabel}>Precio Final</span>
                  <span className={styles.finalPriceValue}>
                    {new Intl.NumberFormat('es-EC', { style: 'currency', currency: 'USD' }).format(precioFinal)}
                  </span>
                  {descuentoPct > 0 && <span className={styles.savingsBadge}>-{descuentoPct * 100}%</span>}
                </div>
              )}
            </div>
          </div>

          {/* Columna derecha: Mapa de asientos US08 */}
          <div className={styles.seatColumn}>
            <h3 className={styles.cardTitle}>Selecciona tu Asiento</h3>
            <SeatMap
              turnoId={turno.id}
              asientos={asientos}
              onSeatSelect={setSelectedAsiento}
              isLoading={loadingAsientos}
            />
            {errorAsientos && <p className={styles.errorMsg}>{errorAsientos}</p>}
          </div>
        </div>

        {/* Footer: botón confirmar */}
        <div className={styles.panelFooter}>
          <button id="btn-back" className={styles.backButton} onClick={onClose}>← Volver</button>
          <button
            id="btn-confirm-seat"
            className={styles.confirmButton}
            disabled={!selectedAsiento || !cedula || cedula.length < 10 || (tipoDescuento !== 'NORMAL' && !descuentoInfo?.allowed)}
            onClick={handleConfirmar}
          >
            Confirmar Asiento {selectedAsiento ? `#${selectedAsiento.numero}` : ''} →
          </button>
        </div>
      </div>
    </div>
  );
}
