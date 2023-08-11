import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import Preloader from '../Preloader/Preloader';

function Movies({ isShortMovie, isShortMovieHandler }) {
  return (
    <div className="movies">
      <SearchForm isShortMovie={isShortMovie} isShortMovieHandler={isShortMovieHandler} />
      <MoviesCardList />
      <Preloader />
    </div>
  );
}

export default Movies;
