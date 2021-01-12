import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MoviePage from "./Pages/MoviePage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <header>
        <form id="form" method="GET">
          <h1>Movie Search</h1>
          <input
            placeholder="Iron Man..."
            type="text"
            name="search"
            className="movie-search form-control"
          />
          <input type="submit" value="Search" />
        </form>
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:id" component={MoviePage} />
          {/* Needs to be at bottom */}
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
