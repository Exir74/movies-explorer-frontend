import React, { useEffect, useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIES_URL } from '../../utils/constants';

function MoviesCardList({
  moviesArray,
  moviesQuantity,
  isShowButton,
  addMoviesQuantity,
  setIsShowButton,
  isShortMovie,
  isSavedMovieHandler,
  isSavedMovie,
}) {
  const [endArrayQuantity, setEndArrayQuantity] = useState(moviesQuantity);

  useEffect(() => {
    if (moviesArray.length > endArrayQuantity) {
      setIsShowButton(true);
    } else setIsShowButton(false);
    console.log(moviesQuantity);
  }, [endArrayQuantity, isShortMovie]);

  const handleAddButton = () => {
    setEndArrayQuantity((prev) => prev + addMoviesQuantity);
    console.log(endArrayQuantity);
  };
  return (
    <section className="cards">
      <div className="cards__items">
        {moviesArray.slice(0, endArrayQuantity).map((card) => (
          <MoviesCard
            card={card}
            key={card.id}
            img={`${MOVIES_URL}${card.image.url}`}
            // isMy={card.isMy}
            duration={card.duration}
            nameRu={card.nameRU}
            link={card.trailerLink}
            isSavedMovieHandler={isSavedMovieHandler}
            isSavedMovie={isSavedMovie}
          />
        ))}

      </div>
      <button
        type="button"
        // className="cards__button hover"
        className={`${(isShowButton) ? 'cards__button hover' : 'cards__button_disabled'}`}
        onClick={handleAddButton}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
