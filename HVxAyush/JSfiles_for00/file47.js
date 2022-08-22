// Hoisting 

hello();      // This will WORK (in the case of function declaration)
function hello(){
    console.log("Hello World");
}

// hello();        // this will NOT WORK (in the case of function expression)
// const hello = function(){
//     console.log("Hello world");
    
// }



// console.log(hello2);    // undefined (in the case of var)
// var hello2 = "Hello World";


console.log(hello2);    // Error (in the case of var)
let hello2 = "Hello World";
