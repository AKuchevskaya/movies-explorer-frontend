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
  const [isShort, setIsShort] = useState(false);
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [valueInputSearchForm, setValueInputSearchForm] = useState("");
  const [movies, setMovies] = useState([]);
  const [validationMessage, setValidationMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(
    (e) => {
      !valueInputSearchForm ? setIsValid(false) : setIsValid(true);
    },
    [valueInputSearchForm]
  );
  useEffect(() => {
   
    setMovies(likedMovies)
  }, [likedMovies]);

  useEffect(() => {
    !isValid
      ? setValidationMessage("Для начала поиска введите запрос")
      : setValidationMessage("");
  }, [isValid]);

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

    if (!isShort) {
      setMovies(filteredMovies);
    } else {
      setMovies(shortMovies);
    }
  };

  // меняем значение переключателя фильтра короткометражек
  const changeFilterShortMovies = () => {
    setIsShort(!isShort);
    
  };
  useEffect(() => {
    filterMovies();
  }, [isShort]);

  // запускаем фильтрацию по нажатию кнопки найти, сохраняем результат поиска и запрос в локальное хранилище
  const handleSearch = (e) => {
    e.preventDefault();
    filterMovies();
  };

  return (
    <main className='bestmovie__container'>
      <AuthHeader />
      
        <SearchForm
          isValid={isValid}
          valueInputSearchForm={valueInputSearchForm}
          handleInput={handleInput}
          handleSearch={handleSearch}
          changeSearchButtonState={changeSearchButtonState}
          isShort={isShort}
          changeFilterShortMovies={changeFilterShortMovies}
        />
        {isPreloader && <Preloader />}
        {(validationMessage) && <span className='movies__container-error'>{validationMessage}</span>}
        {movies ? (
          <MoviesCardList
            movies={movies}
            likedMovies={likedMovies}
            addLikedMovie={addLikedMovie}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
        ) : null}
     
      <Footer />
    </main>
  );
}

export default SavedMovies;
