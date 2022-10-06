// created new object --  userMethods which will store methods so that the methods will not repeat for each user object and we need to only specify the reference in user obj

const userMethods = {
    about: function(){
        return `${this.fname} is ${this.age} years old.`
    },
    is18: function(){
        return this.age >= 18;
    }
}

    




function createUser(firstname, lastname, age, email, address){
    const user = {};
    user.fname = firstname;
    user.lname = lastname;
    user.age = age;
    user.email = email;
    user.address = address;
    // the below methods are repeating for every object so put the address of these methods obly here

    // user.about = function(){
    //     return `${this.fname} is ${this.age} years old.`
    // },
    // user.is18 = function(){
    //     return this.age >= 18;
    // }

    // use like this;  now we are not directly writing that functions, we are writing its reference
    user.about = userMethods.about;
    user.is18 = userMethods.is18;


    return user;
}
const user1 = createUser("Ayush", "KS", 13, "ayush@gmail.com", "India");
const user2 = createUser("Tom", "Cruise", 30, "tom@gmail.com", "UK");
const user3 = createUser("Tony", "Stark", 23, "ironman@gmail.com", "USA");

console.log(user1);
console.log(user3.is18());  //true
console.log(user1.about());



//  !!!!!!!!!!!!! Now go to file79.js then come back to this
