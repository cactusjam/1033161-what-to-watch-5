import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Review} from "../../constants/constants";

const validateText = (reviewText) => {
  return reviewText.length >= Review.TEXT.MIN_LENGTH && reviewText.length <= Review.TEXT.MAX_LENGTH;
};

const validateRating = (rating) => {
  return Number(rating) >= Review.MIN_RATING;
};

const withValidation = (Component) => {
  class WithValidation extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: false,
        rating: null,
        reviewText: ``,
        errorMessage: null
      };

      this._handleReviewChange = this._handleReviewChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    _isValid(rating, reviewText) {
      return validateRating(rating) && validateText(reviewText);
    }

    _handleReviewChange(evt) {
      const {rating} = this.state;
      const reviewText = evt.target.value;
      const isValid = this._isValid(rating, reviewText);

      this.setState({
        reviewText,
        isValid
      });
    }

    _handleRatingChange(evt) {
      const {reviewText} = this.state;
      const rating = Number(evt.target.value);
      const isValid = this._isValid(rating, reviewText);

      this.setState({
        rating,
        isValid
      });
    }

    render() {
      const {isValid, rating, reviewText, errorMessage} = this.state;

      return <Component
        {...this.props}
        isValid={isValid}
        rating={rating}
        reviewText={reviewText}
        onReviewChange={this._handleReviewChange}
        onRatingChange={this._handleRatingChange}
        errorMessage = {errorMessage}
      />;
    }
  }

  WithValidation.propTypes = {
    rating: PropTypes.number,
    reviewText: PropTypes.string,
  };

  return WithValidation;
};

export default withValidation;
