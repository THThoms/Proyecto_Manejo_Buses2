'use client';

import { useState } from 'react';
import { Asiento } from './SeatMap';
import styles from './PaymentForm.module.css';

interface PaymentFormProps {
  reservation: {
    asiento: Asiento;
    cedula: string;
    turno: {
      id: number;
      rutaNombre: string;
      precioPasaje: number | string;
      fecha: string;
      horaInicio: string;
    };
  };
  onSuccess: (ticketData: any) => void;
  onCancel: () => void;
}

export default function PaymentForm({ reservation, onSuccess, onCancel }: PaymentFormProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [montoRecibido, setMontoRecibido] = useState(reservation.turno.precioPasaje.toString());
  const [error, setError] = useState<string | null>(null);

  const TICKET_API = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://127.0.0.1:3003';

  const handleCashPayment = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const response = await fetch(`${TICKET_API}/tickets/compra-efectivo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuarioId: 1, // Simulado
          frecuenciaId: reservation.turno.id,
          fechaViaje: reservation.turno.fecha,
          cedulaPasajero: reservation.cedula,
          nombrePasajero: 'Pasajero Demo', // Podría pedirse en un input
          montoRecibido: parseFloat(montoRecibido),
          vendedorId: 100, // Simulado (Oficinista)
          total: parseFloat(reservation.turno.precioPasaje.toString())
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Error al procesar el pago');
      }

      const ticketData = await response.json();
      onSuccess(ticketData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const cambio = parseFloat(montoRecibido) - parseFloat(reservation.turno.precioPasaje.toString());

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>💳 Finalizar Compra</h2>
      
      <div className={styles.summary}>
        <div className={styles.row}>
          <span>Ruta:</span>
          <strong>{reservation.turno.rutaNombre}</strong>
        </div>
        <div className={styles.row}>
          <span>Asiento:</span>
          <strong>#{reservation.asiento.numero}</strong>
        </div>
        <div className={styles.row}>
          <span>Pasajero (Cédula):</span>
          <strong>{reservation.cedula}</strong>
        </div>
        <div className={styles.priceRow}>
          <span>Total a pagar:</span>
          <span className={styles.price}>${parseFloat(reservation.turno.precioPasaje.toString()).toFixed(2)}</span>
        </div>
      </div>

      <div className={styles.paymentSection}>
        <h3>Pago en Efectivo (US13)</h3>
        <div className={styles.inputGroup}>
          <label>Monto recibido ($):</label>
          <input 
            type="number" 
            step="0.01" 
            value={montoRecibido} 
            onChange={(e) => setMontoRecibido(e.target.value)}
            className={styles.input}
          />
        </div>
        
        {cambio >= 0 && (
          <div className={styles.changeInfo}>
            Cambio a entregar: <strong>${cambio.toFixed(2)}</strong>
          </div>
        )}

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.actions}>
          <button 
            onClick={onCancel} 
            className={styles.cancelBtn}
            disabled={isProcessing}
          >
            Cancelar
          </button>
          <button 
            onClick={handleCashPayment} 
            className={styles.payBtn}
            disabled={isProcessing || cambio < 0}
          >
            {isProcessing ? 'Procesando...' : 'Confirmar Pago y Generar QR'}
          </button>
        </div>
      </div>
    </div>
  );
}
