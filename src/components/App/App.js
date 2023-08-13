import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import useWindowSize from '../../utils/hooks/useWindowSize';

function App() {
  const size = useWindowSize();
  const [isShortMovie, setIsShortMovie] = useState(true);
  const [isMyShortMovie, setIsMyShortMovie] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
  const isBurgerOpenHandler = () => {
    setIsBurgerOpen(!isBurgerOpen);
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
      <Header
        isLoggedInHandler={isLoggedInHandler}
        isLoggedIn={isLoggedIn}
        isBurgerOpen={isBurgerOpen}
        isBurgerOpenHandler={isBurgerOpenHandler}
      />
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
            />
          )}
        />
      </Routes>
      <BurgerMenu
        isLoggedIn={isLoggedIn}
        isBurgerOpen={isBurgerOpen}
        isBurgerOpenHandler={isBurgerOpenHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
