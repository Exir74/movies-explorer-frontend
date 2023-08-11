import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies() {
  return (
    <div className="SavedMovies">
      <SearchForm />
      <MoviesCardList />
      <Preloader />
    </div>
  );
}

export default SavedMovies;
