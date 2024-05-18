//===Working with Objects and Arrays

type Book = {
  title: string;
  author: string;
  isbn: number;
};

let library: Book[] = [
  { title: "The Hobbit", author: "J.R.R", isbn: 12344 },
  { title: '"1984"', author: "George orwell", isbn: 54322 },
];

//Add a new book
library.push({
  title: "The catcher n the ray",
  author: "JSON.D silenger",
  isbn: 34521,
});
let findBook = library.find((book) => book.author === "George orwell");
console.table(findBook);

// ======TUPLES=====
let coffeeOder: [string, string] = ["cappuccino", "medium"]; //then you use tuples type and size

//=====ENUMS====
enum CoffeeType {
  Espresso,
  Latte,
  cappuccino,
  Americano,
}
let myCoffee:CoffeeType =CoffeeType.Espresso;
console.log(myCoffee);//0

//union / literal

