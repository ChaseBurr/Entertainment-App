import React from "react";
import Poster from "./poster/Poster";

function DisplayMovieData({ movieData }) {
  return (
    <div className="posters">
      {movieData ? (
        <ul className="movie-list">
          {movieData.map((movie) => (
            <Poster
              title={movie.title}
              overview={movie.overview}
              adult={movie.adult}
              poster={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </ul>
      ) : (
        <div>Error</div>
      )}
    </div>
  );
}

export default DisplayMovieData;
