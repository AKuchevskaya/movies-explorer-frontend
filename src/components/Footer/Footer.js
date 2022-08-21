import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer__container'>
      <p className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__columns'>
        <p class='footer__copyright'>&copy;2022</p>
        <ul className='footer__links'>
          <li className='footer__link-style'>
            <a
              className='footer__link'
              href='https://practicum.yandex.ru'
              rel='noreferrer'
              target='_blank'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__link-style'>
            <a
              className='footer__link'
              href='https://github.com'
              rel='noreferrer'
              target='_blank'
            >
              GitHub
            </a>
          </li>
          <li className='footer__link-style'>
            <a
              className='footer__link'
              href='https://vk.com'
              rel='noreferrer'
              target='_blank'
            >
              VKontakte
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
