import prisma from './prisma';
import { ocuparAsiento } from './busApiClient';

/**
 * Helper compartido (US10 webhook Stripe + US12 aprobación manual).
 *
 * Aplica la transición "pago confirmado" sobre una compra:
 *  - PagoPasajero → APROBADO + pagadoEn
 *  - Compra → CONFIRMADA
 *  - Todos los Boletos → VIGENTE
 *  - Por cada CompraAsiento: llama bus-api/ocupar con boletoId y marca CompraAsiento.estado = OCUPADO
 *
 * La asignación boleto↔asiento se hace por orden de creación (mismo patrón que ya usaba
 * el webhook de Stripe; no hay FK persistida entre ellos).
 *
 * Devuelve la compra (con asientos y boletos) o null si no se encontró.
 */
export async function confirmarPagoYOcuparAsientos(
  compraId: number,
  pagoId: number
): Promise<{ compraId: number; asientosOcupados: number } | null> {
  const compra = await prisma.compra.findUnique({
    where: { id: compraId },
    include: { asientos: true, boletos: true },
  });
  if (!compra) return null;

  await prisma.$transaction(async (tx) => {
    await tx.pagoPasajero.update({
      where: { id: pagoId },
      data: { estado: 'APROBADO', pagadoEn: new Date() },
    });
    await tx.compra.update({
      where: { id: compraId },
      data: { estado: 'CONFIRMADA' },
    });
    await tx.boleto.updateMany({
      where: { compraId },
      data: { estado: 'VIGENTE' },
    });
  });

  const boletosOrdenados = [...compra.boletos].sort((a, b) => a.id - b.id);
  const asientosOrdenados = [...compra.asientos].sort((a, b) => a.id - b.id);
  let ocupados = 0;

  for (let i = 0; i < asientosOrdenados.length; i++) {
    const ca = asientosOrdenados[i];
    const boleto = boletosOrdenados[i];
    if (!boleto) continue;
    try {
      await ocuparAsiento(ca.turnoId, ca.asientoId, boleto.id);
      await prisma.compraAsiento.update({
        where: { id: ca.id },
        data: { estado: 'OCUPADO' },
      });
      ocupados++;
    } catch (err) {
      console.error(`[confirmarPago] no se pudo ocupar asiento ${ca.asientoId}:`, err);
    }
  }

  return { compraId, asientosOcupados: ocupados };
}
