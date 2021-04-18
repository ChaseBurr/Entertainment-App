import styles from "./../styles/Poster.module.scss";
import React from "react";
import { motion } from "framer-motion";
import { getImage } from "../TheMovieDB";

export default function Poster({ data }) {
     return (
          <motion.div whileHover={{ rotate: 1, scale: 1.05 }}>
               <div className={styles.poster}>
                    <img src={getImage(data.poster_path)} alt="" />
               </div>
          </motion.div>
     );
}
