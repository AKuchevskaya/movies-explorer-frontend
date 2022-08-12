import React from "react";

import iconProfile from '../../images/icon_profile.svg';
import iconClose from '../../images/icon_close.svg';
import './Navigation.css';



function Navigation() {
    return (       
                <nav className="nav__menu">
                <button className="nav__close">
                <img src={iconClose} alt="Кнопка закрытия" className="nav__close-icon" />
                </button>
                    <a className="nav__link">Главная</a>
                    <a className="nav__link">Фильмы</a>
                    <a className="nav__link">Сохраненные фильмы</a>
                    <button className="profile-button">
                        <img src={iconProfile} alt="Картинка аккаунта" className="profile-icon" />
                        <p className="profile-text">Аккаунт</p>
                    </button>
                </nav>
            
    

    );
}

export default Navigation;