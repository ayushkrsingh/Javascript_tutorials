// array destructuring

let name1 = "Ayush";
const myArray = ["Shane", name1, "Singh"];

// let var1 = myArray[0];
// let var2 = myArray[1];
// console.log(var1, var2);

let [var1, , var2] = myArray;     // also these can be used as normal vars
console.log(var1, var2);
