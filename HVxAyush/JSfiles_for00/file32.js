//  while loop in array
const fruits = ["apple", "mango", "grapes", "banana"];
const fruits2 = [];
let i = 0;
while(i<fruits.length){
    console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i] + 2); 
    i++;
}
console.log(fruits2);  //['apple2', 'mango2', 'grapes2', 'banana2']
