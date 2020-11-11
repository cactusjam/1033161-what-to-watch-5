import {
  changeGenreFilter,
  loadMovies,
  loadPromoMovie,
  requireAuthorization,
  loadCurrentMovie,
  redirectToRoute
} from "./action";
import {AuthorizationStatus, GenresFilter, AppRoute} from "../constants/constants";
import {movieAdapter, moviesListAdapter} from "../services/adapter";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.MOVIES)
    .then(({data}) => {
      dispatch(loadMovies(moviesListAdapter(data)));
      return {data};
    })
    .then(() => {
      dispatch(changeGenreFilter(GenresFilter.ALL));
    })
    .catch(() => {
      throw Error(`Ошибка загрузки списка фильмов`);
    })
);

export const fetchCurrentMovie = (id) => (dispatch, _getState, api) => (
  api.get(AppRoute.MOVIES + `/${id}`)
    .then(({data}) => {
      dispatch(loadCurrentMovie(movieAdapter(data)));
    })
    .catch(() => {
      throw Error(`Ошибка загруки фильма`);
    })
);


export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(AppRoute.MOVIES_PROMO)
    .then((film) => {
      dispatch(loadPromoMovie(movieAdapter(film.data)));
    })
    .catch(() => {
      throw Error(`Ошибка загруки промофильма`);
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
  .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
  .then(() => dispatch(redirectToRoute(AppRoute.RESULT)))
);

