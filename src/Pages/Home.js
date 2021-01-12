import React, { useState, useEffect } from "react";
import DisplayMovieData from ".././components/DisplayMovieData";
import axios from "axios";

require("dotenv").config({ path: "/../" });

function Home() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    let search = "Iron man";
    let API_KEY = "c52a1f0a294a2c11d901d69ed73d1290";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=true`;

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
      <DisplayMovieData movieData={movieData} />
    </div>
  );
}

export default Home;
