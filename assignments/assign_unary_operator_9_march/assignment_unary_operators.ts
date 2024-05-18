//Unary Operators

//increment & decrement Postfix:

// console.log(a++);
// console.log(a--);


// //increment & decrement Prefix:
// console.log(++a);
// console.log(--a);

//Assignment solve

let a:number = 5;
let b:number = 2;
let c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log("c =", c);