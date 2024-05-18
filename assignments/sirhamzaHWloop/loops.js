"use strict";
// Here are the for loop assignments
// =================================
Object.defineProperty(exports, "__esModule", { value: true });
//Q-1: Write a for loop to identify and print all even numbers in an array of integers.
let evenNumbers = [22, 38, 99, 13, 10, 8, 73, 100];
//use filter method immutable
let ResultEvenNum = evenNumbers.filter((number) => number % 2 === 0);
console.log(`Even numbers from the above Array: ${ResultEvenNum}`);
console.log(`\n`);
// ======================================
// Q-2: Write a for loop to find the sum of the first 10 numbers.
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function calculateSum(preValue, currValue) {
    //accumulator / previous value
    preValue += currValue;
    return preValue;
}
// use method reduce immutable
const sum = numberArray.reduce(calculateSum, 0); //call back function, initial val
console.log(sum); // Output:55
console.log(`\n`);
// ================================================
// Q-3: Write a for loop to print the multiplication table for the number 5.
const multiplier = 5;
let multipleOfFive = "";
for (let y = 1; y <= 10; y++) {
    const multiplication = y * multiplier;
    multipleOfFive += multiplication + " ";
}
console.log(multipleOfFive);
console.log(`\n`);
// ============================================
// Q-4:Write a for loop to print the multiplication table for any number provided by user.
function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        console.log(`${number} × ${i} = ${result}`);
    }
}
// Example usage:
const userNumber = 7; // Replace with the user's input
printMultiplicationTable(userNumber);
console.log(`\n`);
// ================================================
// Q-5:Write a for loop to print the multiplication table for a number provided by the user, and also take the end of the table as input from the user.
function printMultiTable(number, end) {
    for (let i = 1; i <= end; i++) {
        const result = number * i;
        console.log(`${number} × ${i} = ${result}\n`);
    }
}
// Example usage:
const user1Number = 5; // You can replace this with any other number
const userEnd = 10; // You can replace this with the desired end value
printMultiTable(user1Number, userEnd);
// =======================================
//Q-6: Write a for loop to print the elements of an array in reverse.
function printArrayInReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
// Example usage:
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printArrayInReverse(myArray);
console.log(`\n`);
// ===========================================
//Q-7: Write a for loop to find the largest number in an array.
function findMaxNum(arr) {
    return Math.max(...arr);
}
const mixNumbers = [100, 17, 32, 49, 59];
const largestNumber = findMaxNum(myArray);
console.log(`The largest number in the array is: ${largestNumber}\n`);
// ===============================
//Q-8: Write a for loop to find the Lowest number in an array.
function findMin(arr) {
    return Math.min(...arr);
}
const minArray = [23, 46, 36, 96, 3, 30];
const lowestNumber = findMin(myArray);
console.log(`The lowest number in the array is: ${lowestNumber}\n`);
// ======================================
// Q-9:Write a for loop to find a prime number within a range of 1 to 100
// create a function check prime num
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function findPrimesInRange(start, end) {
    const primes = [];
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}
const startRange = 1;
const endRange = 100;
const primeNumbers = findPrimesInRange(startRange, endRange);
console.log("Prime numbers between 1 and 100:");
console.log(primeNumbers.join(", "));
