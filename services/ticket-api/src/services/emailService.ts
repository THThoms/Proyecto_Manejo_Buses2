// US23 — envío de emails vía SMTP (Nodemailer).
//
// Mantiene la interfaz original (enviarConfirmacion, enviarRechazo) que ya
// consumían los controllers de US12, y agrega:
//   - enviarAprobacion: usada al aprobar transferencia (envía el boleto).
//   - enviarResetPassword: usada por auth-api / forgot-password.
//
// Reglas:
//   1. Si SMTP_HOST falta o el envío falla, NO se propaga el error: el flujo
//      principal (compra/aprobación) sigue. Se loguea para diagnóstico.
//   2. No se imprimen tokens ni passwords completos en logs.
//   3. Si NODE_ENV='test', siempre forzamos modo stub para que jest no abra
//      conexiones SMTP reales.

import type { Transporter } from 'nodemailer';

let transporter: Transporter | null = null;
let configurado = false;

function getTransporter(): Transporter | null {
  if (configurado) return transporter;
  configurado = true;
  if (process.env.NODE_ENV === 'test') return null;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass || !Number.isFinite(port)) {
    console.log('[email] SMTP no configurado; usando modo stub (console.log).');
    return null;
  }
  try {
    // Carga diferida para evitar abrir el módulo en entornos sin la lib.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nodemailer = require('nodemailer');
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user, pass },
    });
    return transporter;
  } catch (err) {
    console.warn('[email] no se pudo iniciar nodemailer:', err);
    return null;
  }
}

interface MailMessage {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

async function send(msg: MailMessage): Promise<{ ok: boolean; stub: boolean }> {
  const t = getTransporter();
  const from = process.env.SMTP_FROM || 'TicketBus <no-reply@ticketbus.local>';
  if (!t) {
    console.log(`[email][stub] To=${msg.to} Subject="${msg.subject}"`);
    return { ok: true, stub: true };
  }
  try {
    await t.sendMail({ from, to: msg.to, subject: msg.subject, html: msg.html, text: msg.text });
    return { ok: true, stub: false };
  } catch (err) {
    console.error('[email] error SMTP (no bloquea flujo):', err);
    return { ok: false, stub: false };
  }
}

// Plantilla HTML base responsiva mínima.
function layout(titulo: string, cuerpoHtml: string): string {
  return `<!doctype html>
<html><body style="font-family: system-ui, sans-serif; background:#f9fafb; padding:20px; color:#1f2937;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:white;border:1px solid #e5e7eb;border-radius:10px;">
    <tr><td style="padding:20px;">
      <h2 style="margin:0 0 4px 0;color:#2563eb;">TicketBus</h2>
      <h3 style="margin:0 0 16px 0;color:#1f2937;">${titulo}</h3>
      ${cuerpoHtml}
      <p style="font-size:12px;color:#6b7280;margin-top:20px;">Este es un mensaje automático.</p>
    </td></tr>
  </table>
</body></html>`;
}

// =============================
// API pública (interfaz estable)
// =============================

/**
 * US12 / US10: confirmación de compra exitosa.
 * Hoy no recibe el email del pasajero (la tabla Compra no lo guarda), así que
 * solo envía si el caller pasa el destinatario. Compatible con la firma vieja
 * `enviarConfirmacion(compraId)`.
 */
export async function enviarConfirmacion(compraId: number, destinatario?: string): Promise<void> {
  if (!destinatario) {
    console.log(`[email][stub] Confirmación compra #${compraId} sin destinatario (US21 expondrá email).`);
    return;
  }
  await send({
    to: destinatario,
    subject: `Tu compra #${compraId} fue confirmada`,
    html: layout('Pago confirmado', `
      <p>Tu compra <strong>#${compraId}</strong> fue procesada correctamente.</p>
      <p>Podés ver tu boleto y descargarlo en la sección "Mi historial".</p>
    `),
  });
}

/**
 * US12 CA #2: notificación al pasajero de que su transferencia fue aprobada.
 * (Misma plantilla que confirmación; separamos para evolución independiente.)
 */
export async function enviarAprobacion(compraId: number, destinatario?: string): Promise<void> {
  if (!destinatario) {
    console.log(`[email][stub] Aprobación compra #${compraId} sin destinatario.`);
    return;
  }
  await send({
    to: destinatario,
    subject: `Transferencia aprobada · compra #${compraId}`,
    html: layout('Transferencia aprobada', `
      <p>Tu comprobante fue aprobado. Tu boleto está vigente.</p>
      <p>Compra: <strong>#${compraId}</strong>.</p>
    `),
  });
}

/**
 * US12 CA #3: rechazo de transferencia con motivo.
 */
export async function enviarRechazo(compraId: number, motivo: string, destinatario?: string): Promise<void> {
  if (!destinatario) {
    console.log(`[email][stub] Rechazo compra #${compraId}. Motivo="${motivo}" sin destinatario.`);
    return;
  }
  await send({
    to: destinatario,
    subject: `Tu transferencia fue rechazada · compra #${compraId}`,
    html: layout('Transferencia rechazada', `
      <p>Tu comprobante de la compra <strong>#${compraId}</strong> no pudo ser aprobado.</p>
      <p><strong>Motivo:</strong> ${escapeHtml(motivo)}</p>
      <p>Podés contactar a soporte si creés que hay un error.</p>
    `),
  });
}

/**
 * US21: email con link/token de reseteo. El token corto NO se loguea completo.
 */
export async function enviarResetPassword(destinatario: string, nombre: string, resetToken: string): Promise<void> {
  const linkBase = process.env.APP_PUBLIC_URL || 'http://localhost:3010';
  const link = `${linkBase}/reset-password?token=${encodeURIComponent(resetToken)}`;
  await send({
    to: destinatario,
    subject: 'Recuperación de contraseña · TicketBus',
    html: layout('Recuperación de contraseña', `
      <p>Hola ${escapeHtml(nombre)},</p>
      <p>Recibimos una solicitud para restablecer tu contraseña.</p>
      <p><a href="${link}" style="display:inline-block;background:#2563eb;color:white;padding:10px 16px;border-radius:6px;text-decoration:none;">Restablecer contraseña</a></p>
      <p style="font-size:12px;color:#6b7280;">Este enlace expira en 15 minutos. Si no fuiste vos, ignorá este mensaje.</p>
    `),
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
