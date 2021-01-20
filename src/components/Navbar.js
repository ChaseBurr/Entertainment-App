import React from "react";
import { Link } from "react-router-dom";

// Components
import Search from "./Search.js";

function Navbar(props) {
   function updateData(data) {
      props.searchData(data);
   }
   return (
      <>
         <nav>
            <div className="navbar">
               <div className="logo">
                  <Link to="/">ENTERTAINMENT FINDER</Link>
               </div>
               <Search newData={updateData} />
            </div>
         </nav>
      </>
   );
}

export default Navbar;
