import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonMore from "../ButtonMore/ButtonMore";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  const movies = props.movies
  return (
    <>
      <div className='movies__container'>
        {movies.map((movie) => (
          <MoviesCard movie={movie} key={movie.movieId} />
        ))}
      </div>
      <ButtonMore />
    </>
  );
}

export default MoviesCardList;
