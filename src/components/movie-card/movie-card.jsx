import React from 'react';
import PropTypes from 'prop-types';
import {movieDetails} from "../../types/types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {movie, onCardOver, onCardLeave} = props;
  const {id, poster, title} = movie;
  return (
    <article id={id} className="small-movie-card catalog__movies-card"
      onMouseOver={() => onCardOver(movie)}
      onMouseLeave={() => onCardLeave()}
    >
      <div className="small-movie-card__image">
        <img src={`/` + poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/` + id} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: movieDetails,
  onCardOver: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
};

export default MovieCard;
