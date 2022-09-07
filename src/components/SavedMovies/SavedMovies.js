import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
//import bestFilmsList from "../../utils/bestFilmsList";
import AuthHeader from "../AuthHeader/AuthHeader";
import Footer from "../Footer/Footer";
import apiMain from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";


function SavedMovies({
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
  const handleInput = (e) => {
    setValueInputSearchForm(e.target.value);
  };

  const changeFilterShortMovies = () => {
    setIsChecked(!isChecked);
  };

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

    filteredMovies.lenght !== 0 || shortMovies.lenght !== 0
      ? isChecked
        ? setMovies(shortMovies)
        : setMovies(filteredMovies)
      : setNotFoundMessage(notFoundMessage);
  };

  useEffect(() => {
    filterMovies();
  }, [valueInputSearchForm, isChecked]);


  const handleSearch = (e) => {
    e.preventDefault();

    filterMovies();
    
  };
  return (
    <>
      <AuthHeader />
      <main className='bestmovie__container'>
        <SearchForm valueInputSearchForm={valueInputSearchForm}
          handleInput={handleInput}
          handleSearch={handleSearch}
          changeFilterShortMovies={changeFilterShortMovies}
          isChecked={isChecked}/>
        {isPreloader && <Preloader />}
        {movies.length !== 0 ? (
          <MoviesCardList
            movies={movies}
            
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
        ) : (
          <span className='movies__container-error'>{notFoundMessage}</span>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
