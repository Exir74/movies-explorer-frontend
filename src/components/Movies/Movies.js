import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getAllMovies } from '../../utils/MoviesApi';
import { logo } from '../../utils/constants';

function Movies({
  // isShortMovie,
  // isShortMovieHandler,
  isBurgerOpen,
  isTablet,
  handleSearchInput,
  searchValues,
  // moviesErrorMessage,
  setMoviesErrorMessage,
  setSearchValues,
  isPreloaderOn,
  moviesQuantity,
  addMoviesQuantity,
  setPreloaderOn,
}) {
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);
  const [shortMoviesArray, setShortMoviesArray] = useState([]);
  // const [isShowError, setIsShowError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const [isShowButton, setIsShowButton] = useState(false);
  const [movieArr, setMoviesArr] = useState(null);
  const [isShortMovie, setIsShortMovie] = useState(false);

  const filterMovies = () => {
    const arr = movieArr.filter((movie) => movie.nameRU
      .toLowerCase()
      .includes(searchValues.toLowerCase()));
    setFoundMoviesArray(arr);
    setShowErrorMessage(null);
  };
  const shortMovie = () => {
    const arr = foundMoviesArray.filter((movie) => movie.duration <= 52);
    setShortMoviesArray(arr);
    setShowErrorMessage(null);
  };
  const isShortMovieHandler = () => {
    setIsShortMovie(!isShortMovie);
    if (foundMoviesArray !== []) {
      shortMovie();
    }
  };
  useEffect(() => {
    shortMovie();
  }, [foundMoviesArray]);

  const renderItem = () => {
    filterMovies();
    // handleButtonMore();
    // window.localStorage.setItem('movies', JSON.stringify(filterMovies()));
    // window.localStorage.setItem('inputMoviesValues', searchValues);
  };
  const err = () => {
    if (searchValues === '' && foundMoviesArray.length === 0) {
      setShowErrorMessage('Нужно ввести ключевое слово');
    } else if (foundMoviesArray.length === 0 && !isShortMovie) {
      setShowErrorMessage('Ничего не найдено');
    } else if (shortMoviesArray.length === 0 && isShortMovie) {
      setShowErrorMessage('Ничего не найдено');
    }
  };

  const getMovies = () => {
    getAllMovies()
      .then((movie) => {
        setMoviesArr(movie);
        // window.localStorage.setItem('movies', JSON.stringify(movie));
      })
      .catch(() => {
        setPreloaderOn(false);
        setShowErrorMessage('Во время запроса произошла ошибка. Возможно, проблема '
          + 'с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        // setIsShowError(true);
      })
      .finally(() => {
        setPreloaderOn(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreloaderOn(true);
    if (searchValues === '') {
      setPreloaderOn(false);
    } else {
      getMovies();
    }
  };

  useEffect(() => {
    err();
  }, [isShortMovie]);
  useEffect(() => {
    if (movieArr) {
      renderItem();
    }
  }, [movieArr]);

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
      {showErrorMessage && !isPreloaderOn && (
        <ErrorMessage
          moviesApiErrorMessage={showErrorMessage}
        />
      )}
      {!showErrorMessage && !isPreloaderOn && (
        <MoviesCardList
          moviesArray={isShortMovie ? shortMoviesArray : foundMoviesArray}
          moviesQuantity={moviesQuantity}
          isShowButton={isShowButton}
          addMoviesQuantity={addMoviesQuantity}
          setIsShowButton={setIsShowButton}
          isShortMovie={isShortMovie}
        />
      )}
      {isPreloaderOn && (<Preloader />)}
    </div>
  );
}

export default Movies;
