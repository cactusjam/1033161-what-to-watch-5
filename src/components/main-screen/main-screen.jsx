import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list";
import PropTypes from 'prop-types';
import {movieDetails} from "../../types/types";
import PromoMovie from "../promo-movie/promo-movie";
import GenresList from "../genres-list/genres-list";
import {getGenresList} from "../../utils/utils";
import {changeGenreFilter} from "../../store/action";
import UserBlock from "../user-block/user-block";
import MoreMoviesButton from "../more-movies-button/more-movies-button";
import FooterScreen from "../footer-screen/footer-screen";
import {
  getMovies,
  getActiveGenre,
  getMoviesCount,
  getFilteredMovies,
  getPromoMovie,
} from "../../store/selectors";

const MainScreen = (props) => {
  const {
    defaultFilmsCount,
    filteredMovies,
    genreFilter,
    movies,
    onPlayButtonClick,
    onGenreFilterChange,
    promoMovie,
  } = props;
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(defaultFilmsCount);
  const genres = getGenresList(movies);
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

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <UserBlock />
        </header>
        <PromoMovie onPlayButtonClick={onPlayButtonClick} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} onFilterChange={onGenreFilterChange} activeFilter={genreFilter}/>

          <MoviesList movies={moviesList} onClick={onPlayButtonClick}/>
          {filteredMovies.length > moviesList.length ? <MoreMoviesButton handleMoreButtonClick={handleMoreButtonClick} /> : ``}
        </section>

        <FooterScreen/>
      </div>
    </Fragment>
  );
};

MainScreen.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired,
  promoMovie: movieDetails,
  onPlayButtonClick: PropTypes.func.isRequired,
  onGenreFilterChange: PropTypes.func.isRequired,
  genreFilter: PropTypes.string.isRequired,
  defaultFilmsCount: PropTypes.number.isRequired,
  filteredMovies: PropTypes.arrayOf(movieDetails).isRequired
};

const mapStateToProps = (state) => ({
  genreFilter: getActiveGenre(state),
  movies: getMovies(state),
  defaultFilmsCount: getMoviesCount(state),
  filteredMovies: getFilteredMovies(state),
  promoMovie: getPromoMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreFilterChange(genreFilter) {
    dispatch(changeGenreFilter(genreFilter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
