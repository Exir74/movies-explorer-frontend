import React from 'react';
import testCardImg from '../../images/card33Slova.jpeg';
import SaveMyMovieIcon from './CardActions/SaveMyMovieIcon/SaveMyMovieIcon';
// import SavedMovie from './CardActions/SavedIcon/SavedIcon';
// import DeleteMovieIcon from './CardActions/deleteMovieIcon/deleteMovieIcon';

function MoviesCard() {
  return (
    <div className="moviesCard">
      <div className="moviesCard__main">
        <a
          href="https://ya.ru"
          className="moviesCard__link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="moviesCard__img"
            alt="33 слова о дизайне"
            src={testCardImg}
            id="cardImage"
          />
        </a>
        <div className="moviesCard__action-block">
          <SaveMyMovieIcon />
        </div>
        <h3 className="moviesCard__title">
          33 слова о дизайне
        </h3>
        <div className="moviesCard__duration">
          <h3 className="moviesCard__time">1ч 17м</h3>
        </div>
      </div>
      <div className="moviesCard__main">
        <a
          href="https://ya.ru"
          className="moviesCard__link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="moviesCard__img"
            alt="33 слова о дизайне"
            src={testCardImg}
            id="cardImage"
          />
        </a>
        <div className="moviesCard__action-block">
          <SaveMyMovieIcon />
        </div>
        <h3 className="moviesCard__title">
          33 слова о дизайне
        </h3>
        <div className="moviesCard__duration">
          <h3 className="moviesCard__time">1ч 17м</h3>
        </div>
      </div>
      <div className="moviesCard__main">
        <a
          href="https://ya.ru"
          className="moviesCard__link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="moviesCard__img"
            alt="33 слова о дизайне"
            src={testCardImg}
            id="cardImage"
          />
        </a>
        <div className="moviesCard__action-block">
          <SaveMyMovieIcon />
        </div>
        <h3 className="moviesCard__title">
          33 слова о дизайне
        </h3>
        <div className="moviesCard__duration">
          <h3 className="moviesCard__time">1ч 17м</h3>
        </div>
      </div>
      <div className="moviesCard__main">
        <a
          href="https://ya.ru"
          className="moviesCard__link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="moviesCard__img"
            alt="33 слова о дизайне"
            src={testCardImg}
            id="cardImage"
          />
        </a>
        <div className="moviesCard__action-block">
          <SaveMyMovieIcon />
        </div>
        <h3 className="moviesCard__title">
          33 слова о дизайне
        </h3>
        <div className="moviesCard__duration">
          <h3 className="moviesCard__time">1ч 17м</h3>
        </div>
      </div>

    </div>
  );
}

export default MoviesCard;
