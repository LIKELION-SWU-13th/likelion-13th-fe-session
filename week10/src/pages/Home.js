import React from 'react';
import CarouselBanner from '../components/CarouselBanner';
import ContentSection from '../components/ContentSection';

function Home() {
  return (
    <div>
      <CarouselBanner />
      <ContentSection title="인기 영화" apiEndpoint="/movie/popular" />
      <ContentSection title="최고 평점 영화" apiEndpoint="/movie/top_rated" />
      <ContentSection title="지금 상영 중" apiEndpoint="/movie/now_playing" />
      <ContentSection title="인기 TV 프로그램" apiEndpoint="/tv/popular" />
      <ContentSection title="최고 평점 TV 프로그램" apiEndpoint="/tv/top_rated" />
    </div>
  );
}

export default Home;