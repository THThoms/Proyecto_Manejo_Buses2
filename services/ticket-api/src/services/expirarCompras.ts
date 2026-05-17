import prisma from './prisma';
import { liberarAsiento } from './busApiClient';

const TTL_TARJETA_MS = Number(process.env.COMPRA_TTL_TARJETA_MS ?? 15 * 60 * 1000);          // 15 min
const TTL_TRANSFER_MS = Number(process.env.COMPRA_TTL_TRANSFERENCIA_MS ?? 24 * 60 * 60 * 1000); // 24 h
const TTL_SIN_PAGO_MS = Number(process.env.COMPRA_TTL_SIN_PAGO_MS ?? 15 * 60 * 1000);        // 15 min
const INTERVALO_MS = 5 * 60 * 1000;

type CompraCandidata = Awaited<ReturnType<typeof cargarCandidatas>>[number];

async function cargarCandidatas() {
  return prisma.compra.findMany({
    where: { estado: 'PENDIENTE' },
    include: {
      asientos: true,
      pago: { include: { pagoTransferencia: true } },
    },
  });
}

/**
 * Decide si una compra PENDIENTE ya superó su TTL.
 * Reglas (US10 + US11):
 *  - Sin pago → 15 min desde creación de la compra.
 *  - Pago TARJETA pendiente → 15 min desde creación de la compra.
 *  - Pago TRANSFERENCIA pendiente → 24 h desde creación del pagoTransferencia.
 *  - Pago APROBADO o RECHAZADO → no expira por TTL (otro flujo se encarga).
 *  - EFECTIVO u otros → no expira por TTL aquí.
 */
export function compraExpiro(compra: CompraCandidata, ahora: Date = new Date()): boolean {
  const ahoraMs = ahora.getTime();

  if (!compra.pago) {
    return ahoraMs - compra.creadoEn.getTime() > TTL_SIN_PAGO_MS;
  }

  if (compra.pago.estado !== 'PENDIENTE') {
    return false;
  }

  if (compra.pago.metodo === 'TARJETA') {
    return ahoraMs - compra.creadoEn.getTime() > TTL_TARJETA_MS;
  }

  if (compra.pago.metodo === 'TRANSFERENCIA') {
    const transf = compra.pago.pagoTransferencia;
    if (!transf) {
      // Pago marcado TRANSFERENCIA pero sin comprobante aún: aplica TTL de "sin pago".
      return ahoraMs - compra.creadoEn.getTime() > TTL_SIN_PAGO_MS;
    }
    return ahoraMs - transf.creadoEn.getTime() > TTL_TRANSFER_MS;
  }

  return false;
}

/**
 * US10 + US11: libera asientos de compras PENDIENTE que ya excedieron su TTL.
 * El TTL aplicable depende del método de pago (ver compraExpiro).
 */
export async function expirarComprasPendientes() {
  const candidatas = await cargarCandidatas();
  const ahora = new Date();

  for (const compra of candidatas) {
    if (!compraExpiro(compra, ahora)) continue;

    try {
      await prisma.$transaction(async (tx) => {
        if (compra.pago) {
          await tx.pagoPasajero.update({
            where: { id: compra.pago.id },
            data: { estado: 'RECHAZADO' },
          });
        }
        await tx.compra.update({
          where: { id: compra.id },
          data: { estado: 'ANULADA' },
        });
        await tx.boleto.updateMany({
          where: { compraId: compra.id },
          data: { estado: 'ANULADO' },
        });
      });

      for (const ca of compra.asientos) {
        try {
          await liberarAsiento(ca.turnoId, ca.asientoId);
          await prisma.compraAsiento.update({
            where: { id: ca.id },
            data: { estado: 'LIBERADO' },
          });
        } catch (err) {
          console.error(`[cleanup] no se pudo liberar asiento ${ca.asientoId}:`, err);
        }
      }

      console.log(`[cleanup] compra #${compra.id} expirada (método=${compra.pago?.metodo ?? 'SIN_PAGO'})`);
    } catch (err) {
      console.error(`[cleanup] error procesando compra #${compra.id}:`, err);
    }
  }
}

export function iniciarLimpiezaTTL() {
  console.log(
    `[cleanup] TTL tarjeta=${TTL_TARJETA_MS / 60000}min transferencia=${TTL_TRANSFER_MS / 60000}min sinPago=${TTL_SIN_PAGO_MS / 60000}min, scan cada ${INTERVALO_MS / 60000}min`
  );
  setInterval(() => {
    expirarComprasPendientes().catch((err) => {
      console.error('[cleanup] tick falló:', err);
    });
  }, INTERVALO_MS);
}
