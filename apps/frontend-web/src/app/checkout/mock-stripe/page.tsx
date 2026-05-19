'use client';

import { useEffect, useState, FormEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './mock-stripe.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';

interface Compra {
  id: number;
  total: string;
  cantidad: number;
  estado: string;
}

export default function MockStripePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const compraId = Number(searchParams?.get('compraId'));
  const pagoId = Number(searchParams?.get('pagoId'));

  const [compra, setCompra] = useState<Compra | null>(null);
  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // Detect card brand
  const getCardBrand = (num: string) => {
    const clean = num.replace(/\s+/g, '');
    if (clean.startsWith('4')) return 'visa';
    if (/^5[1-5]/.test(clean)) return 'mastercard';
    if (/^3[47]/.test(clean)) return 'amex';
    return 'unknown';
  };

  const getBrandIcon = (brand: string) => {
    switch (brand) {
      case 'visa': return '💳 Visa';
      case 'mastercard': return '💳 Mastercard';
      case 'amex': return '💳 Amex';
      default: return '💳';
    }
  };

  useEffect(() => {
    if (!compraId) {
      setError('ID de compra no especificado.');
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const res = await fetch(`${TICKET_API_URL}/compras/${compraId}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setCompra(data);
      } catch (err) {
        setError('No se pudo cargar la información de la compra.');
      } finally {
        setLoading(false);
      }
    })();
  }, [compraId]);

  // Card number input formatting (groups of 4)
  const handleCardNumberChange = (val: string) => {
    const clean = val.replace(/\D/g, '').slice(0, 16);
    const parts = [];
    for (let i = 0; i < clean.length; i += 4) {
      parts.push(clean.substring(i, i + 4));
    }
    setCardNumber(parts.join(' '));
  };

  // Expiry date input formatting (MM/YY)
  const handleExpiryChange = (val: string) => {
    const clean = val.replace(/\D/g, '').slice(0, 4);
    if (clean.length >= 3) {
      setExpiry(`${clean.slice(0, 2)}/${clean.slice(2)}`);
    } else {
      setExpiry(clean);
    }
  };

  const handlePay = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanCard = cardNumber.replace(/\s+/g, '');
    if (cleanCard.length < 15) {
      setError('Número de tarjeta inválido.');
      return;
    }
    if (!cardName.trim()) {
      setError('Nombre del titular requerido.');
      return;
    }
    if (expiry.length < 5) {
      setError('Fecha de vencimiento inválida.');
      return;
    }
    if (cvv.length < 3) {
      setError('Código de seguridad (CVV) inválido.');
      return;
    }

    setPaying(true);
    try {
      const brand = getCardBrand(cardNumber);
      const ultimos4 = cleanCard.slice(-4);

      const res = await fetch(`${TICKET_API_URL}/pagos/tarjeta/mock-confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          compraId,
          pagoId,
          ultimos4,
          marca: brand,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? 'No se pudo procesar la transacción simulada.');
      }

      // Redirigir al success
      router.push(`/checkout/success?compraId=${compraId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al conectar con la pasarela.');
      setPaying(false);
    }
  };

  if (loading) {
    return (
      <main className={styles.main}>
        <div style={{ textAlign: 'center' }}>
          <p>Cargando pasarela de pago simulada...</p>
        </div>
      </main>
    );
  }

  if (error && !compra) {
    return (
      <main className={styles.main}>
        <div className={styles.container} style={{ padding: 40, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className={styles.errorBox}>{error}</div>
          <button className={styles.submitBtn} style={{ background: '#697386' }} onClick={() => router.push('/')}>Volver al inicio</button>
        </div>
      </main>
    );
  }

  const brand = getCardBrand(cardNumber);
  const displayAmount = new Intl.NumberFormat('es-EC', { style: 'currency', currency: 'USD' }).format(Number(compra?.total || '0'));

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Left Panel: Stripe billing preview */}
        <div className={styles.leftPanel}>
          <div>
            <button className={styles.backBtn} onClick={() => router.back()}>
              ← Volver
            </button>
            <div className={styles.logo}>
              stripe <span className={`${styles.badge} ${styles.badgeMock}`}>Sandbox</span>
            </div>
            <p className={styles.company}>Buses SAAS</p>
            <h1 className={styles.amount}>{displayAmount}</h1>
            <p className={styles.itemDesc}>
              Compra #{compra?.id} · {compra?.cantidad} pasaje{compra?.cantidad === 1 ? '' : 's'} de autobús
            </p>
          </div>

          <div className={styles.footerText}>
            Desarrollado en entorno de pruebas local. <br />
            <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">Condiciones de Stripe</a>
          </div>
        </div>

        {/* Right Panel: Payment Form */}
        <div className={styles.rightPanel}>
          <div>
            <h2 className={styles.title}>Pagar con tarjeta</h2>
            {error && <div className={styles.errorBox}>{error}</div>}

            <form onSubmit={handlePay} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Número de tarjeta</label>
                <div className={styles.cardInputContainer}>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="4242 4242 4242 4242"
                    value={cardNumber}
                    onChange={(e) => handleCardNumberChange(e.target.value)}
                    required
                  />
                  <span className={styles.cardIcon}>
                    {getBrandIcon(brand)}
                  </span>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Nombre en la tarjeta</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Juan Pérez"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputRow}>
                <div className={styles.formGroup} style={{ flex: 1 }}>
                  <label className={styles.label}>Vencimiento</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => handleExpiryChange(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.formGroup} style={{ flex: 1 }}>
                  <label className={styles.label}>CVC</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="123"
                    maxLength={4}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={paying}
              >
                {paying ? 'Procesando pago seguro...' : `Pagar ${displayAmount}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
