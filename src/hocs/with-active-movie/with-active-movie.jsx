import React, {PureComponent} from 'react';

const withActiveMovie = (Component) => {
  class WithActiveMovie extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeMovie: -1,
      };
      this._handleActiveMovieChange = this._handleActiveMovieChange.bind(this);
    }

    _handleActiveMovieChange(index) {
      this.setState({
        activeMovie: index,
      });
    }

    render() {
      const {activeMovie} = this.state;

      return <Component
        {...this.props}
        activeMovie={activeMovie}
        onActiveMovieChange={this._handleActiveMovieChange}
      />;
    }
  }

  WithActiveMovie.propTypes = {};

  return WithActiveMovie;
};

export default withActiveMovie;
