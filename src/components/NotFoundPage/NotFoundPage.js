import React from "react";
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <div className="error">
            <div className="error__message">
                <p className="error__code">404</p>
                <p className="error__text">Страница не найдена</p>
            </div>   
            <a className="link">Назад</a>
        </div>
    );
}

export default NotFoundPage;