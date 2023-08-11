import React from 'react';
import { findButton } from '../../utils/constants';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ isShortMovieHandler, isShortMovie }) {
  return (
    <section className="search-form">
      <form
        className="search-form__main"
        // или POST?
        method="get"
      >
        <input
          className="search-form__input"
          name="input"
          placeholder="Фильм"
          type="text"
          required
        />
        <button
          className="search-form__button hover"
          type="submit"
        >
          <img
            className="search-form__button-img"
            src={findButton}
            alt="Найти"
          />
        </button>
      </form>
      <FilterCheckbox
        isShortMovie={isShortMovie}
        isShortMovieHandler={isShortMovieHandler}
      />
      <hr className="search-form__line" />
    </section>
  );
}

export default SearchForm;
