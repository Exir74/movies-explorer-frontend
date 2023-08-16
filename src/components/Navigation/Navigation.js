import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ isLoggedIn }) {
  const menuClassName = (`header__menu menu ${isLoggedIn && 'menu_disabled'}`);

  // const cardLikeButtonClassName = (
  //   `card__like ${isLiked && 'card__like_active'}`
  // );

  return (
    <nav className={menuClassName}>
      <ul className="menu__list list">
        <li className="list__elemet element">
          <Link className="element element__registration hover" to="/signup">
            Регистрация
          </Link>
        </li>
        <li className="list__element element">
          <Link to="/signin" className="element element__login login hover">
            <button type="button" name="menuLogin" className="login__button">Войти</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
