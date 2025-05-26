import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ContentSlider.css";


import banner1 from "../image/banner1.jpg";
import banner2 from "../image/banner2.jpg";
import banner3 from "../image/banner3.jpg";
import banner4 from "../image/banner4.jpg";
import banner5 from "../image/banner5.jpg";
import banner6 from "../image/banner6.jpg";


import banner1title from "../image/banner1title.png";
import banner2title from "../image/banner2title.png";
import banner3title from "../image/banner3title.png";
import banner4title from "../image/banner4title.png";
import banner5title from "../image/banner5title.png";
import banner6title from "../image/banner6title.png";

function ContentSlider() {
  const movieImages = [
    { id: 1, title: "banner 1", imageUrl: banner1, logo: banner1title },
    { id: 2, title: "banner 2", imageUrl: banner2, logo: banner2title },
    { id: 3, title: "banner 3", imageUrl: banner3, logo: banner3title },
    { id: 4, title: "banner 4", imageUrl: banner4, logo: banner4title },
    { id: 5, title: "banner 5", imageUrl: banner5, logo: banner5title },
    { id: 6, title: "banner 6", imageUrl: banner6, logo: banner6title }
  ];

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <img src="https://www.tving.com/img/icon_slide_right.svg" alt="next" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <img src="https://www.tving.com/img/icon_slide_left.svg" alt="prev" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
//     appendDots: dots => (
//       <div className="custom-dots-wrapper">
//         <ul>{dots}</ul>
//       </div>
//     ),
//     customPaging: i => (
//   <button className="custom-dot" />
// ),
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {movieImages.map((movie) => (
          <div key={movie.id} className="slide">
            <img src={movie.imageUrl} alt={movie.title} className="slide-img" />
            <div className="slide-overlay">
              <div className="overlay-logo-wrapper">
                <img
                  src={movie.logo}
                  alt={`${movie.title} 로고`}
                  className="overlay-logo"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ContentSlider;
