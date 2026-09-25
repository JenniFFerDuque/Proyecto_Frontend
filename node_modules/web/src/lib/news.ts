/**
 * Tipos y utilidades compartidas para las noticias.
 *
 * `NewsItem` refleja los campos de la colección `news` de PocketBase
 * (definida en apps/pocketbase/pb_migrations/1790255132_create_news_and_messages.js).
 * Se usa tanto en el cliente como en el servidor.
 */
export type NewsItem = {
  id: string;
  title: string;       // Título de la noticia (máx. 180 caracteres)
  category: string;    // Categoría: Ciudad, Cultura, Historias, Medio ambiente...
  summary: string;     // Resumen breve (máx. 350 caracteres)
  body: string;        // Cuerpo completo; los párrafos se separan con doble salto de línea
  image: string;       // URL de la imagen (opcional)
  owner: string;       // ID del usuario que creó la noticia
  created: string;     // Fecha de creación (ISO)
  updated: string;     // Fecha de última actualización (ISO)
};

/**
 * Formatea una fecha ISO en español de Colombia, por ejemplo "24 de septiembre de 2026".
 */
export function formatDate(value: string) {
  return new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(value));
}
