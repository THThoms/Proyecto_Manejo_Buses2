'use client';

import styles from './SeatTripBoard.module.css';

export interface SeatTripBoardAsiento {
  asientoTurnoId: number;
  asientoId: number;
  numero: number;
  estado: 'DISPONIBLE' | 'RESERVADO' | 'OCUPADO' | 'VACIO';
}

interface SeatTripBoardProps {
  turnoId: number;
  busLabel: string;
  asientos: SeatTripBoardAsiento[];
  selectedAsientoTurnoId: string;
  onSeatSelect: (asientoTurnoId: string) => void;
}

const ESTADO_LABEL: Record<SeatTripBoardAsiento['estado'], string> = {
  DISPONIBLE: 'Disponible',
  RESERVADO: 'Reservado',
  OCUPADO: 'Ocupado',
  VACIO: 'Fuera',
};

export default function SeatTripBoard({
  turnoId,
  busLabel,
  asientos,
  selectedAsientoTurnoId,
  onSeatSelect,
}: SeatTripBoardProps) {
  const disponibles = asientos.filter((asiento) => asiento.estado === 'DISPONIBLE').length;
  const reservados = asientos.filter((asiento) => asiento.estado === 'RESERVADO').length;
  const ocupados = asientos.filter((asiento) => asiento.estado === 'OCUPADO').length;
  const total = asientos.length;
  const selectedAsiento = asientos.find(
    (asiento) => String(asiento.asientoTurnoId) === selectedAsientoTurnoId
  );

  return (
    <div className={styles.panel}>
      <div className={styles.topRow}>
        <div>
          <h3 className={styles.title}>Estado visual del bus</h3>
          <div className={styles.meta}>
            Turno #{turnoId} · {busLabel}
          </div>
        </div>
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>Total</span>
          <span className={styles.summaryValue}>{total}</span>
        </div>
        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>Disponibles</span>
          <span className={styles.summaryValue}>{disponibles}</span>
        </div>
        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>Reservados</span>
          <span className={styles.summaryValue}>{reservados}</span>
        </div>
        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>Ocupados</span>
          <span className={styles.summaryValue}>{ocupados}</span>
        </div>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.dotDisponible}`} />
          Disponible
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.dotReservado}`} />
          Reservado
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.dotOcupado}`} />
          Ocupado
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.dotSeleccionado}`} />
          Seleccionado
        </div>
      </div>

      <div className={styles.busShell}>
        <div className={styles.front}>Frente del bus</div>
        <div className={styles.grid}>
          {asientos.map((asiento) => {
            const isSelected = String(asiento.asientoTurnoId) === selectedAsientoTurnoId;
            return (
              <button
                key={asiento.asientoTurnoId}
                type="button"
                className={[
                  styles.seat,
                  asiento.estado === 'DISPONIBLE'
                    ? styles.seatDisponible
                    : asiento.estado === 'RESERVADO'
                    ? styles.seatReservado
                    : styles.seatOcupado,
                  isSelected ? styles.seatSelected : '',
                ].join(' ')}
                disabled={asiento.estado !== 'DISPONIBLE'}
                onClick={() => onSeatSelect(String(asiento.asientoTurnoId))}
              >
                <span className={styles.seatNumber}>{asiento.numero}</span>
                <span className={styles.seatState}>{ESTADO_LABEL[asiento.estado]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedAsiento && (
        <div className={styles.selectedBanner}>
          Asiento seleccionado: #{selectedAsiento.numero}
        </div>
      )}
    </div>
  );
}
