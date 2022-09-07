import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import AuthHeader from "../AuthHeader/AuthHeader";
import Footer from "../Footer/Footer";

function Movies({
  getMoviesFromApi,
  moviesFromApi,
  isPreloader,
  likedMovies,

  handleLikeMovie,
  handleDeleteMovie,
}) {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const [movies, setMovies] = useState([]);
  const [valueInputSearchForm, setValueInputSearchForm] = useState("");
  const [notFoundMessage, setNotFoundMessage] = useState(
    "Поиск не дал результата, введите другой запрос."
  );
  // при отрисовке страницы достаем данные из локольного хранилиша
  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem("searchList")));
    setValueInputSearchForm(JSON.parse(localStorage.getItem("seatchInput")));
    setIsChecked(JSON.parse(localStorage.getItem("isChecked")));
  }, []);

  // const changeMoviesOnPages = () => {
  //   location.pathname === "/saved-movies" ?
  //   setMovies(likedMovies)
  // }

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
      if (filteredMovies.lenght === 0) {
        setNotFoundMessage(notFoundMessage);
      } else {
        setMovies(filteredMovies);
        localStorage.setItem(
          "seatchInput",
          JSON.stringify(valueInputSearchForm)
        );
        localStorage.setItem("isChecked", JSON.stringify(isChecked));
        localStorage.setItem("searchList", JSON.stringify(filteredMovies));
      }
    } else {
      if (shortMovies.lenght === 0) {
        setNotFoundMessage(notFoundMessage);
      } else {
      
      setMovies(shortMovies);
      localStorage.setItem("isChecked", JSON.stringify(isChecked));}
      localStorage.setItem("searchList", JSON.stringify(shortMovies));

    }
  };

  // меняем значение переключателя фильтра короткометражек
  const changeFilterShortMovies = () => {
    setIsChecked(!isChecked);
    //filterMovies();
  };
  // запускаем фильтрацию когда меняется положение чекбокса короткометражек
  useEffect(() => {
    filterMovies();
  }, [valueInputSearchForm, isChecked]);

  // заменяем данные в локальном хранилище, когда меняются данные запроса и результат
  useEffect(() => {
    localStorage.setItem("seatchInput", JSON.stringify(valueInputSearchForm));
    localStorage.setItem("isChecked", JSON.stringify(isChecked));
    localStorage.setItem("searchList", JSON.stringify(movies));
  }, [valueInputSearchForm, movies, isChecked]);

  // запускаем фильтрацию по нажатию кнопки найти, сохраняем результат поиска и запрос в локальное хранилище
  const handleSearch = (e) => {
    e.preventDefault();
    // getMoviesFromApi();
    if (moviesFromApi) {
      filterMovies();
      
    }
  };

  return (
    <>
      <AuthHeader />
      <main className='movies__container'>
        <SearchForm
          valueInputSearchForm={valueInputSearchForm}
          handleInput={handleInput}
          handleSearch={handleSearch}
          changeFilterShortMovies={changeFilterShortMovies}
          isChecked={isChecked}
          
        />
        {isPreloader && <Preloader />}
        {movies ?
        (<MoviesCardList
          movies={movies}
          handleLikeMovie={handleLikeMovie}
          handleDeleteMovie={handleDeleteMovie}
        />)
        : (
          <span className='movies__container-error'>{notFoundMessage}</span>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
