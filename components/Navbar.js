import styles from "./../styles/Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
     return (
          <nav className={styles.navbar}>
               <h1 className={styles.logo}>
                    <Link href="/">Entertainment</Link>
               </h1>
               <ul>
                    <li>
                         <Link href="/">home</Link>
                    </li>
                    <p className={styles.divider}>|</p>
                    <li>
                         <Link href="/about">about</Link>
                    </li>
                    <p className={styles.divider}>|</p>
                    <li>
                         <Link href="/categories">categories</Link>
                    </li>
                    <p className={styles.divider}>|</p>
                    <li>
                         <Link href="search">search</Link>
                    </li>
               </ul>
          </nav>
     );
}
