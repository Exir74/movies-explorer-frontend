import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import { logo } from '../../utils/constants';

// const currentUrl = window.location.href;

function Header({ isLoggedIn, currentUrl }) {
  const [navMoviesLinkClassName, setNavMoviesLinkClassName] = useState('header__nav-element');
  const [navSavedMoviesLinkClassName, setNavSavedMLinkElementClassName] = useState('header__nav-element');
  useEffect(() => {
    // console.log(currentUrl.includes('/movies'));
    if (currentUrl.includes('/movies')) {
      setNavMoviesLinkClassName('header__nav-link header__nav-link_selected hover');
      setNavSavedMLinkElementClassName('header__nav-link hover');
    } else {
      setNavMoviesLinkClassName('header__nav-link hover');
      setNavSavedMLinkElementClassName('header__nav-link header__nav-link_selected hover');
    }
  }, [currentUrl]);
  const headerNavClassName = (`header__nav ${!isLoggedIn && 'header__nav_disabled'}`);
  const headerButtonLinkClassName = (`header__button-link ${!isLoggedIn && 'header__button-link_disabled'}`);
  // const navLinkElementClassName = (`header__nav-element ${}`)
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link className="header__logo-link hover" to="/">
          <img
            className="header__logo-image"
            alt="лого"
            src={logo}
          />
        </Link>
        <nav className={headerNavClassName}>
          <li className="header__nav-element">
            <Link className={navMoviesLinkClassName} to="/movies">Фильмы</Link>
          </li>
          <li className="header__nav-element">
            <Link className={navSavedMoviesLinkClassName} to="/saved-movies">
              Сохранённые
              фильмы
            </Link>
          </li>
        </nav>
        <Link to="/" className={headerButtonLinkClassName}>
          <button type="button" className="header__button hover" name="accountButton">
            Аккаунт
          </button>
        </Link>
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
}

export default Header;
