import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

export function HomeCta() {
  return <section className="home-cta section-wrap"><span className="eyebrow"><span className="eyebrow-line"/> SIGAMOS LA CONVERSACIÓN</span><div className="home-cta-row"><h2>¿Tienes algo<br/><em>que contar?</em></h2><div><p>Nos encantan las ideas, las preguntas y las historias que vale la pena compartir.</p><Link to="/contacto" className="button-dark">Escríbenos <ArrowUpRight size={19}/></Link></div></div></section>;
}
