import React from "react";
// import { Link } from "react-router-dom";

import "./Techs.css";

function Techs() {
  return (
    <div className="content techs__content">
      <article className="content__text">
        <h2 className="content__title">Технологии</h2>
        <ul className="techs__list">
          <li>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__discription">
              На курсе веб-разработки мы освоили технологии, которые применили в
              дипломном проекте.
            </p>
          </li>
        </ul>
      </article>
      <ul className="techs__block">
        <li>
          <p className="techs__item">HTML</p>
        </li>
        <li>
          <p className="techs__item">CSS</p>
        </li>
        <li>
          <p className="techs__item">JS</p>
        </li>
        <li>
          <p className="techs__item">React</p>
        </li>
        <li>
          <p className="techs__item">Git</p>
        </li>
        <li>
          <p className="techs__item">Express.js</p>
        </li>
        <li>
          <p className="techs__item">mongoDB</p>
        </li>
      </ul>
    </div>
  );
}

export default Techs;
