import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Preloader from '../Preloader/Preloader';

function Movies({ isShortMovie, isShortMovieHandler, setCurrentUrl }) {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  return (
    <div className="movies">
      <SearchForm
        isShortMovie={isShortMovie}
        isShortMovieHandler={isShortMovieHandler}
      />
      <MoviesCardList />
      <Preloader />
    </div>
  );
}

export default Movies;
