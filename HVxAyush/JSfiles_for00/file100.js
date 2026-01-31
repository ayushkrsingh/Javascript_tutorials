//  from file92.js to file99.js was just explaination on how JS works and scope and all that,
//  this file (file100.js) contains an example of closures in Javascript.

//Closure Example:


function myFunction(power) {
    return function expo(number) {
        return number ** power;
    }
}
const cube = myFunction(3);
const ans = cube(4);
console.log(ans); // Output: 64