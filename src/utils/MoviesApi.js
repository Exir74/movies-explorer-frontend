import { MOVIES_URL } from './constants';

const getResponseData = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.json);
};

const getAllMovies = () => fetch(`${MOVIES_URL}/beatfilm-movies`, {
  method: 'GET',
})
  // .then((res) => getResponseData(res));
  .then((res) => getResponseData(res));

export {
  getAllMovies,
  getResponseData,
// УДАЛИ ГЕТ РЕСПОС ДАТА
};
