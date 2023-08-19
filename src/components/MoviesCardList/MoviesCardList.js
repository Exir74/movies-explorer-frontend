import React, { useEffect, useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIES_URL } from '../../utils/constants';

function MoviesCardList({
  moviesArray, moviesQuantity, isShowButton, addMoviesQuantity,
}) {
  const [startArrayQuantity, setStartArrayQuantity] = useState(0);
  const [endArrayQuantity, setEndArrayQuantity] = useState(moviesQuantity);

  const handleAddButton = () => {
    const start = (startArrayQuantity + moviesQuantity);
    const end = (start + addMoviesQuantity);
    setStartArrayQuantity(start);
    setEndArrayQuantity(end);
  };
  const handleEndButton = () => {
    setEndArrayQuantity(startArrayQuantity + addMoviesQuantity);
  };

  return (
    <section className="cards">
      <div className="cards__items">
        {moviesArray.slice(0, endArrayQuantity).map((card) => (
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
        // className="cards__button hover"
        className={`${isShowButton ? 'cards__button hover' : 'cards__button_disabled'}`}
        onClick={handleAddButton}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
