import styles from "./../styles/Home.module.scss";

const Footer = ({ pageNumber, maxPages, previousPage, nextPage }) => {
     return (
          <footer className={`${styles.footer} flex flex-center`}>
               {pageNumber == 1 ? (
                    <button disabled>PREV</button>
               ) : (
                    <button onClick={previousPage}>PREV</button>
               )}
               <p>
                    {pageNumber} / {maxPages}
               </p>
               {pageNumber == maxPages ? (
                    <button disabled>NEXT</button>
               ) : (
                    <button onClick={nextPage}>NEXT</button>
               )}
          </footer>
     );
};

export default Footer;
