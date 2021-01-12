import React, { useState, useEffect } from "react";
import Poster from "./poster/Poster";
import { Link } from "react-router-dom";
import { getData, getPopular } from "./../components/FetchData";

function DisplayMovieData() {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setMovieData(
        await getPopular().then((response) => response.data.results)
      );
    }
    fetchData();
    console.log(movieData);
  }, []);

  return (
    <div className="posters">
      {movieData ? (
        <ul className="movie-list">
          {movieData.map((movie) => {
            if (movie.poster_path)
              return (
                <Link
                  className="poster"
                  key={movie.id}
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: movie.id,
                  }}
                >
                  <Poster
                    title={movie.title}
                    overview={movie.overview}
                    adult={movie.adult}
                    poster={movie.poster_path}
                    release_date={movie.release_date}
                  />
                </Link>
              );
          })}
        </ul>
      ) : (
        <div>Error Displaying Data</div>
      )}
    </div>
  );
}

export default DisplayMovieData;
