import React from "react";
import "./MovieCard.css";

const MovieCard = React.memo(({movie}) => {
    return (
        <div className="movie_card">
            <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="movie-title">{movie.title}</div>
        </div>
    );
});

export default React.memo(MovieCard);