import {NameSpace} from "./reducers/root-reducer.js";
import {createSelector} from 'reselect';
import {getFilmsByGenre} from "../utils/utils";

export const getMovies = (state) => {
  return state[NameSpace.DATA].movies;
};

export const getActiveGenre = (state) => {
  return state[NameSpace.GENRES].activeFilterGenre;
};

export const getPromoMovie = (state) => {
  return state[NameSpace.DATA].promoMovie;
};

export const getReviews = (state) => {
  return state[NameSpace.DATA].reviews;
};

export const getMoviesCount = (state) => {
  return state[NameSpace.DATA].defaultFilmsCount;
};

export const getMovieById = (state) => {
  return state[NameSpace.DATA].currentMovie;
};

export const getAuthStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getUser = (state) => {
  return state[NameSpace.USER];
};

// reselect
export const getFilteredMovies = createSelector(
    getActiveGenre,
    getMovies,
    (activeGenre, movies) => {
      return getFilmsByGenre(movies, activeGenre);
    }
);
