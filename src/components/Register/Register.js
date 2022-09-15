import React from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/Validation";
import "./Register.css";
import Logo from "../Logo/Logo";
import Preloader from '../Preloader/Preloader';

function Register({ handleRegister, errorResult, isPreloader }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  const errorRegexName =
    "Используйте только латиницу, киррилицу, тире и пробел";
  const regex = /(^[а-яА-ЯЁёa-zA-Z\s-]+$)+/i;
  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister(values);
  };
  return (
    <div className='register'>
      <Logo />
      {isPreloader && <Preloader />}
      <p className='register__title'>Добро пожаловать!</p>
      <form onSubmit={handleSubmit} className='form'>
        <label className='form__data' htmlFor='name'>
          Имя
        </label>
        <input
          onChange={handleChange}
          className={`${!regex.test(values.name) ? 'form__input form__input-wrong' : 'form__input'}`}
          id='name'
          name='name'
          type='text'
          value={values.name || ""}
          minLength={2}
          maxLength={30}
          required
        />
        <span className='form__input-error'>
          {!regex.test(values.name) ? errorRegexName : (errors.name || "")}
        </span>

        <label className='form__data' htmlFor='email'>
          E-mail
        </label>
        <input
          onChange={handleChange}
          className={`${errors.email ? 'form__input form__input-wrong' : 'form__input'}`}
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
          className={`${errors.password ? 'form__input form__input-wrong' : 'form__input'}`}
          placeholder=' '
          id='password'
          name='password'
          type='password'
          value={values.password || ""}
          autoComplete='new-password'
          minLength={2}
          required
        />
        <span className='form__input-error'>{errors.password}</span>
        {errorResult && (
          <span className='form__input-error'>{errorResult}</span>
        )}
        <button
          className={`${
            !isValid || !regex.test(values.name)
              ? "register__button register__button_disebled"
              : "register__button"
          }`}
          type='submit'
          disabled={!isValid || !regex.test(values.name)}
        >
          Зарегистрироваться
        </button>
      </form>
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
