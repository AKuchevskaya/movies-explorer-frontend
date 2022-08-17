import { useState } from "react";

import "./FilterCheckbox.css";

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className='checkbox__container'>
      <p class='checkbox__text'>Короткометражки</p>
      <label className='checkbox__switch' forhtml='checkbox'>
        <input type='checkbox' id='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <div className='checkbox__slider checkbox__round'></div>
      </label>
    </div>
  );
}

export default FilterCheckbox;
