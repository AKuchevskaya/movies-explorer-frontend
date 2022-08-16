import React from "react";

import "./Form.css";

function Form({ children }) {
  return (
    <form className='form'>
      {children}
      <label className='form__data' htmlFor='email'>
        E-mail
      </label>
      <input
        className='form__input'
        placeholder='Введите свой email'
        id='email'
        name='email'
        type='email'
        value='pochta@yandex.ru'
        minLength={2}
        maxLength={30}
        required
      />
      <span className='form__input-error'></span>
      <label className='form__data' htmlFor='password'>
        Пароль
      </label>
      <input
        className='form__input'
        placeholder=' '
        id='password'
        name='password'
        type='password'
        value='••••••••••••••'
        minLength={2}
        required
      />
      <span className='form__input-error'>Что-то пошло не так...</span>
    </form>
  );
}

export default Form;
