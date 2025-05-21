import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`);
      const data = await res.json();
      setMovies(data.results.slice(0, 5));
    };
    fetchBanners();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev+1) % movies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [movies]);

  const handlePrev = () => {
    setIndex((prev) => (prev-1+ movies.length) % movies.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev+1) % movies.length);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '520px', overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          width: `${movies.length*100}%`,
          height: '100%',
          transition: 'transform 1s ease-in-out',
          transform: `translateX(-${index * (100 / movies.length)}%)`,
        }}
      >
        {movies.map((movie, i) => (
          <div key={i} style={{ width: `${100 / movies.length}%`, flexShrink: 0, position: 'relative' }}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/*오버레이*/}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
              zIndex: 1
            }} />

            {/*영화텍스트*/}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '40px',
              zIndex: 2,
              color: '#fff',
              maxWidth: '800px'//글씨 너비
            }}>
              <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>{movie.title}</h1>
              <p style={{ fontSize: '15px', lineHeight: '1.4', maxHeight: '200px', overflow: 'hidden' }}>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>

      {/*좌우(<,>) 버튼*/}
      <button onClick={handlePrev} style={navButtonStyle('left')}>{'<'}</button>
      <button onClick={handleNext} style={navButtonStyle('right')}>{'>'}</button>
    </div>
  );
};

const navButtonStyle = (side) => ({
  position: 'absolute',
  [side]: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '30px',
  color: '#fff',
  backgroundColor: 'rgba(0,0,0,0.3)',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  zIndex: 10
});

export default Banner;
