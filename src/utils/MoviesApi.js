import { MOVIES_URL } from "../utils/constants";

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }
}

const apiMovies = new MoviesApi({
  baseUrl: MOVIES_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiMovies;
