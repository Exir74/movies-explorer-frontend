import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation';

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
        <nav className="header__nav header__nav_disabled">
          {/* У ли есть свойсто header__nav-element_selected */}
          <li className="header__nav-element">
            <Link className="header__nav-link" to="/films">Фильмы</Link>
          </li>
          <li className="header__nav-element">
            <Link className="header__nav-link" to="/films">Сохранённые фильмы</Link>
          </li>
        </nav>
        <Link to="/" className="header__button-link header__button-link_disabled">
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
