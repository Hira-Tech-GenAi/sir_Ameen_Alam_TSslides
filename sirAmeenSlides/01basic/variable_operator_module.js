"use strict";
//compiler or interpreter ignore comments****
Object.defineProperty(exports, "__esModule", { value: true });
//-----------(1)TYPE INTERFERENCE------
//strongly type syntax
let a = "Hira";
let b = 8;
let c = false;
//type inference
let d = "Hira";
let e = 8;
let f = false;
//------------(2)advance variable keyWord--------
let currentVal = 1000; //This value can change
const value = "23458990"; //This value remains constant value
currentVal = 2000;
// const value ="23458990": error
//------------(3)Data types--------
//****Primitive****// immutable //not changeable
//number => 2 to power 53
//bigint
//string =>""
//boolean => true/false
//null standalone value empty
//undefined =>
//symbol => unique
//****Non Primitive****/mutable// changeable
//array
//object
//functions
//------------(4)ERRORS--------
//Syntax error***
//lett message = "helloWorld";
//console.log(message);
//Type error***
let message = "helloWorld";
//console.logger(message);
//Assignability error***
let msg = "helloWorld";
// msg = 9;
//console.log(msg);
//------------(4)String concatenation--------
let firstName = "hira";
let lastName = "khalid";
console.log(firstName + " " + lastName);
//------------(5)Template literals--------
console.log(`"firstName": ${firstName} & "lastName": ${lastName}`);
//------------(6)MODULE--------
//basic of modules exporting and importing modules
//====single variable to Export===
// let myName = "hira"(index.ts1)
// export default {myName}
// => mainFile---
// import fileName(anyName) from "./index.ts1"
//NOTE;we get object file after console
// excess to value use property console.log(fileName.first)
//====SECOND WAY SYNTAX -2 ===
// export let myName = "hira" (index.ts1)
// => mainFile---
// import * as(allThings) import myName from "./index.ts1"
//====SECOND WAY SYNTAX -3 ===
// If you want same name of variable in which in file1 that export to main file.
//  export let myName = "hira" (index.ts1)
// => mainFile---
// import {myname} from "./index.ts1"
// after console.log(myName) you get direct value not return object
//====SECOND WAY SYNTAX -1 (if 2 variable export)===
// export myName = "hira";
// export fullName = "hira khalid"
// => mainFile---
// import {myName, fullName} from "./index.ts1"
// console.log() return value
//====SECOND WAY SYNTAX -2 (if more than two variable export)===
// import * as fullExport from "./index.ts1"(change name)
// console.log(fullExport.variable name access)
//====SECOND WAY SYNTAX -3 ===
// => mainFile---
// import{ myName, fullName, nameThree} from "./index.ts1"
//====SECOND WAY SYNTAX -4 (if we have function)===
// export default function hello(){
// console.log("hello world")
// }
// => mainFile---
// import xyz from "./index.ts2"
// xyz.hello
// console.log(xyz.age)
//NOTE ==default use one time second any variable in this file to export then write down
// export default {hello, myName, nameThree}(index.ts2)
//------------(7)Operators in Typescript--------
//Arithemetic operator
// let a = 5;
// let b = 2;
// console.log("a =", a, "& b = ", b);
// console.log("a+b", a+b);
// console.log("a-b", a-b);
// console.log("a*b", a*b);
// console.log("a/b", a/b);
// console.log("a%b", a%b);
// console.log("a**b", a**b);
//Unary operator
//Pre-fix increment & decrement:++a, --a;
//Post-fix increment & decrement:a++, a--;
let g = 5;
let h = 2;
let i;
i = ++g + h++ + --h + h-- + g + h++ + h;
console.log("i =", i);
//------------(7)Combining Operators--------
let result = 3 + 4 * 5;
result++;
console.log(result);
//------------(8)Assignment Operators--------
// =, +=, -=, *=, %=, **=
//  x-=1  or x= x-1
//  x+=1  or x= x+1
//  x/=1  or x= x1
//  x%=1  or x= x%1
//  x*=1  or x= x*1
//  x**=1  or x= x**1
//------------(9)Comparison Operators--------
// valueCheck                  valueCheck & Also Data type Check
// ==                          //====
// !=                          //!==
// < >                         //<=, >= if first condition are true that not go to check next conditions
//------------(10)Logical  Operators--------
// && both conditions will be true , || One condition will be true , !not behave true to convert False & False to true
//------------(11)Conditional Statements  -------
// To implement some condition in the code if, else & else-if
let isRaining = true;
if (isRaining) {
    console.log("Wear a raincoat.");
}
else {
    console.log("Wear sunglasses.");
}
let weather = "cloudy";
if (weather == "Rainy") {
    console.log("Wear a raincoat");
}
else if (weather == "cloudy") {
    console.log("Wear a light jacket");
}
else {
    console.log("Wear sunglasses");
}
//------------(12)Ternary operator Conditional Statements  -------
let isHungry = false;
let snack = isHungry ? "apple" : "water";
console.log(`You should have some ${snack}`);
let imHungry = true;
let snackEat = imHungry ? "apple" : "water";
console.log(`You should have some ${snackEat}`);
