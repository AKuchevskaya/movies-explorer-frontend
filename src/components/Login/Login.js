import React from "react";
import { Link } from "react-router-dom";

import './Login.css';
import Logo from "../Logo/Logo";
import Form from '../Form/Form';

function Login() {
    return (
        <div className="login">
            <Logo />
            <p className="login__title">Рады видеть!</p>
            <Form />
           
        <button className="login__button login__button" type="submit">
        Войти
        </button>
        <p className="login__question">
        Ещё не зарегистрированы?
          <Link className="login__link" to="/signup">
          Регистрация
          </Link>
        </p>
        </div>
    );
}

export default Login;