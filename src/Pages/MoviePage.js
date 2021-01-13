import React, { useEffect, useState } from "react";
import { getDataById } from "./../components/FetchData";

const imgUrl = "https://image.tmdb.org/t/p/original";

function MoviePage({ match }) {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    getDataById(match.params.id, "movie")
      .then((res) => {
        setMovieData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="movie-page">
      {movieData ? (
        <>
          <div className="backdrop backdrop-img">
            {movieData.backdrop_path ? (
              <>
                <img
                  src={`${imgUrl}${movieData.backdrop_path}`}
                  alt={movieData.title}
                  className="poster-img"
                />
              </>
            ) : (
              <></>
            )}
            <div className="backdrop-overlay"></div>
          </div>
          <div className="movie-page-data container">
            <img
              className="movie-page-poster"
              src={`${imgUrl}${movieData.poster_path}`}
              alt={movieData.title}
            />
            <div className="movie-page-content">
              <h1 className="movie-page-title">
                {movieData ? movieData.title : "Loading Title"}
              </h1>
              <hr />
              <div className="movie-page-overview">
                <h2>Overview</h2>
                <p>{movieData.overview}</p>
                <h4>Runtime: {movieData.runtime} minutes</h4>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default MoviePage;
