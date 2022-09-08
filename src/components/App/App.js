import { React, useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { CurrentDataContext } from "../../contexts/CurrentDataContext";

import "./App.css";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as Auth from "../../utils/Auth";
import apiMain from "../../utils/MainApi";
import apiMovies from "../../utils/MoviesApi";

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
  const [moviesFromApi, setMoviesFromApi] = useState([]);

  const [errorResult, setErrorResult] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);
  const [removedMovie, setRemovedMovie] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);

  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState({});
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
    return apiMain
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
    return Auth.signOut()
      .then((res) => {
        setIsPreloader(true);
        localStorage.removeItem("searchList");
        localStorage.removeItem("seatchInput");
        localStorage.removeItem("isChecked");
        alert("До свидания! Приходите ещё!");
        setLoggedIn(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(`Проблема с выходом.....: ${err}`);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  };
  // получаем весь массив фильмов с apiMovies, забираем только те поля, которые нам будут нужны
  const getMoviesFromApi = () => {
    setIsPreloader(true);
    apiMovies
      .getInitialMovies()
      .then((res) => {
        const moviesFromApi = res.map((data) => {
          return {
            nameRU: data.nameRU || data.nameEN || "Без названия",
            nameEN: data.nameEN || data.nameRU || "Film without name",
            country: data.country || "not found",
            director: data.director || "not found",
            duration: data.duration || 0,
            year: data.year || 0,
            description: data.description || "description not found",
            image:
              data.image !== null
                ? `https://api.nomoreparties.co${data.image.url}`
                : posterOne,
            trailerLink: data.trailerLink,
            thumbnail:
              data.image !== null
                ? `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`
                : posterOne,
            movieId: data.id,
          };
        });
        moviesFromApi && setIsPreloader(false);
        setMoviesFromApi(moviesFromApi);
        console.log("moviesFromApi", res);
      })
      .catch((err) => {
        console.log(`Ошибка получения всех фильмов.....: ${err}`);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  };
  //запрашиваем список фильмов при первой отрисовке
  useEffect(() => {
    getMoviesFromApi();
  }, []);

  useEffect(() => {
    getLikedMovies();
  }, [currentData]);

  const getLikedMovies = () => {
    setIsPreloader(true);
    return apiMain
      .getLikedMovies()
      .then((res) => {
        const moviesFromServer = res.map((i) => i);
        setLikedMovies(
          moviesFromServer.filter((movie) => movie.owner === currentData._id)
        );
        // localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  };

  function handleLikeMovie(movie) {
    apiMain
      .addLikedMovie(movie)
      .then((newMovie) => {
        console.log("newMovie", newMovie);
        setLikedMovies([newMovie, ...likedMovies]);

        // localStorage.setItem(
        //   "likedMovies",
        //   JSON.stringify([newMovie, ...likedMovies])
        // );
      })
      .catch((err) => {
        console.log(`Ошибка добавления новой карточки.....: ${err}`);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

  const handleDeleteMovie = (movie) => {
    apiMain
      .removeLikedMovie(movie._id)

      .then(() => {
        setLikedMovies((state) =>
          state.filter((item) => item._id !== movie._id)
        );

        // localStorage.setItem(
        //   "likedMovies",
        //   JSON.stringify(likedMovies.filter((i) => i._id !== movie._id))
        // );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  };
  console.log("likedMovies na app", likedMovies);
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
            isPreloader={isPreloader}
            moviesFromApi={moviesFromApi}
            likedMovies={likedMovies}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
            component={Movies}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            isPreloader={isPreloader}
            moviesFromApi={moviesFromApi}
            likedMovies={likedMovies}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
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
