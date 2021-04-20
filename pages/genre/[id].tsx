import React, { useState, useEffect } from "react";
import DisplayShows from "../../components/DisplayShows";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getGenre } from "./../../TheMovieDB.js";
import { useRouter } from "next/router";

interface Props {
     data;
     maxPages: number;
     genreId: number;
     page: number;
}

const GenrePage: React.FC<Props> = ({ data, maxPages, genreId, page }) => {
     const Router = useRouter();

     const [totalPages, setTotalPages] = useState(1);
     const [shows, setShows] = useState(null);
     const [currentPage, setCurrentPage] = useState(1);

     useEffect(() => {
          setShows(data);
          setTotalPages(maxPages);
          setCurrentPage(page);
     }, []);

     useEffect(() => {
          async function getDate() {
               const response = await getGenre(genreId, "movie", page);
               const data = await response.json();
               setShows(data);
          }
          getDate();
     }, [page]);

     function previousPage() {
          setCurrentPage(currentPage - 1);
          getPage(currentPage - 1);
     }

     function nextPage() {
          setCurrentPage(currentPage + 1);
          getPage(currentPage + 1);
     }

     async function getPage(page) {
          const response = await getGenre(genreId, "movie", page);
          const data = await response.json();
          setShows(data);
          window.scrollTo(0, 0);
          updateURL(page);
     }

     function updateURL(page) {
          Router.push(
               {
                    pathname: `/genre/${genreId}`,
                    query: { page },
               },
               undefined,
               { shallow: true }
          );
     }

     return (
          <div>
               <Navbar />
               <DisplayShows shows={shows} type="movie" />
               <Footer
                    pageNumber={currentPage}
                    maxPages={totalPages}
                    previousPage={previousPage}
                    nextPage={nextPage}
               />
          </div>
     );
};

export default GenrePage;

export const getServerSideProps = async (ctx) => {
     let data = null,
          id = ctx.query.id,
          maxPages = 1,
          page = ctx.query.page;

     try {
          if (!page) {
               page = 1;
          }
          const response = await getGenre(id, "movie");
          data = await response.json();
          maxPages = data.total_pages || 1;
     } catch (error) {
          console.log(error);
     }

     return {
          props: {
               data: data,
               maxPages,
               genreId: id,
               page,
          },
     };
};
