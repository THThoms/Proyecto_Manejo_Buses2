'use client';

import { useState, useMemo, useEffect } from 'react';
import styles from './SearchForm.module.css';

interface SearchFormProps {
  onSearch?: (formData: SearchFormData) => void;
  onInputChange?: () => void;
  isLoading?: boolean;
}

export interface SearchFormData {
  origen: string;
  destino: string;
  maxPrecio: number | string;
  maxDuracion: number | string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  incluirParadas: boolean;
}

// Datos de rutas predeterminadas con sus precios y horarios
const DATOS_RUTAS = [
  { origen: 'Quito', destino: 'Guayaquil', precio: 15.50, horarios: ['06:00', '08:30', '13:00', '21:00'] },
  { origen: 'Guayaquil', destino: 'Quito', precio: 15.50, horarios: ['07:00', '10:00', '14:30', '22:00'] },
  { origen: 'Quito', destino: 'Ambato', precio: 5.50, horarios: ['05:00', '09:15', '12:00', '18:45'] },
  { origen: 'Ambato', destino: 'Quito', precio: 5.50, horarios: ['06:30', '11:00', '15:30', '19:00'] },
  { origen: 'Guayaquil', destino: 'Cuenca', precio: 12.00, horarios: ['04:00', '08:00', '13:30', '23:00'] },
  { origen: 'Cuenca', destino: 'Guayaquil', precio: 12.00, horarios: ['05:30', '09:00', '16:00', '21:30'] },
  { origen: 'Quito', destino: 'Cuenca', precio: 22.00, horarios: ['06:00', '12:00', '22:00'] },
  { origen: 'Cuenca', destino: 'Quito', precio: 22.00, horarios: ['07:00', '13:00', '23:00'] },
  { origen: 'Guayaquil', destino: 'Ambato', precio: 10.00, horarios: ['08:00', '14:00', '20:00'] },
  { origen: 'Ambato', destino: 'Guayaquil', precio: 10.00, horarios: ['09:00', '15:00', '21:00'] },
  { origen: 'Quito', destino: 'Loja', precio: 28.00, horarios: ['05:00', '18:00'] },
  { origen: 'Loja', destino: 'Quito', precio: 28.00, horarios: ['06:00', '19:00'] },
  { origen: 'Guayaquil', destino: 'Manta', precio: 8.50, horarios: ['07:00', '11:00', '15:00'] },
  { origen: 'Manta', destino: 'Guayaquil', precio: 8.50, horarios: ['08:00', '12:00', '16:00'] },
];

export default function SearchForm({ onSearch, onInputChange, isLoading = false }: SearchFormProps) {
  const [formData, setFormData] = useState<SearchFormData>({
    origen: 'Quito',
    destino: 'Guayaquil',
    maxPrecio: '',
    maxDuracion: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
    incluirParadas: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showScheduleSelection, setShowScheduleSelection] = useState(false);

  // Lógica para obtener opciones predeterminadas
  const listaOrigenes = useMemo(() => Array.from(new Set(DATOS_RUTAS.map(r => r.origen))), []);
  
  const listaDestinos = useMemo(() => {
    return DATOS_RUTAS.filter(r => r.origen === formData.origen).map(r => r.destino);
  }, [formData.origen]);

  const rutaSeleccionada = useMemo(() => {
    return DATOS_RUTAS.find(r => r.origen === formData.origen && r.destino === formData.destino);
  }, [formData.origen, formData.destino]);

  // Actualizar precio automáticamente cuando cambia la ruta
  useEffect(() => {
    if (rutaSeleccionada) {
      setFormData(prev => ({
        ...prev,
        maxPrecio: rutaSeleccionada.precio
      }));
    }
  }, [rutaSeleccionada]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.origen.trim()) {
      newErrors.origen = 'El origen es requerido';
    }

    if (!formData.destino.trim()) {
      newErrors.destino = 'El destino es requerido';
    }

    if (formData.origen.trim() === formData.destino.trim()) {
      newErrors.destino = 'El destino debe ser diferente al origen';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    // Si se cambia el origen o destino después de haber buscado, ocultar horarios para forzar nueva validación
    if (name === 'origen' || name === 'destino') {
      setShowScheduleSelection(false);
      onInputChange?.();
    }

    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };

      // Lógica de ayuda: si cambia el origen, asegurar que el destino actual sea válido para ese origen
      if (name === 'origen') {
        const destinosValidos = DATOS_RUTAS.filter(r => r.origen === value).map(r => r.destino);
        if (destinosValidos.length > 0 && !destinosValidos.includes(updatedData.destino)) {
          updatedData.destino = destinosValidos[0];
        }
      }

      return updatedData;
    });

    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Si es la primera vez que aplasta, mostramos los horarios disponibles para elegir
    if (!showScheduleSelection) {
      setShowScheduleSelection(true);
      return;
    }

    onSearch?.(formData);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h2 className={styles.title}>Busca tu Ruta</h2>
        <p className={styles.subtitle}>
          Encuentra la ruta perfecta 
        </p>
      </div>

      <div className={styles.formContent}>
        <div className={styles.gridTwoColumns}>
          {/* Campo Origen */}
          <div className={styles.formGroup}>
            <label htmlFor="origen" className={styles.label}>
              Origen 
            </label>
            <select
              id="origen"
              name="origen"
              value={formData.origen}
              onChange={handleChange}
              className={`${styles.input} ${errors.origen ? styles.inputError : ''}`}
              disabled={isLoading}
            >
              {listaOrigenes.map(ciudad => (
                <option key={ciudad} value={ciudad}>
                  {ciudad}
                </option>
              ))}
            </select>
            {errors.origen && (
              <span className={styles.errorMessage}>{errors.origen}</span>
            )}
          </div>

          {/* Campo Destino */}
          <div className={styles.formGroup}>
            <label htmlFor="destino" className={styles.label}>
              Destino 
            </label>
            <select
              id="destino"
              name="destino"
              value={formData.destino}
              onChange={handleChange}
              className={`${styles.input} ${errors.destino ? styles.inputError : ''}`}
              disabled={isLoading}
            >
              {listaDestinos.map(ciudad => (
                <option key={ciudad} value={ciudad}>
                  {ciudad}
                </option>
              ))}
            </select>
            {errors.destino && (
              <span className={styles.errorMessage}>{errors.destino}</span>
            )}
          </div>
        </div>

        <div className={styles.gridTwoColumns}>
          {/* Precio Predeterminado (Lectura) */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Precio del Pasaje ($USD)
            </label>
            <input
              type="text"
              value={formData.maxPrecio ? `$${formData.maxPrecio}` : '--'}
              className={styles.input}
              readOnly
              disabled
            />
          </div>
        </div>

        {showScheduleSelection && (
          <div className={styles.gridTwoColumns} style={{ animation: 'fadeIn 0.3s ease-in' }}>
          {/* Campo Fecha */}
          <div className={styles.formGroup}>
            <label htmlFor="fecha" className={styles.label}>
               Fecha de Salida
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              className={`${styles.input}`}
              disabled={isLoading}
            />
          </div>

          {/* Campo Rango Horario */}
          <div className={styles.formGroup}>
            <label htmlFor="horaInicio" className={styles.label}>Horarios Disponibles</label>
            <select
              id="horaInicio"
              name="horaInicio"
              value={formData.horaInicio}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading || !rutaSeleccionada}
            >
              <option value="">Seleccione un horario disponible...</option>
              {rutaSeleccionada?.horarios.map(h => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>
        </div>
        )}

        {/* Checkbox Paradas Intermedias */}
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="incluirParadas"
              checked={formData.incluirParadas}
              onChange={handleChange}
              disabled={isLoading}
              className={styles.checkbox}
            />
            <span> Rutas con paradas intermedias</span>
          </label>
          <p className={styles.checkboxHint}>
            Desactiva para ver solo rutas directas
          </p>
        </div>
      </div>

      <div className={styles.formFooter}>
        <button
          type="submit"
          className={`${styles.submitButton} ${isLoading ? styles.buttonLoading : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className={styles.spinner}></span>
              Buscando...
            </>
          ) : (
            showScheduleSelection ? 'Confirmar y Buscar' : 'Consultar Horarios y Rutas'
          )}
        </button>
      </div>
    </form>
  );
}
