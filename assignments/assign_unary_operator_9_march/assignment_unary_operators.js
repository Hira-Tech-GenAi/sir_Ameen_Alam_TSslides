"use strict";
//Unary Operators
Object.defineProperty(exports, "__esModule", { value: true });
//increment & decrement Postfix:
// console.log(a++);
// console.log(a--);
// //increment & decrement Prefix:
// console.log(++a);
// console.log(--a);
//Assignment solve
let a = 5;
let b = 2;
let c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log("c =", c);
