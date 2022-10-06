const obj1 = {
    key1: "value1",
    key2: "value2"
}
// const obj2 = {
//     key3: "value1"
// }
console.log(obj1.key2);
// console.log(obj2.key1);     // undefined because there is no key1 in obj2

// but we want that if obj2 have not key1 then it should check in obj1 that is alternet object for obj2 and if there it finds key1 then it will print the value 
// soo

// we can create object in this way too
// const obj2 = {};
// obj2.key3 = "value3";
// console.log(obj2.key3);



// one more way to create object

const obj2 = Object.create(obj1);   // {}    but now there is a link between obj1 and obj2
// now obj1 is set as the proto of obj2
console.log(obj2);
obj2.key3 = "value3";   // we can also add key value pairs to obj2
console.log(obj2.key3);
console.log(obj2.key2);     // there is no key2 in obj2 but still it is printing value2 because it will check in obj1 that if there is any key2

console.log(obj2.__proto__);    // obj1 is the proto of obj2



// [[prototype]]  and   __proto__    is same
// prototype is completely different from these



// NOW GO TO file79.js and add this feature to that createuser function


