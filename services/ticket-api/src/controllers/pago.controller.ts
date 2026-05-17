import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../services/prisma';
import stripe from '../services/stripe';

const crearSessionSchema = z.object({
  compraId: z.number().int().positive(),
});

/**
 * US10: Crear Checkout Session de Stripe para una compra PENDIENTE.
 *
 * Crea (o reutiliza) el PagoPasajero asociado, abre la sesión de Stripe con
 * metadata { compraId, pagoId } y devuelve la URL hosted de Stripe.
 */
export const crearCheckoutSession = async (req: Request, res: Response) => {
  const parsed = crearSessionSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Body inválido', detalles: parsed.error.flatten() });
  }
  const { compraId } = parsed.data;

  try {
    const compra = await prisma.compra.findUnique({
      where: { id: compraId },
      include: { pago: true },
    });
    if (!compra) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }
    if (compra.estado !== 'PENDIENTE') {
      return res.status(409).json({ error: `La compra está en estado ${compra.estado}` });
    }
    if (compra.pago && compra.pago.estado === 'APROBADO') {
      return res.status(409).json({ error: 'La compra ya está pagada' });
    }

    const pago = compra.pago
      ? compra.pago
      : await prisma.pagoPasajero.create({
          data: {
            compraId: compra.id,
            monto: compra.total,
            metodo: 'TARJETA',
            estado: 'PENDIENTE',
          },
        });

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: Math.round(Number(compra.total) * 100),
            product_data: {
              name: `Boletos compra #${compra.id} (${compra.cantidad} asiento${compra.cantidad === 1 ? '' : 's'})`,
            },
          },
        },
      ],
      metadata: {
        compraId: String(compra.id),
        pagoId: String(pago.id),
      },
      success_url: `${frontendUrl}/checkout/success?compraId=${compra.id}`,
      cancel_url: `${frontendUrl}/checkout/cancel?compraId=${compra.id}`,
    });

    return res.json({
      sessionId: session.id,
      sessionUrl: session.url,
      pagoId: pago.id,
    });
  } catch (error) {
    console.error('Error al crear Checkout Session:', error);
    return res.status(500).json({ error: 'Error interno al crear la sesión de pago' });
  }
};
