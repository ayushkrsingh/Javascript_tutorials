// methods are the function inside objects
// this keyword inside an object anywhere represents the whole object itself..



// const person = {
//     fname: "Ayush",
//     age: 15,
//     about: function(){
//         // console.log("Name is Ayush, Age is 15");  // but what if I change the fname above!!!
//         // console.log(`Name is ${fname}, Age is ${age}`);  // ERROR-- fname is not defined
//         // soo, use--  this keyword,,
//         // console.log(this);  // will print the whole object coz this represents the object
//         console.log(`Name is ${this.fname}, Age is ${this.age}`);  // will work well because this keyword means the object person here

//     }
// }
// // console.log(person.about);  // function will be printed as it is
// person.about();     // this will call the function in person.about



//  $$$$$$  real life example   ######




function aboutPerson(){
    console.log(`Person name is ${this.firstname} and person age is ${this.age}`);
}
// now this function can be used in any of the objects below to print persons' firstname and age
// ->

const person1 = {
    firstname: "Ayush",
    age: 15,
    about: aboutPerson  // here aboutperson will represent the function declared above as it is
}

const person2 = {
    firstname: "Tom",
    age: 10,
    about: aboutPerson  // here aboutperson will represent the function declared above as it is
}

const person3 = {
    firstname: "Duro",
    age: 13,
    about: aboutPerson  // here aboutperson will represent the function declared above as it is
}


person1.about();    // will give the info about person1
person2.about();    // will give the info about person2
person3.about();    // will give the info about person3





