import {
  changeGenreFilter,
  loadMovies,
  loadPromoMovie,
  requireAuthorization,
  loadSingleFilm,
  redirectToRoute
} from "./action";
import {AuthorizationStatus, GenresFilter, AppRoute} from "../constants/constants";
import {movieAdapter, moviesListAdapter} from "../services/adapter";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => moviesListAdapter(data))
    .then((films) => {
      dispatch(loadMovies(films));
      return {films};
    })
    .then(() => {
      dispatch(changeGenreFilter(GenresFilter.ALL));
    })
    .catch(() => {
      throw Error(`Ошибка загрузки списка фильмов`);
    })
);

export const fetchSingleFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then((promoMovie) => {
      dispatch(loadSingleFilm(movieAdapter(promoMovie.data)));
    })
    .catch(() => {
      throw Error(`Ошибка загруки фильма`);
    })
);


export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
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
  api.post(`/login`, {email, password})
  .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
  .then(() => dispatch(redirectToRoute(AppRoute.RESULT)))
);

