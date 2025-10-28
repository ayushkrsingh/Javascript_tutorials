// new keyword

// function createUser(firstname, age) {
//     this.fname = firstname;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     return `Name is ${this.fname} and age is ${this.age}`;
// }
// const user1 = new createUser("Ayush", 15);
// console.log(user1);     // now [[prototype]] of createUser is createUser.prototype
// console.log(user1.about());    // here it will g to the __proto__ of createUser and these it will find the key about which is a function and will call that

// new keyword is doing these three things
// 1,  create empty object  this = {}
// 2,  return this
// 3,  automatically sets the __proto__ of createUser to the prototype of createUser




// Modifying createUser function on which we were previously working at 


function CreateUser(firstname, lastname, age, email, address){
    // const user = Object.create(createUser.prototype);    //  no need because we are now creating objects using new keyword which automatically set thr __proto__ of users to the CreateUser.prototype
    this.fname = firstname;
    this.lname = lastname;
    this.age = age;
    this.email = email;
    this.address = address;
    // return this;     //new keyword automatically return that object

}
CreateUser.prototype.about = function(){
    return `${this.fname} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateUser.prototype.contact = function(){
    return  `Contact ${this.fname} on ${this.email}`;
};

const user1 = new CreateUser("Ayush", "KS", 13, "ayush@gmail.com", "India");
const user2 = new CreateUser("Tom", "Cruise", 30, "tom@gmail.com", "UK");
const user3 = new CreateUser("Tony", "Stark", 23, "ironman@gmail.com", "USA");

console.log(user2);     // now we can see in the browser that [[prototype]] or __proto__ of user2 is set to the createUser.prototype 
console.log(user1.is18());
console.log(user3.contact());

// 10:14



