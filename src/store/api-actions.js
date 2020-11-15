import {
  changeGenreFilter,
  loadMovies,
  loadPromoMovie,
  requireAuthorization,
  loadCurrentMovie,
  redirectToRoute,
  loadUser,
  loadMovieReviews
} from "./action";
import {AuthorizationStatus, GenresFilter, AppRoute} from "../constants/constants";
import {movieAdapter, moviesListAdapter, userDataAdapter} from "../services/adapter";

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
    .then((film) => {
      dispatch(loadCurrentMovie(movieAdapter(film.data)));
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
    .then((response) => {
      dispatch(loadUser(userDataAdapter(response.data)));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
  .then((response) => userDataAdapter(response.data))
  .then((data) => {
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(loadUser(data));
  })
  .then(() => dispatch(redirectToRoute(`/`)))
  .catch(() => {
    throw Error(`Ошибка авторизации`);
  })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(AppRoute.REVIEWS + `/${id}`)
    .then((reviews) => {
      dispatch(loadMovieReviews(reviews.data));
    })
    .catch(() => {
      throw Error(`Ошибка загрузки комментариев`);
    })
);
