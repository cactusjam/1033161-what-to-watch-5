import React from 'react';
import PropTypes from 'prop-types';
import {movieDetails} from "../../types/types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {movie, children, onPlayChange} = props;
  const {id, title} = movie;
  let timeout;

  return (
    <article id={id} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image"
        onMouseOver={() => {
          timeout = setTimeout(onPlayChange, 1000);
        }} onMouseLeave={() => {
          clearTimeout(timeout);
          onPlayChange();
        }}>
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/` + id} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: movieDetails,
  onPlayChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MovieCard;
