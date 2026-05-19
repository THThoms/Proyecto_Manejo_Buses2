import QRCode from 'qrcode';

/**
 * US15 CA #2 y #5: el QR contiene únicamente el uuidQr del boleto.
 * Nada más. La cédula, nombre, precio y datos de pago se mantienen fuera
 * del QR para que un scan pueda hacerse en pantalla o impreso sin
 * exponer información sensible y para preservar legibilidad.
 *
 * El validador (US16) hará lookup contra el backend usando este UUID.
 */
export async function generarQrPng(uuidQr: string): Promise<Buffer> {
  return QRCode.toBuffer(uuidQr, {
    type: 'png',
    errorCorrectionLevel: 'M',
    margin: 2,
    width: 256,
  });
}
