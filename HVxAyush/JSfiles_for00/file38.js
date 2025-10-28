// how to iterate object
const person = {
    name: "Ayush",
    age: 15,
    hobbies: ["coding", "learning", "sleeping"],
    "my cars": ["ferarri", "tesla"]
};

// for in loop
for (const keyu in person) {
    // console.log(`${key} : ${person[key]}`);      //OR
    console.log(keyu, " : ", person[keyu]);
}


// Object.keys
console.log(Object.keys(person));       // gives an array


// for of loop
for(let key of Object.keys(person)){
    console.log(person[key]);
    
}