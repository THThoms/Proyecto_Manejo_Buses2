// US20: liquidación mensual por cooperativa.
//
// Reusa la lógica de mapeo Compra->Cooperativa de US19 pero filtra por una
// sola cooperativa y un mes calendario completo.
//
// Criterio:
//   - Compras CONFIRMADAS dentro del mes solicitado.
//   - Boletos en estado VIGENTE o UTILIZADO.
//   - Se EXCLUYE PENDIENTE, ANULADO, EXPIRADO (negocio no liquida boletos no
//     consumidos por el pasajero, ni los anulados).
//   - Monto por boleto = compra.total / compra.cantidad (mismo criterio de US19).
//   - Solo mes calendario PASADO (mes actual aún no cerrado se rechaza).

import prisma from './prisma';
import {
  resolverCooperativasPorFrecuencias,
  getCooperativaById,
  type CooperativaDetalle,
} from './busApiClient';

export const TIPOS_PASAJERO = ['NORMAL', 'TERCERA_EDAD', 'DISCAPACIDAD', 'MENOR'] as const;
export type TipoPasajero = (typeof TIPOS_PASAJERO)[number];

export interface ItemDetalleLiq {
  compraId: number;
  boletoId: number;
  fechaVenta: string;
  fechaViaje: string;
  tipoPasajero: TipoPasajero;
  estadoBoleto: string;
  monto: number;
}

export interface DesgloseTipo {
  tipoPasajero: TipoPasajero;
  cantidadBoletos: number;
  montoTotal: number;
}

export interface CuentaBancariaSafe {
  banco: string | null;
  // Solo los últimos 4 dígitos para no exponer la cuenta completa en pantalla
  // ni en PDF. El sistema interno conserva la cuenta full en bus-api.
  numero: string | null;
}

export interface LiquidacionResultado {
  cooperativa: {
    id: number;
    nombre: string;
    ruc: string;
    cuentaBancaria: CuentaBancariaSafe;
  };
  periodo: {
    year: number;
    month: number;
    desde: string;
    hasta: string;
  };
  totales: {
    cantidadBoletos: number;
    montoTotal: number;
  };
  desglosePorTipoPasajero: DesgloseTipo[];
  detalle: ItemDetalleLiq[];
  criterio: string;
}

export interface FiltrosLiquidacion {
  cooperativaId: number;
  year: number;
  month: number;          // 1..12
  cooperativasPermitidas: number[];
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function maskCuenta(numero: string | null): string | null {
  if (!numero) return null;
  if (numero.length <= 4) return numero;
  return `****${numero.slice(-4)}`;
}

function rangoMes(year: number, month: number): { desde: Date; hasta: Date } {
  const desde = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
  const hasta = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));
  return { desde, hasta };
}

export function mesEstaCerrado(year: number, month: number, ahora: Date = new Date()): boolean {
  // Mes "cerrado" = último día del mes (UTC) ya pasó.
  const finMes = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));
  return ahora.getTime() > finMes.getTime();
}

export async function generarLiquidacion(filtros: FiltrosLiquidacion): Promise<LiquidacionResultado> {
  const { cooperativaId, year, month } = filtros;
  const { desde, hasta } = rangoMes(year, month);

  // 1. Detalle de la cooperativa (bus-api). Si bus-api falla, propagamos.
  const coop: CooperativaDetalle = await getCooperativaById(cooperativaId);

  // 2. Compras CONFIRMADAS del mes con boletos válidos.
  const compras = await prisma.compra.findMany({
    where: {
      estado: 'CONFIRMADA',
      creadoEn: { gte: desde, lte: hasta },
    },
    select: {
      id: true,
      frecuenciaId: true,
      total: true,
      creadoEn: true,
      fechaViaje: true,
      boletos: {
        where: { estado: { in: ['VIGENTE', 'UTILIZADO'] } },
        select: { id: true, tipoTarifa: true, estado: true },
      },
    },
    orderBy: { creadoEn: 'desc' },
  });

  // 3. Mapeo frecuencia -> cooperativa (batch).
  const frecIds = Array.from(new Set(compras.map((c: any) => c.frecuenciaId)));
  const mapaCoop = await resolverCooperativasPorFrecuencias(frecIds);

  // 4. Filtrar solo compras de la cooperativa solicitada.
  const detalle: ItemDetalleLiq[] = [];
  for (const c of compras as any[]) {
    const info = mapaCoop[String(c.frecuenciaId)];
    if (!info || info.cooperativaId !== cooperativaId) continue;

    const cantidad = c.boletos.length;
    if (cantidad === 0) continue;
    const montoPorBoleto = round2(Number(c.total ?? 0) / cantidad);

    for (const b of c.boletos) {
      detalle.push({
        compraId: c.id,
        boletoId: b.id,
        fechaVenta: c.creadoEn.toISOString(),
        fechaViaje: c.fechaViaje.toISOString(),
        tipoPasajero: b.tipoTarifa as TipoPasajero,
        estadoBoleto: b.estado,
        monto: montoPorBoleto,
      });
    }
  }

  // 5. Totales y desglose.
  const totales = {
    cantidadBoletos: detalle.length,
    montoTotal: round2(detalle.reduce((acc, d) => acc + d.monto, 0)),
  };

  const mapaTipo = new Map<TipoPasajero, DesgloseTipo>();
  for (const t of TIPOS_PASAJERO) {
    mapaTipo.set(t, { tipoPasajero: t, cantidadBoletos: 0, montoTotal: 0 });
  }
  for (const d of detalle) {
    const g = mapaTipo.get(d.tipoPasajero)!;
    g.cantidadBoletos++;
    g.montoTotal = round2(g.montoTotal + d.monto);
  }

  return {
    cooperativa: {
      id: coop.id,
      nombre: coop.nombre,
      ruc: coop.ruc,
      cuentaBancaria: {
        banco: coop.banco ?? null,
        numero: maskCuenta(coop.cuentaBancaria ?? null),
      },
    },
    periodo: {
      year,
      month,
      desde: desde.toISOString().slice(0, 10),
      hasta: hasta.toISOString().slice(0, 10),
    },
    totales,
    desglosePorTipoPasajero: Array.from(mapaTipo.values()),
    detalle,
    criterio:
      'Compras CONFIRMADAS + boletos VIGENTE/UTILIZADO en el mes calendario indicado (UTC). Se excluyen PENDIENTE, ANULADO, EXPIRADO.',
  };
}
