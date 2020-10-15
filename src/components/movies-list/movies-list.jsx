import React, {PureComponent } from "react";
import MovieCard from '../movie-card/movie-card.jsx';
import {movieDetails} from "../../types/types";
import PropTypes from "prop-types";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";

const MovieCardWrapped = withVideoPlayer(MovieCard);

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          const {id, poster, promo} = movie;
          return <MovieCardWrapped key={id} movie={movie} src={promo} poster={poster}
            isPlaying={false}
            isMuted={true}
          />;
        })}
      </div>
    );
  }
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired,
};
