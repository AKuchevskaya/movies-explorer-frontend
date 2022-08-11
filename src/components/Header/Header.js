import React from "react";
// import { Link } from "react-router-dom";

import logo from '../../images/logo_smile.svg';
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
            
    
 
    </header>
    );
}

export default Header;