import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header";
import AuthHeader from "../AuthHeader/AuthHeader";
import filmsList from "../../utils/filmsList";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className='page page__style'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main filmsList={filmsList} />
          <Footer />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/profile'>
          <AuthHeader />
          <Profile />
        </Route>
        <Route path='/movies'>
          <AuthHeader />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <AuthHeader />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
