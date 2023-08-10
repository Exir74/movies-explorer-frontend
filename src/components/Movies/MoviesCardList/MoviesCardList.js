import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="moviesCardList">
      <MoviesCard />
      <button
        type="button"
        className="moviesCard__button hover"
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
