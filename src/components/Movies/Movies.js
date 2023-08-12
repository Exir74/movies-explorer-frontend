import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Preloader from '../Preloader/Preloader';

function Movies({
  isShortMovie, isShortMovieHandler, setCurrentUrl, currentWidth,
}) {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [currentWidth]);
  return (
    <div className="movies">
      <SearchForm
        isShortMovie={isShortMovie}
        isShortMovieHandler={isShortMovieHandler}
      />
      <MoviesCardList
        currentWidth={currentWidth}
      />
      <Preloader />
    </div>
  );
}

export default Movies;
