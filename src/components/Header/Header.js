import React from "react";
// import { Link } from "react-router-dom";

import logo from '../../images/logo_smile.svg';
import iconProfile from '../../images/icon_profile.svg';
import menu from '../../images/icon_menu.svg';
import './Header.css';



function Header() {
    return (
        <header className="header">

                    <img src={logo} alt="Логотип сайта" className="header__logo" />

                <div className="header__box">
               
                    <button className="header__link">
                        <p className="header__registration">Регистрация</p>
                    </button>
                
                    <button className="header__link">
                        <p className="header__autorization">Войти</p>
                    </button>
                
                </div>
                <div className="header__box_check">
                    <button className="header__link_check">
                        <p className="header__movies">Фильмы</p>
                    </button>
                    <button className="header__link_check">
                        <p className="header__saved-movies">Сохраненные фильмы</p>
                    </button>
                    <button className="profile-button">
                    <img src={iconProfile} alt="Картинка аккаунта" className="profile-icon" />
                    <p className="profile-text">Аккаунт</p>
                    </button>
                </div>
                <button className="header__menu">
                <img src={menu} alt="Логотип меню" className="header__menu-icon" />
                </button>
               
            
    
 
    </header>
    );
}

export default Header;