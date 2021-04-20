import Navbar from "../components/Navbar";
import styles from "./../styles/SearchPage.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PosterGrid from "./../components/PosterGrid";
import Poster from "./../components/Poster";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "./../components/Elements";

import { getData } from "./../TheMovieDB";
import Footer from "../components/Footer";
import DisplayShows from "../components/DisplayShows";

export default function search({
     data,
     barPosition,
     pages,
     query,
     currentPage,
}) {
     const Router = useRouter();

     const [searchValue, setSearchValue] = useState("");
     const [maxPages, setMaxPages] = useState(1);
     const [shows, setShows] = useState(null);
     const [pageNumber, setPageNumber] = useState(1);
     const [searchPosition, setSearchPosition] = useState(0);

     // TODO Check for valid input

     useEffect(() => {
          setShows(data);
          setSearchPosition(barPosition);
          setMaxPages(pages);
          if (query) {
               setSearchValue(query);
          }
     }, []);

     useEffect(() => {
          if (searchValue) {
               if (searchValue.length > 0) {
                    let query = { query: searchValue };

                    if (currentPage != null) {
                         query.page = currentPage;
                    }

                    fetchData();
                    updateUrl(searchValue, pageNumber);
               }
          }

          async function fetchData() {
               const response = await getData(searchValue, "movie", pageNumber);
               const json = await response.json();
               setShows(json);
               setMaxPages(json.total_pages);
          }
     }, [searchValue, pageNumber]);

     function previousPage() {
          getShows(pageNumber - 1);
          setPageNumber(pageNumber - 1);
     }

     function nextPage() {
          getShows(pageNumber + 1);
          setPageNumber(pageNumber + 1);
     }

     async function getShows(page) {
          const newData = await getData(query, "movie", page);
          const json = await newData.json();
          setShows(json);
          scrollToTop();
     }

     function scrollToTop() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
     }

     function updateUrl(value, page) {
          Router.push(
               {
                    pathname: `/search`,
                    query: { query: value, page },
               },
               undefined,
               { shallow: true }
          );
     }

     return (
          <div className={styles.search_page}>
               <Navbar />
               <motion.div
                    initial={{ y: -600 }}
                    animate={{ y: searchPosition }}
                    transition={{ duration: 0.5 }}
                    className={styles.search_bar}
                    onClick={() => setSearchPosition(-260)}
               >
                    <div className={styles.search_bar_left}>
                         <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="search"
                              className="svg-inline--fa fa-search fa-w-16"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                         >
                              <path
                                   fill="currentColor"
                                   d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                              ></path>
                         </svg>
                    </div>
                    <input
                         type="text"
                         id="search"
                         placeholder="Search..."
                         value={searchValue}
                         onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className={styles.search_bar_right}></div>
               </motion.div>
               {shows && (
                    <>
                         <DisplayShows shows={shows} type="movie" />
                         <Footer
                              pageNumber={pageNumber}
                              maxPages={maxPages}
                              previousPage={previousPage}
                              nextPage={nextPage}
                         />
                    </>
               )}
               )
          </div>
     );
}

export const getServerSideProps = async (ctx) => {
     let data = null;
     let pages = 1;
     let barPosition = 0;
     let currentPage = null;

     let query = ctx.query.query;
     let page = ctx.query.page;

     try {
          if (query) {
               const response = await getData(query, "movie", page);
               data = await response.json();
               pages = data.total_pages;
               barPosition = -260;
          } else {
               query = null;
               page = null;
          }
          if (page) {
               currentPage = page;
          } else {
               currentPage = null;
          }
     } catch (error) {
          console.log(error);
     }

     return {
          props: {
               data,
               pages,
               barPosition,
               query,
               currentPage,
          },
     };
};
