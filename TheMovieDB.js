const API_KEY = process.env.API_KEY;
const API_VERSION = 3;

export const getData = async (query, type = "movie", page = 1) => {
     const url = `https://api.themoviedb.org/${API_VERSION}/search/${type}?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`;
     return fetch(url);
};

export const getPopular = async (page = 1, type = "movie") => {
     const url = `https://api.themoviedb.org/${API_VERSION}/${type}/popular?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=true`;
     return await fetch(url);
};

export const getDataById = async (id, type = "movie") => {
     const url = `https://api.themoviedb.org/${API_VERSION}/${type}/${id}?api_key=${API_KEY}`;
     return await fetch(url);
};

export const getImage = (posterId) => {
     return `https://image.tmdb.org/t/p/original${posterId}`;
};

export const getGenre = (id, type = "movie", page = 1) => {
     const url = `https://api.themoviedb.org/${API_VERSION}/discover/${type}?api_key=${API_KEY}&with_genres=${id}&page=${page}&include_adult=true`;
     return fetch(url);
};
