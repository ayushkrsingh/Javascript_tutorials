// static methods and properties


class Person{
    static classInfo(){
        return `This is can only be accessed by the class itself not by its objects.`;
    }
    static cls_property = "I am a static property";
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get fullname(){ 
    }
    set fullname(fullname){
        const [firstname, lastname] = fullname.split(" ");
        this.firstname = firstname;
        this.lastname = lastname;
    }
    eat(){
        return `${this.firstname} is eating.`;
    }
    is18(){
        return this.age>=18;
    }
}
const person1 = new Person("Ayush", "KS", 18);
console.log(Person.classInfo());   // accessing static method using class name
// console.log(person1.classInfo());   // error: cannot access static method using object of the class
console.log(Person.cls_property);  // accessing static property using class name
console.log(Person);