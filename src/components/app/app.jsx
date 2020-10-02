import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import MovieScreen from "../movie-screen/movie-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";

const App = (props) => {
  const {movieDetails} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen movieDetails = {movieDetails} />
        </Route>

        <Route exact path="/login">
          <LoginScreen/>
        </Route>

        <Route exact path="/mylist">
          <MyListScreen/>
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
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired
  }).isRequired
};


export default App;
