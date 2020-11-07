import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {FILMS_COUNT_PER_CLICK} from "../../../constants/constants";
import reviews from "../../../mocks/reviews";

const initialState = {
  movies: [],
  promoMovie: {},
  reviews,
  defaultFilmsCount: FILMS_COUNT_PER_CLICK,
};

const moviesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload
      });
    case ActionType.LOAD_MOVIE_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });
  }

  return state;
};

export {moviesData};
