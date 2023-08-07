import React from 'react';

function Techs() {
  return (
    <section className="techs">
      <div className="techs__wrapper">
        <div className="section-header">
          <h2 className="section-header__title">Технологии</h2>
        </div>
        <div className="techs__body">
          <h2 className="techs__title">7 технологий</h2>
          <p className="techs__description">
            На курсе веб-разработки мы освоили технологии,
            которые применили в дипломном проекте.
          </p>
          <div className="techs__cards">
            <ul className="techs__cards-list">
              <li className="techs__cards-items">HTML</li>
              <li className="techs__cards-items">CSS</li>
              <li className="techs__cards-items">JS</li>
              <li className="techs__cards-items">React</li>
              <li className="techs__cards-items">Git</li>
              <li className="techs__cards-items">Express.js</li>
              <li className="techs__cards-items">mongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
