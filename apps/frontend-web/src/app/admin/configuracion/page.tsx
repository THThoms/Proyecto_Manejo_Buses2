'use client';

// US22: panel de configuración visual y radio GPS.

import { useEffect, useState } from 'react';
import styles from './configuracion.module.css';

const BUS_API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://localhost:3002';

interface ConfigApp {
  id?: number;
  logoUrl: string | null;
  colorPrimario: string;
  colorSecundario: string;
  facebookUrl: string | null;
  instagramUrl: string | null;
  whatsapp: string | null;
  radioAlertaGpsKm: number;
  actualizadoEn?: string;
}

const DEFAULTS: ConfigApp = {
  logoUrl: null, colorPrimario: '#2563eb', colorSecundario: '#1f2937',
  facebookUrl: null, instagramUrl: null, whatsapp: null, radioAlertaGpsKm: 0.5,
};

export default function ConfiguracionAdminPage() {
  const [cfg, setCfg] = useState<ConfigApp>(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => { cargar(); }, []);

  const cargar = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BUS_API_URL}/config/app`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setCfg({ ...DEFAULTS, ...data });
      // Aplicar tema globalmente
      aplicarTema(data);
    } catch (e: any) {
      setErr(e?.message ?? 'Error cargando configuración');
    } finally {
      setLoading(false);
    }
  };

  const aplicarTema = (c: Partial<ConfigApp>) => {
    if (typeof document === 'undefined') return;
    if (c.colorPrimario) document.documentElement.style.setProperty('--color-primary', c.colorPrimario);
    if (c.colorSecundario) document.documentElement.style.setProperty('--color-secondary', c.colorSecundario);
  };

  const guardar = async () => {
    setSaving(true);
    setErr(null);
    setMsg(null);
    try {
      const res = await fetch(`${BUS_API_URL}/config/app`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-User-Role': 'ADMIN' },
        body: JSON.stringify(cfg),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.error ?? `HTTP ${res.status}`);
      setCfg({ ...DEFAULTS, ...body });
      aplicarTema(body);
      setMsg('Configuración guardada. Los cambios se aplican sin reiniciar.');
    } catch (e: any) {
      setErr(e?.message ?? 'Error guardando');
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className={styles.wrap}>
      <header className={styles.header}>
        <h1 className={styles.title}>Configuración de la app</h1>
        <p className={styles.subtitle}>Personaliza apariencia, redes y parámetros del sistema (US22).</p>
      </header>

      {loading && <p className={styles.note}>Cargando…</p>}

      {!loading && (
        <section className={styles.panel}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span>Logo (URL)</span>
              <input type="url" value={cfg.logoUrl ?? ''} placeholder="https://…/logo.png"
                onChange={(e) => setCfg({ ...cfg, logoUrl: e.target.value || null })} />
            </label>
          </div>

          <div className={styles.row2}>
            <label className={styles.field}>
              <span>Color primario (HEX)</span>
              <div className={styles.colorRow}>
                <input type="color" value={cfg.colorPrimario}
                  onChange={(e) => setCfg({ ...cfg, colorPrimario: e.target.value })} />
                <input type="text" value={cfg.colorPrimario} pattern="^#[0-9A-Fa-f]{6}$"
                  onChange={(e) => setCfg({ ...cfg, colorPrimario: e.target.value })} />
              </div>
            </label>
            <label className={styles.field}>
              <span>Color secundario (HEX)</span>
              <div className={styles.colorRow}>
                <input type="color" value={cfg.colorSecundario}
                  onChange={(e) => setCfg({ ...cfg, colorSecundario: e.target.value })} />
                <input type="text" value={cfg.colorSecundario} pattern="^#[0-9A-Fa-f]{6}$"
                  onChange={(e) => setCfg({ ...cfg, colorSecundario: e.target.value })} />
              </div>
            </label>
          </div>

          <div className={styles.row2}>
            <label className={styles.field}>
              <span>Facebook URL</span>
              <input type="url" value={cfg.facebookUrl ?? ''} placeholder="https://facebook.com/…"
                onChange={(e) => setCfg({ ...cfg, facebookUrl: e.target.value || null })} />
            </label>
            <label className={styles.field}>
              <span>Instagram URL</span>
              <input type="url" value={cfg.instagramUrl ?? ''} placeholder="https://instagram.com/…"
                onChange={(e) => setCfg({ ...cfg, instagramUrl: e.target.value || null })} />
            </label>
          </div>

          <div className={styles.row2}>
            <label className={styles.field}>
              <span>WhatsApp</span>
              <input type="tel" value={cfg.whatsapp ?? ''} placeholder="+593..."
                onChange={(e) => setCfg({ ...cfg, whatsapp: e.target.value || null })} />
            </label>
            <label className={styles.field}>
              <span>Radio GPS (km, mín 0.1)</span>
              <input type="number" step={0.1} min={0.1} max={50}
                value={cfg.radioAlertaGpsKm}
                onChange={(e) => setCfg({ ...cfg, radioAlertaGpsKm: Number(e.target.value) })} />
            </label>
          </div>

          <div className={styles.preview} style={{ borderColor: cfg.colorPrimario }}>
            <strong style={{ color: cfg.colorPrimario }}>Preview</strong>
            <p style={{ color: cfg.colorSecundario }}>
              Color primario {cfg.colorPrimario} / secundario {cfg.colorSecundario}.<br />
              Radio GPS actual: {cfg.radioAlertaGpsKm} km.
            </p>
          </div>

          <div className={styles.actions}>
            <button onClick={guardar} className={styles.primary} disabled={saving}>
              {saving ? 'Guardando…' : 'Guardar cambios'}
            </button>
          </div>

          {msg && <p className={styles.ok}>{msg}</p>}
          {err && <p className={styles.error}>{err}</p>}
        </section>
      )}
    </main>
  );
}
