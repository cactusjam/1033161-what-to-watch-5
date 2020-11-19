import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addFavoriteMovie} from "../../store/api-actions";
import {AppRoute} from "../../constants/constants";
import {redirectToRoute} from "../../store/action";
import {AuthorizationStatus} from "../../constants/constants";
import {userDetails} from "../../types/types";
import {getUser} from "../../store/selectors";

const FavoriteButton = (props) => {
  const {id, isFavorite, onFavoriteClick, onUnauthorizedClick, userData} = props;

  const handleButtonClick = () => {
    if (userData.authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return onUnauthorizedClick(AppRoute.LOGIN);
    }
    return onFavoriteClick(id, !isFavorite ? 1 : 0);
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      onClick={handleButtonClick}
      type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  userData: userDetails,
  onUnauthorizedClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userData: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(id, status) {
    dispatch(addFavoriteMovie(id, status));
  },
  onUnauthorizedClick(route) {
    dispatch(redirectToRoute(route));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
