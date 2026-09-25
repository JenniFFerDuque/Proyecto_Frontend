import type { Route } from './+types/noticia';
import { seo } from '@/lib/seo';
import { getNewsItem } from '@/lib/news.server';
import { ArticleView } from '@/components/news/article-view';

export async function loader({ params }: Route.LoaderArgs) { const item = await getNewsItem(params.id); if (!item) throw new Response('Noticia no encontrada', { status: 404 }); return { item }; }
export function meta({ matches, location, loaderData }: Route.MetaArgs) {
  if (!loaderData) return seo({ matches, location }, { title: 'Noticia no encontrada | Jenniffer Duque News', description: 'La noticia que buscas ya no está disponible.', noindex: true });
  const { item } = loaderData;
  return seo({ matches, location }, { title: `${item.title} | Jenniffer Duque News`, description: item.summary, image: item.image, type: 'article', jsonLd: { '@context': 'https://schema.org', '@type': 'Article', headline: item.title, description: item.summary, image: item.image, datePublished: item.created, dateModified: item.updated, author: { '@type': 'Organization', name: 'Jenniffer Duque News' } } });
}
export default function Noticia({ loaderData }: Route.ComponentProps) { return <main><ArticleView item={loaderData.item}/></main>; }
