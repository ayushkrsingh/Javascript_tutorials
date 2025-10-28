// Important Array functions


// ################    2    ##################

// Map method

const numbers = [3, 4, 6, 9, 1, 0];

// const square = function(number){
//     return number*number;      // only use return in map method
// }
// const sqNumber = numbers.map(square);   //creates a new array containing the returning values of the function..

// %%%  OR

const sqNumber = numbers.map((number)=>{
    return number*number;
})


console.log(sqNumber);


// 6:40

const users = [
    {fname: "Ayush", age: 15},
    {fname: "Tom", age: 14},
    {fname: "Don", age: 12},
    {fname: "Hero", age: 23},
]

// const userName = users.map((user)=>{
//     return user.fname;
// })
// console.log(userName);


// OR


const funcFname = function (user) {
    return user.fname;
}
const arrayFormed = users.map(funcFname);
console.log(arrayFormed)