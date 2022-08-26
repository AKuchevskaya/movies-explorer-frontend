import  React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


import "./MoviesCard.css";

function MoviesCard({ movie }) {
  const currentUser = useContext(CurrentUserContext);

  //console.log("one", movie);
  //const MAIN_URL = 'https://api.nomoreparties.co';

  const location = useLocation();
  const [isLiked, setIsLiked] = useState();

  const handleAddMovie = () => {
    setIsLiked(!isLiked);
  };

  const handleRemoveMovie = () => {
    setIsLiked(false);
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
        <button
          type='button'
          onClick={handleAddMovie}
          className={`${
            isLiked ? "movie__button_active" : "movie__button-save"
          }`}
        >
          {!isLiked && "Сохранить"}
        </button>
      ) : (
        <button
          type='button'
          className='movie__button-delete'
          onClick={handleRemoveMovie}
        />
      )}
    </div>
  );
}

export default MoviesCard;
