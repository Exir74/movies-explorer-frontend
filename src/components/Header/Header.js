import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <Link className="header__logo-link hover" to="/">
        <img
          className="header__logo-image"
          alt="лого"
          src={logo}
        />
      </Link>
      <div className="header__title header__title_disabled">
        <p className="header__title-name">Фильмы</p>
        <p className="header__title-description">Сохранённые фильмы</p>
      </div>
      <Link to="/" className="header__button-link header__button-link_disabled">
        <button type="button" className="header__button hover" name="accountButton">
          Аккаунт
        </button>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
