import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-top"><div><Link to="/" className="footer-brand">Jenniffer Duque News<span>.</span></Link><p>Notas de ciudad, cultura y vida cotidiana.<br/>Historias cercanas, claras y bien contadas.</p></div><div className="footer-links"><div><span className="footer-label">EXPLORA</span><Link to="/noticias">Noticias</Link><Link to="/favoritos">Favoritos</Link><Link to="/gestion">Publicar noticia</Link></div><div><span className="footer-label">CONECTEMOS</span><Link to="/contacto">Contacto <ArrowUpRight size={14}/></Link><a href="mailto:hola@jennifferduque.com">hola@jennifferduque.com</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Jenniffer Duque News. Todos los derechos reservados.</span><span>NOTAS QUE SE QUEDAN</span></div></footer>;
}
