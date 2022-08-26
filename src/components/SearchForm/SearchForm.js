import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

function SearchForm({ valueInputSearchForm, handleInput }) {
  const handleSearch = (e) => {
    e.preventDefault();
    
    
  };
  // ---------фильтр по короткометражкам--------
  const [isChecked, setIsChecked] = useState(true);
  const switchOffFilter = () => {
    setIsChecked(!isChecked);
  };
  //------------------------------------------
  return (
    <form onSubmit={handleSearch} className='searchform'>
      <div className='searchform__search'>
        <input
          onChange={handleInput}
          
          placeholder='Фильм'
          className='searchform__input'
          type='search'
          value={valueInputSearchForm}
          required
        ></input>
        <button type='submit' className='searchform__button'>
          Найти
        </button>
      </div>
      <FilterCheckbox isChecked={isChecked} switchOffFilter={switchOffFilter} />
    </form>
  );
}

export default SearchForm;
