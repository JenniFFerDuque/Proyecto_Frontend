import type { Route } from './+types/rss.xml';
import { getNews } from '@/lib/news.server';
import { siteOrigin } from '@/lib/site-origin.server';

const escapeXml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
export async function loader({ request }: Route.LoaderArgs) {
  const origin = siteOrigin(request);
  const news = await getNews();
  const items = news.map(item => `<item><title>${escapeXml(item.title)}</title><link>${origin}/noticias/${item.id}</link><guid>${origin}/noticias/${item.id}</guid><description>${escapeXml(item.summary)}</description><pubDate>${new Date(item.created).toUTCString()}</pubDate></item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Jenniffer Duque News</title><link>${origin}/noticias</link><description>Noticias de actualidad, cultura y contexto.</description><language>es</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
