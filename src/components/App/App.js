// import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import './App.css';
//import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Navigation from "../Navigation/Navigation";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
// import Register from "../Register/Register";
// import Login from "../Login/Login";

function App() {


  return (

      <div className="page page__style">
      
        
        <Switch>
        
          
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          
          <Navigation />
          <Route path="*">
            <NotFoundPage />
          </Route>
          
        </Switch>
        
      </div>
  );
}

export default App;
