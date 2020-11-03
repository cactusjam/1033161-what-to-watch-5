import React from "react";
import {movieDetails} from "../../types/types";
import {connect} from "react-redux";
import {findItemById} from "../../utils/utils";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import VideoPlayer from "../video-player/video-player";

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
  currentMovie: findItemById(ownProps.currentMovieId, state.movies),
});

export default connect(mapStateToProps)(PlayerScreen);
