import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  isMyShortMovieHandler, isMyShortMovie, isBurgerOpen, isMobile,
}) {
  return (
    <div className="SavedMovies">
      <SearchForm
        isShortMovie={isMyShortMovie}
        isShortMovieHandler={isMyShortMovieHandler}
        isBurgerOpen={isBurgerOpen}
        isMobile={isMobile}
      />
      <MoviesCardList />
      <Preloader />
    </div>
  );
}

export default SavedMovies;
