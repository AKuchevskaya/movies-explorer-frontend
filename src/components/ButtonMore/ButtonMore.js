import React from "react";
import "./ButtonMore.css";

function ButtonMore({uploadMovies}) {
 
  return (
    <button
      className="movie__button-more" 
       onClick={uploadMovies} 
      type='button'
    >
      Ещё
    </button>

  );
}

export default ButtonMore;
