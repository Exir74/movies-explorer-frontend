import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import { burgerMenu, logo } from '../../utils/constants';
import AccountButton from '../AccountButton/AccountButton';
import FilmNavigation from '../FilmNavigation/FilmNavigation';

function Header({ isLoggedIn, isBurgerOpenHandler }) {
  // const headerNavClassName = (`header__nav ${!isLoggedIn && 'header__nav_disabled'}`);
  const headerButtonLinkClassName = (`header__button-link ${!isLoggedIn && 'header__button-link_disabled'}`);
  // const navLinkElementClassName = (`header__nav-element ${}`)
  const onClickBurgerBtn = () => {
    isBurgerOpenHandler();
  };
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
        <div className="header__nav-wrapper">
          <FilmNavigation isLoggedIn={isLoggedIn} />
        </div>
        <Link to="/" className={headerButtonLinkClassName}>
          <AccountButton />
        </Link>
        <button
          type="button"
          onClick={onClickBurgerBtn}
          className="header__button-burger button-burger hover"
          name="burgerButton"
        >
          <div className="button-burger">
            <img
              className="button-burger__img"
              alt="открыть меню"
              src={burgerMenu}
            />
          </div>
        </button>
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
}

export default Header;
