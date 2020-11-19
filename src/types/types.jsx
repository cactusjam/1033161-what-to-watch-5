import PropTypes from "prop-types";

export const reviewDetails = PropTypes.shape({
  author: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
});

export const movieDetails = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  promo: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    countOfVotes: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  duration: PropTypes.number.isRequired,
}).isRequired;

export const userDetails = PropTypes.shape({
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
});


export const movieProp = PropTypes.shape({
  id: PropTypes.number,
  genre: PropTypes.string,
  poster: PropTypes.string,
  releaseYear: PropTypes.number,
  title: PropTypes.string,
  cover: PropTypes.string,
  backgroundColor: PropTypes.string,
});
