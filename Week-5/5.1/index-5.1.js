/*
    In this example, we see adding a movie takes 3 seconds,
    while retrieving movie names takes just 1 second.
*/

const movies = [
    {
        name: 'Matrix',
        desc: 'Confusing Sci-Fi Movie starring Neo.'
    },
    {
        name: 'Rambo',
        desc: 'Mindless action movie with Sylvester Stallone.'
    }
];

function getMovies() {
    setTimeout(() => {
        movies.forEach((movie, index) => {
            console.log(`Movie Name: ${movie.name}, Desc: ${movie.desc}`);
        })
    }, 1000);
}

function createMovie(movie) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        if('name' in movie && 'desc' in movie) {
            movies.push(movie);
            resolve('movie added successfully');
        } else {
            reject('some error in adding movie');
        }
    }, 3000);
   })
}

async function addMovie(movie) {
    let result = await createMovie(movie);
    getMovies();
    return result;
}

const starwars = {name: 'Star Wars', desc: 'Some Intergalactic stuff with many aliens.'};
addMovie(starwars).then((value) => console.log(value));

