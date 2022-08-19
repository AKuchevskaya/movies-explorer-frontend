import React from "react";
import { Link } from "react-router-dom";

import iconAccount from "../../images/icon_profile.svg";
import "./AccountButton.css";

function AccountButton() {
  return (
    <>
    <Link className="account__link" to='/profile'>
      <img
        src={iconAccount}
        alt="Картинка аккаунта"
        className="account__link-icon"
      />
      <p className="account__link-text">Аккаунт</p>
    </Link>
    </>
    
  );
}

export default AccountButton;
