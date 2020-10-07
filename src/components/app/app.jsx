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
  const {promoMovie, movies, userMovies} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            promoMovie={promoMovie}
            movies={movies}
          />
        </Route>

        <Route exact path="/login">
          <LoginScreen/>
        </Route>

        <Route exact path="/mylist">
          <MyListScreen userMovies={userMovies}/>
        </Route>

        <Route exact path="/films/:id">
          <MovieScreen/>
        </Route>

        <Route exact path="/films/:id/review">
          <AddReviewScreen/>
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
};


export default App;
