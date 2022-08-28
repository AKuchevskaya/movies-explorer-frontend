import { React, useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
//import { useState } from "react";
import filmsList from "../../utils/filmsList";
import apiMovies from "../../utils/MoviesApi";
import Header from "../Header/Header";
import AuthHeader from "../AuthHeader/AuthHeader";
import Footer from "../Footer/Footer";

function Movies({
  loggedIn,
  moviesFromApi,
  valueInputSearchForm,

  handleInput,
}) {
  //   const [searchedMovies, setSearchedMovies] = useState([]);

  return (
    <>
      {loggedIn ? <AuthHeader /> : <Header />}
      <main className='movies__container'>
        <SearchForm
          valueInputSearchForm={valueInputSearchForm}
          handleInput={handleInput}
        />
        {/* <Preloader /> */}

        <MoviesCardList
          moviesFromApi={moviesFromApi}
          valueInputSearchForm={valueInputSearchForm}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
