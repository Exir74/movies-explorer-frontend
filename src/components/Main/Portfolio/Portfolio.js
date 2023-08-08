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
            <li className="portfolio__nav-element">
              <a
                href={howToLearn}
                className="portfolio__nav-link hover"
                target="_blank"
                rel="noreferrer"
              >
                Статичный сайт
              </a>
              <a
                href={howToLearn}
                className="portfolio__nav-arrow hover"
                target="_blank"
                rel="noreferrer"
              >
                ↗
              </a>
            </li>
            <li className="portfolio__nav-element">
              <a
                href={russianTravel}
                className="portfolio__nav-link hover"
                target="_blank"
                rel="noreferrer"
              >
                Адаптивный сайт
              </a>
              <a
                href={russianTravel}
                className="portfolio__nav-arrow hover"
                target="_blank"
                rel="noreferrer"
              >
                ↗
              </a>
            </li>
            <li className="portfolio__nav-element">
              <a
                href={mesto}
                className="portfolio__nav-link hover"
                target="_blank"
                rel="noreferrer"
              >
                Одностраничное приложение
              </a>
              <a
                href={mesto}
                className="portfolio__nav-arrow hover"
                target="_blank"
                rel="noreferrer"
              >
                ↗
              </a>
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
