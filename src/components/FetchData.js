import axios from "axios";

let API_KEY = "c52a1f0a294a2c11d901d69ed73d1290";

export const getData = (query, type) => {
  const url = `https://api.themoviedb.org/3/search/${type}/?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;
  let data = {};

  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      data = res.data.results;
    })
    .catch((error) => console.log(error));

  return data;
};

export const getPopular = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
  return axios.get(url);
};
