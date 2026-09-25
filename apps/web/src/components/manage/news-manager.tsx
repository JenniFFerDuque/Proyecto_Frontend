import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, CheckCircle2, LogOut, Plus, Trash2 } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import pb from '@/lib/pocketbase-client';
import type { NewsItem } from '@/lib/news';
import { formatDate } from '@/lib/news';

export function NewsManager() {
  const { user, isAuthed, isLoading, login, signup, logout } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loadingItems, setLoadingItems] = useState(false);
  useEffect(() => {
    if (!user?.id) { setItems([]); return; }
    let active = true;
    setLoadingItems(true);
    pb.collection('news').getFullList<NewsItem>({ filter: pb.filter('owner = {:id}', { id: user.id }), sort: '-created' })
      .then(records => { if (active) setItems(records); })
      .catch(() => { if (active) setError('No pudimos cargar tus noticias.'); })
      .finally(() => { if (active) setLoadingItems(false); });
    return () => { active = false; };
  }, [user?.id]);

  const authSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError(''); setBusy(true);
    const data = new FormData(event.currentTarget);
    const email = String(data.get('email')).trim();
    const password = String(data.get('password'));
    try {
      if (mode === 'signup') await signup(email, password, { name: String(data.get('name')).trim() });
      else await login(email, password);
      setNotice('Ya puedes gestionar tus noticias.');
    } catch { setError(mode === 'signup' ? 'No pudimos crear la cuenta. Revisa los datos o prueba con otro correo.' : 'Correo o contraseña incorrectos. Inténtalo de nuevo.'); }
    finally { setBusy(false); }
  };

  const create = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); if (!user) return;
    setBusy(true); setError(''); setNotice('');
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const record = await pb.collection('news').create<NewsItem>({ title: String(data.get('title')).trim(), category: String(data.get('category')).trim(), summary: String(data.get('summary')).trim(), body: String(data.get('body')).trim(), image: String(data.get('image')).trim(), owner: user.id });
      setItems(current => [record, ...current]); form.reset(); setNotice('Tu noticia se publicó correctamente.');
    } catch { setError('No pudimos publicar la noticia. Verifica los campos e inténtalo otra vez.'); }
    finally { setBusy(false); }
  };

  const remove = async (id: string) => {
    if (!window.confirm('¿Quieres eliminar esta noticia? Esta acción no se puede deshacer.')) return;
    setBusy(true); setError(''); setNotice('');
    try { await pb.collection('news').delete(id); setItems(current => current.filter(item => item.id !== id)); setNotice('La noticia se eliminó.'); }
    catch { setError('No pudimos eliminar la noticia. Inténtalo de nuevo.'); }
    finally { setBusy(false); }
  };

  if (isLoading) return <div className="manage-panel">Cargando tu espacio...</div>;
  if (!isAuthed) return <div className="auth-layout"><div className="auth-context"><span className="eyebrow"><span className="eyebrow-line"/> TU ESPACIO EDITORIAL</span><h2>Las historias<br/><em>empiezan aquí.</em></h2><p>Inicia sesión o crea una cuenta para publicar y gestionar tus propias noticias. Todos pueden leer lo que compartas.</p></div><div className="auth-box"><div className="auth-tabs"><button type="button" onClick={() => { setMode('login'); setError(''); }} className={mode === 'login' ? 'active' : ''}>Iniciar sesión</button><button type="button" onClick={() => { setMode('signup'); setError(''); }} className={mode === 'signup' ? 'active' : ''}>Crear cuenta</button></div><form onSubmit={authSubmit} className="stacked-form">{mode === 'signup' && <div className="form-field"><label htmlFor="auth-name">Tu nombre</label><input id="auth-name" name="name" required maxLength={100} placeholder="Nombre completo"/></div>}<div className="form-field"><label htmlFor="auth-email">Correo electrónico</label><input id="auth-email" name="email" type="email" required placeholder="tu@correo.com"/></div><div className="form-field"><label htmlFor="auth-password">Contraseña</label><input id="auth-password" name="password" type="password" required minLength={8} placeholder="Mínimo 8 caracteres"/></div>{error && <p className="form-error" role="alert">{error}</p>}<button type="submit" className="button-dark" disabled={busy}>{busy ? 'Un momento...' : mode === 'login' ? 'Entrar a mi espacio' : 'Crear mi cuenta'} <ArrowUpRight size={18}/></button></form></div></div>;
  return <div className="manage-layout"><div className="manage-top"><div><span className="eyebrow"><span className="eyebrow-line"/> TU ESPACIO EDITORIAL</span><h2>Publica una <em>historia.</em></h2><p>Comparte algo importante con la comunidad. Tus noticias aparecerán en el catálogo.</p></div><button type="button" className="logout-button" onClick={() => { logout(); setNotice(''); }}>Cerrar sesión <LogOut size={16}/></button></div><div className="manage-columns"><div className="manage-panel"><div className="panel-topline"><span>01 / NUEVA NOTICIA</span><Plus size={18}/></div><form onSubmit={create} className="stacked-form"><div className="form-field"><label htmlFor="news-title">Título *</label><input id="news-title" name="title" required maxLength={180} placeholder="El titular de tu historia"/></div><div className="form-field"><label htmlFor="news-category">Categoría *</label><input id="news-category" name="category" required maxLength={60} placeholder="Ej. Cultura, Ciudad..."/></div><div className="form-field"><label htmlFor="news-summary">Descripción breve *</label><textarea id="news-summary" name="summary" required maxLength={350} rows={3} placeholder="Un resumen para despertar la curiosidad"/></div><div className="form-field"><label htmlFor="news-body">Noticia completa *</label><textarea id="news-body" name="body" required minLength={30} rows={8} placeholder="Escribe tu historia aquí. Separa los párrafos con una línea en blanco."/></div><div className="form-field"><label htmlFor="news-image">URL de la imagen <span className="optional">(opcional)</span></label><input id="news-image" name="image" type="url" placeholder="https://ejemplo.com/imagen.jpg"/></div>{error && <p className="form-error" role="alert">{error}</p>}{notice && <p className="form-notice" role="status"><CheckCircle2 size={17}/>{notice}</p>}<button type="submit" className="button-dark" disabled={busy}>{busy ? 'Publicando...' : 'Publicar noticia'} <ArrowUpRight size={18}/></button></form></div><div className="manage-panel owned-panel"><div className="panel-topline"><span>02 / TUS PUBLICACIONES</span><span>{items.length.toString().padStart(2, '0')}</span></div>{loadingItems ? <p className="panel-empty">Cargando tus noticias...</p> : items.length ? <div className="owned-list">{items.map(item => <div className="owned-item" key={item.id}><div><span>{item.category} · {formatDate(item.created)}</span><h3><Link to={`/noticias/${item.id}`}>{item.title}</Link></h3></div><button type="button" disabled={busy} onClick={() => remove(item.id)} aria-label={`Eliminar ${item.title}`} title="Eliminar noticia"><Trash2 size={18}/></button></div>)}</div> : <div className="panel-empty"><p>Aún no has publicado noticias.</p><span>Tu primera historia puede comenzar hoy.</span></div>}</div></div></div>;
}
