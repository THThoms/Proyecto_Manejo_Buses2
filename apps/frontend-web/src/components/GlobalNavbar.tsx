'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { getUser, clearSession } from '@/lib/auth';
import styles from './GlobalNavbar.module.css';

export default function GlobalNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Escuchar cambios de sesión localmente
    const checkSession = () => {
      const user = getUser();
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.nombre ?? user.email ?? '');
        setUserRole((user.roles?.[0]) ?? null);
      } else {
        setIsLoggedIn(false);
        setUserName('');
        setUserRole(null);
      }
    };
    
    checkSession();
    // Para detectar cuando se hace login/logout en otra pestaña o en la misma app
    window.addEventListener('storage', checkSession);
    return () => window.removeEventListener('storage', checkSession);
  }, [pathname]); // Re-evaluar al cambiar de ruta

  const handleLogout = () => {
    clearSession();
    setIsLoggedIn(false);
    router.push('/login');
  };

  const isHome = pathname === '/';
  const isLoginOrRegister = pathname === '/login' || pathname === '/registro';

  if (isLoginOrRegister) {
    return null; // No mostrar navbar en login/registro
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        {!isHome && (
          <button onClick={() => router.back()} className={styles.backBtn}>
            ← Regresar
          </button>
        )}
        <Link href="/" className={styles.brand}>
          🚌 BusManager
        </Link>
      </div>

      <div className={styles.right}>
        {isLoggedIn ? (
          <>
            <span className={styles.userName}>👤 {userName}</span>
            {userRole === 'ADMIN' && <Link href="/admin" className={styles.linkBtn}>Panel Admin</Link>}
            {userRole === 'OFICINISTA' && <Link href="/oficinista/cobrar" className={styles.linkBtn}>Caja</Link>}
            {(!userRole || userRole === 'PASAJERO') && <Link href="/historial" className={styles.linkBtn}>Mis Viajes</Link>}
            
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className={styles.linkBtn}>Iniciar sesión</Link>
            <Link href="/registro" className={styles.registerBtn}>Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}
