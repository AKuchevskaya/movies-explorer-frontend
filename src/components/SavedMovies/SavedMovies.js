import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import AuthHeader from "../AuthHeader/AuthHeader";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  isPreloader,
  likedMovies,
  addLikedMovie,
  handleLikeMovie,
  handleDeleteMovie,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [valueInputSearchForm, setValueInputSearchForm] = useState("");
  const [movies, setMovies] = useState([]);
  const notFoundMessage = "Поиск не дал результата, введите другой запрос.";
  const [isValid, setIsValid] = useState(false);

  useEffect(
    (e) => {
      !valueInputSearchForm ? setIsValid(false) : setIsValid(true);
    },
    [valueInputSearchForm]
  );

  useEffect(() => {
    setMovies(likedMovies);
  }, [likedMovies]);

  // меняем значение нажатия кнопки поиска
  const changeSearchButtonState = () => {
    setIsSearchButtonClicked(!isSearchButtonClicked);
  };
  const handleInput = (e) => {
    setValueInputSearchForm(e.target.value);
  };
  // фильтруем в соответствии с запросом и положением переключателя короткометражек
  const filterMovies = () => {
    const filteredMovies = likedMovies
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
  useEffect(() => {
    isValid &&
    filterMovies()
  }, [isChecked]);
  // запускаем фильтрацию по нажатию кнопки найти, сохраняем результат поиска и запрос в локальное хранилище
  const handleSearch = (e) => {
    e.preventDefault();

    if (isSearchButtonClicked) {
      filterMovies();
    }
  };
  return (
    <>
      <AuthHeader />
      <main className='bestmovie__container'>
        <SearchForm
          isValid={isValid}
          valueInputSearchForm={valueInputSearchForm}
          handleInput={handleInput}
          handleSearch={handleSearch}
          changeSearchButtonState={changeSearchButtonState}
          changeFilterShortMovies={changeFilterShortMovies}
        />
        {!isValid && (
          <span className='movies__container-error'>
            Для начала поиска введите запрос
          </span>
        )}
        {isPreloader && <Preloader />}
        {movies ? (
          <MoviesCardList
            movies={movies}
            likedMovies={likedMovies}
            addLikedMovie={addLikedMovie}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
        ) : (
          notFoundMessage && (
            <span className='movies__container-error'>{notFoundMessage}</span>
          )
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
