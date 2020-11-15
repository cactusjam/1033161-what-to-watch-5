import React, {Fragment, useEffect} from "react";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list";
import {movieDetails, reviewDetails, userDetails} from "../../types/types";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Header from "../header/header";
import Tabs from "../tabs/tabs";
import {getSimilarMovies} from "../../utils/utils";
import withActiveTab from '../../hocs/with-active-tab/with-active-tab';
import {getMovies, getReviews, getCurrentMovie, getUser} from "../../store/selectors";
import {fetchCurrentMovie, fetchReviews} from "../../store/api-actions";
import {AuthorizationStatus} from "../../constants/constants";

const TabWrapped = withActiveTab(Tabs);

const MovieScreen = (props) => {
  const {onPlayButtonClick, movies, reviews, setCurrentMovie, currentMovieId, currentMovie, userData} = props;

  useEffect(() => {
    setCurrentMovie(currentMovieId);
  }, [currentMovieId]);

  if (!currentMovie) {
    return null;
  }

  const {id, genre, poster, releaseYear, title, cover} = currentMovie;
  const similarMovies = getSimilarMovies(movies, genre, id).slice(0, 4);

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg" style={{backgroundColor: currentMovie.backgroundColor}}>
            <img src={poster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header
            cover = {cover}
            title = {title}
          />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayButtonClick(currentMovie.id)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                {userData.authorizationStatus === AuthorizationStatus.AUTH
                  ? <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
                  : ``}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={title + `poster`} width="218" height="327" />
            </div>

            <TabWrapped movie={currentMovie} reviews={reviews}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies={similarMovies} onClick={onPlayButtonClick}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link className="logo__link logo__link--light" to="/">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

MovieScreen.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  setCurrentMovie: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(movieDetails).isRequired,
  currentMovie: PropTypes.shape({
    id: PropTypes.number,
    genre: PropTypes.string,
    poster: PropTypes.string,
    releaseYear: PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
  reviews: PropTypes.arrayOf(reviewDetails).isRequired,
  currentMovieId: PropTypes.string.isRequired,
  userData: userDetails,
};

const mapStateToProps = (state, _ownProps) => ({
  reviews: getReviews(state),
  movies: getMovies(state),
  currentMovie: getCurrentMovie(state),
  userData: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentMovie(movieId) {
    dispatch(fetchCurrentMovie(movieId));
    dispatch(fetchReviews(movieId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
