import React, { useEffect, useState } from 'react';
import './ContentSection.css';
import MovieCard from './MovieCard';

const API_BASE_URL = 'https://api.themoviedb.org/3';

function ContentSection({ title, apiEndpoint }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = process.env.REACT_APP_TMDB_API_KEY;
        if (!apiKey) throw new Error('API 키가 설정되지 않았습니다.');

        const response = await fetch(`${API_BASE_URL}${apiEndpoint}?api_key=${apiKey}&language=ko-KR`);
        if (!response.ok) throw new Error('TMDb API 요청 실패');

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [apiEndpoint]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <section className="content-section">
      <h2>{title}</h2>
      <div className="slider">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </section>
  );
}

export default React.memo(ContentSection);