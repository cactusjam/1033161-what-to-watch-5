import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const details = {
  movieTitle: `The Grand Budapest Hotel`,
  movieGenre: `Drama`,
  releaseYear: `2014`,
};

ReactDOM.render(
    <App
      movieTitle = {
        details.movieTitle
      }
      movieGenre = {
        details.movieGenre
      }
      releaseYear = {
        details.releaseYear
      }
    />,
    document.querySelector(`#root`)
);
