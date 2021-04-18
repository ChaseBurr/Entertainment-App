import { Container } from "../../components/Elements";
import Navbar from "../../components/Navbar";
import styles from "./../../styles/CategoriesPage.module.scss";
import { motion } from "framer-motion";
import Categories from "../../components/Categories";
import Studios from "../../components/Studios";
import CategorySection from "../../components/CategorySection";

export default function index() {
     // TODO Have a drop down menu for each category like genres
     return (
          <div>
               <Navbar />
               <Container>
                    {/* <h1>Browse Categories</h1>  */}

                    <CategorySection header="studios">
                         <Studios />
                    </CategorySection>

                    {/* <CategorySection header="Genres">
                         <Categories />
                    </CategorySection> */}
               </Container>
          </div>
     );
}
