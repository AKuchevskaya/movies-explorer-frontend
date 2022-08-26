//import { SERVER_URL } from "../utils/constants";
const SERVER_URL = 'http://localhost:3001';

class MainApi {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
  }
  

  removeSavedMovie(id) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
    }).then((res) => this._checkResponse(res));
  }
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then((res) => this._checkResponse(res));
  }
  addSavedMovie(id) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
    }).then((res) => this._checkResponse(res));
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: "include", // посылает токен в куки вместе с запросом.
    }).then((res) => this._checkResponse(res));
  }

  editProfile(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
      credentials: "include",
    }).then((res) => this._checkResponse(res));
  }
}

const apiMain = new MainApi({
  baseUrl: SERVER_URL,
  headers: {
    // authorization: "c7995123-32f8-4a6a-9c95-5dfea08bd5f1",
    "Content-Type": "application/json",
  },
});

export default apiMain;
