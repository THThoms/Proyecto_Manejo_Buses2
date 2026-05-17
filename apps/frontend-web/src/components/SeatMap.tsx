'use client';

import React, { useState } from 'react';
import styles from './SeatMap.module.css';

export interface Asiento {
  asientoTurnoId: number;
  asientoId: number;
  numero: number;
  fila?: string;
  estado: 'DISPONIBLE' | 'RESERVADO' | 'OCUPADO' | 'VACIO';
}

interface SeatMapProps {
  turnoId: number;
  asientos: Asiento[];
  onSeatSelect: (asiento: Asiento) => void;
  isLoading?: boolean;
}

const ESTADO_LABEL: Record<Asiento['estado'], string> = {
  DISPONIBLE: 'Disponible',
  RESERVADO: 'Reservado',
  OCUPADO: 'Ocupado',
  VACIO: 'No disponible',
};

export default function SeatMap({ turnoId, asientos, onSeatSelect, isLoading = false }: SeatMapProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (asiento: Asiento) => {
    if (asiento.estado !== 'DISPONIBLE') return;
    setSelectedId(asiento.asientoId);
    onSeatSelect(asiento);
  };

  // Mejora US13 (Sprint): solo refactor visual. Misma lógica de filas que antes.
  const rows: Asiento[][] = [];
  let i = 0;
  while (i < asientos.length) {
    const remaining = asientos.length - i;
    if (remaining === 5) {
      rows.push(asientos.slice(i, i + 5));
      break;
    } else {
      rows.push(asientos.slice(i, i + 4));
      i += 4;
    }
  }

  const disponibles = asientos.filter((a) => a.estado === 'DISPONIBLE').length;
  const total = asientos.length;

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <p>Cargando mapa de asientos...</p>
      </div>
    );
  }

  const renderSeat = (asiento: Asiento) => (
    <button
      key={asiento.asientoId}
      id={`seat-${asiento.numero}`}
      className={`${styles.seat} ${styles[`seat_${asiento.estado}`]} ${
        selectedId === asiento.asientoId ? styles.seat_SELECTED : ''
      }`}
      onClick={() => handleClick(asiento)}
      disabled={asiento.estado !== 'DISPONIBLE'}
      title={`Asiento ${asiento.numero} - ${ESTADO_LABEL[asiento.estado]}`}
      aria-label={`Asiento ${asiento.numero}, ${ESTADO_LABEL[asiento.estado]}`}
    >
      <span className={styles.seatBack} aria-hidden="true" />
      <span className={styles.seatNumber}>{asiento.numero}</span>
    </button>
  );

  return (
    <div className={styles.seatMapContainer}>
      {/* Cabecera con contador y placa */}
      <div className={styles.busHeader}>
        <div className={styles.busPlate}>
          <span className={styles.busPlateLabel}>Bus · Turno</span>
          <span className={styles.busPlateValue}>#{turnoId}</span>
        </div>
        <div className={styles.availability}>
          <span className={styles.availCount}>{disponibles}</span>
          <span className={styles.availLabel}>de {total} disponibles</span>
        </div>
      </div>

      {/* Leyenda con badges (sin emojis) */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={`${styles.legendBadge} ${styles.legendBadgeDisponible}`} />
          <span className={styles.legendLabel}>Disponible</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendBadge} ${styles.legendBadgeReservado}`} />
          <span className={styles.legendLabel}>Reservado</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendBadge} ${styles.legendBadgeOcupado}`} />
          <span className={styles.legendLabel}>Ocupado</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendBadge} ${styles.legendBadgeSeleccionado}`} />
          <span className={styles.legendLabel}>Seleccionado</span>
        </div>
      </div>

      {/* Carrocería del bus: frente curvo + cuerpo + asientos */}
      <div className={styles.busShell}>
        <div className={styles.windshield} aria-hidden="true">
          <span className={styles.windshieldLabel}>Frente del bus</span>
        </div>

        <div className={styles.driverDock}>
          <div className={styles.driverArea}>
            <div className={styles.steeringWheel} aria-hidden="true">
              <span className={styles.steeringWheelHub} />
            </div>
            <span className={styles.driverLabel}>Conductor</span>
          </div>
          <div className={styles.driverGap} />
          <div className={styles.busDoor} aria-label="Puerta de acceso">
            <span className={styles.doorStripes} aria-hidden="true" />
            <span className={styles.doorLabel}>Puerta</span>
          </div>
        </div>

        <div className={styles.busBody}>
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className={styles.seatRow}>
              {row.length === 5 ? (
                <div className={styles.seatGroup5}>
                  {row.map((asiento) => renderSeat(asiento))}
                </div>
              ) : (
                <>
                  <div className={styles.seatGroup}>{row.slice(0, 2).map(renderSeat)}</div>

                  <div className={styles.aisle} aria-hidden="true">
                    <span className={styles.rowNumber}>{rowIdx + 1}</span>
                  </div>

                  <div className={styles.seatGroup}>{row.slice(2, 4).map(renderSeat)}</div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className={styles.busRear} aria-hidden="true">
          <span className={styles.busRearLabel}>Fondo</span>
        </div>
      </div>

      {selectedId && (
        <div className={styles.selectionBanner}>
          Asiento <strong>#{asientos.find((a) => a.asientoId === selectedId)?.numero}</strong>{' '}
          seleccionado
        </div>
      )}
    </div>
  );
}
