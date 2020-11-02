const TabName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const TabsList = [
  {
    alias: TabName.OVERVIEW,
    title: `Overview`,
  },
  {
    alias: TabName.DETAILS,
    title: `Details`,
  },
  {
    alias: TabName.REVIEWS,
    title: `Reviews`,
  },
];

const GenresFilter = {
  ALL: `All genres`,
  COMEDY: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMA: `Dramas`,
  HORROR: `Horror`,
  KIDS: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLER: `Thrillers`,
};

const FILMS_COUNT_PER_CLICK = 8;

export {TabName, GenresFilter, TabsList, FILMS_COUNT_PER_CLICK};
