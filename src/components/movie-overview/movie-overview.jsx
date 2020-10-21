import React, {Fragment} from "react";
import {movieDetails} from "../../types/types";

const MovieOverview = (props) => {
  const {movie} = props;
  const {description, director, rating, starring} = movie;
  const {countOfVotes, level, score} = rating;
  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{level}</span>
          <span className="movie-rating__count">{countOfVotes}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </Fragment>
  );
};

MovieOverview.propTypes = {
  movie: movieDetails
};

export default MovieOverview;
