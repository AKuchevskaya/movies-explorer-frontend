import React from "react";
// import { Link } from "react-router-dom";

import webWord from '../../images/web_world.svg';
import './Main.css';



function Main() {
    return (
        <div className="main">
            <img className="main__image-web" src={webWord} alt="Картинка мира" />
            <h1 className="main__title">
                Учебный проект студента факультета Веб-разработки.
            </h1>
            <p className="main__subtitle">
                Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </p>
            <button className="main__button">Узнать больше</button>

        </div>
    );
}

export default Main;