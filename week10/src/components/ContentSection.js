import React from 'react';
import './ContentSection.css';
import MovieCard from './MovieCard';

function ContentSection({ title }) {
  const dummyData = new Array(10).fill(null);
  return (
    <section className="content-section">
      <h2>{title}</h2>
      <div className="slider">
        {dummyData.map((_, idx) => (
          <MovieCard key={idx} />
        ))}
      </div>
    </section>
  );
}

export default React.memo(ContentSection);