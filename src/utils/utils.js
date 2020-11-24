import {GenresFilter, Rating} from "../constants/constants";
import moment from 'moment';

const MINS_IN_HOUR = 60;

export const getSimilarMovies = (movies, currentGenre, id) => {
  const similarMovies = movies.filter((movie) => {
    return movie.genre === currentGenre && movie.id !== id;
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

export const getRatingLevel = (rating) => {
  switch (true) {
    case rating <= Rating.BAD:
      return `Bad`;
    case rating <= Rating.NORMAL:
      return `Normal`;
    case rating <= Rating.GOOD:
      return `Good`;
    case rating < Rating.VERY_GOOD:
      return `Very good`;
    case rating === Rating.VERY_GOOD:
      return `Awesome`;
    default:
      return `Rating is incorrect`;
  }
};

export const formatDuration = (duration) => {
  return `${Math.floor(duration / MINS_IN_HOUR)}h ${duration % MINS_IN_HOUR}m`;
};

export const formatDate = (date) => {
  return moment(date).format(`MMMM D, YYYY`);
};

export const convertDateToISOString = (date) => moment(date).format().slice(0, 10);

