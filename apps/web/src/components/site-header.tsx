import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/noticias', label: 'Noticias' },
  { to: '/favoritos', label: 'Favoritos' },
  { to: '/gestion', label: 'Publicar' },
  { to: '/contacto', label: 'Contacto' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="site-header-inner">
      <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Jenniffer Duque News, inicio"><span className="brand-mark">JD<span className="brand-dot">.</span></span><span className="brand-name">JENNIFFER<br/>DUQUE<br/>NEWS</span></Link>
      <nav className="desktop-nav" aria-label="Navegación principal">{links.map(link => <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{link.label}</NavLink>)}</nav>
      <Link to="/contacto" className="header-action">Hablemos <ArrowUpRight size={16}/></Link>
      <button className="mobile-menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>{open ? <X size={24}/> : <Menu size={24}/>}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Navegación móvil">{links.map(link => <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setOpen(false)} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>{link.label}<ArrowUpRight size={17}/></NavLink>)}</nav>}
  </header>;
}
