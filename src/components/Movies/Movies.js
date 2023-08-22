import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getAllMovies } from '../../utils/MoviesApi';

function Movies({
  isBurgerOpen,
  isTablet,
  handleSearchInput,
  searchValues,
  setSearchValues,
  isPreloaderOn,
  moviesQuantity,
  setPreloaderOn,
  isSavedMovie,
  isSavedMovieHandler,
}) {
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);
  const [shortMoviesArray, setShortMoviesArray] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const [isShowButton, setIsShowButton] = useState(false);
  const [movieArr, setMoviesArr] = useState(null);
  const [isShortMovie, setIsShortMovie] = useState(false);

  useEffect(() => {
    setSearchValues('');
    if (localStorage.getItem('inputMoviesValues')) {
      setSearchValues(localStorage.getItem('inputMoviesValues'));
    }
    if (JSON.parse(localStorage.getItem('isShortMovie')) !== null) {
      setIsShortMovie(JSON.parse(localStorage.getItem('isShortMovie')));
    }
    if (JSON.parse(localStorage.getItem('movies')) !== []) {
      setMoviesArr(JSON.parse(localStorage.getItem('movies')));
    }
  }, []);

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
    localStorage.setItem('isShortMovie', JSON.stringify(!isShortMovie));
    if (foundMoviesArray !== []) {
      shortMovie();
    }
  };

  useEffect(() => {
    shortMovie();
  }, [foundMoviesArray]);

  const renderItem = () => {
    filterMovies();
    window.localStorage.setItem('inputMoviesValues', searchValues);
  };

  const handleError = () => {
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
        window.localStorage.setItem('movies', JSON.stringify(movie));
      })
      .catch(() => {
        setPreloaderOn(false);
        setShowErrorMessage('Во время запроса произошла ошибка. Возможно, проблема '
          + 'с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => {
        setPreloaderOn(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreloaderOn(true);
    if (searchValues === '') {
      setMoviesArr(null);
      setFoundMoviesArray([]);
      console.log(movieArr);
      console.log(foundMoviesArray);
      setPreloaderOn(false);
    } else {
      getMovies();
    }
  };

  useEffect(() => {
    handleError();
  }, [shortMoviesArray]);

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
          setIsShowButton={setIsShowButton}
          isShortMovie={isShortMovie}
          isSavedMovie={isSavedMovie}
          isSavedMovieHandler={isSavedMovieHandler}
        />
      )}
      {isPreloaderOn && (<Preloader />)}
    </div>
  );
}

export default Movies;
