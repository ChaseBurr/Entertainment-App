import React from "react";

import Head from "next/head";
import { useState, useEffect } from "react";

import { getPopular, getData } from "./../fetch";
import Navbar from "./../components/Navbar";
import styles from "../styles/Home.module.scss";
import PosterGrid from "../components/PosterGrid";

export default function Home() {
     const [movies, setMovies] = useState(null);
     const [totalPages, setTotalPages] = useState(2);
     const [search, setSearch] = useState("");
     const [currentPage, setCurrentPage] = useState(1);
     const [currentApi, setCurrentApi] = useState("popular");

     useEffect(() => {
          async function getData() {
               setCurrentApi("popular");
               try {
                    const response = await getPopular(currentPage);
                    const data = await response.json();
                    setMovies(data);
                    setTotalPages(data.total_pages);
                    setCurrentPage(1);
               } catch (error) {
                    console.log(error);
               }
          }
          getData();
     }, []);

     useEffect(() => {
          if (search.length > 0) {
               setCurrentApi("search");
               return async () => {
                    const data = await fetchData(search);
                    setMovies(data);
                    setTotalPages(data.total_pages);
               };
          }

          async function fetchData(value) {
               const response = await getData(value, "movie");
               return await response.json();
          }
     }, [search]);

     useEffect(() => {
          if (currentPage <= totalPages && currentPage != 1) {
               getPage();
          }
     }, [currentPage]);

     async function getPage() {
          switch (currentApi) {
               case "popular": {
                    try {
                         const response = await getPopular(currentPage);
                         const data = await response.json();
                         setMovies(data);
                         setTotalPages(data.total_pages);
                    } catch (error) {
                         console.log(error);
                    }
               }
               case "search": {
                    try {
                         const response = await getData(currentPage);
                         const data = await response.json();
                         setMovies(data);
                         setTotalPages(data.total_pages);
                    } catch (error) {
                         console.log(error);
                    }
               }
          }
     }

     return (
          <div className={styles.container}>
               <Head>
                    <title>Entertainment Finder</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>

               <main>
                    <Navbar setSearch={setSearch} />

                    {movies ? (
                         <PosterGrid data={movies?.results} />
                    ) : (
                         <div>Loading...</div>
                    )}
               </main>

               <footer className={styles.footer}>
                    <button
                         onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(currentPage - 1);
                         }}
                    >
                         Prev
                    </button>
                    <p>{currentPage}</p>
                    <button
                         onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(currentPage + 1);
                         }}
                    >
                         Next
                    </button>
               </footer>
          </div>
     );
}
