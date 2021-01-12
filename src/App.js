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
      <nav>
        <div className="navbar container">
          <div className="logo">
            <a href="/">ENTERTAINMENT FINDER</a>
          </div>
          <form id="form" method="GET">
            <input
              placeholder="Iron Man..."
              type="text"
              name="search"
              className="movie-search form-control"
            />
            <button className="btn" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </nav>
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
