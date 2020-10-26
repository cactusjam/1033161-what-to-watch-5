const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

const ActionCreator = {
  changeGenreFilter: (genre)=>({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre
  }),
  getFilmsByGenre: (movies, genre)=>({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: {movies, genre}
  })
};

export {ActionType, ActionCreator};
