// US19: lógica compartida entre los handlers JSON / PDF / Excel del reporte
// de boletos por cooperativa y canal.
//
// Decisiones:
//  - Solo cuentan boletos con compra.estado=CONFIRMADA y boleto.estado IN
//    (VIGENTE, UTILIZADO). Documentado en el campo `filtros.criterio`.
//  - Canal del reporte (WEB/OFICINA/BUS) se DERIVA del pago:
//      pagoEfectivo.canalVenta=BUS     -> BUS
//      pagoEfectivo.canalVenta=OFICINA -> OFICINA
//      caso contrario (tarjeta/transf) -> WEB
//  - Cooperativa se resuelve por Compra.frecuenciaId vía bus-api (batch).
//  - Filtro por cooperativas asignadas: si la query pide una coop que el admin
//    no tiene, el controller responde 403; este service confía en que el set
//    `cooperativasPermitidas` ya está restringido.

import prisma from './prisma';
import {
  resolverCooperativasPorFrecuencias,
  type MapaCooperativas,
} from './busApiClient';

export const CANALES_REPORTE = ['WEB', 'OFICINA', 'BUS'] as const;
export type CanalReporte = (typeof CANALES_REPORTE)[number];

export const TIPOS_PASAJERO_VALIDOS = [
  'NORMAL',
  'TERCERA_EDAD',
  'DISCAPACIDAD',
  'MENOR',
] as const;
export type TipoPasajero = (typeof TIPOS_PASAJERO_VALIDOS)[number];

export interface FiltrosReporte {
  fechaDesde: Date;
  fechaHasta: Date;
  cooperativaId: number | 'TODOS';
  canal: CanalReporte | 'TODOS';
  tipoPasajero: TipoPasajero | 'TODOS';
  cooperativasPermitidas: number[]; // del header del admin
}

export interface ItemDetalle {
  compraId: number;
  boletoId: number;
  fechaCompra: string;
  fechaViaje: string;
  cooperativaId: number | null;
  cooperativaNombre: string;
  canal: CanalReporte;
  tipoPasajero: TipoPasajero;
  estadoBoleto: string;
  monto: number;
}

export interface AgrupacionCanal {
  canal: CanalReporte;
  cantidadBoletos: number;
  montoTotal: number;
}
export interface AgrupacionTipoPasajero {
  tipoPasajero: TipoPasajero;
  cantidadBoletos: number;
  montoTotal: number;
}

export interface ReporteResultado {
  filtros: {
    fechaDesde: string;
    fechaHasta: string;
    cooperativaId: number | 'TODOS';
    canal: CanalReporte | 'TODOS';
    tipoPasajero: TipoPasajero | 'TODOS';
    criterio: string;
  };
  totales: {
    cantidadBoletos: number;
    montoTotal: number;
  };
  agrupadoPorCanal: AgrupacionCanal[];
  agrupadoPorTipoPasajero: AgrupacionTipoPasajero[];
  detalle: ItemDetalle[];
  paginacion?: { page: number; limit: number; total: number };
}

function deriveCanal(pago: any): CanalReporte {
  const cv = pago?.pagoEfectivo?.canalVenta;
  if (cv === 'BUS') return 'BUS';
  if (cv === 'OFICINA') return 'OFICINA';
  return 'WEB';
}

function montoBoleto(compraTotal: any, cantidad: number): number {
  // Distribuye el total de la compra equitativamente entre sus boletos.
  // No es exacto si la compra tiene tarifas mixtas, pero es lo único que el
  // schema actual permite sin migración (boleto.monto no existe).
  const total = Number(compraTotal ?? 0);
  if (!Number.isFinite(total) || cantidad <= 0) return 0;
  return Math.round((total / cantidad) * 100) / 100;
}

export async function generarReporte(filtros: FiltrosReporte): Promise<ReporteResultado> {
  const { fechaDesde, fechaHasta } = filtros;

  // 1. Query base: compras CONFIRMADAS en el rango, con boletos válidos.
  const compras = await prisma.compra.findMany({
    where: {
      estado: 'CONFIRMADA',
      creadoEn: { gte: fechaDesde, lte: fechaHasta },
    },
    select: {
      id: true,
      frecuenciaId: true,
      turnoId: true,
      total: true,
      cantidad: true,
      canal: true,
      creadoEn: true,
      fechaViaje: true,
      boletos: {
        where: { estado: { in: ['VIGENTE', 'UTILIZADO'] } },
        select: {
          id: true,
          tipoTarifa: true,
          estado: true,
        },
      },
      pago: {
        select: {
          metodo: true,
          pagoEfectivo: { select: { canalVenta: true } },
        },
      },
    },
    orderBy: { creadoEn: 'desc' },
  });

  // 2. Resolver cooperativas en batch.
  const frecIds = Array.from(new Set(compras.map((c: any) => c.frecuenciaId)));
  const mapaCoop: MapaCooperativas = await resolverCooperativasPorFrecuencias(frecIds);

  const permitidas = new Set(filtros.cooperativasPermitidas);

  // 3. Aplanar a detalle por boleto + aplicar filtros restantes.
  const detalle: ItemDetalle[] = [];
  for (const c of compras as any[]) {
    const coopInfo = mapaCoop[String(c.frecuenciaId)];
    const cooperativaId = coopInfo?.cooperativaId ?? null;
    const cooperativaNombre = coopInfo?.cooperativaNombre ?? 'Cooperativa desconocida';

    // CA5: solo cooperativas asignadas al admin.
    if (cooperativaId !== null && !permitidas.has(cooperativaId)) continue;
    if (cooperativaId === null) continue; // no podemos asignarla a ninguna coop

    // Filtro explícito por cooperativa.
    if (filtros.cooperativaId !== 'TODOS' && cooperativaId !== filtros.cooperativaId) continue;

    const canal = deriveCanal(c.pago);
    if (filtros.canal !== 'TODOS' && canal !== filtros.canal) continue;

    const monto = montoBoleto(c.total, c.boletos.length);

    for (const b of c.boletos) {
      const tipoPasajero = b.tipoTarifa as TipoPasajero;
      if (filtros.tipoPasajero !== 'TODOS' && tipoPasajero !== filtros.tipoPasajero) continue;

      detalle.push({
        compraId: c.id,
        boletoId: b.id,
        fechaCompra: c.creadoEn.toISOString(),
        fechaViaje: c.fechaViaje.toISOString(),
        cooperativaId,
        cooperativaNombre,
        canal,
        tipoPasajero,
        estadoBoleto: b.estado,
        monto,
      });
    }
  }

  // 4. Totales y agrupaciones.
  const totales = {
    cantidadBoletos: detalle.length,
    montoTotal: round2(detalle.reduce((acc, d) => acc + d.monto, 0)),
  };

  const porCanal = new Map<CanalReporte, AgrupacionCanal>();
  for (const c of CANALES_REPORTE) {
    porCanal.set(c, { canal: c, cantidadBoletos: 0, montoTotal: 0 });
  }
  for (const d of detalle) {
    const g = porCanal.get(d.canal)!;
    g.cantidadBoletos++;
    g.montoTotal = round2(g.montoTotal + d.monto);
  }

  const porTipo = new Map<TipoPasajero, AgrupacionTipoPasajero>();
  for (const t of TIPOS_PASAJERO_VALIDOS) {
    porTipo.set(t, { tipoPasajero: t, cantidadBoletos: 0, montoTotal: 0 });
  }
  for (const d of detalle) {
    const g = porTipo.get(d.tipoPasajero)!;
    g.cantidadBoletos++;
    g.montoTotal = round2(g.montoTotal + d.monto);
  }

  return {
    filtros: {
      fechaDesde: fechaDesde.toISOString(),
      fechaHasta: fechaHasta.toISOString(),
      cooperativaId: filtros.cooperativaId,
      canal: filtros.canal,
      tipoPasajero: filtros.tipoPasajero,
      criterio:
        'compras CONFIRMADAS + boletos VIGENTE/UTILIZADO; canal derivado de PagoEfectivo.canalVenta (default WEB).',
    },
    totales,
    agrupadoPorCanal: Array.from(porCanal.values()),
    agrupadoPorTipoPasajero: Array.from(porTipo.values()),
    detalle,
  };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
