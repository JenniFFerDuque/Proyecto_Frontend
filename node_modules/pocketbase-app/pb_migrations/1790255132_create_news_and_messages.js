/// <reference path="../pb_data/types.d.ts" />

migrate((app) => {
  const users = app.findCollectionByNameOrId('users');
  const news = new Collection({
    type: 'base', name: 'news',
    listRule: '', viewRule: '',
    createRule: "@request.auth.id != '' && @request.body.owner = @request.auth.id",
    updateRule: "@request.auth.id != '' && owner = @request.auth.id && @request.body.owner:changed = false",
    deleteRule: "@request.auth.id != '' && owner = @request.auth.id",
    fields: [
      { name: 'title', type: 'text', required: true, max: 180 },
      { name: 'category', type: 'text', required: true, max: 60 },
      { name: 'summary', type: 'text', required: true, max: 350 },
      { name: 'body', type: 'text', required: true },
      { name: 'image', type: 'url' },
      { name: 'owner', type: 'relation', collectionId: users.id, maxSelect: 1, cascadeDelete: false },
      { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
      { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true }
    ]
  });
  app.save(news);
  const rows = [
    { title: 'Bogotá abre nuevos caminos para moverse en bicicleta', category: 'Ciudad', summary: 'Los espacios verdes y las rutas de movilidad activa transforman la manera de recorrer la capital.', image: 'https://images.hostinger.com/9367b3f9-2e48-4b64-a688-fc85411d99f8.png', body: 'La ciudad sigue apostando por una movilidad más cercana a las personas. Nuevas conexiones entre parques, barrios y corredores urbanos permiten que más habitantes elijan la bicicleta para sus trayectos cotidianos.\n\nMás allá del transporte, estas rutas se convierten en espacios de encuentro y recreación. La propuesta invita a descubrir la ciudad a otro ritmo, disfrutar del aire libre y reconocer el valor de los espacios públicos compartidos.\n\nEl reto ahora es mantener las rutas accesibles, seguras y bien conectadas para que sus beneficios lleguen a más comunidades.' },
    { title: 'Las bibliotecas se reinventan como lugares de encuentro', category: 'Cultura', summary: 'Lectura, conversación y aprendizaje conviven en una nueva generación de espacios públicos.', image: 'https://images.hostinger.com/075a7b48-adde-43ce-886d-83222cf60175.png', body: 'En Medellín, las bibliotecas son mucho más que estanterías de libros. Sus salas acogen talleres, conversaciones y actividades para lectores de todas las edades.\n\nEstos espacios ofrecen a las comunidades una oportunidad para aprender, crear y encontrarse. Su arquitectura abierta y sus programas culturales acercan el conocimiento a la vida diaria.\n\nLa invitación es simple: entrar, explorar y hacer de la biblioteca un lugar propio.' },
    { title: 'El trabajo artesanal mantiene vivas las historias del Caribe', category: 'Historias', summary: 'Manos expertas transmiten técnicas tradicionales a una nueva generación de creadores.', image: 'https://images.hostinger.com/28fd02a6-083e-423e-8f87-4ae41e73a224.png', body: 'En los talleres de Cartagena, cada pieza comienza con paciencia y conocimiento. Las fibras, los colores y las formas hablan de oficios compartidos de generación en generación.\n\nPara quienes practican estas técnicas, crear también es preservar la memoria. Los encuentros entre artesanos y jóvenes permiten que el oficio evolucione sin perder sus raíces.\n\nConocer el origen de cada objeto es una forma de valorar el tiempo y las personas que hay detrás de él.' },
    { title: 'Comunidades trabajan por la recuperación de los manglares', category: 'Medio ambiente', summary: 'Proyectos de restauración reúnen conocimiento local y trabajo científico en la costa colombiana.', image: 'https://images.hostinger.com/7774f683-cdb6-4a4e-84f8-58062958c2e9.png', body: 'Los manglares protegen la costa y albergan una extraordinaria diversidad de vida. Cerca de Santa Marta, equipos locales trabajan para recuperar zonas afectadas y cuidar estos ecosistemas.\n\nLa restauración combina observación del territorio, seguimiento ambiental y participación comunitaria. Cada jornada representa un paso para devolver equilibrio al paisaje.\n\nCuidar los manglares también significa proteger a las comunidades que viven cerca de ellos y dependen de su salud.' }
  ];
  for (const row of rows) { const record = new Record(news); record.load(row); app.save(record); }

  const messages = new Collection({
    type: 'base', name: 'contact_messages',
    listRule: null, viewRule: null, createRule: '', updateRule: null, deleteRule: null,
    fields: [
      { name: 'name', type: 'text', required: true, max: 120 },
      { name: 'email', type: 'email', required: true },
      { name: 'message', type: 'text', required: true, max: 3000 },
      { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
      { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true }
    ]
  });
  app.save(messages);
}, (app) => {
  app.delete(app.findCollectionByNameOrId('contact_messages'));
  app.delete(app.findCollectionByNameOrId('news'));
});
