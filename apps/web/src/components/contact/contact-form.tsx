import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import pb from '@/lib/pocketbase-client';

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError(''); setSending(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      await pb.collection('contact_messages').create({ name: String(data.get('name')).trim(), email: String(data.get('email')).trim(), message: String(data.get('message')).trim() });
      setSuccess(true); form.reset();
    } catch { setError('No pudimos enviar tu mensaje. Inténtalo de nuevo.'); }
    finally { setSending(false); }
  };
  if (success) return <div className="form-success" role="status"><CheckCircle2 size={38}/><h2>¡Mensaje enviado!</h2><p>Gracias por escribirnos. Hemos recibido tu mensaje y pronto nos pondremos en contacto.</p><button type="button" className="text-link" onClick={() => setSuccess(false)}>Enviar otro mensaje <ArrowUpRight size={17}/></button></div>;
  return <form className="contact-form" onSubmit={submit}><div className="form-field"><label htmlFor="contact-name">Tu nombre <span>*</span></label><input id="contact-name" name="name" required maxLength={120} placeholder="¿Cómo te llamas?"/></div><div className="form-field"><label htmlFor="contact-email">Correo electrónico <span>*</span></label><input id="contact-email" name="email" type="email" required placeholder="tu@correo.com"/></div><div className="form-field"><label htmlFor="contact-message">Tu mensaje <span>*</span></label><textarea id="contact-message" name="message" required minLength={10} maxLength={3000} rows={6} placeholder="Cuéntanos qué tienes en mente..."/></div>{error && <p className="form-error" role="alert">{error}</p>}<button type="submit" className="button-dark" disabled={sending}>{sending ? 'Enviando...' : 'Enviar mensaje'} <ArrowUpRight size={18}/></button><p className="form-note">* Campos obligatorios</p></form>;
}
