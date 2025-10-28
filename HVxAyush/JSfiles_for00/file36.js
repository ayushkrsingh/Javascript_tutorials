// objects  -->  reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

const person = {
    name: "Ayush",
    age: 15,
    hobbies: ["coding", "learning", "sleeping"]
};
console.log(person);

// how to access data from objects
// console.log(person["name"]);

// console.log(person.age);
console.log(person.hobbies[2]);

// how to add key value pair to objects
// person.gender = "male";  //or
person["gender"] = "Male";
console.log(person);
