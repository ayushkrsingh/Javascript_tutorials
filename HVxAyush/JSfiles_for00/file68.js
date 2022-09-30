// Maps
// Map is iterable
// stores data in ordered fashion
// store key value pair (like objects)
// duplicate keys are NOT allowed..

// difference between maps and objects

// objects can only have string or symbol as keys
// but
// in maps, you can use anything as key
// like number, array, string...



// object literal
// key ---> mostly of string


// const person = {
//     firstName: "Ayush", 
//     age: 15,
//     1: "one"
// }
// console.log(person.firstName);
// console.log(person["firstName"]);

// console.log(person['1']);
// for(let key in person){
//     console.log(typeof key);
// }



// Now map

const person = new Map();
person.set('firstName', 'Ayush');
person.set('age', 1);
person.set(1, 'one');   // here 1 will remain as number unlike in objects which converts all into strings
// person.set([2,4,6], "evenNums");
// console.log(person);
// console.log(person['firstName']);     // undefined
// console.log(person.get('firstName'));
// console.log(person.get(1));

// console.log(person.keys());
// for(let key of person.keys()){      // print all keys
//     console.log(key, typeof key);
// }

// console.log("For setting array as a key in maps");
// let a = new Map();
// let key = ['x', 'y'];       // key should be a separate variable
// a.set(key, "variables");
// console.log(a.get(key));


// for(let key of person){
//     console.log(key);   // array of key and values
//     // console.log(Array.isArray(key));    // true in each case
// }
// // destructured  --
// for(let [key, value] of person){
//     console.log(key, value);
// }


const person2 = new Map([['fname', 'Ayush'], ['age', 15]])
console.log(person2);

const person3 = {
    id: 1,
    fname: "Tom"
}
const person4 = {
    id: 2,
    fname: "Jerry"
}

const extraInfo = new Map();
extraInfo.set(person3, {age: 10, gender: "Male"});
extraInfo.set(person4, {age: 7, gender: "Female"});
console.log(extraInfo);

// uses
console.log(person3.fname);
console.log(extraInfo.get(person3));
console.log(extraInfo.get(person3).gender);
console.log(extraInfo.get(person4).age);