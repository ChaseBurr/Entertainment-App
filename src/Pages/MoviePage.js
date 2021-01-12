import React, { useEffect, useState } from "react";
import axios from "axios";

function MoviePage({ match }) {
  const [movieData, setMovieData] = useState([]);
  console.log();

  useEffect(() => {
    let API_KEY = "c52a1f0a294a2c11d901d69ed73d1290";
    let search = match.params.title;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`;

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setMovieData(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Movie Title: {match.params.title}</h1>
    </div>
  );
}

export default MoviePage;
