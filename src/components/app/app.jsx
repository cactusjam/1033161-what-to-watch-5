import React from "react";
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
  const {promoMovie, movies, userMovies, similarMovies, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={({history}) => (
          <MainScreen
            promoMovie={promoMovie}
            movies={movies}
            onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)}
          />
        )} />
        <Route exact path="/login">
          <LoginScreen/>
        </Route>

        <Route exact path="/mylist">
          <MyListScreen userMovies={userMovies}/>
        </Route>

        <Route path="/films/:id" exact render={({history}) => (
          <MovieScreen
            similarMovies={similarMovies}
            reviews={reviews}
            movies={getRandomElements(movies)}
            onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)}
          />
        )} />

        <Route exact path="/films/:id/review">
          <AddReviewScreen
            movies={movies}
            reviews={reviews}
          />
        </Route>

        <Route exact path="/player/:id">
          <PlayerScreen movies={getRandomElements(movies)}/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired,
  promoMovie: promoMovieDetails,
  userMovies: PropTypes.arrayOf(movieDetails).isRequired,
  similarMovies: PropTypes.arrayOf(movieDetails).isRequired,
  reviews: PropTypes.arrayOf(reviewDetails).isRequired
};


export default App;
