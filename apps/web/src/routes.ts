import { type RouteConfig, index, route } from '@react-router/dev/routes';

/**
 * Registro EXPLÍCITO de todas las rutas del sitio.
 * React Router framework mode no usa rutas basadas en archivos: cada ruta
 * nueva debe añadirse aquí para que exista.
 *
 * Rutas públicas:
 *   /                  -> Inicio (hero + noticias destacadas + acerca de + CTA)
 *   /noticias          -> Catálogo con filtro por categoría y búsqueda
 *   /noticias/:id      -> Detalle (artículo completo) de una noticia
 *   /favoritos         -> Noticias guardadas en el navegador (localStorage)
 *   /gestion           -> Crear cuenta / iniciar sesión y publicar noticias
 *   /contacto          -> Formulario de contacto
 *
 * Rutas técnicas (SEO / API):
 *   /llms.txt, /rss.xml, /sitemap.xml, /robots.txt, /api/health, /api/*
 */
export default [
	index('routes/home.tsx'),
	route('noticias', 'routes/noticias.tsx'),
	route('noticias/:id', 'routes/noticia.tsx'),
	route('favoritos', 'routes/favoritos.tsx'),
	route('gestion', 'routes/gestion.tsx'),
	route('contacto', 'routes/contacto.tsx'),
	route('llms.txt', 'routes/llms.txt.ts'),
	route('rss.xml', 'routes/rss.xml.ts'),
	route('sitemap.xml', 'routes/sitemap.xml.ts'),
	route('robots.txt', 'routes/robots.txt.ts'),
	route('api/health', 'routes/api.health.ts'),
	route('api/*', 'routes/api.$.ts'),
] satisfies RouteConfig;
