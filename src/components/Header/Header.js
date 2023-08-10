import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import { logo } from '../../utils/constants';

function Header() {
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
        <nav className="header__nav header__nav_disabled1">
          {/* У ли есть свойсто header__nav-element_selected */}
          <li className="header__nav-element">
            <Link className="header__nav-link hover" to="/movies">Фильмы</Link>
          </li>
          <li className="header__nav-element">
            <Link className="header__nav-link hover" to="/films">Сохранённые фильмы</Link>
          </li>
        </nav>
        <Link to="/" className="header__button-link header__button-link_disabled1">
          <button type="button" className="header__button hover" name="accountButton">
            Аккаунт
          </button>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
