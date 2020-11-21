import {NameSpace} from "./store/reducers/root-reducer.js";

export const TEST_MOCK_MOVIE = {
  id: 1,
  genre: ``,
  title: ``,
  cover: ``,
  poster: ``,
  background: ``,
  backgroundColor: ``,
  releaseYear: 1,
  promo: ``,
  video: ``,
  duration: 1,
  rating: {
    score: 1,
    countOfVotes: 1
  },
  description: ``,
  director: ``,
  starring: [],
  isFavorite: true,
};

export const TEST_MOCK_COMMENT = {
  id: 1,
  author: ``,
  rating: 22,
  reviewText: ``,
  date: ``
};

export const TEST_MOCKS = {
  id: 1,
  noop: () => {},
  match: {
    params: {
      id: `1`,
    },
  },
  movie: TEST_MOCK_MOVIE,
  movies: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
  genresFilter: [`All genres`, ``, ``, ``, ``, ``],
  genreFilter: `All genres`,
  review: TEST_MOCK_COMMENT,
  userData: {
    id: 1,
    email: ``,
    name: ``,
    authorizationStatus: ``,
    userAvatar: ``,
  },
  reviews: [TEST_MOCK_COMMENT, TEST_MOCK_COMMENT, TEST_MOCK_COMMENT],
  authorizationStatusTrue: `AUTH`,
  authorizationStatusFalse: `NO_AUTH`,
};

export const TEST_MOCK_STORE = {
  [NameSpace.USER]: {
    id: 1,
    email: ``,
    authorizationStatus: `AUTH`,
    userAvatar: ``,
  },
  [NameSpace.GENRES]: {
    activeFilterGenre: `Adventure`
  },
  [NameSpace.DATA]: {
    movies: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
    reviews: [],
    currentMovie: TEST_MOCK_MOVIE,
    promoMovie: TEST_MOCK_MOVIE,
    favorites: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
    defaultFilmsCount: 8,
    isDataSending: false,
    isDataSendError: false
  },
};
