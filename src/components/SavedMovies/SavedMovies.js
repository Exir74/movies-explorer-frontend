import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  isMyShortMovieHandler, isMyShortMovie, setCurrentUrl, currentWidth,
}) {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="SavedMovies">
      <SearchForm
        isShortMovie={isMyShortMovie}
        isShortMovieHandler={isMyShortMovieHandler}
      />
      <MoviesCardList
        currentWidth={currentWidth}
      />
      <Preloader />
    </div>
  );
}

export default SavedMovies;
