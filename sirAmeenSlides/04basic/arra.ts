//====Type Alias in typescript===
type User = {
  name: string;
  age: number;
  hasPet: boolean;
};

//Now you can use the "User" Type Alias to define object
let user1: User = {
  name: "hira",
  age: 34,
  hasPet: true,
};

//Another example with a complex type for function

type Operation = (x: number, y: number) => number;
const add: Operation = (x, y) => x + y;
const subtract: Operation = (x, y) => x + y;
console.log(add(3, 5)); //8
console.log(subtract(8, 5)); //3

//===Type Literal===
//typescript allows you to specify exact values in that a variable can hold using type literals.
// This can be particularly useful when you want to restrict a variable to a specific value or a set of values

let drinkSize: "Small" | "Medium" | "Large";
drinkSize = "Medium"; //valid
drinkSize = "Small"; //valid
// drinkSize="Mega";//Error: type "Mega not assignable to type  "Small" | "Medium" | "Large";

//=====Type Union=====
//A Union type allows a variable  to hold values of multiple types
// its like a saying variable a can be one type OR another type
let mixBag: string | number;
mixBag = "shees";
mixBag = 34;
//  mixBag = false; //Error

//=====Type Intersection=====

//intersection types allow you  to combine multiple types into one this means a variable of
// an intersection type will have all the properties of all the types it intersects.

type BeachGear = {
  sunScreen: boolean;
  towel: boolean;
};
type MountainGear = {
  waterBottle: boolean;
  map: boolean;
};
type AdventureGear = BeachGear & MountainGear;
let myGear: AdventureGear = {
  sunScreen: true,
  towel: true,
  waterBottle: true,
  map: true,
};

//=====ARRAYS and their properties =====
let fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits.length); //3
console.log(fruits[1]); //print banana

//==Method of Array
let colors: string[] = ["red", "green", "orange"];
colors.push("yellow");
console.log(colors);
colors.pop();
console.log(colors);
colors.unshift("pink");
console.log(colors);
colors.shift();
console.log(colors);

//======Multidimensional Array ========

let matrix: number[][]=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
]
console.log(matrix[1][2]);
