import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const [isShortMovie, setIsShortMovie] = useState(true);
  const [isMyShortMovie, setIsMyShortMovie] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');
  // const checkCurrentUrl = (currentUrl) => currentUrl === window.location.href;
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
              setCurrnetUrl={setCurrentUrl}
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
            />
          )}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
