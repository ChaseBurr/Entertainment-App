import React from "react";

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
                  <div to="/">ENTERTAINMENT FINDER</div>
               </div>
               <Search newData={updateData} />
            </div>
         </nav>
      </>
   );
}

export default Navbar;
