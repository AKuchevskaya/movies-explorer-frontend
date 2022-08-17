import React from "react";

import AuthHeader from "../AuthHeader/AuthHeader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";
import filmsList  from '../../utils/filmsList';

function SavedMovies() {
  return (
    <div className='bestmovie__container'>
      <AuthHeader />
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList movies={filmsList} />
      <Footer />
    </div>
  );
}

export default SavedMovies;
