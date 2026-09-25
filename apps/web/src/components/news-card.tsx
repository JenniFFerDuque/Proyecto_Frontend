import { Link } from 'react-router';
import { ArrowUpRight, Heart } from 'lucide-react';
import type { NewsItem } from '@/lib/news';
import { formatDate } from '@/lib/news';
import { useFavorites } from '@/hooks/use-favorites';

export function NewsCard({ item, index = 0 }: { item: NewsItem; index?: number }) {
  const { ids, toggle } = useFavorites();
  const saved = ids.includes(item.id);
  return <article className="news-card"><Link to={`/noticias/${item.id}`} className="news-card-image"><img src={item.image || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80'} alt={item.title} loading="lazy" width="800" height="500"/><span className="image-index">{String(index + 1).padStart(2, '0')} / HISTORIA</span></Link><div className="news-card-content"><div className="card-meta"><span>{item.category}</span><span>{formatDate(item.created)}</span></div><h3><Link to={`/noticias/${item.id}`}>{item.title}</Link></h3><p>{item.summary}</p><div className="card-actions"><Link to={`/noticias/${item.id}`} className="read-link">Ver historia <ArrowUpRight size={17}/></Link><button type="button" className={`favorite-button ${saved ? 'saved' : ''}`} onClick={() => toggle(item.id)} aria-label={saved ? 'Quitar de favoritos' : 'Guardar en favoritos'} title={saved ? 'Quitar de favoritos' : 'Guardar en favoritos'}><Heart size={19} fill={saved ? 'currentColor' : 'none'}/></button></div></div></article>;
}
