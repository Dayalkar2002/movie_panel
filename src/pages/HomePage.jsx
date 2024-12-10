import { useEffect, useState } from "react";
import { getMovies, IMAGE_URL } from "../api";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies("popular").then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
