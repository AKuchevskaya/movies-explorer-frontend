import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";
function Footer() {
  const location = useLocation();
  return (
    <section
      className={`footer__container 
    ${location.pathname === "/" ? "footer__container_main" : ""}`}
    >
      <p className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__columns'>
        <p class='footer__copyright'>&copy;2022</p>
        <ul className='profile__social-pages footer__links'>
          <li className='profile__social-page footer__link'>
            <a target='_blank'>Яндекс.Практикум</a>
          </li>
          <li className='profile__social-page footer__link'>
            <a target='_blank'>GitHub</a>
          </li>
          <li className='profile__social-page footer__link'>
            <a target='_blank'>VKontakte</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
