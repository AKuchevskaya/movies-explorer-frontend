import { React, useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { CurrentDataContext } from "../../contexts/CurrentDataContext";

import "./App.css";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as Auth from "../../utils/Auth";
import apiMain from "../../utils/MainApi";
import apiMovies from "../../utils/MoviesApi";
import { regexLink } from "../../utils/constants";

import posterOne from "../../utils/filmsList";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [currentData, setCurrentData] = useState({
    name: "",
    email: "",
    _id: "",
  });
  const [moviesFromApi, setMoviesFromApi] = useState([]);
  const [errorResult, setErrorResult] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [isPreloader, setIsPreloader] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [tooltip, setTooltip] = useState("");

  const checkToken = () => {
    apiMain
      .getProfile()
      .then((res) => {
        if (res) {
          setCurrentData(res);
          setLoggedIn(true);
          history.push("/movies");
        } else {
          history.push("/signin");
        }
      })

      .catch((err) => {
        setErrorResult(`Проблема с правами доступа...: ${err}`);
        console.log(`Ошибка доступа...: ${err}`);
      })
      .finally(() => {
        setErrorResult("");
      });
  };
 

  useEffect(() => {
    checkToken();
  }, []);

  const handleRegister = ({ name, email, password }) => {
    setIsPreloader(true);
    return Auth.register(name, email, password)
      .then((res) => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        setErrorResult(`Прoблема регистрации: ${err}`);
        console.log(`Ошибка регистрации: ${err}`);
      })
      .finally(() => {
        setIsPreloader(false);
        setErrorResult("");
      });
  };

  const handleLogin = ({ email, password }) => {
    setIsPreloader(true);
    Auth.authorize(email, password)
      .then((data) => {
        setCurrentData(data);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        setErrorResult(`Прoблема авторизации: ${err}`);
        console.log(`Ошибка авторизации...: ${err}`);
      })
      .finally(() => {
        setIsPreloader(false);
        setErrorResult("");
      });
  };

  const handleUpdateUser = (userData) => {
    setIsPreloader(true);
    return apiMain
      .editProfile(userData)
      .then((userData) => {
        setCurrentData(userData);
        setIsTooltipOpen(true);
        setTooltip("Новые данные сохранены");
      })
      .catch((err) => {
        setErrorResult(`Прoблема обновления данных: ${err}`);
        console.log(`Ошибка обновления данных пользователя.....: ${err}`);
      })
      .finally(() => {
        setIsPreloader(false);
        setErrorResult("");
      });
  };

  const signOut = () => {
    return Auth.signOut()
      .then((res) => {
        setIsTooltipOpen(true);
        setTooltip(`${res.message}`);
        localStorage.removeItem("searchList");
        localStorage.removeItem("moviesFromApi");
        localStorage.removeItem("searchInput");
        localStorage.removeItem("isChecked");
        setLoggedIn(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (loggedIn) {
      Promise.all([
        //в Promise.all передаем массив промисов которые нужно выполнить
        apiMain.getProfile(),
        apiMain.getLikedMovies(),
      ])
        .then(([data, films]) => {
          setCurrentData(data);
          const moviesFromServer = films.map((i) => i);
          setLikedMovies(
            moviesFromServer.filter((movie) => movie.owner === currentData._id)
          );
        })
        .catch((err) => {
          setErrorResult(`Проблема получения данных пользователя...: ${err}`);
          console.log(`Ошибка получения данных пользователя.....: ${err}`);
        })
        .finally(() => {
          setErrorResult("");
        });
    }
  }, [loggedIn, currentData._id]);

  // получаем весь массив фильмов с apiMovies, забираем только те поля, которые нам будут нужны
  const getMoviesFromApi = () => {
    setIsPreloader(true);

    return apiMovies
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
            trailerLink: regexLink.test(data.trailerLink)
              ? data.trailerLink
              : "https://youtube.ru",
            thumbnail:
              data.image !== null
                ? `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`
                : posterOne,
            movieId: data.id,
          };
        });

        setMoviesFromApi(moviesFromApi);
        localStorage.setItem("moviesFromApi", JSON.stringify(moviesFromApi));
      })
      .catch((err) => {
        console.log(`Ошибка получения всех фильмов.....: ${err}`);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  };
  //запрашиваем список фильмов
  useEffect(() => {
    localStorage.getItem("moviesFromApi")
      ? setMoviesFromApi(JSON.parse(localStorage.getItem("moviesFromApi")))
      : getMoviesFromApi();
  }, [loggedIn]);

  function handleLikeMovie(movie) {
    setIsPreloader(true);
    apiMain
      .addLikedMovie(movie)
      .then((newMovie) => {
        setLikedMovies([newMovie, ...likedMovies]);
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
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  };
  function closePopup() {
    setIsTooltipOpen(false);
    setTooltip("");
  }
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

          {/* <Route path='/signin'>
            {!loggedIn ? (<Login
                isPreloader={isPreloader}
                handleLogin={handleLogin}
                errorResult={errorResult}
              />
              
            ) : (
              <Redirect to='/movies' />
            )}
          </Route>
          <Route path='/signup'>
            {!loggedIn ? (<Register
                isPreloader={isPreloader}
                handleRegister={handleRegister}
                errorResult={errorResult}
              />
              
            ) : (
              <Redirect to='/movies' />
            )}
          </Route> */}
          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            isPreloader={isPreloader}
            handleUpdateUser={handleUpdateUser}
            errorResult={errorResult}
            signOut={signOut}
            component={Profile}
          />
          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            isPreloader={isPreloader}
            likedMovies={likedMovies}
            moviesFromApi={moviesFromApi}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
            component={Movies}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            isPreloader={isPreloader}
            likedMovies={likedMovies}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
            component={SavedMovies}
          />

          <Route path='/404'>
            <NotFoundPage />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={isTooltipOpen}
          onClose={closePopup}
          message={tooltip}
        />
      </div>
    </CurrentDataContext.Provider>
  );
}

export default App;
