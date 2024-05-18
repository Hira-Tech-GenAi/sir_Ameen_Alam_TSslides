"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//=======(1)VARIABLE SCOPE=====
// ----=>Global Scope
// ----=>Local Scope
let globalVar = "Accessible everywhere";
function showExample() {
    let localVar = " Accessible only inside the function";
    console.log(globalVar); //works
}
// console.log(localVar);// error: localVar is not define
//=======(2)HOISTING WITH LET AND CONST=====
// console.log(number)
// undefined
var number = 10;
console.log(number);
// 10
console.log(number);
let numbers = 10;
// or const number = 10
console.log(number);
//set Timeout order call back hell nested call back (pyamid of dom) this style of programming become difficult to understand and manage then we use setTime
setTimeout(() => {
    console.log("Cake is ready");
}, 2000); //wait 2 seconds
