import React, {Fragment, PureComponent} from "react";
import {Link} from 'react-router-dom';
import {movieDetails} from "../../types/types";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getMovies, getReviews} from "../../store/selectors";

const REVIEW_RATINGS = [`1`, `2`, `3`, `4`, `5`];

class AddReviewScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: `3`,
      text: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    const {movies} = this.props;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={movies.poster} alt={movies.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to='/' className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${movies.id}`} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src="/img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
              height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                {REVIEW_RATINGS.map((rating) => {
                  return (
                    <Fragment key={rating}>
                      <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={`${rating}`}
                        checked={rating === this.state.rating}
                        onChange={this.handleFieldChange}
                      />
                      <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
                    </Fragment>
                  );
                })}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text"
                placeholder="Review text" onChange={this.handleFieldChange}/>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>
      </section>
    );
  }
}

AddReviewScreen.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  reviews: getReviews(state)
});

export default connect(mapStateToProps)(AddReviewScreen);
