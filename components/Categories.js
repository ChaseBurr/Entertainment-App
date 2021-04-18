import { motion } from "framer-motion";
import styles from "./../styles/CategoriesPage.module.scss";

const categories = [
     {
          imgSrc: "/images/marvel-logo.webp",
     },
     {
          imgSrc: "/images/sony.jpg",
     },
     {
          imgSrc: "/images/UniversalPictures.jpg",
     },
     {
          imgSrc: "/images/WaltDisneyStudios.png",
     },
     {
          imgSrc: "/images/WarnerBros.jpg",
     },
     {
          imgSrc: "/images/20thCenturyFox.jpg",
     },
     {
          imgSrc: "/images/Lionsgate.jpg",
     },
     {
          imgSrc: "/images/TheWeinsteinCompany.jpg",
     },
     {
          imgSrc: "/images/DreamWorks.webp",
     },
];

export default function Categories() {
     return (
          <div>
               <div className={styles.categories}>
                    {categories.map((c, i) => (
                         <motion.div whileHover={{ scale: 1.05 }} key={i}>
                              <motion.div
                                   initial={{ x: 1000 }}
                                   animate={{ x: 0 }}
                                   transition={{ duration: i / 6 + 0.05 }}
                                   className={styles.category}
                              >
                                   <img src={c.imgSrc} alt="marvel" />
                              </motion.div>
                         </motion.div>
                    ))}
               </div>
          </div>
     );
}
