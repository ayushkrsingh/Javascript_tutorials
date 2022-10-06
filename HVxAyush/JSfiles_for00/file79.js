// added contact method and will link the userMethods object to user object so that we will not have to write the reference in user object, it will automatically find that method in userMethods object
// now firstly go to file80 then come back to this

const userMethods = {
    about: function(){
        return `${this.fname} is ${this.age} years old.`
    },
    is18: function(){
        return this.age >= 18;
    },
    contact: function(){
        return  `Contact ${this.fname} on ${this.email}`
    }
}

    




function createUser(firstname, lastname, age, email, address){
    const user = Object.create(userMethods);    // it will set the userMethods object as the __proto__ of user object
    user.fname = firstname;
    user.lname = lastname;
    user.age = age;
    user.email = email;
    user.address = address;
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    // user.contact = userMethods.contact;

    return user;
}
const user1 = createUser("Ayush", "KS", 13, "ayush@gmail.com", "India");
const user2 = createUser("Tom", "Cruise", 30, "tom@gmail.com", "UK");
const user3 = createUser("Tony", "Stark", 23, "ironman@gmail.com", "USA");

console.log(user1);     //now each user have a [[prototype]] of userMethods object from where it will access the methods
// console.log(user1.about());
// console.log(user3.contact());


