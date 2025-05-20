import React from "react";
import "./Home.css";
import Header from "../components/Header";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
import { useState, useEffect, useMemo } from "react";
import Slider from "react-slick";

function Home() {
  const [movies, setMovies] = useState([]);
  //로딩/에러 상태
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //메인배너
  const BANNERS = useMemo(() => [banner1, banner2, banner3], []);
  const bannerSettings =useMemo(()=>( {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }),[]);
  //색션 포스터
  const sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    infinite: true,
    speed: 500,
  };

  //섹션 포스터 이미지 api
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`;

    console.log("API key:", API_KEY);
    console.log("요청 URL", url);
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("응답 실패!");
        return response.json();
      })
      .then((data) => {
        console.log("전체 응답:", data);
        console.log("첫번 째 영화:", data.results[0]);
        setMovies(data.results.slice(0, 20));
      })
      .catch((err) => {
        console.error("에러:", err);
        setError("영화 데이터를 불러오지 못했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg">
      <Header />

      <div className="main-banner">
        <Slider {...bannerSettings}>
          {BANNERS.map((img, idx) => (
            <div key={idx}>
              <img
                className="banner-images"
                src={img}
                alt={`Banner ${idx + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="section-poster">
        <h5> 급상승 영화</h5>
        {loading && <p>로딩 중...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && (
          <Slider {...sliderSettings}>
            {movies.map((movie) => (
              <div key={movie.id}>
                <img
                  className="poster-images"
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Home;
