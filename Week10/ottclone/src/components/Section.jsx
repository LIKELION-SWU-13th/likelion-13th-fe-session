import React, { useEffect, useRef, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchPopularMovies } from '../utils/api';

//영화 목록을 가로 슬라이더 형태로 표시
const Section = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef();

  //컴포넌트가 마운트될 때 인기 영화 데이터를 가져온다
  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchPopularMovies();//api로부터 인기영화리스트 가져온다
        setMovies(data);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, []);

  //좌우 스크롤
  const scroll = (dir) => {
    const container = sliderRef.current;
    const scrollAmount = container.offsetWidth * 0.9; //버튼 클릭 시 한 번에 이동(슬라이드)할 양
    container.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '1.5rem 2rem', position: 'relative' }}>
        {/*섹션 제목*/}
      <h2 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{title}</h2>
      {/*영화카드 담을 가로 슬라이드*/}
      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: '1rem',
          paddingBottom: '0.5rem',
          scrollbarWidth: 'none',     //스크롤바 숨기기

        }}
      >
        {/*영화 데이터를 무비카드 컴포넌트로 하나씩 렌더링*/}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {/*좌우 화살표 이동 버튼*/}
      <button onClick={() => scroll('left')} style={arrowButton('left')}>{'<'}</button>
      <button onClick={() => scroll('right')} style={arrowButton('right')}>{'>'}</button>
    </section>
  );
};

//좌우 화살표 이동 버튼 스타일
const arrowButton = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '10px',
  transform: 'translateY(-50%)',
  zIndex: 5,
  background: 'rgba(0, 0, 0, 0.4)',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  cursor: 'pointer',
  fontSize: '1.2rem',
});

export default Section;
