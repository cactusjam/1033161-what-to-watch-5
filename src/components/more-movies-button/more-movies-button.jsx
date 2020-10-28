import React from "react";
import PropTypes from "prop-types";

const MoreMoviesButton = ({handleMoreButtonClick}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={() => handleMoreButtonClick()}
      >
        Show more</button>
    </div>
  );
};

MoreMoviesButton.propTypes = {
  handleMoreButtonClick: PropTypes.func.isRequired,
};

export default MoreMoviesButton;
