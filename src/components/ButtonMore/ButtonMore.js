import React from "react";
import { useLocation } from "react-router-dom";

import "./ButtonMore.css";

function ButtonMore({uploadMovies}) {
  //const location = useLocation();
  return (
    <button
      className="movie__button-more" 
       onClick={uploadMovies} 
      type='button'
    >
      Ещё
    </button>
    // <button
    //   className={`movie__button-more 
    //     movie__button-more_${
    //       location.pathname === "/saved-movies" ? "invisible" : ""
    //     }`}
    //   type='button'
    // >
    //   Ещё
    // </button>
  );
}

export default ButtonMore;
