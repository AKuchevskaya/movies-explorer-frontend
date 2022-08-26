import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import AuthHeader from "../AuthHeader/AuthHeader";

import "./Profile.css";

function Profile({ signOut, handleUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleChangeName(e) {
    const input = e.target;

    setName(input.value);
  }
  function handleChangeEmail(e) {
    const input = e.target;

    setEmail(input.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    handleUpdateUser({
      name: name,
      email: email,
    });
  }
  return (
    <>
      <AuthHeader />
      <main className='account'>
        <div className='account__content'>
          <p className='account__title'>Привет, {currentUser.name}!</p>
          <form onSubmit={handleSubmit} className='account__form'>
            <label className='account__form-label' htmlFor='name'>
              <p className='account__label-text'>Имя</p>
              <input
                className='account__form-input'
                placeholder='Введите свое имя'
                id='name'
                name='text'
                type='text'
                onChange={handleChangeName}
                value={name || ""}
                defaultValue={currentUser.name}
                minLength={2}
                maxLength={30}
                required
              />
            </label>
            <label className='account__form-label' htmlFor='email'>
              <p className='account__label-text'>E-mail</p>
              <input
                className='account__form-input'
                placeholder='Введите свой email'
                id='email'
                name='email'
                type='email'
                onChange={handleChangeEmail}
                value={email || ""}
                defaultValue={currentUser.email}
                minLength={2}
                maxLength={30}
                required
              />
            </label>

            <button className='account__enter' type='submit'>
              Редактировать
            </button>
          </form>
          <div className='account__buttons'>
            <Link
              to='/'
              onClick={signOut}
              className='account__exit'
              type='submit'
            >
              Выйти из аккаунта
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
