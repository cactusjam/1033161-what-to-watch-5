import React, {PureComponent, createRef} from 'react';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();
      this._progressRef = createRef();
      this._pinProgressRef = createRef();
      this._elapsedTimeRef = createRef();

      this.state = {
        isPlaying: false,
      };

      this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
      this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
      this.progressLoop = this.progressLoop.bind(this);
    }

    componentDidMount() {
      this.movie = this._videoRef.current;
      this.progress = this._progressRef.current;
      this.pinProgress = this._pinProgressRef.current;
      this.elapsedTime = this._elapsedTimeRef.current;

      this.movie.oncanplay = () => {
        this.handlePlayPauseClick();
        this.progressLoop();
      };

      this.movie.onended = () => {
        this.handlePlayPauseClick();
      };
    }

    componentDidUpdate() {
      this.progressLoop();
    }

    componentWillUnmount() {
    }

    changeAction() {
      switch (this.state.isPlaying) {
        case true:
          this.movie.play();
          break;
        case false:
          this.movie.pause();
          break;
      }
    }

    changeElapsedTime() {
      const elapsed = this.movie.duration - this.movie.currentTime;
      this.elapsedTime.textContent = new Date(elapsed * 1000).toISOString().substr(11, 8);
    }

    progressLoop() {
      if (this.state.isPlaying === true) {
        const percentage = Math.round((this.movie.currentTime / this.movie.duration) * 100);
        this.progress.value = percentage;
        this.pinProgress.style.left = `${percentage}% `;
        this.changeElapsedTime();
        requestAnimationFrame(this.progressLoop);
      }
    }

    handlePlayPauseClick() {
      this.setState({isPlaying: !this.state.isPlaying}, this.changeAction);
    }

    handleFullScreenClick() {
      this.movie.requestFullscreen();
    }

    render() {
      return <Component
        {...this.props}
        videoRef = {this._videoRef}
        progressRef = {this._progressRef}
        pinProgressRef = {this._pinProgressRef}
        elapsedTimeRef = {this._elapsedTimeRef}
        isPlaying = {this.state.isPlaying}
        onPlayPauseClick = {this.handlePlayPauseClick}
        onFullscreenClick = {this.handleFullScreenClick}
      />;
    }
  }

  return WithVideoPlayer;
};

export default withVideoPlayer;
