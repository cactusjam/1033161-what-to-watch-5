import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list";
import PropTypes from 'prop-types';
import {movieDetails} from "../../types/types";
import PromoMovie from "../promo-movie/promo-movie";
import GenresList from "../genres-list/genres-list";
import {getGenresList, getFilmsByGenre} from "../../utils/utils";
import {changeGenreFilter} from "../../store/action";
import MoreMoviesButton from "../more-movies-button/more-movies-button";
import {getMovies, getActiveGenre, getMoviesCount} from "../../store/selectors";

const MainScreen = (props) => {
  const {movies, onPlayButtonClick, onGenreFilterChange, genreFilter, defaultFilmsCount} = props;
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(defaultFilmsCount);
  const genres = getGenresList(movies);
  const filteredMovies = getFilmsByGenre(movies, genreFilter);
  const moviesList = filteredMovies.slice(0, visibleFilmsCount);

  const handleMoreButtonClick = () => {
    setVisibleFilmsCount(visibleFilmsCount + defaultFilmsCount);
  };

  return (
    <Fragment>
      <PromoMovie onPlayButtonClick={onPlayButtonClick} />

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
  onPlayButtonClick: PropTypes.func.isRequired,
  onGenreFilterChange: PropTypes.func.isRequired,
  genreFilter: PropTypes.string.isRequired,
  defaultFilmsCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  genreFilter: getActiveGenre(state),
  movies: getMovies(state),
  defaultFilmsCount: getMoviesCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreFilterChange(genreFilter) {
    dispatch(changeGenreFilter(genreFilter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
