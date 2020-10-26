import {GenresFilter} from "../constants/constants";

export const getRandomElements = (array)=> {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getSimilarMovies = (films, currentFilm, id) => {
  const similarMovies = films.filter((movie) => {
    return movie.genre.some((it) => it === currentFilm[0]) && movie.id !== id;
  });

  return similarMovies;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFilmsByGenre = (movies, genre) =>
  (genre === GenresFilter.ALL) ? movies.slice() : movies.filter((movie)=>movie.genre === genre);

export const getGenresList = (films)=>{
  const MAX_GENRES_COUNT = 9;
  const genres = films.map((film)=>film.genre);

  let uniqueGenres = [...new Set(genres)];

  uniqueGenres.sort();
  uniqueGenres = uniqueGenres.slice(0, MAX_GENRES_COUNT);
  uniqueGenres.unshift(GenresFilter.ALL);

  return uniqueGenres;
};

export default getSimilarMovies;
