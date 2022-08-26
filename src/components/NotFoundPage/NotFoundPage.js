import React from "react";
import "./NotFoundPage.css";
import { Link, Redirect } from "react-router-dom";

function NotFoundPage({ loggedIn }) {
  return (
    <div className='error'>
      <div className='error__message'>
        <p className='error__code'>404</p>
        <p className='error__text'>Страница не найдена</p>
      </div>
      <Link
        className='error__link'
        {...(loggedIn ? <Redirect to='/' /> : <Redirect to='/signin' />)}
      >
        Назад
      </Link>
    </div>
  );
}

export default NotFoundPage;

// проверить ...loggedIn
