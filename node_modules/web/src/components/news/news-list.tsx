import { useState } from 'react';
import { Search } from 'lucide-react';
import type { NewsItem } from '@/lib/news';
import { NewsCard } from '@/components/news-card';

export function NewsList({ items }: { items: NewsItem[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todas');
  const categories = [
    'Todas',
    ...Array.from(new Set(items.map(item => item.category))),
  ];
  const normalizedQuery = query.toLocaleLowerCase('es');
  const filteredItems = items.filter(item => {
    const matchesCategory = category === 'Todas' || item.category === category;
    const searchableText = `${item.title} ${item.summary} ${item.category}`
      .toLocaleLowerCase('es');

    return matchesCategory && searchableText.includes(normalizedQuery);
  });

  function resetFilters() {
    setQuery('');
    setCategory('Todas');
  }

  return (
    <section className="section-wrap listing-section">
      <div className="filter-bar">
        <div className="filter-categories" aria-label="Filtrar por categoría">
          {categories.map(name => (
            <button
              key={name}
              type="button"
              className={category === name ? 'filter active' : 'filter'}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <label className="search-box">
          <Search size={18} />
          <span className="sr-only">Buscar noticias</span>
          <input
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="Buscar una historia..."
          />
        </label>
      </div>

      <div className="results-meta">
        <span>
          {filteredItems.length}{' '}
          {filteredItems.length === 1 ? 'HISTORIA' : 'HISTORIAS'}
        </span>
        <span>EXPLORA A TU RITMO</span>
      </div>

      {filteredItems.length > 0 ? (
        <div className="news-grid">
          {filteredItems.map((item, index) => (
            <NewsCard item={item} index={index} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No encontramos noticias.</h2>
          <p>Prueba con otra palabra o elige una categoría diferente.</p>
          <button
            type="button"
            className="text-link"
            onClick={resetFilters}
          >
            Ver todas las noticias
          </button>
        </div>
      )}
    </section>
  );
}
