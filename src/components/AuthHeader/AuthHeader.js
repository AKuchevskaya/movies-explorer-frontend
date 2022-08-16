import { React, useState } from "react";
import { Link } from 'react-router-dom';

import './AuthHeader.css';
import Logo from "../Logo/Logo";
import AccountButton from "../AccountButton/AccountButton";
import Navigation from "../Navigation/Navigation";

function AuthHeader() {
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const openMenu = () => {
    setIsOpenedMenu(true);
  };
  const closeMenu = () => {
    setIsOpenedMenu(false);
  };
    return (
        <div className="authorization__header">
            <Logo />
            <div className="header__box_check">
                <Link to="/movies" className="header__link_check" type="submit">
                    <p className="header__movies">Фильмы</p>
                </Link>
                <Link to="/saved-movies" className="header__link_check" type="submit">
                    <p className="header__saved-movies">Сохраненные фильмы</p>
                </Link>
                <AccountButton />
            </div>
            <button className="header__menu" type="submit" onClick={openMenu}>
                {/* <img src={menu} alt="Логотип меню" className="header__menu-icon" /> */}
            </button>
        {<Navigation isOpen={isOpenedMenu} onClose={closeMenu}/>}
        
      
        </div>
    );
}

export default AuthHeader;