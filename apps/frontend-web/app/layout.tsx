import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bus Manager - Acceso',
  description: 'Sistema de Gestión de Buses y Rutas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
