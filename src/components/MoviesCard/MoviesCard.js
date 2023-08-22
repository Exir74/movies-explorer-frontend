import React from 'react';
import { deleteIcon, saveIcons } from '../../utils/constants';

function MoviesCard({
  card, nameRu, duration, link, img, isSavedMovieHandler, isSavedMovie, moviesArray,
}) {
  const durationInHours = (`${Math.trunc(duration / 60)}ч ${duration - 60 * Math.trunc(duration / 60)}м`);
  // const isFilmUrl = window.location.href.includes('/movies');
  // const isSaved = a.includes(card.id);
  // const durationInHours = (`${Math.trunc(duration / 60)}ч
  // ${duration - 60 * Math.trunc(duration / 60)}м`);
  // const [mouseEnter, setMouseEnter] = useState('');
  // const onMouseEnterHandler = () => {
  //   setMouseEnter('_enable');
  //   console.log(card.id);
  // };
  // const onClickSave = () => {
  //   console.log(card.id);
  //   isSavedMovieHandler(card);
  //   console.log(isSaved);
  // };
  // const onMouseLeaveHandler = () => {
  //   a.push(card.id);
  //   setMouseEnter('');
  //   console.log(a);
  // };
  // const testArr = [1, 2, 3, 4, 5, 6];
  console.log(1);

  const onClickSave = () => {
    isSavedMovieHandler(card);
  };
  return (
    <div
      className="card"
      // onMouseEnter={onMouseEnterHandler}
      // onMouseLeave={onMouseLeaveHandler}
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
            // className="card__delete-btn card__delete-btn_disabled"
            className="card__delete-btn card__delete-btn_disabled"
            // className="card__delete-btn card__delete-btn_disabled"
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
            // onClick={onClickSave}
            // className={(isFilmUrl && !isSavedMovie)
            //   ? `card__save-btn card__save-btn${mouseEnter}`
            //   : 'card__save-btn_disabled'}
            // className="card__save-btn card__save-btn_enable"
            className={`card__save-btn ${isSavedMovie
              ? 'card__save-btn_disabled'
              : 'card__save-btn_enable'}`}
            // className={isFilmUrl
            //   ? `card__save-btn card__save-btn${mouseEnter}`
            //   : 'card__save-btn card__save-btn_disabled'}
            onClick={onClickSave}
            type="button"
            name="save-movie"
          >
            Сохранить
          </button>
          <img
            // className={(isFilmUrl && isSaved)
            // className="card__saved-img"
            // className="card__saved-img card__saved-img_disabled"
            className={`'card__saved-img' ${isSavedMovie
              ? ''
              : ' card__saved-img_disabled'}`}
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
