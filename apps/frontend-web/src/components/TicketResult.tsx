'use client';

import styles from './TicketResult.module.css';

interface TicketResultProps {
  ticketData: {
    message: string;
    compraId: number;
    boleto: {
      id: number;
      uuidQr: string;
      nombrePasajero: string;
      cedulaPasajero: string;
      qrImage: string;
      expiraEn: string;
    };
    cambio: number;
  };
  onDone: () => void;
}

export default function TicketResult({ ticketData, onDone }: TicketResultProps) {
  const { boleto, cambio } = ticketData;

  return (
    <div className={styles.container}>
      <div className={styles.successBadge}>✅ ¡Venta Exitosa!</div>
      
      <div className={styles.ticketCard}>
        <div className={styles.header}>
          <h3>Boleto Digital</h3>
          <span className={styles.id}>#{boleto.id}</span>
        </div>

        <div className={styles.qrSection}>
          <img src={boleto.qrImage} alt="QR Code" className={styles.qrImage} />
          <p className={styles.uuid}>{boleto.uuidQr}</p>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <label>Pasajero</label>
            <p>{boleto.nombrePasajero}</p>
          </div>
          <div className={styles.infoItem}>
            <label>Cédula</label>
            <p>{boleto.cedulaPasajero}</p>
          </div>
          <div className={styles.infoItem}>
            <label>Expira</label>
            <p>{new Date(boleto.expiraEn).toLocaleString()}</p>
          </div>
        </div>

        {cambio > 0 && (
          <div className={styles.footer}>
            <div className={styles.cambioInfo}>
              <span>Cambio entregado:</span>
              <strong>${cambio.toFixed(2)}</strong>
            </div>
          </div>
        )}
      </div>

      <button onClick={onDone} className={styles.doneBtn}>
        Finalizar y Nueva Búsqueda
      </button>
    </div>
  );
}
