import React, { useState } from "react";
import { getData } from "./FetchData";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await getData(searchValue, "movie").then((response) => {
      props.newData(response.data.results);
    });
  };

  return (
    <form id="form" method="GET">
      <input
        placeholder="Search for..."
        type="text"
        className="movie-search form-control"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button className="btn" type="submit" onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default Search;

// TODO - make sure the query is only readable text for api
