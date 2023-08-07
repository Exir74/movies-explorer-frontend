import React from 'react';
import avatar from '../../../images/avatar.png';

const howToLearn = 'https://github.com/Exir74/how-to-learn';
const russianTravel = 'https://github.com/Exir74/russian-travel';
const mesto = 'https://github.com/Exir74/react-mesto-auth';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__wrapper">
        <div className="section-header">
          <h2 className="section-header__title">Студент</h2>
        </div>
        <div className="about-me__body">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__description">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__biography">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="https://github.com/Exir74/"
            className="about-me__github"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <div className="about-me__avatar-container">
            <img
              alt="avatar"
              src={avatar}
              className="about-me__avatar"
            />
          </div>
        </div>
        <div className="about-me__portfolio">
          <p className="about-me__portfolio-text">
            Портфолио
          </p>
          <nav className="about-me__portfolio-links">
            <li className="about-me__portfolio-element">
              <a
                href={howToLearn}
                className="about-me__portfolio-link"
                target="_blank"
                rel="noreferrer"
              >
                Статичный сайт
              </a>
              <a
                href={howToLearn}
                className="about-me__portfolio-arrow"
                target="_blank"
                rel="noreferrer"
              >
                ↗
              </a>
            </li>
            <li className="about-me__portfolio-element">
              <a
                href={russianTravel}
                className="about-me__portfolio-link"
                target="_blank"
                rel="noreferrer"
              >
                Адаптивный сайт
              </a>
              <a
                href={russianTravel}
                className="about-me__portfolio-arrow"
                target="_blank"
                rel="noreferrer"
              >
                ↗
              </a>
            </li>
            <li className="about-me__portfolio-element">
              <a
                href={mesto}
                className="about-me__portfolio-link"
                target="_blank"
                rel="noreferrer"
              >
                Одностраничное приложение
              </a>
              <a
                href={mesto}
                className="about-me__portfolio-arrow"
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

export default AboutMe;
