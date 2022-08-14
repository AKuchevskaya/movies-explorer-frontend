import React from "react";

import logo from '../../images/logo_smile.svg';
import './Logo.css';

function Logo() {
    return (
        <img src={logo} alt="Логотип сайта" className="logo__image" />           
    );
}

export default Logo;