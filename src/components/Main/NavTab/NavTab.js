import React from 'react';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <a
            href="#about-project"
            name="navTabAboutProject"
            className="nav-tab__link hover"
          >
            О проекте
          </a>
        </li>
        <li className="nav-tab__item">
          <a
            href="#techs"
            name="navTabAboutProject"
            className="nav-tab__link hover"
          >
            Технологии
          </a>
        </li>
        <li className="nav-tab__item">
          <a
            href="#about-me"
            name="navTabAboutProject"
            className="nav-tab__link hover"
          >
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
