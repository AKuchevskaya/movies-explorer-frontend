import React, { useEffect } from "react";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, message }) {
    useEffect(() => {
        if (!isOpen) {
          return;
        }
    
        function handleEsc(e) {
          if (e.key === "Escape") {
            onClose();
          }
        }
        function hundleClick(evt) {
          if (evt.target.classList.contains("popup_opened")) {
            onClose();
          }
        }
    
        document.addEventListener("keydown", handleEsc);
        document.addEventListener("click", hundleClick);
        return () => {
          document.removeEventListener("keydown", handleEsc);
          document.removeEventListener("click", hundleClick);
        };
      }, [isOpen]);
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ''} `}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        
        <p className="popup__title">{message}</p>
      </div>
    </div>
  );
}
export default InfoTooltip;