import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ changeFilterShortMovies, isShort }) {
 
  return (
    <div className='checkbox__container'>
      <p class='checkbox__text'>Короткометражки</p>
      <label className='checkbox__switch' forhtml='checkbox'>
        <input
          type='checkbox'
          id='checkbox'
          checked={isShort}
          onChange={changeFilterShortMovies}
        />
        <div className='checkbox__slider checkbox__round'></div>
      </label>
    </div>
  );
}

export default FilterCheckbox;
