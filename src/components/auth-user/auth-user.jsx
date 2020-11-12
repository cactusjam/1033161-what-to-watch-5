import React from "react";
import PropTypes from "prop-types";

const AuthUser = (props) => {
  const {userAvatar} = props;

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src={userAvatar} alt="User avatar" width="63" height="63"/>
      </div>
    </div>
  );
};

AuthUser.propTypes = {
  userAvatar: PropTypes.string.isRequired,
};

export default AuthUser;
