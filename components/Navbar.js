import styles from "./../styles/Navbar.module.scss";

export default function Navbar({ setSearch }) {
     return (
          <nav className={styles.navbar}>
               <h1 className={styles.logo}>Entertainment Finder</h1>
               {/* <div className={styles.links}>
                    <div>Get Popular</div>
               </div> */}
               <input
                    className={styles.searchBar}
                    placeholder="Search for a movie"
                    type="text"
                    id="searchbar"
                    onChange={(e) => {
                         setSearch(e.target.value);
                    }}
               />
          </nav>
     );
}
