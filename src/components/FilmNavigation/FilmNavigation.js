import React from 'react';
import { NavLink } from 'react-router-dom';

function FilmNavigation({ isLoggedIn, isBurgerOpen, isBurgerOpenHandler }) {
  const headerNavClassName = (`film-navigation ${!isLoggedIn ? 'film-navigation_disabled' : ''}`);
  const onClickHandler = () => {
    if (isBurgerOpen) {
      isBurgerOpenHandler();
    }
  };
  return (
    <nav className={headerNavClassName}>
      <li className="film-navigation-element">
        <NavLink
          to="/"
          onClick={onClickHandler}
          className={({ isActive }) => (isActive
            ? 'film-navigation-link film-navigation-link_selected hover'
            : 'film-navigation-link hover')}
        >
          Главная
        </NavLink>
      </li>
      <li className="film-navigation-element">
        <NavLink
          onClick={onClickHandler}
          to="/movies"
          className={({ isActive }) => (isActive
            ? 'film-navigation-link film-navigation-link_selected hover'
            : 'film-navigation-link hover')}
        >
          Фильмы
        </NavLink>
      </li>
      <li className="film-navigation-element">
        <NavLink
          onClick={onClickHandler}
          to="/saved-movies"
          className={({ isActive }) => (isActive
            ? 'film-navigation-link film-navigation-link_selected hover'
            : 'film-navigation-link hover')}
        >
          Сохранённые фильмы
        </NavLink>
      </li>
    </nav>
  );
}

export default FilmNavigation;
