// Filter Method

const numbers = [1,2,3,4,5,6,7,8,9];

// const isEven = function(number){
//     return number%2===0;       ///  Should always return a boolean type
// }
// const evennums = numbers.filter(isEven);

// %%%%%   OR

const evenNums = numbers.filter((number)=>{
    return number%2===0;
})

console.log(evenNums);  //creates a new array containing the returning values of the function..



// const evennums = numbers.filter(function(number){       //it can also be a function expression, not always the arrow function like the upper one
//     return number%2 === 0;
// })
// console.log(evennums);