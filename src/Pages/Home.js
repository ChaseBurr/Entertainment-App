import React, { useState, useEffect } from "react";
import { getPopular } from "./../components/FetchData";
import DisplayMovieData from ".././components/DisplayMovieData";
import Navbar from "./../components/Navbar";

require("dotenv").config({ path: "/../" });

function Home() {
   const [movieData, setMovieData] = useState([]);
   const [numPages, setNumPages] = useState([]);
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
      setNumPages(data);
      console.log(numPages);
   };

   return (
      <>
         <Navbar searchData={getSearchData} />
         <DisplayMovieData data={movieData} />
         <div className="page-buttons">
            <button className="btn">Previous</button>
            <button className="btn">Next</button>
         </div>
      </>
   );
}

export default Home;

// TODO - Add Next/Previous pages
