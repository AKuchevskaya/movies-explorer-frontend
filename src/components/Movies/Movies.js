import React from "react";

import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import filmsList from "../../utils/filmsList";

function Movies() {
  return (
    <main className='movies__container'>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList movies={filmsList} />
    </main>
  );
}

export default Movies;
