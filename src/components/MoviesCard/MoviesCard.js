import React, { useEffect, useState } from 'react';
import { deleteIcon, saveIcons } from '../../utils/constants';

function MoviesCard({
  card,
  nameRu,
  duration,
  link,
  img,
  onClickLike,
  savedMovie,
  currentUrl,
}) {
  const isSavedPage = (!!currentUrl.includes('/saved-movies'));

  const durationInHours = (`${Math.trunc(duration / 60)}ч ${duration - 60 * Math.trunc(duration / 60)}м`);
  const isLiked = !!savedMovie.some((movie) => movie.movieId === card.id);
  const onClickSave = () => {
    onClickLike(card);
  };
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const onMouseEnterHandler = () => setIsMouseEnter(true);

  const onMouseLeaveHandler = () => setIsMouseEnter(false);
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
          {isSavedPage && (
            <button
              className={`card__delete-btn ${isMouseEnter
                ? 'card__delete-btn_enable'
                : 'card__delete-btn_disabled'}`}
              type="button"
              name="deleteMovie"
            >
              <img
                className="card__delete-img"
                alt="удалить"
                src={deleteIcon}
              />
            </button>
          )}
          {!isSavedPage && (
            <button
              onClick={onClickSave}
              className={`card__save-btn ${(isLiked || !isMouseEnter)
                ? 'card__save-btn_disabled'
                : 'card__save-btn_enable'}`}
              type="button"
              name="save-movie"
            >
              Сохранить
            </button>
          )}
          <img
            alt="Сохранен"
            src={saveIcons}
            className={`card__saved-img ${isLiked
              ? 'card__saved-img_enable'
              : ''}`}
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
