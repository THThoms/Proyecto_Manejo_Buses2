'use client';

import React, { useState, useEffect } from 'react';

interface CobroOffline {
  compraId: number;
  montoRecibido: number;
  offlineId: string;
  status: 'PENDIENTE' | 'SINCRO_ERROR';
}

export default function ChoferCobrarPage() {
  const [isOnline, setIsOnline] = useState(true);
  const [compraId, setCompraId] = useState('');
  const [montoRecibido, setMontoRecibido] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cambio, setCambio] = useState<number | null>(null);
  const [pendientes, setPendientes] = useState<CobroOffline[]>([]);

  useEffect(() => {
    // Inicializar estado online y pendientes
    setIsOnline(navigator.onLine);
    const handleOnline = () => {
      setIsOnline(true);
      sincronizarPendientes();
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    cargarPendientes();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const cargarPendientes = () => {
    const data = localStorage.getItem('cobros_pendientes');
    if (data) {
      setPendientes(JSON.parse(data));
    }
  };

  const guardarPendientes = (lista: CobroOffline[]) => {
    localStorage.setItem('cobros_pendientes', JSON.stringify(lista));
    setPendientes(lista);
  };

  const generarUuid = () => {
    return crypto.randomUUID();
  };

  const sincronizarPendientes = async () => {
    const data = localStorage.getItem('cobros_pendientes');
    if (!data) return;
    let lista: CobroOffline[] = JSON.parse(data);

    for (let i = 0; i < lista.length; i++) {
      const item = lista[i];
      if (item.status === 'PENDIENTE' || item.status === 'SINCRO_ERROR') {
        try {
          const res = await fetch('http://localhost:3003/pagos/efectivo/bus', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-user-role': 'CHOFER',
              'x-user-id': '1',
            },
            body: JSON.stringify({
              compraId: item.compraId,
              montoRecibido: item.montoRecibido,
              offlineId: item.offlineId,
            }),
          });
          if (res.ok) {
            // Sincronizado, lo removemos de la lista (o marcamos como listo)
            lista = lista.filter((_, index) => index !== i);
            i--; // ajustar índice por elemento removido
          } else {
            lista[i].status = 'SINCRO_ERROR';
          }
        } catch (err) {
          lista[i].status = 'SINCRO_ERROR';
        }
      }
    }
    guardarPendientes(lista);
  };

  const procesarCobro = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje('');
    setCambio(null);

    const cId = parseInt(compraId, 10);
    const monto = parseFloat(montoRecibido);
    const offlineId = generarUuid();

    if (isNaN(cId) || isNaN(monto)) {
      setMensaje('Valores inválidos.');
      return;
    }

    if (!isOnline) {
      // Modo Offline: Guardar en localStorage
      const nuevoCobro: CobroOffline = {
        compraId: cId,
        montoRecibido: monto,
        offlineId,
        status: 'PENDIENTE',
      };
      guardarPendientes([...pendientes, nuevoCobro]);
      setMensaje('Sin conexión: cobro guardado en cola pendiente.');
      setCompraId('');
      setMontoRecibido('');
      return;
    }

    // Modo Online: Petición real
    try {
      const res = await fetch('http://localhost:3003/pagos/efectivo/bus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'CHOFER',
          'x-user-id': '1',
        },
        body: JSON.stringify({
          compraId: cId,
          montoRecibido: monto,
          offlineId,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setMensaje(`Cobro registrado. ${data.isIdempotent ? '(Ya estaba sincronizado)' : ''}`);
        setCambio(data.cambio);
        setCompraId('');
        setMontoRecibido('');
      } else {
        setMensaje(data.error || 'Error al procesar el cobro.');
      }
    } catch (error) {
      setMensaje('Error de red al cobrar.');
      // En un escenario real, si falla la red en el envío, podríamos guardarlo offline también.
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Cobrar Efectivo (Bus)</h1>
      <div style={{ padding: '10px', backgroundColor: isOnline ? '#d4edda' : '#f8d7da', marginBottom: '20px' }}>
        <strong>Estado de red:</strong> {isOnline ? 'Online 🟢' : 'Offline 🔴'}
      </div>

      <form onSubmit={procesarCobro} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <label>
          ID de Compra:
          <input
            type="number"
            value={compraId}
            onChange={(e) => setCompraId(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </label>
        <label>
          Monto Recibido ($):
          <input
            type="number"
            step="0.01"
            value={montoRecibido}
            onChange={(e) => setMontoRecibido(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </label>
        <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Cobrar
        </button>
      </form>

      {mensaje && (
        <div style={{ marginTop: '20px', padding: '10px', background: '#e2e3e5' }}>
          <p>{mensaje}</p>
          {cambio !== null && <p><strong>Cambio a devolver:</strong> ${cambio.toFixed(2)}</p>}
        </div>
      )}

      {pendientes.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h2>Cobros Pendientes ({pendientes.length})</h2>
          <ul>
            {pendientes.map((p, i) => (
              <li key={i}>
                Compra #{p.compraId} - Monto: ${p.montoRecibido} - Estado: {p.status}
              </li>
            ))}
          </ul>
          {isOnline && (
            <button onClick={sincronizarPendientes} style={{ padding: '8px', background: '#28a745', color: 'white' }}>
              Forzar Sincronización
            </button>
          )}
        </div>
      )}
    </div>
  );
}
