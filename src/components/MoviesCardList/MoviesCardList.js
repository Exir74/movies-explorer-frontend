import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIES_URL } from '../../utils/constants';

function MoviesCardList({ moviesArray }) {
  return (
    <section className="cards">
      <div className="cards__items">
        {moviesArray.slice(0, 3).map((card) => (
          <MoviesCard
            key={card.id}
            img={`${MOVIES_URL}${card.image.url}`}
            isMy={card.isMy}
            duration={card.duration}
            nameRu={card.nameRU}
            link={card.trailerLink}
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
