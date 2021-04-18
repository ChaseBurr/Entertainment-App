import { getDataById, getImage } from "./../../TheMovieDB";
import styles from "./../../styles/MoviePage.module.scss";

export default function movie({ data }) {
     return (
          <div>
               {data ? (
                    <>
                         <a href="/" className={styles.go_back}>
                              <i>←</i> Go Back
                         </a>
                         <div className={styles.movie_backdrop}>
                              <img src={getImage(data.backdrop_path)} alt="" />
                              <div className={styles.overlay} />
                         </div>
                         <div className={styles.movie_content}>
                              <img
                                   src={getImage(data.poster_path)}
                                   alt={data.title}
                                   className={styles.movie_poster}
                              />
                              <div className={styles.movie_information}>
                                   <h1>{data.title}</h1>
                                   <p className={styles.tagline}>
                                        {data?.tagline}
                                   </p>
                                   <hr />

                                   <h3>Overview</h3>
                                   <p>{data.overview}</p>

                                   <p
                                        style={{
                                             marginTop: "10px",
                                             fontSize: "0.8rem",
                                        }}
                                   >
                                        <b>Runtime:</b> {data.runtime} minutes
                                   </p>

                                   <p
                                        style={{
                                             fontSize: "0.8rem",
                                        }}
                                   >
                                        <b>Release Date:</b> {data.release_date}
                                   </p>

                                   <p style={{ marginTop: "10px" }}>Genres:</p>
                                   <ul className={styles.genres}>
                                        {data.genres.map((genre, i) => (
                                             <li key={i}>{genre.name}</li>
                                        ))}
                                   </ul>

                                   <p style={{ marginTop: "10px" }}>View on:</p>
                                   <a
                                        href={`https://www.imdb.com/title/${data.imdb_id}`}
                                        target="_blank"
                                   >
                                        <img
                                             src="https://cdn.worldvectorlogo.com/logos/imdb.svg"
                                             alt=""
                                             className={styles.imdb}
                                        />
                                   </a>
                              </div>
                         </div>
                    </>
               ) : (
                    <div>Loading...</div>
               )}
          </div>
     );
}

export const getServerSideProps = async (ctx) => {
     const movieId = ctx.query.id;
     console.log(movieId);
     let data = null;

     try {
          const response = await getDataById(movieId, "movie");
          data = await response.json();
     } catch (error) {
          console.log(error);
     }

     return {
          props: {
               data: data,
          },
     };
};
