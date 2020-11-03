import React from "react";
import MovieCard from '../movie-card/movie-card.jsx';
import {movieDetails} from "../../types/types";
import PropTypes from "prop-types";
import withActiveMovie from "../../hocs/with-active-movie/with-active-movie";

const MoviesCardWrapped = withActiveMovie(MovieCard);
const MoviesList = ({movies}) => {

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => {
        const {id, poster, promo} = movie;
        return <MoviesCardWrapped key={id} movie={movie} src={promo} poster={poster}
        />;
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired,
};

export default MoviesList;
