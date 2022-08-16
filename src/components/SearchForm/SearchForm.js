import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className='searchform'>
      <div className='searchform__search'>
        <input
          placeholder='Фильм'
          className='searchform__input'
          type='search'
          required
        ></input>
        <button className='searchform__button'>Найти</button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
