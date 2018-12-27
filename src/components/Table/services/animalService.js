const animals = [
  {
    _id: "1",
    name: "Doris",
    shoesize: "L",
    species: { _id: "552", name: "Elephant" },
    hairdo: "bald",
    liked: true
  },
  {
    _id: "2",
    name: "Lilly",
    shoesize: "XS",
    species: { _id: "551", name: "Zebra" },
    hairdo: "mohawk"
  },
  {
    _id: "3",
    name: "June",
    shoesize: "M",
    species: { _id: "550", name: "Lion" },
    hairdo: "short"
  },
  {
    _id: "4",
    name: "Penny",
    shoesize: "S",
    species: { _id: "551", name: "Zebra" },
    hairdo: "mohawk"
  },

  {
    _id: "5",
    name: "Simba",
    shoesize: "M",
    species: { _id: "550", name: "Lion" },
    hairdo: "mane"
  },
  {
    _id: "6",
    name: "Arthur",
    shoesize: "XL",
    species: { _id: "552", name: "Elephant" },
    hairdo: "bald"
  },
  {
    _id: "7",
    name: "Rose",
    shoesize: "S",
    species: { _id: "551", name: "Zebra" },
    hairdo: "mohawk"
  },
  {
    _id: "8",
    name: "Minny",
    shoesize: "XS",
    species: { _id: "551", name: "Zebra" },
    hairdo: "mohawk"
  },
  {
    _id: "9",
    name: "Luca",
    shoesize: "M",
    species: { _id: "550", name: "Lion" },
    hairdo: "short"
  },
  {
    _id: "10",
    name: "Sue",
    shoesize: "XL",
    species: { _id: "552", name: "Elephant" },
    hairdo: "bald"
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
    movieInDb.species = speciessAPI.speciess.find(g => g._id === movie.speciesId);
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
