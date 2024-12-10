import React from "react";
import { IMAGE_URL } from "../api";

const CastCard = ({ actor }) => {
  return (
    <div className="cast-card">
      <img
        src={
          actor.profile_path
            ? `${IMAGE_URL}${actor.profile_path}`
            : "https://via.placeholder.com/150?text=No+Image"
        }
        alt={actor.name}
      />
      <p>{actor.name}</p>
    </div>
  );
};

export default CastCard;
