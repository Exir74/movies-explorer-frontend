import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import getAllMovies from '../../utils/MoviesApi';
import { filterForMovies, shortMovieFilter } from '../../utils/filter';

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
  const [isShortMovie, setIsShortMovie] = useState(false);

  const shortMovie = () => {
    setShortMoviesArray(shortMovieFilter(foundMoviesArray));
  };
  useEffect(() => {
    shortMovie();
  }, [foundMoviesArray]);

  const filterMovies = (movies, searchString) => {
    setFoundMoviesArray(filterForMovies(movies, searchString));
  };
  // useEffect(()=>{
  //   set
  // }),

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPreloaderOn(true);
    if (searchValues === '') {
      setPreloaderOn(false);
      setShowErrorMessage('Введите запрос');
      // setMoviesArr(null);
      // setFoundMoviesArray([]);
      // } else if (foundMoviesArray.length === 0) {
      //   console.log('123');
      //   getMovies();
      //   filterMovies(movieArr, searchValues);
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
