import React from 'react';
import CarouselBanner from '../components/CarouselBanner';
import ContentSection from '../components/ContentSection';

function Home() {
  return (
    <div>
      <CarouselBanner />
      <ContentSection title="믿고 보는 웨이브 에디터 추천작" />
      <ContentSection title="실시간 인기 콘텐츠" />
      <ContentSection title="지금 뜨는 예능" />
      <ContentSection title="드라마 명작 다시보기" />
      <ContentSection title="오직 Wavve에서" />
    </div>
  );
}

export default Home;