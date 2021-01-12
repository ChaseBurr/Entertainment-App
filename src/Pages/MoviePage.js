import React, { useEffect, useState } from "react";
import axios from "axios";

function MoviePage({ match }) {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    let API_KEY = "c52a1f0a294a2c11d901d69ed73d1290";
    let movieId = match.params.id;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

    axios
      .get(url)
      .then((res) => {
        console.log("response ", res.data);
        setMovieData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Movie Title: {movieData ? movieData.title : "Loading Title"}</h1>
    </div>
  );
}

export default MoviePage;
