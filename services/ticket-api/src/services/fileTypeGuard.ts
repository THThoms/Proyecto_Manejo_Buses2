import fs from 'fs/promises';
import FileType from 'file-type';

const MIMES_REALES = new Set(['image/jpeg', 'image/png', 'application/pdf']);

export interface MagicBytesResult {
  ok: boolean;
  detectedMime?: string;
}

/**
 * US11: valida que el archivo recién subido sea realmente JPEG/PNG/PDF,
 * leyendo sus primeros bytes (magic bytes). Cierra el agujero del MIME spoofing.
 * Si no es válido, BORRA el archivo del disco para no dejar basura.
 */
export async function validarMagicBytes(rutaAbsoluta: string): Promise<MagicBytesResult> {
  const detectado = await FileType.fromFile(rutaAbsoluta);
  const detectedMime = detectado?.mime;

  if (!detectedMime || !MIMES_REALES.has(detectedMime)) {
    await fs.unlink(rutaAbsoluta).catch(() => {
      // Si no se pudo borrar (no existe, lock), seguimos. El test del filesystem
      // lo cubre en happy path.
    });
    return { ok: false, detectedMime };
  }

  return { ok: true, detectedMime };
}
