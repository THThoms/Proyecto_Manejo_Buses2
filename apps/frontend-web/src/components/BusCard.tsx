'use client';

import React from 'react';
import styles from './BusCard.module.css';

interface BusCardProps {
  bus: {
    placa: string;
    marca: string;
    capacidad?: number;
  };
  horaInicio: string;
  horaFin?: string;
}

export default function BusCard({ bus, horaInicio, horaFin }: BusCardProps) {
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
            {horaInicio} {horaFin ? ` - ${horaFin}` : ''}
          </span>
        </div>
      </div>
    </div>
  );
}