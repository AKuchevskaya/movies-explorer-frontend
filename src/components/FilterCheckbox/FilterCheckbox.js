import React from "react";
import { useLocation } from "react-router-dom";
import "./FilterCheckbox.css";

function FilterCheckbox({ changeFilterShortMovies, isChecked }) {
  const location = useLocation();
 
  return (
    <div className='checkbox__container'>
      <p class='checkbox__text'>Короткометражки</p>
      <label className='checkbox__switch' forhtml='checkbox'>
        <input
          type='checkbox'
          id='checkbox'
          checked={location.pathname === "/movies" ? (JSON.parse(localStorage.getItem("isChecked"))): (isChecked)} 
          onChange={changeFilterShortMovies}
        />
        <div className='checkbox__slider checkbox__round'></div>
      </label>
    </div>
  );
}

export default FilterCheckbox;
