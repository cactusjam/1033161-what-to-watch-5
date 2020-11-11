import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import MovieScreen from "../movie-screen/movie-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import PrivateRoute from "../private-route/private-route";
import {AppRoute} from "../../constants/constants";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/" exact render={({history}) => (
            <MainScreen
              onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)}
            />
          )}
        />
        <Route
          path={AppRoute.LOGIN} exact>
          <LoginScreen/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyListScreen/>}
        />

        <Route
          path={AppRoute.CURRENT_MOVIE} exact render={({match, history}) => (
            <MovieScreen
              currentMovieId={match.params.id}
              onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)}
            />
          )}
        />

        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          render={() => (
            <AddReviewScreen
            />
          )}
        />

        <Route
          path={AppRoute.CURRENT_PLAYER} exact render={({match}) => (
            <PlayerScreen
              currentMovieId={match.params.id}
              isPlaying={false}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
};

export default App;
