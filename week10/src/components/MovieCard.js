import React from 'react';
import './MovieCard.css';

function MovieCard() {
  return (
    <div className="movie-card">
      <img src="/images/sample-poster.jpg" alt="poster" />
    </div>
  );
}

export default React.memo(MovieCard);