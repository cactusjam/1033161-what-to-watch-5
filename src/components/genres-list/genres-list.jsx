import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {onFilterChange, activeFilter, genres} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <li
          key={`genre-${genre}`}
          onClick={(evt) => {
            evt.preventDefault();
            onFilterChange(genre);
          }}
          className={`catalog__genres-item ${
            activeFilter === genre ? `catalog__genres-item--active` : ``
          }`}
        >
          <a className="catalog__genres-link">{genre}</a>
        </li>)}
    </ul>);
};

GenresList.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GenresList;
