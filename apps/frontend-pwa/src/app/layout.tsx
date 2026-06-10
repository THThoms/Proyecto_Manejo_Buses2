import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PWA Chofer - Plataforma de Buses',
  description: 'PWA para choferes de buses',
  manifest: '/manifest.json',
};

import GlobalNavbar from '../components/GlobalNavbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <GlobalNavbar />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
