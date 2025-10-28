function hello() {
    console.log("Hello World");
}
hello();

// javascript functions ===> act as functions as well as objects

// console.log(hello.name);  //  just print the name of that function  "hello"

// can also add own properties
// hello.property1 = "value1"      // acting as an object
// console.log(hello.property1);   // value1

// functions provide more useful properties
// functions give us an empty object  --->  {}
// this object is known as prototype    <----

console.log(hello.prototype);  //   {}    gives an empty object only one key value pair which is the function itself
// we can use this object
// !!!!!!  only functions provide prototype property  !!!!!!



// prototype is an empty object provided by function whereas __proto__ or [[prototype]] is like an alternate object for fetching out key values from that



// to set key value pairs to prototype object  --->>

// hello.prototype.key1 = "Value1";
// hello.prototype.key2 = "Value2";
// hello.prototype.game = function(){
//     return "Favouriate game is Warzone";
// }
// console.log(hello.prototype);
// console.log(hello.prototype.game());
// hello.prototype.game.prototype.key555 = "unique";   // adding the key value pair of the prototype provided by game function inside the prototype of hello function
// console.log(hello.prototype.game.prototype.key555);
// in this way we can go deeply inside nested function prototypes



// NOW GO TO file82.js AND CONTINUE THE createUser function modification