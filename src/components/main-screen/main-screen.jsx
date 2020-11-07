import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list";
import PropTypes from 'prop-types';
import {promoMovieDetails} from "../../types/types";
import {movieDetails} from "../../types/types";
import Header from "../header/header";
import GenresList from "../genres-list/genres-list";
import {getGenresList, getFilmsByGenre} from "../../utils/utils";
import {changeGenreFilter} from "../../store/action";
import MoreMoviesButton from "../more-movies-button/more-movies-button";
import {getMovies, getActiveGenre, getPromoMovie, getMoviesCount} from "../../store/selectors";

const MainScreen = (props) => {
  const {movies, promoMovie, onPlayButtonClick, onGenreFilterChange, genreFilter, defaultFilmsCount} = props;
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(defaultFilmsCount);
  const genres = getGenresList(movies);
  const filteredMovies = getFilmsByGenre(movies, genreFilter);
  const moviesList = filteredMovies.slice(0, visibleFilmsCount);

  const handleMoreButtonClick = () => {
    setVisibleFilmsCount(visibleFilmsCount + defaultFilmsCount);
  };

  return (
    <Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoMovie.cover} alt={promoMovie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.poster} alt={promoMovie.title + ` poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoMovie.genre}</span>
                <span className="movie-card__year">{promoMovie.releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayButtonClick(promoMovie.id)}>
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

          <MoviesList movies={moviesList} onClick={onPlayButtonClick}/>
          {filteredMovies.length > moviesList.length ? <MoreMoviesButton handleMoreButtonClick={handleMoreButtonClick} /> : ``}
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
  genreFilter: PropTypes.string.isRequired,
  defaultFilmsCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  genreFilter: getActiveGenre(state),
  promoMovie: getPromoMovie(state),
  movies: getMovies(state),
  defaultFilmsCount: getMoviesCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreFilterChange(genreFilter) {
    dispatch(changeGenreFilter(genreFilter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
