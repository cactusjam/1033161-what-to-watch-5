import React from "react";
import {movieDetails} from "../../types/types";
import {connect} from "react-redux";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import VideoPlayer from "../video-player/video-player";
import {getMovieById} from "../../store/selectors";

const VideoPlayerWrapper = withVideoPlayer(VideoPlayer);

const PlayerScreen = (props) => {
  const {currentMovie} = props;

  return (
    <div className="player">
      <VideoPlayerWrapper
        currentMovie = {currentMovie}>
      </VideoPlayerWrapper>
    </div>
  );
};

PlayerScreen.propTypes = {
  currentMovie: movieDetails,
};

const mapStateToProps = (state, ownProps) => ({
  currentMovie: getMovieById(state, ownProps.currentMovieId),
});

export default connect(mapStateToProps)(PlayerScreen);
