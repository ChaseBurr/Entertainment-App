import React, { useEffect, useState } from "react";
import axios from "axios";

const imgUrl = "https://image.tmdb.org/t/p/original";

function MoviePage({ match }) {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    let API_KEY = "c52a1f0a294a2c11d901d69ed73d1290";
    const url = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}`;

    axios
      .get(url)
      .then((res) => {
        console.log("response ", res.data);
        setMovieData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="movie-page">
      {movieData ? (
        <>
          <div className="backdrop">
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