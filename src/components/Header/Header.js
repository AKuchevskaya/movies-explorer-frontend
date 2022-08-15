import React from "react";
import { Link } from "react-router-dom";

import './Header.css';
import Logo from "../Logo/Logo";

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
        </header>
    );
}

export default Header;