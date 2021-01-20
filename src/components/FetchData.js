import axios from "axios";

let API_KEY = process.env.REACT_APP_API_KEY;

export const getData = (query, type) => {
   const url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;
   return axios.get(url);
};

// TODO Add page number
export const getPopular = async () => {
   const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
   return axios.get(url);
};

export const getDataById = async (id, type) => {
   const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`;
   return axios.get(url);
};
