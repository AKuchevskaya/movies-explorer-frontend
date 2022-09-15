import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonMore from "../ButtonMore/ButtonMore";
import "./MoviesCardList.css";
import { useEffect, useState } from "react";
import useWindowSize from "../UseWindowSize/useWindowSize";

function MoviesCardList({
  movies,
  likedMovies,
  addLikedMovie,
  handleLikeMovie,
  handleDeleteMovie,
}) {
  const { width } = useWindowSize();
  const [showMoviesList, setShowMoviesList] = useState([]);
  const [amountMovies, setAmountMovies] = useState({ first: '', plus: '' });

  // меняем количество фильмов на странице и количество добавления фильмов по нажатию кнопки в зависимости от ширины страницы
  useEffect(() => {
    width > 1280
      ? setAmountMovies({ first: 12, plus: 3 })
      : width > 480
      ? setAmountMovies({ first: 8, plus: 2 })
      : setAmountMovies({ first: 5, plus: 2 });
  }, [width]);

  // отрисовываем фильмы в зависимости от длинны массива(количества фильмов, отвечающих запросу)
  useEffect(() => {
    movies.length > amountMovies.first
      ? setShowMoviesList(movies.slice(0, amountMovies.first).map((i) => i))
      : setShowMoviesList(movies);
//  }, [movies.length]);
}, [movies, amountMovies]);

  
// функция добавляет фильмы по нажатию на кнопку "Еще"
  const uploadMovies = () => {
    const newShowMoviesList = movies
      .slice(0, showMoviesList.length + amountMovies.plus)
      .map((i) => i);
    setShowMoviesList(newShowMoviesList);
  };
  return (
    <>
      <div className='movies__list'>
        {showMoviesList.map((movie) => (
          <MoviesCard
            movie={movie}
            
            key={movie.movieId}
            addLikedMovie={addLikedMovie}
            likedMovies={likedMovies}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
            showMoviesList={showMoviesList}
          />
        ))}
      </div>

      {movies.length > amountMovies.first &&
      movies.length !== showMoviesList.length ? (
        <ButtonMore uploadMovies={uploadMovies} />
      ) : null}
    </>
  );
}

export default MoviesCardList;
