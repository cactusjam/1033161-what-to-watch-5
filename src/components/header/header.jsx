import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import AuthUser from "../auth-user/auth-user";
import NotAuthUser from "../not-auth-user/not-auth-user";
import {userDetails} from "../../types/types";
import {AuthorizationStatus} from "../../constants/constants";
import {getUser} from "../../store/selectors";
import PropTypes from "prop-types";

const Header = (props) => {
  const {children, cover, title} = props;
  const {authorizationStatus, userAvatar} = props.userData;
  return (
    <Fragment>
      <div className="movie-card__bg">
        <img src={cover} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <div className="logo">
          <Link className="logo__link" to="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        {authorizationStatus === AuthorizationStatus.AUTH
          ? <AuthUser userAvatar = {userAvatar}/>
          : <NotAuthUser/>
        }
        {children}
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  userData: userDetails,
  children: PropTypes.node,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userData: getUser(state),
});

export default connect(mapStateToProps)(Header);
