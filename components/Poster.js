import styles from "./../styles/Poster.module.scss";
import Link from "next/link";
import React from "react";

export default function Poster({ path, title, desc, movieId }) {
     return (
          <Link href={`/movie/${movieId}`}>
               <div className={styles.poster}>
                    <div className={styles.backdrop}>
                         <img src={path} alt={title} />
                    </div>
                    <div className={styles.poster_data}>
                         <h1>{title}</h1>
                         <h3>{desc}</h3>
                    </div>
               </div>
          </Link>
     );
}
