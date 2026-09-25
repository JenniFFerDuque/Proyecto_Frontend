import type { Route } from './+types/llms.txt';
import { getNews } from '@/lib/news.server';
import { siteOrigin } from '@/lib/site-origin.server';

export async function loader({ request }: Route.LoaderArgs) {
  const origin = siteOrigin(request);
  const items = await getNews();
  const text = `# Jenniffer Duque News\n\n> Noticias de actualidad, cultura y contexto para seguir entendiendo lo que pasa.\n\n## Páginas\n- [Inicio](${origin}/): Portada con lo más reciente.\n- [Noticias](${origin}/noticias): Todas las noticias.\n- [Contacto](${origin}/contacto): Escribe con nosotros.\n${items.map(item => `- [${item.title}](${origin}/noticias/${item.id}): ${item.summary}`).join('\n')}\n`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
