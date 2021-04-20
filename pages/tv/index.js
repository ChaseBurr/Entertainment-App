import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { getPopular } from "./../../TheMovieDB";
import DisplayShows from "../../components/DisplayShows";
import Footer from "../../components/Footer";

export default function index({ data, maxPages, page }) {
     const Router = useRouter();
     const [shows, setShows] = useState(null);
     const [pageNumber, setPageNumber] = useState(1);

     useEffect(() => {
          setShows(data);
          setPageNumber(page);
     }, []);

     function nextPage() {
          getShows(pageNumber + 1);
     }

     function previousPage() {
          getShows(pageNumber - 1);
     }

     async function getShows(page) {
          const response = await getPopular(page, "tv");
          const json = await response.json();
          setPageNumber(page);
          window.scrollTo(0, 0);
          updateURL(page);
          setShows(json);
     }

     function updateURL(page) {
          Router.push(
               {
                    pathname: `/tv`,
                    query: { page },
               },
               undefined,
               { shallow: true }
          );
     }

     return (
          <main>
               <Navbar />
               <DisplayShows shows={shows} type="tv" />
               <Footer
                    pageNumber={pageNumber}
                    maxPages={maxPages}
                    nextPage={nextPage}
                    previousPage={previousPage}
               />
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
