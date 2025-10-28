let numbers = [1,2,3,4,5];
// console.log(Object.getPrototypeOf(numbers));      //it is an Array
console.log(Array.prototype);  


function hello(){
    console.log("Hello World");
}
// hello();
console.log(hello.prototype);   //it is an object
// we can change the datatype of prototypes -----
hello.prototype = [];
console.log(hello.prototype);   //it is an Array now
