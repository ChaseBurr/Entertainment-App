import styles from "./../styles/PageButtons.module.scss";

const PageButtons = ({ pageNumber, maxPages, previousPage, nextPage }) => {
     return (
          <div className={`${styles.pageButtons} flex flex-center`}>
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
          </div>
     );
};

export default PageButtons;
