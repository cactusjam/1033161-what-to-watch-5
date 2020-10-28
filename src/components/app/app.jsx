import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import MovieScreen from "../movie-screen/movie-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={({history}) => (
          <MainScreen
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
            onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)}
          />
        )} />

        <Route exact path="/films/:id/review">
          <AddReviewScreen
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
};

export default App;
