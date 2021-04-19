import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { getPopular } from "./../TheMovieDB";
import Navbar from "./../components/Navbar";
import DisplayShows from "../components/DisplayShows";
import PageButtons from "../components/PageButtons";

export default function Home({ data, maxPages, page }) {
     const Router = useRouter();
     const [shows, setShows] = useState(null);
     const [totalPages, setTotalPages] = useState(1);
     const [currentPage, setCurrentPage] = useState(1);

     useEffect(() => {
          setShows(data);
          setTotalPages(maxPages);
          setCurrentPage(parseInt(page));
     }, []);

     function previousPage() {
          setCurrentPage(currentPage - 1);
          getPage(currentPage - 1);
     }

     function nextPage() {
          setCurrentPage(currentPage + 1);
          getPage(currentPage + 1);
     }

     async function getPage(page) {
          const response = await getPopular(page);
          const data = await response.json();
          setShows(data);
          window.scrollTo(0, 0);
          updateURL(page);
     }

     function updateURL(page) {
          Router.push(
               {
                    pathname: `/`,
                    query: { page },
               },
               undefined,
               { shallow: true }
          );
     }

     return (
          <>
               <Head>
                    <title>Entertainment Finder</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>

               <main>
                    <Navbar />

                    <DisplayShows shows={shows} />
               </main>

               <PageButtons
                    pageNumber={currentPage}
                    maxPages={totalPages}
                    previousPage={previousPage}
                    nextPage={nextPage}
               />
          </>
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
          const response = await getPopular(page);
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
