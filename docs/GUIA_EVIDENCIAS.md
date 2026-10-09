# Guía de evidencias del proyecto

Esta guía permite encontrar rápidamente en el código las evidencias de
estructura, HTML, CSS, JavaScript y renderizado dinámico. La aplicación está
construida con React y TypeScript: el marcado HTML se escribe como JSX, y el
servidor obtiene los datos JSON de PocketBase antes de enviarlos a las páginas.

## 1. Código estructurado

La aplicación web separa responsabilidades por tipo de archivo:

| Carpeta o archivo | Responsabilidad |
| --- | --- |
| `apps/web/src/routes/` | Define las páginas y carga los datos de cada ruta. |
| `apps/web/src/components/` | Contiene componentes de interfaz reutilizables. |
| `apps/web/src/hooks/` | Agrupa lógica reutilizable de estado del navegador. |
| `apps/web/src/lib/` | Contiene tipos, clientes y funciones de acceso a datos. |
| `apps/web/src/index.css` | Define los estilos visuales globales y responsivos. |
| `apps/pocketbase/pb_migrations/` | Define las colecciones de la base de datos. |

Por ejemplo, la página de noticias obtiene los datos en su `loader` y delega
la presentación y los filtros a `NewsList`. Cada tarjeta se representa con el
componente reutilizable `NewsCard`.

## 2. HTML semántico

El documento HTML base se configura en `apps/web/src/root.tsx`: declara
`<html lang="es">`, `<head>` y `<body>`. Las páginas y componentes escriben
marcado JSX con elementos semánticos como `<main>`, `<section>`, `<article>`,
`<h1>`, `<h2>`, `<p>`, `<a>` y `<button>`. React convierte ese JSX en HTML
cuando renderiza la página.

Archivos para revisar:

- `apps/web/src/root.tsx` — estructura del documento.
- `apps/web/src/routes/noticias.tsx` — estructura semántica de la página del
  catálogo.
- `apps/web/src/components/news-card.tsx` — cada noticia se presenta como un
  `<article>`.

## 3. CSS

Los estilos de la aplicación están en `apps/web/src/index.css`. La hoja incluye
variables del tema, estilos por componentes y reglas adaptables a distintos
tamaños de pantalla. Algunos ejemplos para localizar son `.news-grid`,
`.news-card`, `.page-intro` y las reglas `@media` al final del archivo.

El documento importa la hoja global desde `apps/web/src/root.tsx`; así los
estilos se aplican a las distintas rutas de la aplicación.

## 4. JavaScript y lógica dinámica

La lógica se implementa en componentes React escritos en TypeScript (una
extensión tipada de JavaScript):

- `apps/web/src/components/news/news-list.tsx` mantiene el término de búsqueda
  y la categoría seleccionada con `useState`.
- La función `filter` encuentra las noticias que coinciden con ambos filtros.
- La función `map` crea una tarjeta por cada noticia visible.
- `apps/web/src/components/home/latest-news.tsx` recorre las noticias para
  mostrarlas en la página de inicio.

## 5. Renderizado dinámico a partir de JSON

El catálogo utiliza datos reales, no tarjetas escritas una por una en el
marcado:

1. `apps/web/src/lib/news.server.ts`, en `getNews()`, consulta la API REST de
   PocketBase y convierte la respuesta JSON con `response.json()`.
2. `apps/web/src/routes/noticias.tsx`, en `loader()`, obtiene la lista y la
   entrega como `loaderData.news`.
3. `apps/web/src/components/news/news-list.tsx` filtra la lista y recorre los
   resultados con `filteredItems.map(...)`.
4. `apps/web/src/components/news-card.tsx` presenta los campos de cada objeto
   JSON —título, categoría, resumen, fecha e imagen— dentro de una tarjeta.

La respuesta de la colección de noticias tiene esta forma simplificada:

```json
{
  "items": [
    {
      "id": "identificador",
      "title": "Título de la noticia",
      "category": "Cultura",
      "summary": "Resumen de la noticia",
      "body": "Contenido completo de la noticia",
      "image": "https://ejemplo.com/imagen.jpg",
      "created": "2026-10-09 12:00:00.000Z"
    }
  ]
}
```

`NewsItem` documenta los campos utilizados por la aplicación en
`apps/web/src/lib/news.ts`.

## 6. Cómo comprobarlo en ejecución

1. Desde la carpeta raíz, ejecuta `npm run dev` para iniciar la web y
   PocketBase.
2. Abre `http://localhost:3000/noticias` y comprueba que las tarjetas se
   generan a partir de los registros disponibles en PocketBase.
3. Escribe en el buscador o selecciona una categoría: la lista y el contador
   se actualizan sin recargar la página.
4. Para seguir el recorrido del dato, abre en este orden
   `apps/web/src/lib/news.server.ts`,
   `apps/web/src/routes/noticias.tsx`,
   `apps/web/src/components/news/news-list.tsx` y
   `apps/web/src/components/news-card.tsx`.

Si PocketBase no tiene noticias, el catálogo mostrará el estado vacío; agrega
un registro en PocketBase para observar las tarjetas dinámicas.
