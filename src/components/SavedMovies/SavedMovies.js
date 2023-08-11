import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ isShortMovie, isShortMovieHandler, setCurrnetUrl }) {
  setCurrnetUrl(window.location.href);

  return (
    <div className="SavedMovies">
      <SearchForm
        isShortMovie={isShortMovie}
        isShortMovieHandler={isShortMovieHandler}
      />
      <MoviesCardList />
      <Preloader />
    </div>
  );
}

export default SavedMovies;
