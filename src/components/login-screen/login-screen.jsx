import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {login} from "../../store/api-actions";
import {connect} from "react-redux";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import {AppRoute, AuthorizationStatus} from "../../constants/constants";
import {getAuthStatus} from "../../store/selectors";
import {redirectToRoute} from "../../store/action";

const LoginScreen = (props) => {
  const {
    handleInputChange,
    authorizationStatus,
    onSuccessAuthorization,
    errorEmail,
    errorPassword,
    handleFormSubmit
  } = props;

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      onSuccessAuthorization(AppRoute.ROOT);
    }
  }, [authorizationStatus]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
          <p>{errorEmail || errorPassword}</p>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input onChange={handleInputChange} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input onChange={handleInputChange} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button disabled={errorEmail || errorPassword} className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

LoginScreen.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  onSuccessAuthorization: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  errorPassword: PropTypes.string.isRequired,
  errorEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(userData) {
    dispatch(login(userData));
  },
  onSuccessAuthorization(route) {
    dispatch(redirectToRoute(route));
  },
});

export {LoginScreen};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
