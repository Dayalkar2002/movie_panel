import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../api";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={
            movie.poster_path
              ? `${IMAGE_URL}${movie.poster_path}`
              : "https://via.placeholder.com/200x300?text=No+Image"
          }
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
