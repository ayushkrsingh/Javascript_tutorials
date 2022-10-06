
// proto, prototype, class

// const user = {
//     fname: "Ayush",
//     lname: "Kr. Singh",
//     age: 15,
//     email: "ayushks070707@gmail.com",
//     address: "Babhaniyanv, Varanasi, UP",
//     about: function(){
//         return `${this.fname} is ${this.age} years old.`
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }
// console.log(user.about());


// function to create objects
// it will add key value pair to object
// then will return that object

function createUser(firstname, lastname, age, email, address){
    const user = {};
    user.fname = firstname;
    user.lname = lastname;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function(){
        return `${this.fname} is ${this.age} years old.`
    },
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}
const user1 = createUser("Ayush", "KS", 13, "ayush@gmail.com", "India");

console.log(user1);
console.log(user1.is18());  //false
console.log(user1.about());


//  !!!!!!!!!!!!! Now go to file78.js 