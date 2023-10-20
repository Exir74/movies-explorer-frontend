import React from 'react';
import { NavLink } from 'react-router-dom';

function FilmNavigation({ isBurgerOpen, isBurgerOpenHandler }) {
  // const headerNavClassName = (`film-navigation ${!isLog
  // gedIn ? 'film-navigation_disabled' : ''}`);
  const onClickHandler = () => {
    if (isBurgerOpen) {
      isBurgerOpenHandler();
    }
  };
  return (
    <nav className="film-navigation">
      <ul className="film-navigation-wrapper">
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
      </ul>
    </nav>
  );
}

export default FilmNavigation;
