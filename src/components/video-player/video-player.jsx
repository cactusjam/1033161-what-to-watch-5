import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {movieDetails} from "../../types/types";
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {
    currentMovie,
    elapsedTimeRef,
    isPlaying,
    duration,
    onPlayPauseClick,
    onFullscreenClick,
    progressRef,
    pinProgressRef,
    videoRef
  } = props;

  return (
    <Fragment>
      <video src={currentMovie.video} className="player__video" autoPlay muted poster={currentMovie.poster} ref={videoRef}/>
      <Link type="button" className="player__exit" to={`/films/${currentMovie.id}`}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" ref={progressRef}/>
            <div className="player__toggler" style={{left: `30%`}} ref={pinProgressRef}>Toggler</div>
          </div>
          <div className="player__time-value" ref={elapsedTimeRef}>{duration}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayPauseClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}/>
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">{currentMovie.title}</div>

          <button type="button" className="player__full-screen" onClick={onFullscreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

VideoPlayer.propTypes = {
  currentMovie: movieDetails,
  isPlaying: PropTypes.bool.isRequired,
  videoRef: PropTypes.object.isRequired,
  progressRef: PropTypes.object.isRequired,
  pinProgressRef: PropTypes.object.isRequired,
  elapsedTimeRef: PropTypes.object.isRequired,
  onPlayPauseClick: PropTypes.func.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired
};

export default VideoPlayer;
