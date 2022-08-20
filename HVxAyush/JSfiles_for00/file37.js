// difference between dot and bracket notation
const person = {
    name: "Ayush",
    age: 15,
    hobbies: ["coding", "learning", "sleeping"],
    "my cars": ["ferarri", "tesla"]     // space without commas are not allowed
};
console.log(person["my cars"]);

// adding new key and value from other variable
const key = "email";
person[key] = "ayushks070707@gmail.com";
console.log(person);
