# Documentación del código — Jenniffer Duque


## 1. Visión general

El proyecto es un **monorepo** con dos aplicaciones:

- **`apps/web`** — La aplicación web. Usa **React Router 8 en *framework
  mode*** con **SSR** (renderizado en el servidor), **TypeScript** y
  **Tailwind CSS**. Corre en el puerto `3000`.
- **`apps/pocketbase`** — La base de datos y autenticación con **PocketBase**
  (SQLite embebido). Corre en el puerto `8090`.

La aplicación web habla con PocketBase de dos formas:

1. **Desde el navegador** (cliente) con el SDK de PocketBase, para
   autenticación, crear/eliminar noticias y enviar mensajes de contacto.
2. **Desde el servidor** (loaders de React Router) con `fetch` a la API REST
   de PocketBase, para leer las noticias que se muestran en las páginas
   públicas (inicio, catálogo, detalle, sitemap, RSS).

---

## 2. Estructura de `apps/web/src`

```
src/
├── routes.ts            # Registro explícito de todas las rutas
├── root.tsx             # Shell del documento HTML, header y footer globales
├── index.css            # Estilos globales (Tailwind + variables del tema)
├── routes/              # Un archivo por ruta (home, noticias, contacto...)
├── components/          # Componentes de UI, organizados por sección
├── hooks/               # Hooks reutilizables (auth, favoritos, sessionStorage)
└── lib/                 # Clientes, utilidades y tipos (PocketBase, news, seo)
```

### Convenciones importantes

- **Cada ruta es un módulo** en `src/routes/` y se registra en `src/routes.ts`.
  Un módulo de ruta exporta `meta`, opcionalmente `loader`/`action`, y un
  **componente por defecto** que arma la página usando componentes más chicos.
- **Los componentes fuera de `routes/` se exportan con nombre**
  (`export function Hero`), no por defecto. Mezclar los dos estilos provoca
  errores de "elemento inválido" en tiempo de ejecución.
- **Cada sección de una página es su propio archivo** en
  `src/components/<ruta>/<seccion>.tsx`. Los componentes compartidos por varias
  rutas viven directamente en `src/components/`.
- **Las importaciones usan el alias `@/`** (por ejemplo `@/lib/news`), nunca
  rutas relativas, salvo los tipos generados de React Router (`./+types/...`).

---

## 3. Rutas principales

Todas las rutas se declaran en `src/routes.ts`:

```ts
index('routes/home.tsx'),              // /
route('noticias', 'routes/noticias.tsx'),        // /noticias
route('noticias/:id', 'routes/noticia.tsx'),     // /noticias/:id
route('favoritos', 'routes/favoritos.tsx'),      // /favoritos
route('gestion', 'routes/gestion.tsx'),          // /gestion
route('contacto', 'routes/contacto.tsx'),        // /contacto
```

### `routes/home.tsx` — Inicio

- Tiene un `loader` que llama a `getNews()` (desde `src/lib/news.server.ts`)
  para obtener todas las noticias desde PocketBase.
- Pasa la **primera** noticia como destacada al `Hero` y el resto a
  `LatestNews`.
- Compone: `<Hero/>`, `<LatestNews/>`, `<AboutStrip/>`, `<HomeCta/>`.
- Exporta `meta` con `seo()` para el título, la descripción y los datos
  estructurados (JSON-LD `WebSite`).

### `routes/noticias.tsx` — Catálogo

- `loader` obtiene todas las noticias y las pasa a `<NewsList/>`.
- `<NewsList/>` (`src/components/news/news-list.tsx`) implementa el **filtro
  por categoría** (botones) y la **búsqueda por texto** (input). Filtra en el
  cliente comparando título, resumen y categoría.

### `routes/noticia.tsx` — Detalle de noticia

- `loader` recibe `params.id` y llama a `getNewsItem(id)`. Si no existe,
  lanza una `Response` con estado `404`.
- `meta` usa `loaderData.item` para construir el título, la descripción, la
  imagen y el JSON-LD `Article`.
- Renderiza `<ArticleView item={...}/>`.

### `routes/favoritos.tsx` — Favoritos

- `loader` obtiene todas las noticias (para poder cruzarlas con los IDs
  guardados en el navegador).
- Renderiza `<FavoritesList/>` (los favoritos del navegador) y
  `<TechnologiesPanel/>` (panel explicativo de tecnologías).

### `routes/gestion.tsx` — Gestión

- No tiene `loader` (la autenticación es del lado del cliente).
- Renderiza `<NewsManager/>`, que gestiona login/registro y CRUD de noticias.

### `routes/contacto.tsx` — Contacto

- Renderiza el intro y `<ContactForm/>`.

### Rutas técnicas

- `routes/sitemap.xml.ts`, `routes/rss.xml.ts`, `routes/llms.txt.ts`,
  `routes/robots.txt.ts` — generan contenido para buscadores y modelos.
- `routes/api.health.ts` — endpoint de salud.
- `routes/api.$.ts` — responde 404 JSON para cualquier `/api/*` no definido.

---

## 4. Noticias

### Tipos y utilidades — `src/lib/news.ts`

Define el tipo `NewsItem` y la función `formatDate(value)` que formatea fechas
en español de Colombia (`es-CO`).

### Lectura desde el servidor — `src/lib/news.server.ts`

- `getNews()` — `GET /api/collections/news/records` a PocketBase, devuelve
  todas las noticias ordenadas por fecha descendente.
- `getNewsItem(id)` — obtiene una noticia por ID; devuelve `null` si es 404.
- Usa `process.env.POCKETBASE_URL` (por defecto `http://localhost:8090`).

> Estos helpers se usan **solo en loaders / actions del servidor** (por eso el
> sufijo `.server.ts`). Nunca los importes desde un componente del navegador.

### Tarjeta de noticia — `src/components/news-card.tsx`

Componente reutilizable que muestra la imagen, la categoría, la fecha, el
título, el resumen y dos acciones: **"Ver historia"** (enlace al detalle) y el
**botón de favorito** (corazón). Usa el hook `useFavorites()` para saber si la
noticia ya está guardada y para alternar el estado.

### Artículo — `src/components/news/article-view.tsx`

Muestra la noticia completa: encabezado con categoría y fecha, título,
resumen, botones de **guardar en favoritos** y **compartir**, la imagen con su
crédito, y el cuerpo dividido en párrafos (separa por doble salto de línea).
Calcula un tiempo estimado de lectura a partir de la longitud del cuerpo.

---

## 5. Favoritos

### Hook — `src/hooks/use-favorites.ts`

- Guarda un arreglo de IDs en **`localStorage`** con la clave
  `jenniffer-duque-favoritos`, serializado como JSON.
- Expone `{ ids, toggle }`:
  - `ids` — lista de IDs guardados.
  - `toggle(id)` — añade o quita un ID y dispara un evento
    `favoritos-cambiados` para que otras pestañas se actualicen.
- Escucha el evento `storage` (cambios en otras pestañas) y el evento
  personalizado `favoritos-cambiados` para mantenerse sincronizado.

### Lista — `src/components/favorites/favorites-list.tsx`

- Recibe todas las noticias y filtra las que están en `ids`.
- Muestra una cuadrícula de tarjetas (`NewsCard`) o un estado vacío con un
  enlace a `/noticias`.
- Registra la **actividad de la sesión** (visitas y favoritos vistos) con
  `useSessionStorage`, que se reinicia al cerrar la pestaña.

### Panel de tecnologías — `src/components/favorites/technologies-panel.tsx`

Panel informativo que explica qué tecnologías se usan en la página de
favoritos: HTML/CSS/JavaScript, Tailwind CSS, localStorage y sessionStorage.

### Hook de sesión — `src/hooks/use-session-storage.ts`

Hook genérico para **`sessionStorage`**: persiste un valor JSON solo durante
la sesión actual del navegador (se borra al cerrar la pestaña). Se usa para
registrar la actividad en la página de favoritos.

---

## 6. Contacto

### Formulario — `src/components/contact/contact-form.tsx`

- Campos: **nombre**, **correo** y **mensaje** (con validación HTML5:
  `required`, `type="email`, `minLength`, `maxLength`).
- Al enviar, usa el SDK de PocketBase para crear un registro en la colección
  **`contact_messages`** directamente desde el navegador.
- Muestra un estado de **éxito** (mensaje enviado) o de **error** si falla.
- El botón se deshabilita mientras se envía para evitar envíos duplicados.

> La colección `contact_messages` permite creación pública (`createRule: ""`)
> pero la lectura/edición/eliminación está cerrada (reglas `null`), así que
> los mensajes solo se gestionan desde el panel de PocketBase.

---

## 7. Gestión de noticias

### Componente — `src/components/manage/news-manager.tsx`

Este componente maneja **dos estados**:

#### a) No autenticado — login / registro

- Pestañas para **iniciar sesión** o **crear cuenta**.
- Usa el hook `useAuth()` (`src/hooks/use-auth.ts`), que envuelve el SDK de
  PocketBase: `login(email, password)`, `signup(email, password, extra)`,
  `logout()`.
- La contraseña mínima es de **8 caracteres** (regla de la colección `users`).

#### b) Autenticado — publicar y eliminar

- **Formulario de nueva noticia**: título, categoría, resumen, cuerpo e
  imagen (URL). Al enviar, crea un registro en `news` con `owner = user.id`.
- **Lista de tus publicaciones**: muestra las noticias donde `owner` es el
  usuario actual, con un botón para **eliminar** cada una (previa
  confirmación).
- Botón de **cerrar sesión**.

### Autenticación — `src/hooks/use-auth.ts`

- Lee el estado de `pb.authStore` (token JWT en `localStorage`).
- Expone `{ user, isAuthed, isLoading, login, signup, logout }`.
- `isLoading` es `true` hasta que se hidrata el estado; conviene renderizar un
  estado de carga mientras tanto para evitar el "parpadeo" de un botón de
  "Iniciar sesión".

### Protección de rutas — `src/lib/require-auth.ts`

- `requireAuth()` se usa en un `clientLoader` para redirigir a `/login` si no
  hay sesión. Como la sesión vive en `localStorage`, **no** se puede leer en
  un `loader` del servidor (el servidor no ve el token).

### Reglas de acceso de `news`

Definidas en la migración `apps/pocketbase/pb_migrations/1790255132_create_news_and_messages.js`:

- **Lectura pública** (`listRule: ""`, `viewRule: ""`): cualquiera puede leer
  las noticias (es un portal público).
- **Creación**: solo usuarios autenticados, y el `owner` debe ser el propio
  usuario.
- **Edición/Eliminación**: solo el `owner` de la noticia.

---

## 8. PocketBase — base de datos

### Colecciones

| Colección | Propósito |
|-----------|-----------|
| `news` | Noticias (título, categoría, resumen, cuerpo, imagen, `owner`). |
| `contact_messages` | Mensajes del formulario de contacto. |
| `users` | Cuentas de usuario (autenticación) para publicar noticias. |

### Migraciones

- Carpeta: `apps/pocketbase/pb_migrations/`.
- Cada archivo define un `migrate((app) => { ... }, (app) => { ... })` con las
  funciones `up` (crear) y `down` (revertir).
- PocketBase aplica automáticamente las migraciones pendientes al arrancar.
- **Nunca** modifiques una migración ya aplicada; crea una nueva con un
  *timestamp* mayor para los cambios.

### Cliente web — `src/lib/pocketbase-client.ts`

Crea una instancia del SDK de PocketBase apuntando a `/hcgi/platform` (la ruta
proxy del entorno Hostinger). En local, el SDK del navegador habla con
`http://localhost:8090` a través del proxy de desarrollo.

---

## 9. Estilos y tema

- **`src/index.css`** contiene los estilos globales: directivas de Tailwind,
  variables CSS del tema (colores como `--navy`, `--ice`, `--paper`,
  `--line`), tipografías y reglas responsive.
- Las fuentes **Manrope** y **Outfit** se cargan desde Google Fonts en
  `src/root.tsx` (en el array `links`).
- El diseño es *mobile-first* con *media queries* en `index.css` para
  tabletas y móviles.

---

## 10. SEO y metadatos

- Cada ruta pública exporta `meta({ matches, location })` que llama a
  `seo()` desde `src/lib/seo.ts`. Esto genera el título, la descripción, la
  URL canónica, las etiquetas Open Graph/Twitter y los datos JSON-LD.
- `src/root.tsx` publica el *origin* del sitio (en `loader` y `headers`) para
  que `seo()` construya URLs absolutas y anuncie el sitemap.
- El sitemap (`src/routes/sitemap.xml.ts`) incluye las páginas estáticas y una
  URL por cada noticia.

---

Con esto tienes una visión completa del código. Para ponerlo en marcha, sigue
la guía de instalación del [`README.md`](../README.md).
