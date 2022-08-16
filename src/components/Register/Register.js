import React from "react";
import { Link } from "react-router-dom";

import "./Register.css";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";

function Register() {
  return (
    <div className='register'>
      <Logo />
      <p className='register__title'>Добро пожаловать!</p>

      <Form>
        <label className='form__data' htmlFor='name'>
          Имя
        </label>
        <input
          className='form__input'
          placeholder='Введите свое имя'
          id='name'
          name='text'
          type='text'
          value='Виталий'
          minLength={2}
          maxLength={30}
          required
        />
        <span className='form__input-error'></span>
      </Form>
      <button className='register__button' type='submit'>
        Зарегистрироваться
      </button>
      <p className='register__question'>
        Уже зарегистрированы?
        <Link className='register__link' to='/signin'>
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
