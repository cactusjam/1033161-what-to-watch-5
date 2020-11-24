import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../constants/constants";

const AuthUser = (props) => {
  const {userAvatar} = props;

  return (
    <Link to={AppRoute.MY_LIST}>
      <div className="user-block__avatar">
        <img src={userAvatar} alt="User avatar" width="63" height="63"/>
      </div>
    </Link>
  );
};

AuthUser.propTypes = {
  userAvatar: PropTypes.string.isRequired,
};

export default AuthUser;
