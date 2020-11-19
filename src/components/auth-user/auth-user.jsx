import React from "react";
import {userDetails} from "../../types/types";
import {connect} from "react-redux";
import {getUser} from "../../store/selectors";

const AuthUser = (props) => {
  const {userAvatar} = props.userData;

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src={userAvatar} alt="User avatar" width="63" height="63"/>
      </div>
    </div>
  );
};

AuthUser.propTypes = {
  userData: userDetails,
};

const mapStateToProps = (state) => ({
  userData: getUser(state),
});

export default connect(mapStateToProps)(AuthUser);
