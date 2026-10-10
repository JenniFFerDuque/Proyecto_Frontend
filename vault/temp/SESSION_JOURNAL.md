## 2026-09-24 14:15:35.809Z load
- url: http://localhost:3002/
- title: Jenniffer Duque | Historias que nos acercan

## 2026-09-24 14:15:46.094Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Noticias"}

## 2026-09-24 14:15:49.044Z load
- url: http://localhost:3002/noticias
- title: Noticias | Jenniffer Duque

## 2026-09-24 14:15:56.289Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Favoritos"}

## 2026-09-24 14:15:56.956Z load
- url: http://localhost:3002/favoritos
- title: Mis favoritos | Jenniffer Duque

## 2026-09-24 14:16:06.506Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Publicar"}

## 2026-09-24 14:16:07.290Z load
- url: http://localhost:3002/gestion
- title: Publicar noticias | Jenniffer Duque

## 2026-09-24 14:16:18.766Z load
- url: http://localhost:3002/gestion
- title: Publicar noticias | Jenniffer Duque

## 2026-09-24 14:16:19.259Z navigate
- url: http://localhost:3002/gestion
- via: replaceState

## 2026-09-24 14:16:21.875Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"","valueLength":0,"text":""}

## 2026-09-24 14:16:22.083Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"","valueLength":0,"text":""}

## 2026-09-24 14:16:26.943Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"","valueLength":0,"text":""}

## 2026-09-24 14:16:36.691Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"","valueLength":0,"text":""}

## 2026-09-24 14:16:38.900Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"admin@local.test","valueLength":16,"text":""}

## 2026-09-24 14:16:38.902Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"admin@local.test","valueLength":16,"text":""}

## 2026-09-24 14:16:38.903Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-24 14:16:38.988Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-24 14:16:39.933Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-24 14:16:49.524Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-24 14:16:51.348Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-09-24 14:16:51.348Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-09-24 14:16:51.464Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Entrar a mi espacio "}

## 2026-09-24 14:16:51.472Z submit
- action: http://localhost:3002/gestion
- fields: [{"label":"email","type":"email","value":"admin@local.test","length":16,"redacted":false},{"label":"password","type":"password","value":"[redacted:length=14]","length":14,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 14:16:52.204Z network.error
- method: POST
- url: http://localhost:3002/hcgi/platform/api/collections/users/auth-with-password
- status: 404
- requestBody: {"identity":"admin@local.test","password":"[redacted:length=14]"}
- response: 
    <!DOCTYPE html><html lang="es"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="icon" href="/favicon.ico" sizes="32x32"/><link rel="alternate" type="application/rss+xml" title="Noticias de Jenniffer Duque" href="/rss.xml"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/><link rel="modulepreload" href="/@fs/C:/Users/ASUS/Downloads/Frontend_JennifferDuque/node_modules/@react-router/dev/dist/config/defaults/entry.client.tsx"/><link rel="modulepreload" href="/src/root.tsx"/><link data-react-router-critical-css="" rel="stylesheet" href="/@react-router/critical.css?pathname=/hcgi/platform/api/collections/users/auth-with-password"/><link rel="stylesheet" href="/src/index.css"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Outfit:wght@400;500;600;700;800&amp;display=swap"/><script type="module" src="/@id/__x00__virtual:horizons-runtime"></script><script type="module" src="/@id/__x00__virtual:horizons-edit-mode"></script><script type="module" src="/@id/__x00__virtual:horizons-iframe-route-restoration"></script><script type="module" src="/@id/__x00__virtual:horizons-pocketbase-auth"></script><script type="module" src="/@id/__x00__virtual:session-journal-client"></script></head><body><div id="root"><main><h1>404</h1><p>La página que buscas no se encuentra.</p></main></div><script>((storageKey, restoreKey) => {
    		if (!window.history.state || !window.history.state.key) {
    			let key = Math.random().toString(32).slice(2);
    			window.history.replaceState({ key }, "");
    		}
    		try {
    			let storedY = JSON.parse(sessionStorage.getItem(storageKey) || "{}")[restoreKey || window.history.state.key];
    			if (typeof storedY === "number") window.scrollTo(0, storedY);
    		} catch (error) {
    			console.error(error);
    			sessionStorage.removeItem(storageKey);
    		}
    	})("react-router-scro...
- durationMs: 725

## 2026-09-24 14:16:56.877Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear cuenta"}

## 2026-09-24 14:17:02.492Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear mi cuenta "}

## 2026-09-24 14:17:02.495Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"","valueLength":0,"text":""}

## 2026-09-24 14:17:04.936Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"","valueLength":0,"text":""}

## 2026-09-24 14:17:07.496Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"Jenn","valueLength":4,"text":""}

## 2026-09-24 14:17:07.496Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"Jenn","valueLength":4,"text":""}

## 2026-09-24 14:17:07.568Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear mi cuenta "}

## 2026-09-24 14:17:07.570Z submit
- action: http://localhost:3002/gestion
- fields: [{"label":"name","type":"text","value":"Jenn","length":4,"redacted":false},{"label":"email","type":"email","value":"admin@local.test","length":16,"redacted":false},{"label":"password","type":"password","value":"[redacted:length=14]","length":14,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 14:17:07.681Z network.error
- method: POST
- url: http://localhost:3002/hcgi/platform/api/collections/users/records
- status: 404
- requestBody: {"email":"admin@local.test","password":"[redacted:length=14]","passwordConfirm":"[redacted:length=14]","name":"Jenn"}
- response: 
    <!DOCTYPE html><html lang="es"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="icon" href="/favicon.ico" sizes="32x32"/><link rel="alternate" type="application/rss+xml" title="Noticias de Jenniffer Duque" href="/rss.xml"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/><link rel="modulepreload" href="/@fs/C:/Users/ASUS/Downloads/Frontend_JennifferDuque/node_modules/@react-router/dev/dist/config/defaults/entry.client.tsx"/><link rel="modulepreload" href="/src/root.tsx"/><link data-react-router-critical-css="" rel="stylesheet" href="/@react-router/critical.css?pathname=/hcgi/platform/api/collections/users/records"/><link rel="stylesheet" href="/src/index.css"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Outfit:wght@400;500;600;700;800&amp;display=swap"/><script type="module" src="/@id/__x00__virtual:horizons-runtime"></script><script type="module" src="/@id/__x00__virtual:horizons-edit-mode"></script><script type="module" src="/@id/__x00__virtual:horizons-iframe-route-restoration"></script><script type="module" src="/@id/__x00__virtual:horizons-pocketbase-auth"></script><script type="module" src="/@id/__x00__virtual:session-journal-client"></script></head><body><div id="root"><main><h1>404</h1><p>La página que buscas no se encuentra.</p></main></div><script>((storageKey, restoreKey) => {
    		if (!window.history.state || !window.history.state.key) {
    			let key = Math.random().toString(32).slice(2);
    			window.history.replaceState({ key }, "");
    		}
    		try {
    			let storedY = JSON.parse(sessionStorage.getItem(storageKey) || "{}")[restoreKey || window.history.state.key];
    			if (typeof storedY === "number") window.scrollTo(0, storedY);
    		} catch (error) {
    			console.error(error);
    			sessionStorage.removeItem(storageKey);
    		}
    	})("react-router-scroll-position...
- durationMs: 111

## 2026-09-24 14:17:10.472Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear mi cuenta "}

## 2026-09-24 14:17:10.474Z submit
- action: http://localhost:3002/gestion
- fields: [{"label":"name","type":"text","value":"Jenn","length":4,"redacted":false},{"label":"email","type":"email","value":"admin@local.test","length":16,"redacted":false},{"label":"password","type":"password","value":"[redacted:length=14]","length":14,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 14:17:10.548Z network.error
- method: POST
- url: http://localhost:3002/hcgi/platform/api/collections/users/records
- status: 404
- requestBody: {"email":"admin@local.test","password":"[redacted:length=14]","passwordConfirm":"[redacted:length=14]","name":"Jenn"}
- response: 
    <!DOCTYPE html><html lang="es"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="icon" href="/favicon.ico" sizes="32x32"/><link rel="alternate" type="application/rss+xml" title="Noticias de Jenniffer Duque" href="/rss.xml"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/><link rel="modulepreload" href="/@fs/C:/Users/ASUS/Downloads/Frontend_JennifferDuque/node_modules/@react-router/dev/dist/config/defaults/entry.client.tsx"/><link rel="modulepreload" href="/src/root.tsx"/><link data-react-router-critical-css="" rel="stylesheet" href="/@react-router/critical.css?pathname=/hcgi/platform/api/collections/users/records"/><link rel="stylesheet" href="/src/index.css"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Outfit:wght@400;500;600;700;800&amp;display=swap"/><script type="module" src="/@id/__x00__virtual:horizons-runtime"></script><script type="module" src="/@id/__x00__virtual:horizons-edit-mode"></script><script type="module" src="/@id/__x00__virtual:horizons-iframe-route-restoration"></script><script type="module" src="/@id/__x00__virtual:horizons-pocketbase-auth"></script><script type="module" src="/@id/__x00__virtual:session-journal-client"></script></head><body><div id="root"><main><h1>404</h1><p>La página que buscas no se encuentra.</p></main></div><script>((storageKey, restoreKey) => {
    		if (!window.history.state || !window.history.state.key) {
    			let key = Math.random().toString(32).slice(2);
    			window.history.replaceState({ key }, "");
    		}
    		try {
    			let storedY = JSON.parse(sessionStorage.getItem(storageKey) || "{}")[restoreKey || window.history.state.key];
    			if (typeof storedY === "number") window.scrollTo(0, storedY);
    		} catch (error) {
    			console.error(error);
    			sessionStorage.removeItem(storageKey);
    		}
    	})("react-router-scroll-position...
- durationMs: 73

## 2026-09-24 14:17:11.893Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesión"}

## 2026-09-24 14:17:13.360Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Entrar a mi espacio "}

## 2026-09-24 14:17:13.361Z submit
- action: http://localhost:3002/gestion
- fields: [{"label":"email","type":"email","value":"admin@local.test","length":16,"redacted":false},{"label":"password","type":"password","value":"[redacted:length=14]","length":14,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 14:17:13.434Z network.error
- method: POST
- url: http://localhost:3002/hcgi/platform/api/collections/users/auth-with-password
- status: 404
- requestBody: {"identity":"admin@local.test","password":"[redacted:length=14]"}
- response: 
    <!DOCTYPE html><html lang="es"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="icon" href="/favicon.ico" sizes="32x32"/><link rel="alternate" type="application/rss+xml" title="Noticias de Jenniffer Duque" href="/rss.xml"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/><link rel="modulepreload" href="/@fs/C:/Users/ASUS/Downloads/Frontend_JennifferDuque/node_modules/@react-router/dev/dist/config/defaults/entry.client.tsx"/><link rel="modulepreload" href="/src/root.tsx"/><link data-react-router-critical-css="" rel="stylesheet" href="/@react-router/critical.css?pathname=/hcgi/platform/api/collections/users/auth-with-password"/><link rel="stylesheet" href="/src/index.css"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Outfit:wght@400;500;600;700;800&amp;display=swap"/><script type="module" src="/@id/__x00__virtual:horizons-runtime"></script><script type="module" src="/@id/__x00__virtual:horizons-edit-mode"></script><script type="module" src="/@id/__x00__virtual:horizons-iframe-route-restoration"></script><script type="module" src="/@id/__x00__virtual:horizons-pocketbase-auth"></script><script type="module" src="/@id/__x00__virtual:session-journal-client"></script></head><body><div id="root"><main><h1>404</h1><p>La página que buscas no se encuentra.</p></main></div><script>((storageKey, restoreKey) => {
    		if (!window.history.state || !window.history.state.key) {
    			let key = Math.random().toString(32).slice(2);
    			window.history.replaceState({ key }, "");
    		}
    		try {
    			let storedY = JSON.parse(sessionStorage.getItem(storageKey) || "{}")[restoreKey || window.history.state.key];
    			if (typeof storedY === "number") window.scrollTo(0, storedY);
    		} catch (error) {
    			console.error(error);
    			sessionStorage.removeItem(storageKey);
    		}
    	})("react-router-scro...
- durationMs: 74

## 2026-09-24 14:17:36.359Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-09-24 14:17:36.780Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" TU ESPACIO EDITORIALLas historiasempiezan aquí.Inicia sesión o crea una cuenta para publicar y gestionar tus propias noticias. Todos pueden leer lo que compartas.Iniciar sesiónCrear cuentaCorreo electrónicoContraseñaCorreo o contraseña incorrectos. Inténtalo de nuevo.Entrar a mi espacio "}

## 2026-09-24 14:17:38.322Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-24 14:17:38.324Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"admin@local.test","valueLength":16,"text":""}

## 2026-09-24 14:17:39.394Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" TU ESPACIO EDITORIALLas historiasempiezan aquí.Inicia sesión o crea una cuenta para publicar y gestionar tus propias noticias. Todos pueden leer lo que compartas.Iniciar sesiónCrear cuentaCorreo electrónicoContraseñaCorreo o contraseña incorrectos. Inténtalo de nuevo.Entrar a mi espacio "}

## 2026-09-24 14:17:40.441Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"","valueLength":0,"text":""}

## 2026-09-24 14:17:40.525Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesiónCrear cuentaCorreo electrónicoContraseñaCorreo o contraseña incorrectos. Inténtalo de nuevo.Entrar a mi espacio "}

## 2026-09-24 14:17:41.360Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear cuenta"}

## 2026-09-24 14:17:42.359Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"","valueLength":0,"text":""}

## 2026-09-24 14:17:42.465Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"","valueLength":0,"text":""}

## 2026-09-24 14:17:44.088Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"jenniffer.zamora0608@outlook.com","valueLength":32,"text":""}

## 2026-09-24 14:17:44.734Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"jenniffer.zamora0608@outlook.com","valueLength":32,"text":""}

## 2026-09-24 14:17:44.735Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-24 14:17:44.805Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-24 14:17:48.431Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=8]","valueLength":8,"text":""}

## 2026-09-24 14:17:48.431Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=8]","valueLength":8,"text":""}

## 2026-09-24 14:17:48.432Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"","valueLength":0,"text":""}

## 2026-09-24 14:17:48.511Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"","valueLength":0,"text":""}

## 2026-09-24 14:17:51.027Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"Jenn","valueLength":4,"text":""}

## 2026-09-24 14:17:51.028Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"Jenn","valueLength":4,"text":""}

## 2026-09-24 14:17:51.089Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear mi cuenta "}

## 2026-09-24 14:17:51.090Z submit
- action: http://localhost:3002/gestion
- fields: [{"label":"name","type":"text","value":"Jenn","length":4,"redacted":false},{"label":"email","type":"email","value":"jenniffer.zamora0608@outlook.com","length":32,"redacted":false},{"label":"password","type":"password","value":"[redacted:length=8]","length":8,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 14:17:51.163Z network.error
- method: POST
- url: http://localhost:3002/hcgi/platform/api/collections/users/records
- status: 404
- requestBody: {"email":"jenniffer.zamora0608@outlook.com","password":"[redacted:length=8]","passwordConfirm":"[redacted:length=8]","name":"Jenn"}
- response: 
    <!DOCTYPE html><html lang="es"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="icon" href="/favicon.ico" sizes="32x32"/><link rel="alternate" type="application/rss+xml" title="Noticias de Jenniffer Duque" href="/rss.xml"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/><link rel="modulepreload" href="/@fs/C:/Users/ASUS/Downloads/Frontend_JennifferDuque/node_modules/@react-router/dev/dist/config/defaults/entry.client.tsx"/><link rel="modulepreload" href="/src/root.tsx"/><link data-react-router-critical-css="" rel="stylesheet" href="/@react-router/critical.css?pathname=/hcgi/platform/api/collections/users/records"/><link rel="stylesheet" href="/src/index.css"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Outfit:wght@400;500;600;700;800&amp;display=swap"/><script type="module" src="/@id/__x00__virtual:horizons-runtime"></script><script type="module" src="/@id/__x00__virtual:horizons-edit-mode"></script><script type="module" src="/@id/__x00__virtual:horizons-iframe-route-restoration"></script><script type="module" src="/@id/__x00__virtual:horizons-pocketbase-auth"></script><script type="module" src="/@id/__x00__virtual:session-journal-client"></script></head><body><div id="root"><main><h1>404</h1><p>La página que buscas no se encuentra.</p></main></div><script>((storageKey, restoreKey) => {
    		if (!window.history.state || !window.history.state.key) {
    			let key = Math.random().toString(32).slice(2);
    			window.history.replaceState({ key }, "");
    		}
    		try {
    			let storedY = JSON.parse(sessionStorage.getItem(storageKey) || "{}")[restoreKey || window.history.state.key];
    			if (typeof storedY === "number") window.scrollTo(0, storedY);
    		} catch (error) {
    			console.error(error);
    			sessionStorage.removeItem(storageKey);
    		}
    	})("react-router-scroll-position...
- durationMs: 73

## 2026-09-24 14:17:52.369Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear mi cuenta "}

## 2026-09-24 14:17:52.370Z submit
- action: http://localhost:3002/gestion
- fields: [{"label":"name","type":"text","value":"Jenn","length":4,"redacted":false},{"label":"email","type":"email","value":"jenniffer.zamora0608@outlook.com","length":32,"redacted":false},{"label":"password","type":"password","value":"[redacted:length=8]","length":8,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 14:17:52.426Z network.error
- method: POST
- url: http://localhost:3002/hcgi/platform/api/collections/users/records
- status: 404
- requestBody: {"email":"jenniffer.zamora0608@outlook.com","password":"[redacted:length=8]","passwordConfirm":"[redacted:length=8]","name":"Jenn"}
- response: 
    <!DOCTYPE html><html lang="es"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="icon" href="/favicon.ico" sizes="32x32"/><link rel="alternate" type="application/rss+xml" title="Noticias de Jenniffer Duque" href="/rss.xml"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/><link rel="modulepreload" href="/@fs/C:/Users/ASUS/Downloads/Frontend_JennifferDuque/node_modules/@react-router/dev/dist/config/defaults/entry.client.tsx"/><link rel="modulepreload" href="/src/root.tsx"/><link data-react-router-critical-css="" rel="stylesheet" href="/@react-router/critical.css?pathname=/hcgi/platform/api/collections/users/records"/><link rel="stylesheet" href="/src/index.css"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Outfit:wght@400;500;600;700;800&amp;display=swap"/><script type="module" src="/@id/__x00__virtual:horizons-runtime"></script><script type="module" src="/@id/__x00__virtual:horizons-edit-mode"></script><script type="module" src="/@id/__x00__virtual:horizons-iframe-route-restoration"></script><script type="module" src="/@id/__x00__virtual:horizons-pocketbase-auth"></script><script type="module" src="/@id/__x00__virtual:session-journal-client"></script></head><body><div id="root"><main><h1>404</h1><p>La página que buscas no se encuentra.</p></main></div><script>((storageKey, restoreKey) => {
    		if (!window.history.state || !window.history.state.key) {
    			let key = Math.random().toString(32).slice(2);
    			window.history.replaceState({ key }, "");
    		}
    		try {
    			let storedY = JSON.parse(sessionStorage.getItem(storageKey) || "{}")[restoreKey || window.history.state.key];
    			if (typeof storedY === "number") window.scrollTo(0, storedY);
    		} catch (error) {
    			console.error(error);
    			sessionStorage.removeItem(storageKey);
    		}
    	})("react-router-scroll-position...
- durationMs: 56

## 2026-09-24 14:17:54.088Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"jenniffer.zamora0608@outlook.com","valueLength":32,"text":""}

## 2026-09-24 14:17:54.738Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" TU ESPACIO EDITORIALLas historiasempiezan aquí.Inicia sesión o crea una cuenta para publicar y gestionar tus propias noticias. Todos pueden leer lo que compartas.Iniciar sesiónCrear cuentaTu nombreCorreo electrónicoContraseñaNo pudimos crear la cuenta. Revisa los datos o prueba con otro correo.Crear mi cuenta "}

## 2026-09-24 14:17:56.334Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":"auth-email","placeholder":"tu@correo.com","label":"email","value":"","valueLength":0,"text":""}

## 2026-09-24 14:17:56.335Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=8]","valueLength":8,"text":""}

## 2026-09-24 14:17:56.792Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" TU ESPACIO EDITORIALLas historiasempiezan aquí.Inicia sesión o crea una cuenta para publicar y gestionar tus propias noticias. Todos pueden leer lo que compartas.Iniciar sesiónCrear cuentaTu nombreCorreo electrónicoContraseñaNo pudimos crear la cuenta. Revisa los datos o prueba con otro correo.Crear mi cuenta "}

## 2026-09-24 14:17:57.952Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"password","type":"password","id":"auth-password","placeholder":"Mínimo 8 caracteres","label":"password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-24 14:17:57.953Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"Jenn","valueLength":4,"text":""}

## 2026-09-24 14:17:58.483Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" TU ESPACIO EDITORIALLas historiasempiezan aquí.Inicia sesión o crea una cuenta para publicar y gestionar tus propias noticias. Todos pueden leer lo que compartas.Iniciar sesiónCrear cuentaTu nombreCorreo electrónicoContraseñaNo pudimos crear la cuenta. Revisa los datos o prueba con otro correo.Crear mi cuenta "}

## 2026-09-24 14:17:59.371Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"Jenn","valueLength":4,"text":""}

## 2026-09-24 14:17:59.478Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesiónCrear cuentaTu nombreCorreo electrónicoContraseñaNo pudimos crear la cuenta. Revisa los datos o prueba con otro correo.Crear mi cuenta "}

## 2026-09-24 14:18:00.419Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"Jenn","valueLength":4,"text":""}

## 2026-09-24 14:18:00.892Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" TU ESPACIO EDITORIALLas historiasempiezan aquí.Inicia sesión o crea una cuenta para publicar y gestionar tus propias noticias. Todos pueden leer lo que compartas.Iniciar sesiónCrear cuentaTu nombreCorreo electrónicoContraseñaNo pudimos crear la cuenta. Revisa los datos o prueba con otro correo.Crear mi cuenta "}

## 2026-09-24 14:18:01.735Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"auth-name","placeholder":"Nombre completo","label":"name","value":"","valueLength":0,"text":""}

## 2026-09-24 14:18:01.824Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" TU ESPACIO EDITORIALLas historiasempiezan aquí.Inicia sesión o crea una cuenta para publicar y gestionar tus propias noticias. Todos pueden leer lo que compartas."}

## 2026-09-24 14:18:02.612Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesiónCrear cuentaTu nombreCorreo electrónicoContraseñaNo pudimos crear la cuenta. Revisa los datos o prueba con otro correo.Crear mi cuenta "}

## 2026-09-24 14:18:03.085Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesión"}

## 2026-09-24 14:18:41.633Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Noticias"}

## 2026-09-24 14:18:42.349Z navigate
- url: http://localhost:3002/noticias
- via: pushState

## 2026-09-24 14:18:50.830Z click
- element: {"tag":"a","role":null,"ariaLabel":"Jenniffer Duque, inicio","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"JD.JENNIFFERDUQUE"}

## 2026-09-24 14:18:51.123Z navigate
- url: http://localhost:3002/
- via: pushState

## 2026-09-24 14:19:01.483Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" BIENVENIDOS A JENNIFFER DUQUEHistorias quenos acercan.Noticias, ideas y voces que nos ayudan a entender el mundo desde una perspectiva más humana.Explorar noticias "}

## 2026-09-24 14:22:25.715Z unhandledrejection
- message: [react-router:hmr] No module update found for route routes/robots.txt
- stack: 
    Error: [react-router:hmr] No module update found for route routes/robots.txt
        at http://localhost:3002/@id/__x00__virtual:react-router/hmr-runtime:267:15

## 2026-09-24 14:24:56.239Z load
- url: http://localhost:3002/
- title: Jenniffer Duque News | Noticias de actualidad, cultura y contexto

## 2026-09-24 14:25:06.686Z load
- url: http://localhost:3003/
- title: Jenniffer Duque News | Noticias de actualidad, cultura y contexto

## 2026-09-24 14:25:07.541Z navigate
- url: http://localhost:3003/
- via: replaceState

## 2026-09-24 14:25:11.466Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Noticias"}

## 2026-09-24 14:25:11.615Z navigate
- url: http://localhost:3003/noticias
- via: pushState

## 2026-09-24 14:25:18.008Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Favoritos"}

## 2026-09-24 14:25:18.222Z navigate
- url: http://localhost:3003/favoritos
- via: pushState

## 2026-09-24 14:25:30.277Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Publicar"}

## 2026-09-24 14:25:30.587Z navigate
- url: http://localhost:3003/gestion
- via: pushState

## 2026-09-24 14:25:33.701Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Contacto"}

## 2026-09-24 14:25:33.873Z navigate
- url: http://localhost:3003/contacto
- via: pushState

## 2026-09-24 14:25:35.420Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-09-24 14:25:35.447Z navigate
- url: http://localhost:3003/
- via: pushState

## 2026-09-24 19:42:14.556Z load
- url: http://localhost:3003/
- title: Jenniffer Duque News | Noticias de actualidad, cultura y contexto

## 2026-09-24 19:42:16.989Z navigate
- url: http://localhost:3003/
- via: replaceState

## 2026-09-24 19:46:15.727Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Noticias"}

## 2026-09-24 19:46:16.389Z navigate
- url: http://localhost:3003/noticias
- via: pushState

## 2026-09-24 19:47:09.177Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Bogotá abre nuevos caminos para moverse en bicicleta"}

## 2026-09-24 19:47:10.186Z navigate
- url: http://localhost:3003/noticias/qz1bda0n4y68qq0
- via: pushState

## 2026-09-24 19:47:16.181Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Volver a noticias"}

## 2026-09-24 19:47:16.217Z navigate
- url: http://localhost:3003/noticias
- via: pushState

## 2026-09-24 19:47:17.490Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Favoritos"}

## 2026-09-24 19:47:17.604Z navigate
- url: http://localhost:3003/favoritos
- via: pushState

## 2026-09-24 19:48:15.821Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Publicar"}

## 2026-09-24 19:48:15.870Z navigate
- url: http://localhost:3003/gestion
- via: pushState

## 2026-09-24 19:49:21.528Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Contacto"}

## 2026-09-24 19:49:21.611Z navigate
- url: http://localhost:3003/contacto
- via: pushState

## 2026-09-24 19:49:23.363Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-09-24 19:49:23.394Z navigate
- url: http://localhost:3003/contacto
- via: replaceState

## 2026-09-24 19:49:25.589Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-09-24 19:49:25.616Z navigate
- url: http://localhost:3003/contacto
- via: replaceState

## 2026-09-24 19:49:26.467Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-09-24 19:49:26.500Z navigate
- url: http://localhost:3003/contacto
- via: replaceState

## 2026-09-24 19:49:28.678Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Contacto"}

## 2026-09-24 19:49:28.700Z navigate
- url: http://localhost:3003/contacto
- via: replaceState

## 2026-09-24 19:49:29.240Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-09-24 19:49:29.267Z navigate
- url: http://localhost:3003/contacto
- via: replaceState

## 2026-09-24 19:49:29.659Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-09-24 19:49:29.673Z navigate
- url: http://localhost:3003/contacto
- via: replaceState

## 2026-09-24 19:49:29.850Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-09-24 19:49:29.866Z navigate
- url: http://localhost:3003/contacto
- via: replaceState

## 2026-09-24 19:49:30.592Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-09-24 19:49:30.627Z navigate
- url: http://localhost:3003/contacto
- via: replaceState

## 2026-09-24 19:49:31.610Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Publicar"}

## 2026-09-24 19:49:31.641Z navigate
- url: http://localhost:3003/gestion
- via: pushState

## 2026-09-24 19:49:32.116Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Contacto"}

## 2026-09-24 19:49:32.133Z navigate
- url: http://localhost:3003/contacto
- via: pushState

## 2026-09-24 19:49:32.575Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-09-24 19:49:32.596Z navigate
- url: http://localhost:3003/contacto
- via: replaceState

## 2026-09-24 20:59:05.729Z load
- url: http://localhost:3003/
- title: Jenniffer Duque News | Noticias de actualidad, cultura y contexto

## 2026-09-24 20:59:07.293Z navigate
- url: http://localhost:3003/
- via: replaceState

## 2026-09-24 21:01:27.748Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Las bibliotecas se reinventan como lugares de encuentro"}

## 2026-09-24 21:01:27.827Z navigate
- url: http://localhost:3003/noticias/215b5648dofpzzu
- via: pushState

## 2026-09-25 01:48:48.743Z load
- url: http://localhost:3000/
- title: Jenniffer Duque News | Noticias de actualidad, cultura y contexto

## 2026-09-25 01:48:50.542Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-25 01:57:31.437Z load
- url: http://localhost:3000/
- title: Jenniffer Duque News | Noticias de actualidad, cultura y contexto

## 2026-09-25 02:10:21.848Z load
- url: http://localhost:3000/
- title: Jenniffer Duque News | Noticias de actualidad, cultura y contexto

## 2026-09-25 02:19:21.038Z load
- url: http://localhost:3000/
- title: Jenniffer Duque News | Noticias de actualidad, cultura y contexto

## 2026-09-25 02:19:22.194Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-25 15:21:56.663Z load
- url: http://localhost:3000/
- title: Jenniffer Duque News | Noticias de actualidad, cultura y contexto

## 2026-10-09 21:12:58.258Z load
- url: http://localhost:3000/
- title: Jenniffer Duque News | Noticias de actualidad, cultura y contexto

## 2026-10-09 21:12:59.176Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-09 21:13:09.431Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Noticias"}

## 2026-10-09 21:13:10.067Z navigate
- url: http://localhost:3000/noticias
- via: pushState

## 2026-10-09 21:13:15.362Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Bogotá abre nuevos caminos para moverse en bicicleta"}

## 2026-10-09 21:13:15.566Z navigate
- url: http://localhost:3000/noticias/qz1bda0n4y68qq0
- via: pushState

## 2026-10-09 21:13:21.061Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Explorar más noticias "}

## 2026-10-09 21:13:21.525Z navigate
- url: http://localhost:3000/noticias
- via: pushState

## 2026-10-09 21:13:27.374Z navigate
- url: http://localhost:3000/noticias/qz1bda0n4y68qq0
- via: popstate

## 2026-10-09 21:13:31.330Z navigate
- url: http://localhost:3000/noticias
- via: popstate

## 2026-10-09 21:13:35.419Z navigate
- url: http://localhost:3000/
- via: popstate

## 2026-10-09 21:13:37.547Z click
- element: {"tag":"a","role":null,"ariaLabel":"Jenniffer Duque News, inicio","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"JD.JENNIFFERDUQUENEWS"}

## 2026-10-09 21:13:37.739Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-09 21:13:39.447Z click
- element: {"tag":"a","role":null,"ariaLabel":"Jenniffer Duque News, inicio","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"JD.JENNIFFERDUQUENEWS"}

## 2026-10-09 21:13:39.811Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-09 21:14:00.880Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Noticias"}

## 2026-10-09 21:14:00.909Z navigate
- url: http://localhost:3000/noticias
- via: pushState

## 2026-10-09 21:14:04.711Z click
- element: {"tag":"button","role":null,"ariaLabel":"Guardar en favoritos","name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 21:14:07.355Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Favoritos"}

## 2026-10-09 21:14:08.273Z navigate
- url: http://localhost:3000/favoritos
- via: pushState

## 2026-10-09 21:14:21.023Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Publicar"}

## 2026-10-09 21:14:22.249Z navigate
- url: http://localhost:3000/gestion
- via: pushState

## 2026-10-09 21:14:27.268Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesiónCrear cuentaCorreo electrónicoContraseñaEntrar a mi espacio "}

## 2026-10-09 21:14:27.973Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear cuenta"}

## 2026-10-09 21:14:29.122Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesión"}

## 2026-10-09 21:14:31.158Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Contacto"}

## 2026-10-09 21:14:32.198Z navigate
- url: http://localhost:3000/contacto
- via: pushState

## 2026-10-09 21:14:38.972Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-10-09 21:14:40.686Z navigate
- url: http://localhost:3000/contacto
- via: replaceState

## 2026-10-09 21:14:40.767Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-10-09 21:14:40.787Z navigate
- url: http://localhost:3000/contacto
- via: replaceState

## 2026-10-09 21:14:43.655Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-10-09 21:14:43.705Z navigate
- url: http://localhost:3000/contacto
- via: replaceState

## 2026-10-09 21:14:47.621Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"contact-name","placeholder":"¿Cómo te llamas?","label":"name","value":"","valueLength":0,"text":""}

## 2026-10-09 21:14:47.835Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"name","type":null,"id":"contact-name","placeholder":"¿Cómo te llamas?","label":"name","value":"","valueLength":0,"text":""}

## 2026-10-09 21:14:48.835Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" ESTAMOS EN CONTACTOHablemos detu historia.¿Tienes una idea, una pregunta o algo que quieras compartir? Me encantaría leerte.OTRA FORMA DE CONECTARhola@jennifferduque.com01 / ESCRÍBENOSRESPONDEMOS LO ANTES POSIBLEDéjanos un mensajeTu nombre *Correo electrónico *Tu mensaje *Enviar mensaje * Campos obligatorios"}

## 2026-10-09 21:14:51.091Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-10-09 21:14:51.930Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-10-09 21:14:59.869Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Escríbenos "}

## 2026-10-09 21:14:59.889Z navigate
- url: http://localhost:3000/contacto
- via: pushState

## 2026-10-09 21:15:02.248Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"JD.JENNIFFERDUQUENEWSInicioNoticiasFavoritosPublicarContactoHablemos "}

## 2026-10-09 21:15:03.035Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-10-09 21:15:03.552Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-10-09 21:15:48.184Z load
- url: http://localhost:3000/
- title: Jenniffer Duque News | Noticias de actualidad, cultura y contexto

## 2026-10-09 21:15:48.667Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-09 21:17:21.151Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver historia "}

## 2026-10-09 21:17:21.706Z navigate
- url: http://localhost:3000/noticias/215b5648dofpzzu
- via: pushState

## 2026-10-09 21:21:51.040Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Volver a noticias"}

## 2026-10-09 21:21:52.000Z navigate
- url: http://localhost:3000/noticias
- via: pushState

## 2026-10-09 21:23:43.285Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Buscar una historia...","label":"Buscar noticias","value":"","valueLength":0,"text":""}

## 2026-10-09 21:23:43.327Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Buscar una historia...","label":"Buscar noticias","value":"","valueLength":0,"text":""}

## 2026-10-09 21:24:01.175Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Buscar una historia...","label":"Buscar noticias","value":"Trabaj","valueLength":6,"text":""}

## 2026-10-09 21:24:01.177Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Buscar una historia...","label":"Buscar noticias","value":"Trabaj","valueLength":6,"text":""}

## 2026-10-09 21:24:04.570Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Buscar una historia...","label":"Buscar noticias","value":"Trabaj","valueLength":6,"text":""}

## 2026-10-09 21:24:05.530Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Buscar una historia...","label":"Buscar noticias","value":"Trabaj","valueLength":6,"text":""}

## 2026-10-09 21:24:07.208Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Buscar una historia...","label":"Buscar noticias","value":"Trabaj","valueLength":6,"text":""}

## 2026-10-09 21:24:08.124Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Buscar una historia...","label":"Buscar noticias","value":"Trabaj","valueLength":6,"text":""}

## 2026-10-09 21:24:36.961Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Buscar una historia...","label":"Buscar noticias","value":"Trabaj","valueLength":6,"text":""}

## 2026-10-09 21:24:39.435Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Buscar una historia...","label":"Buscar noticias","value":"Trabaj","valueLength":6,"text":""}

## 2026-10-09 21:24:39.654Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"El trabajo artesanal mantiene vivas las historias del Caribe"}

## 2026-10-09 21:24:40.679Z navigate
- url: http://localhost:3000/noticias/7jb6w23bw4xusgt
- via: pushState

## 2026-10-09 21:25:05.218Z click
- element: {"tag":"h1","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"El trabajo artesanal mantiene vivas las historias del Caribe"}

## 2026-10-09 21:25:05.934Z click
- element: {"tag":"h1","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"El trabajo artesanal mantiene vivas las historias del Caribe"}

## 2026-10-09 21:25:41.794Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Volver a noticias"}

## 2026-10-09 21:25:42.522Z navigate
- url: http://localhost:3000/noticias
- via: pushState

## 2026-10-09 21:25:45.385Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Favoritos"}

## 2026-10-09 21:25:45.548Z navigate
- url: http://localhost:3000/favoritos
- via: pushState

## 2026-10-09 21:26:26.742Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Contacto"}

## 2026-10-09 21:26:26.827Z navigate
- url: http://localhost:3000/contacto
- via: pushState

## 2026-10-09 21:27:23.232Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-10-09 21:27:23.577Z navigate
- url: http://localhost:3000/contacto
- via: replaceState

## 2026-10-09 21:27:23.926Z click
- element: {"tag":"nav","role":null,"ariaLabel":"Navegación principal","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"InicioNoticiasFavoritosPublicarContacto"}

## 2026-10-09 21:27:24.365Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Publicar"}

## 2026-10-09 21:27:24.406Z navigate
- url: http://localhost:3000/gestion
- via: pushState

## 2026-10-09 21:27:49.123Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Contacto"}

## 2026-10-09 21:27:49.448Z navigate
- url: http://localhost:3000/contacto
- via: pushState

## 2026-10-09 21:27:51.866Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Favoritos"}

## 2026-10-09 21:27:52.367Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Publicar"}

## 2026-10-09 21:27:52.409Z network.error
- method: GET
- url: http://localhost:3000/contacto
- message: signal is aborted without reason
- durationMs: 542

## 2026-10-09 21:27:52.441Z navigate
- url: http://localhost:3000/gestion
- via: pushState

## 2026-10-09 21:27:54.859Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear cuenta"}

## 2026-10-09 21:27:56.470Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"JD.JENNIFFERDUQUENEWSInicioNoticiasFavoritosPublicarContactoHablemos "}

## 2026-10-09 21:27:57.081Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Contacto"}

## 2026-10-09 21:27:57.110Z navigate
- url: http://localhost:3000/contacto
- via: pushState

## 2026-10-09 21:27:57.860Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos "}

## 2026-10-09 21:27:58.040Z navigate
- url: http://localhost:3000/contacto
- via: replaceState

## 2026-10-09 21:55:54.083Z click
- element: {"tag":"h1","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Hablemos detu historia."}

## 2026-10-10 00:13:05.211Z load
- url: http://localhost:3000/noticias
- title: Noticias | Jenniffer Duque News

## 2026-10-10 00:13:09.751Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ciudad"}

## 2026-10-10 00:13:11.472Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Cultura"}

## 2026-10-10 00:13:13.150Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ciudad"}

## 2026-10-10 00:13:13.883Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ciudad"}

## 2026-10-10 00:13:14.106Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ciudad"}

## 2026-10-10 00:13:17.923Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Historias"}

## 2026-10-10 00:13:19.089Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Medio ambiente"}

## 2026-10-10 00:13:41.764Z load
- url: http://localhost:3000/noticias
- title: Noticias | Jenniffer Duque News

## 2026-10-10 00:13:42.277Z navigate
- url: http://localhost:3000/noticias
- via: replaceState

