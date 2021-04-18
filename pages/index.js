import React from "react";

import Head from "next/head";
import { useState, useEffect } from "react";

import { getPopular } from "./../TheMovieDB";
import Navbar from "./../components/Navbar";
import styles from "../styles/Home.module.scss";
import PosterGrid from "../components/PosterGrid";
import { Container } from "./../components/Elements";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import Poster from "./../components/Poster";

export default function Home({ data, maxPages }) {
     const [shows, setShows] = useState(null);
     const [totalPages, setTotalPages] = useState(1);
     const [currentPage, setCurrentPage] = useState(1);

     useEffect(() => {
          setShows(data);
          setTotalPages(maxPages);
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
     }

     return (
          <>
               <Head>
                    <title>Entertainment Finder</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>

               <main>
                    <Navbar />

                    {shows && (
                         <Container>
                              <PosterGrid>
                                   {shows.results.map((show, i) => (
                                        <Link href={`/show/${show.id}`} key={i}>
                                             <motion.div
                                                  initial={{ y: 300 }}
                                                  animate={{ y: 0 }}
                                                  transition={{
                                                       duration: 0.5 + i * 0.2,
                                                  }}
                                             >
                                                  <motion.div
                                                       whileHover={{
                                                            scale: 1.05,
                                                       }}
                                                       whileTap={{
                                                            scale: 1.03,
                                                       }}
                                                  >
                                                       <Poster data={show} />
                                                  </motion.div>
                                             </motion.div>
                                        </Link>
                                   ))}
                              </PosterGrid>
                         </Container>
                    )}
               </main>

               <Footer
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

     try {
          const response = await getPopular();
          data = await response.json();
          maxPages = data.total_pages;
     } catch (error) {
          console.log(error);
     }

     return {
          props: {
               data,
               maxPages: maxPages,
          },
     };
};
