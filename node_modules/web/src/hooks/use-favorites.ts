import { useCallback, useEffect, useState } from 'react';

/**
 * Hook para gestionar las noticias favoritas del usuario en el NAVEGADOR.
 *
 * Los favoritos se guardan en `localStorage` con la clave
 * `jenniffer-duque-favoritos`, como un arreglo JSON de IDs de noticias.
 * Persisten entre sesiones y dispositivos solo dentro del mismo navegador.
 *
 * Expone:
 *   - ids:   arreglo de IDs guardados.
 *   - toggle(id): añade o quita un ID y avisa a otras pestañas.
 *
 * Se sincroniza entre pestañas escuchando el evento `storage` (nativo) y el
 * evento personalizado `favoritos-cambiados` (disparado por `toggle`).
 */
const KEY = 'jenniffer-duque-favoritos';

function readFavorites(): string[] {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : [];
  } catch { return []; }
}

export function useFavorites() {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => {
    setIds(readFavorites());
    const sync = () => setIds(readFavorites());
    window.addEventListener('storage', sync);
    window.addEventListener('favoritos-cambiados', sync);
    return () => { window.removeEventListener('storage', sync); window.removeEventListener('favoritos-cambiados', sync); };
  }, []);
  const toggle = useCallback((id: string) => {
    const current = readFavorites();
    const next = current.includes(id) ? current.filter(item => item !== id) : [...current, id];
    localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event('favoritos-cambiados'));
  }, []);
  return { ids, toggle };
}
