import "./App.css";
import Movies from "./components/Movie";

function App() {
  return (
    <div className="App">
      <header>
        <form>
          <h1>Movie Search</h1>
          <input type="text" className="movie-search form-control" />
        </form>
      </header>
      <Movies />
    </div>
  );
}

export default App;
