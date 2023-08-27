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
  savedMovie,
  isMobile,
  removeLikeHandler,
}) {
  const currentUrl = window.location.href;

  const setImageUrl = (card) => {
    if (currentUrl.includes('/saved-movies')) {
      return card.image;
    }
    return `${MOVIES_URL}${card.image.url}`;
  };

  const [endArrayQuantity, setEndArrayQuantity] = useState();
  useEffect(() => {
    setEndArrayQuantity(moviesQuantity.allMovies);
  }, [isShortMovie, moviesArray]);

  useEffect(() => {
    if (moviesArray.length > endArrayQuantity) {
      setIsShowButton(true);
    } else setIsShowButton(false);
  }, [endArrayQuantity, isShortMovie, moviesArray]);

  const handleAddButton = () => {
    setEndArrayQuantity((prev) => prev + moviesQuantity.addMovies);
  };

  return (
    <section className="cards">
      <div className="cards__items">
        {moviesArray.slice(0, endArrayQuantity).map((card) => (
          <MoviesCard
            key={card.id || card.movieId}
            card={card}
            img={setImageUrl(card)}
            duration={card.duration}
            nameRu={card.nameRU}
            link={card.trailerLink}
            onClickLike={onClickLike}
            savedMovie={savedMovie}
            currentUrl={currentUrl}
            isMobile={isMobile}
            removeLikeHandler={removeLikeHandler}
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
