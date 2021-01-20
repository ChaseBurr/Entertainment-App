import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Components

// Pages
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MoviePage from "./Pages/MoviePage";
import NotFound from "./Pages/NotFound";

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/movies" component={Movies} />
               <Route exact path="/movies/:id" component={MoviePage} />
               <Route exact path="/?search" component={MoviePage} />
               {/* Needs to be at bottom */}
               <Route path="*" component={NotFound} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
