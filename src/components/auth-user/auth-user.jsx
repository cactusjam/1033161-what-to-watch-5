import React from "react";
import {userDetails} from "../../types/types";

const AuthUser = (props) => {
  const {avatarUrl, name} = props;

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src={avatarUrl} alt={name} width="63" height="63"/>
      </div>
    </div>
  );
};

AuthUser.propTypes = {
  avatarUrl: userDetails,
  name: userDetails
};

export default AuthUser;
