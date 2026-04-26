'use client';

import React, { useState } from 'react';

/**
 * PANTALLA DE LOGIN
 * Implementa una interfaz premium con manejo de estado local para el formulario.
 */
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // La integración con el backend se realizará en el Commit 3
    console.log('Intento de login con:', { email, password });
    
    setTimeout(() => {
      setIsLoading(false);
      alert('Diseño verificado. En el siguiente commit conectaremos con el API.');
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <header className="login-header">
          <h1>Bienvenido</h1>
          <p>Gestiona tu flota de buses de forma inteligente</p>
        </header>

        <form onSubmit={handleSubmit}>
          {/* Campo de Email */}
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="nombre@empresa.com"
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
            {isLoading ? 'Iniciando sesión...' : 'Entrar al Sistema'}
          </button>
        </form>

        <footer className="login-footer">
          <p>¿Problemas para acceder? <a href="#">Contactar a Soporte</a></p>
        </footer>
      </div>
    </div>
  );
}
