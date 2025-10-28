// just using hasOwnProperty to check that the key is associated to that object only or not



function CreateUser(firstname, lastname, age, email, address){
    this.fname = firstname;
    this.lname = lastname;
    this.age = age;
    this.email = email;
    this.address = address;
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

for(let key in user1){
    // console.log(key);       // prints all those keys present in the prototype of user1
    // but we do not want keys of prototypes
    if(user1.hasOwnProperty(key)){      // will print only keys persent in user1 object
        console.log(key);
    }
}