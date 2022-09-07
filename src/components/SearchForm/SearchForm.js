import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState, useEffect } from "react";

function SearchForm({
  handleSearch,
  handleInput,
  valueInputSearchForm,
  changeFilterShortMovies,
}) {
  const [isValid, setIsValid] = useState(false);

  const searchMovies = () => {
    handleSearch();
  };
  useEffect(
    (e) => {
      !valueInputSearchForm ? setIsValid(false) : setIsValid(true);
    },
    [valueInputSearchForm]
  );
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
        <button
          type='submit'
          disabled={!isValid}
          className={`${
            !isValid
              ? "searchform__button searchform__button_disebled"
              : "searchform__button"
          }`}
        >
          Найти
        </button>
      </div>

      <FilterCheckbox changeFilterShortMovies={changeFilterShortMovies} />
    </form>
  );
}

export default SearchForm;
