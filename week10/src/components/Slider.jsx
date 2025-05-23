import React from "react";
import Slider from "react-slick";

const BannerSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`banner-${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
