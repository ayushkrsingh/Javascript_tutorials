// call, apply ,bind

function about(hobby, spinner){
    console.log(this.fname, this.age, hobby, spinner);
}

const user1 = {
    fname: "Ayush",
    age: 15, 
    // about: function(hobby, spinner){
    //     console.log(this.fname, this.age, hobby, spinner);
    // }
}
const user2 = {
    fname: "Harshit",
    age: 25,
    // we have to use about method of user1 for user2 to print fname and age of user2
}

// user1.about("Spinning", "ryzel");  // will simply print user1 fname, age and hobby, spinner
// user1.about.call(user2, "NOTspinning"); // u need to specify the object name inside bracket of which u want to print fname and age
// about.call(user2, "NOTspinning", "nobody"); 
// will print undefined at the place of which the parameter of that function is not defined
// user1.about.call(); // undefined undefined beacuse the object to be used is not specified


// apply
// about.apply(user1, ["penfight", "ryzing"]);  // value for parameters is inside a separate array


// bind
const myfunc = about.bind(user2, "penfight", "nootNoot");   // bind returns a function
myfunc();
