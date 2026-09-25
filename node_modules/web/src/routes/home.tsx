import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { getNews } from '@/lib/news.server';
import { Hero } from '@/components/home/hero';
import { LatestNews } from '@/components/home/latest-news';
import { AboutStrip } from '@/components/home/about-strip';
import { HomeCta } from '@/components/home/cta';

export async function loader() { return { news: await getNews() }; }

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {
    title: 'Jenniffer Duque News | Noticias de actualidad, cultura y contexto',
    description: 'Lee noticias de actualidad, cultura y vida cotidiana en Jenniffer Duque News. Contexto claro, historias cercanas y contenido que vale la pena leer.',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    jsonLd: { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Jenniffer Duque News', description: 'Noticias y relatos de actualidad, cultura y vida cotidiana.' },
  });
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return <main><Hero featured={loaderData.news[0]}/><LatestNews items={loaderData.news.slice(1)}/><AboutStrip/><HomeCta/></main>;
}
