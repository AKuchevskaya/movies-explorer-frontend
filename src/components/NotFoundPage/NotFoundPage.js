import React from "react";
import "./NotFoundPage.css";
import { useHistory } from "react-router-dom";

function NotFoundPage() {
  const history = useHistory();
  return (
    <div className='error'>
      <div className='error__message'>
        <p className='error__code'>404</p>
        <p className='error__text'>Страница не найдена</p>
      </div>
      <button
        className='error__link'
        onClick={() => history.goBack()}
      >
        Назад
      </button>
    </div>
  );
}

export default NotFoundPage;

// проверить ...loggedIn
