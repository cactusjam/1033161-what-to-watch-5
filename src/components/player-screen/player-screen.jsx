import React, {useEffect} from "react";
import PropTypes from 'prop-types';
// import {movieDetails} from "../../types/types";
import {connect} from "react-redux";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import VideoPlayer from "../video-player/video-player";
import {getCurrentMovie} from "../../store/selectors";
import {fetchCurrentMovie} from "../../store/api-actions";

const VideoPlayerWrapper = withVideoPlayer(VideoPlayer);

const PlayerScreen = (props) => {
  const {setCurrentMovie, currentMovieId, currentMovie} = props;

  useEffect(() => {
    setCurrentMovie(currentMovieId);
  }, [currentMovieId]);

  if (!currentMovie) {
    return null;
  }

  return (
    <div className="player">
      <VideoPlayerWrapper
        currentMovie = {currentMovie}>
      </VideoPlayerWrapper>
    </div>
  );
};

PlayerScreen.propTypes = {
  setCurrentMovie: PropTypes.func.isRequired,
  currentMovieId: PropTypes.string.isRequired,
  currentMovie: PropTypes.shape({
    id: PropTypes.number,
    genre: PropTypes.string,
    poster: PropTypes.string,
    releaseYear: PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentMovie(movieId) {
    dispatch(fetchCurrentMovie(movieId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);
