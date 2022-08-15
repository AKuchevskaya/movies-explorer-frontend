import React from "react";
import { Link } from 'react-router-dom';

import './Profile.css';
import AuthHeader from "../AuthHeader/AuthHeader";

function Profile() {
    return (
        <div className="account">
            <AuthHeader />
            <div className="account__content">
            <p className="account__title">Привет, Виталий!</p>
            <form className="account__form">
                
                    <label className="account__form-label" htmlFor='name'>
                    <p className="account__label-text">Имя</p>
                        <input
                            className="account__form-input"
                            placeholder="Введите свое имя"
                            id="name"
                            name="text"
                            type="text"
                            value='Виталий'
                            minLength={2}
                            maxLength={30}
                            required
                        />
                    </label>
                    <label className="account__form-label" htmlFor='email'>
                    <p className="account__label-text">E-mail</p>
                        <input
                            className="account__form-input"
                            placeholder="Введите свой email"
                            id="email"
                            name="email"
                            type="email"
                            value='pochta@yandex.ru'
                            minLength={2}
                            maxLength={30}
                            required
                        />   
                    </label>
            </form>
           
            <button className="account__enter" type="submit">
                Редактировать
            </button>
            <Link to="/" className="account__exit" type="submit">
                Выйти из аккаунта
            </Link>
            </div>
            
        </div>
    );
}

export default Profile;