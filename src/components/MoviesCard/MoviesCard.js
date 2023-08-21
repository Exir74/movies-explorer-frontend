import React, { useState } from 'react';
import { keyboardImplementation } from '@testing-library/user-event/dist/keyboard/keyboardImplementation';
import { deleteIcon, logo, saveIcons } from '../../utils/constants';

function MoviesCard({
  card, nameRu, duration, link, img, isSavedMovieHandler, isSavedMovie,
}) {
  const isFilmUrl = window.location.href.includes('/movies');
  const durationInHours = (`${Math.trunc(duration / 60)}ч ${duration - 60 * Math.trunc(duration / 60)}м`);
  const [mouseEnter, setMouseEnter] = useState('');

  const onMouseEnterHandler = () => {
    setMouseEnter('_enable');
  };

  const onClickSave = () => {
    console.log(card.id);
    isSavedMovieHandler(card);
  };

  const onMouseLeaveHandler = () => {
    setMouseEnter('');
  };
  return (
    <div
      className="card"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="card__main">
        <a
          href={link}
          className="card__link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card__img"
            alt={nameRu}
            src={img}
            id="cardImage"
          />
        </a>
        <div className="card__action-block">
          <button
            // className={(!isFilmUrl && isMy)
            //   ? `card__delete-btn card__delete-btn${mouseEnter}`
            //   : 'card__delete-btn_disabled'}
            className="card__delete-btn card__delete-btn_disabled"
            // className="card__delete-btn card__delete-btn_enable"
            type="button"
            name="deleteMovie"
          >
            <img
              className="card__delete-img"
              alt="удалить"
              src={deleteIcon}
            />
          </button>
          <button
            onClick={onClickSave}
            className={(isFilmUrl && !isSavedMovie)
              ? `card__save-btn card__save-btn${mouseEnter}`
              : 'card__save-btn_disabled'}
            // className="card__save-btn card__save-btn_disabled"
            // className={isFilmUrl
            //   ? `card__save-btn card__save-btn${mouseEnter}`
            //   : 'card__save-btn card__save-btn_disabled'}
            type="button"
            name="save-movie"
          >
            Сохранить
          </button>
          <img
            className={(isFilmUrl && isSavedMovie)
              ? `card__saved-img card__saved-img${mouseEnter}`
              : 'card__saved-img_disabled'}
            // className="card__saved-img"
            // className="card__saved-img card__saved-img_disabled"
            // className="card__saved-img"
            alt="Сохранен"
            src={saveIcons}
          />
        </div>
        <h3 className="card__title">
          {nameRu}
        </h3>
        <div className="card__duration">
          <h3 className="card__time">{durationInHours}</h3>
        </div>
      </div>

    </div>
  );
}

export default MoviesCard;
