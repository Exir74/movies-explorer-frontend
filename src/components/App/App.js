import React, { useEffect, useState } from 'react';
import {
  Navigate,
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Profile from '../Profile/Profile';
import { logo } from '../../utils/constants';
import Login from '../Login/Login';
import FormHeader from '../FormHeader/FormHeader';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import {
  authUser, getLikes, getUserInformation,
  registerUser, removeLike, setLike, setUserInformation, signOut,
} from '../../utils/MainApi';
import CurrentUserContext from '../contexts/CurrentUser';

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [searchValues, setSearchValues] = useState('');
  const [isPreloaderOn, setIsPreloaderOn] = useState(false);
  const [savedMovie, setSavedMovie] = useState([]);
  const [serverError, setServerError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [isRequestSend, setIsRequestSend] = useState(false);
  const [movieArr, setMoviesArr] = useState(null);

  const handleSearchInput = (e) => {
    setSearchValues(e.target.value);
  };

  const [moviesQuantity, setMoviesQuantity] = useState({});
  const handleResize = () => {
    const deviseWidth = window.innerWidth;
    if (deviseWidth <= 767) {
      setMoviesQuantity({ allMovies: 5, addMovies: 2 });
      setIsMobile(true);
      setIsTablet(false);
    } else if (deviseWidth <= 1279) {
      setMoviesQuantity({ allMovies: 8, addMovies: 2 });
      setIsMobile(false);
      setIsTablet(true);
    } else {
      setMoviesQuantity({ allMovies: 12, addMovies: 3 });
      setIsMobile(false);
      setIsTablet(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
  const getCurrentUserInfo = () => {
    getUserInformation()
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
      })
      .catch((err) => {
        err.then(() => {
          setIsLoggedIn(false);
        });
      });
  };
  useEffect(() => {
    getCurrentUserInfo();
  }, []);
  const loginUser = (email, password) => {
    authUser(email, password)
      .then(() => {
        setIsLoggedIn(true);
        setServerError('');
        navigate('/movies', { replace: true });
        getCurrentUserInfo();
      })
      .catch((err) => {
        err.then((res) => {
          console.log(res.message);
          setServerError(`Ошибка: ${res.message}`);
        });
      });
  };

  const setUserInfo = (name, email) => {
    setUserInformation(name, email)
      .then((user) => {
        setCurrentUser(user);
        setServerError('Успешный успех');
        setIsRequestSend(true);
      })
      .catch((err) => {
        setIsRequestSend(false);
        err.then((res) => {
          setServerError(`Ошибка: ${res.message}`);
        });
      });
  };
  const registrationUser = (name, email, password) => {
    registerUser(name, email, password)
      .then(() => {
        setIsLoggedIn(true);
        setServerError('');
        loginUser(email, password);
      })
      .catch((err) => {
        err.then((res) => {
          setServerError(`Ошибка: ${res.message}`);
        });
      });
  };

  const logoutUser = () => {
    signOut()
      .then(() => {
        setCurrentUser({});
        localStorage.clear();
        setIsLoggedIn(false);
        setSavedMovie([]);
        setMoviesArr(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickLike = (card) => {
    const isLiked = savedMovie.some((movie) => movie.movieId === card.id);
    if (!isLiked) {
      setLike(card)
        .then((movie) => {
          setSavedMovie([...savedMovie, movie]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log(card);
    }
  };

  const getLikesHandler = () => {
    getLikes(currentUser._id)
      .then((likes) => {
        setSavedMovie(likes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const a = (movie) => {
    if (movie.movieId === undefined) {
      return savedMovie.find((i) => i.movieId === movie.id);
    }
    return movie;
  };

  const removeLikeHandler = (movie) => {
    removeLike(a(movie))
      .then((item) => {
        setSavedMovie((prevState) => prevState.filter((film) => film._id !== item._id));
      })
      .catch((err) => {
        console.log(err);
        err.then((res) => {
          setServerError(`Ошибка: ${res.message}`);
        })
          .catch((e) => console.log(e));
      });
  };

  useEffect(() => {
    getLikesHandler();
  }, [setSavedMovie]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div
        className={(isBurgerOpen && isTablet) ? 'App App_popup' : 'App'}
        role="presentation"
        onKeyDown={handlerEscapeClick}
      >
        {isShowHeader() ? (
          <Header
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
            element={isLoggedIn ? (
              <Movies
                isBurgerOpen={isBurgerOpen}
                isTablet={isTablet}
                handleSearchInput={handleSearchInput}
                searchValues={searchValues}
                setSearchValues={setSearchValues}
                isPreloaderOn={isPreloaderOn}
                moviesQuantity={moviesQuantity}
                setPreloaderOn={setIsPreloaderOn}
                movieArr={movieArr}
                setMoviesArr={setMoviesArr}
                onClickLike={onClickLike}
                savedMovie={savedMovie}
                isMobile={isMobile}
                removeLikeHandler={removeLikeHandler}
              />
            ) : <Navigate to="/" replace />}
          />
          <Route
            path="/saved-movies"
            element={isLoggedIn ? (
              <SavedMovies
                isBurgerOpen={isBurgerOpen}
                isTablet={isTablet}
                handleSearchInput={handleSearchInput}
                searchValues={searchValues}
                setSearchValues={setSearchValues}
                moviesQuantity={moviesQuantity}
                removeLikeHandler={removeLikeHandler}
                savedMovie={savedMovie}
                isPreloaderOn={isPreloaderOn}
                setPreloaderOn={setIsPreloaderOn}
                isMobile={isMobile}
                getLikesHandler={getLikesHandler}
              />
            ) : <Navigate to="/" replace />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? (
              <Profile
                logOut={logoutUser}
                isLoggedIn={isLoggedIn}
                setUserInfo={setUserInfo}
                serverError={serverError}
                isRequestSend={isRequestSend}
              />
            ) : <Navigate to="/" replace />}
          />
          <Route
            path="/signin"
            element={!isLoggedIn ? (
              <Login
                FormHeader={FormHeader}
                logo={logo}
                handleOnClick={loginUser}
                serverError={serverError}
              />
            ) : <Navigate to="/movies" />}
          />
          <Route
            path="/signup"
            element={!isLoggedIn ? (
              <Register
                FormHeader={FormHeader}
                logo={logo}
                handleOnClick={registrationUser}
                serverError={serverError}
              />
            ) : <Navigate to="/movies" />}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
