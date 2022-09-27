export const SERVER_URL = "https://api.films.kuchevskaya.nomoredomains.sbs";
export const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";
export const MOVIE_CARD_URL = "https://api.nomoreparties.co";

export const regexName = /(^[а-яА-ЯЁёa-zA-Z\s-]+$)+/i;
export const regexEmail =
  /([a-zA-Z0-9]([-_.]?[a-zA-Z0-9]+)*)@([a-zA-Z0-9]([-]?[a-zA-Z0-9]+)*)(\.([a-zA-Z])+)+/i;
export const regexLink = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;

  export const errorRegexName =
  "Используйте только латиницу, киррилицу, тире и пробел";
export const errorRegexEmail = "Не корректный Email";
