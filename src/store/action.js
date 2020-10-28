const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
};

const ActionCreator = {
  changeGenreFilter: (genre)=>({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre
  }),
};

export {ActionType, ActionCreator};
