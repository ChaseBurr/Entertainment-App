import React from "react";
import DisplayMovieData from ".././components/DisplayMovieData";

require("dotenv").config({ path: "/../" });

function Home() {
  return (
    <>
      <DisplayMovieData />
    </>
  );
}

export default Home;
