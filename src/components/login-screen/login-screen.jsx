import React from "react";
import PropTypes from 'prop-types';
import {login} from "../../store/api-actions";
import {connect} from "react-redux";
import LogoHeader from "../logo-header/logo-header";
import FooterScreen from "../footer-screen/footer-screen";

const LoginScreen = (props) => {
  const {onSubmit, handleChange, email, password} = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      email,
      password
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoHeader/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input onChange={handleChange} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input onChange={handleChange} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <FooterScreen/>
    </div>
  );
};

LoginScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(userData) {
    dispatch(login(userData));
  }
});

export default connect(null, mapDispatchToProps)(LoginScreen);
