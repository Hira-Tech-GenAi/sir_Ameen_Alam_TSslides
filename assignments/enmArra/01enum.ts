// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;

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

enum Color2 {Red =1, Green = 2, Blue = 4} //can assign values to all
let colorIndex = Color2["Blue"]
console.log(colorIndex);
