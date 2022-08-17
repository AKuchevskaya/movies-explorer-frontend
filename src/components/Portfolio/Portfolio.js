import React from "react";
// import { Link } from "react-router-dom";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section className='portfolio'>
      <ul className='portfolio__container'>
        <li className='portfolio__project-containerv'>
          <h3 className='portfolio__title'>Портфолио</h3>
        </li>
        <li className='portfolio__project-container'>
          <a className='portfolio__project-link' href='https://akuchevskaya.github.io/how-to-learn/' rel='noreferrer' target='_blank'>
            <p className='portfolio__project'>Статичный сайт</p>
            <p className='portfolio__project-symbol'>&#x2197;</p>
          </a>
        </li>
        <li className='portfolio__project-container'>
          <a className='portfolio__project-link' href='https://akuchevskaya.github.io/russian-travel/' rel='noreferrer' target='_blank'>
            <p className='portfolio__project'>Адаптивный сайт</p>
            <p className='portfolio__project-symbol'>&#x2197;</p>
          </a>
        </li>
        <li className='portfolio__project-container'>
          <a className='portfolio__project-link' href='https://mesto.kuchevskaya.nomoredomains.xyz' rel='noreferrer' target='_blank'>
            <p className='portfolio__project'>Одностраничное приложение</p>
            <p className='portfolio__project-symbol'>&#x2197;</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
