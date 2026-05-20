const BUS_API_URL = process.env.BUS_API_URL || 'http://localhost:3002';

export class BusApiError extends Error {
  constructor(public status: number, public body: unknown, message: string) {
    super(message);
    this.name = 'BusApiError';
  }
}

async function postAsiento(turnoId: number, asientoId: number, accion: 'reservar' | 'liberar' | 'ocupar', body?: Record<string, unknown>) {
  const url = `${BUS_API_URL}/turnos/${turnoId}/asientos/${asientoId}/${accion}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new BusApiError(res.status, data, `bus-api ${accion} falló (${res.status})`);
  }
  return data;
}

export const reservarAsiento = (turnoId: number, asientoId: number) =>
  postAsiento(turnoId, asientoId, 'reservar');

export const liberarAsiento = (turnoId: number, asientoId: number) =>
  postAsiento(turnoId, asientoId, 'liberar');

export const ocuparAsiento = (turnoId: number, asientoId: number, boletoId: number) =>
  postAsiento(turnoId, asientoId, 'ocupar', { boletoId });

export interface TurnoDetalle {
  id: number;
  fecha: string;
  horaInicio: string;
  horaFin: string | null;
  estado: string;
  ruta: { id: number; nombre: string; origen: string; destino: string };
  bus: { id: number; placa: string; marca: string };
}

/**
 * US15: trae el detalle del turno (ruta + horaInicio + bus) para llenar el PDF
 * del boleto. Endpoint expuesto por bus-api en GET /turnos/:id.
 */
export async function getTurnoDetalle(turnoId: number): Promise<TurnoDetalle> {
  const url = `${BUS_API_URL}/turnos/${turnoId}`;
  const res = await fetch(url);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new BusApiError(res.status, data, `bus-api turno detalle falló (${res.status})`);
  }
  return data as TurnoDetalle;
}

export interface CooperativaInfo {
  cooperativaId: number;
  cooperativaNombre: string;
}
export type MapaCooperativas = Record<string, CooperativaInfo>;

/**
 * US19: dado un set de frecuenciaIds, devuelve el mapa { frecuenciaId -> cooperativa }
 * resuelto por bus-api en una sola llamada. Si bus-api falla, devolvemos {}; el
 * reporte degrada a "Cooperativa desconocida" en lugar de romper todo.
 */
export async function resolverCooperativasPorFrecuencias(
  ids: number[],
): Promise<MapaCooperativas> {
  const unique = Array.from(new Set(ids)).filter((n) => Number.isInteger(n) && n > 0);
  if (unique.length === 0) return {};
  const qs = unique.join(',');
  try {
    const res = await fetch(`${BUS_API_URL}/frecuencias/resolver-cooperativas?ids=${qs}`);
    if (!res.ok) return {};
    return (await res.json()) as MapaCooperativas;
  } catch {
    return {};
  }
}

export interface CooperativaListItem {
  id: number;
  nombre: string;
  ruc?: string;
  estado?: string;
}

/**
 * US19: catálogo de cooperativas para que el admin pueda elegir en el filtro.
 * El frontend lo cruza luego con las cooperativas asignadas al usuario.
 */
export async function listarCooperativas(): Promise<CooperativaListItem[]> {
  try {
    const res = await fetch(`${BUS_API_URL}/cooperativas`);
    if (!res.ok) return [];
    const data: any = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export interface CooperativaDetalle {
  id: number;
  nombre: string;
  ruc: string;
  cuentaBancaria: string | null;
  banco: string | null;
  estado: string;
}

/**
 * US20: detalle de cooperativa por id. Incluye cuenta bancaria registrada,
 * necesaria para la liquidación. Lanza BusApiError si bus-api falla.
 */
export async function getCooperativaById(id: number): Promise<CooperativaDetalle> {
  const url = `${BUS_API_URL}/cooperativas/${id}`;
  const res = await fetch(url);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new BusApiError(res.status, data, `bus-api cooperativa falló (${res.status})`);
  }
  return data as CooperativaDetalle;
}
