import React from 'react';
import {movieDetails} from "../../types/types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";

const MovieCard = (props) => {
  const {movie} = props;

  return (
    <article id={movie.id} className="small-movie-card catalog__movies-card">
      <Link to={`/films/` + movie.id} className="small-movie-card__link">
        <VideoPlayer
          movie = {movie}
        />
        <h3 className="small-movie-card__title">
          <span className="small-movie-card__link">{movie.title}</span>
        </h3>
      </Link>
    </article>
  );
};

MovieCard.propTypes = {
  movie: movieDetails
};

export default MovieCard;
