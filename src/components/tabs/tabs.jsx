import React from "react";
import {movieDetails} from "../../types/types";
import {reviewDetails} from "../../types/types";
import PropTypes from 'prop-types';

const Tabs = (props) => {
  const {activeTab, tabs, onActiveMovieChange, tabToRender} = props;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map(([key, value]) =>
            <li key={`${key}`} className={`movie-nav__item ${(activeTab === value) ? `movie-nav__item--active` : ``}`}>
              <a className="movie-nav__link" onClick={() => onActiveMovieChange(value)}>{value}</a>
            </li>
          )}
        </ul>
      </nav>
      {tabToRender}
    </div>
  );
};

Tabs.propTypes = {
  movie: movieDetails,
  reviews: PropTypes.arrayOf(reviewDetails).isRequired,
  onActiveMovieChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.array).isRequired,
  tabToRender: PropTypes.element.isRequired,
};

export default Tabs;
