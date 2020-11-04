import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayerSmall extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.handleHoverPlayer = this.handleHoverPlayer.bind(this);
    this.handleUnhoverPlayer = this.handleUnhoverPlayer.bind(this);
  }

  componentWillUnmount() {
    if (this.filmTimeout) {
      clearTimeout(this.filmTimeout);
    }
  }

  handleHoverPlayer() {
    const movie = this._videoRef.current;
    this.filmTimeout = setTimeout(() => {
      movie.play();
    }, 1000);
  }

  handleUnhoverPlayer() {
    const movie = this._videoRef.current;
    if (this.filmTimeout) {
      clearTimeout(this.filmTimeout);
    }
    movie.load();
  }

  render() {
    const {movie} = this.props;

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={this.handleHoverPlayer}
        onMouseLeave={this.handleUnhoverPlayer}
      >
        <video
          ref={this._videoRef}
          autoPlay={false}
          poster={movie.poster}
          src={movie.promo}
          width="280"
          height="175"
          muted
        >
        </video>
      </div>
    );
  }
}

VideoPlayerSmall.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default VideoPlayerSmall;
