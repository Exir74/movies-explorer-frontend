import React from 'react';

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <div className="section-header">
        <h2 className="section-header__title">О проекте</h2>
      </div>
      <div className="about-project__body">
        <p className="about-project__fact">Дипломный проект включал 5 этапов</p>
        <p className="about-project__paragraph">
          Составление плана, работу над бэкендом, вёрстку,
          добавление функциональности и финальные доработки.
        </p>
        <p className="about-project__fact">На выполнение диплома ушло 5 недель</p>
        <p className="about-project__paragraph">
          У каждого этапа был мягкий и жёсткий дедлайн, которые
          нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__timeline timeline">
        <div className="timeline__block timeline__block_short">
          <p className="timeline__header timeline__header_short">1 неделя</p>
          <p className="timeline__about timeline__about_short">Back-end</p>
        </div>
        <div className="timeline__block timeline__block_long">
          <p className="timeline__header timeline__header_long">4 недели</p>
          <p className="timeline__about timeline__about_short">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
