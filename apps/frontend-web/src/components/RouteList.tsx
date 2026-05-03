'use client';

import styles from './RouteList.module.css';

export interface Bus {
  placa: string;
  marca: string;
  capacidad?: number;
  carroceria?: string;
  modelo?: string;
  anio?: number;
  color?: string;
  foto?: string;
}

export interface Turno {
  id: number;
  fecha: string;
  horaInicio: string;
  horaFin?: string;
  estado: string;
  bus?: Bus;
}

export interface Route {
  id: number;
  nombre: string;
  origen: string;
  destino: string;
  precioPasaje: string | number;
  duracionMin: number;
  paradas?: Array<{ id: number; nombre: string; orden: number; latitud?: string; longitud?: string }>;
  horaSalida?: string;
  horaLlegada?: string;
  turnos?: Turno[];
}

interface RouteListProps {
  routes: Route[];
  isLoading?: boolean;
  error?: string;
  searchParams?: { origen: string; destino: string };
  onSelectTurno: (turno: Turno, ruta: Route) => void;
}

const ESTADO_COLORS: Record<string, string> = {
  PENDIENTE: '#f59e0b',
  EN_RUTA: '#10b981',
  COMPLETADO: '#6b7280',
  CANCELADO: '#ef4444',
};

export default function RouteList({
  routes,
  isLoading = false,
  error,
  searchParams,
  onSelectTurno,
}: RouteListProps) {
  const isIntermediateStop = (ruta: Route): boolean => {
    if (!searchParams) return false;
    const { origen: searchOrigen, destino: searchDestino } = searchParams;
    const paradasNombres = ruta.paradas?.map((p) => p.nombre) || [];
    return !!(
      (ruta.origen !== searchOrigen || ruta.destino !== searchDestino) &&
      paradasNombres.includes(searchOrigen) &&
      paradasNombres.includes(searchDestino)
    );
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <p className={styles.loadingText}>Buscando horarios disponibles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorIcon}>⚠️</div>
        <h3 className={styles.errorTitle}>Error en la búsqueda</h3>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    );
  }

  if (routes.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.emptyIcon}>🔍</div>
        <h3 className={styles.emptyTitle}>No se encontraron rutas</h3>
        <p className={styles.emptyMessage}>Intenta con diferentes criterios de búsqueda</p>
      </div>
    );
  }

  return (
    <div className={styles.routeList}>
      <div className={styles.listHeader}>
        <h2 className={styles.listTitle}>Horarios Disponibles ({routes.length} ruta{routes.length !== 1 ? 's' : ''})</h2>
        <p className={styles.listSubtitle}>Selecciona un turno para ver el mapa de asientos</p>
      </div>

      <div className={styles.routesGrid}>
        {routes.map((route) => {
          const isIntermediate = isIntermediateStop(route);
          const precio = parseFloat(String(route.precioPasaje));
          const horas = Math.floor(route.duracionMin / 60);
          const minutos = route.duracionMin % 60;

          return (
            <div key={route.id} className={styles.routeCard}>
              {/* Header de la ruta */}
              <div className={styles.cardHeader}>
                <div className={styles.routePath}>
                  <span className={styles.city}>{route.origen}</span>
                  <span className={styles.arrow}>✈</span>
                  <span className={styles.city}>{route.destino}</span>
                </div>
                <div className={styles.routeMeta}>
                  {isIntermediate && <span className={styles.badge}>Parada Intermedia</span>}
                  <span className={styles.routeName}>{route.nombre}</span>
                </div>
              </div>

              {/* Detalles generales */}
              <div className={styles.cardContent}>
                <div className={styles.detailsGrid}>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>💵 Precio</span>
                    <span className={styles.detailValue}>
                      {new Intl.NumberFormat('es-EC', { style: 'currency', currency: 'USD' }).format(precio)}
                    </span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>⏱️ Duración</span>
                    <span className={styles.detailValue}>
                      {horas}h{minutos > 0 ? ` ${minutos}min` : ''}
                    </span>
                  </div>
                </div>

                {/* Paradas intermedias - Visual Timeline */}
                {route.paradas && route.paradas.length > 0 && (
                  <div className={styles.paradasTimeline}>
                    <p className={styles.paradasLabel}>📍 Itinerario de Ruta:</p>
                    <div className={styles.timelineContainer}>
                      <div className={styles.timelineNode}>
                        <div className={styles.dot}></div>
                        <span className={styles.timelineText}>{route.origen}</span>
                      </div>
                      {route.paradas.map((parada) => (
                        <div key={parada.id} className={styles.timelineNode}>
                          <div className={styles.line}></div>
                          <div className={styles.dot_small}></div>
                          <span className={styles.timelineText_small}>{parada.nombre}</span>
                        </div>
                      ))}
                      <div className={styles.timelineNode}>
                        <div className={styles.line}></div>
                        <div className={styles.dot}></div>
                        <span className={styles.timelineText}>{route.destino}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Turnos/Horarios disponibles */}
                <div className={styles.turnosSection}>
                  <p className={styles.turnosLabel}>🚌 Selecciona un Horario:</p>
                  {route.turnos && route.turnos.length > 0 ? (
                    <div className={styles.turnosGrid}>
                      {route.turnos.map((turno) => (
                        <button
                          key={turno.id}
                          id={`turno-${turno.id}`}
                          className={styles.turnoCard}
                          onClick={() => onSelectTurno(turno, route)}
                        >
                          <div className={styles.turnoTime}>
                            <span className={styles.turnoHora}>{turno.horaInicio}</span>
                            {turno.horaFin && (
                              <span className={styles.turnoHoraFin}>→ {turno.horaFin}</span>
                            )}
                          </div>
                          {turno.bus && (
                            <div className={styles.turnoBusInfo}>
                              <span className={styles.turnoBusIcon}>🚌</span>
                              <div>
                                <div className={styles.turnoBusPlaca}>{turno.bus.placa}</div>
                                <div className={styles.turnoBusMarca}>{turno.bus.marca}</div>
                              </div>
                              {turno.bus.capacidad && (
                                <span className={styles.turnoCapacidad}>{turno.bus.capacidad} 💺</span>
                              )}
                            </div>
                          )}
                          <div
                            className={styles.turnoEstado}
                            style={{ background: ESTADO_COLORS[turno.estado] + '20', color: ESTADO_COLORS[turno.estado] }}
                          >
                            {turno.estado}
                          </div>

                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className={styles.noTurnos}>
                      <span>📅</span>
                      <span>No hay turnos para esta fecha. Prueba sin filtro de fecha.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
