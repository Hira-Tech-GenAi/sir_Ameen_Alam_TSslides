// 1-Loop through an array with For-of

const favoriteMovies: string[] = [
  "mission impossible",
  "lord of the ring",
  "Harry Potter",
];
function printMovies(movies: string[]) {
  for (const movie of movies) {
    console.log(movie);
  }
}
printMovies(favoriteMovies);

// 2-Enumerate properties e=with For-in loop
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

function printCarDetails(car: { [key: string]: string | number }) {
  //pass object as a parameter
  for (const key in car) {
    console.log(`${key}: ${car[key]}`);
  }
}
printCarDetails(car);

//Basic for-loop exercise [fizzbuzz]

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let outPut = " ";
    if (i % 3 === 0) outPut += "fizz";
    if (i % 5 === 0) outPut += "buzz";
    console.log(outPut || i);
    
  }
}
fizzBuzz()