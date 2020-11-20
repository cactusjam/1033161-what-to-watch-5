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
  user: {
    id: 1,
    name: ``,
  },
  rating: 1,
  comment: ``
};

export const TEST_MOCKS = {
  id: 1,
  noop: () => {},
  movie: TEST_MOCK_MOVIE,
  movies: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
  genresFilter: [`All genres`, ``, ``, ``, ``, ``],
  genreFilter: `All genres`,
  comment: TEST_MOCK_COMMENT,
  match: {
    params: {
      id: `1`
    }
  },
  userData: {
    id: 1,
    email: ``,
    name: ``,
    authorizationStatus: ``,
    userAvatar: ``,
  },
  comments: [TEST_MOCK_COMMENT, TEST_MOCK_COMMENT, TEST_MOCK_COMMENT],
  authorizationStatusTrue: `AUTH`,
  authorizationStatusFalse: `NO_AUTH`,
};

export const TEST_MOCK_STORE = {
  [NameSpace.USER]: {
    id: 1,
    email: ``,
    name: ``,
    authorizationStatus: `AUTH`,
    userAvatar: ``,
  },
  [NameSpace.GENRES]: {
    activeFilterGenre: `Adventure`
  },
  [NameSpace.DATA]: {
    authorizationStatus: `TRUE`,
    movies: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
    filteredMovies: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
    reviews: [],
    currentMovie: TEST_MOCK_MOVIE,
    promoMovie: TEST_MOCK_MOVIE,
    favorites: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
    defaultFilmsCount: 8
  },
};
