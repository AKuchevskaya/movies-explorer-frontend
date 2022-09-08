import "./FilterCheckbox.css";

function FilterCheckbox({ changeFilterShortMovies }) {
 
  return (
    <div className='checkbox__container'>
      <p class='checkbox__text'>Короткометражки</p>
      <label className='checkbox__switch' forhtml='checkbox'>
        <input
          type='checkbox'
          id='checkbox'
          onChange={changeFilterShortMovies}
        />
        <div className='checkbox__slider checkbox__round'></div>
      </label>
    </div>
  );
}

export default FilterCheckbox;
