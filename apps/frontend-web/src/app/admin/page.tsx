'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { clearSession } from '@/lib/auth';
import styles from './admin.module.css';

const API_URL = process.env.NEXT_PUBLIC_BUS_API_URL || 'http://127.0.0.1:3002';

type Tab = 'cooperativas' | 'buses' | 'rutas' | 'turnos';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('cooperativas');
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const endpoint = activeTab === 'turnos' ? 'turnos' : activeTab;
      const res = await fetch(`${API_URL}/${endpoint}`);
      const json = await res.json();
      setData(Array.isArray(json) ? json : []);
    } catch (error) {
      console.error('Error fetching admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerarTurnos = async () => {
    const fecha = new Date().toISOString().split('T')[0];
    try {
      const res = await fetch(`${API_URL}/turnos/generar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fecha }),
      });
      if (res.ok) {
        alert('Turnos generados automáticamente para hoy.');
        fetchData();
      }
    } catch (error) {
      alert('Error al generar turnos.');
    }
  };

  const handleLogout = () => {
    clearSession();
    router.push('/login');
  };

  return (
    <div className={styles.adminContainer}>
      <header className={styles.header}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 className={styles.title}>Panel de Administración</h1>
            <p className={styles.subtitle}>Gestión de flota, rutas y logística (Sprint 1)</p>
          </div>
          <button
            onClick={handleLogout}
            style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '8px', color: 'white', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}
          >
            Cerrar sesión
          </button>
        </div>
        <div style={{ marginTop: '14px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/admin/reportes">Ir a reportes administrativos</a>
          <a href="/admin/liquidaciones">Ir a liquidaciones mensuales</a>
        </div>
      </header>

      <nav className={styles.tabs}>
        {(['cooperativas', 'buses', 'rutas', 'turnos'] as Tab[]).map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <main className={styles.content}>
        <div className={styles.actions}>
          <h2 className={styles.contentTitle}>Listado de {activeTab}</h2>
          {activeTab === 'turnos' && (
            <button className={styles.actionButton} onClick={handleGenerarTurnos}>
              ⚡ Generar Turnos Automáticos (US05)
            </button>
          )}
          <button className={styles.addButton}>+ Nuevo {activeTab.slice(0, -1)}</button>
        </div>

        {loading ? (
          <div className={styles.loader}>Cargando datos...</div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {activeTab === 'turnos' ? (
                    <>
                      <th>ID</th>
                      <th>BUS</th>
                      <th>RUTA</th>
                      <th>FECHA / HORA</th>
                      <th>ESTADO</th>
                      <th>GPS EN VIVO</th>
                    </>
                  ) : (
                    data.length > 0 && Object.keys(data[0]).filter(k => k !== 'id' && typeof data[0][k] !== 'object').map(key => (
                      <th key={key}>{key.toUpperCase()}</th>
                    ))
                  )}
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={item.id || idx}>
                    {activeTab === 'turnos' ? (
                      <>
                        <td>{item.id}</td>
                        <td>{item.bus ? `${item.bus.placa} (${item.bus.marca})` : '—'}</td>
                        <td>{item.ruta ? item.ruta.nombre : '—'}</td>
                        <td>{item.fecha ? new Date(item.fecha).toLocaleDateString() : '—'} · {item.horaInicio}</td>
                        <td>
                          <span className={`${styles.statusTag} ${item.estado === 'EN_RUTA' ? styles.statusEnRuta : ''}`}>
                            {item.estado}
                          </span>
                        </td>
                        <td>
                          {item.latActual && item.lngActual ? (
                            <span className={styles.gpsActive}>
                              📍 {Number(item.latActual).toFixed(6)}, {Number(item.lngActual).toFixed(6)}
                            </span>
                          ) : (
                            <span className={styles.gpsInactive}>💤 Sin señal GPS</span>
                          )}
                        </td>
                      </>
                    ) : (
                      Object.keys(item).filter(k => k !== 'id' && typeof item[k] !== 'object').map(key => (
                        <td key={key}>{String(item[key])}</td>
                      ))
                    )}
                    <td>
                      <button className={styles.editBtn}>Editar</button>
                      <button className={styles.deleteBtn}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.length === 0 && <p className={styles.empty}>No hay registros encontrados.</p>}
          </div>
        )}
      </main>
    </div>
  );
}
