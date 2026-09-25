import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight, Heart, Share2 } from 'lucide-react';
import type { NewsItem } from '@/lib/news';
import { formatDate } from '@/lib/news';
import { useFavorites } from '@/hooks/use-favorites';

export function ArticleView({ item }: { item: NewsItem }) {
  const { ids, toggle } = useFavorites();
  const saved = ids.includes(item.id);
  const share = async () => {
    if (navigator.share) { try { await navigator.share({ title: item.title, url: window.location.href }); } catch { /* Cancelado por el usuario */ } }
    else if (navigator.clipboard) { await navigator.clipboard.writeText(window.location.href); window.alert('Enlace copiado al portapapeles.'); }
  };
  return <article className="article-page"><div className="article-heading section-wrap"><Link to="/noticias" className="back-link"><ArrowLeft size={16}/> Volver a noticias</Link><div className="article-heading-inner"><div className="article-meta"><span>{item.category}</span><span>{formatDate(item.created)}</span></div><h1>{item.title}</h1><p>{item.summary}</p><div className="article-actions"><button type="button" className={`button-dark ${saved ? 'article-saved' : ''}`} onClick={() => toggle(item.id)}><Heart size={18} fill={saved ? 'currentColor' : 'none'}/>{saved ? 'Guardado en favoritos' : 'Guardar en favoritos'}</button><button type="button" className="share-button" onClick={share}><Share2 size={18}/> Compartir</button></div></div></div><div className="article-image section-wrap"><img src={item.image || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80'} alt={item.title} width="1400" height="850" fetchPriority="high"/><span className="image-credit">JENNIFFER DUQUE NEWS / {item.category.toUpperCase()}</span></div><div className="article-body-wrap section-wrap"><aside className="article-aside"><span>LA HISTORIA</span><span>LECTURA · {Math.max(1, Math.ceil(item.body.length / 900))} MIN</span></aside><div className="article-body">{item.body.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}<div className="article-end"><span>FIN DE LA HISTORIA</span><Link to="/noticias">Explorar más noticias <ArrowUpRight size={17}/></Link></div></div></div></article>;
}
