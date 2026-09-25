import type { Route } from './+types/favoritos';
import { seo } from '@/lib/seo';
import { getNews } from '@/lib/news.server';
import { FavoritesList } from '@/components/favorites/favorites-list';
import { TechnologiesPanel } from '@/components/favorites/technologies-panel';

export async function loader() {
  return { news: await getNews() };
}

export function meta({ matches, location }: Route.MetaArgs) {
  return seo(
    { matches, location },
    {
      title: 'Mis favoritos | Jenniffer Duque News',
      description:
        'Encuentra las historias que salvaste para leer después. Tu lista personal queda en este navegador.',
      noindex: true,
    },
  );
}

export default function Favoritos({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      <div className="page-intro section-wrap">
        <span className="eyebrow">
          <span className="eyebrow-line" /> TU ESPACIO
        </span>
        <h1>
          Historias para
          <br />
          <em>volver a leer.</em>
        </h1>
        <p>
          Todo lo que guardaste, reunido en un solo lugar. Tus favoritos se
          almacenan localmente con localStorage y JSON.
        </p>
      </div>
      <FavoritesList items={loaderData.news} />
      <TechnologiesPanel />
    </main>
  );
}
