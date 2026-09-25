import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import type { NewsItem } from '@/lib/news';
import { NewsCard } from '@/components/news-card';

export function LatestNews({ items }: { items: NewsItem[] }) {
  return <section className="section-wrap latest-section"><div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line"/> PARA LEER HOY</span><h2>Lo que está<br/><em>pasando.</em></h2></div><div className="section-heading-side"><p>Una selección de historias para descubrir, reflexionar y compartir.</p><Link to="/noticias" className="text-link">Todas las noticias <ArrowUpRight size={18}/></Link></div></div><div className="news-grid">{items.slice(0, 3).map((item, index) => <NewsCard key={item.id} item={item} index={index}/>)}</div></section>;
}
