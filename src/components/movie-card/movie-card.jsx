import React from 'react';
import PropTypes from 'prop-types';
import {MovieTypes} from "../../types/types";

const MovieCard = (props) => {
  const {movie, onCardOver, onCardLeave} = props;
  const {id, title, poster} = movie;
  return (
    <article id={id} className="small-movie-card catalog__movies-card"
      onMouseOver={() => onCardOver(movie)}
      onMouseLeave={() => onCardLeave()}
    >
      <div className="small-movie-card__image">
        <img src={`/` + poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: MovieTypes.item,
  onCardOver: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
};

export default MovieCard;
