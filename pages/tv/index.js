import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

import { getPopular } from "./../../TheMovieDB";

import DisplayShows from "../../components/DisplayShows";

export default function index({ data, maxPages, page }) {
     const [shows, setShows] = useState(null);

     useEffect(() => {
          setShows(data);
     }, []);

     return (
          <main>
               <Navbar />
               <DisplayShows shows={shows} />
          </main>
     );
}

export const getServerSideProps = async (ctx) => {
     let data = null;
     let maxPages = 1;
     let page = ctx.query.page;

     try {
          if (!page) {
               page = 1;
          }
          const response = await getPopular(page, "tv");
          data = await response.json();
          maxPages = data.total_pages;
     } catch (error) {
          console.log(error);
     }

     return {
          props: {
               data,
               maxPages: maxPages,
               page,
          },
     };
};
