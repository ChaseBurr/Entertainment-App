import axios from "axios";

// const { API_KEY } = process.env;

let API_KEY = "c52a1f0a294a2c11d901d69ed73d1290";

// TODO put url and api_key in .env

export const getData = (query, type) => {
  const url = `https://api.themoviedb.org/3/search/${type}/?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;
  return axios.get(url);
};

export const getPopular = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
  return axios.get(url);
};

export const getDataById = async (id, type) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`;
  return axios.get(url);
};
