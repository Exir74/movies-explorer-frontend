import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getAllMovies } from '../../utils/MoviesApi';

function Movies({
  isShortMovie,
  isShortMovieHandler,
  isBurgerOpen,
  isTablet,
  handleSearchInput,
  searchValues,
  moviesErrorMessage,
  setMoviesErrorMessage,
  setSearchValues,
  isPreloaderOn,
  moviesQuantity,
  addMoviesQuantity,
  setPreloaderOn,
}) {
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);
  const [isShowError, setIsShowError] = useState(true);
  const [isShowButton, setIsShowButton] = useState(false);
  const [movieArr, setMoviesArr] = useState(null);

  const handleIsShowError = () => setIsShowError(moviesErrorMessage !== '');

  useEffect(() => {
    handleIsShowError();
  }, [moviesErrorMessage]);

  useEffect(() => {
    setSearchValues('');
    setMoviesErrorMessage('Нужно ввести ключевое слово');
  }, []);

  const filterMovies = () => movieArr.filter((movie) => movie.nameRU.toLowerCase()
    .includes(searchValues.toLowerCase()));

  const handleButtonMore = () => {
    console.log(filterMovies());
    if (filterMovies().length > moviesQuantity) {
      setIsShowButton(true);
    } else setIsShowButton(false);
  };

  const renderItem = () => {
    handleButtonMore();
    if (filterMovies().length > 0) {
      setFoundMoviesArray(filterMovies);
      setMoviesErrorMessage('');
    } else {
      setMoviesErrorMessage('Ничего не найдено');
    }
  };

  const getMovies = () => {
    getAllMovies()
      .then((movie) => {
        setMoviesArr(movie);
        // window.localStorage.setItem('movies', JSON.stringify(movie));
      })
      .catch(() => {
        setMoviesErrorMessage('Во время запроса произошла ошибка. Возможно, проблема '
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
      setMoviesErrorMessage('Нужно ввести ключевое слово');
    } else {
      getMovies();
    }
  };
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
          setIsShowButton={setIsShowButton}
        />
      )}
      {isPreloaderOn && (<Preloader />)}
    </div>
  );
}

export default Movies;
