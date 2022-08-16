import React from "react";

import iconAccount from "../../images/icon_profile.svg";
import "./AccountButton.css";

function AccountButton() {
  return (
    <button className="account__button" type="submit">
      <img
        src={iconAccount}
        alt="Картинка аккаунта"
        className="account__button-icon"
      />
      <p className="account__button-text">Аккаунт</p>
    </button>
  );
}

export default AccountButton;
