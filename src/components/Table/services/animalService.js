const animals = [
  {
    _id: "1",
    name: "Doris",
    gender: "female",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Elephant" },
    birthDate: "2015-01-03",
    liked: true
  },
  {
    _id: "2",
    name: "Lilly",
    gender: "female",

    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Zebra" },
    birthDate: "2010-01-03",
    liked: true
  },
  {
    _id: "3",
    name: "Buster",
    gender: "male",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Lion" },

    birthDate: "2014-01-03",
    liked: true
  },
  {
    _id: "4",
    name: "Penny",
    gender: "female",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Zebra" },
    birthDate: "2011-01-03",
    liked: true
  },

  {
    _id: "5",
    name: "Luca",
    gender: "male",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Lion" },
    birthDate: "2012-01-03",
    liked: true
  },
  {
    _id: "6",
    name: "Arthur",
    gender: "male",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Elephant" },
    birthDate: "2009-01-03",
    liked: true
  },
  {
    _id: "4",
    name: "Rose",
    gender: "female",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Zebra" },
    birthDate: "2011-01-03",
    liked: true
  },
  {
    _id: "4",
    name: "Minny",
    gender: "male",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Zebra" },
    birthDate: "2011-01-03",
    liked: true
  }
];

export function getAnimals() {
  return animals;
}

export function getAnimal(id) {
  return animals.find(a => a._id === id);
}

/* export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {};
    movieInDb.name = movie.name;
    movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;
  
    if (!movieInDb._id) {
      movieInDb._id = Date.now();
      movies.push(movieInDb);
    }
  
    return movieInDb;
  }
  
  export function deleteMovie(id) {
    let movieInDb = movies.find(m => m._id === id);
    movies.splice(movies.indexOf(movieInDb), 1);
    return movieInDb;
  } */
