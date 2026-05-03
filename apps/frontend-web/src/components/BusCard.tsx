'use client';

import React from 'react';
import styles from './BusCard.module.css';

export interface Bus {
  placa: string;
  marca: string;
  capacidad?: number;
}

interface BusCardProps {
  bus: Bus;
  horaInicio: string;
  horaFin?: string;
}

export default function BusCard({ bus, horaInicio, horaFin }: BusCardProps) {
  // Función de ayuda para formatear la hora de manera robusta
  const formatTime = (time?: string) => {
    if (!time) return '';
    // Si ya viene en formato HH:mm (ej: 08:30), lo devolvemos tal cual
    if (/^\d{2}:\d{2}$/.test(time)) return time;
    
    try {
      // Intentamos parsear por si viene un formato Date/ISO completo
      const date = new Date(time);
      if (isNaN(date.getTime())) return time; // Fallback si no es fecha válida
      return date.toLocaleTimeString('es-EC', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
      });
    } catch {
      return time;
    }
  };

  return (
    <div className={styles.busCard}>
      <div className={styles.busMainInfo}>
        <div className={styles.busHeader}>
          <span className={styles.busIcon}>🚌</span>
          <div>
            <h4 className={styles.placa}>{bus.placa}</h4>
            <p className={styles.marca}>{bus.marca}</p>
          </div>
        </div>
        {bus.capacidad && (
          <div className={styles.capacidadBadge}>
            {bus.capacidad} asientos
          </div>
        )}
      </div>
      <div className={styles.busDetails}>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Horario:</span>
          <span className={styles.detailValue}>
            {formatTime(horaInicio)} {horaFin ? ` - ${formatTime(horaFin)}` : ''}
          </span>
        </div>
      </div>
    </div>
  );
}