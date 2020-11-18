import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {FILMS_COUNT_PER_CLICK} from "../../../constants/constants";

const initialState = {
  movies: [],
  promoMovie: {},
  currentMovie: null,
  reviews: [],
  defaultFilmsCount: FILMS_COUNT_PER_CLICK,
  filteredMovies: [],
  isDataSending: false,
  isDataSendError: false,
};

const moviesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload
      });
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload
      });
    case ActionType.LOAD_CURRENT_MOVIE:
      return extend(state, {
        currentMovie: action.payload
      });
    case ActionType.LOAD_MOVIE_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });
    case ActionType.SET_DATA_IS_SENDING:
      return extend(state, {
        isDataSending: action.payload,
      });
    case ActionType.SET_DATA_SEND_ERROR:
      return extend(state, {
        isDataSendError: action.payload,
      });
  }

  return state;
};

export {moviesData};
