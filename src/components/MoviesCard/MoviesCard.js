import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({
  movie,
  likedMovies,
  handleLikeMovie,
  handleDeleteMovie,
}) {
  const location = useLocation();

  // Определяем, выбран ли фильм для сохранения, текущим пользователем
  const isSelected = movie.movieId && likedMovies.some(m => m.movieId === movie.movieId);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const movieButtonClassName = `${
    isSelected ? "movie__button_active" : "movie__button-save"
  }`;

  // функция создает этот фильм в базе данных
  const likeMovie = () => {
    isSelected ? handleDeleteMovie(likedMovies.filter((m) => m.movieId === movie.movieId)[0]) : handleLikeMovie(movie)
  }

  // функция удаляет фильм из базы данных
  const dislikeMovie = () => {
    handleDeleteMovie(movie);
  };

  return (
    <div className='movie__box'>
      <div className='movie__header'>
        <h4 className='movie__title'>{movie.nameRU}</h4>
        <p className='movie__time'>{movie.duration} минут</p>
      </div>
      <img
        src={movie.image}
        className='movie__picture'
        alt='Стоп-кадр фильма'
      />
      {location.pathname === "/movies" ? (
        <button
          type='button'
          onClick={likeMovie}
          className={movieButtonClassName}
        >
          {!isSelected && "Сохранить"}
        </button>
      ) : (
        <button
          type='button'
          className='movie__button-delete'
          onClick={dislikeMovie}
        />
      )}
    </div>
  );
}

export default MoviesCard;
