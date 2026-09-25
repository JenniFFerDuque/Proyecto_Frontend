import type { Route } from './+types/noticias';
import { seo } from '@/lib/seo';
import { getNews } from '@/lib/news.server';
import { NewsList } from '@/components/news/news-list';

export async function loader() { return { news: await getNews() }; }
export function meta({ matches, location }: Route.MetaArgs) { return seo({ matches, location }, { title: 'Noticias | Jenniffer Duque News', description: 'Explora las noticias de Jenniffer Duque News: actualidad, cultura, contexto y historias que vale la pena leer.', jsonLd: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Noticias de Jenniffer Duque News' } }); }
export default function Noticias({ loaderData }: Route.ComponentProps) { return <main><div className="page-intro section-wrap"><span className="eyebrow"><span className="eyebrow-line"/> EL ARCHIVO</span><h1>Historias para<br/><em>descubrir.</em></h1><p>Noticias claras, cercanas y con contexto para seguir entendiendo lo que pasa.</p></div><NewsList items={loaderData.news}/></main>; }
