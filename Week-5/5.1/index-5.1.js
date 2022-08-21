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

const starwars = {name: 'Star Wars', desc: 'Some Intergalactic stuff with many aliens.'};
const lsc = {iname: 'Laal Singh Chadda', desc: 'Boycotting all Bollywood movies.'};
const elcamino = {name: 'El Camino', desc: 'Dont Do Drugs!'};

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

/*
    This is the async/await implementation
*/
async function addMovie(movie) {
    let result = await createMovie(movie);
    getMovies();
    return result;
}

// USING ASYNC/AWAIT
addMovie(starwars)
.then((value) => console.log('starwars then():', value))
.catch((value) => console.log('starwars catch():', value));

addMovie(lsc)
.then((value) => console.log('lsc then():', value))
.catch((value) => console.log('lsc catch():', value));

/*
This is the generator implementation
*/
async function* addMovieName(movie) {
    let result = await createMovie(movie);
    yield result;
    getMovies();
    return;
}

const iterator = addMovieName(elcamino);
iterator.next()
.then((value) => console.log('elcamino then():', value))
.catch((value) => console.log('elcamino catch():', value));
iterator.next();
