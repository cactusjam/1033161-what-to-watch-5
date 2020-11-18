import {
  changeGenreFilter,
  loadMovies,
  loadPromoMovie,
  requireAuthorization,
  loadCurrentMovie,
  redirectToRoute,
  loadUser,
  loadMovieReviews,
  setDataIsSending,
  setDataSendError
} from "./action";
import {AuthorizationStatus, GenresFilter, AppRoute} from "../constants/constants";
import {movieAdapter, moviesListAdapter, userDataAdapter, reviewsAdapter} from "../services/adapter";

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

export const addFavoriteMovie = (id, status) => (dispatch, _getState, api) => {
  return api.post(`${AppRoute.FAVORITE}/${id}/${status}`)
  .then((response) => {
    dispatch(loadPromoMovie(movieAdapter(response.data)));
    dispatch(loadCurrentMovie(movieAdapter(response.data)));
  });
};

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

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(AppRoute.REVIEWS + `/${id}`)
    .then((reviews) => {
      dispatch(loadMovieReviews(reviewsAdapter(reviews.data)));
    })
    .catch((_error) => {
      throw Error(`Ошибка загрузки комментариев`);
    })
);

export const addReview = (id, rating, comment) => (dispatch, _getState, api) => (
  api.post(AppRoute.REVIEWS + `/${id}`, {rating, comment})
    .then(() => {
      dispatch(redirectToRoute(AppRoute.MOVIES + `/${id}`))
      dispatch(setDataIsSending(false));
    })
    .catch(() => {
      dispatch(setDataIsSending(false));
      dispatch(setDataSendError(true));
    })
);
