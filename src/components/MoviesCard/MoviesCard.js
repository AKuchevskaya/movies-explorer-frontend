import { React, useState } from "react";
import { useLocation } from "react-router-dom";

import "./MoviesCard.css";

function MoviesCard(props) {
  const movie = props.movie;

  const location = useLocation();
  const [isSelectedFilm, setIsSelectedFilm] = useState();

  const handleAddMovie = () => {
    setIsSelectedFilm(!isSelectedFilm);
  };

  const handleRemoveMovie = () => {
    setIsSelectedFilm(false);
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
          onClick={handleAddMovie}
          className={`movie__button-save ${
            isSelectedFilm && "movie__button_active"
          }`}
        >
          {!isSelectedFilm && "Сохранить"}
        </button>
      ) : (
        <button
          type='button'
          className='movie__button'
          
          onClick={handleRemoveMovie}
        />
      )}
    </div>
  );
}

export default MoviesCard;
