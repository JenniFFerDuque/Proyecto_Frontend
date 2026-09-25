<<<<<<< HEAD
# Jenniffer Duque — Portal de noticias

Portal de noticias construido con **React Router 8 (framework mode, SSR)**,
**TypeScript**, **Tailwind CSS** y **PocketBase** (base de datos, autenticación
y almacenamiento de archivos). El sitio publica noticias, permite guardar
favoritos en el navegador, recibir mensajes de contacto y gestionar (crear /
eliminar) noticias con una cuenta de usuario.

Esta guía explica, cómo descargar el código, abrirlo en
Visual Studio Code, instalar lo necesario, configurarlo y ejecutarlo en tu
computador. También documenta la estructura del proyecto, las rutas
principales y los módulos de favoritos, noticias, contacto y gestión.

---

## 📋 Requisitos previos

Antes de empezar, instala estas herramientas en tu computador:

| Herramienta | Versión recomendada | Para qué sirve |
|-------------|----------------------|----------------|
| **Node.js** | 22.x o superior | Entorno de ejecución para JavaScript/TypeScript |
| **npm** | 10.x (viene con Node.js) | Gestor de paquetes |
| **Git** | cualquier versión reciente | Para clonar/descargar el código |
| **Visual Studio Code** | reciente | Editor de código |

### 1. Instalar Node.js y npm

Descarga Node.js desde <https://node.org> (elige la versión LTS). Al instalar
Node.js se instala automáticamente `npm`.

Comprueba que quedaron instalados abriendo una terminal y ejecutando:

```bash
node --version   # debe mostrar v22.x.x o superior
npm --version    # debe mostrar 10.x.x o superior
```

### 2. Instalar Git

Descárgalo desde <https://git-scm.com/downloads> e instálalo con las opciones
por defecto. Verifica con:

```bash
git --version
```

> ¿No quieres usar Git? También puedes descargar el proyecto como un archivo
> `.zip` y descomprimirlo en tu computador (más abajo se explica cómo).

### 3. Instalar Visual Studio Code

Descárgalo desde <https://code.visualstudio.com/> e instálalo.


---

## ⬇️ Descargar / copiar el código

### Opción A — Clonar con Git (recomendada)

Abre una terminal en la carpeta donde quieras guardar el proyecto y ejecuta:

```bash
git clone <URL_DEL_REPOSITORIO> jenniffer-duque
cd jenniffer-duque
```

Reemplaza `<URL_DEL_REPOSITORIO>` por la dirección del repositorio (la que
aparece en el botón **Code** de tu plataforma, por ejemplo GitHub).

### Opción B — Descargar como ZIP

1. En la plataforma del repositorio, pulsa **Code → Download ZIP**.
2. Descomprime el archivo en una carpeta, por ejemplo `jenniffer-duque`.
3. Abre una terminal y entra en esa carpeta:

```bash
cd ruta/a/jenniffer-duque
```


---

## 📂 Abrir el proyecto en Visual Studio Code

Desde la terminal, dentro de la carpeta del proyecto:

```bash
code .
```

(El punto `.` indica "abrir la carpeta actual". Si el comando `code` no
funciona, abre VS Code y usa **Archivo → Abrir carpeta…** y selecciona la
carpeta del proyecto.)

Verás esta estructura principal:

```
jenniffer-duque/
├── apps/
│   ├── web/              # Aplicación React Router (frontend + SSR)
│   └── pocketbase/       # Base de datos PocketBase (binario + migraciones)
├── package.json          # Scripts del monorepo (dev, build, start, lint)
└── README.md             # Este archivo
```

---

## 📦 Instalar las dependencias

El proyecto es un **monorepo** con *workspaces*: las dependencias se instalan
una sola vez desde la raíz.

En la terminal, dentro de la carpeta raíz del proyecto, ejecuta:

```bash
npm install
```

Esto descarga e instala todas las dependencias de `apps/web` y
`apps/pocketbase`. Puede tardar un par de minutos la primera vez.

> Si usas Windows, se recomienda ejecutar la terminal como administrador la
> primera vez para evitar problemas de permisos al instalar paquetes nativos.

---


## 🚀 Ejecutar la aplicación en local

Desde la **raíz del proyecto**, ejecuta:

```bash
npm run dev
```

Este comando levanta **dos servicios a la vez** (gracias a `concurrently`):

1. **PocketBase** en `http://localhost:8090` (base de datos + API + panel admin).
2. **React Router (Vite)** en `http://localhost:3003` (la aplicación web).

Abre <http://localhost:3003> en tu navegador. Deberías ver la página de inicio
del portal de noticias.

### Otros scripts útiles

| Script | Qué hace |
|--------|----------|
| `npm run dev` | Inicia el entorno de desarrollo (web + PocketBase). |
| `npm run build` | Compila la versión de producción de la web. |
| `npm run start` | Ejecuta la versión compilada (producción). |
| `npm run lint` | Revisa el código con ESLint. |
| `npm run typecheck` | Verifica los tipos de TypeScript. |


---

## 📁 Estructura del proyecto (resumen)

```
apps/
├── web/                         # Aplicación web (React Router + TypeScript)
│   ├── src/
│   │   ├── routes/              # Módulos de ruta (home, noticias, contacto...)
│   │   ├── routes.ts            # Registro explícito de todas las rutas
│   │   ├── root.tsx             # Shell del documento (header, footer, <html>)
│   │   ├── components/          # Componentes de UI (secciones por página)
│   │   │   ├── home/            # Secciones del inicio
│   │   │   ├── news/            # Catálogo y artículo de noticia
│   │   │   ├── favorites/       # Lista de favoritos y panel de tecnologías
│   │   │   ├── contact/         # Formulario de contacto
│   │   │   ├── manage/          # Gestión (publicar/eliminar) de noticias
│   │   │   ├── site-header.tsx  # Encabezado / navegación
│   │   │   ├── site-footer.tsx  # Pie de página
│   │   │   └── news-card.tsx    # Tarjeta reutilizable de noticia
│   │   ├── hooks/               # Hooks: use-auth, use-favorites, use-session-storage
│   │   ├── lib/                 # Clientes y utilidades (PocketBase, news, seo...)
│   │   ├── data/                # Contenido estático largo (cuando aplica)
│   │   └── index.css            # Estilos globales (Tailwind + tema)
│   ├── .env                     # Variables de entorno del servidor
│   └── package.json
│
└── pocketbase/                  # Base de datos PocketBase
    ├── pb_migrations/           # Migraciones (crean las colecciones)
    ├── pb_hooks/                # Hooks del servidor (correo, eventos)
    ├── pb_data/                 # Datos generados (no se suben a git)
    └── pocketbase               # Binario de PocketBase
```

Para una explicación más detallada del código, consulta
[`docs/PROYECTO.md`](docs/PROYECTO.md).

---

=======
# Proyecto_Frontend
>>>>>>> 0100cf3eeaafe2d770530680a0a5197ae34f4f97
