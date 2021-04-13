import React from "react";
import styles from "./../styles/PosterGrid.module.scss";
import Poster from "./Poster";

import { getPoster } from "../fetch";

export default function PosterGrid({ data }) {
     return (
          <div className={styles.posters}>
               {data.map((show, i) => (
                    <Poster
                         path={getPoster(show.poster_path)}
                         title={show.title}
                         desc={show.overview}
                         key={i}
                         movieId={show.id}
                    />
               ))}
          </div>
     );
}
