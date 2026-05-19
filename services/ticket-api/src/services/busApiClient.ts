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
