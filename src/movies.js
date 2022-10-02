// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directors = moviesArray.map((movie) => 
        
        movie.director);

        return directors;

}
// console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesArray) {

    const moviesSteven = moviesArray.filter(objeto => objeto.director == 'Steven Spielberg' && objeto.genre.indexOf("Drama") !== -1);
    
    return moviesSteven.length;
}
    
   // console.log(howManyMovies(movies));
    
    


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length == -1){
        return 0;
    } else {
           const sum = moviesArray.reduce((a, elem) => { 
        if (elem.score !== undefined){
         return a + elem.score    
        }else {

            return a;
        }
        }, 0);
      let promedio = sum / moviesArray.length;

      return Number(promedio.toFixed(2));

 
    }


}
    



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    
    const moviesDrama = moviesArray.filter( movie => {

        if(movie.genre.indexOf("Drama") !== -1) {
            return true;
        } 
       
        return 0;
    });

   //console.log(moviesDrama);


    const puntuacion = moviesDrama.map((movie) =>      
        movie.score)
    console.log(puntuacion.length);


    let sum = 0;

    for (let i = 0; i < puntuacion.length; i++) {
            if (moviesDrama.length === 0) {
                return 0;
            } else {
                sum += puntuacion[i];
            }
    }
    console.log(sum);


    // const promedioDrama = puntuacion.reduce( function (total, movie) {   
    //     return total + movie.score;
    // }, 0) / puntuacion.length;

    // console.log(promedioDrama);


    // if (moviesDrama.length === 0) {
    //     return 0;
    // } else {
    //         return Number(promedioDrama).toFixed(2);
    // }
   // console.log(promedioDrama.toFixed(2));

}



//  console.log(dramaMoviesScore(movies));





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesOrdenadas = moviesArray.sort((primero, segundo) => {
        if (primero.year > segundo.year) {
            return 1;
        } else {
            return -1;
        }
    });
    return moviesOrdenadas;

}
// console.log(orderByYear(movies));



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(moviesArray){

let veintePrimeros = moviesArray.slice(0, 20);
// console.log(veintePrimeros);

const moviesOrdenadas = veintePrimeros.sort((primero, segundo) => {
    if (primero.title > segundo.title) {
        return 1;
    } else {
        return -1;
    }
});

const moviesTitles = moviesOrdenadas.map((movie => {return movie.title}));
// console.log(moviesOrdenadas);
return moviesTitles;


}




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
