const API_KEY = process.env.API_KEY;
const API_VERSION = 3;

export const getData = async (query, type = "movie", page = 1) => {
     const url = `https://api.themoviedb.org/${API_VERSION}/search/${type}?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`;
     return fetch(url);
};

export const getPopular = async (page = 1) => {
     const url = `https://api.themoviedb.org/${API_VERSION}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`;
     return await fetch(url);
};

export const getDataById = async (id, type = "movie") => {
     const url = `https://api.themoviedb.org/${API_VERSION}/${type}/${id}?api_key=${API_KEY}`;
     return await fetch(url);
};

export const getPoster = (posterId) => {
     return `https://image.tmdb.org/t/p/original${posterId}`;
};
