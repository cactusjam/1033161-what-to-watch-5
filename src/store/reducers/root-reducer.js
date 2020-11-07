import {combineReducers} from "redux";
import {moviesData} from "./movies-data/movies-data";
import {genresData} from "./genres-data/genres-data";

export const NameSpace = {
  GENRES: `GENRES`,
  MOVIES: `MOVIES`,
};

export default combineReducers({
  [NameSpace.MOVIES]: moviesData,
  [NameSpace.GENRES]: genresData,
});
