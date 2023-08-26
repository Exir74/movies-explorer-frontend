import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import getAllMovies from '../../utils/MoviesApi';

function Movies({
  isBurgerOpen,
  isTablet,
  handleSearchInput,
  searchValues,
  setSearchValues,
  isPreloaderOn,
  moviesQuantity,
  setPreloaderOn,
  movieArr,
  setMoviesArr,
  onClickLike,

  savedMovie,
}) {
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);
  const [shortMoviesArray, setShortMoviesArray] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const [isShowButton, setIsShowButton] = useState(false);
  // const [movieArr, setMoviesArr] = useState(null);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [state, setState] = useState([]);
  const shortMovie = () => {
    const arr = foundMoviesArray.filter((movie) => movie.duration <= 40);
    setShortMoviesArray(arr);
    // if (arr.length === 0 && isShortMovie) {
    //   setShowErrorMessage('Ничего не найдено1');
    // } else if (arr.length === 0 && !isShortMovie) {
    //   setShowErrorMessage(null);
    // }
  };
  useEffect(() => {
    shortMovie();
  }, [foundMoviesArray]);

  const filterMovies = (movies, searchString) => {
    const arrRU = movies.filter((movie) => (movie.nameRU)
      .toLowerCase()
      .includes(searchString.toLowerCase()));
    const arrEN = movies.filter((movie) => (movie.nameEN)
      .toLowerCase()
      .includes(searchString.toLowerCase()));
    const concatArr = arrRU.concat(arrEN);
    const arr = [...new Set(concatArr)];
    setFoundMoviesArray(arr);
    // if (arr.length !== 0) {
    //   setShowErrorMessage(null);
    // }
  };
  const getMovies = () => {
    getAllMovies()
      .then((movie) => {
        if (searchValues === '') {
          setShowErrorMessage('Введите запрос');
        }
        setMoviesArr(movie);
        window.localStorage.setItem('movies', JSON.stringify(movie));
        window.localStorage.setItem('inputMoviesValues', JSON.stringify(searchValues));
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
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('movies'))
      && JSON.parse(localStorage.getItem('inputMoviesValues'))) {
      filterMovies(
        JSON.parse(localStorage.getItem('movies')),
        JSON.parse(localStorage.getItem('inputMoviesValues')),
      );
      setSearchValues(JSON.parse(localStorage.getItem('inputMoviesValues')));
      setMoviesArr(JSON.parse(localStorage.getItem('movies')));
      setIsShortMovie(JSON.parse(localStorage.getItem('isShortMovie')));
    } else {
      getMovies();
    }
  }, []);
  const isShortMovieHandler = () => {
    setIsShortMovie(!isShortMovie);
    shortMovie();
    window.localStorage.setItem('isShortMovie', JSON.stringify(!isShortMovie));
  };

  useEffect(() => {
    if (foundMoviesArray !== []) {
      shortMovie();
    }
  }, [isShortMovie]);

  useEffect(() => {
    if (foundMoviesArray.length === 0) {
      setShowErrorMessage('Ничего не найдено...');
    } else if (shortMoviesArray.length === 0 && isShortMovie) {
      setShowErrorMessage('Ничего не найдено...');
    } else {
      setShowErrorMessage(null);
    }
  }, [foundMoviesArray, isShortMovie, shortMoviesArray]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPreloaderOn(true);
    if (searchValues === '') {
      setShowErrorMessage('Введите запрос');
      setMoviesArr(null);
      setFoundMoviesArray([]);
      setPreloaderOn(false);
    } else {
      filterMovies(movieArr, searchValues);
      setPreloaderOn(false);
      window.localStorage.setItem('inputMoviesValues', JSON.stringify(searchValues));
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
      {(showErrorMessage) && !isPreloaderOn && (
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
          onClickLike={onClickLike}
          savedMovie={savedMovie}
        />
      )}
      {isPreloaderOn && (<Preloader />)}
    </div>
  );
}

export default Movies;
