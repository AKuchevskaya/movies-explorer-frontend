import React from "react";

import AuthHeader from "../AuthHeader/AuthHeader";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";

function Movies() {
  return (
    <div className='movie__container'>
      <AuthHeader />
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default Movies;
