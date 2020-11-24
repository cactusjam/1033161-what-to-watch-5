import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import VideoPlayer from "../video-player/video-player";
import {getCurrentMovie} from "../../store/selectors";
import {fetchCurrentMovie} from "../../store/api-actions";

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
      <VideoPlayer
        currentMovie = {currentMovie}>
      </VideoPlayer>
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

export {PlayerScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);
