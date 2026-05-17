import Stripe from 'stripe';

const apiKey = process.env.STRIPE_SECRET_KEY;

if (!apiKey) {
  console.warn('[stripe] STRIPE_SECRET_KEY no está seteado. Los endpoints de pago fallarán hasta configurarlo.');
}

const stripe = new Stripe(apiKey || 'sk_test_placeholder', {
  apiVersion: '2025-02-24.acacia',
});

export default stripe;
