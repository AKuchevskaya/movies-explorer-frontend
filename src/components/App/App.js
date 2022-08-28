import { React, useState, useEffect, useCallback } from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  
} from "react-router-dom";
import { CurrentDataContext } from "../../contexts/CurrentDataContext";

import "./App.css";
import { MOVIE_CARD_URL } from "../../utils/constants";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as Auth from "../../utils/Auth";
import apiMain from "../../utils/MainApi";
import apiMovies from "../../utils/MoviesApi";


import filmsList from "../../utils/filmsList";
import posterOne from "../../utils/filmsList";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  const [currentData, setCurrentData] = useState({
    name: "",
    email: "",
    _id: "",
  });
  const [moviesFromApi, setMoviesFromApi] = useState([filmsList]);
  const [movies, setMovies] = useState([]);
  const [valueInputSearchForm, setValueInputSearchForm] = useState("");
  const [errorResult, setErrorResult] = useState("");
  const [removedMovie, setRemovedMovie] = useState(null);

  // !!! пока работаю над функциональностью поставила тру и отключила проверку токена, потом заменить на false
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();
  const [userData, setUserData] = useState({}); // for component Profile, but we have currentUser
  const [errorMessage, setErrorMessage] = useState({});
  const [buttonState, setButtonState] = useState(true);
  const [isPreloader, setIsPreloader] = useState(false);

  const checkToken = () => {
    return apiMain
      .getProfile()
      .then((res) => {
        console.log("res", res);
        setLoggedIn(true);
        setCurrentData(res);
      })

      .catch((err) => {
        setErrorResult(err);
        console.log(`Проблема с правами доступа...: ${err}`);
      });
  };
  console.log("currentData posle checktoken", currentData);

  useEffect(() => {
    checkToken();
  }, []);

  const handleRegister = ({ name, email, password }) => {
    return Auth.register(name, email, password)
      .then(() => {
        setIsPreloader(true);
        handleLogin({ email, password });
      })
      .catch((err) => {
        setErrorResult(`Прoблема регистрации: ${err}`);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  };

  const handleLogin = ({ email, password }) => {
    return Auth.authorize(email, password)
      .then((data) => {
        setIsPreloader(true);
        checkToken();
        history.push("/movies");
      })
      .catch((err) => {
        setErrorResult(`Прoблема авторизации: ${err}`);

        console.log(`Ошибка авторизации...: ${err}`);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  };

  const handleUpdateUser = (userData) => {
    apiMain
      .editProfile(userData)
      .then((userData) => {
        setIsPreloader(true);
        console.log("userData", userData);
        setCurrentData(userData);
      })
      .catch((err) => {
        setErrorResult(`Прoблема обновления данных: ${err}`);
        console.log(`Ошибка обновления данных пользователя.....: ${err}`);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  };

  const signOut = () => {
    return Auth.signOut().then((res) => {
      setIsPreloader(true);
      console.log("res posle vihoda", res);
      setLoggedIn(false);
      history.push("/");
    })
    .catch((err) => {
      console.log(`Проблема с выходом.....: ${err}`);

    })
    .finally(() => {
      setIsPreloader(false);
    })
  };
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
  //           trailer: data.trailerLink,
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
  // const handleInput = (e) => {
  //   setValueInputSearchForm(e.target.value);
  //   console.log(e.target.value);
  // };

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
    <CurrentDataContext.Provider value={currentData}>
      <div className='page page__style'>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>
          <Route path='/signup'>
            <Register
            isPreloader={isPreloader}
              handleRegister={handleRegister}
              errorResult={errorResult}
            />
          </Route>
          <Route path='/signin'>
            <Login handleLogin={handleLogin} errorResult={errorResult} />
          </Route>

          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            handleUpdateUser={handleUpdateUser}
            errorResult={errorResult}
            signOut={signOut}
            component={Profile}
          />
          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            moviesFromApi={moviesFromApi}
            valueInputSearchForm={valueInputSearchForm}
            // handleInput={handleInput}
            component={Movies}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
          />

          <Route>
            {!loggedIn ? <Redirect to='/signin' /> : <Redirect to='/' />}
          </Route>

          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </CurrentDataContext.Provider>
  );
}

export default App;
