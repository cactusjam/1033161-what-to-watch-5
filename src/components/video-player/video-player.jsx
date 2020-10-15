import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const videoPlayer = (Component) => {
  class VideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isLoading: true,
        isPlaying: props.isPlaying,
      };
    }

    componentDidMount() {
      const {src, poster, isMuted} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.poster = poster;
      video.muted = isMuted;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      video.onplay = () => {
        this.setState({
          isLoading: true,
        });
      };

      video.onpause = () => {
        video.load();
        this.setState({
          isPlaying: false,
        });
      };
    }

    componentWillUnmount() {
      let video = this._videoRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.src = ``;
    }

    render() {
      const {isLoading, isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          onPlayChange={() => {
            this.setState({isPlaying: !isPlaying});
          }}>
          <video width="280" height="175" ref={this._videoRef}/>
        </Component>
      );
    }

    componentDidUpdate() {
      const {isPlaying} = this.state;
      const video = this._videoRef.current;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }
  }

  VideoPlayer.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  return VideoPlayer;
};

export default videoPlayer;


