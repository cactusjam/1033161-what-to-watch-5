import {GenresFilter} from "../../constants/constants";

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

export const getFilmsByGenre = ({films, genreFilter}) =>{
  if (genreFilter === GenresFilter.ALL) {
    return films.slice();
  }

  return films.filter((film)=>film.genre === genreFilter);
};

export default getSimilarMovies;
