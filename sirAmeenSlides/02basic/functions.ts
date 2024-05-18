// // ------------FUNCTIONS----------
// //======basic function======
function halfFryEgg() {
  let cooked = 1 + 1.5 + 2;
  //egg+butter+salt
  console.log(cooked);
}
halfFryEgg();

// //======Return function======
function halfFryEgg1() {
  let cooked = 1 + 1.5 + 2;
  //egg+butter+salt
  return cooked;
}
let cookedEgg1 = halfFryEgg1();
console.log(cookedEgg1);

// //======Parameter Argument======
function halfFryEgg2(egg: number, butter: number, salt: number) {
  return egg + butter + salt;
}
let cookedEgg2 = halfFryEgg2(2, 3, 4);
console.log(cookedEgg2); // invoke the Function

// //Practice
function calculateArea(width: number, hight: number) {
  return width * hight;
}
let totalArea = calculateArea(3, 5);
console.log(totalArea);

// //======Default Parameter ======
function halfFryEgg3(egg: number = 1, butter: number = 1.5, salt: number = 2) {
  return egg + butter + salt;
}
let cookedEgg3 = halfFryEgg3(2, 3, 4);
console.log(cookedEgg3); // invoke the Function

// //======Rest Parameter ======
function halfFryEgg4(egg: number = 1, ...ingredients: number[]) {//use in last error
  console.log(egg);
  console.log(ingredients);
}
halfFryEgg4(2, 3, 4, 8, 4); // invoke the Function

// //======Spread operator ======
function halfFryEgg5(egg: number = 1, ...ingredients: number[]) {
  console.log(egg);
  console.log(...ingredients); //Spread
}
halfFryEgg5(2, 3, 4, 8, 4); // invoke the Function

// //======ARROW FUNCTION ======
// //   ==case1==
let halfFryEgg0 = () => 1 + 1.5 + 2;
let readyEgg = 1 + 1.5 + 2;
//egg+butter+salt
console.log(readyEgg);

// //   ==case2==
let halfFryEgg01 = (egg: number, butter: number, salt: number): number =>
  egg + butter + salt;
let readyEgg0 = halfFryEgg01(1, 2, 2);
//egg+butter+salt
console.log(halfFryEgg01);

// //  ==case3== return
let halfFryEgg02 = () => {
  return 2 + 2.5 + 4;
};
let readyEgg1 = halfFryEgg02();
//egg+butter+salt
console.log(readyEgg1);

// //  ==case4== return
let halfFryEgg03 = () => {
  let cooked = 2 + 2.5 + 4;
  //egg+butter+salt
  return cooked;
};
let readyEgg2 = halfFryEgg03();

console.log(readyEgg2);

// //  ==case5== return
let halfFryEgg04 = () => {
  let cooked = 2 + 2.5 + 4;
  //egg+butter+salt
  return cooked;
};
let readyEgg3 = halfFryEgg04();

console.log(readyEgg3);

// //  ==case6== return
let halfFryEgg05 = (egg: number, butter: number, salt: number): number => {
  let readyEgg4 = egg + butter + salt;
  return readyEgg4;
};
// //egg+butter+salt
let finalResult = halfFryEgg05(4, 8, 3);
console.log(finalResult);
// array
// let fruitsTuple:[ string,  string] = ["Appla", "orange",]

// console.log(fruitsTuple);

//=======Anonymous Function =====
let finalResult1 = function () {
  let cooked = 1 + 1.5 + 3;
  console.log(cooked);
};
finalResult1();

//======= IIFE Immediately Invoked Function Expression =====

(function () {
  console.log("Runs Immediately");
})();

//======= Recursive Function  =====

function countDown(number: number) {
  if (number <= 0) {
    console.log("Done!");
    return;
  }
  console.log(number);
  countDown(number - 1);
}
countDown(5);
// creating a function that calls itself to solve a problem
function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
let response = factorial(5);
console.log(response);

//======= Nested Function  =====

function outerFunction() {
  const innerFunction = function () {
    console.log("hello from inside");
  };
}
outerFunction();

//=======Function callback  =====

function processUserInput(callback: any): any {
  let name = "sir Ameen";
  callback(name);
  console.log();
}
processUserInput(function (name:string) {
  console.log("hello, " + name);
  
  
})

//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific
function add(arg1: string, arg2: string): string;//option 1
function add(arg1: number, arg2: number): number;//option 2
function add(arg1: number, arg2: string): string;//option 3

//this is not part of the overload list, 
//so it has only three overloads
function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(1, "3"));
