import React from "react";
import PropTypes from "prop-types";
import {FILMS_COUNT_PER_CLICK} from "../../constants/constants";

const MoreMoviesButton = ({handleMoreButtonClick}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={() => handleMoreButtonClick(FILMS_COUNT_PER_CLICK)}
      >
        Show more</button>
    </div>
  );
};

MoreMoviesButton.propTypes = {
  handleMoreButtonClick: PropTypes.func.isRequired,
};

export default MoreMoviesButton;
