import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";

const {promo, list} = films;

ReactDOM.render(
    <App
      promoMovie={promo}
      movies = {list}
      reviews = {reviews}
      userMovies={list.slice(0, 9)}
      similarMovies={list.slice(0, 4)}
    />,
    document.querySelector(`#root`)
);
