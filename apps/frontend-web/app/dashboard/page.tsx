'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '../../lib/auth';

/**
 * PÁGINA DE DASHBOARD (Protegida)
 * Verifica que el usuario tenga un token válido antes de mostrar el contenido.
 */
export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Redirigir al login si no está autenticado
    if (!authService.isAuthenticated()) {
      router.push('/login');
      return;
    }

    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [router]);

  const handleLogout = () => {
    authService.logout();
    router.push('/login');
  };

  if (!user) return <div className="login-container">Cargando...</div>;

  return (
    <div className="login-container">
      <div className="login-card" style={{ maxWidth: '600px' }}>
        <header className="login-header">
          <h1>¡Bienvenido, {user.nombre}!</h1>
          <p>Has iniciado sesión correctamente con JWT.</p>
        </header>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p style={{ color: 'var(--text-muted)' }}>Tu correo es: <strong>{user.email}</strong></p>
        </div>

        <button onClick={handleLogout} className="login-button" style={{ background: '#ef4444' }}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
