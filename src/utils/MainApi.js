import { MAIN_URL } from './constants';

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

export {
  registerUser,
  getResponseData,
  authUser,
  // УДАЛИ ГЕТ РЕСПОС ДАТА
};
