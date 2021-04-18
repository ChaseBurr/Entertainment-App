import React from "react";
import styles from "./../styles/PosterGrid.module.scss";

export default function PosterGrid({ children }) {
     return <div className={styles.posters}>{children}</div>;
}
