import React from "react";
// import { Link } from "react-router-dom";

import './AboutMe.css';
import photoProfile from '../../images/photo_profile.jpg';
function AboutMe() {
    return (
        <section className="content profile__content">
        <article className="content__text">
            <h2 className="content__title">Студент</h2>
            <ul className="profile__container">
            <li>
                <img src={photoProfile} alt="Фото студента" className="profile__photo" />
                <h3 className="profile__name">Кучевская Алена</h3>
            </li>
            <li>
                <p className="profile__about">
                    Фронтенд-разработчик, 36 лет  занимаюсь фриланс-заказами.
                </p>
            </li>
            <li>
                <p className="profile__text">
                    Я родилась и живу в Москве, закончила факультет экономики и управления в МГИУ. У меня есть муж 
                    и трое детей. Я люблю свою семью, а ещё изучать что-то новое. Недавно решила испытать себя в новой области и начала кодить.
                    С 2007 года работаю в компании «Термика». После того, как прошла курс по веб-разработке,
                </p>
            </li>
            </ul>
        </article>
        <ul className="profile__social-pages">
            <li className="profile__social-page">
                <a target="_blank">GitHub</a>
            </li>
            <li className="profile__social-page">
                <a target="_blank">VKontakte</a>
            </li>
        </ul>
        </section>
    );
}

export default AboutMe;