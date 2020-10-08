import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import MovieScreen from "../movie-screen/movie-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import MovieTypes from "../../types/types";

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
            movies={movies}
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
          <PlayerScreen/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoMovie: MovieTypes.promoItem,
  movies: MovieTypes.list,
  userMovies: MovieTypes.list,
  similarMovies: MovieTypes.list,
  reviews: MovieTypes.reviewList
};


export default App;
