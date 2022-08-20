// How to clone Array
// How to concatenate Arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"]; // bad idea 
// let array2 = array1.slice(0);   // to clone array1, goes from index 0
// let array2 = [].concat(array1)     // adds array1 to an empty array to clone it.
// 
// new way
// spread operator
// let array2 = [...array1];    // commonly used

// concating more arrays together---------
// let array2 = ["item0"].concat(array1);
// let array2 = array1.slice(0).concat("item3", "item4");
// let array2 = [].concat(array1, ["item3", "item4"]);
// let array2 = [...array1, "item3", "item4"];
// or let oneMoreArray
let oneMoreArray = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArray];



array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);

// 3:26:14