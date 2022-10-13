"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms:function() {
        for(let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов',''),
                  b = prompt('На сколько вы его оцените', '');
        
            if (a != null && b !=null && a!='' && b!='' && a.length <50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 ) {
            console.log('Мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
            console.log('класический зритель');
        } else if (personalMovieDB.count >=30) {
            console.log('Ви киноман');
        } else {
            console.log('произошла ошибка');
        }
    },
    showMyDb:function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDb: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres:function() {
        for(let i = 1; i <=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre === ""|| genre ===null){
                console.log("Вы ввели не коректные данные");
                i--;
            } else {
            personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
};





const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};
