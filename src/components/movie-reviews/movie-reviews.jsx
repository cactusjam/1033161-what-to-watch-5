import React from "react";
import {reviewDetails} from "../../types/types";
import PropTypes from 'prop-types';

const MovieReviews = (props) => {
  const {reviews} = props;
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review) => <div key={review.author} className="review">
          <blockquote className="review__quote">
            <p className="review__text">{review.text}</p>

            <footer className="review__details">
              <cite className="review__author">{review.author}</cite>
              <time className="review__date" dateTime="2016-12-24">{review.date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{review.rating}</div>
        </div>)}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewDetails).isRequired
};

export default MovieReviews;
