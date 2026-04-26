import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Configuración de variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

// Middleware
app.use(cors());
app.use(express.json());

/**
 * MOCK DATABASE 
 * En una implementación real, esto se consultaría mediante Prisma
 */
const mockUser = {
  id: 1,
  nombre: 'Admin Usuario',
  email: 'admin@example.com',
  // Contraseña 'password123' hasheada
  passwordHash: '$2a$10$X79.N.Z3/pX0f7h3N5I2E.vGZp/2Y9z8n6.SjBfC.pG.mE.xH2y5G' 
};

/**
 * ENDPOINT: POST /auth/login
 * Maneja la autenticación de usuarios y generación de JWT
 */
app.post('/auth/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // 1. Validar si el usuario existe (Mock)
    if (email !== mockUser.email) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // 2. Comparar la contraseña con el hash almacenado
    const isPasswordValid = await bcrypt.compare(password, mockUser.passwordHash);
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // 3. Generar el token JWT
    const token = jwt.sign(
      { 
        userId: mockUser.id, 
        email: mockUser.email,
        role: 'ADMIN' 
      }, 
      JWT_SECRET, 
      { expiresIn: '8h' }
    );

    // 4. Responder con el token y datos básicos del usuario
    return res.status(200).json({
      accessToken: token,
      user: {
        id: mockUser.id,
        nombre: mockUser.nombre,
        email: mockUser.email
      }
    });

  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Auth API corriendo en http://localhost:${PORT}`);
});
