export const fetcher = (...args) => fetch(...args).then((res) => res.json());
const apiKey = "bee9d365514775f0a6d69d0ecb510c45";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovies: (type) => 
    `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetails: (id) => `${tmdbEndpoint}/${id}?api_key=${apiKey}`,
  getMovieDetailsInfo: (id, type) => `${tmdbEndpoint}/${id}/${type}?api_key=${apiKey}`,
  getMoviePage = (type) => `${tmdbEndpoint}/${type}`
image: (type) => `https://image.tmdb.org/t/p/original/${type}`
};
