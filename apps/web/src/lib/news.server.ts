/**
 * Lectura de noticias desde el SERVIDOR (loaders / actions de React Router).
 *
 * Estos helpers hablan con la API REST de PocketBase por `fetch` y solo deben
 * usarse en código del servidor (por eso el sufijo `.server.ts`). Nunca los
 * importes desde un componente del navegador: ahí se usa el SDK de PocketBase
 * directamente (ver `src/lib/pocketbase-client.ts`).
 */
import type { NewsItem } from '@/lib/news';

// URL de PocketBase; en local es http://localhost:8090.
// Se puede sobreescribir con la variable de entorno POCKETBASE_URL en apps/web/.env
const baseUrl = process.env.POCKETBASE_URL || 'http://localhost:8090';

/**
 * Devuelve todas las noticias, ordenadas de la más reciente a la más antigua.
 * Se usa en el inicio, el catálogo, el sitemap, el RSS y el llms.txt.
 */
export async function getNews(): Promise<NewsItem[]> {
  const response = await fetch(`${baseUrl}/api/collections/news/records?perPage=100&sort=-created`);
  if (!response.ok) throw new Error(`No se pudieron cargar las noticias: ${response.status} ${response.statusText}`);
  const data = await response.json() as { items: NewsItem[] };
  return data.items;
}

/**
 * Devuelve una noticia por su ID, o `null` si no existe (404).
 * Se usa en la página de detalle de noticia (/noticias/:id).
 */
export async function getNewsItem(id: string): Promise<NewsItem | null> {
  const response = await fetch(`${baseUrl}/api/collections/news/records/${encodeURIComponent(id)}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`No se pudo cargar la noticia: ${response.status} ${response.statusText}`);
  return response.json() as Promise<NewsItem>;
}
