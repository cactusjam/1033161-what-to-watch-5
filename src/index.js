import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Details = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: `2014`
};

ReactDOM.render(
    <App
    movieDetails = {Details}
    />,
    document.querySelector(`#root`)
);
