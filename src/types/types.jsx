import PropTypes from "prop-types";

export const promoMovieDetails = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
  releaseYear: PropTypes.number.isRequired,
});

export const reviewDetails = PropTypes.shape({
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
});

export const movieDetails = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
  releaseYear: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  promo: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    countOfVotes: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
}).isRequired;
