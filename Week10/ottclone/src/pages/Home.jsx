import React from 'react';
import Banner from '../components/Banner';
import Section from '../components/Section';

const Home = () => {
  return (
    <div>
      <Banner />
      <Section title="실시간 인기 콘텐츠" />
      <Section title="오직 WAVVE에서" />
      <Section title="방영 중인 예능" />
      <Section title="드라마 추천" />
      <Section title="영화 추천" />
    </div>
  );
};

export default Home;