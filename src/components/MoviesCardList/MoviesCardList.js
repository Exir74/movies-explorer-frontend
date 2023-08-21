import React, { useEffect, useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIES_URL } from '../../utils/constants';

function MoviesCardList({
  moviesArray, moviesQuantity, isShowButton, addMoviesQuantity, setIsShowButton, isShortMovie,
}) {
  const [endArrayQuantity, setEndArrayQuantity] = useState(moviesQuantity);

  // function handleShortMovies() {
  // if (isShortMovie) {
  //   return moviesArray.filter((movie) => movie.duration <= 52);
  // }
  // return moviesArray;

  // function handleShortMovies () {
  //   const newIndex = index + 1;
  //   setIndex(newIndex);
  //   console.log(newIndex);
  // }
  // }

  // useEffect(() => {
  //   handleShortMovies();
  //   window.localStorage.setItem('isShortMovie', JSON.stringify(isShortMovie));
  // }, [isShortMovie]);
  //
  useEffect(() => {
    if (moviesArray.length > endArrayQuantity) {
      setIsShowButton(true);
    } else setIsShowButton(false);
    console.log(moviesQuantity);
  }, [endArrayQuantity, isShortMovie]);
  //
  // const [index, setIndex] = useState([]);
  //
  const handleAddButton = () => {
    setEndArrayQuantity((prev) => prev + addMoviesQuantity);
    console.log(endArrayQuantity);
  };
  // console.log(moviesArray);
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
        className={`${(isShowButton) ? 'cards__button hover' : 'cards__button_disabled'}`}
        onClick={handleAddButton}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
