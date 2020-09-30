import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";


const App = (props) => {
  const {movieTitle, movieGenre, releaseYear} = props;

  return (
    <Main
      title={movieTitle}
      genre={movieGenre}
      year={releaseYear}
    />
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
};


export default App;
