export const getRandomElements = (array)=> {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getSimilarMovies = (films, currentFilm, id) => {
  const similarMovies = films.filter((movie) => {
    return movie.genre.some((it) => it === currentFilm[0]) && movie.id !== id;
  });

  return similarMovies;
};

export default getSimilarMovies;
