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
  const [isShort, setIsShort] = useState(null);
  const [movies, setMovies] = useState([]);
  const [valueInputSearchForm, setValueInputSearchForm] = useState("");
  const [validationMessage, setValidationFoundMessage] = useState("");
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const moviesFromApi = JSON.parse(localStorage.getItem("moviesFromApi"));

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
    },
    [valueInputSearchForm]
  );
  // меняем значение нажатия кнопки поиска
  const changeSearchButtonState = () => {
    setIsSearchButtonClicked(!isSearchButtonClicked);
    localStorage.setItem("searchInput", JSON.stringify(valueInputSearchForm));
  };
  // фильтруем в соответствии с запросом и положением переключателя короткометражек
  const filterMovies = (valueInputSearchForm) => {
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

    if (isShort === false) {
      if (filteredMovies.length === 0) {
        setValidationFoundMessage(
          "Поиск не дал результатов, попробуйте еще раз"
        );
        setMovies([]);
        localStorage.setItem("searchList", JSON.stringify([]));
      } else {
        setMovies(filteredMovies);
        setValidationFoundMessage("");
        localStorage.setItem("searchList", JSON.stringify(filteredMovies));
        localStorage.setItem("isShort", JSON.stringify(false));
      }
    } else if (isShort === true) {
      if (shortMovies.length === 0) {
        setValidationFoundMessage(
          "Поиск не дал результатов, попробуйте еще раз"
        );
        setMovies([]);
        localStorage.setItem("searchList", JSON.stringify(shortMovies));
      } else {
        setMovies(shortMovies);
        setValidationFoundMessage("");
        localStorage.setItem("searchList", JSON.stringify(shortMovies));
        localStorage.setItem("isShort", JSON.stringify(true));
      }
    }
  };

  // меняем значение переключателя фильтра короткометражек
  const changeFilterShortMovies = () => {
    setIsShort(!isShort);
  };

  // запускаем фильтрацию по нажатию кнопки найти, сохраняем результат поиска и запрос в локальное хранилище
  const handleSearch = (e) => {
    e.preventDefault();
    localStorage.getItem("moviesFromApi") &&
      isSearchButtonClicked &&
      filterMovies(valueInputSearchForm);
  };

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem("searchList")) || []);
    setValueInputSearchForm(
      JSON.parse(localStorage.getItem("searchInput")) || ""
    );
    setIsShort(JSON.parse(localStorage.getItem("isShort")) || false);
  }, []);
  
  useEffect(() => {
    localStorage.getItem("searchList") && filterMovies(valueInputSearchForm);
  }, [isShort]);

  return (
    <main className='movies__container'>
      <AuthHeader />
      <SearchForm
        isValid={isValid}
        isShort={isShort}
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

      {movies && (
        <MoviesCardList
          movies={movies}
          likedMovies={likedMovies}
          addLikedMovie={addLikedMovie}
          handleLikeMovie={handleLikeMovie}
          handleDeleteMovie={handleDeleteMovie}
        />
      )}

      <Footer />
    </main>
  );
}

export default Movies;
