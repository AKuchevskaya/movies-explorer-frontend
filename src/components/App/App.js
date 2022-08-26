import { React, useState, useEffect, useCallback } from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useCookies,
} from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App.css";
import { MOVIE_CARD_URL } from "../../utils/constants";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as Auth from "../../utils/Auth";
import apiMain from "../../utils/MainApi";
import apiMovies from "../../utils/MoviesApi";

import Header from "../Header/Header";
import AuthHeader from "../AuthHeader/AuthHeader";
import filmsList from "../../utils/filmsList";
import posterOne from "../../utils/filmsList";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [moviesFromApi, setMoviesFromApi] = useState([filmsList]);
  const [movies, setMovies] = useState([]);
  const [valueInputSearchForm, setValueInputSearchForm] = useState("");
  const [errorResult, setErrorResult] = useState("");
  const [removedMovie, setRemovedMovie] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [userData, setUserData] = useState({}); // for component Profile, but we have currentUser
  const [errorMessage, setErrorMessage] = useState({});
  const [buttonState, setButtonState] = useState(true);
  const [cookies, setCookie] = useState([]);
  const tokenCheck = () => {
    let token = localStorage.getItem("token");

    if (token) {
      return Auth.getContent(token)
        .then((res) => {
          const userData = {...res, loggedIn} 
          setLoggedIn(true);
          setCurrentUser(userData);
          console.log("gdfdngfm", res);
          console.log("userData s loggedIn?", userData);
          //setCurrentUser(res); or setUserData(res) ?
          history.push("/movies");
        })
        .catch((err) => {
          setErrorResult(err);
          setLoggedIn(false);
          console.log(`Проблема с правами доступа...: ${err}`);
        });
    }
  };
  console.log("currentUser s loggedIn?", currentUser);

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  
  const handleRegister = ({ name, email, password }) => {
    return Auth.register(name, email, password)
      .then((data) => {
        const { name, email } = data;
        history.push("/signin");
        setCurrentUser({ ...currentUser, name, email });
        history.push("/signin");
      })
      .catch((err) => {
        setErrorResult(`Прoблема авторизации: ${err}`);
      })
      .finally(() => console.log("errorResult", errorResult));
  };

  const handleLogin = ({ email, password }) => {
    return Auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          console.log("data v logine", data);

        } else {
          return;
        }
        tokenCheck();
      })
      .catch((err) => {
        console.log(`Ошибка авторизации...: ${err}`);
      });
  };
  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    //localStorage.removeItem("movies");
    setLoggedIn(false);
    history.push("/signin");
  }
  // -------------- логика обработки поиска фильма в массиве -----------

  // const getMoviesFromApi = () => {
  //   apiMovies
  //     .getInitialMovies()
  //     .then((res) => {
  //       const moviesFromApi = res.map((data) => {
  //         return {
  //           nameRU: data.nameRU || data.nameEN || "Без названия",
  //           nameEN: data.nameEN || data.nameRU || "Film without name",
  //           country: data.country || "not found",
  //           director: data.director || "not found",
  //           duration: data.duration || 0,
  //           year: data.year || 0,
  //           description: data.description || "description not found",
  //           image:
  //             data.image !== null
  //               ? `https://api.nomoreparties.co${data.image.url}`
  //               : posterOne,
  //           trailer:
  //             data.trailerLink ,
  //           thumbnail:
  //             data.image !== null
  //               ? `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`
  //               : posterOne,
  //           movieId: data.id,
  //         };
  //       });
  //       setMoviesFromApi(moviesFromApi);

  //       console.log("moviesFromApi", moviesFromApi);
  //     })
  //     .catch((err) => {
  //       console.log(`Ошибка получения всех фильмов.....: ${err}`);
  //     });
  // };

  // useEffect(() => {
  //   getMoviesFromApi();
  // }, [valueInputSearchForm]);
  //------------------------------------------
  const handleInput = (e) => {
    setValueInputSearchForm(e.target.value);
    console.log(e.target.value);
  };

  // useEffect(() => {
  //   if (loggedIn) {
  //     Promise.all([
  //       //в Promise.all передаем массив промисов которые нужно выполнить
  //       apiMain.getSavedMovies(),
  //       apiMain.getProfile(),
  //     ])
  //       .then(([movies, userData]) => {
  //         setMovies(movies);
  //         setCurrentUser(userData);
  //         console.log("content erftghjhgf?????", userData);
  //       })
  //       .catch((err) => {
  //         console.log(`Ошибка получения данных пользователя.....: ${err}`);
  //       });
  //   }
  // }, [loggedIn]);

  // function handleUpdateUser(userData) {
  //   apiMain
  //     .editProfile(userData)
  //     .then((userData) => {
  //       setCurrentUser(userData);
  //     })
  //     .catch((err) => {
  //       console.log(`Ошибка обновления данных пользователя.....: ${err}`);
  //     });
  // }

  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page page__style'>
        <Switch>
          <Route exact path='/' loggedIn={loggedIn}>
            <Main />
          </Route>
          <Route path='/signup'>
            <Register
              handleRegister={handleRegister}
              errorResult={errorResult}
            />
          </Route>
          <Route path='/signin'>
            <Login handleLogin={handleLogin} errorResult={errorResult} />
          </Route>

          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            // handleUpdateUser={handleUpdateUser}
            signOut={signOut}
          />
          <ProtectedRoute
            exact
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            moviesFromApi={moviesFromApi}
            valueInputSearchForm={valueInputSearchForm}
            handleInput={handleInput}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
          />

          <Route path='*'>
            <NotFoundPage loggedIn={loggedIn} />
          </Route>
          <Route>
            {loggedIn ? <Redirect to='/movies' /> : <Redirect to='/' />}
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
