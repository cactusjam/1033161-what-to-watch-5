import React, {PureComponent} from "react";
import {movieDetails} from "../../types/types";
import {TabName} from "../../constants/constants.js";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import {reviewDetails} from "../../types/types";
import PropTypes from 'prop-types';

export default class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TabName.OVERVIEW,
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(id) {
    this.setState({activeTab: id});
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
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.entries(TabName).map(([key, value]) => {

              return <li key={`${key}`}
                className={`movie-nav__item ${(this.state.activeTab === value) ? `movie-nav__item--active` : ``}`}>
                <a className="movie-nav__link" onClick={() => {
                  this.handleTabClick(value);
                }}>{value}</a>
              </li>;
            })}
          </ul>
        </nav>
        {this.renderTab()}
      </div>
    );
  }
}

Tabs.propTypes = {
  movie: movieDetails,
  reviews: PropTypes.arrayOf(reviewDetails).isRequired
};
