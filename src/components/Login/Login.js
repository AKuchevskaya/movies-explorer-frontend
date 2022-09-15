import React from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/Validation";

import "./Login.css";
import Logo from "../Logo/Logo";

function Login({ handleLogin, errorResult }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(values);
  };

  return (
    <div className='login'>
      <Logo />
      <p className='login__title'>Рады видеть!</p>
      <form onSubmit={handleSubmit} className='form'>
        <label className='form__data' htmlFor='email'>
          E-mail
        </label>
        <input
          onChange={handleChange}
          className='form__input'
          id='email'
          name='email'
          type='email'
          value={values.email || ""}
          minLength={2}
          maxLength={30}
          required
        />
        <span className='form__input-error'>{errors.email}</span>
        <label className='form__data' htmlFor='password'>
          Пароль
        </label>
        <input
          onChange={handleChange}
          className='form__input'
          placeholder=' '
          id='password'
          name='password'
          type='password'
          value={values.password || ""}
          minLength={2}
          required
        />
        <span className='form__input-error'>{errors.password}</span>
        {errorResult && (
          <span className='form__input-error'>{errorResult}</span>
        )}

        <button
          className={`${
            !isValid ? "login__button login__button_disebled" : "login__button"
          }`}
          type='submit'
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
      <p className='login__question'>
        Ещё не зарегистрированы?
        <Link className='login__link' to='/signup'>
          Регистрация
        </Link>
      </p>
    </div>
  );
}

export default Login;
