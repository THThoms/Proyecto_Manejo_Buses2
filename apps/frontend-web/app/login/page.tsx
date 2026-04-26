'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '../../lib/auth';

/**
 * PANTALLA DE LOGIN
 * Implementa una interfaz premium conectada al backend mediante auth-api.
 */
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      /**
       * LLAMADA AL API
       * Envía las credenciales y espera el token JWT
       */
      await authService.login(email, password);
      
      // Si el login es exitoso, redirigimos al dashboard
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Error al intentar iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <header className="login-header">
          <h1>Bienvenido</h1>
          <p>Gestiona tu flota de buses de forma inteligente</p>
        </header>

        <form onSubmit={handleSubmit}>
          {/* Mensaje de Error */}
          {error && (
            <div style={{ color: '#ef4444', fontSize: '14px', marginBottom: '16px', textAlign: 'center' }}>
              {error}
            </div>
          )}

          {/* Campo de Email */}
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Campo de Contraseña */}
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Botón de Acción con estado de carga */}
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Verificando...' : 'Entrar al Sistema'}
          </button>
        </form>

        <footer className="login-footer">
          <p>¿Problemas para acceder? <a href="#">Contactar a Soporte</a></p>
        </footer>
      </div>
    </div>
  );
}
