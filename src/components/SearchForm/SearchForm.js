import React from 'react';
import { findButton } from '../../utils/constants';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  isShortMovieHandler, isShortMovie, isBurgerOpen, isMobile,
}) {
  return (
    <section className="search-form">
      <form
        className={(isBurgerOpen && isMobile) ? 'search-form__main search-form__main_popup' : 'search-form__main'}
        // className="search-form__main search-form__main_popup"
        method="post"
      >
        <input
          className={(isBurgerOpen && isMobile) ? 'search-form__input search-form__input_popup' : 'search-form__input'}
          // className="search-form__input search-form__input_popup"
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
