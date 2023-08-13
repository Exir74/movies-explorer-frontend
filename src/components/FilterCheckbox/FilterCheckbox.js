import React from 'react';
import { smallTumbOff, smallTumbOn } from '../../utils/constants';

function FilterCheckbox({ isShortMovie, isShortMovieHandler }) {
  return (
    <form
      className="filter-checkbox"
      method="get"
      name="filterCheckBoxForm"
    >
      <button
        className="filter-checkbox__toggle hover"
        type="button"
        onClick={isShortMovieHandler}
      >
        <img
          className="filter-checkbox__img"
          alt="переключатель типа фильма"
          src={isShortMovie ? smallTumbOn : smallTumbOff}
        />
      </button>
      <p className="filter-checkbox__text">
        Короткометражки
      </p>
    </form>
  );
}

export default FilterCheckbox;
