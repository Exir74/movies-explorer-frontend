import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Movies({
  isShortMovie,
  isShortMovieHandler,
  isBurgerOpen,
  isMobile,
  getMovies,
  handleSearchInput,
  searchValues,
  moviesErrorMessage,
  setMoviesErrorMessage,
  setSearchValues,
  isPreloaderOn,
}) {
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);
  const [isShowError, setIsShowError] = useState(true);
  const handleIsShowError = () => setIsShowError(moviesErrorMessage !== '');

  useEffect(() => {
    handleIsShowError();
  }, [moviesErrorMessage]);

  useEffect(() => {
    setSearchValues('');
    setMoviesErrorMessage('Нужно ввести ключевое слово');
  }, []);

  const filterMovies = () => JSON.parse(window.localStorage.getItem('movies')).filter((movie) => movie.nameRU.toLowerCase()
    .includes(searchValues.toLowerCase()));

  const renderItem = () => {
    if (filterMovies().length > 0) {
      setFoundMoviesArray(filterMovies);
      setMoviesErrorMessage('');
    } else {
      setMoviesErrorMessage('Ничего не найдено');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
    if (searchValues === '') {
      setMoviesErrorMessage('Нужно ввести ключевое слово');
    } else {
      renderItem();
    }
  };
  return (
    <div className="movies">
      <SearchForm
        isShortMovie={isShortMovie}
        isShortMovieHandler={isShortMovieHandler}
        isBurgerOpen={isBurgerOpen}
        isMobile={isMobile}
        handleSearchInput={handleSearchInput}
        searchValues={searchValues}
        handleSubmit={handleSubmit}
      />
      {isShowError && !isPreloaderOn && (
        <ErrorMessage
          moviesApiErrorMessage={moviesErrorMessage}
        />
      )}
      {!isShowError && !isPreloaderOn && (<MoviesCardList moviesArray={foundMoviesArray} />)}
      {isPreloaderOn && (<Preloader />)}
    </div>
  );
}

export default Movies;
