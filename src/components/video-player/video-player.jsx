import React, {Fragment, useState, useRef, useEffect} from "react";
import {movieDetails} from "../../types/types";
import {Link} from "react-router-dom";
import {VIDEO_INTERVAL} from "../../constants/constants";

const SubstringElapsed = {
  START: 8,
  END: 11,
};

const VideoPlayer = (props) => {
  const {currentMovie} = props;

  const [isPlaying, setState] = useState(false);

  const videoRef = useRef();
  const progressRef = useRef();
  const pinProgressRef = useRef();
  const elapsedTimeRef = useRef();

  const handlePlayPauseClick = () => {
    setState(!isPlaying);
    changeAction();
  };

  const handleFullScreenClick = () => {
    videoRef.current.requestFullscreen();
  };

  const changeAction = () => {
    switch (!isPlaying) {
      case true:
        videoRef.current.play();
        break;
      case false:
        videoRef.current.pause();
        break;
    }
  };

  useEffect(() => {
    videoRef.current.ontimeupdate = () => {
      changeElapsedTime();
      changeProgressBar();
    };

    videoRef.current.oncanplay = () => {
      handlePlayPauseClick();
      videoRef.current.play();
    };

    videoRef.current.onpause = () => {
      setState(false);
    };

    return function cleanUp() {
      videoRef.current.oncanplay = null;
      videoRef.current.ontimeupdate = null;
      videoRef.current.onpause = null;
    };
  }, []);

  const changeElapsedTime = () => {
    const elapsed = videoRef.current.duration - videoRef.current.currentTime;
    elapsedTimeRef.current.textContent = new Date(elapsed * VIDEO_INTERVAL).toISOString().substr(SubstringElapsed.END, SubstringElapsed.START);
  };

  const changeProgressBar = () => {
    const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;

    progressRef.current.value = percentage;
    pinProgressRef.current.style.left = `${percentage}% `;
  };

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
          <div className="player__time-value" ref={elapsedTimeRef}>{currentMovie.duration}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayPauseClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}/>
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">{currentMovie.title}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
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
  currentMovie: movieDetails
};

export default VideoPlayer;
