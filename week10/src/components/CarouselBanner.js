import React from 'react';
import Slider from 'react-slick'; //슬라이더 라이브ㅡ러리
import './CarouselBanner.css'; //스타일파일

const banners = [
  { id: 1, image: '/images/banner1.jpg' },
  { id: 2, image: '/images/banner2.jpg' },
  { id: 3, image: '/images/banner3.jpg' },
];

//배너에 사용할 이미지 데이터

function CarouselBanner() {
  //슬릭 슬라이더 설정
  const settings = { 
    dots: true, //인디케이터 점 표시
    infinite: true, //무한 루프
    speed: 500, //슬라이드 속도 
    slidesToShow: 1, //한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, //스크롤할 때 몇 개씩 넘길지
    autoplay: true, //자동 슬라이드 
  };

  return (
    <Slider {...settings} className="banner-slider"> {/*설정을 전달*/}
      {banners.map((item) => (
        <div key={item.id} className="banner-slide">
          <img src={item.image} alt={`banner-${item.id}`} /> {/*이미지 렌더*/}
        </div>
      ))}
    </Slider>
  );
}

export default CarouselBanner;