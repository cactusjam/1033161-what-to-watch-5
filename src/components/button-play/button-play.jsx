import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../constants/constants";
const ButtonPlay = (props) => {
  const {id} = props;
  return (
    <Link className="btn btn--play movie-card__button" type="button" to={`${AppRoute.PLAYER}/${id}`}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
};

ButtonPlay.propTypes = {
  id: PropTypes.number.isRequired,
};


export default ButtonPlay;
