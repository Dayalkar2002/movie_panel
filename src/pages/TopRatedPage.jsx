import React, { useEffect, useState } from "react";
import { getMovies } from "../api";
import MovieCard from "../components/MovieCard";

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMovies("top_rated")
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Top-Rated Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
