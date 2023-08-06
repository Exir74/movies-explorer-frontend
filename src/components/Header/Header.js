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
      <Navigation />
    </header>
  );
}

export default Header;
