// typeof operator

// data types (PRIMITIVE)
// > string 
// > number (3234 ,23, 3.324)
// > booleans
// > undefined
// > null
// > BigInt
// > Symbol

// let age = 44;
// let fname = "Ayush";

// console.log(typeof age);  // number
// console.log(typeof fname);  // string
// console.log(typeof "y3iu3"); //  string


// //###### convert number to string
// // trick
// // console.log(typeof (age + ""));     // num(age) converted to string  $$OR
// age = age + "";                        // --> "44"
// console.log(typeof age);    



// // ###### convert string to number
// // trick
// let mystr = "56";
// mystr = +mystr;         // "56"  --> 56
// console.log(typeof mystr);

//  ^^^^^^^^^^^^^^^    OR     ^^^^^^^^^^^^^^^^
let age = 32;
age = String(age);
console.log(typeof age);
// And VISE_VERSA