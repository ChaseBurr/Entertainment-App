import styles from "./../../styles/ShowPage.module.scss";
import Link from "next/link";
import { getDataById, getImage } from "../../TheMovieDB";
import { Container } from "../../components/Elements";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
     data: {
          title: string;
          overview: string;
          name: string;
          imdb_id: number;
          runtime?: number;
          poster_path: string;
          backdrop_path: string;
          release_date: string;
          genres: [{ name: string }];
     };
}

const ShowMovie: React.FC<Props> = ({ data }) => {
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
                    <img src={getImage(data.backdrop_path)} alt="" />
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

                              <DisplayGenres genres={data.genres} />

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
};

function DisplayGenres({ genres }) {
     return (
          <>
               <h4 style={{ marginTop: "10px" }}>Genres</h4>
               <div className={styles.genres}>
                    {genres.map((genre, i) => (
                         <Link href={`/genre/${genre.id}`} key={i}>
                              <p className={styles.genre}>{genre.name}</p>
                         </Link>
                    ))}
               </div>
          </>
     );
}

export default ShowMovie;

export const getServerSideProps = async (ctx) => {
     const id = ctx.query.id;
     let data = null,
          backdrop = null;
     try {
          const response = await getDataById(id, "movie");
          data = await response.json();
     } catch (error) {
          console.log(error);
     }
     console.log(data);

     return {
          props: {
               data: data,
               backdropImg: backdrop,
          },
     };
};
