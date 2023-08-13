import React from 'react';
import { closeIcon } from '../../utils/constants';
import AccountButton from '../AccountButton/AccountButton';
import FilmNavigation from '../FilmNavigation/FilmNavigation';

function BurgerMenu({ isLoggedIn, isBurgerOpen, isBurgerOpenHandler }) {
  return (
    <div
      className={isBurgerOpen ? 'burger-menu' : 'burger-menu_disabled'}
      role="presentation"
      onClick={isBurgerOpenHandler}
    >
      <div
        className="burger-menu__wrapper"
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        <button
          onClick={isBurgerOpenHandler}
          className="burger-menu__close hover"
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
          <FilmNavigation
            isLoggedIn={isLoggedIn}
            isBurgerOpenHandler={isBurgerOpenHandler}
            isBurgerOpen={isBurgerOpen}
          />
        </nav>
        <div
          className="burger-menu__account-button hover"
          // type="button"
          // name="accountButtonBurger"
        >
          <AccountButton />
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
