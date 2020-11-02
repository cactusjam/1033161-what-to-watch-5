import React, {Fragment} from "react";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list";
import {movieDetails, reviewDetails} from "../../types/types";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Header from "../header/header";
import Tabs from "../tabs/tabs";
import {getSimilarMovies, findItemById} from "../../utils/utils";
import withActiveMovie from '../../hocs/with-active-movie/with-active-movie';
const TabWrapped = withActiveMovie(Tabs);

const MovieScreen = (props) => {
  const {onPlayButtonClick, movies, reviews, currentMovie} = props;
  const {id, genre, poster, releaseYear, title} = currentMovie;

  const similarMovies = getSimilarMovies(movies, genre, id).slice(0, 4);

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={poster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

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
                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
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
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
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
  movies: PropTypes.arrayOf(movieDetails).isRequired,
  currentMovie: movieDetails,
  reviews: PropTypes.arrayOf(reviewDetails).isRequired,
  currentMovieId: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  reviews: state.reviews,
  movies: state.movies,
  currentMovie: findItemById(ownProps.currentMovieId, state.movies),
});

export default connect(mapStateToProps)(MovieScreen);
