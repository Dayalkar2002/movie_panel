import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../api";
import MovieCard from "../components/MovieCard";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      setLoading(true);
      searchMovies(query)
        .then((res) => {
          setMovies(res.data.results);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [query]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Search Results for: "{query}"</h2>
      {movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
