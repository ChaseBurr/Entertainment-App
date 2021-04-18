import styles from "./../styles/CategoriesPage.module.scss";

export default function CategorySection({ header, children }) {
     return (
          <div className={styles.categorySection}>
               <h2>{header}</h2>
               {children}
          </div>
     );
}
