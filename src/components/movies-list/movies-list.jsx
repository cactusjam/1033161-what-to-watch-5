import React, {PureComponent} from "react";
import MovieCard from '../movie-card/movie-card.jsx';
import {movieDetails} from "../../types/types";
import PropTypes from "prop-types";

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this.handleActiveCard = this.handleActiveCard.bind(this);
    this.handleDeactivateCard = this.handleDeactivateCard.bind(this);
  }

  handleActiveCard(movie) {
    this.setState({activeCard: movie});
  }

  handleDeactivateCard() {
    this.setState({activeCard: null});
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) =>
          <MovieCard key={movie.id} movie={movie}
            onCardOver={this.handleActiveCard}
            onCardLeave={this.handleDeactivateCard}/>)}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired
};
