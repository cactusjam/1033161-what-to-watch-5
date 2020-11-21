import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import MovieOverview from "../../components/movie-overview/movie-overview";
import MovieDetails from "../../components/movie-details/movie-details";
import MovieReviews from "../../components/movie-reviews/movie-reviews";
import {TabName} from "../../constants/constants";
import {movieDetails, reviewDetails} from "../../types/types";

const Tabs = (props) => {
  const {activeTab, onActiveMovieChange, movie, reviews} = props;

  const getMovieTabs = () => {
    switch (activeTab) {
      case TabName.OVERVIEW:
        return (
          <MovieOverview movie={movie} />
        );
      case TabName.DETAILS:
        return (
          <MovieDetails movie={movie} />
        );
      case TabName.REVIEWS:
        return (
          <MovieReviews reviews={reviews} />
        );
    }

    return <Redirect to="/" />;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            Object.values(TabName).map((value, i) => {
              return (
                <li key={i} className={value === activeTab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                  <a className="movie-nav__link" onClick={() => onActiveMovieChange(value)}>{value}</a>
                </li>
              );
            })
          }
        </ul>
      </nav>
      {getMovieTabs()}
    </div>
  );
};

Tabs.propTypes = {
  onActiveMovieChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  movie: movieDetails,
  reviews: PropTypes.arrayOf(reviewDetails).isRequired
};

export default Tabs;
