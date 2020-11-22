import React from "react";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import MovieScreen from "../movie-screen/movie-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import PrivateRoute from "../private-route/private-route";
import {AppRoute} from "../../constants/constants";
import browserHistory from "../../browser-history";
import withLogin from "../../hocs/with-login/with-login";
import withValidation from "../../hocs/with-validation/with-validation";
const SignInWrapped = withLogin(LoginScreen);
const AddReviewWrapper = withValidation(AddReviewScreen);

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          path="/" exact>
          <MainScreen
          />
        </Route>
        <Route
          path={AppRoute.LOGIN} exact>
          <SignInWrapped/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyListScreen/>}
        />

        <Route
          path={AppRoute.CURRENT_MOVIE} exact render={({match}) => (
            <MovieScreen
              currentMovieId={match.params.id}
            />
          )}
        />

        <PrivateRoute
          exact
          path={AppRoute.CURRENT_REVIEW}
          render={({match}) => (
            <AddReviewWrapper
              currentMovieId={match.params.id}
            />
          )}
        />

        <Route
          path={AppRoute.CURRENT_PLAYER} exact render={({match}) => (
            <PlayerScreen
              currentMovieId={match.params.id}
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
