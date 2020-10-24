import {extend} from "../utils/utils";
import {ActionType} from './action';
import {GenresFilter} from "../../constants/constants";
import {getFilmsByGenre} from "../../utils/utils";

const initialState = {
  genreFilter: GenresFilter.ALL,
  films: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {genreFilter: action.payload});

    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {films: getFilmsByGenre(action.payload)});
  }

  return state;
};
