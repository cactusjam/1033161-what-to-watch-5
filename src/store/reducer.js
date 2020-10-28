import {extend} from "../utils/utils";
import {ActionType} from './action';
import {GenresFilter, FILMS_COUNT_PER_CLICK} from "../constants/constants";
import films from "../mocks/films";
import reviews from "../mocks/reviews";

const {promo, list} = films;

const initialState = {
  activeFilterGenre: GenresFilter.ALL,
  movies: list,
  promoMovie: promo,
  reviews,
  userMovies: list.slice(0, 9),
  defaultFilmsCount: FILMS_COUNT_PER_CLICK,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeFilterGenre: action.payload
      });
  }

  return state;
};

export {reducer};
