
import React from "react";
import {AuthorizationStatus} from "../../constants/constants";
import {userDetails} from "../../types/types";
import {connect} from "react-redux";
import {getUser} from "../../store/selectors";
import AuthUser from "../auth-user/auth-user";
import NotAuthUser from "../not-auth-user/not-auth-user";

const UserBlock = (props) => {
  const {authorizationStatus, userAvatar} = props.userData;
  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH
        ? <AuthUser userAvatar = {userAvatar}/>
        : <NotAuthUser/>
      }
    </div>
  );
};

UserBlock.propTypes = {
  userData: userDetails,
};

const mapStateToProps = (state) => ({
  userData: getUser(state),
});

export default connect(mapStateToProps)(UserBlock);
