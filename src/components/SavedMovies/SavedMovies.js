import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { filterForMovies, shortMovieFilter } from '../../utils/filter';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function SavedMovies({
  isBurgerOpen,
  isTablet,
  handleSearchInput,
  searchValues,
  moviesQuantity,
  savedMovie,
  setPreloaderOn,
  isPreloaderOn,
  setSearchValues,
  isMobile,
  removeLikeHandler,
  getLikesHandler,

}) {
  const [isShowButton, setIsShowButton] = useState(false);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);
  const [shortMoviesArray, setShortMoviesArray] = useState([]);

  const shortMovie = () => {
    setPreloaderOn(false);
    setShowErrorMessage('');
    setShortMoviesArray(shortMovieFilter(foundMoviesArray));
  };
  useEffect(() => {
    shortMovie();
  }, [foundMoviesArray]);

  const filterMovies = (movies, searchString) => {
    setPreloaderOn(false);
    setShowErrorMessage('');
    setFoundMoviesArray(filterForMovies(movies, searchString));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreloaderOn(true);
    if (searchValues === '') {
      filterMovies(savedMovie, searchValues);
      setPreloaderOn(false);
    } else {
      setShowErrorMessage(null);
      filterMovies(savedMovie, searchValues);
      setPreloaderOn(false);
    }
  };

  const isShortMovieHandler = () => {
    setIsShortMovie(!isShortMovie);
    shortMovie();
  };

  useEffect(() => {
    setPreloaderOn(true);
    filterMovies(savedMovie, searchValues);
  }, [savedMovie]);

  const errorHandler = () => {
    if (savedMovie.length === 0) {
      setShowErrorMessage('Нет сохраненых фильмов');
    } else if (foundMoviesArray.length === 0) {
      setShowErrorMessage('Ничего не найднено1');
    } else if (shortMoviesArray.length === 0 && isShortMovie) {
      setShowErrorMessage('Ничего не найдено2');
    }
  };
  useEffect(() => {
    errorHandler();
  }, [savedMovie, foundMoviesArray, shortMoviesArray, showErrorMessage]);

  useEffect(() => {
    setSearchValues('');
    getLikesHandler();
    filterMovies(savedMovie, '');
    setShowErrorMessage(null);
  }, []);
  return (
    <div className="saved-movies">
      <SearchForm
        isShortMovie={isShortMovie}
        isShortMovieHandler={isShortMovieHandler}
        isBurgerOpen={isBurgerOpen}
        isTablet={isTablet}
        handleSearchInput={handleSearchInput}
        searchValues={searchValues}
        handleSubmit={handleSubmit}
      />
      {(showErrorMessage) && !isPreloaderOn && (
        <ErrorMessage
          moviesApiErrorMessage={showErrorMessage}
        />
      )}
      {!showErrorMessage && !isPreloaderOn && (
        <MoviesCardList
          moviesQuantity={moviesQuantity}
          isShowButton={isShowButton}
          setIsShowButton={setIsShowButton}
          isShortMovie={isShortMovie}
          moviesArray={isShortMovie ? shortMoviesArray : foundMoviesArray}
          savedMovie={savedMovie}
          isMobile={isMobile}
          removeLikeHandler={removeLikeHandler}
        />
      )}
      {isPreloaderOn && (<Preloader />)}
    </div>
  );
}

export default SavedMovies;
