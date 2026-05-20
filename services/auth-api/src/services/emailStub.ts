// US21: stub de envío de email para reset de contraseña.
// US23 reemplazará esto por SMTP real manteniendo la firma. Si US23 expone
// otro emailService, este archivo puede reexportar.

export interface ResetEmailParams {
  email: string;
  nombre: string;
  resetToken: string;
}

export async function enviarEmailReset(p: ResetEmailParams): Promise<void> {
  console.log(
    `[email][stub][auth] Reset para ${p.email} (${p.nombre}). Token: ${p.resetToken}. Pendiente US23.`,
  );
}
