import {NameSpace} from "./reducers/root-reducer.js";
import {createSelector} from 'reselect';
import {getFilmsByGenre} from "../utils/utils";
import {AuthorizationStatus} from "../constants/constants";

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

export const getCurrentMovie = (state) => {
  return state[NameSpace.DATA].currentMovie;
};

export const getAuthStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getUser = (state) => {
  return state[NameSpace.USER];
};

export const dataSending = (state) => {
  return state[NameSpace.DATA].isDataSending;
};

export const dataSendingError = (state) => {
  return state[NameSpace.DATA].isDataSendError;
};

export const getFavorite = (state) => {
  return state[NameSpace.DATA].favorites;
};

// reselect
export const getFilteredMovies = createSelector(
    getActiveGenre,
    getMovies,
    (activeGenre, movies) => {
      return getFilmsByGenre(movies, activeGenre);
    }
);
