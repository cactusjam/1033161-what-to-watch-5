const TabName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const GenresFilter = {
  ALL: `All genres`,
  COMEDY: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMA: `Dramas`,
  HORROR: `Horror`,
  KIDS: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLER: `Thrillers`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const FILMS_COUNT_PER_CLICK = 8;

export const Rating = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
};

export const AppRoute = {
  LOGIN: `/login`,
  RESULT: `/result`,
  MOVIES: `/films`,
  MOVIES_PROMO: `/films/promo`,
  MY_LIST: `/mylist`,
  REVIEWS: `/comments`,
  CURRENT_REVIEW: `/films/:id/review`,
  CURRENT_MOVIE: `/films/:id`,
  CURRENT_PLAYER: `/player/:id`,
  FAVORITE: `/favorite`,
  ROOT: `/`
};

export const HttpCode = {
  UNAUTHORIZED: 401
};

export const Review = {
  MIN_RATING: 1,
  TEXT: {
    MIN_LENGTH: 50,
    MAX_LENGTH: 400,
  },
};

export const VIDEO_INTERVAL = 1000;

export {TabName, GenresFilter, AuthorizationStatus, FILMS_COUNT_PER_CLICK};
