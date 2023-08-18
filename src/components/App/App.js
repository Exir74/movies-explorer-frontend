import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import useWindowSize from '../../utils/hooks/useWindowSize';
import Profile from '../Profile/Profile';
import { logo } from '../../utils/constants';
import Login from '../Login/Login';
import FormHeader from '../FormHeader/FormHeader';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { getAllMovies } from '../../utils/MoviesApi';

function App() {
  const size = useWindowSize();
  const location = useLocation().pathname;
  const [isShortMovie, setIsShortMovie] = useState(true);
  const [isMyShortMovie, setIsMyShortMovie] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [moviesArray, setMoviesArray] = useState([]);
  const [searchValues, setSearchValues] = useState('');
  const [moviesErrorMessage, setMoviesErrorMessage] = useState('');
  // const [moviesServerStatus, setMoviesServerStatus] = useState('');
  const [isPreloaderOn, setIsPreloaderOn] = useState(false);
  const handleSearchInput = (e) => {
    setSearchValues(e.target.value);
  };
  useEffect(() => {
    if (size.width >= 770) {
      setIsMobile(false);
      setIsBurgerOpen(false);
    } else {
      setIsMobile(true);
    }
  });
  const handlerEscapeClick = (e) => {
    if (e.key === 'Escape') {
      setIsBurgerOpen(false);
    }
  };
  const isShowHeader = () => (location === '/')
    || (location === '/saved-movies')
    || (location === '/movies')
    || (location === '/profile');
  const isShowFooter = () => (location === '/')
    || (location === '/saved-movies')
    || (location === '/movies');

  const isBurgerOpenHandler = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  const getMovies = () => {
    setIsPreloaderOn(true);
    getAllMovies().then((res) => {
      setIsPreloaderOn(false);
      setMoviesArray(res);
    })
      .catch(() => {
        setMoviesErrorMessage('Во время запроса произошла ошибка. Возможно, проблема '
          + 'с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => {
        setIsPreloaderOn(false);
      });
  };

  const isLoggedInHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const isMyShortMovieHandler = () => {
    setIsMyShortMovie(!isMyShortMovie);
  };
  const isShortMovieHandler = () => {
    setIsShortMovie(!isShortMovie);
  };
  return (
    <div
      className={(isBurgerOpen && isMobile) ? 'App App_popup' : 'App'}
      role="presentation"
      onKeyDown={handlerEscapeClick}
    >
      {isShowHeader() ? (
        <Header
          isLoggedInHandler={isLoggedInHandler}
          isLoggedIn={isLoggedIn}
          isBurgerOpen={isBurgerOpen}
          isBurgerOpenHandler={isBurgerOpenHandler}
          logo={logo}
        />
      ) : null}
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/movies"
          element={(
            <Movies
              isShortMovie={isShortMovie}
              isShortMovieHandler={isShortMovieHandler}
              isBurgerOpen={isBurgerOpen}
              isMobile={isMobile}
              getMovies={getMovies}
              moviesArray={moviesArray}
              handleSearchInput={handleSearchInput}
              searchValues={searchValues}
              moviesErrorMessage={moviesErrorMessage}
              setMoviesErrorMessage={setMoviesErrorMessage}
              setSearchValues={setSearchValues}
              isPreloaderOn={isPreloaderOn}
            />
          )}
        />
        <Route
          path="/saved-movies"
          element={(
            <SavedMovies
              isMyShortMovie={isMyShortMovie}
              isMyShortMovieHandler={isMyShortMovieHandler}
              isBurgerOpen={isBurgerOpen}
              isMobile={isMobile}
              handleSearchInput={handleSearchInput}
              searchValues={searchValues}
              setSearchValues={setSearchValues}
            />
          )}
        />
        <Route
          path="/profile"
          element={(
            <Profile />
          )}
        />
        <Route
          path="/signin"
          element={(
            <Login
              FormHeader={FormHeader}
              logo={logo}
            />
          )}
        />
        <Route
          path="/signup"
          element={(
            <Register
              FormHeader={FormHeader}
              logo={logo}
            />
          )}
        />
        <Route
          path="*"
          element={(
            <NotFound />
          )}
        />
      </Routes>
      {isBurgerOpen ? (
        <BurgerMenu
          isLoggedIn={isLoggedIn}
          isBurgerOpen={isBurgerOpen}
          isBurgerOpenHandler={isBurgerOpenHandler}
        />
      ) : null}
      {isShowFooter() ? <Footer /> : null}
    </div>
  );
}

export default App;
