import React from 'react';
import {movieDetails} from "../../types/types";
import {Link} from "react-router-dom";
import VideoPlayerSmall from "../video-player-small/video-player-small";

const MovieCardSmall = (props) => {
  const {movie} = props;

  return (
    <article id={movie.id} className="small-movie-card catalog__movies-card">
      <Link to={`/films/` + movie.id} className="small-movie-card__link">
        <VideoPlayerSmall
          movie = {movie}
        />
        <h3 className="small-movie-card__title">
          <span className="small-movie-card__link"></span>
        </h3>
      </Link>
    </article>
  );
};

MovieCardSmall.propTypes = {
  movie: movieDetails
};

export default MovieCardSmall;
