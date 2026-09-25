import { useCallback, useEffect, useState } from 'react';

/**
 * Hook genérico para sessionStorage.
 * Persiste un valor JSON solo durante la sesión actual del navegador:
 * se borra al cerrar la pestaña, a diferencia de localStorage.
 */
export function useSessionStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(key);
      if (raw !== null) setValue(JSON.parse(raw) as T);
    } catch {
      setValue(initialValue);
    }
    const sync = () => {
      try {
        const raw = sessionStorage.getItem(key);
        if (raw !== null) setValue(JSON.parse(raw) as T);
      } catch {
        /* ignore */
      }
    };
    window.addEventListener('session-cambiado', sync);
    return () => window.removeEventListener('session-cambiado', sync);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = useCallback(
    (next: T) => {
      setValue(next);
      try {
        sessionStorage.setItem(key, JSON.stringify(next));
        window.dispatchEvent(new Event('session-cambiado'));
      } catch {
        /* ignore */
      }
    },
    [key],
  );

  return [value, update] as const;
}
