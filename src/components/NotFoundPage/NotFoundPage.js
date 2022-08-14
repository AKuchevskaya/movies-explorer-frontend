import React from "react";
import './NotFoundPage.css';
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="error">
            <div className="error__message">
                <p className="error__code">404</p>
                <p className="error__text">Страница не найдена</p>
            </div>   
            <Link className="link" to="/">Назад</Link>
        </div>
    );
}

export default NotFoundPage;