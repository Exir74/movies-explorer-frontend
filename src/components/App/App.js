import React, { useEffect, useState } from 'react';
import {
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
  authUser, getLikes, getUserInformation, registerUser, setLike, setUserInformation, signOut,
} from '../../utils/MainApi';
import CurrentUserContext from '../contexts/CurrentUser';

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [isMyShortMovie, setIsMyShortMovie] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [searchValues, setSearchValues] = useState('');
  const [isPreloaderOn, setIsPreloaderOn] = useState(false);
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  const [serverError, setServerError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [isRequestSend, setIsRequestSend] = useState(false);
  const [movieArr, setMoviesArr] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const handleSearchInput = (e) => {
    setSearchValues(e.target.value);
  };

  const [moviesQuantity, setMoviesQuantity] = useState({});
  const handleResize = () => {
    const deviseWidth = window.innerWidth;
    if (deviseWidth <= 767) {
      setMoviesQuantity({ allMovies: 5, addMovies: 2 });
    } else if (deviseWidth <= 1281) {
      setMoviesQuantity({ allMovies: 8, addMovies: 2 });
    } else {
      setMoviesQuantity({ allMovies: 12, addMovies: 3 });
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

  const [state, setState] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const isSavedMovieHandler = (card) => {
    setState([...state, card]);
  };

  const isLoggedInHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  useEffect(() => {
    if (Object.keys(currentUser).length === 0) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [currentUser]);
  const isMyShortMovieHandler = () => {
    setIsMyShortMovie(!isMyShortMovie);
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
  const loginUser = (email, password) => {
    authUser(email, password)
      .then(() => {
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
      .then((res) => {
        setServerError('');
        loginUser(email, password);
      })
      .catch((err) => {
        err.then((res) => {
          setServerError(`Ошибка: ${res.message}`);
        });
      });
  };
  useEffect(() => {
    getCurrentUserInfo();
  }, []);

  const logoutUser = () => {
    signOut()
      .then((res) => {
        setCurrentUser({});
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setLikeHandler = (movieLike) => {
    setLike(movieLike)
      .then((card) => {
        console.log(card);
        setMoviesArr((arr) => arr.map((item) => (item.id === movieLike.id ? card : item)));
      })
      .catch((err) => {
        err.then((res) => {
          setServerError(`Ошибка: ${res.message}`);
        });
      });
  };

  const getLikesHandler = () => {
    getLikes()
      .then((likes) => {
        console.log(likes);
        // setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        err.then((res) => {
          setServerError(`Ошибка: ${res.message}`);
        });
      });
  };
  useEffect(() => {
    getLikesHandler();
  }, []);
  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                setPreloaderOn={setIsPreloaderOn}
                isSavedMovie={isSavedMovie}
                isSavedMovieHandler={isSavedMovieHandler}
                setLikeHandler={setLikeHandler}
                movieArr={movieArr}
                setMoviesArr={setMoviesArr}
                isLiked={isLiked}
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
                moviesQuantity={moviesQuantity}

              />
            )}
          />
          <Route
            path="/profile"
            element={(
              <Profile
                logOut={logoutUser}
                isLoggedIn={isLoggedIn}
                setUserInfo={setUserInfo}
                serverError={serverError}
                isRequestSend={isRequestSend}

              />
            )}
          />
          <Route
            path="/signin"
            element={(
              <Login
                FormHeader={FormHeader}
                logo={logo}
                handleOnClick={loginUser}
                serverError={serverError}
              />
            )}
          />
          <Route
            path="/signup"
            element={(
              <Register
                FormHeader={FormHeader}
                logo={logo}
                handleOnClick={registrationUser}
                serverError={serverError}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
