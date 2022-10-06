// methods can be created more easily like


// complex
// const user1 = {
//     fname: "Ayush",
//     age: 15,
//     about: function (){
//         console.log(this.fname, this.age);
//     }
// }

// simple
const user1 = {
    fname: "Ayush",
    age: 15,
    about(){    //same thing as above object and this is also a method
        console.log(this.fname, this.age);
    }
}
user1.about();  //works fine