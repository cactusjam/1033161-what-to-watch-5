import {combineReducers} from "redux";
import {moviesData} from "./movies-data/movies-data";
import {genresData} from "./genres-data/genres-data";

export const NameSpace = {
  GENRES: `GENRES`,
  DATA: `DATA`,
};

export default combineReducers({
  [NameSpace.DATA]: moviesData,
  [NameSpace.GENRES]: genresData,
});
