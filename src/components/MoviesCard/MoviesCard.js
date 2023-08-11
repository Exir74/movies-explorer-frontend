import React from 'react';
import testCardImg from '../../images/card33Slova.jpeg';
import SaveMyMovieIcon from './CardActions/SaveMyMovieIcon/SaveMyMovieIcon';

function MoviesCard() {
  return (
    <div className="card">
      <div className="card__main">
        <a
          href="https://ya.ru"
          className="card__link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card__img"
            alt="33 слова о дизайне"
            src={testCardImg}
            id="cardImage"
          />
        </a>
        <div className="card__action-block">
          <SaveMyMovieIcon />
        </div>
        <h3 className="card__title">
          33 слова о дизайне
        </h3>
        <div className="card__duration">
          <h3 className="card__time">1ч 17м</h3>
        </div>
      </div>

    </div>
  );
}

export default MoviesCard;
