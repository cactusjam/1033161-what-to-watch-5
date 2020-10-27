import React from "react";
import {connect} from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import MovieScreen from "../movie-screen/movie-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import PropTypes from "prop-types";
import {promoMovieDetails, movieDetails, reviewDetails} from "../../types/types";
import {getRandomElements} from "../../utils/utils";

const App = (props) => {
  const {promoMovie, movies, userMovies, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={({history}) => (
          <MainScreen
            // promoMovie={promoMovie}
            // movies={movies}
            onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)}
          />
        )} />
        <Route exact path="/login">
          <LoginScreen/>
        </Route>

        <Route exact path="/mylist">
          <MyListScreen/>
        </Route>

        <Route path="/films/:id" exact render={({history}) => (
          <MovieScreen
            // reviews={reviews}
            // movies={movies}
            // currentMovie={getRandomElements(movies)}
            onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)}
          />
        )} />

        <Route exact path="/films/:id/review">
          <AddReviewScreen
            // movies={movies}
            // reviews={reviews}
          />
        </Route>

        <Route exact path="/player/:id">
          <PlayerScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  promoMovie: state.promoMovie,
  userMovies: state.userMovies,
  reviews: state.reviews
});

App.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired,
  promoMovie: promoMovieDetails,
  userMovies: PropTypes.arrayOf(movieDetails).isRequired,
  reviews: PropTypes.arrayOf(reviewDetails).isRequired
};

export default connect(mapStateToProps)(App);
