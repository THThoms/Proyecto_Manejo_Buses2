'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function PwaHome() {
  const [serviceWorkerActive, setServiceWorkerActive] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState<string>('default');
  const [alerts, setAlerts] = useState<Array<{ id: string; parada: string; distancia: number; timestamp: Date }>>([]);
  const [alertRadius] = useState(750);

  useEffect(() => {
    // Check Service Worker registration
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(() => {
        setServiceWorkerActive(true);
        checkNotificationPermission();
      });
    }
  }, []);

  const checkNotificationPermission = () => {
    if ('Notification' in window) {
      setPermissionStatus(Notification.permission);
      setNotificationsEnabled(Notification.permission === 'granted');
    }
  };

  const subscribeToPushNotifications = async () => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      alert('Push notifications no soportadas en este navegador');
      return;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      const permission = await Notification.requestPermission();
      
      if (permission === 'granted') {
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 'YOUR_VAPID_PUBLIC_KEY',
        });

        await fetch('/api/subscribe', {
          method: 'POST',
          body: JSON.stringify(subscription),
          headers: { 'Content-Type': 'application/json' },
        });

        setNotificationsEnabled(true);
        setPermissionStatus('granted');
        alert('¡Suscripción a notificaciones exitosa!');
      }
    } catch (error) {
      console.error('Error suscribiendo a notificaciones:', error);
      alert('Error al suscribirse a notificaciones');
    }
  };

  const simulateParadaAlert = () => {
    const newAlert = {
      id: Date.now().toString(),
      parada: 'Parada Centro - Calle Principal',
      distancia: Math.floor(Math.random() * 500) + 50,
      timestamp: new Date(),
    };
    setAlerts([newAlert, ...alerts]);
    
    // Simular notificación
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('¡El bus se acerca a tu parada!', {
        body: `${newAlert.parada} - Distancia: ${newAlert.distancia}m`,
        icon: '/default-icon.png',
      });
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>PWA Alertas de Paradas</h1>
        <p>Recibe notificaciones cuando el bus se acerque a tu parada</p>
      </header>

      <section className={styles.section}>
        <h2>Estado del Sistema</h2>
        <div className={styles.status}>
          <div className={styles.statusItem}>
            <span>Service Worker:</span>
            <span className={serviceWorkerActive ? styles.active : styles.inactive}>
              {serviceWorkerActive ? '✓ Activo' : '✗ Inactivo'}
            </span>
          </div>
          <div className={styles.statusItem}>
            <span>Notificaciones:</span>
            <span className={notificationsEnabled ? styles.active : styles.inactive}>
              {notificationsEnabled ? '✓ Habilitadas' : `✗ ${permissionStatus}`}
            </span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Configuración de Notificaciones</h2>
        <button 
          onClick={subscribeToPushNotifications}
          className={styles.button}
          disabled={notificationsEnabled}
        >
          {notificationsEnabled ? '✓ Notificaciones Habilitadas' : 'Habilitar Notificaciones'}
        </button>
        <p className={styles.hint}>
          Recibe alertas push cuando el bus esté a menos de {alertRadius}m de tu parada
        </p>
      </section>

      <section className={styles.section}>
        <h2>Mis Alertas</h2>
        <button 
          onClick={simulateParadaAlert}
          className={styles.buttonSecondary}
        >
          Simular Alerta de Parada (Demo)
        </button>
        
        {alerts.length > 0 ? (
          <div className={styles.alertsList}>
            {alerts.map((alert) => (
              <div key={alert.id} className={styles.alertItem}>
                <div className={styles.alertHeader}>
                  <h3>{alert.parada}</h3>
                  <span className={styles.time}>
                    {alert.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p>Distancia aproximada: <strong>{alert.distancia}m</strong></p>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.placeholder}>No hay alertas aún. Habilita las notificaciones para recibir alertas.</p>
        )}
      </section>

      <section className={styles.section}>
        <h2>Información</h2>
        <ul className={styles.infoList}>
          <li>✓ Notificaciones en tiempo real cuando el bus se acerca</li>
          <li>✓ Funciona en segundo plano, incluso sin conexión activa</li>
          <li>✓ Una alerta única por parada por viaje</li>
          <li>✓ Radio de alerta configurable por administrador</li>
        </ul>
      </section>
    </div>
  );
}
