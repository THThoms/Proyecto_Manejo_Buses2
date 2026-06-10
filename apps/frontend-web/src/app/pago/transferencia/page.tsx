'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './transferencia.module.css';

const TICKET_API_URL = process.env.NEXT_PUBLIC_TICKET_API_URL || 'http://localhost:3003';
const MAX_BYTES = 5 * 1024 * 1024;
const MIMES_PERMITIDOS = new Set(['image/jpeg', 'image/png', 'application/pdf']);

type Estado = 'idle' | 'subiendo' | 'ok' | 'error';

interface Resultado {
  compraId: number;
  pagoId: number;
  transferenciaId: number;
  estado: string;
}

export default function PagoTransferenciaPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const compraIdQuery = searchParams?.get('compraId') ?? '';

  const [compraId, setCompraId] = useState(compraIdQuery);
  const [banco, setBanco] = useState('');
  const [referencia, setReferencia] = useState('');
  const [archivo, setArchivo] = useState<File | null>(null);
  const [estado, setEstado] = useState<Estado>('idle');
  const [mensaje, setMensaje] = useState<string>('');
  const [resultado, setResultado] = useState<Resultado | null>(null);

  useEffect(() => {
    if (compraIdQuery && !compraId) {
      setCompraId(compraIdQuery);
    }
  }, [compraIdQuery, compraId]);

  const handleArchivo = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setMensaje('');
    setResultado(null);
    setEstado('idle');

    if (!file) {
      setArchivo(null);
      return;
    }

    if (!MIMES_PERMITIDOS.has(file.type)) {
      setArchivo(null);
      setEstado('error');
      setMensaje(`Tipo de archivo no permitido (${file.type || 'desconocido'}). Solo JPG, PNG o PDF.`);
      e.target.value = '';
      return;
    }

    if (file.size > MAX_BYTES) {
      setArchivo(null);
      setEstado('error');
      setMensaje(`El archivo pesa ${(file.size / 1024 / 1024).toFixed(2)} MB. El máximo es 5 MB.`);
      e.target.value = '';
      return;
    }

    setArchivo(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMensaje('');
    setResultado(null);

    if (!compraId.trim() || !/^\d+$/.test(compraId.trim())) {
      setEstado('error');
      setMensaje('Ingresa un compraId numérico válido.');
      return;
    }
    if (banco.trim().length < 1) {
      setEstado('error');
      setMensaje('Ingresa el banco.');
      return;
    }
    if (referencia.trim().length < 1) {
      setEstado('error');
      setMensaje('Ingresa el número de referencia.');
      return;
    }
    if (!archivo) {
      setEstado('error');
      setMensaje('Selecciona el comprobante.');
      return;
    }

    const formData = new FormData();
    formData.append('compraId', compraId.trim());
    formData.append('banco', banco.trim());
    formData.append('referencia', referencia.trim());
    formData.append('file', archivo);

    setEstado('subiendo');
    setMensaje('');

    try {
      const res = await fetch(`${TICKET_API_URL}/pagos/transferencia`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setEstado('error');
        setMensaje(traducirError(res.status, data));
        return;
      }

      const compraIdResultado = data.compraId ?? Number(compraId.trim());
      setEstado('ok');
      setResultado({
        compraId: compraIdResultado,
        pagoId: data.pagoId,
        transferenciaId: data.transferenciaId,
        estado: data.estado ?? 'PENDIENTE',
      });
      setMensaje('Comprobante enviado. Tu boleto queda pendiente de validación.');
      router.push(`/boleto/${compraIdResultado}`);
    } catch (err) {
      setEstado('error');
      setMensaje(
        err instanceof Error
          ? `Error al conectar con el servidor: ${err.message}`
          : 'Error desconocido al conectar con el servidor.'
      );
    }
  };

  const subiendo = estado === 'subiendo';

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>Pago por transferencia</h1>
        <p className={styles.subtitle}>
          Al enviar el comprobante, tu boleto quedará en estado <strong>PENDIENTE</strong> hasta que
          un oficinista valide la transferencia. El asiento queda reservado durante ese tiempo.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            ID de la compra
            <input
              type="text"
              inputMode="numeric"
              className={styles.input}
              value={compraId}
              onChange={(e) => setCompraId(e.target.value)}
              placeholder="Ej. 1"
              disabled={subiendo}
            />
          </label>

          <label className={styles.label}>
            Banco
            <input
              type="text"
              className={styles.input}
              value={banco}
              onChange={(e) => setBanco(e.target.value)}
              placeholder="Ej. Pichincha"
              disabled={subiendo}
            />
          </label>

          <label className={styles.label}>
            Número de referencia
            <input
              type="text"
              className={styles.input}
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
              placeholder="Ej. TRX-12345"
              disabled={subiendo}
            />
          </label>

          <label className={styles.label}>
            Comprobante (JPG, PNG o PDF, máximo 5 MB)
            <input
              type="file"
              accept="image/jpeg,image/png,application/pdf"
              className={styles.fileInput}
              onChange={handleArchivo}
              disabled={subiendo}
            />
            {archivo && (
              <span className={styles.fileName}>
                {archivo.name} ({(archivo.size / 1024).toFixed(1)} KB)
              </span>
            )}
          </label>

          {estado === 'error' && mensaje && <div className={styles.error}>{mensaje}</div>}
          {estado === 'ok' && (
            <div className={styles.success}>
              <p>{mensaje}</p>
              {resultado && (
                <ul className={styles.resultList}>
                  <li>Compra ID: <code>{resultado.compraId}</code></li>
                  <li>Pago ID: <code>{resultado.pagoId}</code></li>
                  <li>Transferencia ID: <code>{resultado.transferenciaId}</code></li>
                  <li>Estado: <strong>{resultado.estado}</strong></li>
                </ul>
              )}
            </div>
          )}

          {estado === 'ok' && resultado ? (
            <a
              href={`/boleto/${resultado.compraId}`}
              className={styles.submitBtn}
              style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}
            >
              Ver mi boleto
            </a>
          ) : (
            <button type="submit" className={styles.submitBtn} disabled={subiendo}>
              {subiendo ? 'Subiendo…' : 'Subir comprobante'}
            </button>
          )}
        </form>
      </div>
    </main>
  );
}

function traducirError(status: number, body: any): string {
  if (status === 400) return body?.error ?? 'Faltan datos obligatorios.';
  if (status === 404) return 'La compra indicada no existe.';
  if (status === 409) return body?.error ?? 'No se puede registrar este pago (estado de la compra incompatible).';
  if (status === 413) return 'El archivo excede el tamaño máximo (5 MB).';
  if (status === 415) return body?.error ?? 'El archivo no es un JPG/PNG/PDF válido.';
  if (status >= 500) return 'Error interno del servidor. Intenta de nuevo.';
  return body?.error ?? `Error ${status}`;
}
