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
        rating: `1`,
        reviewText: ``,
      };

      this._handleValidation = this._handleValidation.bind(this);
      this._handleReviewChange = this._handleReviewChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    _handleValidation() {
      const {rating, reviewText} = this.state;

      if (validateRating(rating) && validateText(reviewText)) {
        this.setState({
          isValid: true,
        });
        return;
      }

      this.setState({
        isValid: false,
      });
    }

    _handleReviewChange(evt) {
      this.setState({
        reviewText: evt.target.value,
      });
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
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
        onValidityCheck={this._handleValidation}
        onRatingChange={this._handleRatingChange}
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
