import React from "react";

import "./AboutMe.css";
import photoProfile from "../../images/photo_profile.jpg";
function AboutMe() {
  return (
    <section className='profile__content content'>
      <article className='content__text'>
        <h2 className='content__title'>Студент</h2>
        <div className='profile__container'>
          <img
            src={photoProfile}
            alt='Фото студента'
            className='profile__photo'
          />
          <h3 className='profile__name'>Кучевская Алена</h3>
          <p className='profile__about'>
            Фронтенд-разработчик, 36 лет занимаюсь фриланс-заказами.
          </p>
          <p className='profile__text'>
            Я родилась и живу в Москве, закончила факультет экономики и
            управления в МГИУ. У меня есть муж и трое детей. Я люблю свою семью,
            а ещё изучать что-то новое. Недавно решила испытать себя в новой
            области и начала кодить. С 2007 года работаю в компании «Термика».
            После того, как прошла курс по веб-разработке,
          </p>
        </div>
      </article>
      <nav className='profile__social-pages'>
        <a
          className='profile__social-page profile__link'
          href='https://github.com/AKuchevskaya'
          rel='noreferrer'
          target='_blank'
        >
          GitHub
        </a>
        <a
          className='profile__social-page profile__link'
          href='https://vk.com/id1668434'
          rel='noreferrer'
          target='_blank'
        >
          VKontakte
        </a>
      </nav>
    </section>
  );
}

export default AboutMe;
