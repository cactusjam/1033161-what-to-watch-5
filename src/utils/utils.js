export const getRandomElements = (array)=> {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const findSimilarMovies = (list, genre, title) => {
  return list.filter((item) => {
    return item.genre.some((it) => it === genre[0]) && item.title !== title;
  });
};

const getSimilarMovies = (films, currentFilm, title) => {
  const similarMovies = films.filter((movie) => {
    return movie.genre.some((it) => it === currentFilm[0]) && movie.title !== title;
  });

  return similarMovies;
};

export default getSimilarMovies;
