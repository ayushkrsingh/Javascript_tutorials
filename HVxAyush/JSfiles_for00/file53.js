// Parameter destructuring

// object
// react

const person = {
    fname: "Ayush",
    gender: "Male"
}

// function Details(obj){
//     console.log(obj.fname);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

function Details({fname, gender, age}){     // parameter destructuring
    console.log(fname);
    console.log(gender);
    console.log(age);
}
Details(person);