import "./App.css";
import DisplayMovieData from "./components/DisplayMovieData";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let search = "Iron man";
    let API_KEY = "c52a1f0a294a2c11d901d69ed73d1290";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`;

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setMovieData(res.data.results);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <header>
        <form id="form" method="GET">
          <h1>Movie Search</h1>
          <input
            placeholder="Search..."
            type="text"
            name="search"
            className="movie-search form-control"
          />
          <input type="submit" value="Search" />
        </form>
      </header>
      <DisplayMovieData movieData={movieData} />
    </div>
  );
}

export default App;
