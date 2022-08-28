//import {SERVER_URL} from '../utils/constants';
const SERVER_URL = "http://localhost:3001";

const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`oшибка: ${res.status} ${res.statusText}`);
};

export const register = (name, email, password) => {
  return fetch(`${SERVER_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
    credentials: "include",
  }).then(checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${SERVER_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
    credentials: "include",
  }).then(checkResponse);
};

export const signOut = () => {
  return fetch(`${SERVER_URL}/signout`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(checkResponse);
};
