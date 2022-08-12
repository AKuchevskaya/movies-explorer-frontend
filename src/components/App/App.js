// import { useState } from "react";
//import { Route } from "react-router-dom";

import './App.css';
//import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
// import Register from "../Register/Register";
// import Login from "../Login/Login";

function App() {


  return (

      <div className="page page__style">
      
        <Header />
        <Navigation />
        <NotFoundPage />
      
        

      </div>

    
  );
}

export default App;
