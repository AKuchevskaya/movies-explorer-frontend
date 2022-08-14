import React from "react";
import { Link } from "react-router-dom";

import menu from '../../images/icon_menu.svg';
import './Header.css';
import Logo from "../Logo/Logo";
import AccountButton from "../AccountButton/AccountButton";



function Header() {
    return (
        <header className="header">

                    <Logo />

                <div className="header__box">
               
                   
                        <Link className="header__link" to="signup">
                            <p className="header__registration">Регистрация</p>
     
                        </Link>
                    
                
                    <Link className="header__link" to="signin">
                        <p className="header__autorization">Войти</p>
                    </Link>
                
                </div>
                <div className="header__box_check">
                    <button className="header__link_check">
                        <p className="header__movies">Фильмы</p>
                    </button>
                    <button className="header__link_check">
                        <p className="header__saved-movies">Сохраненные фильмы</p>
                    </button>
                    <AccountButton />
                </div>
                <button className="header__menu">
                <img src={menu} alt="Логотип меню" className="header__menu-icon" />
                </button>
    </header>
    );
}

export default Header;