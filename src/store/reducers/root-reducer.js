import {combineReducers} from "redux";
import {moviesData} from "./movies-data/movies-data";
import {genresData} from "./genres-data/genres-data";
import {user} from "./user/user";

export const NameSpace = {
  GENRES: `GENRES`,
  DATA: `DATA`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: moviesData,
  [NameSpace.GENRES]: genresData,
  [NameSpace.USER]: user
});
