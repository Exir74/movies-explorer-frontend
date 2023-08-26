import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  isMyShortMovieHandler,
  isMyShortMovie,
  isBurgerOpen,
  isMobile,
  handleSearchInput,
  searchValues,
  moviesQuantity,
  savedMovie,

}) {
  const [isShowButton, setIsShowButton] = useState(false);
  const [isShortMovie, setIsShortMovie] = useState(false);

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
      <MoviesCardList
        moviesQuantity={moviesQuantity}
        isShowButton={isShowButton}
        setIsShowButton={setIsShowButton}
        isShortMovie={isShortMovie}
        moviesArray={savedMovie}
        savedMovie={savedMovie}
      />
      <Preloader />
    </div>
  );
}

export default SavedMovies;
