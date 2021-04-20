import styles from "./../../styles/ShowPage.module.scss";

import { getDataById, getImage } from "../../TheMovieDB";
import { Container } from "../../components/Elements";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
     data: {
          name: string;
          overview: string;
          poster_path: string;
          backdrop_path: string;
          release_date: string;
          genres: [{ name: string; id: number }];
          first_air_date: string;
          last_air_date: string;
          episode_run_time: [];
          last_episode_to_air: {
               air_date: string;
               episode_number: number;
               name: string;
               overview: string;
               season_number: number;
               still_path: string;
          };
          number_of_episodes: number;
          number_of_seasons: number;
          seasons: [
               {
                    air_date: string;
                    episode_count: number;
                    id: number;
                    name: number;
                    overview: string;
                    poster_path: string;
                    season_number: number;
               }
          ];
     };
}

const ShowTv: React.FC<Props> = ({ data }) => {
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
                              <h1>{data.name}</h1>
                              <hr />

                              <h2>Overview</h2>
                              <p>{data.overview}</p>

                              <p style={{ marginTop: "10px" }}>
                                   <b>Episode runtime: </b>
                                   {data.episode_run_time} minutes
                              </p>
                              <p>
                                   <b>Release Date: </b>
                                   {data.release_date}
                              </p>

                              <DisplayGenres genres={data.genres} />
                              {/* <Seasons seasons={data.seasons} /> */}
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

function Seasons({ seasons }) {
     return (
          <>
               <h1>Seasons</h1>
               <div className={styles.seasons}>
                    {seasons.map((season, i) => (
                         <div className={styles.season}>
                              <img src={getImage(season.poster_path)} />
                              {/* <div className={styles.season_content}>
                              <h3>{season.name}</h3>
                              <p>{season.overview}</p>
                         </div> */}
                         </div>
                    ))}
               </div>
          </>
     );
}

// seasons: [
//      {
//           air_date: string;
//           episode_count: number;
//           id: number;
//           name: number;
//           overview: string;
//           poster_path: "/fIT6Y6O3cUX1X8qY8pZgzEvxUDQ.jpg";
//           season_number: number;
//      }
// ];

export default ShowTv;

export const getServerSideProps = async (ctx) => {
     const id = ctx.query.id;
     let data = null,
          backdrop = null;
     try {
          const response = await getDataById(id, "tv");
          data = await response.json();
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
