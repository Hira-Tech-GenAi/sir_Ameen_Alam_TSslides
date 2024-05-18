"use strict";
// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
Object.defineProperty(exports, "__esModule", { value: true });
// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);
// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
// //Practice
// enum Color{Red, Green, Blue}//starts with 0
// let a : Color = Color.Green;
// console.log(a);//result 1
// enum Color1{ Red = 1, Green, Blue};//explicitly //implicitly
// let colorName:string = Color1[2];
// console.log(colorName);//result Green
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {})); //can assign values to all
let colorIndex = Color2["Blue"];
console.log(colorIndex);
