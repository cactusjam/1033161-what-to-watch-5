import {NameSpace} from "./store/reducers/root-reducer.js";

export const TEST_MOCK_MOVIE = {
  background: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
  backgroundColor: `#73B39A`,
  cover: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
  description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
  director: `Nicolas Winding Refn`,
  duration: 92,
  genre: `Action`,
  id: 1,
  isFavorite: true,
  poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
  promo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: {
    score: 3.6,
    countOfVotes: 109661
  },
  releaseYear: 2008,
  starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
  title: `Bronson`,
  video: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
};

export const TEST_MOCK_COMMENT = {
  author: `Christina`,
  date: `2020-10-09T13:38:44.769Z`,
  id: 1,
  rating: 3.3,
  reviewText: `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quali.`
};

export const TEST_MOCK_USER = {
  id: 1,
  email: `qqq@gmail.com`,
  userAvatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
  authorizationStatus: `AUTH`,
  password: `666`,
  errorEmail: ``,
  errorPassword: ``
};

export const TEST_MOCKS = {
  id: 1,
  noop: () => {},
  movie: TEST_MOCK_MOVIE,
  movies: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
  genresFilter: [`All genres`, `Action`, `Adventure`, `Comedy`, `Crime`, `Drama`, `Fantasy`, `Thriller`],
  genreFilter: `All genres`,
  review: TEST_MOCK_COMMENT,
  userData: {
    id: 1,
    email: `qqq@gmail.com`,
    userAvatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
    authorizationStatus: `AUTH`
  },
  unauthorizedUserData: {
    id: 1,
    email: ``,
    userAvatar: ``,
    authorizationStatus: `NO_AUTH`
  },
  reviews: [TEST_MOCK_COMMENT, TEST_MOCK_COMMENT, TEST_MOCK_COMMENT],
};

export const TEST_MOCK_STORE = {
  [NameSpace.USER]: {
    id: 1,
    email: `qqq@gmail.com`,
    authorizationStatus: `AUTH`,
    userAvatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
  },
  [NameSpace.GENRES]: {
    activeFilterGenre: `Adventure`
  },
  [NameSpace.DATA]: {
    movies: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
    reviews: [TEST_MOCK_COMMENT, TEST_MOCK_COMMENT, TEST_MOCK_COMMENT],
    currentMovie: TEST_MOCK_MOVIE,
    promoMovie: TEST_MOCK_MOVIE,
    favorites: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
    defaultFilmsCount: 8,
    isDataSending: false,
    isDataSendError: false
  },
};
