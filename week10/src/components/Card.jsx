import "./Card.css";
import { useState, useEffect } from "react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Card = React.memo(function Card({ cardtitle }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`;

    fetch(url) //API 호출
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
  };

  return (
    <div className="card">
      <div className="cardtitle">{cardtitle}</div>
      <div className="container">
        <Slider className="slider" {...settings}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <div className="wrapper">
                <img
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  alt={movie.title}
                  className="poster"
                />
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
});

export default Card;
