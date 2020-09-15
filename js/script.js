'use srtrict';

let numberOfFilms;

let lastMovie,
    lastMovieRaiting;


function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');

    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count  >= 30 ) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
}
}

writeYourGenres();