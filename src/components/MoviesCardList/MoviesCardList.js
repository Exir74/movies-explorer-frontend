import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="cards">
      <div className="cards__items">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        {/* <MoviesCard /> */}
        {/* <MoviesCard /> */}
        {/* <MoviesCard /> */}
        {/* <MoviesCard /> */}
        {/* <MoviesCard /> */}
        {/* <MoviesCard /> */}
        {/* <MoviesCard /> */}
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
