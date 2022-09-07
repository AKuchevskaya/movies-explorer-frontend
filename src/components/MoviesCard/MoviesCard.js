import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CurrentDataContext } from "../../contexts/CurrentDataContext";

import "./MoviesCard.css";

function MoviesCard({
  movie,
  showMoviesList,
  selectedMovies,
  handleLikeMovie,
  handleDeleteMovie,
}) {
  const location = useLocation();
  //console.log("one", movie);
  //const MAIN_URL = 'https://api.nomoreparties.co';

  const currentData = useContext(CurrentDataContext);
  const [isSelected, setIsSelected] = useState(false);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = movie.owner === currentData._id;

  // useEffect(()=>{
  //   isSelected ?
  //   handleLikeMovie(movie) :
  //   handleDeleteMovie(movie)
  // }, [isSelected])
// функция меняет стейт фильма на выбранный и создает этот фильм в базе данных
  const likeMovie = () => {
    setIsSelected(!isSelected);
    handleLikeMovie(movie);
    console.log("movie", movie);
  };

  const changeClassName = () => {
    setIsSelected(!isSelected);
  };
// функция удаляет фильм из базы данных и меняет стейт на невыбранный 
  const dislikeMovie = () => {
    //setIsSelected(!isSelected);

    //handleDeleteMovie(showMoviesList.filter((i) => i.movieId === movie.movieId))
    isOwn && handleDeleteMovie(movie);
  };

  return (
    <div className='movie__box'>
      <div className='movie__header'>
        <h4 className='movie__title'>{movie.nameRU}</h4>
        <p className='movie__time'>{movie.duration} минут</p>
      </div>
      <img
        // src={`${MAIN_URL}${movie.image.url}`}
        src={movie.image}
        className='movie__picture'
        alt='Стоп-кадр фильма'
      />
      {location.pathname === "/movies" ? (
         (
          <button
            type='button'
            onClick={likeMovie}
            className={`${
              !isSelected ? "movie__button-save" : "movie__button_active"
            }`}
          >
            {!isSelected && 'Сохранить'}
          </button>
        )
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
