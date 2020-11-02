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
          {tabs.map((tab, index) =>
            <li key={index} className={`movie-nav__item ${(activeTab === tab) ? `movie-nav__item--active` : ``}`}>
              <a className="movie-nav__link" onClick={() => onActiveMovieChange(tab)}>{tab.charAt(0) + tab.slice(1).toLowerCase()}</a>
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
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  tabToRender: PropTypes.element.isRequired,
};

export default Tabs;
