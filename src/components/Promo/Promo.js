import React from "react";

import webWord from "../../images/web_world.svg";
import "./Promo.css";

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
      <a className="promo__link" href="#project__block">
        Узнать больше
      </a>
    </div>
  );
}

export default Promo;
