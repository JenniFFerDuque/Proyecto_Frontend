import { Database, Braces, SquareStack, MemoryStick } from 'lucide-react';

const TECHS = [
  {
    icon: SquareStack,
    name: 'HTML · CSS · JavaScript',
    note: 'Estructura semántica, estilos y lógica de interacción.',
  },
  {
    icon: Braces,
    name: 'Tailwind CSS',
    note: 'Utilidades de estilo aplicadas sobre tokens del tema.',
  },
  {
    icon: MemoryStick,
    name: 'localStorage',
    note: 'Tus favoritos se conservan entre sesiones en este navegador.',
  },
  {
    icon: Database,
    name: 'sessionStorage',
    note: 'Registro de tu actividad solo durante esta sesión.',
  },
];

export function TechnologiesPanel() {
  return (
    <section className="section-wrap" style={{ paddingBottom: 30 }}>
      <div className="results-meta">
        <span>TECNOLOGÍAS EN USO</span>
        <span>IMPLEMENTACIÓN LOCAL</span>
      </div>
      <div
        className="news-grid"
        style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
      >
        {TECHS.map((tech) => (
          <div key={tech.name} className="news-card" style={{ padding: 0 }}>
            <div className="news-card-content" style={{ padding: '24px 22px' }}>
              <tech.icon size={26} strokeWidth={1.4} color="#477c99" />
              <h3
                style={{
                  fontSize: 18,
                  margin: '18px 0 8px',
                  lineHeight: 1.2,
                }}
              >
                {tech.name}
              </h3>
              <p style={{ fontSize: 12, lineHeight: 1.7, marginBottom: 0 }}>
                {tech.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
