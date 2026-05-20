const BUS_API_URL = process.env.BUS_API_URL || 'http://localhost:3002';

export class BusApiError extends Error {
  constructor(public status: number, public body: unknown, message: string) {
    super(message);
    this.name = 'BusApiError';
  }
}

async function postAsiento(
  turnoId: number,
  asientoId: number,
  accion: 'reservar' | 'liberar' | 'ocupar',
  body?: Record<string, unknown>
) {
  const url = `${BUS_API_URL}/turnos/${turnoId}/asientos/${asientoId}/${accion}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new BusApiError(res.status, data, `bus-api ${accion} fallo (${res.status})`);
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

export interface CooperativaLookup {
  id: number;
  nombre: string;
  estado?: string;
}

export interface CooperativaMapResponse {
  cooperativas: CooperativaLookup[];
  turnos: Array<{
    turnoId: number;
    cooperativaId: number;
    cooperativaNombre: string;
    rutaId: number;
    rutaNombre: string;
    precioPasaje: number;
  }>;
  frecuencias: Array<{
    frecuenciaId: number;
    cooperativaId: number;
    cooperativaNombre: string;
    rutaId: number;
    rutaNombre: string;
    precioPasaje: number;
  }>;
}

export async function getTurnoDetalle(turnoId: number): Promise<TurnoDetalle> {
  const url = `${BUS_API_URL}/turnos/${turnoId}`;
  const res = await fetch(url);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new BusApiError(res.status, data, `bus-api turno detalle fallo (${res.status})`);
  }
  return data as TurnoDetalle;
}

export async function getCooperativasMap(params: {
  turnoIds?: number[];
  frecuenciaIds?: number[];
  cooperativaIds?: number[];
}): Promise<CooperativaMapResponse> {
  const search = new URLSearchParams();

  if (params.turnoIds?.length) {
    search.set('turnoIds', params.turnoIds.join(','));
  }
  if (params.frecuenciaIds?.length) {
    search.set('frecuenciaIds', params.frecuenciaIds.join(','));
  }
  if (params.cooperativaIds?.length) {
    search.set('cooperativaIds', params.cooperativaIds.join(','));
  }

  const qs = search.toString();
  const url = `${BUS_API_URL}/reporting/cooperativas-map${qs ? `?${qs}` : ''}`;
  const res = await fetch(url);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new BusApiError(res.status, data, `bus-api cooperativas-map fallo (${res.status})`);
  }
  return data as CooperativaMapResponse;
}
