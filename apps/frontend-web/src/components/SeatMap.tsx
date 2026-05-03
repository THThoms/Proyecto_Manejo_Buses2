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

const SEAT_ICONS: Record<string, string> = {
  DISPONIBLE: '🟢',
  RESERVADO: '🟡',
  OCUPADO: '🔴',
  VACIO: '⚫',
};

const SEAT_LABELS: Record<string, string> = {
  NORMAL: 'Asiento',
};

export default function SeatMap({ turnoId, asientos, onSeatSelect, isLoading = false }: SeatMapProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (asiento: Asiento) => {
    if (asiento.estado !== 'DISPONIBLE') return;
    setSelectedId(asiento.asientoId);
    onSeatSelect(asiento);
  };

  // Agrupar asientos en filas de 4, pero si la última tiene 5, los agrupamos juntos
  const rows: Asiento[][] = [];
  let i = 0;
  while (i < asientos.length) {
    const remaining = asientos.length - i;
    // Si quedan exactamente 5 asientos al final (común en buses), van en una sola fila sin pasillo
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

  return (
    <div className={styles.seatMapContainer}>
      {/* Cabecera del bus */}
      <div className={styles.busHeader}>
        <div className={styles.busFront}>
          <span className={styles.busIcon}>🚌</span>
          <span className={styles.busFrontLabel}>FRENTE DEL BUS</span>
        </div>
        <div className={styles.availability}>
          <span className={styles.availCount}>{disponibles}</span>
          <span className={styles.availLabel}>de {total} disponibles</span>
        </div>
      </div>

      {/* Leyenda */}
      <div className={styles.legend}>
        {Object.entries(SEAT_ICONS).map(([estado, icon]) => (
          <div key={estado} className={styles.legendItem}>
            <span className={styles.legendIcon}>{icon}</span>
            <span className={styles.legendLabel}>{estado.charAt(0) + estado.slice(1).toLowerCase()}</span>
          </div>
        ))}
      </div>

      {/* Mapa de asientos (grilla del bus) */}
      <div className={styles.busBody}>
        {/* Etiqueta de conductor */}
        <div className={styles.driverRow}>
          <div className={styles.driverSeat}>🧑‍✈️ Chofer</div>
          <div className={styles.aisle} />
        </div>

        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className={styles.seatRow}>
            {row.length === 5 ? (
              // Fila final de 5 asientos (sin pasillo)
              <div className={styles.seatGroup5}>
                {row.map((asiento) => (
                  <button
                    key={asiento.asientoId}
                    id={`seat-${asiento.numero}`}
                    className={`${styles.seat} ${styles[`seat_${asiento.estado}`]} ${
                      selectedId === asiento.asientoId ? styles.seat_SELECTED : ''
                    }`}
                    onClick={() => handleClick(asiento)}
                    disabled={asiento.estado !== 'DISPONIBLE'}
                    title={`Asiento ${asiento.numero} - ${asiento.estado}`}
                    aria-label={`Asiento ${asiento.numero}, ${asiento.estado}`}
                  >
                    <span className={styles.seatNumber}>{asiento.numero}</span>
                  </button>
                ))}
              </div>
            ) : (
              // Filas normales con pasillo
              <>
                <div className={styles.seatGroup}>
                  {row.slice(0, 2).map((asiento) => (
                    <button
                      key={asiento.asientoId}
                      id={`seat-${asiento.numero}`}
                      className={`${styles.seat} ${styles[`seat_${asiento.estado}`]} ${
                        selectedId === asiento.asientoId ? styles.seat_SELECTED : ''
                      }`}
                      onClick={() => handleClick(asiento)}
                      disabled={asiento.estado !== 'DISPONIBLE'}
                      title={`Asiento ${asiento.numero} - ${asiento.estado}`}
                      aria-label={`Asiento ${asiento.numero}, ${asiento.estado}`}
                    >
                      <span className={styles.seatNumber}>{asiento.numero}</span>
                    </button>
                  ))}
                </div>

                <div className={styles.aisle}>
                  <span className={styles.rowNumber}>{rowIdx + 1}</span>
                </div>

                <div className={styles.seatGroup}>
                  {row.slice(2, 4).map((asiento) => (
                    <button
                      key={asiento.asientoId}
                      id={`seat-${asiento.numero}`}
                      className={`${styles.seat} ${styles[`seat_${asiento.estado}`]} ${
                        selectedId === asiento.asientoId ? styles.seat_SELECTED : ''
                      }`}
                      onClick={() => handleClick(asiento)}
                      disabled={asiento.estado !== 'DISPONIBLE'}
                      title={`Asiento ${asiento.numero} - ${asiento.estado}`}
                      aria-label={`Asiento ${asiento.numero}, ${asiento.estado}`}
                    >
                      <span className={styles.seatNumber}>{asiento.numero}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Selección actual */}
      {selectedId && (
        <div className={styles.selectionBanner}>
          ✅ Asiento <strong>#{asientos.find((a) => a.asientoId === selectedId)?.numero}</strong> seleccionado
        </div>
      )}
    </div>
  );
}
