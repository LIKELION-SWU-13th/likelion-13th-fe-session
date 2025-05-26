import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopSlider.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function TopSlider() {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef();

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const fetchNowPlaying = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchNowPlaying();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="play-container">
      <div className="slider-header">
        <h2 className="section-title">오늘의 티빙 TOP 20</h2>
      </div>

      <Slider {...settings} className="slider" ref={sliderRef}>
        {movies.map((movie, index) => (
          <div className="poster-wrapper">
          <p className="number">{index + 1}</p>
          <div key={movie.id} className="poster-card">
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="poster-image"
            />
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TopSlider;
