'use client';

import { useState, useEffect, useMemo } from 'react';
import styles from './SearchForm.module.css';

const API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://127.0.0.1:3002';

export interface SearchFormData {
  origen: string;
  destino: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  incluirParadas: boolean;
  maxPrecio: number | string;
  maxDuracion: number | string;
}

interface SearchFormProps {
  onSearch?: (formData: SearchFormData) => void;
  onInputChange?: () => void;
  isLoading?: boolean;
}

interface RutaBasica {
  origen: string;
  destino: string;
  precioPasaje: string | number;
}

export default function SearchForm({ onSearch, onInputChange, isLoading = false }: SearchFormProps) {
  const [rutasDB, setRutasDB] = useState<RutaBasica[]>([]);
  const [loadingRutas, setLoadingRutas] = useState(true);
  const [formData, setFormData] = useState<SearchFormData>({
    origen: '',
    destino: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
    incluirParadas: true,
    maxPrecio: '',
    maxDuracion: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [gpsData, setGpsData] = useState<{ nombre: string; distancia: string } | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);

  /** Cargar ciudades disponibles desde la API real */
  useEffect(() => {
    const fetchRutas = async () => {
      try {
        const res = await fetch(`${API_URL}/rutas`);
        if (!res.ok) throw new Error('API no disponible');
        const data: RutaBasica[] = await res.json();
        setRutasDB(data);
        // Pre-seleccionar primera ciudad disponible
        if (data.length > 0) {
          setFormData((prev) => ({
            ...prev,
            origen: prev.origen || data[0].origen,
            destino: prev.destino || (data[0].destino !== data[0].origen ? data[0].destino : ''),
          }));
        }
      } catch {
        // Si la API no responde, dejamos los campos libres de texto
        setRutasDB([]);
      } finally {
        setLoadingRutas(false);
      }
    };
    fetchRutas();
  }, []);

  /** Ciudades únicas disponibles como origen */
  const origenes = useMemo(
    () => Array.from(new Set(rutasDB.map((r) => r.origen))).sort(),
    [rutasDB]
  );

  /** Destinos válidos para el origen seleccionado */
  const destinos = useMemo(() => {
    if (!formData.origen) return Array.from(new Set(rutasDB.map((r) => r.destino))).sort();
    return Array.from(
      new Set(
        rutasDB
          .filter((r) => r.origen === formData.origen)
          .map((r) => r.destino)
      )
    ).sort();
  }, [rutasDB, formData.origen]);

  /** Precio base de la ruta seleccionada */
  const precioBase = useMemo(() => {
    const ruta = rutasDB.find(
      (r) => r.origen === formData.origen && r.destino === formData.destino
    );
    return ruta ? parseFloat(String(ruta.precioPasaje)) : null;
  }, [rutasDB, formData.origen, formData.destino]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = type === 'checkbox' ? target.checked : undefined;

    onInputChange?.();

    setFormData((prev) => {
      const updated = { ...prev, [name]: type === 'checkbox' ? checked : value };
      // Cuando cambia el origen, resetear destino si ya no es válido
      if (name === 'origen') {
        const destinosValidos = rutasDB
          .filter((r) => r.origen === value)
          .map((r) => r.destino);
        if (!destinosValidos.includes(prev.destino)) {
          updated.destino = destinosValidos[0] || '';
        }
      }
      return updated;
    });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.origen.trim()) newErrors.origen = 'El origen es requerido';
    if (!formData.destino.trim()) newErrors.destino = 'El destino es requerido';
    if (formData.origen.trim() === formData.destino.trim())
      newErrors.destino = 'El destino debe ser diferente al origen';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert('Tu navegador no soporta geolocalización');
      return;
    }

    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`${API_URL}/rutas/parada-cercana?lat=${latitude}&lng=${longitude}`);
          if (!res.ok) throw new Error('No se encontró parada cercana');
          const data = await res.json();
          
          setGpsData({ nombre: data.nombre, distancia: data.distanciaKm });
          setFormData(prev => ({ ...prev, origen: data.nombre }));
          onInputChange?.();
        } catch (e) {
          alert('No pudimos localizar una parada cercana a tu ubicación.');
        } finally {
          setIsDetecting(false);
        }
      },
      () => {
        alert('No pudimos obtener tu ubicación GPS');
        setIsDetecting(false);
      }
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSearch?.(formData);
  };

  // Renderizar selector o input libre según si hay datos de la API
  const renderOrigenField = () =>
    origenes.length > 0 ? (
      <select
        id="origen"
        name="origen"
        value={formData.origen}
        onChange={handleChange}
        className={`${styles.input} ${errors.origen ? styles.inputError : ''}`}
        disabled={isLoading || loadingRutas}
      >
        <option value="">Selecciona ciudad de origen...</option>
        {origenes.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    ) : (
      <input
        type="text"
        id="origen"
        name="origen"
        value={formData.origen}
        onChange={handleChange}
        placeholder="Ej: Quito"
        className={`${styles.input} ${errors.origen ? styles.inputError : ''}`}
        disabled={isLoading}
      />
    );

  const renderDestinoField = () =>
    destinos.length > 0 ? (
      <select
        id="destino"
        name="destino"
        value={formData.destino}
        onChange={handleChange}
        className={`${styles.input} ${errors.destino ? styles.inputError : ''}`}
        disabled={isLoading || loadingRutas || !formData.origen}
      >
        <option value="">Selecciona ciudad de destino...</option>
        {destinos.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    ) : (
      <input
        type="text"
        id="destino"
        name="destino"
        value={formData.destino}
        onChange={handleChange}
        placeholder="Ej: Guayaquil"
        className={`${styles.input} ${errors.destino ? styles.inputError : ''}`}
        disabled={isLoading}
      />
    );

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h1 className={styles.title}>🚌 Busca tu Pasaje</h1>
        <p className={styles.subtitle}>Transporte interprovincial — Ecuador</p>
      </div>

      <div className={styles.formContent}>
        {/* Origen y Destino */}
        <div className={styles.gridTwoColumns}>
          <div className={styles.formGroup}>
            <div className={styles.labelWithAction}>
              <label htmlFor="origen" className={styles.label}>📍 Origen</label>
              <button 
                type="button" 
                className={styles.gpsButton} 
                onClick={handleDetectLocation}
                disabled={isDetecting}
              >
                {isDetecting ? 'Detectando...' : '🛰️ Usar mi GPS'}
              </button>
            </div>
            {renderOrigenField()}
            {gpsData && (
              <div className={styles.gpsStatus}>
                Estás cerca de: <strong>{gpsData.nombre}</strong> ({gpsData.distancia} km)
              </div>
            )}
            {errors.origen && <span className={styles.errorMessage}>{errors.origen}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="destino" className={styles.label}>🏁 Destino</label>
            {renderDestinoField()}
            {errors.destino && <span className={styles.errorMessage}>{errors.destino}</span>}
          </div>
        </div>

        {/* Precio base (readonly, informativo) */}
        {precioBase !== null && (
          <div className={styles.pricePreview}>
            <span className={styles.pricePreviewLabel}>💵 Precio base de la ruta:</span>
            <span className={styles.pricePreviewValue}>
              {new Intl.NumberFormat('es-EC', { style: 'currency', currency: 'USD' }).format(precioBase)}
            </span>
          </div>
        )}

        {/* Fecha y hora */}
        <div className={styles.gridTwoColumns}>
          <div className={styles.formGroup}>
            <label htmlFor="fecha" className={styles.label}>📅 Fecha de Salida</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>🕐 Rango Horario</label>
            <div className={styles.timeRange}>
              <input
                type="time"
                id="horaInicio"
                name="horaInicio"
                value={formData.horaInicio}
                onChange={handleChange}
                className={styles.input}
                disabled={isLoading}
              />
              <span className={styles.separator}>→</span>
              <input
                type="time"
                id="horaFin"
                name="horaFin"
                value={formData.horaFin}
                onChange={handleChange}
                className={styles.input}
                disabled={isLoading}
              />
            </div>
          </div>
        </div>

        {/* Paradas intermedias */}
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
            <span>Incluir rutas con paradas intermedias</span>
          </label>
          <p className={styles.checkboxHint}>Desactiva para ver solo rutas directas</p>
        </div>
      </div>

      <div className={styles.formFooter}>
        <button
          id="btn-buscar-rutas"
          type="submit"
          className={`${styles.submitButton} ${isLoading ? styles.buttonLoading : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className={styles.spinner} />
              Buscando horarios...
            </>
          ) : (
            '🔍 Ver Horarios Disponibles'
          )}
        </button>
      </div>
    </form>
  );
}
