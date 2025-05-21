import {useState, useEffect} from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`;

    // API 키 확인
    console.log('API Key:', API_KEY);
    console.log('요청 URL:, url');

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('전체 응답:', data);
        console.log('첫 번째 영화:', data.results[0]);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <h1>인기 영화</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={movie.title}
            />
            <p>평점: {movie.vote_average}/10</p>
    </div>
      ))};
      </div>
  );}

export default App;
