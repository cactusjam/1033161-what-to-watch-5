import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const Review = {
  MIN_RATING: 1,
  TEXT: {
    MIN_LENGTH: 50,
    MAX_LENGTH: 400,
  },
};

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
        rating: ``,
        reviewText: ``,
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
      const rating = evt.target.value;
      const isValid = this._isValid(rating, reviewText);

      this.setState({
        rating,
        isValid
      });
    }

    render() {
      const {isValid, rating, reviewText} = this.state;

      return <Component
        {...this.props}
        isValid={isValid}
        rating={rating}
        reviewText={reviewText}
        onReviewChange={this._handleReviewChange}
        onRatingChange={this._handleRatingChange}
        // onValidityCheck={this._handleValidation}
      />;
    }
  }

  WithValidation.propTypes = {
    rating: PropTypes.string,
    reviewText: PropTypes.string,
  };

  return WithValidation;
};

export default withValidation;
