import { React, useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import AuthHeader from "../AuthHeader/AuthHeader";
import Footer from "../Footer/Footer";

function Movies({
  moviesFromApi,
  isPreloader,
  likedMovies,
  addLikedMovie,
  handleLikeMovie,
  handleDeleteMovie,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [movies, setMovies] = useState([]);
  const [valueInputSearchForm, setValueInputSearchForm] = useState("");
  const [notFoundMessage, setNotFoundMessage] = useState("");
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(
    (e) => {
      !valueInputSearchForm ? setIsValid(false) : setIsValid(true);
    },
    [valueInputSearchForm]
  );
  useEffect(() => {
    !isValid
      ? setNotFoundMessage("Для начала поиска введите запрос")
      : setNotFoundMessage("");
  }, [isValid]);
  // меняем значение нажатия кнопки поиска
  const changeSearchButtonState = () => {
    setIsSearchButtonClicked(!isSearchButtonClicked);
  };
  // при отрисовке страницы достаем данные из локольного хранилиша
  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem("searchList")));
    setValueInputSearchForm(JSON.parse(localStorage.getItem("seatchInput")));
    setIsChecked(JSON.parse(localStorage.getItem("isChecked")));
  }, []);

  const handleInput = (e) => {
    setValueInputSearchForm(e.target.value);
  };

  // фильтруем в соответствии с запросом и положением переключателя короткометражек
  const filterMovies = () => {
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
      setMovies(filteredMovies);
      localStorage.setItem("seatchInput", JSON.stringify(valueInputSearchForm));
      localStorage.setItem("isChecked", JSON.stringify(isChecked));
      localStorage.setItem("searchList", JSON.stringify(filteredMovies));
    } else {
      setMovies(shortMovies);
      localStorage.setItem("seatchInput", JSON.stringify(valueInputSearchForm));
      localStorage.setItem("isChecked", JSON.stringify(isChecked));
      localStorage.setItem("searchList", JSON.stringify(shortMovies));
    }
  };

  // меняем значение переключателя фильтра короткометражек
  const changeFilterShortMovies = () => {
    setIsChecked(!isChecked);
  };

  // запускаем фильтрацию по нажатию кнопки найти, сохраняем результат поиска и запрос в локальное хранилище
  const handleSearch = (e) => {
    e.preventDefault();
    filterMovies();
  };

  return (
    <>
      <AuthHeader />
      <main className='movies__container'>
        <SearchForm
          isValid={isValid}
          valueInputSearchForm={valueInputSearchForm}
          handleInput={handleInput}
          handleSearch={handleSearch}
          changeSearchButtonState={changeSearchButtonState}
          changeFilterShortMovies={changeFilterShortMovies}
        />
        {isPreloader && <Preloader />}
        <span className='movies__container-error'>{notFoundMessage}</span>
        {movies ? (
          <MoviesCardList
            movies={movies}
            likedMovies={likedMovies}
            addLikedMovie={addLikedMovie}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
        ) : null}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
