import React, {Fragment} from "react";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list";
import PropTypes from 'prop-types';
import {promoMovieDetails} from "../../types/types";
import {movieDetails} from "../../types/types";
import Header from "../header/header";
import GenresList from "../genres-list/genres-list";
import {getGenresList, getFilmsByGenre} from "../../utils/utils";
import {ActionCreator} from "../../store/action";

const MainScreen = (props) => {
  const {movies, promoMovie, onPlayButtonClick, onGenreFilterChange, genreFilter} = props;
  const {cover, id, genre, poster, releaseYear, title} = promoMovie;
  const genres = getGenresList(movies);
  const filteredMovies = getFilmsByGenre(movies, genreFilter);

  return (
    <Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={cover} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={title + ` poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayButtonClick(id)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} onFilterChange={onGenreFilterChange} activeFilter={genreFilter}/>

          <MoviesList movies={filteredMovies} onClick={onPlayButtonClick}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

MainScreen.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired,
  promoMovie: promoMovieDetails,
  onPlayButtonClick: PropTypes.func.isRequired,
  onGenreFilterChange: PropTypes.func.isRequired,
  genreFilter: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  genreFilter: state.activeFilterGenre,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGenreFilterChange(genreFilter) {
    dispatch(ActionCreator.changeGenreFilter(genreFilter));
    dispatch(ActionCreator.getFilmsByGenre(ownProps.movies, genreFilter));
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
