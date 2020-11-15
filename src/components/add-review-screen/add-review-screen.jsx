import React, {Fragment, PureComponent} from "react";
import {Link} from 'react-router-dom';
// import {movieDetails} from "../../types/types";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCurrentMovie, getReviews} from "../../store/selectors";
import {fetchCurrentMovie, addReview} from "../../store/api-actions";

const REVIEW_RATINGS = [`1`, `2`, `3`, `4`, `5`];

class AddReviewScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: `3`,
      reviewText: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    this.props.setCurrentMovie(this.props.currentMovieId);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {currentMovieId} = this.props;
    const {rating, reviewText} = this.state;

    this.props.onSubmit(currentMovieId, rating, reviewText);
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    const {currentMovie} = this.props;

    if (!currentMovie) {
      return null;
    }

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={currentMovie.poster} alt={currentMovie.title} />
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
                  <Link to={`/films/${currentMovie.id}`} className="breadcrumbs__link">{currentMovie.title}</Link>
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
            <img src={currentMovie.poster} alt={currentMovie.title} width="218"
              height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
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
              <textarea className="add-review__textarea" name="reviewText" id="reviewText"
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
  setCurrentMovie: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  currentMovieId: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  currentMovie: PropTypes.shape({
    id: PropTypes.number,
    genre: PropTypes.string,
    poster: PropTypes.string,
    releaseYear: PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  currentMovie: getCurrentMovie(state),
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentMovie(movieId) {
    dispatch(fetchCurrentMovie(movieId));
  },
  onSubmit(id, rating, comment) {
    dispatch(addReview(id, rating, comment));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
