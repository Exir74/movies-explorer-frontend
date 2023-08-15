import React from 'react';
import { howToLearn, mesto, russianTravel } from '../../../utils/constants';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <div className="portfolio__header">
          <p className="portfolio__text">
            Портфолио
          </p>
          <nav className="portfolio__nav">
            <ul className="portfolio__nav-wrapper">
              <li className="portfolio__nav-element">
                <a
                  href={howToLearn}
                  className="portfolio__nav-link hover"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="portfolio__nav-arrow">Статичный сайт</p>
                  <p className="portfolio__nav-arrow">↗</p>
                </a>
              </li>
              <li className="portfolio__nav-element">
                <a
                  href={russianTravel}
                  className="portfolio__nav-link hover"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="portfolio__nav-arrow">Адаптивный сайт</p>
                  <p className="portfolio__nav-arrow">↗</p>
                </a>
              </li>
              <li className="portfolio__nav-element">
                <a
                  href={mesto}
                  className="portfolio__nav-link hover"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="portfolio__nav-arrow">Одностраничное приложение</p>
                  <p className="portfolio__nav-arrow">↗</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
