import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {GenresFilter} from "../../../constants/constants";

const initialState = {
  activeFilterGenre: GenresFilter.ALL
};

const genresData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeFilterGenre: action.payload
      });
  }

  return state;
};

export {genresData};
