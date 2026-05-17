'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchForm, { SearchFormData } from '@/components/SearchForm';
import RouteList, { Route, Turno } from '@/components/RouteList';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  const [routes, setRoutes] = useState<Route[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState<{
    origen: string;
    destino: string;
  } | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSelectTurno = (turno: Turno, ruta: Route) => {
    const precio = parseFloat(String(ruta.precioPasaje));
    const fecha = (turno.fecha || '').split('T')[0];
    const params = new URLSearchParams({
      rutaId: String(ruta.id),
      precio: String(precio),
      origen: ruta.origen,
      destino: ruta.destino,
      fecha,
      horaInicio: turno.horaInicio,
    });
    router.push(`/turnos/${turno.id}/asientos?${params.toString()}`);
  };

  const handleSearch = async (formData: SearchFormData) => {
    setIsLoading(true);
    setError(null);
    setRoutes([]);
    setHasSearched(true);
    setSearchParams({
      origen: formData.origen,
      destino: formData.destino,
    });

    try {
      const queryParams = new URLSearchParams({
        origen: formData.origen,
        destino: formData.destino,
      });

      if (formData.maxPrecio) {
        queryParams.append('maxPrecio', formData.maxPrecio.toString());
      }

      if (formData.maxDuracion) {
        queryParams.append('maxDuracion', formData.maxDuracion.toString());
      }

      if (formData.fecha) {
        queryParams.append('fecha', formData.fecha);
      }

      if (formData.horaInicio) {
        queryParams.append('horaInicio', formData.horaInicio);
      }

      if (formData.horaFin) {
        queryParams.append('horaFin', formData.horaFin);
      }

      queryParams.append('incluirParadas', formData.incluirParadas.toString());

      // API endpoint usando variable de entorno
      const API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://localhost:3002';
      const apiUrl = `${API_URL}/rutas/search?${queryParams}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        if (response.status === 404) {
          setError('No se encontraron rutas con esos criterios');
        } else {
          throw new Error(
            `Error ${response.status}: ${response.statusText}`
          );
        }
      } else {
        const data = await response.json();
        const rawRoutes = Array.isArray(data) ? data : data.data || [];
        // Mapear campos del API al formato que espera RouteList
        const mappedRoutes = rawRoutes.map((r: any) => ({
          ...r,
          precio: r.precio ?? r.precioPasaje ?? 0,
          duracion: r.duracion ?? (r.duracionMin != null ? r.duracionMin / 60 : 0),
        }));
        setRoutes(mappedRoutes);

        if (Array.isArray(data) && data.length === 0) {
          setError('No se encontraron rutas con esos criterios');
        }
      }
    } catch (err) {
      console.error('Error fetching routes:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Error al conectar con el servidor. Asegúrate de que el backend está corriendo en http://localhost:3002'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        {/* Sección de búsqueda */}
        <section className={styles.searchSection}>
          <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        </section>

        {/* Sección de resultados */}
        {hasSearched && (
          <section className={styles.resultsSection}>
            <RouteList
              routes={routes}
              isLoading={isLoading}
              error={error || undefined}
              searchParams={searchParams || undefined}
              onSelectTurno={handleSelectTurno}
            />
          </section>
        )}
      </div>
    </main>
  );
}
