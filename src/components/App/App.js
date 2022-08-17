import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import filmsList from "../../utils/filmsList";
import Main from "../Main/Main";
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
          <Main
          filmsList={filmsList} />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>

        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
