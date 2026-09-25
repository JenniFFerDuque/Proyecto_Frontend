import type { Route } from './+types/gestion';
import { seo } from '@/lib/seo';
import { NewsManager } from '@/components/manage/news-manager';

export function meta({ matches, location }: Route.MetaArgs) { return seo({ matches, location }, { title: 'Publicar noticias | Jenniffer Duque News', description: 'Crea una cuenta para publicar historias y gestionar contenido en Jenniffer Duque News.', noindex: true }); }
export default function Gestion() { return <main><div className="page-intro section-wrap compact-intro"><span className="eyebrow"><span className="eyebrow-line"/> COMPARTE TU VOZ</span><h1>Tu espacio para<br/><em>contar.</em></h1></div><section className="section-wrap manager-section"><NewsManager/></section></main>; }
