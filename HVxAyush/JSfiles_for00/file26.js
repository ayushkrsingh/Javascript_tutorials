//  intro to arrays
//  reference type


let array = ["Ayush", 32, 65.985, null, true, 0, undefined];
console.log(array);

let fruits = ["Apples", "Mangoes", "Grapes", "Bananas", ];
let obj = {};       // object literal
// console.log(fruits[2]);
// console.log(fruits);
// fruits[1] = "Melon";    // Mangoes changed to Melon
// console.log(fruits);
console.log(typeof fruits);     // object
console.log(typeof obj);    // object
console.log(Array.isArray(fruits)); // true   --> this is an array
console.log(Array.isArray(obj));    // false  --> this is not an array so false




//  array indexing