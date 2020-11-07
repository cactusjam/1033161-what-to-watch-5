import {
  changeGenreFilter,
  loadMovies,
  loadPromoMovie,
  requireAuthorization
} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(loadMovies(data));
      return {data};
    })
    .then(() => {
      dispatch(changeGenreFilter(`All`));
    })
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoMovie(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

