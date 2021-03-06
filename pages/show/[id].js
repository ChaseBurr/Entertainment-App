import styles from "./../../styles/ShowPage.module.scss";

import { getDataById, getImage } from "./../../TheMovieDB";
import { Container } from "./../../components/Elements";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function ShowPage({ data, backdropImg }) {
     const Router = useRouter();

     return (
          <div className={styles.show_page}>
               <motion.div
                    initial={{ y: -750 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.go_back}
               >
                    <div
                         onClick={() => Router.back()}
                         className={styles.goBack}
                    >
                         <i className="fas fa-arrow-left"></i>
                         Go Back
                    </div>
               </motion.div>

               <motion.div
                    initial={{ y: -750 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.backdrop}
               >
                    <div className="overlay" />
                    <img src={backdropImg} alt="" />
               </motion.div>

               <Container>
                    <div className={styles.movie_content}>
                         <motion.div
                              initial={{ x: -500 }}
                              animate={{ x: 0 }}
                              transition={{ duration: 0.7 }}
                         >
                              <div className={styles.poster}>
                                   <img
                                        src={getImage(data.poster_path)}
                                        alt=""
                                   />
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ x: 1400 }}
                              transition={{ duration: 0.7 }}
                              animate={{ x: 0 }}
                              className={styles.show_details}
                         >
                              <h1>{data.title}</h1>
                              <hr />

                              <h2>Overview</h2>
                              <p>{data.overview}</p>

                              <p style={{ marginTop: "10px" }}>
                                   <b>Runtime: </b>
                                   {data.runtime} minutes
                              </p>
                              <p>
                                   <b>Release Date: </b>
                                   {data.release_date}
                              </p>

                              <h4 style={{ marginTop: "10px" }}>Genres</h4>
                              <div className={styles.genres}>
                                   {data.genres.map((genre, i) => (
                                        <p key={i} className={styles.genre}>
                                             {genre.name}
                                        </p>
                                   ))}
                              </div>

                              <h4 style={{ marginTop: "10px" }}>View on</h4>
                              <div className={styles.view_on}>
                                   <a
                                        href={`https://www.imdb.com/title/${data.imdb_id}`}
                                        target="_blank"
                                   >
                                        <img
                                             src="https://cdn.worldvectorlogo.com/logos/imdb.svg"
                                             alt=""
                                        />
                                   </a>
                              </div>
                         </motion.div>
                    </div>
               </Container>
          </div>
     );
}

export const getServerSideProps = async (ctx) => {
     const id = ctx.query.id;
     let data,
          backdrop = null;
     try {
          const response = await getDataById(id);
          data = await response.json();
          backdrop = getImage(data.backdrop_path);
          console.log(data);
     } catch (error) {
          console.log(error);
     }

     return {
          props: {
               data: data,
               backdropImg: backdrop,
          },
     };
};
