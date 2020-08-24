'use srtrict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let lastMovie,
    lastMovieRaiting;
for (let i = 0; i < 2; i++) {
    lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    lastMovieRaiting = prompt('На сколько его оцените?', '');
    
    if (lastMovie != '' && lastMovieRaiting != '' && 
        lastMovieRaiting != null && lastMovie != null && 
        lastMovie.length < 50 ) {
            personalMovieDB.movies[lastMovie] = lastMovieRaiting;
        } else {
          i--;  
        }
    
}
if (personalMovieDB.count < 10 ) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count  >= 30 ) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }


console.log(personalMovieDB);

