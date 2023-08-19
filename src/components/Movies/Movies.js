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
  isTablet,
  getMovies,
  handleSearchInput,
  searchValues,
  moviesErrorMessage,
  setMoviesErrorMessage,
  setSearchValues,
  isPreloaderOn,
  moviesQuantity,
  addMoviesQuantity,
}) {
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);
  const [isShowError, setIsShowError] = useState(true);
  const [isShowButton, setIsShowButton] = useState(false);

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

  const handleButtonMore = () => {
    if (filterMovies().length > moviesQuantity) {
      setIsShowButton(true);
    } else setIsShowButton(false);
  };

  const renderItem = () => {
    // console.log(filterMovies());
    handleButtonMore();
    // console.log(isShowButton);
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
    console.log(window.localStorage.getItem('movies'));
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
        isTablet={isTablet}
        handleSearchInput={handleSearchInput}
        searchValues={searchValues}
        handleSubmit={handleSubmit}
      />
      {isShowError && !isPreloaderOn && (
        <ErrorMessage
          moviesApiErrorMessage={moviesErrorMessage}
        />
      )}
      {!isShowError && !isPreloaderOn && (
        <MoviesCardList
          moviesArray={foundMoviesArray}
          moviesQuantity={moviesQuantity}
          isShowButton={isShowButton}
          addMoviesQuantity={addMoviesQuantity}

        />
      )}
      {isPreloaderOn && (<Preloader />)}
    </div>
  );
}

export default Movies;
