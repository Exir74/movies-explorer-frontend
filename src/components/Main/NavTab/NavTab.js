import React from 'react';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <button
            type="button"
            name="navTabAboutProject"
            className="nav-tab__button hover"
          >
            О проекте
          </button>
        </li>
        <li className="nav-tab__item">
          <button
            type="button"
            name="navTabTechs"
            className="nav-tab__button hover"
          >
            Технологии
          </button>
        </li>
        <li className="nav-tab__item">
          <button
            type="button"
            name="navTabAboutMe"
            className="nav-tab__button hover"
          >
            Студент
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
