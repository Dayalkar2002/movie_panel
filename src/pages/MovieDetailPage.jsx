import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetail, getMovieCredits, IMAGE_URL } from "../api";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieDetail(id).then((res) => setMovie(res.data));
    getMovieCredits(id).then((res) => setCast(res.data.cast));
  }, [id]);

  return (
    <div>
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
        </>
      )}
      <h3>Cast</h3>
      <div className="cast-grid">
        {cast.map((actor) => (
          <div key={actor.id}>
            <img src={`${IMAGE_URL}${actor.profile_path}`} alt={actor.name} />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;
