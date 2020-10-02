import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";

const App = (props) => {
  const {movieDetails} = props;

  return (
    <Main
      movieDetails = {movieDetails}
    />
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
