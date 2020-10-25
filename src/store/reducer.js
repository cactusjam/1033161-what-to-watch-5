import {extend, getFilmsByGenre} from "../utils/utils";
import {ActionType} from './action';
import {GenresFilter} from "../constants/constants";

const initialState = {
  activeFilterGenre: GenresFilter.ALL,
  movies: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeFilterGenre: action.payload
      });

    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {
        movies: getFilmsByGenre(
          action.payload.movies,
          action.payload.genre,
        )
      });
  }

  return state;
};

export {reducer};
