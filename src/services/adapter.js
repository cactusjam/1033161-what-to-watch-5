export const movieAdapter = (movie) => ({
  id: movie.id,
  genre: movie.genre,
  title: movie.name,
  cover: movie.poster_image,
  poster: movie.preview_image,
  background: movie.background_image,
  // backgroundColor: movie.background_color,
  releaseYear: movie.released,
  promo: movie.preview_video_link,
  duration: movie.run_time,
  rating: {
    score: movie.rating,
    countOfVotes: movie.scores_count
  },
  description: movie.description,
  director: movie.director,
  starring: movie.starring,
});

export const moviesListAdapter = (movies) => {
  return movies.map(movieAdapter);
};
