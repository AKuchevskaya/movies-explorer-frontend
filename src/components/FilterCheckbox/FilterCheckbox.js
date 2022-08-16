import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className='checkbox__container'>
      <p class='checkbox__text'>Короткометражки</p>
      <label className='checkbox__switch' for='checkbox'>
        <input type='checkbox' id='checkbox' checked />
        <div className='checkbox__slider checkbox__round'></div>
      </label>
    </div>
  );
}

export default FilterCheckbox;
