const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  LOAD_MOVIE_REVIEWS: `LOAD_MOVIE_REVIEWS`,
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

// export const showMoreMovie = (movie) => ({
//   type: ActionType.SHOW_MORE_MOVIE,
//   payload: movie,
// });

export const loadMovieReviews = (reviews) => ({
  type: ActionType.LOAD_MOVIE_REVIEWS,
  payload: reviews,
});

export {ActionType};
