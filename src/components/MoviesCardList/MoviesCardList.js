import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import { testCardsArr } from '../../utils/constants';

function MoviesCardList({ currentWidth }) {
  return (
    <section className="cards">
      <div className="cards__items">
        {testCardsArr.map((card) => (
          <MoviesCard
            key={card.id}
            img={card.image}
            isMy={card.isMy}
            duration={card.duration}
            nameRu={card.nameRU}
            link={card.link}
            currentWidth={currentWidth}
          />
        ))}
      </div>
      <button
        type="button"
        className="cards__button hover"
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
