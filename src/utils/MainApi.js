import { MAIN_URL, MOVIES_URL } from './constants';

const getResponseData = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.json());
};

const registerUser = (name, email, password) => fetch(`${MAIN_URL}/signup`, {
  method: 'POST',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    email,
    password,
  }),
})
  .then((res) => getResponseData(res));

const authUser = (email, password) => fetch(`${MAIN_URL}/signin`, {
  method: 'POST',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
  }),
})
  .then((res) => getResponseData(res));

const checkToken = (token) => {
  fetch(`${MAIN_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => getResponseData(res));
};

const getUserInformation = () => fetch(`${MAIN_URL}/users/me`, {
  method: 'GET',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then((res) => getResponseData(res));
const signOut = () => fetch(`${MAIN_URL}/signout`, {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => getResponseData(res));

const setUserInformation = (name, email) => fetch(`${MAIN_URL}/users/me`, {
  method: 'PATCH',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    email,
  }),
})
  .then((res) => getResponseData(res));

const setLike = (moviesLike) => fetch(`${MAIN_URL}/movies`, {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    country: moviesLike.country,
    director: moviesLike.director,
    duration: moviesLike.duration,
    year: moviesLike.year,
    description: moviesLike.description,
    image: `${MOVIES_URL}/beatfilm-movies${moviesLike.image.url}`, // ~~~~~~~~~~~~
    trailerLink: moviesLike.trailerLink,
    thumbnail: `${MOVIES_URL}/beatfilm-movies${moviesLike.image.formats.thumbnail.url}`,
    movieId: moviesLike.id,
    nameRU: moviesLike.nameRU,
    nameEN: moviesLike.nameEN,
  }),
})
  .then((res) => getResponseData(res))
  .then((res) => res.movie);

const getLikes = () => fetch(`${MAIN_URL}/movies`, {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => getResponseData(res))
  .then((res) => res.movie);

const removeLike = (movie) => fetch(`${MAIN_URL}/movies/${movie._id}`, {
  method: 'DELETE',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => getResponseData(res))
  .then((res) => res.movie);
export {
  registerUser,
  authUser,
  checkToken,
  getUserInformation,
  signOut,
  setUserInformation,
  setLike,
  getLikes,
  removeLike,
  // УДАЛИ ГЕТ РЕСПОС ДАТА
};
