import {FILMS_COUNT_PER_CLICK} from "../constants/constants";

const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  LOAD_MOVIE_REVIEWS: `LOAD_MOVIE_REVIEWS`,
  SET_MOVIES_COUNT: `SET_MOVIES_COUNT`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_CURRENT_MOVIE: `LOAD_CURRENT_MOVIE`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_USER: `LOAD_USER`,
};

export const changeGenreFilter = (genre) => ({
  type: ActionType.CHANGE_ACTIVE_GENRE,
  payload: genre
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const loadPromoMovie = (movie) => ({
  type: ActionType.LOAD_PROMO_MOVIE,
  payload: movie,
});

export const setMoviesCount = () => ({
  type: ActionType.SET_MOVIES_COUNT,
  payload: FILMS_COUNT_PER_CLICK,
});

export const loadMovieReviews = (reviews) => ({
  type: ActionType.LOAD_MOVIE_REVIEWS,
  payload: reviews,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadCurrentMovie = (film) => ({
  type: ActionType.LOAD_CURRENT_MOVIE,
  payload: film,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadUser = (user) => ({
  type: ActionType.LOAD_USER,
  payload: user,
});

export {ActionType};
