import React, {Fragment} from 'react';
import {movieDetails} from "../../types/types";
import {connect} from "react-redux";
import {getPromoMovie} from "../../store/selectors";
import FavoriteButton from "../favorite-button/favorite-button";
import ButtonPlay from "../button-play/button-play";

const PromoMovie = (props) => {
  const {promoMovie} = props;
  return (
    <Fragment>
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

              <ButtonPlay id = {promoMovie.id}/>

              <FavoriteButton id={promoMovie.id} isFavorite={promoMovie.isFavorite}/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PromoMovie.propTypes = {
  promoMovie: movieDetails
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
});

export default connect(mapStateToProps)(PromoMovie);
