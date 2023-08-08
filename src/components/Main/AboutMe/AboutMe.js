import React from 'react';
import avatar from '../../../images/avatar.png';
import { myGithub } from '../../../utils/constants';

// const myGithub = 'https://github.com/Exir74/';

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
            href={myGithub}
            className="about-me__github hover"
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
      </div>
    </section>
  );
}

export default AboutMe;
