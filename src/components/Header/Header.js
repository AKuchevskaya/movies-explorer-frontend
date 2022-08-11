import React from "react";
// import { Link } from "react-router-dom";

import logo from '../../images/logo_smile.svg';
import logoProfile from '../../images/icon_profile.svg';
import menu from '../../images/icon_menu.svg';
import iconClose from '../../images/icon_close.svg';
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
                    <button className="header__profile-button">
                    <img src={logoProfile} alt="Логотип аккаунта" className="header__profile" />
                    <p className="header__profile-text">Аккаунт</p>
                    </button>
                </div>
                <button className="header__menu">
                <img src={menu} alt="Логотип меню" className="header__menu-icon" />
                </button>
                <nav className="nav__menu">
                <button className="nav__close">
                <img src={iconClose} alt="Кнопка закрытия" className="nav__close-icon" />
                </button>
                    <a className="nav__link">Главная</a>
                    <a className="nav__link">Фильмы</a>
                    <a className="nav__link">Сохраненные фильмы</a>
                    <button className="header__profile-button">
                        <img src={logoProfile} alt="Логотип аккаунта" className="header__profile" />
                        <p className="header__profile-text">Аккаунт</p>
                    </button>
                </nav>
            
    
 
    </header>
    );
}

export default Header;