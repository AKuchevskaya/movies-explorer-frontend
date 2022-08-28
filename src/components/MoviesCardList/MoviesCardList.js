import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonMore from "../ButtonMore/ButtonMore";
import "./MoviesCardList.css";
import { useEffect, useState } from "react";

function MoviesCardList({ moviesFromApi, valueInputSearchForm }) {
  const [filteredMovies, setFilteredMovies] = useState([]);

//   const changeMoviesCardList = () => {
//     const filteredMovies = moviesFromApi.filter((i) =>
//     i.nameRU.toLowerCase().includes(valueInputSearchForm)
//    );
//    setFilteredMovies(filteredMovies)
//   }
// useEffect(() => {
//   changeMoviesCardList();
// },[valueInputSearchForm])

  // console.log("filteredMovies", filteredMovies);
  // //  const changeMovies = (moviesFromApi) => {
  //  console.log("moviesFromApi2", moviesFromApi);
  // //  //setSearchedMovies(filteredMovies);
  // //  }

  return (
    <>
      <div className='movies__list'>
        {moviesFromApi
          .map((movie) => (
            <MoviesCard movie={movie} key={movie.movieId} />
          ))}
      </div>
      <ButtonMore />
    </>
  );
}

export default MoviesCardList;
