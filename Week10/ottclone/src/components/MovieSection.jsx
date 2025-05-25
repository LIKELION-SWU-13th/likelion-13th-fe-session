import Slider from 'react-slick';//슬라이더 기능 라이브러리
import MovieCard from './MovieCard';

const MovieSection = ({ title, movies }) => {
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
  };

  return (
    <section className="movie-section">
      <h2>{title}</h2>
      <Slider {...settings}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Slider>
    </section>
  );
};

export default MovieSection;
