import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {AppRoute} from "../../constants/constants";

const Logo = (props) => {
  const {isFooter = false} = props;
  return (
    <div className="logo">
      <Link to={AppRoute.ROOT} className={`logo__link ${isFooter ? `logo__link--light` : ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  isFooter: PropTypes.bool,
};

export default Logo;
