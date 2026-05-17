/**
 * US12 — Stub de envío de email.
 *
 * Decisión E1: NO se instala Nodemailer todavía. US23 reemplazará estas funciones
 * por envíos reales vía SMTP. La interfaz se mantiene estable para que ese cambio
 * no toque controllers ni tests fuera de este módulo.
 */

export async function enviarConfirmacion(compraId: number): Promise<void> {
  console.log(
    `[email][stub] Confirmación de compra #${compraId}: boleto VIGENTE. Pendiente integración SMTP (US23).`
  );
}

export async function enviarRechazo(compraId: number, motivo: string): Promise<void> {
  console.log(
    `[email][stub] Rechazo de compra #${compraId}. Motivo: "${motivo}". Pendiente integración SMTP (US23).`
  );
}
