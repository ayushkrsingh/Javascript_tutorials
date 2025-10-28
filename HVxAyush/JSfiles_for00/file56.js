// Important Array functions   PART 1


// ###############    1     #####################

// foreach



const numbers = [3, 45, 2, 7];

function myfunc(number, index){
    console.log(`Index is ${index} and Number is ${number}`);
}
for(let i=0; i<numbers.length; i++){
    myfunc(numbers[i], i);
}
//   OR
// numbers.forEach(myfunc);      // will pass number with its index too, like for the fist element, (3, 0) will be passed to myfunc


// Assignment

// Write a function that takes an array of numbers and prints each number multiplied by 2 using forEach.

numbers.forEach(function heyy(number){  // forEach takes a function as an argument, which will be called for each element in the array
    console.log(number*2);
}); 
//
const users = [
    {fname: "Ayush", age: 15},
    {fname: "Tom", age: 14},
    {fname: "Don", age: 12},
    {fname: "Hero", age: 23},
]

users.forEach((user)=>{
    console.log(user.fname);
})
