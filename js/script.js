'use srtrict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
 let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
 let lastMovieRaiting = prompt('На сколько его оцените?', '');

 let lastMovie2 = prompt('Один из последних просмотренных фильмов?', '');
 let lastMovieRaiting2 = prompt('На сколько его оцените?', '');

 personalMovieDB.movies[lastMovie] = lastMovieRaiting;
 personalMovieDB.movies[lastMovie2] = lastMovieRaiting2;

console.log(personalMovieDB);

