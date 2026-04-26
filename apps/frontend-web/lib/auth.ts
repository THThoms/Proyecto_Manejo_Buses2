/**
 * SERVICIO DE AUTENTICACIÓN
 * Maneja las peticiones al backend y la persistencia del token en localStorage.
 */

const API_URL = 'http://localhost:3001';

export const authService = {
  /**
   * Realiza la petición de inicio de sesión al auth-api
   */
  async login(email: string, password: string) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error en la autenticación');
    }

    // Guardar el token en localStorage para persistencia de sesión
    if (typeof window !== 'undefined') {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('user', JSON.stringify(data.user));
    }

    return data;
  },

  /**
   * Elimina la sesión del usuario
   */
  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
    }
  },

  /**
   * Verifica si hay una sesión activa
   */
  isAuthenticated() {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('accessToken');
    }
    return false;
  }
};
