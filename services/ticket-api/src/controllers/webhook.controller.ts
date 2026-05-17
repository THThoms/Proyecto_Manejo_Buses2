import { Request, Response } from 'express';
import Stripe from 'stripe';
import prisma from '../services/prisma';
import stripe from '../services/stripe';
import { ocuparAsiento, liberarAsiento } from '../services/busApiClient';

const EVENTOS_EXITO = new Set(['checkout.session.completed']);
const EVENTOS_FALLO = new Set([
  'checkout.session.expired',
  'checkout.session.async_payment_failed',
  'payment_intent.payment_failed',
]);

/**
 * US10: Webhook de Stripe. Recibe body crudo (firma se valida byte a byte).
 *
 * Idempotencia: cada event.id se inserta en EventoWebhook. Si llega un duplicado,
 * respondemos 200 sin reprocesar (Stripe reenvía ante 5xx).
 *
 * Eventos manejados:
 *  - checkout.session.completed → boleto VIGENTE, asiento OCUPADO.
 *  - checkout.session.expired / async_payment_failed / payment_intent.payment_failed → libera asiento, anula boleto.
 */
export const stripeWebhook = async (req: Request, res: Response) => {
  const signature = req.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !secret) {
    return res.status(400).send('Webhook sin firma o sin secret configurado');
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(req.body as Buffer, signature, secret);
  } catch (err) {
    console.error('[webhook] firma inválida:', err);
    return res.status(400).send(`Webhook signature error: ${(err as Error).message}`);
  }

  // Idempotencia: si ya lo procesamos, salimos rápido.
  try {
    const existente = await prisma.eventoWebhook.findUnique({ where: { eventId: event.id } });
    if (existente?.procesadoEn) {
      return res.json({ received: true, duplicated: true });
    }
    if (!existente) {
      await prisma.eventoWebhook.create({
        data: { provider: 'stripe', eventId: event.id, tipo: event.type },
      });
    }
  } catch (err) {
    console.error('[webhook] error registrando evento:', err);
    return res.status(500).send('error registrando evento');
  }

  try {
    if (EVENTOS_EXITO.has(event.type)) {
      await manejarExito(event);
    } else if (EVENTOS_FALLO.has(event.type)) {
      await manejarFallo(event);
    } else {
      console.log('[webhook] evento ignorado:', event.type);
    }

    await prisma.eventoWebhook.update({
      where: { eventId: event.id },
      data: { procesadoEn: new Date() },
    });

    return res.json({ received: true });
  } catch (err) {
    console.error('[webhook] error procesando evento:', err);
    // Devolvemos 500 para que Stripe reintente. La idempotencia evita doble efecto.
    return res.status(500).send('error procesando evento');
  }
};

async function manejarExito(event: Stripe.Event) {
  const session = event.data.object as Stripe.Checkout.Session;
  const compraId = Number(session.metadata?.compraId);
  const pagoId = Number(session.metadata?.pagoId);
  if (!compraId || !pagoId) {
    console.warn('[webhook] sesión sin metadata válida:', session.id);
    return;
  }

  // Recuperamos el PaymentIntent expandido para obtener la tarjeta (last4, brand).
  let last4 = '0000';
  let brand = 'unknown';
  let paymentIntentId = '';
  if (session.payment_intent) {
    const piId = typeof session.payment_intent === 'string'
      ? session.payment_intent
      : session.payment_intent.id;
    paymentIntentId = piId;
    const pi = await stripe.paymentIntents.retrieve(piId, {
      expand: ['payment_method'],
    });
    const pm = pi.payment_method as Stripe.PaymentMethod | null;
    if (pm?.card) {
      last4 = pm.card.last4;
      brand = pm.card.brand;
    }
  }

  const compra = await prisma.compra.findUnique({
    where: { id: compraId },
    include: { asientos: true, boletos: true },
  });
  if (!compra) {
    console.warn('[webhook] compra no encontrada:', compraId);
    return;
  }

  await prisma.$transaction(async (tx) => {
    await tx.pagoPasajero.update({
      where: { id: pagoId },
      data: { estado: 'APROBADO', pagadoEn: new Date() },
    });
    await tx.pagoTarjeta.upsert({
      where: { pagoId },
      create: {
        pagoId,
        ultimos4: last4,
        marca: brand,
        referenciaPasarela: paymentIntentId || session.id,
      },
      update: {
        ultimos4: last4,
        marca: brand,
        referenciaPasarela: paymentIntentId || session.id,
      },
    });
    await tx.compra.update({ where: { id: compraId }, data: { estado: 'CONFIRMADA' } });
    await tx.boleto.updateMany({ where: { compraId }, data: { estado: 'VIGENTE' } });
  });

  // Ocupar asientos en bus-api. Si falla, dejamos la compra confirmada
  // y registramos el problema; un reintento manual o un job podrá resolverlo.
  const boletosOrdenados = [...compra.boletos].sort((a, b) => a.id - b.id);
  const asientosOrdenados = [...compra.asientos].sort((a, b) => a.id - b.id);

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
    } catch (err) {
      console.error(`[webhook] no se pudo ocupar asiento ${ca.asientoId}:`, err);
    }
  }
}

async function manejarFallo(event: Stripe.Event) {
  const session = event.data.object as Stripe.Checkout.Session;
  const compraId = Number(session.metadata?.compraId);
  const pagoId = Number(session.metadata?.pagoId);
  if (!compraId || !pagoId) {
    console.warn('[webhook] fallo sin metadata válida:', session.id);
    return;
  }

  const compra = await prisma.compra.findUnique({
    where: { id: compraId },
    include: { asientos: true },
  });
  if (!compra) {
    console.warn('[webhook] compra no encontrada para fallo:', compraId);
    return;
  }

  await prisma.$transaction(async (tx) => {
    await tx.pagoPasajero.update({
      where: { id: pagoId },
      data: { estado: 'RECHAZADO' },
    });
    await tx.compra.update({ where: { id: compraId }, data: { estado: 'ANULADA' } });
    await tx.boleto.updateMany({ where: { compraId }, data: { estado: 'ANULADO' } });
  });

  for (const ca of compra.asientos) {
    try {
      await liberarAsiento(ca.turnoId, ca.asientoId);
      await prisma.compraAsiento.update({
        where: { id: ca.id },
        data: { estado: 'LIBERADO' },
      });
    } catch (err) {
      console.error(`[webhook] no se pudo liberar asiento ${ca.asientoId}:`, err);
    }
  }
}
