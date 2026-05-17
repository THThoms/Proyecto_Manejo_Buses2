import prisma from './prisma';
import { liberarAsiento } from './busApiClient';

const TTL_MINUTES = Number(process.env.COMPRA_TTL_MINUTES ?? '15');
const INTERVALO_MS = 5 * 60 * 1000; // scan cada 5 min

/**
 * US10: Libera asientos de compras PENDIENTE que llevan más de TTL_MINUTES
 * sin confirmación de pago. Evita que se queden asientos bloqueados si el
 * usuario cierra el navegador antes de pagar y Stripe nunca manda webhook.
 */
export async function expirarComprasPendientes() {
  const limite = new Date(Date.now() - TTL_MINUTES * 60 * 1000);

  const compras = await prisma.compra.findMany({
    where: { estado: 'PENDIENTE', creadoEn: { lt: limite } },
    include: { asientos: true, pago: true },
  });

  for (const compra of compras) {
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

      console.log(`[cleanup] compra #${compra.id} expirada por TTL de ${TTL_MINUTES} min`);
    } catch (err) {
      console.error(`[cleanup] error procesando compra #${compra.id}:`, err);
    }
  }
}

export function iniciarLimpiezaTTL() {
  console.log(`[cleanup] TTL ${TTL_MINUTES} min, scan cada ${INTERVALO_MS / 60000} min`);
  setInterval(() => {
    expirarComprasPendientes().catch((err) => {
      console.error('[cleanup] tick falló:', err);
    });
  }, INTERVALO_MS);
}
