import { React, useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import AuthHeader from "../AuthHeader/AuthHeader";
import Footer from "../Footer/Footer";

function Movies({
  isPreloader,
  likedMovies,
  addLikedMovie,
  handleLikeMovie,
  handleDeleteMovie,
}) {
  const [isChecked, setIsChecked] = useState(
    JSON.parse(localStorage.getItem("isChecked"))
  );
  const [movies, setMovies] = useState(
    [JSON.parse(localStorage.getItem("moviesFromApi"))] || []
  );
  const [valueInputSearchForm, setValueInputSearchForm] = useState(
    JSON.parse(localStorage.getItem("searchInput")) || ""
  );
  const [validationMessage, setValidationFoundMessage] = useState("");
  const [message, setMessage] = useState("");
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    !isValid
      ? setValidationFoundMessage("Для начала поиска введите запрос")
      : setValidationFoundMessage("");
  }, [isValid]);

  const handleInput = (e) => {
    setValueInputSearchForm(e.target.value);
  };
  useEffect(
    (e) => {
      valueInputSearchForm === "" ? setIsValid(false) : setIsValid(true);
      setMessage("");
    },
    [valueInputSearchForm]
  );
  // меняем значение нажатия кнопки поиска
  const changeSearchButtonState = () => {
    setIsSearchButtonClicked(!isSearchButtonClicked);
  };
  // фильтруем в соответствии с запросом и положением переключателя короткометражек
  const filterMovies = () => {
    const moviesFromApi = JSON.parse(localStorage.getItem("moviesFromApi"));
    const filteredMovies = moviesFromApi
      .filter((i) => {
        return i.nameRU
          .toLowerCase()
          .includes(valueInputSearchForm.toLowerCase());
      })
      .map((i) => i);

    const shortMovies = filteredMovies
      .filter((i) => {
        return i.duration < 40;
      })
      .map((i) => i);

    if (!isChecked) {
      !filteredMovies ? setMessage(message) : setMovies(filteredMovies);
      localStorage.setItem("searchList", JSON.stringify(filteredMovies));
      localStorage.setItem("isChecked", JSON.stringify(isChecked));
      localStorage.setItem("searchInput", JSON.stringify(valueInputSearchForm));
    } else {
      !shortMovies ? setMessage(message) : setMovies(shortMovies);
      localStorage.setItem("searchList", JSON.stringify(shortMovies));
      localStorage.setItem("isChecked", JSON.stringify(isChecked));
      localStorage.setItem("searchInput", JSON.stringify(valueInputSearchForm));
    }
  };

  // меняем значение переключателя фильтра короткометражек
  const changeFilterShortMovies = () => {
   
    setIsChecked(!isChecked);
  };

  // запускаем фильтрацию по нажатию кнопки найти, сохраняем результат поиска и запрос в локальное хранилище
  const handleSearch = (e) => {
    e.preventDefault();
    localStorage.getItem("moviesFromApi") &&
      isSearchButtonClicked &&
      filterMovies();
  };

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem("searchList")));
    setValueInputSearchForm(JSON.parse(localStorage.getItem("searchInput")));
    setIsChecked(JSON.parse(localStorage.getItem("isChecked")));
  }, []);

  // // при отрисовке страницы достаем данные из локольного хранилища
  //  useEffect(() => {

  //  }, []);
  useEffect(() => {
    if (movies.length === 0) {
      setMessage("Поиск не дал результатов, попробуйте еще раз");
    } else setMessage("");
  }, [movies]);
  useEffect(() => {
    filterMovies();
  }, [isChecked]);
  return (
    <>
      <AuthHeader />
      <main className='movies__container'>
        <SearchForm
          isValid={isValid}
          isChecked={isChecked}
          valueInputSearchForm={valueInputSearchForm}
          handleInput={handleInput}
          handleSearch={handleSearch}
          changeSearchButtonState={changeSearchButtonState}
          changeFilterShortMovies={changeFilterShortMovies}
        />
        {isPreloader && <Preloader />}

        {validationMessage && (
          <span className='movies__container-error'>{validationMessage}</span>
        )}
        {message && <span className='movies__container-error'>{message}</span>}

        {movies && (
          <MoviesCardList
            movies={movies}
            likedMovies={likedMovies}
            addLikedMovie={addLikedMovie}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
