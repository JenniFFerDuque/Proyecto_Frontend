import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import type { NewsItem } from '@/lib/news';
import { NewsCard } from '@/components/news-card';
import { useFavorites } from '@/hooks/use-favorites';
import { useSessionStorage } from '@/hooks/use-session-storage';

type SessionActivity = {
  visits: number;
  lastVisit: string;
  viewed: string[];
};

const SESSION_KEY = 'jenniffer-duque-favoritos-sesion';
const INITIAL: SessionActivity = { visits: 0, lastVisit: '', viewed: [] };

export function FavoritesList({ items }: { items: NewsItem[] }) {
  const { ids } = useFavorites();
  const favorites = items.filter((item) => ids.includes(item.id));
  const [activity, setActivity] = useSessionStorage<SessionActivity>(
    SESSION_KEY,
    INITIAL,
  );

  // Registra la visita y los favoritos vistos en esta sesión (sessionStorage).
  useEffect(() => {
    const now = new Date().toISOString();
    const viewed = favorites.map((item) => item.id);
    setActivity({
      visits: activity.visits + 1,
      lastVisit: now,
      viewed,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')]);

  return (
    <>
      <section className="section-wrap favorites-section">
        <div className="results-meta">
          <span>
            {favorites.length}{' '}
            {favorites.length === 1
              ? 'HISTORIA GUARDADA'
              : 'HISTORIAS GUARDADAS'}
          </span>
          <span>TU SELECCIÓN PERSONAL</span>
        </div>

        {favorites.length ? (
          <div className="news-grid">
            {favorites.map((item, index) => (
              <NewsCard key={item.id} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>Aún no tienes favoritos.</h2>
            <p>
              Guarda las noticias que quieras volver a leer. Tu selección se
              conserva en este navegador.
            </p>
            <Link to="/noticias" className="button-dark">
              Explorar noticias <ArrowUpRight size={18} />
            </Link>
          </div>
        )}
      </section>

      <section className="section-wrap" style={{ paddingTop: 0 }}>
        <div
          className="news-card"
          style={{ background: '#eef5f8', borderColor: 'var(--line)' }}
        >
          <div
            className="news-card-content"
            style={{ padding: '26px 28px' }}
          >
            <div className="card-meta">
              <span>SESIÓN ACTUAL</span>
              <span>sessionStorage · JSON</span>
            </div>
            <h3
              style={{
                fontSize: 22,
                margin: '18px 0 10px',
                lineHeight: 1.2,
              }}
            >
              {activity.visits}{' '}
              {activity.visits === 1 ? 'vista' : 'vistas'} en esta sesión
            </h3>
            <p style={{ fontSize: 12, lineHeight: 1.8, marginBottom: 0 }}>
              {activity.viewed.length > 0
                ? `Estás revisando ${activity.viewed.length} ${activity.viewed.length === 1 ? 'historia guardada' : 'historias guardadas'}. Este registro vive solo mientras mantengas abierta esta pestaña.`
                : 'Tus favoritos se guardan con localStorage y persisten entre sesiones; este panel se reinicia al cerrar la pestaña.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
