import posterOne from "../images/poster_one.jpg";
import posterTwo from "../images/poster_two.jpg";
import posterThree from "../images/poster_three.jpg";
import posterFour from "../images/poster_four.jpg";
import posterFive from "../images/poster_five.jpg";
import posterSix from "../images/poster_six.jpg";
import posterSeven from "../images/poster_seven.jpg";
import posterEight from "../images/poster_eight.jpg";
import posterNine from "../images/poster_nine.jpg";
import posterTen from "../images/poster_ten.jpg";
import posterEleven from "../images/poster_eleven.jpg";
import posterTwelve from "../images/poster_twelve.jpg";

const filmsList = [
  {
    country: "США",
    director: "Фрэнк Дарабонт",
    duration: 189,
    year: 1999,
    description:
      "В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга",
    image: posterOne,
    trailerLink: "https://www.kinopoisk.ru/film/435/",
    thumbnail: "https://www.kinopoisk.ru/film/435/",
    movieId: 1122,
    nameRU: "Зеленая миля",
    nameEN: "The Green Mile",
  },
  {
    country: "Франция",
    director: "Оливье Накаш",
    duration: 199,
    year: 2011,
    description: "Sometimes you have to reach into someone",
    image: posterTwo,
    trailerLink: "https://www.kinopoisk.ru/film/535341/",
    thumbnail: "https://www.kinopoisk.ru/film/535341/",
    movieId: 112233,
    nameRU: "1+1",
    nameEN: "Intouchables",
  },
  {
    country: "США",
    director: "Квентин Тарантино",
    duration: 154,
    year: 1994,
    description:
      "Несколько связанных историй из жизни бандитов. Шедевр Квентина Тарантино, который изменил мировое кино",
    image: posterThree,
    trailerLink: "https://www.kinopoisk.ru/film/342/",
    thumbnail: "https://www.kinopoisk.ru/film/342/",
    movieId: 11223344,
    nameRU: "Криминальное чтиво",
    nameEN: "Pulp Fiction",
  },
  {
    country: "Германия",
    director: "Томас Ян",
    duration: 89,
    year: 1997,
    description:
    "Быстрый автомобиль, миллион марок в багажнике, и всего одна неделя жить",
    image: posterFour,
    trailerLink: "https://www.kinopoisk.ru/film/32898/",
    thumbnail: "https://www.kinopoisk.ru/film/32898/",
    movieId: 112344,
    nameRU: "Достучаться до небес",
    nameEN: "Knockin' on Heaven's Door",
  },
  {
    country: "США",
    director: "Мартин Скорсезе",
    duration: 138,
    year: 2009,
    description:
    "Пристав оказывается заложником клиники для умалишенных. Сложносочиненный детектив с Леонардо ДиКаприо",
    image: posterFive,
    trailerLink: "https://www.kinopoisk.ru/film/397667/",
    thumbnail: "https://www.kinopoisk.ru/film/397667/",
    movieId: 123344,
    nameRU: "Остров проклятых",
    nameEN: "Shutter Island",
  },
  {
    country: "США",
    director: "Алексей Балабанов",
    duration: 100,
    year: 1997,
    description:
'Дембель Данила Багров защищает слабых в Петербурге 1990-х. Фильм, сделавший Сергея Бодрова народным героем',
    image: posterSix,
    trailerLink: "https://www.kinopoisk.ru/film/41519/",
    thumbnail: "https://www.kinopoisk.ru/film/41519/",
    movieId: 12334455,
    nameRU: "Брат",
    nameEN: "Brother",
  },
  {
    country: "Франция",
    director: "Люк Бессон",
    duration: 133,
    year: 1994,
    description:
'Вы не можете остановить того, кого не видно',
    image: posterSeven,
    trailerLink: "https://www.kinopoisk.ru/film/389/",
    thumbnail: "https://www.kinopoisk.ru/film/389/",
    movieId: 1234455,
    nameRU: "Леон",
    nameEN: "Léon",
  },
  {
    country: "США",
    director: "Мартин Брест",
    duration: 156,
    year: 1992,
    description:
'Слепой полковник едет кутить в Нью-Йорк под присмотром бедного студента. Заслуженный «Оскар» Аль Пачино',
    image: posterEight,
    trailerLink: "https://www.kinopoisk.ru/film/4871/",
    thumbnail: "https://www.kinopoisk.ru/film/4871/",
    movieId: 123445566,
    nameRU: "Запах женщины",
    nameEN: "Scent of a Woman",
  },
  {
    country: "США",
    director: "Дэмьен Шазелл",
    duration: 106,
    year: 2013,
    description:
    'Юный барабанщик на тернистом пути к величию. Остросюжетная драма Дэмьена Шазелла, отмеченная тремя «Оскарами»',
    image: posterNine,
    trailerLink: "https://www.kinopoisk.ru/film/725190/",
    thumbnail: "https://www.kinopoisk.ru/film/725190/",
    movieId: 1234455667,
    nameRU: "Одержимость",
    nameEN: "Whiplash",
  },
  {
    country: "Италия",
    director: "Франко Кастеллано, Джузеппе Моччиа",
    duration: 107,
    year: 1980,
    description:
    'Красавица Лиза перевоспитывает заядлого холостяка. Шекспировские страсти с Адриано Челентано и Орнеллой Мути',
    image: posterTen,
    trailerLink: "https://www.kinopoisk.ru/film/63912/",
    thumbnail: "https://www.kinopoisk.ru/film/63912/",
    movieId: 12344556678,
    nameRU: "Укрощение строптивого",
    nameEN: "Il bisbetico domato",
  },
  {
    country: "США",
    director: "Габриэле Муччино",
    duration: 117,
    year: 2006,
    description:
    'Хронический неудачник пытается получить работу на Уолл-стрит. Уилл Смит в трогательной драме о вере в лучшее',
    image: posterEleven,
    trailerLink: "https://www.kinopoisk.ru/film/104938/",
    thumbnail: "https://www.kinopoisk.ru/film/104938/",
    movieId: 123456677,
    nameRU: "В погоне за счастьем",
    nameEN: "The Pursuit of Happyness",
  },
  {
    country: "США",
    director: "М. Найт Шьямалан",
    duration: 107,
    year: 1999,
    description:
    'Детский психолог открывает жуткую тайну маленького пациента. Грандиозная мистическая драма с Брюсом Уиллисом',
    image: posterTwelve,
    trailerLink: "https://www.kinopoisk.ru/film/395/",
    thumbnail: "https://www.kinopoisk.ru/film/395/",
    movieId: 12345667789,
    nameRU: "Шестое чувство ",
    nameEN: "The Sixth Sense",
  },
];
export default filmsList;