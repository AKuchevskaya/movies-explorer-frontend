import React from "react";

import posterOne from "../../images/poster_one.jpg";
import posterTwo from "../../images/poster_two.jpg";
import "./MoviesCard.css";

function MoviesCard() {
  return (
    <>
      <div className='movie__box'>
        <div className='movie__header'>
          <h4 className='movie__title'>В погоне за Бенкси</h4>
          <p className='movie__time'>27 минут</p>
        </div>
        <img
          src={posterOne}
          className='movie__picture'
          alt='Стоп-кадр фильма'
        />
        <button className='movie__button' type='button'></button>
      </div>
      <div className='movie__box'>
        <div className='movie__header'>
          <h4 className='movie__title'>Красотка</h4>
          <p className='movie__time'>27 минут</p>
        </div>
        <img
          src={posterTwo}
          className='movie__picture'
          alt='Стоп-кадр фильма'
        />
        <button
          className='movie__button movie__button_active'
          type='button'
        ></button>
      </div>
      <div className='movie__box'>
        <div className='movie__header'>
          <h4 className='movie__title'>Красотка</h4>
          <p className='movie__time'>27 минут</p>
        </div>
        <img
          src={posterOne}
          className='movie__picture'
          alt='Стоп-кадр фильма'
        />
        <button className='movie__button-save' type='button'>
          Сохранить
        </button>
      </div>
    </>
  );
}

export default MoviesCard;
