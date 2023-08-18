import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  isMyShortMovieHandler, isMyShortMovie, isBurgerOpen, isMobile, handleSearchInput, searchValues,
}) {
  return (
    <div className="saved-movies">
      <SearchForm
        isShortMovie={isMyShortMovie}
        isShortMovieHandler={isMyShortMovieHandler}
        isBurgerOpen={isBurgerOpen}
        isMobile={isMobile}
        handleSearchInput={handleSearchInput}
        searchValues={searchValues}
      />
      <MoviesCardList />
      <Preloader />
    </div>
  );
}

export default SavedMovies;
