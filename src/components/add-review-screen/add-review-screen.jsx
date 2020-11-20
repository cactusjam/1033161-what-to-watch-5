import React, {Fragment, useEffect} from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCurrentMovie, getReviews, dataSending, dataSendingError} from "../../store/selectors";
import {fetchCurrentMovie, addReview} from "../../store/api-actions";
import {setDataIsSending} from "../../store/action";
import {movieProp} from "../../types/types";
import Header from "../header/header";

const REVIEW_RATINGS = [`1`, `2`, `3`, `4`, `5`];

const AddReviewScreen = (props) => {
  const {
    currentMovieId,
    currentMovie,
    onSubmit,
    onReviewChange,
    onRatingChange,
    isDataSending,
    isDataSendError,
    isValid,
    rating,
    reviewText,
    setCurrentMovie,
  } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(currentMovieId, rating, reviewText);
  };

  useEffect(() => {
    setCurrentMovie(currentMovieId);
  }, [currentMovieId]);

  if (!currentMovie) {
    return null;
  }

  const getMessage = () => {
    if (isDataSending) {
      return (
        <p>Sending your review...</p>
      );
    } else if (isDataSendError) {
      return (
        <p className="movie-card__text" style={{color: `#F5001D`}}>Error! Please, try again later...</p>
      );
    }
    return ``;
  };

  return (
    <section className="movie-card movie-card--full"style={{backgroundColor: currentMovie.backgroundColor}}>
      <div className="movie-card__header">
        <Header background={currentMovie.background} title={currentMovie.title}>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentMovie.id}`} className="breadcrumbs__link">{currentMovie.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={currentMovie.poster} alt={currentMovie.title} width="218"
            height="327" />
        </div>
      </div>

      <div className="add-review">
        {getMessage()}
        <form action="#" className="add-review__form" onSubmit={handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {REVIEW_RATINGS.map((reviewRating) => {
                return (
                  <Fragment key={reviewRating}>
                    <input className="rating__input" id={`star-${reviewRating}`} type="radio" name="rating" value={`${reviewRating}`}
                      checked={reviewRating === rating}
                      onChange={onRatingChange}
                      disabled={isDataSending}
                    />
                    <label className="rating__label" htmlFor={`star-${reviewRating}`}>{`Rating ${reviewRating}`}</label>
                  </Fragment>
                );
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="reviewText" id="reviewText"
              placeholder="Review text"
              onChange={onReviewChange}
              disabled={isDataSending}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={(!isValid || isDataSending)}>Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

AddReviewScreen.propTypes = {
  setCurrentMovie: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  currentMovieId: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  onReviewChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  currentMovie: movieProp,
  rating: PropTypes.string,
  reviewText: PropTypes.string,
  isDataSending: PropTypes.bool.isRequired,
  isDataSendError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentMovie: getCurrentMovie(state),
  reviews: getReviews(state),
  isDataSending: dataSending(state),
  isDataSendError: dataSendingError(state)
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentMovie(movieId) {
    dispatch(fetchCurrentMovie(movieId));
  },
  onSubmit(id, rating, reviewText) {
    dispatch(setDataIsSending(true));
    dispatch(addReview(id, rating, reviewText));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
