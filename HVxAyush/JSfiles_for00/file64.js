// fill method
// value, start, end
// also change the original array

// fill the array with -1  ---> [-1, -1, -1]

const myArray = new Array(10).fill(-1);     // array length of 10
console.log(myArray);

const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myArray2.fill(45, 2, 5);   // ending index willbe 1 more than its actual index becoz i will go till that index but do not change that element
console.log(myArray2);