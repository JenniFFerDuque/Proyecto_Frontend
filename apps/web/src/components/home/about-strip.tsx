import { Link } from 'react-router';
import { ArrowUpRight, Quote } from 'lucide-react';

export function AboutStrip() {
  return <section className="about-strip"><div className="about-inner"><div className="about-rail"><span>01 / NUESTRA MIRADA</span><span className="vertical-rule"/></div><div className="about-content"><Quote size={32} strokeWidth={1.2}/><h2>Creemos en el poder de una buena historia para abrir conversaciones y conectar personas.</h2><div className="about-foot"><p>Un lugar para informarte a tu ritmo, guardar lo que te inspira y encontrar nuevas perspectivas cada día.</p><Link to="/favoritos" className="text-link light-link">Tus favoritos <ArrowUpRight size={18}/></Link></div></div></div></section>;
}
