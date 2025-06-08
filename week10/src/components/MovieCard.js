import React from 'react';
import './MovieCard.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCard({ posterPath }) {
  const imageUrl = posterPath ? `${IMAGE_BASE_URL}${posterPath}` : '/images/sample-poster.jpg';

  return (
    <div className="movie-card">
      <img src={imageUrl} alt="poster" />
    </div>
  );
}

export default React.memo(MovieCard);