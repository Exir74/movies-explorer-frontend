import React from 'react';
import Navigation from '../Navigation/Navigation';
import { closeIcon } from '../../utils/constants';
import AccountButton from '../AccountButton/AccountButton';

function BurgerMenu() {
  return (
    <div className="burger-menu">
      <button
        className="burger-menu__close"
        type="button"
        name="closeButton"
      >
        <img
          className="burger-menu__close-img"
          src={closeIcon}
          alt="закрыть меню"
        />
      </button>
      <nav className="burger-menu__nav">
        <Navigation />
      </nav>
      <button
        className="burger-menu__account-button"
        type="button"
        name="accountButtonBurger"
      >
        <AccountButton />
      </button>
    </div>
  );
}

export default BurgerMenu;
