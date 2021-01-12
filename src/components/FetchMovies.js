import React from "react";
require("dotenv").config({ path: "/../config.env" });

export class FetchMovies extends React.Component {
  // async getMovies() {
  // let data = await response.json();
  //   return data;
  // }

  render() {
    return <div></div>;
  }
}

export default FetchMovies;

// const http = new XMLHttpRequest();

// http.open("GET", url);
// http.send();

// let response;
// http.onreadystatechange = (e) => {
//   response = http.responseText;
//   console.log(response);
// };

// req_url=https://api.themoviedb.org/3/movie/550?api_key=c52a1f0a294a2c11d901d69ed73d1290
// search="https://api.themoviedb.org/3/search/movie?api_key=c52a1f0a294a2c11d901d69ed73d1290&language=en-US&query=stranger&page=1&include_adult=false
