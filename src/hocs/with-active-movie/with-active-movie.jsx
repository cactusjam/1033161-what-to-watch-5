import React, {PureComponent} from 'react';

const withActiveMovie = (Component) => {
  class WithActiveMovie extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeMovie: -1,
      };
      this.handleActiveMovieChange = this.handleActiveMovieChange.bind(this);
    }

    handleActiveMovieChange(index) {
      this.setState({
        activeMovie: index,
      });
    }

    render() {
      const {activeMovie} = this.state;

      return <Component
        {...this.props}
        activeMovie={activeMovie}
        onActiveMovieChange={this.handleActiveMovieChange}
      />;
    }
  }

  WithActiveMovie.propTypes = {};

  return WithActiveMovie;
};

export default withActiveMovie;
