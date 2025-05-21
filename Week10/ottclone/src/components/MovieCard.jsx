import React from 'react';

const MovieCard = React.memo(({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` 
    : 'https://via.placeholder.com/185x278?text=No+Image';

  return (
    <div
      style={{
        minWidth: '185px',
        height: '278px',
        marginRight: '12px',
        borderRadius: '10px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s',
        flexShrink: 0,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <img
        src={posterUrl}
        alt={movie.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />
    </div>
  );
});

export default MovieCard;
