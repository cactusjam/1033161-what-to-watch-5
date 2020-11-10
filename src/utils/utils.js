import {GenresFilter, Rating} from "../constants/constants";
import moment from 'moment';

const MINS_IN_HOUR = 60;

export const getSimilarMovies = (movies, currentGenre, id) => {
  const similarMovies = movies.filter((movie) => {
    return movie.genre === currentGenre && movie.id !== id;
  });

  return similarMovies;
};

export const findItemById = (id, list) => {
  return list.find((item) => {
    return item.id === Number(id);
  });
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
  if (rating <= Rating.BAD) {
    return `Bad`;
  } else if (rating <= Rating.NORMAL) {
    return `Normal`;
  } else if (rating <= Rating.GOOD) {
    return `Good`;
  } else if (rating < Rating.VERY_GOOD) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

// export const getMinutesByText = (duration) => {
//   const hours = Math.floor(duration / MINS_IN_HOUR);
//   const minutes = duration - hours * MINS_IN_HOUR;
//   return `${hours}h ${minutes}m`;
// };

export const getMinutesByText = (date) => {
  return moment(date).format(`HH, mm`);
};

export const formatDate = (date) => {
  return moment(date).format(`MMMM D, YYYY`);
};


