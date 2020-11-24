import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {login} from "../../store/api-actions";
import {connect} from "react-redux";

const withLogin = (Component) => {
  class WithLogin extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        errorEmail: ``,
        errorPassword: ``,
        authorizationStatus: `NO_AUTH`
      };

      this._handleInputChange = this._handleInputChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    componentDidUpdate() {
      this.validate();
    }

    _handleInputChange(evt) {
      if (evt.target.name.includes(`email`)) {
        this.setState({
          email: evt.target.value
        });
      } else if (evt.target.name.includes(`password`)) {
        this.setState({
          password: evt.target.value
        });
      }
    }

    _handleFormSubmit(evt) {
      const {onFormSubmit} = this.props;
      const {email, password} = this.state;
      evt.preventDefault();
      onFormSubmit({
        email,
        password
      });
      this.validate();
    }

    validate() {
      let {email, password} = this.state;
      let errorEmail = ``;
      let errorPassword = ``;
      if (!email) {
        errorEmail = `Please enter a valid email address`;
      }

      if (!password) {
        errorPassword = `Please enter a password`;
      }

      this.setState({
        errorEmail,
        errorPassword
      });
    }

    render() {
      const {email, password, authorizationStatus, errorEmail, errorPassword} = this.state;

      return (
        <Component {...this.props}
          email={email}
          password={password}
          handleInputChange={this._handleInputChange}
          authorizationStatus={authorizationStatus}
          errorEmail={errorEmail}
          errorPassword={errorPassword}
          handleFormSubmit={this._handleFormSubmit}
        />
      );
    }
  }

  WithLogin.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    onFormSubmit(authData) {
      dispatch(login(authData));
    }
  });

  return connect(null, mapDispatchToProps)(WithLogin);

};

export default withLogin;
