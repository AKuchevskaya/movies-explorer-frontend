import React from "react";

import iconAccount from '../../images/icon_profile.svg';
import './AccountButton.css';

function AccountButton() {
    return (
        <button className="account-button">
            <img src={iconAccount} alt="Картинка аккаунта" className="account-icon" />
            <p className="account-text">Аккаунт</p>
        </button>           
    );
}

export default AccountButton;