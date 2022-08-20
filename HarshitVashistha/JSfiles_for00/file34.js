// for in loop in js

const fruits = ["apple", "mango", "grapes", "banana", "melon"];
const fruits2 = [];

for(const fruit in fruits) {
    fruits2.push(fruits[fruit].toUpperCase())
    
}
console.log(fruits2);


// 3:46:40
// btw we use traditional for loop or for of loop