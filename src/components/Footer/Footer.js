import React from 'react';
import { myGithub, yandexPraktikum } from '../../utils/constants';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <p className="footer__year">&copy; 2023</p>
        <nav className="footer__nav">
          <ul className="footer__nav-wrapper">
            <li className="footer__nav-element">
              <a
                href={yandexPraktikum}
                className="footer__nav-link hover"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__nav-element">
              <a
                href={myGithub}
                className="footer__nav-link hover"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
