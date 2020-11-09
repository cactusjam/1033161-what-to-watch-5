import {GenresFilter, Rating, RatingLevel} from "../constants/constants";

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

export const getRatingLevel = (score) => {
  if (score < Rating.BAD) {
    return RatingLevel.BAD;
  }

  if (score >= Rating.BAD && score < Rating.NORMAL) {
    return RatingLevel.NORMAL;
  }

  if (score >= Rating.NORMAL && score < Rating.GOOD) {
    return RatingLevel.GOOD;
  }

  if (score >= Rating.GOOD && score < Rating.VERY_GOOD) {
    return RatingLevel.VERY_GOOD;
  }

  if (score === Rating.VERY_GOOD) {
    return RatingLevel.AWESOME;
  }

  return ``;
};
