import React, {PureComponent} from 'react';
import {TabName} from "../../constants/constants.js";
import MovieOverview from "../../components/movie-overview/movie-overview";
import MovieDetails from "../../components/movie-details/movie-details";
import MovieReviews from "../../components/movie-reviews/movie-reviews";
import {movieDetails, reviewDetails} from "../../types/types";
import PropTypes from 'prop-types';

const withActiveMovie = (Component) => {
  class WithActiveMovie extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: TabName.OVERVIEW
      };
      this.handleActiveMovieChange = this.handleActiveMovieChange.bind(this);
    }

    handleActiveMovieChange(tabName) {
      this.setState({
        activeTab: tabName,
      });
    }

    renderTab() {
      const {movie, reviews} = this.props;
      const activeTab = this.state.activeTab;

      switch (activeTab) {
        case TabName.OVERVIEW:
          return <MovieOverview movie={movie} />;
        case TabName.DETAILS:
          return <MovieDetails movie={movie} />;
        case TabName.REVIEWS:
          return <MovieReviews reviews={reviews} />;
      }

      return null;
    }

    render() {

      return <Component
        {...this.props}
        activeTab={this.state.activeTab}
        tabs = {Object.values(TabName)}
        onActiveMovieChange={this.handleActiveMovieChange}
        tabToRender = {this.renderTab()}
      />;
    }
  }

  WithActiveMovie.propTypes = {
    movie: movieDetails,
    reviews: PropTypes.arrayOf(reviewDetails).isRequired,
  };

  return WithActiveMovie;
};

export default withActiveMovie;
