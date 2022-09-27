import React, { useContext, useState, useCallback, useEffect } from "react";
import { CurrentDataContext } from "../../contexts/CurrentDataContext";
import AuthHeader from "../AuthHeader/AuthHeader";
import Preloader from "../Preloader/Preloader";
import { regexName, regexEmail, errorRegexName, errorRegexEmail } from "../../utils/constants";
import "./Profile.css";

function Profile({ isPreloader, errorResult, handleUpdateUser, signOut }) {
  const currentData = useContext(CurrentDataContext);

  const [values, setValues] = useState(currentData);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const isCorrectRedact =
    (values.name !== currentData.name || values.email !== currentData.email) &&
    regexName.test(values.name) &&
    regexEmail.test(values.email);

  useEffect(() => {
    isCorrectRedact ? setIsValid(true) : setIsValid(false);
  }, [isCorrectRedact, values]);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newErrors = {}, newIsValid = false) => {
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setErrors, setIsValid]
  );

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setValues({ ...currentData, name: values.name, email: values.email });
    return resetForm();
  }, [currentData]);

  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    isValid && handleUpdateUser(values);
  };
  return (
    <>
      <AuthHeader />
      {isPreloader && <Preloader />}
      <main className='account'>
        <div className='account__content'>
          <p className='account__title'>Привет, {currentData.name}!</p>
          <form onSubmit={handleSubmit} className='account__form'>
            <label className='account__form-label' htmlFor='name'>
              <p className='account__label-text'>Имя</p>
              <input
                className={`${
                  !isValid
                    ? "account__form-input account__style-error"
                    : "account__form-input"
                }`}
                onChange={handleChange}
                id='name'
                name='name'
                type='text'
                value={values.name || ""}
                minLength={2}
                maxLength={30}
                required
              />
            </label>
            <label className='account__form-label' htmlFor='email'>
              <p className='account__label-text'>E-mail</p>
              <input
                className={`${
                  !isValid
                    ? "account__form-input account__style-error"
                    : "account__form-input"
                }`}
                id='email'
                name='email'
                type='email'
                onChange={handleChange}
                value={values.email || ""}
                minLength={2}
                maxLength={30}
                required
              />
            </label>

            <span className='account__form-error'>
              {!regexName.test(values.name)
                ? errorRegexName
                : errors.name || ""}
            </span>
            <span className='account__form-error'>
              {!regexEmail.test(values.email)
                ? errorRegexEmail
                : errors.email || ""}
            </span>
            {errorResult !== "" && (
              <span className='account__form-error'>{errorResult}</span>
            )}

            <button
              className={`${
                !isValid
                  ? "account__enter account__style-error"
                  : "account__enter"
              }`}
              type='submit'
              disabled={!isValid}
            >
              Редактировать
            </button>
          </form>
          <div className='account__buttons'>
            <button onClick={signOut} className='account__exit' type='submit'>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
