import React from "react";
import MovieCard from '../movie-card/movie-card.jsx';
import {movieDetails} from "../../types/types";
import PropTypes from "prop-types";

const MoviesList = ({movies}) => {

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => {
        const {id, poster, promo} = movie;
        return <MovieCard key={id} movie={movie} src={promo} poster={poster}
        />;
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired,
};

export default MoviesList;
