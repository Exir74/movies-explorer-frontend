import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function App() {
  const width = window.innerWidth;
  const [isShortMovie, setIsShortMovie] = useState(true);
  const [isMyShortMovie, setIsMyShortMovie] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentWidth, setCurrentWidth] = useState('');
  // const checkCurrentUrl = (currentUrl) => currentUrl === window.location.href;
  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);
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
    <div className="App">
      <Header
        isLoggedInHandler={isLoggedInHandler}
        isLoggedIn={isLoggedIn}
        currentUrl={currentUrl}
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
              setCurrentUrl={setCurrentUrl}
              currentWidth={currentWidth}
            />
          )}
        />
        <Route
          path="/saved-movies"
          element={(
            <SavedMovies
              isMyShortMovie={isMyShortMovie}
              isMyShortMovieHandler={isMyShortMovieHandler}
              setCurrentUrl={setCurrentUrl}
              currentWidth={currentWidth}
            />
          )}
        />
      </Routes>
      <BurgerMenu />
      <Footer />
    </div>
  );
}

export default App;
