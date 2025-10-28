// adding these userMethods to the empty object i.e., prototype given by createUser function

// const userMethods = {
//     about: function(){
//         return `${this.fname} is ${this.age} years old.`
//     },
//     is18: function(){
//         return this.age >= 18;
//     },
//     contact: function(){
//         return  `Contact ${this.fname} on ${this.email}`
//     }
// }




function createUser(firstname, lastname, age, email, address){
    const user = Object.create(createUser.prototype);   // now our __proto__ is set to the prototype of createUser
    user.fname = firstname;
    user.lname = lastname;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}
// console.log(createUser.prototype);  // Yes I have an empty object
// adding methods to prototype
createUser.prototype.about = function(){
    return `${this.fname} is ${this.age} years old.`;
}
createUser.prototype.is18 = function(){
    return this.age >= 18;
}
createUser.prototype.contact = function(){
    return  `Contact ${this.fname} on ${this.email}`;
}
console.log(createUser.prototype);      // now I have the filled prototype with methods


const user1 = createUser("Ayush", "KS", 13, "ayush@gmail.com", "India");
const user2 = createUser("Tom", "Cruise", 30, "tom@gmail.com", "UK");
const user3 = createUser("Tony", "Stark", 23, "ironman@gmail.com", "USA");

console.log(user2);
console.log(user1.is18());  // false coz user1 is 13 years old
console.log(user3.contact());   // now it is working


