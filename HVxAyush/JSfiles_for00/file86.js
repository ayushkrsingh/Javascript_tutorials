// class keyword
// classes are fake


class CreateUser{
    constructor(firstname, lastname, age, email, address){
        // console.log("Inside constructor");      // this cannot be called if new keyword when creating a user is not used
        this.fname = firstname;
        this.lname = lastname;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    
    about(){
        return `${this.fname} is ${this.age} years old.`;
    };
    is18(){
        return this.age >= 18;
    };
    contact(){
        return  `Contact ${this.fname} on ${this.email}`;
    };
}

const user1 = new CreateUser("Ayush", "KS", 13, "ayush@gmail.com", "India");
const user2 = new CreateUser("Tom", "Cruise", 30, "tom@gmail.com", "UK");
const user3 = new CreateUser("Tony", "Stark", 23, "ironman@gmail.com", "USA");

// console.log(user1.fname);
// console.log(user3.is18());
// console.log(user2);

// console.log(user1.__proto__);
console.log(Object.getPrototypeOf(user1));
