import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import bestFilmsList from "../../utils/bestFilmsList";
import AuthHeader from "../AuthHeader/AuthHeader";
import Footer from "../Footer/Footer";

function SavedMovies({ loggedIn }) {
  return (
    <>
      <AuthHeader />
      <main className='bestmovie__container'>
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList movies={bestFilmsList} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
