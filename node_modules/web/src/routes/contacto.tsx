import type { Route } from './+types/contacto';
import { seo } from '@/lib/seo';
import { ContactForm } from '@/components/contact/contact-form';

export function meta({ matches, location }: Route.MetaArgs) { return seo({ matches, location }, { title: 'Contacto | Jenniffer Duque News', description: '¿Tienes una historia, una pregunta o una idea para compartir? Escríbenos y hablamos.' }); }
export default function Contacto() { return <main><div className="contact-layout section-wrap"><div className="contact-intro"><span className="eyebrow"><span className="eyebrow-line"/> ESTAMOS EN CONTACTO</span><h1>Hablemos de<br/><em>tu historia.</em></h1><p>¿Tienes una idea, una pregunta o algo que quieras compartir? Me encantaría leerte.</p><div className="contact-note"><span>OTRA FORMA DE CONECTAR</span><a href="mailto:hola@jennifferduque.com">hola@jennifferduque.com</a></div></div><div className="contact-panel"><div className="contact-panel-heading"><span>01 / ESCRÍBENOS</span><span>RESPONDEMOS LO ANTES POSIBLE</span></div><h2>Déjanos un mensaje</h2><ContactForm/></div></div></main>; }
