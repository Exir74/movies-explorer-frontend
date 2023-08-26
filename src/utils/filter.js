import { ShortMovieDuration } from './constants';

export const shortMovieFilter = (filteredMovies) => filteredMovies
  .filter((movie) => movie.duration <= ShortMovieDuration);

export const filterForMovies = (movies, searchString) => {
  const arrRU = movies.filter((movie) => (movie.nameRU)
    .toLowerCase()
    .includes(searchString.toLowerCase()));
  const arrEN = movies.filter((movie) => (movie.nameEN)
    .toLowerCase()
    .includes(searchString.toLowerCase()));
  const concatArr = arrRU.concat(arrEN);
  return [...new Set(concatArr)];
};
