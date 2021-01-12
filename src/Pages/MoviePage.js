import React, { useEffect, useState } from "react";
import axios from "axios";

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
                  src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
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
            <h1>
              Movie Title: {movieData ? movieData.title : "Loading Title"}
            </h1>
          </div>
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default MoviePage;
