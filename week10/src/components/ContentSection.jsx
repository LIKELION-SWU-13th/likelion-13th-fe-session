import React, {useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import "./ContentSection.css";

function ContentSection({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(fetchUrl)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));
    }, [fetchUrl]);

    return (
        <section className="content_section">
            <h2>{title}</h2>
            <div className="card_row">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}

export default React.memo(ContentSection);