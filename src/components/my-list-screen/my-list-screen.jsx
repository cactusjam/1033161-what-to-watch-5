import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import MoviesList from "../movies-list/movies-list";
import PropTypes from "prop-types";
import {fetchFavorites} from "../../store/api-actions";
import {getFavorite, getUser} from "../../store/selectors";
import {movieDetails} from "../../types/types";
import UserBlock from "../user-block/user-block";
import LogoHeader from "../logo-header/logo-header";

class MyListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMoviesLoad = this._handleMoviesLoad.bind(this);
  }

  _handleMoviesLoad() {
    const {loadFavoriteList} = this.props;
    loadFavoriteList();
  }

  componentDidMount() {
    this._handleMoviesLoad();
  }

  render() {
    const {moviesList} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <LogoHeader/>
          <h1 className="page-title user-page__title">My list</h1>
          <UserBlock/>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MoviesList movies={moviesList} />
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
    );
  }
}

MyListScreen.propTypes = {
  moviesList: PropTypes.arrayOf(movieDetails).isRequired,
  loadFavoriteList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesList: getFavorite(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteList() {
    dispatch(fetchFavorites());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListScreen);
