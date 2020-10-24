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

export const getFilmsByGenre = ({movies, genreFilter}) =>{
  if (genreFilter === GenresFilter.ALL) {
    return movies.slice();
  }

  return movies.filter((movie)=>movie.genre === genreFilter);
};

export default getSimilarMovies;
