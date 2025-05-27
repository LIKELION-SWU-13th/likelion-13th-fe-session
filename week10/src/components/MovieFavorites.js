import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import FavoritesList from './FavoritesList';
import './MovieFavorites.css';
import axios from 'axios';

const API_URL = 'https://682eddde746f8ca4a47ea8b7.mockapi.io/favorites';

function MovieFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 샘플 영화 데이터
  const sampleMovies = [
    {
      id: '550',
      title: '파이트 클럽',
      poster: 'https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'
    },
    {
      id: '155',
      title: '다크 나이트',
      poster: 'https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
    {
      id: '13',
      title: '포레스트 검프',
      poster: 'https://image.tmdb.org/t/p/w300/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg'
    }
  ];

  // ✅ GET: 찜한 영화 목록 조회
  const fetchFavorites = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setFavorites(response.data);
      setError(null);
    } catch (err) {
      setError('찜한 영화 목록을 불러오는데 실패했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ POST: 영화 찜하기
  const addToFavorites = async (movie) => {
    try {
      const response = await axios.post(API_URL, {
        movieId: movie.id,
        title: movie.title,
        poster: movie.poster,
        addedAt: new Date().toISOString()
      });
      setFavorites(prev => [...prev, response.data]);
      alert(`"${movie.title}"을(를) 찜 목록에 추가했습니다!`);
    } catch (err) {
      alert('찜하기에 실패했습니다.');
      console.error(err);
    }
  };

  // ✅ DELETE: 찜 취소
  const removeFromFavorites = async (favoriteId, title) => {
    const confirmDelete = window.confirm(`"${title}"을(를) 찜 목록에서 제거하시겠습니까?`);
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/${favoriteId}`);
      setFavorites(prev => prev.filter(fav => fav.id !== favoriteId));
      alert(`"${title}"을(를) 찜 목록에서 제거했습니다.`);
    } catch (err) {
      alert('찜 취소에 실패했습니다.');
      console.error(err);
    }
  };

  // 영화가 이미 찜되어 있는지 확인
  const isMovieFavorited = (movieId) => {
    return favorites.some(fav => fav.movieId === movieId);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  // 렌더링
  return (
    <div className="movie-favorites-container">
      <h1 className="main-title">🎬 찜한 영화 CRUD 실습</h1>

      {/* 샘플 영화 목록 */}
      <div className="movies-section">
        <h2 className="section-title">🍿 영화 목록</h2>
        <div className="movies-grid">
          {sampleMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddToFavorites={addToFavorites}
              isFavorited={isMovieFavorited(movie.id)}
            />
          ))}
        </div>
      </div>

      {/* 에러 메시지 */}
      {error && (
        <div className="error-message">
          ❌ {error}
        </div>
      )}

      {/* 찜한 영화 목록 */}
      <FavoritesList
        favorites={favorites}
        onRemoveFavorite={removeFromFavorites}
        loading={loading}
        onRefresh={fetchFavorites}
      />
    </div>
  );
}

export default MovieFavorites;
