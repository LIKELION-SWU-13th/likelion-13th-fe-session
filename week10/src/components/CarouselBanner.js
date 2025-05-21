import React from 'react';
import Slider from 'react-slick';
import './CarouselBanner.css';

const banners = [
  { id: 1, image: '/images/banner1.jpg' },
  { id: 2, image: '/images/banner2.jpg' },
  { id: 3, image: '/images/banner3.jpg' },
];

function CarouselBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} className="banner-slider">
      {banners.map((item) => (
        <div key={item.id} className="banner-slide">
          <img src={item.image} alt={`banner-${item.id}`} />
        </div>
      ))}
    </Slider>
  );
}

export default CarouselBanner;