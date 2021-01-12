import React from "react";
import "./Poster.css";

function Poster({ title, poster, overview, adult, release_date }) {
  return (
    <div className="poster">
      <div className="backdrop">
        <img
          className="poster-img"
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt={title}
        />
      </div>
      <div className="poster-data">
        <h1 className="poster-title">{title}</h1>
        <h3 className="poster-description">{overview}</h3>
      </div>
    </div>
  );
}

export default Poster;
