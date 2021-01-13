import React, { useState, useEffect } from "react";
import { getPopular } from "./../components/FetchData";
import DisplayMovieData from ".././components/DisplayMovieData";
import Navbar from "./../components/Navbar";

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
  }, []);

  const getSearchData = (data) => {
    setMovieData(data);
    console.log("new data: ", data);
  };

  return (
    <>
      <Navbar searchData={getSearchData} />
      <DisplayMovieData data={movieData} />
    </>
  );
}

export default Home;

// TODO - Add Next/Previous pages
