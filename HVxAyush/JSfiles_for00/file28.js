// primitive vs reference data types


// primitive
// let num1 = 6;
// let num2 = num1;
// console.log("Value of num1 is", num1);
// console.log("Value of num2 is", num2);
// num1++;
// console.log("Value of num1 is", num1);
// console.log("Value of num2 after incrementing num1 is", num2);


// reference types
// array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("Array1 value =", array1);
console.log("Array2 value =", array2);

array1.push("item3");

console.log("After pushing element to array1");
console.log("Array1 value =", array1);
console.log("Array2 value =", array2);


