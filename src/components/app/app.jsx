import React from "react";
import Main from "../main/main";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieTitle, movieGenre, releaseYear} = props;

  return (
    <Main
    title = {movieTitle}
    genre = {movieGenre}
    year = {releaseYear}
    />
  );
};


export default App;
