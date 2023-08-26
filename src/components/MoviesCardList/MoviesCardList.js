import React, { useEffect, useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIES_URL } from '../../utils/constants';

function MoviesCardList({
  moviesArray,
  moviesQuantity,
  isShowButton,
  setIsShowButton,
  isShortMovie,
  onClickLike,
  isLiked,
  savedMovie,
}) {
  const [endArrayQuantity, setEndArrayQuantity] = useState(moviesQuantity.allMovies);

  useEffect(() => {
    if (moviesArray.length > endArrayQuantity) {
      setIsShowButton(true);
    } else setIsShowButton(false);
  }, [endArrayQuantity, isShortMovie, moviesArray]);

  const handleAddButton = () => {
    console.log(moviesQuantity.addMovies);
    setEndArrayQuantity((prev) => prev + moviesQuantity.addMovies);
  };

  return (
    <section className="cards">
      <div className="cards__items">
        {moviesArray.slice(0, endArrayQuantity).map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
            img={`${MOVIES_URL}${card.image.url}`}
            duration={card.duration}
            nameRu={card.nameRU}
            link={card.trailerLink}
            onClickLike={onClickLike}
            isLiked={isLiked}
            savedMovie={savedMovie}
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
