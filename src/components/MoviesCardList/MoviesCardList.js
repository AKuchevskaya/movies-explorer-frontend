import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonMore from '../ButtonMore/ButtonMore';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <>
    <div className="movies__container">
      <MoviesCard />
        
    </div>
    <ButtonMore />
    </>
    
  );
}

export default MoviesCardList;