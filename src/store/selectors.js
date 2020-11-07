import {NameSpace} from "./reducers/root-reducer.js";
import {findItemById} from "../utils/utils";

export const getMovies = (state) => {
  return state[NameSpace.MOVIES].movies;
};

export const getActiveGenre = (state) => {
  return state[NameSpace.GENRES].activeFilterGenre;
};

export const getPromoMovie = (state) => {
  return state[NameSpace.MOVIES].promoMovie;
};

export const getReviews = (state) => {
  return state[NameSpace.MOVIES].reviews;
};

export const getMoviesCount = (state) => {
  return state[NameSpace.MOVIES].defaultFilmsCount;
};

export const getMovieById = (state, id) => {
  return findItemById(id, getMovies(state));
};
