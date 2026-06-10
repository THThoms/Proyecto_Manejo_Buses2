import type { Metadata } from 'next';
import GlobalNavbar from '@/components/GlobalNavbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Búsqueda de Rutas | Bus Manager',
  description: 'Encuentra y reserva tus rutas de autobús de forma fácil',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <GlobalNavbar />
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
