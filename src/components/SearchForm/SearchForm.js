import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  isValid,
  changeSearchButtonState,
  handleSearch,
  handleInput,
  valueInputSearchForm,
  changeFilterShortMovies,
}) {
  
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
        >
        </input>
        <button
        onClick={changeSearchButtonState}
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
