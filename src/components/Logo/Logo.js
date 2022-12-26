import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo_smile.svg";
import "./Logo.css";

function Logo() {
  return (
    <Link className='logo__link' to='/'>
      <img src={logo} alt='Логотип сайта' className='logo__image' />
    </Link>
  );
}

export default Logo;
