// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function (movie) {
        return movie.director;
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielberg = moviesArray.filter(function (movie) {
        return movie.director === 'Steven Spielberg';
    });

   const spielbergDrama = spielberg.filter(function (picture) {
        return picture.genre.includes('Drama');
   });

    return spielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0){
        return 0
    } else {
        const filtered = moviesArray.filter(function (movie) {
            return movie.score
        });
        
        const total = filtered.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.score;
          }, 0);
    
        const average = total / moviesArray.length;
    
        return Math.round(average * 100) / 100;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filterDrama = moviesArray.filter(function (movie) {
        return movie.genre.includes('Drama');
    }, 0);
    
    const filtered = filterDrama.filter(function (movieDrama) {
        return movieDrama.score
    }, 0);
    
    const total = filtered.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.score;
        }, 0);

    const average = total / filtered.length;

    if (filtered.length === 0) {
        return 0
    } else {
        return Math.round(average * 100) / 100;
    }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movies = [...moviesArray]

    movies.sort((a, b)=> {
        if (a.year === b.year){
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
          //return a.title < b.title ? -1 : 1
        } else {
          return a.year - b.year
        }
      })
    return movies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movies = [...moviesArray]

    const result = []
    movies.forEach((element) => {
      result.push(element.title)
    })
    return result.sort().slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
