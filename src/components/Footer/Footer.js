import React from "react";
// import { Link } from "react-router-dom";

import './Footer.css';
//import photoProfile from '../../images/photo_profile.jpg';
function Footer() {
    return (
        <footer className="footer">
            <section className="footer__container">
                <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__columns">
                <p class="footer__copyright">&copy;2022</p>
                <ul className="profile__social-pages footer__links">
                    <li className="profile__social-page footer__link">
                        <a>Яндекс.Практикум</a>
                    </li>
                    <li className="profile__social-page footer__link">
                        <a>GitHub</a>
                    </li>
                     <li className="profile__social-page footer__link">
                        <a>VKontakte</a>
                    </li>
                </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer;