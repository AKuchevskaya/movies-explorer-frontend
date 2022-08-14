import React from "react";

import iconClose from '../../images/icon_close.svg';
import './Navigation.css';
import AccountButton from "../AccountButton/AccountButton";

function Navigation() {
    return (       
                <nav className="nav__menu">
                <button className="nav__close">
                <img src={iconClose} alt="Кнопка закрытия" className="nav__close-icon" />
                </button>
                    <a className="nav__link">Главная</a>
                    <a className="nav__link">Фильмы</a>
                    <a className="nav__link">Сохраненные фильмы</a>
                    <AccountButton />
                </nav>
            
    

    );
}

export default Navigation;