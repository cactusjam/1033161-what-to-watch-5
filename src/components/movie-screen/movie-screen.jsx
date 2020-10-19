import React from "react";
import MoviesList from "../movies-list/movies-list";
import {movieDetails, reviewDetails} from "../../types/types";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Header from "../header/header";
import Tabs from "../tabs/tabs.jsx";
import Tab from "../tabs/tab.jsx";
import TabsName from "../../constants/constants.js";

const MovieScreen = (props) => {
  const {similarMovies, onPlayButtonClick, movies, reviews} = props;
  const {description, director, id, genre, poster, rating, releaseYear, starring, title, duration} = movies;
  const {score, level, countOfVotes} = rating;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={poster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title + `poster`}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayButtonClick(movies.id)}>
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

            <Tabs>
              <Tab title={TabsName.OVERVIEW}>
                <div className="movie-rating">
                  <div className="movie-rating__score">{score}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{level}</span>
                    <span className="movie-rating__count">{countOfVotes}</span>
                  </p>
                </div>

                <div className="movie-card__text">
                  <p>{description}</p>

                  <p className="movie-card__director"><strong>Director: {director}</strong></p>

                  <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
                </div>
              </Tab>
              <Tab title={TabsName.DETAILS}>
                <div className="movie-card__text movie-card__row">
                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Director</strong>
                      <span className="movie-card__details-value">{director}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Starring</strong>
                      <span className="movie-card__details-value"> {starring}</span>
                    </p>
                  </div>

                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Run Time</strong>
                      <span className="movie-card__details-value">{duration}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Genre</strong>
                      <span className="movie-card__details-value">{genre}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Released</strong>
                      <span className="movie-card__details-value">{releaseYear}</span>
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab title={TabsName.REVIEWS}>
                <div className="movie-card__reviews movie-card__row">
                  <div className="movie-card__reviews-col">
                    {reviews.map((review) => <div key={review.author} className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">{review.text}</p>

                        <footer className="review__details">
                          <cite className="review__author">{review.author}</cite>
                          <time className="review__date" dateTime="2016-12-24">{review.date}</time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">{review.rating}</div>
                    </div>)}
                  </div>
                </div>
              </Tab>
            </Tabs>
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
    </React.Fragment>
  );
};

MovieScreen.propTypes = {
  similarMovies: PropTypes.arrayOf(movieDetails).isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  movies: movieDetails,
  reviews: PropTypes.arrayOf(reviewDetails).isRequired
};

export default MovieScreen;

