// For loop in array

let fruits = ["apple", "mango", "grape", "banana"];

// for(let i=0; i<=10; i++){
//     console.log(i);
// }

console.log(fruits.length);
console.log(fruits[2]);
// last index = length of array-1
console.log(fruits[fruits.length-1]);   // last index

// printing values of array using for loop
console.log("\n LOOP STARS HERE!");

// for(let i=0; i<=fruits.length-1; i++){  //or i<fruits.length
//     console.log(fruits[i].toUpperCase());
// }

// new array with uppercase fruits values
let fruits2 = [];
for(let i=0; i<fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);

