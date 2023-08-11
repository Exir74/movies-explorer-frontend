import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ isMyShortMovieHandler, isMyShortMovie, setCurrentUrl }) {
  setCurrentUrl(window.location.href);

  return (
    <div className="SavedMovies">
      <SearchForm
        isShortMovie={isMyShortMovie}
        isShortMovieHandler={isMyShortMovieHandler}
      />
      <MoviesCardList />
      <Preloader />
    </div>
  );
}

export default SavedMovies;
