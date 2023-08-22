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
  const [endArrayQuantity, setEndArrayQuantity] = useState(moviesQuantity.allMovies);

  useEffect(() => {
    if (moviesArray.length > endArrayQuantity) {
      setIsShowButton(true);
    } else setIsShowButton(false);
  }, [endArrayQuantity, isShortMovie]);

  const handleAddButton = () => {
    console.log(moviesQuantity.addMovies);
    setEndArrayQuantity((prev) => prev + moviesQuantity.addMovies);
  };
  const handler = (card) => {

  };
  return (
    <section className="cards">
      <div className="cards__items">
        {moviesArray.slice(0, endArrayQuantity).map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
            img={`${MOVIES_URL}${card.image.url}`}
            // isMy={card.isMy}
            duration={card.duration}
            nameRu={card.nameRU}
            link={card.trailerLink}
            isSavedMovieHandler={handler}
            isSavedMovie={isSavedMovie}
            moviesArray={moviesArray}
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
