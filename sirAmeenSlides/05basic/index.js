"use strict";
//===Working with Objects and Arrays
Object.defineProperty(exports, "__esModule", { value: true });
let library = [
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
let coffeeOder = ["cappuccino", "medium"]; //then you use tuples type and size
//=====ENUMS====
var CoffeeType;
(function (CoffeeType) {
    CoffeeType[CoffeeType["Espresso"] = 0] = "Espresso";
    CoffeeType[CoffeeType["Latte"] = 1] = "Latte";
    CoffeeType[CoffeeType["cappuccino"] = 2] = "cappuccino";
    CoffeeType[CoffeeType["Americano"] = 3] = "Americano";
})(CoffeeType || (CoffeeType = {}));
let myCoffee = CoffeeType.Espresso;
console.log(myCoffee); //0
//union / literal
