// Important Array functions   PART 1


// ###############    1     #####################

// foreach



const numbers = [3, 45, 2, 7];

// function myfunc(number, index){
//     console.log(`Index is ${index} and Number is ${number}`);
// }
// for(let i=0; i<numbers.length; i++){
//     Printele(numbers[i], i);
// }
//   OR
// numbers.forEach(myfunc);      // will pass number with its index too


// Assignment
// numbers.forEach(function(number){
//     console.log(number*2);
// });
const users = [
    {fname: "Ayush", age: 15},
    {fname: "Tom", age: 14},
    {fname: "Don", age: 12},
    {fname: "Hero", age: 23},
]

users.forEach((user)=>{
    console.log(user.fname);
})
