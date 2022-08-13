import React from "react";
// import { Link } from "react-router-dom";

import webWord from '../../images/web_world.svg';
import './Promo.css';



function Promo() {
    return (
        <div className="promo">
            <img className="promo__image-web" src={webWord} alt="Картинка мира" />
            <h1 className="promo__title">
                Учебный проект студента факультета Веб-разработки.
            </h1>
            <p className="promo__subtitle">
                Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </p>
            <button className="promo__button">Узнать больше</button>

        </div>
    );
}

export default Promo;