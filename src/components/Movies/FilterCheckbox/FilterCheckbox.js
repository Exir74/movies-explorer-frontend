import React from 'react';
import { smallTumbOn } from '../../../utils/constants';

function FilterCheckbox() {
  return (
    <form
      className="filter-checkbox"
      method="get"
    >
      <button
        className="filter-checkbox__toggle hover"
        type="button"
      >
        <img
          className="filter-checkbox__img"
          alt="переключатель типа фильма"
          src={smallTumbOn}
        />
      </button>
      <p className="filter-checkbox__text">
        Короткометражки
      </p>
    </form>
  );
}

export default FilterCheckbox;
