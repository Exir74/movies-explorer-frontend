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
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [isMyShortMovie, setIsMyShortMovie] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [searchValues, setSearchValues] = useState('');
  const [isPreloaderOn, setIsPreloaderOn] = useState(false);
  const [moviesQuantity, setMoviesQuantity] = useState(0);
  const [addMoviesQuantity, setAddMoviesQuantity] = useState(0);
  const [isSavedMovie, setIsSavedMovie] = useState(false);

  const handleSearchInput = (e) => {
    setSearchValues(e.target.value);
  };

  const handleResize = () => {
    if (size.width <= 767) {
      setIsMobile(true);
      setIsTablet(false);
      setMoviesQuantity(5);
      setAddMoviesQuantity(2);
    } else if (size.width <= 1281) {
      setIsMobile(false);
      setIsTablet(true);
      setMoviesQuantity(8);
      setAddMoviesQuantity(2);
    } else {
      setIsMobile(false);
      setIsTablet(false);
      setMoviesQuantity(12);
      setAddMoviesQuantity(3);
    }
  };
  useEffect(() => {
    handleResize();
  }, [size.width]);

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
  const [test, setTest] = useState([]);
  const tArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const isSavedMovieHandler = (card) => {
    setIsSavedMovie(!isSavedMovie);
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
      className={(isBurgerOpen && isTablet) ? 'App App_popup' : 'App'}
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
              isBurgerOpen={isBurgerOpen}
              isTablet={isTablet}
              handleSearchInput={handleSearchInput}
              searchValues={searchValues}
              setSearchValues={setSearchValues}
              isPreloaderOn={isPreloaderOn}
              moviesQuantity={moviesQuantity}
              addMoviesQuantity={addMoviesQuantity}
              setPreloaderOn={setIsPreloaderOn}
              isSavedMovie={isSavedMovie}
              isSavedMovieHandler={isSavedMovieHandler}
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
