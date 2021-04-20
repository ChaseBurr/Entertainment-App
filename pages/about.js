import React from "react";
import Navbar from "../components/Navbar";
import styles from "./../styles/About.module.scss";

const about = () => {
     return (
          <div className={styles.about_page}>
               <Navbar />
               <h1 className={styles.header}>About the website</h1>
               <hr />
               <p className={styles.about}>
                    This website is a project developed by Chase Burr.
               </p>
               <h1 className={styles.header}>About Me</h1>
               <hr />
               <p className={styles.about}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
          </div>
     );
};

export default about;
