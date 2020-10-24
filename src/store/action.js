export const ActionType = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

export const ActionCreator = {
  changeGenreFilter: (filter)=>({
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: filter
  }),
  getFilmsByGenre: (films, genreFilter)=>({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: {films, genreFilter}
  })
};
