// getters and setters

class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get fullname(){     // get will help this method to be treated as a property and fullname can be called by using only  person.fullname and not person.fullname()
        return `${this.firstname} ${this.lastname}`;
    }
    set fullname(fullname){
        const [firstname, lastname] = fullname.split(" ");
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
const person1 = new Person("Ayush", "KrSingh", 15);
person1.fullname = "Harshit Malik";     // now person1's firstname and lastname is changed to Harshit Malik respectively
console.log(person1);
// console.log(person1.fullname);
