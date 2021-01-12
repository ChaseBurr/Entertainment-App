import React, { useState, useEffect } from "react";
import { getData, getPopular } from "./../components/FetchData";
import DisplayMovieData from ".././components/DisplayMovieData";

require("dotenv").config({ path: "/../" });

function Home() {
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
    <>
      <DisplayMovieData data={movieData} />
    </>
  );
}

export default Home;

// TODO - Add Next/Previous pages
