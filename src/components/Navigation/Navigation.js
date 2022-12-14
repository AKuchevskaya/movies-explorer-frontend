import React from "react";
import { NavLink } from "react-router-dom";

import iconClose from "../../images/icon_close.svg";
import "./Navigation.css";
import AccountButton from "../AccountButton/AccountButton";

function Navigation({ isOpen, onClose }) {
  return (
    <div className={`nav__container ${isOpen ? "nav__container_opened" : ""}`}>
      <div className='nav__overlay'></div>
      <nav className={`nav__menu ${isOpen ? "nav__menu_opened" : ""}`}>
        <button className='nav__close' type='button' onClick={onClose}>
          <img
            src={iconClose}
            alt='Кнопка закрытия'
            className='nav__close-icon'
          />
        </button>
        <div className='nav__links'>
          <NavLink
            exact
            to='/'
            activeClassName='nav__link_active'
            className='nav__link'
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            activeClassName='nav__link_active'
            className='nav__link'
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            activeClassName='nav__link_active'
            className='nav__link'
          >
            Сохраненные фильмы
          </NavLink>
        </div>
        <AccountButton />
      </nav>
    </div>
  );
}

export default Navigation;
