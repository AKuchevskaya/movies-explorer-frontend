import React from "react";
import { NavLink } from 'react-router-dom';

import iconClose from '../../images/icon_close.svg';
import './Navigation.css';
import AccountButton from "../AccountButton/AccountButton";

function Navigation({isOpen, onClose}) {
    return (       
                <nav className={`nav__menu ${isOpen ? 'nav__menu_opened' : ''}`}>
                    <div className="nav__container">
                <button className="nav__close" type="submit" onClick={onClose}>
                <img src={iconClose} alt="Кнопка закрытия" className="nav__close-icon" />
                </button>
                    <NavLink exact to="/" activeClassName="nav__link_active" className="nav__link">Главная</NavLink>
                    <NavLink to="/movies" activeClassName="nav__link_active" className="nav__link">Фильмы</NavLink>
                    <NavLink to="/saved-movies" activeClassName="nav__link_active" className="nav__link">Сохраненные фильмы</NavLink>
                    <AccountButton />
                    </div>
                </nav>
    );
}

export default Navigation;